import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box, Text } from 'rebass';

const MenuItem = ({ py, onClick, item, currentMenuItem }) => {
  const StyledText = styled(Text)`
    font-family: 'jetbrains-bold', sans-serif;
    font-size: 20px;
    line-size: 25px;
    color: ${currentMenuItem === item.id ? '#0FF48D' : 'white'};
  `;

  return (
    <StyledText py={py} onClick={onClick}>
      {item.title}
    </StyledText>
  );
};

MenuItem.propTypes = {
  py: PropTypes.string,
  onClick: PropTypes.func,
  item: PropTypes.object,
  currentMenuItem: PropTypes.number,
};

const SideMenu = ({
  width,
  menuItems,
  setCurrentMenuItem,
  currentMenuItem,
}) => {
  const containerWidth = width * 0.2073;

  const StyledMenu = styled(Box)`
    background: #151417;
    border: 1px solid #707070;
    border-radius: 40px;
    z-index: 9999;
  `;

  return (
    <StyledMenu
      px={width * 0.0182}
      minWidth={containerWidth}
      height="auto"
      py="50px"
    >
      {menuItems.map(item => (
        <MenuItem
          key={item.id}
          currentMenuItem={currentMenuItem}
          py="12.5px"
          onClick={() => setCurrentMenuItem(item.id)}
          item={item}
        />
      ))}
    </StyledMenu>
  );
};

SideMenu.propTypes = {
  width: PropTypes.number,
  menuItems: PropTypes.array,
  setCurrentMenuItem: PropTypes.func,
  currentMenuItem: PropTypes.number,
};

export default SideMenu;
