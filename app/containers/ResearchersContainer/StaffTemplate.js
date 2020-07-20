import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Flex } from 'rebass';

import StaffLink from 'containers/StaffLink';

export const StaffTemplate = ({ isTabletMobile, width, newStaff }) => (
  <Flex
    flexDirection="column"
    key={newStaff.id}
    value={newStaff.id}
    width={[width * 0.4, width * 0.4, width * 0.0635]}
  >
    <Link to={`/researcher/${newStaff.id}`}>
      <StaffLink
        width={isTabletMobile ? width * 0.4 : width * 0.0635}
        typeSize={['10px', '12px', '14px']}
        staff={newStaff}
      />
    </Link>
  </Flex>
);

StaffTemplate.propTypes = {
  isTabletMobile: PropTypes.bool,
  width: PropTypes.number,
  newStaff: PropTypes.object,
};
