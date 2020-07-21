import React from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';
import { Flex, Text, Image } from 'rebass';

import Sig3 from 'images/scribbles_mark-3-white.svg';

function ContactContainer({ width, height }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  let SX;

  if (isTabletMobile) {
    SX = {
      position: 'relative',
      height: 'auto',
      maxWidth: '100%',
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  } else {
    SX = {
      position: 'absolute',
      height: 'auto',
      maxWidth: '100%',
      top: '400px',
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  }

  return (
    <Flex width={width} flexDirection="column" sx={SX}>
      <Flex
        sx={{
          position: 'relative',
        }}
        flexDirection={isTabletMobile ? 'column' : 'row'}
        justifyContent="flex-begin"
        alignItems="flex-begin"
        pt={['40px', '40px', '182px']}
        pb={['40px', '40px', '182px']}
        px={[width * 0.0933, width * 0.0933, width * 0.2167]}
      >
        <Image
          sx={{
            position: 'absolute',
            left: `-${(width * 0.1292) / 4}px !important`,
            top: height * 0.1444,
          }}
          width={width * 0.1292}
          src={Sig3}
        />
        <Flex
          height="auto"
          flexDirection="column"
          sx={{ position: 'relative', minWidth: width * 0.4229 }}
        >
          <Text pb={37}>
            We’re open for business and would love to hear from you. Feel free
            to drop us a line and ask any questions or to get the ball rolling
            on a new project.
          </Text>
          <Text
            fontFamily="'jetbrains-bold'"
            color="#0FF48D"
            fontSize="16px"
            lineHeight="25px"
          >
            BUILDING X, NEWSPACE, NEWCASTLE
          </Text>
          <Text
            fontFamily="'jetbrains-bold'"
            color="#0FF48D"
            fontSize="16px"
            lineHeight="25px"
          >
            FASTLAB@SOCI.ORG.AU
          </Text>
          <Text
            fontFamily="'jetbrains-bold'"
            color="#0FF48D"
            fontSize="16px"
            lineHeight="25px"
          >
            (02) 4957 7666
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

ContactContainer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ContactContainer;
