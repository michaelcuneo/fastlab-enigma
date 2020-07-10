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

import AppWrapper from './AppWrapper';
import theme from './Theme';

import GlobalStyle from '../../global-styles';

function App({ runtime }) {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [scrollWidth, setScrollWidth] = useState(null);
  const [scrollHeight, setScrollHeight] = useState(null);

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

    window.addEventListener('resize', setDimensions);
    window.addEventListener('load', setDimensions);
    window.addEventListener('popstate', setDimensions);
    window.addEventListener('', setDimensions);

    setDimensions();
  }, [
    window.removeEventListener('resize', setDimensions),
    window.removeEventListener('load', setDimensions),
    window.removeEventListener('popstate', setDimensions),
  ]);

  const setDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setScrollWidth(document.body.scrollWidth);
    setScrollHeight(document.body.scrollHeight);
  };

  return height && width && scrollWidth && scrollHeight ? (
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
              height={height}
              width={width}
              scrollWidth={scrollWidth}
              scrollHeight={scrollHeight}
            />
          )}
        />
        <Route
          path="/researcher/:id"
          render={props => (
            <ResearcherPage
              {...props}
              height={height}
              width={width}
              scrollWidth={scrollWidth}
              scrollHeight={scrollHeight}
            />
          )}
        />
        <Route
          path="/update/:id"
          render={props => (
            <UpdatePage
              {...props}
              height={height}
              width={width}
              scrollWidth={scrollWidth}
              scrollHeight={scrollHeight}
            />
          )}
        />
        <Route
          path="/project/:id"
          render={props => (
            <ProjectPage
              {...props}
              height={height}
              width={width}
              scrollWidth={scrollWidth}
              scrollHeight={scrollHeight}
            />
          )}
        />
        <Route
          path="/contact"
          render={props => (
            <ContactPage
              {...props}
              height={height}
              width={width}
              scrollWidth={scrollWidth}
              scrollHeight={scrollHeight}
            />
          )}
        />
        <Route
          path="/projects/:nextToken"
          render={props => (
            <ProjectsPage
              {...props}
              height={height}
              width={width}
              scrollWidth={scrollWidth}
              scrollHeight={scrollHeight}
            />
          )}
        />
        <Route
          path="/exhibits"
          render={props => (
            <ExhibitionsPage
              {...props}
              height={height}
              width={width}
              scrollWidth={scrollWidth}
              scrollHeight={scrollHeight}
            />
          )}
        />
        <Route
          path="/projects"
          render={props => (
            <ProjectsPage
              {...props}
              height={height}
              width={width}
              scrollWidth={scrollWidth}
              scrollHeight={scrollHeight}
            />
          )}
        />
        <Route
          path="/areas"
          render={props => (
            <AreasPage
              {...props}
              height={height}
              width={width}
              scrollWidth={scrollWidth}
              scrollHeight={scrollHeight}
            />
          )}
        />
        <Route
          path="/updates"
          render={props => (
            <UpdatesPage
              {...props}
              height={height}
              width={width}
              scrollWidth={scrollWidth}
              scrollHeight={scrollHeight}
            />
          )}
        />
        <Route
          path="/programs"
          render={props => (
            <ProgramsPage
              {...props}
              height={height}
              width={width}
              scrollWidth={scrollWidth}
              scrollHeight={scrollHeight}
            />
          )}
        />
        <Route
          path="/about"
          render={props => (
            <AboutPage
              {...props}
              height={height}
              width={width}
              scrollWidth={scrollWidth}
              scrollHeight={scrollHeight}
            />
          )}
        />
        <Route
          path=""
          render={props => (
            <NotFoundPage
              {...props}
              height={height}
              width={width}
              scrollWidth={scrollWidth}
              scrollHeight={scrollHeight}
            />
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
};

export default App;
