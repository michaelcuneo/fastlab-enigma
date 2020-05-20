import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLink = ({ to, children, mobile, onClick }) => {
  const StyledLink = styled(Link)`
    display: inline-flex;
    width: 100%;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    user-select: none;
    cursor: pointer;
    outline: 0;
    font-family: 'archiaregular', sans-serif;
    font-size: ${mobile ? '30px' : '50px'};
    padding: 0px 0px 30px 35px;
    color: white;
  `;

  return (
    <StyledLink to={to} onClick={onClick}>
      {children}
    </StyledLink>
  );
};

HeaderLink.propTypes = {
  to: PropTypes.string,
  mobile: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export const HeaderLinkSmall = ({ to, children, mobile, onClick }) => {
  const StyledLink = styled(Link)`
    width: 100%;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    user-select: none;
    cursor: pointer;
    outline: 0;
    font-family: 'archiaregular', sans-serif;
    font-size: ${mobile ? '24px' : '24px'};
    padding: 0px 0px 0px 35px;
    color: white;
  `;

  return (
    <StyledLink to={to} onClick={onClick}>
      {children}
    </StyledLink>
  );
};

HeaderLinkSmall.propTypes = {
  to: PropTypes.string,
  mobile: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
