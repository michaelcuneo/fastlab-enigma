import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import LatestProjectsContainer from 'containers/LatestProjectsContainer';
import AllProjectsContainer from 'containers/AllProjectsContainer';
import OverlayContainer from 'containers/OverlayContainer';
import VideoLanding from 'containers/VideoLanding';
import Footer from 'components/Footer';

import useWindowDimensions from 'utils/getWindowDimensions';

import { Flex } from 'rebass';

import { StyledGradientHeader } from './StyledGradientHeader';

import messages from './messages';

function ProjectsPage() {
  const { width } = useWindowDimensions();

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>About Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <VideoLanding text={<FormattedMessage {...messages.header} />} small />
      <StyledGradientHeader />
      <Flex
        width={width}
        flexDirection="column"
        sx={{
          position: 'absolute',
          height: 'auto',
          top: '400px',
          background: '#151417',
        }}
      >
        <LatestProjectsContainer dark />
        <AllProjectsContainer />
        <Footer />
      </Flex>
      <OverlayContainer />
    </React.Fragment>
  );
}

export default ProjectsPage;
