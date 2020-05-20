import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Box, Image, Text } from 'rebass';

const UpdateContainer = ({ data, width }) => (
  <Box
    minWidth={width * 0.2865}
    height="640px"
    px={['5px', '10px', '20px']}
    pt={Math.random() * (200 - 0)}
    sx={{
      zIndex: 99999,
    }}
  >
    <Box
      sx={{
        fontFamily: 'Jetbrains-Bold',
        color: 'white',
        background: '#151417',
        position: 'relative',
      }}
      p="12px"
      w="256px"
      h="58px"
    >
      {data.title}
    </Box>
    <Box>
      <Image
        height="382px"
        width={width * 0.2865}
        src={data.image}
        alt="Test Image"
      />
    </Box>
    <Flex
      flexDirection="column"
      sx={{ background: '#ffffff' }}
      mt="5px"
      p="34px"
      height="274px"
    >
      <Flex flexDirection="row" justifyContent="space-between">
        <Text
          sx={{
            color: '#151417',
            fontSize: '24px',
            lineHeight: '28px',
            fontFamily: 'archia',
          }}
        >
          {data.updateTitle}
        </Text>
        <Text
          sx={{
            color: '#B9B9B9',
            fontSize: '24px',
            lineHeight: '28px',
            fontFamily: 'archia',
          }}
        >
          {data.updateDate}
        </Text>
      </Flex>
      <Text sx={{ fontSize: '16px', lineHeight: '25px' }} my="28px">
        {data.updateDetails}
      </Text>
      <Text
        sx={{ color: '#868686', fontSize: '14px', lineHeight: '20px' }}
        my="14px"
      >
        {data.tags}
      </Text>
    </Flex>
  </Box>
);

UpdateContainer.propTypes = {
  data: PropTypes.object,
  width: PropTypes.number,
};

export default UpdateContainer;
