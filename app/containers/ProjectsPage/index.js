import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

import messages from './messages';

function ProjectsPage() {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const { width, height, scrollWidth, scrollHeight } = useWindowDimensions();

  const StyledGradientHeader = styled(Flex)`
    position: absolute;
    top: 144px;
    left: 0px;
    right: 0px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), #151417);
    height: 256px;
    z-index: 2;
  `;

  const StyledFlexHeader = styled(Flex)`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 400px;
    align-items: center;
    padding: 0px 0px 0px ${isTabletMobile ? width * 0.096 : width * 0.2167}px;
    z-index: 3;
  `;

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>About Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <VideoHeader width={width} height={height} />
      <StyledFlexHeader>
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
        <LatestProjectsContainer width={width} height={height} dark />
        <AllProjectsContainer width={width} height={height} />
        <Footer height={height} width={width} />
      </Flex>
      <OverlayContainer width={width} height={height} scrollWidth={scrollWidth} scrollHeight={scrollHeight} />
    </React.Fragment>
  );
}

ProjectsPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  scrollWidth: PropTypes.number,
  scrollHeight: PropTypes.number,
};

export default ProjectsPage;
