import React, { useEffect, useState } from 'react';
import { Player, ControlBar } from 'video-react';

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

import Overlay from './Overlay';

export default function FeaturePage() {
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
  }, []);

  return (
    <React.Fragment>
      <Player
        height="100%"
        width="100%"
        playsInline
        poster="/assets/poster.png"
        src={backgroundVideo}
        autoPlay
        loop
      >
        <ControlBar disableCompletely />
      </Player>
      <Flex
        width="100%"
        height="100%"
        flexDirection="column"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        sx={{
          position: 'absolute',
          top: '0',
          zIndex: '2',
        }}
      >
        <H1>
          The centre of <br /> applied chaos_
        </H1>
      </Flex>
      <Overlay />
    </React.Fragment>
  );
}
