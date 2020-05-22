/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import StyledButton from './StyledButton';

function Button({ to, children, color }) {
  const button = (
    <Link style={{ textDecoration: 'none' }} to={to}>
      <StyledButton color={color}>{children}</StyledButton>
    </Link>
  );

  return button;
}

Button.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
