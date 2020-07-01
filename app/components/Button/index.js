import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import StyledButton from './StyledButton';

function Button({ to, children, color, onClick, arrow }) {
  const button = (
    <Link style={{ textDecoration: 'none' }} to={to} onClick={onClick}>
      <StyledButton arrow={arrow} color={color}>
        {children}
      </StyledButton>
    </Link>
  );

  return button;
}

Button.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  arrow: PropTypes.string,
};

export default Button;
