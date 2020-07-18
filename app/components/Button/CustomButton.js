import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated as a } from 'react-spring';

export const CustomButton = ({
  style,
  onMouseOver,
  onFocus,
  onMouseLeave,
  background,
  children,
}) => {
  const Button = styled(a.button)`
    display: flex;
    position: relative;
    align-items: center;
    width: auto;
    height: 80px;
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
    outline: none;
    z-index: 3;
  `;

  return (
    <Button
      style={style}
      onMouseOver={onMouseOver}
      onFocus={onFocus}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  style: PropTypes.object,
  onMouseOver: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseLeave: PropTypes.func,
  background: PropTypes.string,
  children: PropTypes.node,
};
