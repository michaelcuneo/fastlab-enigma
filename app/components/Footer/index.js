import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Flex, Text } from 'rebass';
// import LocaleToggle from 'containers/LocaleToggle';
import FastlabIcon from './FastlabIcon';
import UonIcon from './UonIcon';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Footer;
