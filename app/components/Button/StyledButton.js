import React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'rebass';

import styled from 'styled-components';

const StyledButton = ({ children, color }) => {
  let shadow;
  let background;
  let foreground;

  if (color === 'dark') {
    shadow = 'rgba(0, 0, 0, 1)';
    background = '#151417';
    foreground = '#0FF48D';
  }

  if (color === 'pink') {
    shadow = 'rgba(204, 20, 63, 1)';
    background = '#EC184A';
    foreground = '#151417';
  }

  if (color === 'white') {
    shadow = 'rgba(0, 0, 0, 1)';
    background = '#FFFFFF';
    foreground = '#EC184A';
  }

  const CustomButton = styled.button`
    display: inline-flex;
    width: auto;
    height: 80px;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    cursor: pointer;
    font-family: 'jetbrains-bold', sans-serif;
    font-weight: bold;
    font-size: 17px;
    color: white;
    border-radius: 40px;
    background: ${background};
    border: 0px;
    padding: 0px 30px 0px 30px;

    &:hover {
      background: ${background};
      color: #ffffff;
      box-shadow: -10px -10px 40px rgba(255, 255, 255, 0.2),
        10px 10px 40px ${shadow};
    }

    &:active {
      background: ${background};
      color: #ffffff;
    }
  `;

  return (
    <CustomButton>
      {children}
      <Text pl={3} color={foreground}>
        &rsaquo;
      </Text>
    </CustomButton>
  );
};

StyledButton.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
};

export default StyledButton;
