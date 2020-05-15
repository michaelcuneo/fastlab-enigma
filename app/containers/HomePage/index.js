import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import UpdatesContainer from 'containers/UpdatesContainer';
import PointsContainer from 'containers/PointsContainer';
import VideoLanding from 'containers/VideoLanding';
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
      <div id="page-wrap">
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Fastlab" />
        </Helmet>
        <VideoLanding width={width} height={height} />
        <PointsContainer width={width} height={height} />
        <UpdatesContainer width={width} height={height} />
        <OverlayContainer width={width} height={height} />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
