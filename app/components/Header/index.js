import React, { useState } from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { FormattedMessage } from 'react-intl';

import { useMediaQuery } from 'react-responsive';

import IconNav from 'images/icon-nav-trigger.svg';
import CloseNav from 'images/icon-close.svg';

import { Flex, Box } from 'rebass';

import { FastlabIconDesktop, FastlabIconMobile } from './FastlabIcon';

import { HeaderLink } from './HeaderLink';
import messages from './messages';

import { DesktopLaptopStyles, TabletMobileStyles } from './MenuStyles';

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const closeMenu = () => setMenuOpened(false);
  const handleStateChange = state => setMenuOpened(state.isOpen);

  const StyledLine = styled.hr`
    position: absolute;
    color: #707070;
    top: 106px;
    width: 100%;
    outline: none;
  `;

  return (
    <React.Fragment>
      {isTabletMobile ? <FastlabIconMobile /> : <FastlabIconDesktop />}
      <Menu
        right
        width={isTabletMobile ? '100%' : '600px'}
        isOpen={menuOpened}
        onStateChange={state => handleStateChange(state)}
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        customBurgerIcon={
          <img
            style={{
              position: 'absolute',
              right: 26,
              top: 26,
            }}
            width="56"
            height="56"
            src={IconNav}
            alt="nav"
          />
        }
        customCrossIcon={
          <img width="36" height="36" src={CloseNav} alt="nav" />
        }
        styles={isTabletMobile ? TabletMobileStyles : DesktopLaptopStyles}
      >
        <StyledLine />
        <Flex
          flexDirection="column"
          sx={{
            padding: '110px 0px 0px 0px',
            width: '100%',
            height: '100vh',
          }}
        >
          <Box>
            <HeaderLink
              to="/"
              link={<FormattedMessage {...messages.home} />}
              linkDetails={<FormattedMessage {...messages.homeDetails} />}
              onClick={closeMenu}
              isTabletMobile={isTabletMobile}
            />
            <HeaderLink
              to="/about"
              link={<FormattedMessage {...messages.about} />}
              linkDetails={<FormattedMessage {...messages.aboutDetails} />}
              onClick={closeMenu}
              isTabletMobile={isTabletMobile}
            />
            <HeaderLink
              to="/projects"
              link={<FormattedMessage {...messages.projects} />}
              linkDetails={<FormattedMessage {...messages.projectsDetails} />}
              onClick={closeMenu}
              isTabletMobile={isTabletMobile}
            />
            <HeaderLink
              to="/updates"
              link={<FormattedMessage {...messages.updates} />}
              linkDetails={<FormattedMessage {...messages.updatesDetails} />}
              onClick={closeMenu}
              isTabletMobile={isTabletMobile}
            />
            <HeaderLink
              to="/areas"
              link={<FormattedMessage {...messages.areas} />}
              linkDetails={<FormattedMessage {...messages.areasDetails} />}
              onClick={closeMenu}
              isTabletMobile={isTabletMobile}
            />
            <HeaderLink
              to="/exhibits"
              link={<FormattedMessage {...messages.exhibits} />}
              linkDetails={<FormattedMessage {...messages.exhibitsDetails} />}
              onClick={closeMenu}
              isTabletMobile={isTabletMobile}
            />
            <HeaderLink
              to="/programs"
              link={<FormattedMessage {...messages.programs} />}
              linkDetails={<FormattedMessage {...messages.programsDetails} />}
              onClick={closeMenu}
              isTabletMobile={isTabletMobile}
            />
            <HeaderLink
              to="/contact"
              link={<FormattedMessage {...messages.contact} />}
              linkDetails={<FormattedMessage {...messages.contactDetails} />}
              onClick={closeMenu}
              isTabletMobile={isTabletMobile}
            />
          </Box>
        </Flex>
      </Menu>
    </React.Fragment>
  );
}

export default Header;
