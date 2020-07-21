import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './StyledLink';

export const FooterLink = forwardRef((props, ref) => (
  <StyledLink ref={ref} to={props.to} onClick={props.onClick}>
    {props.children}
  </StyledLink>
));

FooterLink.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
