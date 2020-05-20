import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useMediaQuery } from 'react-responsive';

import { Flex, Box, Text } from 'rebass';
// import LocaleToggle from 'containers/LocaleToggle';
import FastlabIcon from './FastlabIcon';
import UonIcon from './UonIcon';
import { DesktopWrapper, MobileWrapper } from './Wrapper';
import messages from './messages';

function Footer() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1225 });

  return isDesktopOrLaptop ? (
    <DesktopWrapper>
      <Flex
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
        px={['6.88%']}
      >
        <FastlabIcon />
        <Text
          py={3}
          style={{ fontFamily: 'jetbrains-medium', fontSize: '8pt' }}
        >
          <FormattedMessage {...messages.licenseMessage} />
        </Text>
      </Flex>
      <Flex alignItems="center" flexDirection="row">
        <Text
          px={4}
          style={{ fontFamily: 'jetbrains-medium', fontSize: '13pt' }}
        >
          Home
        </Text>
        <Text
          px={4}
          style={{ fontFamily: 'jetbrains-medium', fontSize: '13pt' }}
        >
          About
        </Text>
        <Text
          px={4}
          style={{ fontFamily: 'jetbrains-medium', fontSize: '13pt' }}
        >
          Projects
        </Text>
        <Text
          px={4}
          style={{ fontFamily: 'jetbrains-medium', fontSize: '13pt' }}
        >
          Updates
        </Text>
        <Text
          px={4}
          style={{ fontFamily: 'jetbrains-medium', fontSize: '13pt' }}
        >
          Programs
        </Text>
        <Text
          px={4}
          style={{ fontFamily: 'jetbrains-medium', fontSize: '13pt' }}
        >
          Contact
        </Text>
      </Flex>
      <Flex
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
        px={['6.88%']}
      >
        <UonIcon />
      </Flex>
    </DesktopWrapper>
  ) : (
    <MobileWrapper>
      <Flex
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box pt="75px">
          <FastlabIcon />
        </Box>
        <Box p="38.1px">
          <UonIcon />
        </Box>
        <Text
          pb="85px"
          style={{ fontFamily: 'jetbrains-medium', fontSize: '11px' }}
        >
          <FormattedMessage {...messages.licenseMessage} />
        </Text>
      </Flex>
    </MobileWrapper>
  );
}

export default Footer;
