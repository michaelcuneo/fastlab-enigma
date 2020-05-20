import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Player,
  ControlBar,
  BigPlayButton,
  VolumeMenuButton,
} from 'video-react';

import H1 from 'components/H1';

import { Flex } from 'rebass';

import backgroundVideo1 from 'video/background-video-01.mp4';
import backgroundVideo2 from 'video/background-video-02.mp4';
import backgroundVideo3 from 'video/background-video-03.mp4';
import backgroundVideo4 from 'video/background-video-04.mp4';
import backgroundVideo5 from 'video/background-video-05.mp4';
import backgroundVideo6 from 'video/background-video-06.mp4';
import backgroundVideo7 from 'video/background-video-07.mp4';
import backgroundVideo8 from 'video/background-video-08.mp4';
import backgroundVideo9 from 'video/background-video-09.mp4';
import backgroundVideo10 from 'video/background-video-10.mp4';
import backgroundVideo11 from 'video/background-video-11.mp4';

import BackgroundImage from './BackgroundImage';

import Overlay from './Overlay';

const VideoLanding = ({ width, height }) => {
  const [backgroundVideo, setBackgroundVideo] = useState();
  const videos = [
    backgroundVideo1,
    backgroundVideo2,
    backgroundVideo3,
    backgroundVideo4,
    backgroundVideo5,
    backgroundVideo6,
    backgroundVideo7,
    backgroundVideo8,
    backgroundVideo9,
    backgroundVideo10,
    backgroundVideo11,
  ];

  useEffect(() => {
    setBackgroundVideo(videos[Math.floor(Math.random() * videos.length)]);
  });

  return (
    <React.Fragment>
      <div
        style={{
          maxHeight: '100vh',
          maxWidth: '100vw',
          zIndex: 2,
        }}
      >
        {backgroundVideo ? (
          <Player
            height={height}
            width={width}
            playsInline
            poster="/assets/poster.png"
            src={backgroundVideo}
            autoPlay
            loop
          >
            <ControlBar disableCompletely />
            <BigPlayButton disabled />
            <VolumeMenuButton disabled />
          </Player>
        ) : (
          <BackgroundImage />
        )}
        <Flex
          height="100%"
          flexDirection="column"
          justifyContent="center"
          sx={{
            position: 'absolute',
            top: 0,
            left: width * 0.2167,
            zIndex: 2,
          }}
        >
          <H1 height={height} width={width}>
            The centre of <br /> applied chaos
            <span className="blink_me">_</span>
          </H1>
        </Flex>
        <Overlay />
      </div>
    </React.Fragment>
  );
};

VideoLanding.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default VideoLanding;
