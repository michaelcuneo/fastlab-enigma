import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useMediaQuery } from 'react-responsive';

import { Flex, Box, Text } from 'rebass';
// import LocaleToggle from 'containers/LocaleToggle';
import FastlabIcon from './FastlabIcon';
import UonIcon from './UonIcon';
import { DesktopWrapper, MobileWrapper } from './Wrapper';
import { FooterLink } from './FooterLink';
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
      <Flex
        sx={{ width: '40%' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/projects">Projects</FooterLink>
        <FooterLink to="/updates">Updates</FooterLink>
        <FooterLink to="/programs">Programs</FooterLink>
        <FooterLink to="/contact">Contact</FooterLink>
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
