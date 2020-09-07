import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { ThemeProvider } from 'emotion-theming';

import { withResizeDetector } from 'react-resize-detector';

import LoadingIndicator from 'components/LoadingIndicator';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import BiomesPage from 'containers/BiomesPage/Loadable';
import FestivalXPage from 'containers/FestivalXPage/Loadable';
import ArsPage from 'containers/ARSPage/Loadable';
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
import ArtworkPage from 'containers/ArtworkPage/Loadable';

import OverlayContainer from 'containers/OverlayContainer';

import Header from 'components/Header';
import { Flex } from 'rebass';

import { Content } from './Content';

import theme from './Theme';

import GlobalStyle from '../../global-styles';

function App({ runtime, width, height }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

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
    <Flex>
      <Helmet titleTemplate="%s - FASTLab" defaultTitle="FASTLab">
        <meta
          name="description"
          content="A School of Creative Industries, University of Newcastle, application"
        />
      </Helmet>
      {width && height ? (
        <React.Fragment>
          <OverlayContainer
            width={width}
            height={height}
            isTabletMobile={isTabletMobile}
          />
          <Header width={width} isTabletMobile={isTabletMobile} />
          <Content>
            <Switch id="page-wrap">
              <Route
                exact
                path="/"
                render={props => (
                  <HomePage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/researcher/:id"
                render={props => (
                  <ResearcherPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/update/:id"
                render={props => (
                  <UpdatePage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/project/:id"
                render={props => (
                  <ProjectPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/contact"
                render={props => (
                  <ContactPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/projects/:nextToken"
                render={props => (
                  <ProjectsPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/exhibits"
                render={props => (
                  <ExhibitionsPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/projects"
                render={props => (
                  <ProjectsPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/artwork/:id"
                render={props => (
                  <ArtworkPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/areas"
                render={props => (
                  <AreasPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/updates"
                render={props => (
                  <UpdatesPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/programs"
                render={props => (
                  <ProgramsPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/about"
                render={props => (
                  <AboutPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/biomes"
                render={props => (
                  <BiomesPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/ars"
                render={props => (
                  <ArsPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path="/festivalx"
                render={props => (
                  <FestivalXPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
              <Route
                path=""
                render={props => (
                  <NotFoundPage
                    {...props}
                    width={width}
                    isTabletMobile={isTabletMobile}
                  />
                )}
              />
            </Switch>
            <GlobalStyle />
          </Content>
        </React.Fragment>
      ) : (
        <LoadingIndicator />
      )}
      <ThemeProvider theme={theme} />
    </Flex>
  );
}

App.propTypes = {
  runtime: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default withResizeDetector(App, {
  refreshMode: 'throttle',
  refreshRate: 1000,
  refreshOptions: {
    leading: false,
    trailing: true,
  },
});
