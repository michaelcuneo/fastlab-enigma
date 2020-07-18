import React from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';

import H1 from 'components/H1';

import StyledFlexHeader from './StyledFlexHeader';

const Overlay = ({ text }) => {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <React.Fragment>
      <StyledFlexHeader
        alignItems="center"
        alignContent="center"
        alignSelf="center"
        isTabletMobile={isTabletMobile}
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
