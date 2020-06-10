import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useSpring, animated as a } from 'react-spring';

import styled from 'styled-components';

function StyledButton({ children, color, active }) {
  let shadow;
  let background;

  if (color === 'dark') {
    shadow = 'rgba(0, 0, 0, 1)';
    background = '#151417';
  }

  if (color === 'pink') {
    shadow = 'rgba(204, 20, 63, 1)';
    background = '#EC184A';
  }

  if (color === 'white') {
    shadow = 'rgba(0, 0, 0, 1)';
    background = '#FFFFFF';
  }

  const [hoverState, setHoverState] = useState(false);
  const CustomAnimation = useSpring({
    boxShadow: !hoverState
      ? `0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)`
      : `-10px -10px 40px rgba(255, 255, 255, 0.1), 10px 10px 40px ${shadow}`,
  });

  const CustomButton = styled(a.button)`
    display: inline-flex;
    align-content: center;
    align-items: center;
    width: auto;
    height: 50px;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    cursor: pointer;
    font-family: 'jetbrains-bold', sans-serif;
    font-size: 17px;
    color: white;
    border-radius: 40px;
    background: ${background};
    border: 0px;
    padding: 0px 30px 0px 30px;
    z-index: 999999;
    color: ${active ? 'white' : 'green'};
  `;

  return (
    <CustomButton
      onMouseOver={() => setHoverState(true)}
      onFocus={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      style={CustomAnimation}
    >
      {children}
    </CustomButton>
  );
}

StyledButton.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.object,
};

export default StyledButton;
