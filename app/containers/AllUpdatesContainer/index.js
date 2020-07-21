import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

import { useMediaQuery } from 'react-responsive';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import { Flex, Box } from 'rebass';

import UpdateContainer from 'containers/UpdateContainer';

import { listPosts } from '../../../src/graphql/queries';

const AllProjects = ({ width }) => {
  const [nextToken, setNextToken] = useState(null);
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  let SX;

  if (isTabletMobile) {
    SX = {
      maxWidth: '100%',
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  } else {
    SX = {
      position: 'absolute',
      maxWidth: '100%',
      top: '400px',
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  }

  return (
    <React.Fragment>
      <Flex flexDirection="column" sx={SX}>
        <Flex
          sx={{
            position: 'relative',
          }}
          flexWrap="wrap"
          flexDirection={isTabletMobile ? 'column' : 'row'}
          justifyContent="flex-begin"
          alignItems="flex-begin"
          pt={['40px', '40px', '100px']}
          pb={['40px', '40px', '100px']}
          px={[width * 0.0933, width * 0.0933, width * 0.0729]}
        >
          <Connect
            key="AllProjects"
            query={graphqlOperation(listPosts, {
              limit: 9,
              nextToken,
            })}
          >
            {({ data, loading, error }) => {
              if (error) return <h3>Error</h3>;
              if (loading || !data) return null;
              return [
                data.listPosts.items.map(thisItem => (
                  <Box pr={[width * 0.0039]} py={['40px']}>
                    <UpdateContainer
                      key={thisItem.id}
                      item={thisItem}
                      width={width}
                      staggered
                    />
                  </Box>
                )),
                <Flex
                  width="100%"
                  flexDirection="row"
                  justifyContent={isTabletMobile ? 'center' : 'flex-end'}
                  pb={[40, 40, 80]}
                  pt={[40, 40, 80]}
                  pr={[0, 0, width * 0.0729]}
                >
                  <Button
                    color="dark"
                    to="/updates"
                    arrow="right"
                    onClick={() => setNextToken(data.listPosts.nextToken)}
                  >
                    Explore more updates
                  </Button>
                </Flex>,
              ];
            }}
          </Connect>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

AllProjects.propTypes = {
  width: PropTypes.number,
};

export default AllProjects;
