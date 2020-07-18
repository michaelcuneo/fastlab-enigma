import React from 'react';
import { Helmet } from 'react-helmet';

import H2 from 'components/H2';

import ParsedContent from 'components/ParsedContent';

import { useMediaQuery } from 'react-responsive';

import { Flex } from 'rebass';

import VideoHeader from 'containers/VideoHeader';
import OverlayContainer from 'containers/OverlayContainer';

import useWindowDimensions from 'utils/getWindowDimensions';

import Footer from 'components/Footer';

import { DetailHeader } from './DetailHeader';
import { DetailText } from './DetailText';
import { StyledFlexHeader } from './StyledFlexHeader';
import { StyledGradientHeader } from './StyledGradientHeader';

const ComingSoon = () => {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const { width } = useWindowDimensions();

  return (
    <React.Fragment>
      <OverlayContainer />
      <Helmet>
        <title>Coming Soon</title>
        <meta name="description" content="Fastlab" />
      </Helmet>
      <StyledFlexHeader isTabletMobile={isTabletMobile}>
        <H2>
          The centre of <br /> applied chaos
          <span className="blink_me">_</span>
        </H2>
      </StyledFlexHeader>
      <StyledGradientHeader />
      <VideoHeader />
      <Flex
        width={width}
        flexDirection="column"
        sx={{
          position: 'absolute',
          height: 'auto',
          top: '300px',
          background: '#151417',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <Flex
          sx={{
            position: 'relative',
          }}
          justifyContent="flex-begin"
          alignItems="flex-begin"
          pt={['40px', '40px', '182px']}
          pb={['40px', '40px', '182px']}
          px={[width * 0.0933, width * 0.0933, width * 0.0729]}
          flexDirection="column"
        >
          <DetailHeader pt="10px" pb="30px">
            <ParsedContent content="FastLab is currently being flipped, mixed, shaken, re-invented and restored for all of your mobile devices." />
          </DetailHeader>
          <DetailText>
            While you are waiting for the mobile version to appear, please feel
            free to open FastLab on your laptop or computer for a perfect
            experience.
          </DetailText>
        </Flex>
        <Footer />
      </Flex>
    </React.Fragment>
  );
};

export default ComingSoon;
