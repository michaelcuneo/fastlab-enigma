import React from 'react';
import { Helmet } from 'react-helmet';

import PointsContainer from 'containers/PointsContainer';
import VideoLanding from 'containers/VideoLanding';

export function HomePage() {
  return (
    <React.Fragment id="page-wrap">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Fastlab" />
      </Helmet>
      <VideoLanding />
      <PointsContainer />
    </React.Fragment>
  );
}

export default HomePage;
