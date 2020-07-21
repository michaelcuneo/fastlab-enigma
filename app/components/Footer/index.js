import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useMediaQuery } from 'react-responsive';

import { Flex, Box, Text } from 'rebass';
import { VERSION } from 'containers/App/constants';

import Tippy from '@tippyjs/react';

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
          <FormattedMessage
            {...messages.licenseMessage}
            values={{
              copy: '©',
              version: VERSION,
            }}
          />
        </Text>
      </Flex>
      <Flex
        sx={{ width: '40%' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Tippy content={<FormattedMessage {...messages.homeDetails} />}>
          <FooterLink to="/">
            <FormattedMessage {...messages.home} />
          </FooterLink>
        </Tippy>
        <Tippy content={<FormattedMessage {...messages.aboutDetails} />}>
          <FooterLink to="/about">
            <FormattedMessage {...messages.about} />
          </FooterLink>
        </Tippy>
        <Tippy content={<FormattedMessage {...messages.projectsDetails} />}>
          <FooterLink to="/projects">
            <FormattedMessage {...messages.projects} />
          </FooterLink>
        </Tippy>
        <Tippy content={<FormattedMessage {...messages.updatesDetails} />}>
          <FooterLink to="/updates">
            <FormattedMessage {...messages.updates} />
          </FooterLink>
        </Tippy>
        <Tippy content={<FormattedMessage {...messages.areasDetails} />}>
          <FooterLink to="/areas">
            <FormattedMessage {...messages.areas} />
          </FooterLink>
        </Tippy>
        <Tippy content={<FormattedMessage {...messages.exhibitsDetails} />}>
          <FooterLink to="/exhibits">
            <FormattedMessage {...messages.exhibits} />
          </FooterLink>
        </Tippy>
        <Tippy content={<FormattedMessage {...messages.programsDetails} />}>
          <FooterLink to="/programs">
            <FormattedMessage {...messages.programs} />
          </FooterLink>
        </Tippy>
        <Tippy content={<FormattedMessage {...messages.contactDetails} />}>
          <FooterLink to="/contact">
            <FormattedMessage {...messages.contact} />
          </FooterLink>
        </Tippy>
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
          <FormattedMessage
            {...messages.licenseMessage}
            values={{
              copy: '©',
              version: VERSION,
            }}
          />
        </Text>
      </Flex>
    </MobileWrapper>
  );
}

export default Footer;
