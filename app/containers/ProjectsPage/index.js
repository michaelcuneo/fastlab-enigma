import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useMediaQuery } from 'react-responsive';

import LatestProjectsContainer from 'containers/LatestProjectsContainer';
import AllProjectsContainer from 'containers/AllProjectsContainer';
import OverlayContainer from 'containers/OverlayContainer';
import Landing from 'containers/Landing';
import Footer from 'components/Footer';

import { Flex } from 'rebass';

import messages from './messages';

function ProjectsPage({ width, height }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  let SX;

  if (isTabletMobile) {
    SX = {
      position: 'absolute',
      height: 'auto',
      maxWidth: '100%',
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  } else {
    SX = {
      position: 'absolute',
      height: 'auto',
      maxWidth: '100%',
      top: '400px',
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  }

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>About Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <OverlayContainer width={width} height={height} />
      <Landing text={<FormattedMessage {...messages.header} />} small />
      <Flex width={width} flexDirection="column" sx={SX}>
        <LatestProjectsContainer width={width} height={height} dark />
        <AllProjectsContainer width={width} height={height} />
        <Footer />
      </Flex>
    </React.Fragment>
  );
}

ProjectsPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ProjectsPage;
