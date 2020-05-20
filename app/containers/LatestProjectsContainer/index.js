import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

import { Flex, Box, Text } from 'rebass';

const LatestProjectsContainer = (/* { width, height, data } */) => {
  const StyledText = styled(Text)`
    font-size: 34pt;
    font-family: 'archiaregular', sans-serif;
    color: white;
  `;

  return (
    <Flex flexDirection="column" py="107px" style={{ background: '#151417' }}>
      <Box>
        <StyledText>Projects go here... </StyledText>
      </Box>

      <Flex sx={{ float: 'right' }}>
        <Button color="dark" to="/projects">
          Explore more projects
        </Button>
      </Flex>
    </Flex>
  );
};

export default LatestProjectsContainer;
