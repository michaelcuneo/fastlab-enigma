import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'rebass';

export const StyledFlexHeader = ({ isTabletMobile, width, children, px }) => {
  const StyledFlex = styled(Flex)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 400px;
    align-items: center;
    width: ${isTabletMobile ? width * 0.4229 : width * 0.4229};
    z-index: 3;
  `;

  return <StyledFlex px={px}>{children}</StyledFlex>;
};

StyledFlexHeader.propTypes = {
  isTabletMobile: PropTypes.bool,
  width: PropTypes.number,
  px: PropTypes.number,
  children: PropTypes.node,
};
