import React from 'react';
import PropTypes from 'prop-types';

import useWindowDimensions from 'utils/getWindowDimensions';

import { StyledMenu } from './StyledMenu';
import { StyledText } from './StyledText';

const MenuItem = ({ py, onClick, item, currentMenuItem }) => (
  <StyledText
    py={py}
    onClick={onClick}
    currentMenuItem={currentMenuItem}
    item={item}
  >
    {item.title}
  </StyledText>
);

MenuItem.propTypes = {
  py: PropTypes.string,
  onClick: PropTypes.func,
  item: PropTypes.object,
  currentMenuItem: PropTypes.number,
};

const SideMenu = ({ menuItems, setCurrentMenuItem, currentMenuItem }) => {
  const { width } = useWindowDimensions();

  const containerWidth = width * 0.2073;

  return (
    <StyledMenu
      px={width * 0.0182}
      minWidth={containerWidth}
      maxWidth={containerWidth}
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
  menuItems: PropTypes.array,
  setCurrentMenuItem: PropTypes.func,
  currentMenuItem: PropTypes.number,
};

export default SideMenu;
