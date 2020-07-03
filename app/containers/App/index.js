import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

import { ThemeProvider } from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import ComingSoon from 'containers/ComingSoon/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import AreasPage from 'containers/AreasPage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import ProgramsPage from 'containers/ProgramsPage/Loadable';
import ProjectsPage from 'containers/ProjectsPage/Loadable';
import ProjectPage from 'containers/ProjectPage/Loadable';
import UpdatesPage from 'containers/UpdatesPage/Loadable';
import UpdatePage from 'containers/UpdatePage/Loadable';
import ResearcherPage from 'containers/ResearcherPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import LoadingIndicator from 'components/LoadingIndicator';
import Header from 'components/Header';

import ScrollToTop from 'utils/ScrollToTop';

import OverlayContainer from 'containers/OverlayContainer';

import AppWrapper from './AppWrapper';
import Content from './Content';
import theme from './Theme';

import GlobalStyle from '../../global-styles';

function App({ runtime }) {
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

  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  return height && width ? (
    <AppWrapper id="outer-container">
      <Helmet titleTemplate="%s - fastlab" defaultTitle="Fastlab">
        <meta
          name="description"
          content="A School of Creative Industries, University of Newcastle, application"
        />
      </Helmet>
      <Header />
      <Content>
        {isTabletMobile ? (
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <ComingSoon {...props} height={height} width={width} />
              )}
            />
          </Switch>
        ) : (
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
              path="/update/:id"
              render={props => (
                <UpdatePage {...props} height={height} width={width} />
              )}
            />
            <Route
              path="/project/:id"
              render={props => (
                <ProjectPage {...props} height={height} width={width} />
              )}
            />
            <Route
              path="/contact"
              render={props => (
                <ContactPage {...props} height={height} width={width} />
              )}
            />
            <Route
              path="/projects/:nextToken"
              render={props => (
                <ProjectsPage {...props} height={height} width={width} />
              )}
            />
            <Route
              path="/projects"
              render={props => (
                <ProjectsPage {...props} height={height} width={width} />
              )}
            />
            <Route
              path="/areas"
              render={props => (
                <AreasPage {...props} height={height} width={width} />
              )}
            />
            <Route
              path="/updates"
              render={props => (
                <UpdatesPage {...props} height={height} width={width} />
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
              path=""
              render={props => (
                <NotFoundPage {...props} height={height} width={width} />
              )}
            />
          </Switch>
        )}
        <OverlayContainer width={width} height={height} />
      </Content>
      <GlobalStyle />
      <ThemeProvider theme={theme} />
      <ScrollToTop />
    </AppWrapper>
  ) : (
    <LoadingIndicator />
  );
}

App.propTypes = {
  runtime: PropTypes.object,
};

export default App;
