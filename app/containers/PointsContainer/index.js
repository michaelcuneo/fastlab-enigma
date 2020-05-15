import React from 'react';

import { Flex, Box } from 'rebass';

export default function FeaturePage() {
  return (
    <React.Fragment>
      <Flex style={{ background: '#151417' }} p={['13.75vw']}>
        <Box p={['1/4']} />
        <Box p={['1/4']} />
        <Box p={['1/4']} />
        <Box p={['1/4']} />
      </Flex>
    </React.Fragment>
  );
}
