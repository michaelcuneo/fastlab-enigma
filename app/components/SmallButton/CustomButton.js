import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { animated as a } from 'react-spring';

export const CustomButton = ({ background, active, children }) => {
  const StyledButton = styled(a.button)`
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
    color: ${active ? 'white' : 'green'};
    z-index: 3;
  `;

  return <StyledButton>{children}</StyledButton>;
};

CustomButton.propTypes = {
  background: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.node,
};
