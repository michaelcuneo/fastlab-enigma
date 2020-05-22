import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { FormattedMessage } from 'react-intl';

import H2 from 'components/H2';

import { Flex, Text } from 'rebass';

import OverlayContainer from 'containers/OverlayContainer';

import messages from './messages';

function ContactPage({ width, height }) {
  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Contact Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <OverlayContainer width={width} height={height} />
      <Flex
        height={window.innerHeight - 155}
        width={width}
        flexDirection="column"
        sx={{
          background: '#151417',
        }}
      >
        <Flex
          alignContent="center"
          alignItems="center"
          justifyItems="center"
          pl={width * 0.2167}
          height={402}
          style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.4)' }}
        >
          <H2>
            <FormattedMessage {...messages.header} />
          </H2>
        </Flex>
        <Flex
          flexDirection="column"
          alignContent="center"
          justifyItems="center"
          pt={109}
          pl={width * 0.2167}
          width={width * 0.6396}
          height={525}
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
    </React.Fragment>
  );
}

ContactPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ContactPage;
