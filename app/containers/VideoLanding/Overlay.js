import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import H1 from 'components/H1';

import { StyledFlexHeader } from './StyledFlexHeader';
import { StyledGradientFooter } from './StyledGradientFooter';

const Overlay = ({ text }) => {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <React.Fragment>
      <StyledFlexHeader isTabletMobile={isTabletMobile}>
        <H1>
          {text}
          <span className="blink_me">_</span>
        </H1>
      </StyledFlexHeader>
      <StyledGradientFooter justifyContent="flex-end" />
    </React.Fragment>
  );
};

Overlay.propTypes = {
  text: PropTypes.object,
};

export default Overlay;
