import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Flex } from 'rebass';

import { AnimatedBox } from './AnimatedBox';
import { StyledLink } from './StyledLink';
import { LinkText } from './LinkText';
import { LinkDetails } from './LinkDetails';
import { LinkArrow } from './LinkArrow';

import {
  CustomAnimation,
  CustomDetailAnimation,
  CustomHideAnimation,
} from './CustomAnimation';

export const HeaderLink = ({
  to,
  onClick,
  link,
  linkDetails,
  isTabletMobile,
}) => {
  const [hoverState, setHoverState] = useState(false);

  const resetState = () => {
    setHoverState(false);
  };

  useEffect(() => {
    resetState();
    return () => {
      resetState();
    };
  }, []);

  return isTabletMobile ? (
    <StyledLink to={to} onClick={onClick}>
      <AnimatedBox>
        <LinkText
          fontSize={['40px', '40px', '40px']}
          lineHeight={['80px', '80px', '80px']}
        >
          {link}
        </LinkText>
        <LinkArrow>
          <FontAwesomeIcon icon="angle-right" size="3x" />
        </LinkArrow>
      </AnimatedBox>
    </StyledLink>
  ) : (
    <StyledLink
      onMouseOver={() => setHoverState(true)}
      onFocus={() => {}}
      onMouseLeave={() => setHoverState(false)}
      to={to}
      onClick={onClick}
    >
      <AnimatedBox style={CustomAnimation(hoverState)}>
        <Flex
          sx={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <LinkText>{link}</LinkText>
          <LinkDetails style={CustomDetailAnimation(hoverState)}>
            {linkDetails}
          </LinkDetails>
        </Flex>
        <LinkArrow style={CustomHideAnimation(hoverState)}>
          <FontAwesomeIcon icon="angle-right" size="3x" />
        </LinkArrow>
      </AnimatedBox>
    </StyledLink>
  );
};

HeaderLink.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.object,
  linkDetails: PropTypes.object,
  isTabletMobile: PropTypes.bool,
};

export default HeaderLink;
