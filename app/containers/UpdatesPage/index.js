import React from 'react';
import { Helmet } from 'react-helmet';

import { FormattedMessage } from 'react-intl';

import Footer from 'components/Footer';

import AllUpdatesContainer from 'containers/AllUpdatesContainer';
import OverlayContainer from 'containers/OverlayContainer';
import VideoLanding from 'containers/VideoLanding';

import { Flex } from 'rebass';

import useWindowDimensions from 'utils/getWindowDimensions';

import { StyledGradientHeader } from './StyledGradientHeader';

import messages from './messages';

function UpdatesPage() {
  const { width } = useWindowDimensions();

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Updates Page</title>
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
        <AllUpdatesContainer />
        <Footer />
      </Flex>
      <OverlayContainer />
    </React.Fragment>
  );
}

export default UpdatesPage;
