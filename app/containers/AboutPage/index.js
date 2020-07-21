import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Footer from 'components/Footer';

import Landing from 'containers/Landing';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';

import OverlayContainer from 'containers/OverlayContainer';
import AboutContainer from 'containers/AboutContainer';

import messages from './messages';

const AboutPage = ({ width, height }) => (
  <React.Fragment>
    <Helmet key="Helmet">
      <title>About Page</title>
      <meta name="description" content="Fastlab Contact Page" />
    </Helmet>
    <Landing text={<FormattedMessage {...messages.header} />} small />
    <AboutContainer width={width} height={height} />
    <RelatedProjectsContainer width={width} />
    <OverlayContainer width={width} height={height} />
    <Footer />
  </React.Fragment>
);

AboutPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default AboutPage;
