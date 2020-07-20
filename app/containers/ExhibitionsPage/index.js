import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useMediaQuery } from 'react-responsive';

import Footer from 'components/Footer';

import Sig2 from 'images/scribbles_mark-2-white.svg';

import OverlayContainer from 'containers/OverlayContainer';
import VideoLanding from 'containers/VideoLanding';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';

import { Flex, Text, Image } from 'rebass';

import useWindowDimensions from 'utils/getWindowDimensions';

import { StyledGradientHeader } from './StyledGradientHeader';

import messages from './messages';

const ExhibitionsPage = () => {
  const { width } = useWindowDimensions();
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  let SX;

  if (isTabletMobile) {
    SX = {
      position: 'relative',
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
        <title>Programs Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <VideoLanding text={<FormattedMessage {...messages.header} />} small>
        <StyledGradientHeader />
      </VideoLanding>
      <OverlayContainer />
      <Flex width={width} flexDirection="column" sx={SX}>
        <Flex
          sx={{
            position: 'relative',
          }}
          flexDirection={isTabletMobile ? 'column' : 'row'}
          justifyContent="flex-begin"
          alignItems="flex-begin"
          pt={['40px', '40px', '182px']}
          pb={['40px', '40px', '182px']}
          px={[width * 0.0933, width * 0.0933, width * 0.2167]}
        >
          <Image
            sx={{
              position: 'absolute',
              right: `${(width * 0.1292) / 2}px !important`,
              top: 0,
            }}
            width={width * 0.1292}
            src={Sig2}
          />
          <Flex
            height="auto"
            flexDirection="column"
            sx={{ position: 'relative', minWidth: width * 0.4229 }}
          >
            <Text pb={37}>COMING SOON</Text>
          </Flex>
        </Flex>
        <RelatedProjectsContainer />
        <Footer />
      </Flex>
    </React.Fragment>
  );
};

export default ExhibitionsPage;
