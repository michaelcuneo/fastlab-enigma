import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import H1 from 'components/H1';
import H2 from 'components/H2';

import { StyledGradientHeader } from 'components/StyledGradientHeader';
import { StyledFlexHeader } from 'components/StyledFlexHeader';

import useWindowDimensions from 'utils/getWindowDimensions';

const Overlay = ({ text, small }) => {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });
  const { width } = useWindowDimensions();

  return (
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
      <StyledGradientHeader justifyContent="flex-end" />
    </React.Fragment>
  );
};

Overlay.propTypes = {
  text: PropTypes.object,
  small: PropTypes.bool,
};

export default Overlay;
