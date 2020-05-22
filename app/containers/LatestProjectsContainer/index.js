import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

import { Flex, Text } from 'rebass';

const LatestProjectsContainer = (/* { width, height, data } */) => {
  const StyledText = styled(Text)`
    font-size: 34pt;
    font-family: 'archiaregular', sans-serif;
    color: white;
  `;

  return (
    <React.Fragment>
      <Flex
        flexDirection="column"
        sx={{ background: '#151417', zIndex: '1' }}
        justifyContent="space-around"
        pl={['6.88vw']}
      >
        <Flex height="200px">
          <StyledText>
            (Replace me with the Featured Projects component.)
          </StyledText>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        flexDirection="row"
        justifyContent="flex-end"
        sx={{ background: '#151417' }}
        pb={[100]}
        pr={['6.88vw']}
      >
        <Button color="dark" to="/projects">
          Explore more projects
        </Button>
      </Flex>
    </React.Fragment>
  );
};

export default LatestProjectsContainer;
