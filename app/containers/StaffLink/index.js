import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from 'rebass';

import S3Image from 'components/S3Image';
import StaffName from './StaffName';

const StaffLink = ({ width, typeSize, staff }) => (
  <Flex flexDirection="column" alignItems="center" key="FL Staff Link">
    <S3Image
      key={staff.id}
      style={{
        container: {
          width: `${width * 0.0635}px`,
          height: `${width * 0.0635}px`,
          borderRadius: '50%',
        },
        image: {
          width: `${width * 0.0635}px`,
          height: `${width * 0.0635}px`,
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
          width: `${width * 0.0635}px`,
          height: `${width * 0.0635}px`,
          borderRadius: '50%',
        },
        image: {
          width: `${width * 0.0635}px`,
          height: `${width * 0.0635}px`,
          objectFit: 'cover',
          objectPosition: 'center',
          WebkitFilter: 'grayscale(0%)',
          filter: 'grayscale(0%)',
          borderRadius: '50%',
          border: '4px solid white',
        },
      }}
      width={122}
      height={122}
      imgKey={`public/${staff.mugshot}`}
      enableHover
    />
    <Flex flexDirection="column" alignItems="center" pt="14px" pb="28px">
      <StaffName typeSize={typeSize}>{staff.firstName}</StaffName>
      <StaffName typeSize={typeSize}>{staff.lastName}</StaffName>
    </Flex>
  </Flex>
);

StaffLink.propTypes = {
  typeSize: PropTypes.array,
  width: PropTypes.number,
  staff: PropTypes.object,
};

export default StaffLink;
