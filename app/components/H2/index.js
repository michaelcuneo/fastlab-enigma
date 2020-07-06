import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'rebass';

const H2 = ({ children }) => {
  const StyledText = styled(Text)`
    font-family: 'archiaregular', sans-serif;
    color: #e0e0e0;
  `;

  return (
    <StyledText
      fontSize={['25px', '40px', '50px']}
      lineHeight={['25px', '40px', '50px']}
    >
      {children}
    </StyledText>
  );
};

H2.propTypes = {
  children: PropTypes.node,
};

export default H2;
