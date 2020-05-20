import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import AppWrapper from './AppWrapper';
import theme from './Theme';

import GlobalStyle from '../../global-styles';

// Add the rebass theme here later for break point configuration
function App({ runtime /* , loggedIn */ }) {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    window.addEventListener('resize', setDimensions);
  }, [window.removeEventListener('resize', setDimensions)]);

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (process.env.NODE_ENV === 'production') {
      runtime.install({
        onUpdating: () => {},
        onUpdateReady: () => {
          runtime.applyUpdate();
        },
        onUpdated: () => {
          window.location.reload();
        },
        onUpdateFailed: () => {},
      });
    }
    setDimensions();
  }, []);

  const setDimensions = () => {
    setWidth(document.body.scrollWidth);
    setHeight(document.body.scrollHeight);
  };

  return (
    <AppWrapper id="outer-container">
      <Helmet titleTemplate="%s - fastlab" defaultTitle="Fastlab">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <HomePage {...props} height={height} width={width} />
          )}
        />
        <Route
          path="/login"
          render={props => (
            <LoginPage {...props} height={height} width={width} />
          )}
        />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
      <ThemeProvider theme={theme} />
    </AppWrapper>
  );
}

App.propTypes = {
  runtime: PropTypes.object,
  // loggedIn: PropTypes.bool,
};

export default App;
