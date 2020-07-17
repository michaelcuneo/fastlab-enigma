import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

// import { useMediaQuery } from 'react-responsive';

import { ThemeProvider } from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import AreasPage from 'containers/AreasPage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import ExhibitionsPage from 'containers/ExhibitionsPage/Loadable';
import ProgramsPage from 'containers/ProgramsPage/Loadable';
import ProjectsPage from 'containers/ProjectsPage/Loadable';
import ProjectPage from 'containers/ProjectPage/Loadable';
import UpdatesPage from 'containers/UpdatesPage/Loadable';
import UpdatePage from 'containers/UpdatePage/Loadable';
import ResearcherPage from 'containers/ResearcherPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import ComingSoon from 'containers/ComingSoon/Loadable';

import LoadingIndicator from 'components/LoadingIndicator';
import Header from 'components/Header';

import useWindowDimensions from 'utils/getWindowDimensions';

import AppWrapper from './AppWrapper';
import theme from './Theme';

import GlobalStyle from '../../global-styles';

function App({ runtime }) {
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
  }, []);

  return (
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
            <HomePage
              {...props}
            />
          )}
        />
        <Route
          path="/researcher/:id"
          render={props => (
            <ResearcherPage
              {...props}
            />
          )}
        />
        <Route
          path="/update/:id"
          render={props => (
            <UpdatePage
              {...props}
            />
          )}
        />
        <Route
          path="/project/:id"
          render={props => (
            <ProjectPage
              {...props}
            />
          )}
        />
        <Route
          path="/contact"
          render={props => (
            <ContactPage
              {...props}
            />
          )}
        />
        <Route
          path="/projects/:nextToken"
          render={props => (
            <ProjectsPage
              {...props}
            />
          )}
        />
        <Route
          path="/exhibits"
          render={props => (
            <ExhibitionsPage
              {...props}
            />
          )}
        />
        <Route
          path="/projects"
          render={props => (
            <ProjectsPage
              {...props}
            />
          )}
        />
        <Route
          path="/areas"
          render={props => (
            <AreasPage
              {...props}
            />
          )}
        />
        <Route
          path="/updates"
          render={props => (
            <UpdatesPage
              {...props}
            />
          )}
        />
        <Route
          path="/programs"
          render={props => (
            <ProgramsPage
              {...props}
            />
          )}
        />
        <Route
          path="/about"
          render={props => (
            <AboutPage
              {...props}
            />
          )}
        />
        <Route
          path=""
          render={props => (
            <NotFoundPage
              {...props}
            />
          )}
        />
      </Switch>
      <GlobalStyle />
      <ThemeProvider theme={theme} />
    </AppWrapper>
  )
}

App.propTypes = {
  runtime: PropTypes.object,
};

export default App;
