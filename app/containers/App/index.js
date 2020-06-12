import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import ProgramsPage from 'containers/ProgramsPage/Loadable';
import ResearcherPage from 'containers/ResearcherPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import LoadingIndicator from 'components/LoadingIndicator';
import Header from 'components/Header';

import AppWrapper from './AppWrapper';
import theme from './Theme';

import GlobalStyle from '../../global-styles';

function App({ runtime /* , loggedIn */ }) {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    window.addEventListener('resize', setDimensions);
  }, [window.removeEventListener('resize', setDimensions)]);

  useEffect(() => {
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
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  // ff Height and Width isn't worked out yet... don't render.
  return height && width ? (
    <AppWrapper id="outer-container">
      <Helmet titleTemplate="%s - fastlab" defaultTitle="Fastlab">
        <meta
          name="description"
          content="A School of Creative Industries, University of Newcastle, application"
        />
      </Helmet>
      <Header />
      <Switch id="page-wrap">
        <Route
          exact
          path="/"
          render={props => (
            <HomePage {...props} height={height} width={width} />
          )}
        />
        <Route
          path="/researcher/:id"
          render={props => (
            <ResearcherPage {...props} height={height} width={width} />
          )}
        />
        <Route
          path="/contact"
          render={props => (
            <ContactPage {...props} height={height} width={width} />
          )}
        />
        <Route
          path="/programs"
          render={props => (
            <ProgramsPage {...props} height={height} width={width} />
          )}
        />
        <Route
          path="/about"
          render={props => (
            <AboutPage {...props} height={height} width={width} />
          )}
        />
        <Route
          path="/login"
          render={props => (
            <LoginPage {...props} height={height} width={width} />
          )}
        />
        <Route
          path=""
          render={props => (
            <NotFoundPage {...props} height={height} width={width} />
          )}
        />
      </Switch>
      <GlobalStyle />
      <ThemeProvider theme={theme} />
    </AppWrapper>
  ) : (
    <LoadingIndicator />
  );
}

App.propTypes = {
  runtime: PropTypes.object,
  // loggedIn: PropTypes.bool,
};

export default App;
