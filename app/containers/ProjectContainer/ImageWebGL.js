import React from 'react';
import PropTypes from 'prop-types';

import * as THREE from 'three';
import { useThree } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';

import { CustomVertex } from './CustomVertex';
import { CustomFragment } from './CustomFragment';

const ImageWebGL = ({ url1, url2, disp, intensity, hover, height, width }) => {
  const { progress } = useSpring({ progress: hover ? 1 : 0 });

  const { gl, invalidate } = useThree();

  const args = React.useMemo(() => {
    const loader = new THREE.TextureLoader();
    const texture1 = loader.load(url1, invalidate);
    const texture2 = loader.load(url2, invalidate);
    const dispTexture = loader.load(disp, invalidate);

    dispTexture.wrapS = THREE.RepeatWrapping;
    dispTexture.wrapT = THREE.RepeatWrapping;
    texture1.magFilter = THREE.LinearFilter;
    texture2.magFilter = THREE.LinearFilter;
    texture1.minFilter = THREE.LinearFilter;
    texture2.minFilter = THREE.LinearFilter;

    texture1.anisotropy = gl.capabilities.getMaxAnisotropy();
    texture2.anisotropy = gl.capabilities.getMaxAnisotropy();

    return {
      uniforms: {
        effectFactor: { type: 'f', value: intensity },
        dispFactor: { type: 'f', value: 0 },
        texture: { type: 't', value: texture1 },
        texture2: { type: 't', value: texture2 },
        disp: { type: 't', value: dispTexture },
      },
      vertexShader: CustomVertex,
      fragmentShader: CustomFragment,
    };
  }, [url1, url2, disp]);

  const argWidth = (width / window.innerWidth) * 30;
  const argHeight = (height / window.innerHeight) * 30;

  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[argWidth, argHeight]} />
      <a.shaderMaterial
        attach="material"
        args={[args]}
        uniforms-dispFactor-value={progress}
      />
    </mesh>
  );
};

ImageWebGL.propTypes = {
  url1: PropTypes.string,
  url2: PropTypes.string,
  disp: PropTypes.string,
  intensity: PropTypes.number,
  hover: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default ImageWebGL;
