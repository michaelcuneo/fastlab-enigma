import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import VideoLanding from 'containers/VideoLanding';
import PointsContainer from 'containers/PointsContainer';
import LatestProjectsContainer from 'containers/LatestProjectsContainer';
import LatestUpdatesContainer from 'containers/LatestUpdatesContainer';
import OverlayContainer from 'containers/OverlayContainer';

export function HomePage() {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  useEffect(() => {
    // Set the dimensions once.
    setDimensions();

    // Set the dimensions again if we resize.
    window.addEventListener('resize', setDimensions);
  }, [window.removeEventListener('resize', setDimensions)]);

  const setDimensions = () => {
    setWidth(document.body.scrollWidth);
    setHeight(document.body.scrollHeight);
  };

  return (
    <React.Fragment>
      <OverlayContainer width={width} height={height} />
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Fastlab" />
      </Helmet>
      <VideoLanding width={width} height={height} />
      <PointsContainer width={width} height={height} />
      <LatestProjectsContainer width={width} height={height} />
      <LatestUpdatesContainer width={width} height={height} />
    </React.Fragment>
  );
}

export default HomePage;
