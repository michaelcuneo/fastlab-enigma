import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'rebass';

function StaffName(props) {
  const StyledText = styled(Text)`
    color: ${props.mode ? '#000' : '#fff'};
  `;

  return (
    <StyledText
      sx={{
        textTransform: 'uppercase',
        fontFamily: `'jetbrains-bold', sans-serif`,
        fontWeight: 400,
      }}
      fontSize={props.typeSize}
    >
      {props.children}
    </StyledText>
  );
}

StaffName.propTypes = {
  typeSize: PropTypes.array,
  mode: PropTypes.bool,
  children: PropTypes.string,
};

export default StaffName;
