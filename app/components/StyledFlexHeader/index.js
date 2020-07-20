import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'rebass';

import { useMediaQuery } from 'react-responsive';

export function StyledFlexHeader({ width, small, children }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const StyledFlex = styled(Flex)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${!small ? '100%' : '400px'};
    align-items: center;
    width: ${isTabletMobile ? width : width * 0.4229};
    z-index: 3;
  `;

  return (
    <StyledFlex px={isTabletMobile ? width * 0.096 : width * 0.2167}>
      {children}
    </StyledFlex>
  );
}

StyledFlexHeader.propTypes = {
  width: PropTypes.number,
  small: PropTypes.bool,
  children: PropTypes.node,
};
