import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { graphqlOperation } from 'aws-amplify';

import { Connect } from 'aws-amplify-react';

import { Flex, Box } from 'rebass';

import useWindowDimensions from 'utils/getWindowDimensions';

import { listStaffs } from '../../../src/graphql/queries';

import messages from './messages';

import StaffLink from '../StaffLink';

function ResearchersContainer() {
  const { width, height, scrollWidth, scrollHeight } = useWindowDimensions();
  const staffTemplate = newStaff => (
    <Flex
      flexDirection="column"
      key={newStaff.id}
      value={newStaff.id}
      width={[5 / 10, 2 / 10, width * 0.0635]}
      sx={{ maxWidth: width * 0.0635 }}
    >
      <Link to={`/researcher/${newStaff.id}`}>
        <StaffLink
          key={newStaff.id}
          width={width}
          typeSize={['10px', '12px', '14px']}
          staff={newStaff}
        />
      </Link>
    </Flex>
  );

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
          <Connect
            key="ListProjectsUnfiltered"
            query={graphqlOperation(listStaffs, {
              limit: 100,
            })}
          >
            {({ data, loading, error }) => {
              if (error) return <h3>Error</h3>;
              if (loading || !data) return null;
              return data.listStaffs.items.map(staffs => [
                staffs && staffTemplate(staffs),
              ]);
            }}
          </Connect>
        </Flex>
      </Box>
    </React.Fragment>
  );
}

ResearchersContainer.propTypes = {
  width: PropTypes.number,
};

export default ResearchersContainer;
