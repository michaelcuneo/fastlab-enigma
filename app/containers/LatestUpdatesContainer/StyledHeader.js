import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'rebass';

export const StyledHeader = ({ isTabletMobile, children }) => {
  const StyledText = styled(Text)`
    font-size: ${isTabletMobile ? '24pt' : '34px'};
    font-family: 'archiaregular', sans-serif;
    color: white;
  `;

  return <StyledText>{children}</StyledText>;
};

StyledHeader.propTypes = {
  isTabletMobile: PropTypes.bool,
  children: PropTypes.node,
};
