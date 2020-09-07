import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Popover from 'react-popover';

import { Flex, Box } from 'rebass';

import { StyledMenu } from './StyledMenu';
import { StyledText } from './StyledText';
import { DropdownText } from './DropdownText';

const CurrentMenuItem = ({ onClick, menuItems, currentMenuItem }) => (
  <Box width="100%" height="auto">
    <StyledText
      onClick={onClick}
      currentMenuItem={currentMenuItem}
      menuItems={menuItems}
    >
      {menuItems[currentMenuItem].title}
    </StyledText>
  </Box>
);

CurrentMenuItem.propTypes = {
  onClick: PropTypes.func,
  menuItems: PropTypes.array,
  currentMenuItem: PropTypes.number,
};

const MenuItem = ({ onClick, item }) => (
  <DropdownText onClick={onClick}>{item.title}</DropdownText>
);

MenuItem.propTypes = {
  onClick: PropTypes.func,
  item: PropTypes.object,
};

const PopoverBody = ({ menuItems, setCurrentMenuItem, setOpen }) => (
  <Flex
    flexDirection="column"
    width="100%"
    minWidth="100%"
    sx={{
      width: '100%',
      minWidth: '100%',
      position: 'relative',
      background: '#151417',
      border: '1px solid #707070',
      borderRadius: '40px',
      zIndex: 999999,
    }}
  >
    {menuItems.map(item => (
      <MenuItem
        key={item.id}
        item={item}
        onClick={() => {
          setCurrentMenuItem(item.id);
          setOpen(false);
        }}
      />
    ))}
  </Flex>
);

PopoverBody.propTypes = {
  menuItems: PropTypes.array,
  setOpen: PropTypes.func,
  setCurrentMenuItem: PropTypes.func,
};

const TopMenu = ({ menuItems, setCurrentMenuItem, currentMenuItem }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledMenu>
      <Popover
        body={PopoverBody({ menuItems, setCurrentMenuItem, setOpen })}
        place="below"
        preferPlace="column"
        isOpen={isOpen}
        onOuterAction={() => setOpen(!isOpen)}
      >
        <CurrentMenuItem
          menuItems={menuItems}
          currentMenuItem={currentMenuItem}
          onClick={() => setOpen(!isOpen)}
        />
      </Popover>
    </StyledMenu>
  );
};

TopMenu.propTypes = {
  menuItems: PropTypes.array,
  setCurrentMenuItem: PropTypes.func,
  currentMenuItem: PropTypes.number,
};

export default TopMenu;
