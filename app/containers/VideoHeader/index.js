import React, { useEffect, useState } from 'react';
import {
  Player,
  ControlBar,
  BigPlayButton,
  VolumeMenuButton,
} from 'video-react';

import { useMediaQuery } from 'react-responsive';

import backgroundVideo1720 from 'video/background-video-01720.mp4';
import backgroundVideo2720 from 'video/background-video-02720.mp4';
import backgroundVideo3720 from 'video/background-video-03720.mp4';
import backgroundVideo4720 from 'video/background-video-04720.mp4';
import backgroundVideo5720 from 'video/background-video-05720.mp4';
import backgroundVideo6720 from 'video/background-video-06720.mp4';
import backgroundVideo7720 from 'video/background-video-07720.mp4';
import backgroundVideo8720 from 'video/background-video-08720.mp4';
import backgroundVideo9720 from 'video/background-video-09720.mp4';
import backgroundVideo10720 from 'video/background-video-10720.mp4';
import backgroundVideo11720 from 'video/background-video-11720.mp4';

import backgroundVideo1480 from 'video/background-video-01480.mp4';
import backgroundVideo2480 from 'video/background-video-02480.mp4';
import backgroundVideo3480 from 'video/background-video-03480.mp4';
import backgroundVideo4480 from 'video/background-video-04480.mp4';
import backgroundVideo5480 from 'video/background-video-05480.mp4';
import backgroundVideo6480 from 'video/background-video-06480.mp4';
import backgroundVideo7480 from 'video/background-video-07480.mp4';
import backgroundVideo8480 from 'video/background-video-08480.mp4';
import backgroundVideo9480 from 'video/background-video-09480.mp4';
import backgroundVideo10480 from 'video/background-video-10480.mp4';
import backgroundVideo11480 from 'video/background-video-11480.mp4';

import useWindowDimensions from 'utils/getWindowDimensions';

const VideoHeader = () => {
  const [backgroundVideo, setBackgroundVideo] = useState();
  
  const { width, height, scrollWidth, scrollHeight } =  useWindowDimensions();
  
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const desktopVideos = [
    backgroundVideo1720,
    backgroundVideo2720,
    backgroundVideo3720,
    backgroundVideo4720,
    backgroundVideo5720,
    backgroundVideo6720,
    backgroundVideo7720,
    backgroundVideo8720,
    backgroundVideo9720,
    backgroundVideo10720,
    backgroundVideo11720,
  ];

  const mobileVideos = [
    backgroundVideo1480,
    backgroundVideo2480,
    backgroundVideo3480,
    backgroundVideo4480,
    backgroundVideo5480,
    backgroundVideo6480,
    backgroundVideo7480,
    backgroundVideo8480,
    backgroundVideo9480,
    backgroundVideo10480,
    backgroundVideo11480,
  ];

  useEffect(() => {
    if (isTabletMobile) {
      setBackgroundVideo(
        mobileVideos[Math.floor(Math.random() * mobileVideos.length)],
      );
    } else {
      setBackgroundVideo(
        desktopVideos[Math.floor(Math.random() * desktopVideos.length)],
      );
    }
  });

  return (
    <div
      style={{ position: 'relative', zIndex: 0 }}
      height={height}
      width={width}
    >
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
      </Player>
    </div>
  );
};

export default VideoHeader;
