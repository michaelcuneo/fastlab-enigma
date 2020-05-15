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
        px={['6.6%']}
      >
        <FastlabIcon />
        <Text
          py={3}
          style={{ fontFamily: 'jetbrains-medium', fontSize: '11pt' }}
        >
          <FormattedMessage {...messages.licenseMessage} />
        </Text>
      </Flex>
      <Flex
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
        px={['6.6%']}
      >
        <UonIcon />
      </Flex>
    </Wrapper>
  );
}

export default Footer;
