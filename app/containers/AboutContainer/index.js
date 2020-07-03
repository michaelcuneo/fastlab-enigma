import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Flex, Box } from 'rebass';

import messages from './messages';

function BusinessContainer({ width }) {
  const DetailHeader = styled(Box)`
    font-family: 'archiaregular', sans-serif;
    font-size: 40px;
    line-height: 25px;
    color: #ec184a;
  `;

  return (
    <React.Fragment>
      <Flex
        flexDirection="column"
        key="HeaderBox"
        flexWrap="wrap"
        justifyContent="space-between"
        sx={{ maxWidth: width * 0.5729, width: width * 0.5729 }}
      >
        <DetailHeader pt="10px" pb="20px" sx={{ width: width * 0.5729 }}>
          <FormattedMessage {...messages.researchers} />
        </DetailHeader>
      </Flex>
      <Box style={{ userSelect: 'none', width: '100%' }} key="CurrentStaff">
        <Flex
          key="Wrapper"
          justifyContent="space-between"
          flexWrap="wrap"
          maxWidth={[1, 1, width * 0.5729]}
        >
          <FormattedMessage {...messages.details} />
        </Flex>
      </Box>
    </React.Fragment>
  );
}

BusinessContainer.propTypes = {
  width: PropTypes.number,
};

export default BusinessContainer;
