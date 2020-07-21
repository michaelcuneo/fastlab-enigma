import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Footer from 'components/Footer';
import AllUpdatesContainer from 'containers/AllUpdatesContainer';
import OverlayContainer from 'containers/OverlayContainer';
import Landing from 'containers/Landing';

import messages from './messages';

function UpdatesPage({ width, height }) {
  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Updates Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <Landing text={<FormattedMessage {...messages.header} />} small />
      <OverlayContainer width={width} height={height} />
      <AllUpdatesContainer width={width} height={height} />
      <Footer />
    </React.Fragment>
  );
}

UpdatesPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default UpdatesPage;
