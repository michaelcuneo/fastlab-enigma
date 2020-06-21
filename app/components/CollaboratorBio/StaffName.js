import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'rebass';

function StaffName(props) {
  const StyledText = styled(Text)`
    text-transform: uppercase;
    font-family: 'jetbrains-bold', sans-serif;
    font-weight: 400;
    color: ${props.mode ? '#000' : '#fff'};
  `;

  return <StyledText fontSize={props.typeSize}>{props.children}</StyledText>;
}

StaffName.propTypes = {
  typeSize: PropTypes.array,
  mode: PropTypes.bool,
  children: PropTypes.string,
};

export default StaffName;
