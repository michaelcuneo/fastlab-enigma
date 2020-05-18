import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Authenticator } from 'aws-amplify-react';
import OverlayContainer from 'containers/OverlayContainer';

import { Flex } from 'rebass';

import rprTheme from './rprTheme';

function LoginPage({ width, height }) {
  const signUpConfig = {
    defaultCountryCode: '61',
  };

  return (
    <Flex
      sx={{ background: '#151417' }}
      justifyContent="center"
      margin="auto auto"
      alignContent="center"
      height={window.innerHeight - 155}
      width="100vw"
      alignItems="center"
    >
      <Helmet key="Helmet">
        <title>Login Page</title>
        <meta name="description" content="Fastlab Login Page" />
      </Helmet>
      <Authenticator
        signUpConfig={signUpConfig}
        key="Authenticator"
        theme={rprTheme}
      />
      <OverlayContainer width={width} height={height} />
    </Flex>
  );
}

LoginPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default LoginPage;
