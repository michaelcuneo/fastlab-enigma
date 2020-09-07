import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'rebass';

import { useMediaQuery } from 'react-responsive';

export function DetailText({ children, pt, pb, sx }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const StyledText = styled(Text)`
    font-family: 'archiaregular', sans-serif;
    font-size: ${isTabletMobile ? '14px' : '16px'};
    line-height: ${isTabletMobile ? '23px' : '25px'};
  `;

  return (
    <StyledText pt={pt} pb={pb} sx={sx}>
      {children}
    </StyledText>
  );
}

DetailText.propTypes = {
  children: PropTypes.node,
  pt: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  pb: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sx: PropTypes.object,
};
