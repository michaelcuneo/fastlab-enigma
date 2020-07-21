import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Landing from 'containers/Landing';
import ContactContainer from 'containers/ContactContainer';
import OverlayContainer from 'containers/OverlayContainer';
import Footer from 'components/Footer';

import messages from './messages';

function ContactPage({ width, height }) {
  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Contact Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <Landing text={<FormattedMessage {...messages.header} />} small />
      <OverlayContainer width={width} height={height} />
      <ContactContainer width={width} height={height} />
      <Footer />
    </React.Fragment>
  );
}

ContactPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ContactPage;
