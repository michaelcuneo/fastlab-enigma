import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterLink = ({ to, children, onClick }) => {
  const StyledLink = styled(Link)`
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    user-select: none;
    cursor: pointer;
    outline: 0;
    font-family: 'jetbrains-medium', sans-serif;
    font-size: 17px;
    color: white;
  `;

  return (
    <StyledLink to={to} onClick={onClick}>
      {children}
    </StyledLink>
  );
};

FooterLink.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
