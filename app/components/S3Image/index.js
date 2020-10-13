import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Image from 'react-graceful-image';

import btoa from 'btoa';

const S3Image = ({
  imgKey,
  enableHover,
  style,
  hoverStyle,
  width,
  height,
  handleClick,
}) => {
  const [hover, setHover] = useState(false);
  const [src, setSrc] = useState('');

  useEffect(() => {
    getImageSource(imgKey);
  }, []);

  const domain = 'https://d32d35ekbziyl7.cloudfront.net/';

  const request = {
    bucket: 'fastlab-master-20190705141744-storage164059-master',
    key: imgKey,
    edits: {
      normalize: true,
      sharpen: true,
      resize: {
        width,
        height,
        fit: 'cover',
      },
    },
  };

  const changeHover = () => setHover(!hover);

  const getImageSource = () => {
    const strRequest = JSON.stringify(request);
    const encRequest = btoa(strRequest);
    const url = `${domain}${encRequest}`;

    setSrc(url);
  };

  const imageEl = () => {
    if (enableHover) {
      return (
        <div
          role="button"
          tabIndex={0}
          style={hover ? hoverStyle.container : style.container}
          onClick={handleClick}
          onKeyDown={handleClick}
          onMouseOver={changeHover}
          onMouseOut={changeHover}
          onFocus={() => {}}
          onBlur={() => {}}
        >
          <Image
            style={hover ? hoverStyle.image : style.image}
            width="100%"
            height="100%"
            src={src}
            alt=""
          />
        </div>
      );
    }
    return (
      <div
        role="button"
        tabIndex={0}
        width={width}
        height={height}
        style={style.container}
        onClick={handleClick}
        onKeyDown={handleClick}
        onMouseOver={changeHover}
        onMouseOut={changeHover}
        onFocus={() => {}}
        onBlur={() => {}}
      >
        <Image
          style={style.image}
          width="100%"
          height="100%"
          src={src}
          alt=""
        />
      </div>
    );
  };

  if (!src) {
    return null;
  }
  return imageEl();
};

S3Image.propTypes = {
  enableHover: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
  hoverStyle: PropTypes.object,
  imgKey: PropTypes.string,
  handleClick: PropTypes.func,
};

export default S3Image;
