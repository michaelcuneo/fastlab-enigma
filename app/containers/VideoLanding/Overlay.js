import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useMediaQuery } from 'react-responsive';

import { Flex } from 'rebass';
import H1 from 'components/H1';

const Overlay = ({ height, width, text }) => {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const StyledGradientFooter = styled(Flex)`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0), #151417);
    height: 256px;
    z-index: 1;
  `;

  const StyledFlexHeader = styled(Flex)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${isTabletMobile ? width * 0.096 : width * 0.2167}px;
    right: 0;
    height: ${height};
    width: ${width};
    z-index: 1;
  `;

  return (
    <React.Fragment>
      <StyledFlexHeader alignItems="center">
        <H1 height={height} width={width}>
          {text}
          <span className="blink_me">_</span>
        </H1>
      </StyledFlexHeader>
      <StyledGradientFooter justifyContent="flex-end" />
    </React.Fragment>
  );
};

Overlay.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  text: PropTypes.object,
};

export default Overlay;
