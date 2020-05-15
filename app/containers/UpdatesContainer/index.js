import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Flex, Box, Text } from 'rebass';

import Overlay from './Overlay';

const UpdatesContainer = ({ width, height }) => {
  const StyledText = styled(Text)`
    font-size: 34pt;
    font-family: 'archiaregular', sans-serif;
    color: white;
  `;

  return (
    <React.Fragment>
      <Overlay width={width} height={height} />
      <Flex style={{ background: '#EC184A' }} p={['6.88vw']}>
        <Box p={['1/4']}>
          <StyledText>Latest Updates</StyledText>
        </Box>
        <Box p={['1/4']} />
        <Box p={['1/4']} />
        <Box p={['1/4']} />
      </Flex>
    </React.Fragment>
  );
};

UpdatesContainer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default UpdatesContainer;
