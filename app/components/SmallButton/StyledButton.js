import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CustomButton from './CustomButton';
import CustomAnimation from './CustomAnimation';

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

  return (
    <CustomButton
      onMouseOver={() => setHoverState(true)}
      onFocus={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      background={background}
      active={active}
      style={CustomAnimation({ hoverState, shadow })}
    >
      {children}
    </CustomButton>
  );
}

StyledButton.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
};

export default StyledButton;
