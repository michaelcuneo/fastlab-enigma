import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = ({ href, text }) => {
  const Link = styled.a`
    color: #0ff48d !important;
  `;

  return <Link href={href}>{text}</Link>;
};

StyledLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

export default StyledLink;
