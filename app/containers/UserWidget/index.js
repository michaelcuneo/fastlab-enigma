import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MediaQuery from 'react-responsive';
import { createStructuredSelector } from 'reselect';

import Popover from 'react-popover';
import UserBadge from 'components/UserBadge';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Box } from 'rebass';

import { Auth } from 'aws-amplify';

import { makeSelectUser } from 'containers/User/selectors';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserName, UserNameMobile } from './UserName';
import { UserArea, UserAreaMobile } from './UserArea';
import { DropDown, DropDownButton, DropDownContent } from './Dropdown';
import {
  SignOutDiv,
  SignOutText,
  SignOutIcon,
  SignOutDivMobile,
} from './SignOutDiv';

import { makeSelectMode } from '../App/selectors';

function UserWidget({ user, mode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    Auth.signOut();
  };

  const PopoverBody = () => (
    <DropDownContent mode={mode} key="Dropdown Content">
      <SignOutDiv
        role="link"
        tabIndex={0}
        onMouseDown={handleSignOut}
        onKeyDown={handleSignOut}
      >
        <SignOutText mode={mode}>Sign Out</SignOutText>
        <SignOutIcon>
          <FontAwesomeIcon
            color={mode ? '#ffffff' : '#ec184a'}
            icon={faSignOutAlt}
          />
        </SignOutIcon>
      </SignOutDiv>
    </DropDownContent>
  );

  if (user) {
    return [
      <MediaQuery key="widgetDesktop" minWidth={992}>
        {matches => {
          if (matches) {
            return [
              <UserArea mode={mode} key="userArea">
                <UserBadge mode={mode} key="userBadge" picture={user.picture} />
                <UserName key="userName">{user.username} </UserName>
                <DropDown>
                  <Popover
                    style={{ zIndex: '2' }}
                    tipSize={7}
                    body={PopoverBody(mode)}
                    place="below"
                    isOpen={isOpen}
                    onOuterAction={() => setIsOpen(false)}
                  >
                    <DropDownButton
                      onMouseDown={() => setIsOpen(true)}
                      onFocus={() => setIsOpen(false)}
                      mode={mode}
                    />
                  </Popover>
                </DropDown>
              </UserArea>,
            ];
          }
          if (!matches) {
            return [
              <UserAreaMobile key="userArea">
                <Box>
                  <SignOutDivMobile
                    role="link"
                    tabIndex={0}
                    onClick={handleSignOut}
                    onKeyDown={handleSignOut}
                  >
                    Sign Out
                  </SignOutDivMobile>
                </Box>
                <Box>
                  <UserNameMobile>{user.username}</UserNameMobile>
                  <UserBadge mode={mode} picture={user.picture} />
                </Box>
              </UserAreaMobile>,
            ];
          }
          return null;
        }}
      </MediaQuery>,
    ];
  }
  return null;
}

UserWidget.propTypes = {
  user: PropTypes.object,
  mode: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  mode: makeSelectMode(),
  user: makeSelectUser(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(UserWidget);
