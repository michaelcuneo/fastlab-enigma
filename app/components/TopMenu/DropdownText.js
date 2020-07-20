import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'rebass';

export const DropdownText = ({ children, onClick }) => {
  const Styled = styled(Text)`
    font-family: 'jetbrains-bold', sans-serif;
    font-size: 15px;
    line-size: 20px;
    color: #0ff48d;
  `;

  return (
    <Styled onClick={onClick} py="15px">
      {children}
    </Styled>
  );
};

DropdownText.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
