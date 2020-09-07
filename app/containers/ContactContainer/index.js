import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Text, Image } from 'rebass';

import Sig3 from 'images/scribbles_mark-3-white.svg';

function ContactContainer({ width, isTabletMobile }) {
  const { innerHeight } = window;

  return (
    <Flex
      sx={{
        position: 'relative',
      }}
      flexDirection={isTabletMobile ? 'column' : 'row'}
      justifyContent="flex-begin"
      alignItems="flex-begin"
      pt={['40px', '40px', '182px']}
      pb={['40px', '40px', '182px']}
      px={[width * 0.0933, width * 0.0933, width * 0.0729]}
    >
      <Image
        sx={{
          position: 'absolute',
          left: `-${(width * 0.1292) / 4}px !important`,
          top: innerHeight * 0.1444,
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
          We’re open for business and would love to hear from you. Feel free to
          drop us a line and ask any questions or to get the ball rolling on a
          new project.
        </Text>
        <Text
          fontFamily="'jetbrains-bold'"
          color="#0FF48D"
          fontSize="16px"
          lineHeight="25px"
        >
          BUILDING X, NUSPACE, NEWCASTLE
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
  );
}

ContactContainer.propTypes = {
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default ContactContainer;
