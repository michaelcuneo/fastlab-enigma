import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import S3Image from './S3Image';

const StaffLink = ({ width, staff }) => {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });
  const ratio = isTabletMobile ? `${width * 0.1813}px` : `${width * 0.0365}px`;

  return (
    <S3Image
      key={staff.id}
      style={{
        container: {
          width: ratio,
          height: ratio,
          borderRadius: '50%',
        },
        image: {
          width: ratio,
          height: ratio,
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
          width: ratio,
          height: ratio,
          borderRadius: '50%',
        },
        image: {
          width: ratio,
          height: ratio,
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
};

StaffLink.propTypes = {
  width: PropTypes.number,
  staff: PropTypes.object,
};

export default StaffLink;
