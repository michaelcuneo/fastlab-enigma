import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Flex, Box, Text } from 'rebass';
import { VERSION } from 'containers/App/constants';

import Tippy from '@tippyjs/react';

// import LocaleToggle from 'containers/LocaleToggle';
import FastlabIcon from './FastlabIcon';
import UonIcon from './UonIcon';
import { DesktopWrapper, MobileWrapper } from './Wrapper';
import { FooterLink } from './FooterLink';
import messages from './messages';

function Footer({ width, isTabletMobile }) {
  return isTabletMobile ? (
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
        <Box p="38px">
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
  ) : (
    <DesktopWrapper>
      <Flex
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
        py={['55px']}
        px={[width * 0.0729]}
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
        sx={{ width: '60%' }}
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Tippy
          interactive
          content={<FormattedMessage {...messages.homeDetails} />}
        >
          <FooterLink to="/">
            <FormattedMessage {...messages.home} />
          </FooterLink>
        </Tippy>
        <Tippy
          interactive
          content={<FormattedMessage {...messages.aboutDetails} />}
        >
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
  );
}

Footer.propTypes = {
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default Footer;
