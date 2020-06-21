import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Player,
  ControlBar,
  BigPlayButton,
  VolumeMenuButton,
} from 'video-react';

import { Flex, Image } from 'rebass';

import { useMediaQuery } from 'react-responsive';

import maskGroup from 'images/Mask_Group_1.png';

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

import Overlay from './Overlay';

const VideoLanding = ({ width, height, text }) => {
  const [backgroundVideo, setBackgroundVideo] = useState();

  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

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

  return isTabletMobile ? (
    <Flex sx={{ position: 'relative' }}>
      <Image size="contain" height="483px" width={width} src={maskGroup} />
      <Overlay height="483px" width={width} text={text} />
    </Flex>
  ) : (
    <div height={height} width={width}>
      <Player
        height={height}
        width={width}
        playsInline
        src={backgroundVideo}
        autoPlay
        loop
      >
        <ControlBar disableCompletely />
        <BigPlayButton disabled />
        <VolumeMenuButton disabled />
        <Overlay height={height} width={width} text={text} />
      </Player>
    </div>
  );
};

VideoLanding.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  text: PropTypes.object,
};

export default VideoLanding;
