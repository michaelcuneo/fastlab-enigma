import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass';

export const StyledImageHeader = ({ src, children }) => {
  const StyledImage = styled(Box)`
    position: absolute;
    background-image: url(${src});
    background-size: contain;
    background-position: center top;
    background-repeat: no-repeat;
    align-items: center;
    width: 100%;
    height: 100%;
  `;

  return <StyledImage>{children}</StyledImage>;
};

StyledImageHeader.propTypes = {
  src: PropTypes.string,
  children: PropTypes.node,
};
