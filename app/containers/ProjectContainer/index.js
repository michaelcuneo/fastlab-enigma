import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Box, Text } from 'rebass';

const ProjectContainer = ({ data, height, width, offset, staggered }) => {
  let PX;
  let SX;
  let PT;
  let WIDTH;
  let HEIGHT;

  if (staggered) {
    PX = ['0px', '10px', '10px'];
    PT = Math.random() * (200 - 0);
    SX = {
      zIndex: 99999,
      minWidth: `${width * 0.2792}px`,
      minHeight: `${height * 0.2792 * 1.82}px`,
      height: `${height * 0.2792}px`,
      maxWidth: `${width * 0.2792}px`,
    };
    HEIGHT = '274px';
    WIDTH = '402px';
  } else {
    PX = [];
    PT = offset;
    SX = {
      zIndex: 99999,
      minWidth: width,
      minHeight: height,
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
        <Box
          sx={{
            position: 'relative',
            bottom: 0,
            background: '#ffffff',
            borderLeft: '4px solid red',
          }}
          mt="5px"
          p="34px"
          height="274px"
          width={width}
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
          <Text
            sx={{
              color: '#868686',
              fontSize: '16px',
              lineHeight: '25px',
              fontFamily: 'archia',
            }}
            my="28px"
          >
            {data.updateDetails}
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
        </Box>
      </Flex>
    </Box>
  );
};

ProjectContainer.propTypes = {
  data: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  offset: PropTypes.number,
  staggered: PropTypes.bool,
};

export default ProjectContainer;
