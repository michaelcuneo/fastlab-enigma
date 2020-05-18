/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

function Button({ onClick, to, children, color }) {
  const button = (
    <Link style={{ textDecoration: 'none' }} to={to} onClick={onClick}>
      <StyledButton color={color}>{Children.toArray(children)}</StyledButton>
    </Link>
  );

  return <Wrapper>{button}</Wrapper>;
}

Button.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
