import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import { Flex, Box } from 'rebass';

import useWindowDimensions from 'utils/getWindowDimensions';

import UpdateContainer from 'containers/UpdateContainer';

import { listPosts } from '../../../src/graphql/queries';

const AllProjects = () => {
  const [nextToken, setNextToken] = useState(null);
  const { width, height, scrollWidth, scrollHeight } = useWindowDimensions();

  return (
    <React.Fragment>
      <Flex
        flexDirection="column"
        sx={{ background: '#151417' }}
        justifyContent="space-around"
        pl={[width * 0.0729]}
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
              return [
                data.listPosts.items.map(thisItem => (
                  <Flex>
                    <Box pr={[width * 0.0039]} py={['40px']}>
                      <UpdateContainer
                        key={thisItem.id}
                        width={width}
                        height={height}
                        screenWidth={width}
                        screenHeight={height}
                        item={thisItem}
                        staggered
                      />
                    </Box>
                  </Flex>
                )),
                <Flex
                  width="100%"
                  flexDirection="row"
                  justifyContent="flex-end"
                  pb={[100]}
                  pr={width * 0.0729}
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

export default AllProjects;
