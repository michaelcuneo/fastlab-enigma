import React from 'react';
import { Helmet } from 'react-helmet';

import ParsedContent from 'components/ParsedContent';

import VideoLanding from 'containers/VideoLanding';
import PointsContainer from 'containers/PointsContainer';
import LatestProjectsContainer from 'containers/LatestProjectsContainer';
import LatestUpdatesContainer from 'containers/LatestUpdatesContainer';
import OverlayContainer from 'containers/OverlayContainer';

import Footer from 'components/Footer';

const HomePage = () => (
  <React.Fragment>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="Fastlab" />
    </Helmet>
    <OverlayContainer />
    <VideoLanding
      text={<ParsedContent content="The centre of <br /> applied chaos" />}
    />
    <PointsContainer />
    <LatestProjectsContainer />
    <LatestUpdatesContainer />
    <Footer />
  </React.Fragment>
);

export default HomePage;
