import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'rebass';
import { CustomButton } from './CustomButton';
import { CustomAnimation } from './CustomAnimation';

const StyledButton = ({ children, color, arrow }) => {
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

  const [hoverState, setHoverState] = useState(false);

  const resetState = () => {
    setHoverState(false);
  };

  useEffect(() => {
    resetState();
    return () => {
      resetState();
    };
  }, [() => setHoverState(false)]);

  return (
    <CustomButton
      onMouseOver={() => setHoverState(true)}
      onFocus={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      background={background}
      style={CustomAnimation({ hoverState, shadow })}
    >
      {arrow === 'left' && (
        <Text pr={3} color={foreground}>
          &lsaquo;
        </Text>
      )}
      {children}
      {arrow === 'right' && (
        <Text pl={3} color={foreground}>
          &rsaquo;
        </Text>
      )}
    </CustomButton>
  );
};

StyledButton.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  arrow: PropTypes.string,
};

export default StyledButton;
