import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import H2 from 'components/H2';

import ParsedContent from 'components/ParsedContent';

import { useMediaQuery } from 'react-responsive';

import { Flex, Box, Text } from 'rebass';

import VideoHeader from 'containers/VideoHeader';
import OverlayContainer from 'containers/OverlayContainer';

import useWindowDimensions from 'utils/getWindowDimensions';

import Footer from 'components/Footer';

const ComingSoon = () => {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const { width, height, scrollWidth, scrollHeight } = useWindowDimensions();

  const DetailHeader = styled(Box)`
    font-family: 'archiaregular', sans-serif;
    font-size: 30px;
    line-height: 25px;
    color: #ec184a;
  `;

  const DetailText = styled(Text)`
    font-family: 'archiaregular', sans-serif;
    font-size: 14px;
    line-height: 23px;
  `;

  const StyledFlexHeader = styled(Flex)`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 300px;
    align-items: center;
    padding: 0px 0px 0px ${isTabletMobile ? width * 0.096 : width * 0.2167}px;
    z-index: 3;
  `;

  const StyledGradientHeader = styled(Flex)`
    position: absolute;
    top: 44px;
    left: 0px;
    right: 0px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), #151417);
    height: 256px;
    z-index: 2;
  `;

  return (
    <React.Fragment>
      <OverlayContainer width={width} height={height} />
      <Helmet>
        <title>Coming Soon</title>
        <meta name="description" content="Fastlab" />
      </Helmet>
      <StyledFlexHeader>
        <H2>
          The centre of <br /> applied chaos
          <span className="blink_me">_</span>
        </H2>
      </StyledFlexHeader>
      <StyledGradientHeader />
      <VideoHeader width={width} height={height} />
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
        <Footer width={width} height={height} />
      </Flex>
    </React.Fragment>
  );
}

export default ComingSoon;
