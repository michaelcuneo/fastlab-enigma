import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import ParsedContent from 'components/ParsedContent';

import Landing from 'containers/Landing';
import PointsContainer from 'containers/PointsContainer';
import LatestProjectsContainer from 'containers/LatestProjectsContainer';
import LatestUpdatesContainer from 'containers/LatestUpdatesContainer';
import Footer from 'components/Footer';

const HomePage = ({ width, isTabletMobile }) => (
  <React.Fragment>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="FASTLab" />
    </Helmet>
    <Landing
      text={<ParsedContent content="The centre of <br /> applied chaos" />}
      width={width}
      small={false}
      isTabletMobile={isTabletMobile}
    />
    <PointsContainer width={width} isTabletMobile={isTabletMobile} />
    <LatestProjectsContainer width={width} isTabletMobile={isTabletMobile} />
    <LatestUpdatesContainer width={width} isTabletMobile={isTabletMobile} />
    <Footer width={width} isTabletMobile={isTabletMobile} />
  </React.Fragment>
);

HomePage.propTypes = {
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default HomePage;
