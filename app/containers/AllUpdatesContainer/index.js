import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

import { useMediaQuery } from 'react-responsive';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import { Flex, Box } from 'rebass';

import UpdateContainer from 'containers/UpdateContainer';
import MobileUpdateContainer from 'containers/MobileUpdateContainer';

import { listPosts } from '../../../src/graphql/queries';

const AllUpdates = ({ width }) => {
  const [nextToken, setNextToken] = useState(null);
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const { innerHeight } = window;

  return (
    <React.Fragment>
      <Flex
        flexDirection="column"
        sx="#151417"
        justifyContent="space-around"
        px={[0, 0, width * 0.0729]}
      >
        <Flex flexWrap="wrap" flexDirection="row" sx={{ height: 'auto' }}>
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
              return (
                <React.Fragment>
                  {data.listPosts.items.map(thisItem =>
                    !isTabletMobile ? (
                      <Box pr={[width * 0.0039]} py={['40px']}>
                        <UpdateContainer
                          key={thisItem.id}
                          item={thisItem}
                          width={width}
                          height={innerHeight}
                          screenWidth={width}
                          screenHeight={innerHeight}
                          staggered
                        />
                      </Box>
                    ) : (
                      <MobileUpdateContainer
                        key={thisItem.id}
                        width={width}
                        item={thisItem}
                        staggered
                      />
                    ),
                  )}
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
                  </Flex>
                </React.Fragment>
              );
            }}
          </Connect>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

AllUpdates.propTypes = {
  width: PropTypes.number,
};

export default AllUpdates;
