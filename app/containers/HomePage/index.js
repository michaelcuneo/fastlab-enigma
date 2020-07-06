import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import ParsedContent from 'components/ParsedContent';

import VideoLanding from 'containers/VideoLanding';
import PointsContainer from 'containers/PointsContainer';
import LatestProjectsContainer from 'containers/LatestProjectsContainer';
import LatestUpdatesContainer from 'containers/LatestUpdatesContainer';
import OverlayContainer from 'containers/OverlayContainer';

import Footer from 'components/Footer';

const HomePage = ({ width, height, scrollWidth, scrollHeight }) => (
  <React.Fragment>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="Fastlab" />
    </Helmet>
    <OverlayContainer
      width={width}
      height={height}
      scrollWidth={scrollWidth}
      scrollHeight={scrollHeight}
    />
    <VideoLanding
      width={width}
      height={height}
      text={<ParsedContent content="The centre of <br /> applied chaos" />}
    />
    <PointsContainer width={width} height={height} />
    <LatestProjectsContainer width={width} height={height} />
    <LatestUpdatesContainer width={width} height={height} />
    <Footer width={width} height={height} />
  </React.Fragment>
);

HomePage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  scrollWidth: PropTypes.number,
  scrollHeight: PropTypes.number,
};

export default HomePage;
