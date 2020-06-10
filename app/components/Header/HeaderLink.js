import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Text } from 'rebass';

import { useSpring, animated as a } from 'react-spring';

export const HeaderLink = ({ to, onClick, link, linkDetails, small }) => {
  const [hoverState, setHoverState] = useState(false);

  const resetState = () => {
    setHoverState(false);
  };

  useEffect(() => {
    resetState();
  }, []);

  const CustomAnimation = useSpring({
    minHeight: !hoverState ? 110 : 250,
    maxHeight: !hoverState ? 110 : 250,
    background: !hoverState ? '#151417' : '#EC184A',
  });

  const CustomHideAnimation = useSpring({
    display: !hoverState ? 'none' : 'flex',
  });

  const CustomDetailAnimation = useSpring({
    display: !hoverState ? 'none' : 'flex',
  });

  const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    outline: 0;
    color: white;
  `;

  const AnimatedBox = styled(a.div)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0px 0px 0px 35px;
    justify-content: center;
  `;

  const LinkText = styled(Text)`
    font-family: 'archia', sans-serif;
    font-size: 50px;
    line-height: 100px;
  `;

  const LinkTextSmall = styled(Text)`
    font-family: 'archia', sans-serif;
    font-size: 18px;
    line-height: 25px;
  `;

  const LinkDetails = styled(a.div)`
    font-family: 'archia', sans-serif;
    font-size: 18px;
    line-height: 22px;
  `;

  const LinkArrow = styled(a.div)`
    position: absolute;
    right: 0;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 0px 20px 0px 0px;
  `;

  return (
    <StyledLink
      onMouseOver={() => setHoverState(true)}
      onFocus={() => {}}
      onMouseLeave={() => setHoverState(false)}
      to={to}
      onClick={onClick}
    >
      <AnimatedBox style={CustomAnimation}>
        {small ? (
          <LinkTextSmall>{link}</LinkTextSmall>
        ) : (
          <LinkText>{link}</LinkText>
        )}
        <LinkDetails style={CustomDetailAnimation}>{linkDetails}</LinkDetails>
        <LinkArrow style={CustomHideAnimation}>
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
  small: PropTypes.bool,
};

export const LoginLink = ({ to, onClick, link }) => {
  const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    outline: 0;
    color: white;
  `;

  const LinkTextSmall = styled(Text)`
    font-family: 'archia', sans-serif;
    font-size: 18px;
    line-height: 25px;
  `;

  return (
    <StyledLink to={to} onClick={onClick}>
      <LinkTextSmall>{link}</LinkTextSmall>
    </StyledLink>
  );
};

LoginLink.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.object,
};
