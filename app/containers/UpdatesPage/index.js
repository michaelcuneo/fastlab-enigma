import React from 'react';
import { Helmet } from 'react-helmet';

import { FormattedMessage } from 'react-intl';

import { useMediaQuery } from 'react-responsive';

import H2 from 'components/H2';
import Footer from 'components/Footer';

import AllUpdatesContainer from 'containers/AllUpdatesContainer';
import OverlayContainer from 'containers/OverlayContainer';
import VideoLanding from 'containers/VideoLanding';

import { Flex } from 'rebass';

import useWindowDimensions from 'utils/getWindowDimensions';

import { StyledFlexHeader } from './StyledFlexHeader';
import { StyledGradientHeader } from './StyledGradientHeader';

import messages from './messages';

function UpdatesPage() {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const { width } = useWindowDimensions();

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Updates Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <VideoLanding text={<FormattedMessage {...messages.header} />} small />
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
        <AllUpdatesContainer />
        <Footer />
      </Flex>
      <OverlayContainer />
    </React.Fragment>
  );
}

export default UpdatesPage;
