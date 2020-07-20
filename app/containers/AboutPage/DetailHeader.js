import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass';

export const DetailHeader = ({ isTabletMobile, pt, pb, children }) => {
  const Header = styled(Box)`
    font-family: 'archiaregular', sans-serif;
    font-size: ${isTabletMobile ? '30px' : '40px'};
    line-height: ${isTabletMobile ? '30px' : '25px'};
    color: #ec184a;
  `;

  return (
    <Header pt={pt} pb={pb}>
      {children}
    </Header>
  );
};

DetailHeader.propTypes = {
  isTabletMobile: PropTypes.bool,
  children: PropTypes.node,
  pt: PropTypes.array,
  pb: PropTypes.array,
};
