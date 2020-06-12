import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Box, Text } from 'rebass';

const ProjectContainer = ({ data, height, width, top, left, staggered }) => {
  let PX;
  let SX;
  let PT;
  let WIDTH;
  let HEIGHT;

  if (staggered) {
    PX = ['0px', '15px', '15px'];
    PT = Math.random() * (200 - 0);
    SX = {
      zIndex: 999,
      minWidth: `${width * 0.2792}px`,
      minHeight: `${height * 0.2792 * 1.82}px`,
      height: `${height * 0.2792}px`,
      maxWidth: `${width * 0.2792}px`,
    };
    HEIGHT = '536px';
    WIDTH = '640px';
  } else {
    PX = [];
    SX = {
      position: 'absolute',
      zIndex: 999,
      minWidth: width,
      minHeight: height,
      top,
      left,
    };
    HEIGHT = height;
    WIDTH = width;
  }

  return (
    <Box key={data.id} px={PX} pt={PT} sx={SX}>
      <Flex
        alignContent="flex-end"
        alignItems="flex-end"
        justifyContent="flex-end"
        sx={{
          backgroundImage: `url(${data.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          minHeight: HEIGHT,
          height: HEIGHT,
          maxWidth: WIDTH,
        }}
      >
        <Flex
          sx={{
            position: 'relative',
            bottom: 0,
            background: '#ffffff',
            borderLeft: '4px solid red',
          }}
          mt="5px"
          p="34px"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text
            sx={{
              color: '#151417',
              fontSize: '24px',
              lineHeight: '28px',
              fontFamily: 'archia',
            }}
          >
            {data.title}
          </Text>
          <Text
            sx={{
              color: '#868686',
              fontSize: '16px',
              lineHeight: '25px',
              fontFamily: 'archia',
            }}
            my="14px"
          >
            {data.tags}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

ProjectContainer.propTypes = {
  data: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  top: PropTypes.string,
  left: PropTypes.string,
  staggered: PropTypes.bool,
};

export default ProjectContainer;
