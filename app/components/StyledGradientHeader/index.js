import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'rebass';

import useWindowDimensions from 'utils/getWindowDimensions';
import { useMediaQuery } from 'react-responsive';

export function StyledGradientHeader({ small, children }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const { height } = useWindowDimensions();

  const StyledGradient = styled(Flex)`
    position: absolute;
    bottom: ${small && !isTabletMobile ? `${height - 400}px` : '0px'};
    left: 0px;
    right: 0px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), #151417);
    height: 256px;
    z-index: 2;
  `;

  return <StyledGradient id="StyledGradient">{children}</StyledGradient>;
}

StyledGradientHeader.propTypes = {
  small: PropTypes.bool,
  children: PropTypes.node,
};
