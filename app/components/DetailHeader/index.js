import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass';

import { useMediaQuery } from 'react-responsive';

export function DetailHeader({ children, pt, pb, sx }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const Header = styled(Box)`
    font-family: 'archiaregular', sans-serif;
    font-size: ${isTabletMobile ? '30px' : '40px'};
    line-height: ${isTabletMobile ? '30px' : '25px'};
    color: #ec184a;
  `;

  return (
    <Header pt={pt} pb={pb} sx={sx}>
      {children}
    </Header>
  );
}

DetailHeader.propTypes = {
  children: PropTypes.node,
  pt: PropTypes.string,
  pb: PropTypes.string,
  sx: PropTypes.object,
};
