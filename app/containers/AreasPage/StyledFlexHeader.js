import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'rebass';

export const StyledFlexHeader = ({ isTabletMobile, width, children }) => {
  const StyledFlex = styled(Flex)`
    position: relative;
    top: 0px;
    left: 0px;
    right: 0px;
    height: ${isTabletMobile ? 'auto' : '400px'};
    align-items: center;
    padding: 0px 0px 0px ${isTabletMobile ? width * 0.096 : width * 0.2167}px;
    z-index: 3;
  `;

  return <StyledFlex>{children}</StyledFlex>;
};

StyledFlexHeader.propTypes = {
  isTabletMobile: PropTypes.bool,
  width: PropTypes.number,
  children: PropTypes.node,
};
