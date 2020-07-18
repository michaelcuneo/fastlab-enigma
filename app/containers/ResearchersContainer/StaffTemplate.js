import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Flex } from 'rebass';

import StaffLink from 'containers/StaffLink';

export const StaffTemplate = ({ width, newStaff }) => (
  <Flex
    flexDirection="column"
    key={newStaff.id}
    value={newStaff.id}
    width={[5 / 10, 2 / 10, width * 0.0635]}
    sx={{ maxWidth: width * 0.0635 }}
  >
    <Link to={`/researcher/${newStaff.id}`}>
      <StaffLink
        width={width}
        typeSize={['10px', '12px', '14px']}
        staff={newStaff}
      />
    </Link>
  </Flex>
);

StaffTemplate.propTypes = {
  width: PropTypes.number,
  newStaff: PropTypes.object,
};
