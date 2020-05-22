import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'rebass';

// Calculate 100 Pixels as a percentage of the height of the screen.
// Update the height in real time from Props, and calculate on the fly for responsive.

// 100px high is 9.26% of 1080
const H1 = ({ children }) => {
  const StyledText = styled(Text)`
    font-family: 'archiaregular', sans-serif;
    color: #e0e0e0;
  `;

  return (
    <StyledText
      fontSize={['40px', '80px', '100px']}
      lineHeight={['40px', '80px', '100px']}
    >
      {children}
    </StyledText>
  );
};

H1.propTypes = {
  children: PropTypes.node,
};

export default H1;
