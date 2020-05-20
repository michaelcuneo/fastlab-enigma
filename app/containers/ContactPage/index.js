import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import H2 from 'components/H1';

import OverlayContainer from 'containers/OverlayContainer';

function ContactPage({ width, height }) {
  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Contact Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <OverlayContainer height={height} width={width} />
      <H2>Contact FastLab</H2>
    </React.Fragment>
  );
}

ContactPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ContactPage;
