import React from 'react';
import PropTypes from 'prop-types';
import H1 from 'components/H1';
import H2 from 'components/H2';

import { StyledGradientHeader } from 'components/StyledGradientHeader';
import { StyledFlexHeader } from 'components/StyledFlexHeader';

const Overlay = ({ text, small, width, isTabletMobile }) => (
  <React.Fragment>
    <StyledFlexHeader width={width} small={small}>
      {isTabletMobile || small ? (
        <H2>
          {text}
          <span className="blink_me">_</span>
        </H2>
      ) : (
        <H1>
          {text}
          <span className="blink_me">_</span>
        </H1>
      )}
    </StyledFlexHeader>
    <StyledGradientHeader width={width} small={small} />
  </React.Fragment>
);

Overlay.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  small: PropTypes.bool,
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default Overlay;
