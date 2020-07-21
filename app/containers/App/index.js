import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { withResizeDetector } from 'react-resize-detector';

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

import Header from 'components/Header';

import AppWrapper from './AppWrapper';
import theme from './Theme';

import GlobalStyle from '../../global-styles';

function App({ runtime, width, height }) {
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
            <HomePage {...props} width={width} height={height} />
          )}
        />
        <Route
          path="/researcher/:id"
          render={props => (
            <ResearcherPage {...props} width={width} height={height} />
          )}
        />
        <Route
          path="/update/:id"
          render={props => (
            <UpdatePage {...props} width={width} height={height} />
          )}
        />
        <Route
          path="/project/:id"
          render={props => (
            <ProjectPage {...props} width={width} height={height} />
          )}
        />
        <Route
          path="/contact"
          render={props => (
            <ContactPage {...props} width={width} height={height} />
          )}
        />
        <Route
          path="/projects/:nextToken"
          render={props => (
            <ProjectsPage {...props} width={width} height={height} />
          )}
        />
        <Route
          path="/exhibits"
          render={props => (
            <ExhibitionsPage {...props} width={width} height={height} />
          )}
        />
        <Route
          path="/projects"
          render={props => (
            <ProjectsPage {...props} width={width} height={height} />
          )}
        />
        <Route
          path="/areas"
          render={props => (
            <AreasPage {...props} width={width} height={height} />
          )}
        />
        <Route
          path="/updates"
          render={props => (
            <UpdatesPage {...props} width={width} height={height} />
          )}
        />
        <Route
          path="/programs"
          render={props => (
            <ProgramsPage {...props} width={width} height={height} />
          )}
        />
        <Route
          path="/about"
          render={props => (
            <AboutPage {...props} width={width} height={height} />
          )}
        />
        <Route
          path=""
          render={props => (
            <NotFoundPage {...props} width={width} height={height} />
          )}
        />
      </Switch>
      <GlobalStyle />
      <ThemeProvider theme={theme} />
    </AppWrapper>
  );
}

App.propTypes = {
  runtime: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default withResizeDetector(App, {
  refreshMode: 'throttle',
  refreshRate: 500,
  refreshOptions: {
    trailing: true,
  },
});
