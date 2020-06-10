import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import OverlayContainer from 'containers/OverlayContainer';

import Footer from 'components/Footer';

import { Flex } from 'rebass';

function LoginPage({ width, height }) {
  const signUpConfig = {
    defaultCountryCode: '61',
  };

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Login Page</title>
        <meta name="description" content="Fastlab Login Page" />
      </Helmet>
      <OverlayContainer width={width} height={height} />
      <Flex
        sx={{ background: '#151417', zIndex: 999999 }}
        justifyContent="center"
        margin="auto auto"
        alignContent="center"
        height={window.innerHeight - 155}
        width="100vw"
        alignItems="center"
      >
        <AmplifyAuthenticator signUpConfig={signUpConfig} key="Authenticator">
          <AmplifySignIn
            headerText="Control the Chaos"
            submitButtonText="Go"
            slot="sign-in"
          />
        </AmplifyAuthenticator>
      </Flex>
      <Footer width={width} height={height} />
    </React.Fragment>
  );
}

LoginPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default LoginPage;
