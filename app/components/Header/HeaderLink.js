import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Text } from 'rebass';

import { useSpring, animated as a } from 'react-spring';

export const HeaderLink = ({ to, onClick, link, linkDetails }) => {
  const [hoverState, setHoverState] = useState(false);

  const CustomAnimation = useSpring({
    minHeight: !hoverState ? 140 : 250,
    maxHeight: !hoverState ? 140 : 250,
    background: !hoverState ? '#151417' : '#EC184A',
    justifyContent: !hoverState ? 'flex-start' : 'center',
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
  `;

  const LinkText = styled(Text)`
    font-family: 'archia', sans-serif;
    font-size: 50px;
    line-height: 100px;
  `;

  const LinkDetails = styled(Text)`
    font-family: 'archia', sans-serif;
    font-size: 18px;
    line-height: 22px;
  `;

  return (
    <StyledLink to={to} onClick={onClick}>
      <AnimatedBox
        onMouseOver={() => setHoverState(true)}
        onFocus={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
        style={CustomAnimation}
      >
        <LinkText p="20px 0px 20px 35px">{link}</LinkText>
        <LinkDetails p="0px 0px 20px 35px">{linkDetails}</LinkDetails>
      </AnimatedBox>
    </StyledLink>
  );
};

HeaderLink.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.object,
  linkDetails: PropTypes.object,
};
