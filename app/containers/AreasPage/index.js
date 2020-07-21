import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Footer from 'components/Footer';

import OverlayContainer from 'containers/OverlayContainer';
import Landing from 'containers/Landing';
import AreasContainer from 'containers/AreasContainer';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';

import messages from './messages';

const AreasPage = ({ width, height }) => (
  <React.Fragment>
    <Helmet key="Helmet">
      <title>Rabbit Hole</title>
      <meta name="description" content="Fastlab Contact Page" />
    </Helmet>
    <Landing text={<FormattedMessage {...messages.header} />} small />
    <AreasContainer width={width} />
    <RelatedProjectsContainer width={width} />
    <OverlayContainer width={width} height={height} />
    <Footer />
  </React.Fragment>
);

AreasPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default AreasPage;
