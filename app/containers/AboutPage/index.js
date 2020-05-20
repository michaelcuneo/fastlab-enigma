import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import OverlayContainer from 'containers/OverlayContainer';

import { Flex } from 'rebass';

function AboutPage({ width, height }) {
  return (
    <Flex
      sx={{ background: '#151417' }}
      justifyContent="center"
      margin="auto auto"
      alignContent="center"
      height="100vh"
      alignItems="center"
    >
      <Helmet key="Helmet">
        <title>Login Page</title>
        <meta name="description" content="Fastlab Login Page" />
      </Helmet>
      <OverlayContainer width={width} height={height} />
    </Flex>
  );
}

AboutPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default AboutPage;
