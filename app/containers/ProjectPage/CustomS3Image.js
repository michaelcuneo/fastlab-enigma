import React from 'react';
import PropTypes from 'prop-types';

import { Storage, Logger } from 'aws-amplify';

import FastlabLLW from 'images/Fastlab_LLW.svg';

const logger = new Logger('Storage.S3Image');

class CustomS3Image extends React.Component {
  constructor(props) {
    super(props);

    const initSrc = this.props.src || FastlabLLW;

    this.state = {
      src: initSrc,
      hover: null,
    };
  }

  changeHover = () => {
    this.setState(prevState => ({
      hover: !prevState.hover,
    }));
  };

  getImageSource(key, newLevel, track, identityId) {
    Storage.get(key, { level: newLevel || 'public', track, identityId })
      .then(url => {
        this.setState({
          src: url,
        });
      })
      .catch(err => logger.debug(err));
  }

  load() {
    const { imgKey, level, track, identityId } = this.props;
    if (!imgKey) {
      // logger.debug('empty imgKey and path');
      return;
    }
    // logger.debug(`loading ${imgKey} ...`);
    this.getImageSource(imgKey, level, track, identityId);
  }

  componentWillMount() {
    this.load();
  }

  imageEl(src, enableHover, style, hover, hoverStyle, width, height) {
    if (enableHover) {
      return (
        <div
          key="ImageEl"
          role="button"
          tabIndex={0}
          style={hover ? hoverStyle.container : style.container}
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          onMouseOver={this.changeHover}
          onMouseOut={this.changeHover}
          onFocus={() => {}}
          onBlur={() => {}}
        >
          <img
            style={hover ? hoverStyle.image : style.image}
            width="100%"
            height="100%"
            src={src}
            alt=""
          />
        </div>
      );
    }
    return [
      <div
        key="ImageEl"
        role="button"
        tabIndex={0}
        width={width}
        height={height}
        style={style.container}
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        onMouseOver={this.changeHover}
        onMouseOut={this.changeHover}
        onFocus={() => {}}
        onBlur={() => {}}
      >
        <img style={style.image} width="100%" height="100%" src={src} alt="" />
      </div>,
    ];
  }

  render() {
    const { enableHover, style, hoverStyle, width, height } = this.props;
    const { src, hover } = this.state;

    if (!src) {
      return null;
    }

    return [
      this.imageEl(src, enableHover, style, hover, hoverStyle, width, height),
    ];
  }
}

CustomS3Image.propTypes = {
  identityId: PropTypes.any,
  enableHover: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.any,
  style: PropTypes.object,
  hoverStyle: PropTypes.object,
  imgKey: PropTypes.string,
  level: PropTypes.any,
  track: PropTypes.any,
};

export default CustomS3Image;
