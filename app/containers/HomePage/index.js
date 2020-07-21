import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import ParsedContent from 'components/ParsedContent';

import Landing from 'containers/Landing';
import PointsContainer from 'containers/PointsContainer';
import LatestProjectsContainer from 'containers/LatestProjectsContainer';
import LatestUpdatesContainer from 'containers/LatestUpdatesContainer';
import OverlayContainer from 'containers/OverlayContainer';

import Footer from 'components/Footer';

const HomePage = ({ width, height }) => (
  <React.Fragment>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="Fastlab" />
    </Helmet>
    <Landing
      text={<ParsedContent content="The centre of <br /> applied chaos" />}
      small={false}
    />
    <PointsContainer width={width} height={height} />
    <LatestProjectsContainer width={width} height={height} />
    <LatestUpdatesContainer width={width} height={height} />
    <OverlayContainer width={width} height={height} />
    <Footer />
  </React.Fragment>
);

HomePage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default HomePage;
