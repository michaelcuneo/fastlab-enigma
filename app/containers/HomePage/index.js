import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import VideoLanding from 'containers/VideoLanding';
import PointsContainer from 'containers/PointsContainer';
import ShowcaseContainer from 'containers/ShowcaseContainer';
import UpdatesContainer from 'containers/UpdatesContainer';
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
      {/* div with id="page-wrap" is important for the burger menu */}
      <div id="page-wrap">
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Fastlab" />
        </Helmet>
        <VideoLanding width={width} height={height} />
        <PointsContainer width={width} height={height} />
        <ShowcaseContainer width={width} height={height} />
        <UpdatesContainer width={width} height={height} />
        <OverlayContainer width={width} height={height} />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
