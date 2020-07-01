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

function SmallButton({ to, color, onClick, selection, item }) {
  const active = selection === item.value || selection === 'All';
  const button = (
    <Link style={{ textDecoration: 'none' }} to={to} onClick={onClick}>
      <StyledButton
        color={color}
        selection={selection}
        item={item}
        active={active}
      >
        {item.label || 'All'}
      </StyledButton>
    </Link>
  );

  return button;
}

SmallButton.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  selection: PropTypes.string,
  item: PropTypes.object,
};

export default SmallButton;
