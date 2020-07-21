import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import ProgramsContainer from 'containers/ProgramsContainer';
import OverlayContainer from 'containers/OverlayContainer';
import Landing from 'containers/Landing';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';
import Footer from 'components/Footer';

import messages from './messages';

function ProgramsPage({ width, height }) {
  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Programs Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <Landing text={<FormattedMessage {...messages.header} />} small />
      <ProgramsContainer width={width} height={height} />
      <RelatedProjectsContainer width={width} />
      <OverlayContainer width={width} height={height} />
      <Footer />
    </React.Fragment>
  );
}

ProgramsPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ProgramsPage;
