import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'rebass';

// Calculate 100 Pixels as a percentage of the height of the screen.
// Update the height in real time from Props, and calculate on the fly for responsive.

// 100px high is 9.26% of 1080
const H1 = ({ children, height, width }) => {
  const [fontSize, setFontSize] = useState('100px');

  useEffect(() => {
    calcFontSize();
  });

  const calcFontSize = () => {
    if (width < 1920) {
      setFontSize('9.2vh');
    }
    if (window.innerHeight < 1080) {
      setFontSize('9.2vh');
    }
  };

  const StyledText = styled(Text)`
    font-size: ${fontSize};
    font-family: 'archiaregular', sans-serif;
    color: #e0e0e0;
    line-height: ${fontSize};
  `;

  return <StyledText>{children}</StyledText>;
};

H1.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default H1;
