import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'rebass';

import useWindowDimensions from 'utils/getWindowDimensions';

export const StyledFlexHeader = ({ isTabletMobile, small, children }) => {
  const { width } = useWindowDimensions();

  const StyledFlex = styled(Flex)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${isTabletMobile ? width * 0.096 : width * 0.2167}px;
    right: 0;
    height: ${isTabletMobile || small ? '400px' : '100%'};
    width: ${width};
    z-index: 2;
  `;

  return <StyledFlex alignItems="center">{children}</StyledFlex>;
};

StyledFlexHeader.propTypes = {
  isTabletMobile: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.node,
};
