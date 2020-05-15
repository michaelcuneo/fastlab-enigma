import React from 'react';
import { Flex, Box } from 'rebass';

export default function FeaturePage() {
  return (
    <React.Fragment>
      <Flex
        style={{ position: 'relative', background: '#151417' }}
        py={['13.75vw']}
      >
        <Box p={['1/4']} />
        <Box p={['1/4']} />
        <Box p={['1/4']} />
        <Box p={['1/4']} />
      </Flex>
    </React.Fragment>
  );
}
