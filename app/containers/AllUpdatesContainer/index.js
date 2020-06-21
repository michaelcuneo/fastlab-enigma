import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import { Flex, Box, Text } from 'rebass';

import PostContainer from 'containers/UpdateContainer';
import Overlay from './Overlay';

import { listPosts } from '../../../src/graphql/queries';

const AllProjects = ({ width, height, dark }) => {
  const [nextToken, setNextToken] = useState(null);

  const StyledText = styled(Text)`
    font-size: 34pt;
    font-family: 'archiaregular', sans-serif;
    color: white;
  `;

  return (
    <React.Fragment>
      {!dark && <Overlay width={width} height={height} />}
      <Flex
        flexDirection="column"
        sx={{ background: dark ? '#151417' : '#EC184A' }}
        justifyContent="space-around"
        pl={[width * 0.0729]}
      >
        {!dark && (
          <Box pt={['172px']} pb={['60px']}>
            <StyledText>FastLab projects</StyledText>
          </Box>
        )}
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
                      <PostContainer
                        key={thisItem.id}
                        width={width * 0.2792}
                        height={height * 0.4167}
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
                    color="pink"
                    to="/updates"
                    arrow="right"
                    onClick={() => setNextToken(data.listPosts.nextToken)}
                  >
                    Explore more posts
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
  dark: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default AllProjects;
