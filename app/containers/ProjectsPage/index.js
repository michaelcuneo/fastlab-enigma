import React from 'react';
import { Helmet } from 'react-helmet';

import { FormattedMessage } from 'react-intl';

import { useMediaQuery } from 'react-responsive';

import H2 from 'components/H2';
import Footer from 'components/Footer';

import LatestProjectsContainer from 'containers/LatestProjectsContainer';
import AllProjectsContainer from 'containers/AllProjectsContainer';
import OverlayContainer from 'containers/OverlayContainer';
import VideoHeader from 'containers/VideoHeader';

import useWindowDimensions from 'utils/getWindowDimensions';

import { Flex } from 'rebass';

import { StyledFlexHeader } from './StyledFlexHeader';
import { StyledGradientHeader } from './StyledGradientHeader';

import messages from './messages';

function ProjectsPage() {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });
  const { width } = useWindowDimensions();

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>About Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <VideoHeader />
      <StyledFlexHeader isTabletMobile={isTabletMobile} width={width}>
        <H2>
          <FormattedMessage {...messages.header} />
          <span className="blink_me">_</span>
        </H2>
      </StyledFlexHeader>
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
