import React from 'react';
import PropTypes from 'prop-types';

import S3Image from './S3Image';

const StaffLink = ({ width, staff }) => (
  <S3Image
    key={staff.id}
    style={{
      container: {
        width: `${width * 0.0365}px`,
        height: `${width * 0.0365}px`,
        borderRadius: '50%',
      },
      image: {
        width: `${width * 0.0365}px`,
        height: `${width * 0.0365}px`,
        objectFit: 'cover',
        objectPosition: 'center',
        WebkitFilter: 'grayscale(100%)',
        filter: 'grayscale(100%)',
        borderRadius: '50%',
        border: '4px solid rgba(0, 0, 0, 0)',
      },
    }}
    hoverStyle={{
      container: {
        width: `${width * 0.0365}px`,
        height: `${width * 0.0365}px`,
        borderRadius: '50%',
      },
      image: {
        width: `${width * 0.0365}px`,
        height: `${width * 0.0365}px`,
        objectFit: 'cover',
        objectPosition: 'center',
        WebkitFilter: 'grayscale(0%)',
        filter: 'grayscale(0%)',
        borderRadius: '50%',
        border: '4px solid white',
      },
    }}
    imgKey={staff.mugshot}
    enableHover
  />
);

StaffLink.propTypes = {
  width: PropTypes.number,
  staff: PropTypes.object,
};

export default StaffLink;
