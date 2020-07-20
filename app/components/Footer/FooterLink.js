import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './StyledLink';

export const FooterLink = ({ to, children, onClick }) => (
  <StyledLink to={to} onClick={onClick}>
    {children}
  </StyledLink>
);

FooterLink.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
