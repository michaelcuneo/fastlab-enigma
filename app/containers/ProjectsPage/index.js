import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import LatestProjectsContainer from 'containers/LatestProjectsContainer';
import AllProjectsContainer from 'containers/AllProjectsContainer';
import Footer from 'components/Footer';
import Landing from 'containers/Landing';

import { Flex } from 'rebass';

import messages from './messages';

function ProjectsPage({ width, isTabletMobile }) {
  const { innerHeight } = window;

  let SX;

  if (isTabletMobile) {
    SX = {
      display: 'relative',
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  } else {
    SX = {
      position: 'relative',
      marginTop: `-${innerHeight - 400}px`,
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  }

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>About Page</title>
        <meta name="description" content="FASTLab Contact Page" />
      </Helmet>
      <Landing
        text={<FormattedMessage {...messages.header} />}
        width={width}
        small
      />
      <Flex flexDirection="column" sx={SX}>
        <LatestProjectsContainer
          width={width}
          isTabletMobile={isTabletMobile}
          dark
        />
        <AllProjectsContainer width={width} isTabletMobile={isTabletMobile} />
        <Footer width={width} isTabletMobile={isTabletMobile} />
      </Flex>
    </React.Fragment>
  );
}

ProjectsPage.propTypes = {
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default ProjectsPage;
