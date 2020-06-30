import React from 'react';
import PropTypes from 'prop-types';

import { Canvas } from 'react-three-fiber';

import ImageWebGL from './ImageWebGL';

const Image = ({ width, height, url1, url2, disp, intensity, hover }) => (
  <Canvas className="canvas" invalidateFrameloop>
    <ImageWebGL
      url1={url1}
      url2={url2}
      disp={disp}
      intensity={intensity}
      height={height}
      width={width}
      hover={hover}
    />
  </Canvas>
);

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  url1: PropTypes.string,
  url2: PropTypes.string,
  disp: PropTypes.string,
  intensity: PropTypes.number,
  hover: PropTypes.bool,
};

export default Image;
