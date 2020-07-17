import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useMediaQuery } from 'react-responsive';

import useWindowDimensions from 'utils/getWindowDimensions';

import { Flex } from 'rebass';
import H1 from 'components/H1';

const Overlay = ({ text }) => {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const { width, height, scrollWidth, scrollHeight } = useWindowDimensions();

  const StyledFlexHeader = styled(Flex)`
    position: absolute;
    top: 0;
    bottom: ${height};
    left: ${isTabletMobile ? width * 0.096 : width * 0.2167}px;
    right: 0;
    width: ${width}px;
    height: ${height}px;
    z-index: 1;
  `;

  return (
    <React.Fragment>
      <StyledFlexHeader
        alignItems="center"
        alignContent="center"
        alignSelf="center"
      >
        <H1>
          {text}
          <span className="blink_me">_</span>
        </H1>
      </StyledFlexHeader>
    </React.Fragment>
  );
};

Overlay.propTypes = {
  text: PropTypes.object,
};

export default Overlay;
