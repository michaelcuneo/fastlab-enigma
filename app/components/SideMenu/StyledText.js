import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'rebass';

export const StyledText = ({
  currentMenuItem,
  item,
  children,
  onClick,
  py,
}) => {
  const Styled = styled(Text)`
    font-family: 'jetbrains-bold', sans-serif;
    font-size: 20px;
    line-size: 25px;
    color: ${currentMenuItem === item.id ? '#0FF48D' : 'white'};
  `;

  return (
    <Styled onClick={onClick} py={py}>
      {children}
    </Styled>
  );
};

StyledText.propTypes = {
  currentMenuItem: PropTypes.number,
  item: PropTypes.object,
  children: PropTypes.node,
  onClick: PropTypes.func,
  py: PropTypes.string,
};
