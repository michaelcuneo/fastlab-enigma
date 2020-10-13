import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ModalImage from 'react-modal-image';

import btoa from 'btoa';

const S3Modal = ({ imgKey, sWidth, lWidth }) => {
  const [smallSrc, setSmallSrc] = useState('');
  const [largeSrc, setLargeSrc] = useState('');

  useEffect(() => {
    getImageSources(imgKey);
  }, []);

  const domain = 'https://d32d35ekbziyl7.cloudfront.net/';

  const smallRequest = {
    bucket: 'fastlab-master-20190705141744-storage164059-master',
    key: imgKey,
    edits: {
      normalize: true,
      sharpen: true,
      resize: {
        width: sWidth,
        fit: 'inside',
      },
    },
  };

  const largeRequest = {
    bucket: 'fastlab-master-20190705141744-storage164059-master',
    key: imgKey,
    edits: {
      normalize: true,
      sharpen: true,
      resize: {
        width: lWidth,
        fit: 'inside',
      },
    },
  };

  const getImageSources = () => {
    const smallStrRequest = JSON.stringify(smallRequest);
    const largeStrRequest = JSON.stringify(largeRequest);
    const smallEncRequest = btoa(smallStrRequest);
    const largeEncRequest = btoa(largeStrRequest);
    const smallUrl = `${domain}${smallEncRequest}`;
    const largeUrl = `${domain}${largeEncRequest}`;

    setSmallSrc(smallUrl);
    setLargeSrc(largeUrl);
  };

  if (!smallSrc || !largeSrc) {
    return null;
  }

  return (
    <ModalImage
      className="smallImage"
      hideDownload
      small={smallSrc}
      large={largeSrc}
      alt="Gallery Image"
    />
  );
};

S3Modal.propTypes = {
  sWidth: PropTypes.number,
  lWidth: PropTypes.number,
  imgKey: PropTypes.string,
};

export default S3Modal;
