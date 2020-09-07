import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Landing from 'containers/Landing';
import ContactContainer from 'containers/ContactContainer';
import Footer from 'components/Footer';

import { Flex } from 'rebass';

import messages from './messages';

function ContactPage({ width, isTabletMobile }) {
  const { innerHeight } = window;

  let SX;

  if (isTabletMobile) {
    SX = {
      position: 'relative',
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  } else {
    SX = {
      position: 'relative',
      minHeight: `${innerHeight - 624}px`,
      marginTop: `-${innerHeight - 400}px`,
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  }

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Contact Page</title>
        <meta name="description" content="FASTLab Contact Page" />
      </Helmet>
      <Landing
        text={<FormattedMessage {...messages.header} />}
        width={width}
        small
      />
      <Flex width={width} flexDirection="column" sx={SX}>
        <ContactContainer width={width} isTabletMobile={isTabletMobile} />
      </Flex>
      <Footer width={width} isTabletMobile={isTabletMobile} />
    </React.Fragment>
  );
}

ContactPage.propTypes = {
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default ContactPage;
