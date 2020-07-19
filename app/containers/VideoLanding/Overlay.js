import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import H1 from 'components/H1';
import H2 from 'components/H2';

import { StyledFlexHeader } from './StyledFlexHeader';
import { StyledGradientFooter } from './StyledGradientFooter';

const Overlay = ({ text, small }) => {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <React.Fragment>
      <StyledFlexHeader isTabletMobile={isTabletMobile} small={small}>
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
      <StyledGradientFooter justifyContent="flex-end" />
    </React.Fragment>
  );
};

Overlay.propTypes = {
  text: PropTypes.object,
  small: PropTypes.bool,
};

export default Overlay;
