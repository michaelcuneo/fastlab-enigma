import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import Button from 'components/Button';

import { Flex, Box, Text } from 'rebass';

import UpdateContainer from 'containers/UpdateContainer';
import Overlay from './Overlay';

import { listPosts } from '../../../src/graphql/queries';

const LatestUpdatesContainer = ({ width, height, dark }) => {
  const StyledText = styled(Text)`
    font-size: 34pt;
    font-family: 'archiaregular', sans-serif;
    color: white;
  `;

  return (
    <React.Fragment>
      {!dark && <Overlay width={width} height={height} />}
      <Box
        sx={{ background: dark ? '#151417' : '#EC184A' }}
        pl={width * 0.0729}
      >
        {!dark && (
          <Box pt={['172px']} pb={['60px']}>
            <StyledText>Latest Updates</StyledText>
          </Box>
        )}
      </Box>
      <Flex
        sx={{ background: dark ? '#151417' : '#EC184A' }}
        px={width * 0.0729}
      >
        <Connect
          key="CategorySelector"
          query={graphqlOperation(listPosts, {
            limit: 3,
          })}
        >
          {({ data, loading, error }) => {
            if (error) return <h3>Error</h3>;
            if (loading || !data) return null;
            return data.listPosts.items.map(
              item =>
                item && (
                  <UpdateContainer
                    key={item.id}
                    width={width * 0.2792}
                    height={height * 0.5926}
                    screenWidth={width}
                    screenHeight={height}
                    item={item}
                  />
                ),
            );
          }}
        </Connect>
      </Flex>
      {!dark && (
        <Flex
          width="100%"
          flexDirection="row"
          justifyContent="flex-end"
          sx={{ background: '#EC184A' }}
          pb={[100]}
          pr={['6.88vw']}
        >
          <Button color="pink" to="/updates" arrow="right">
            See all updates
          </Button>
        </Flex>
      )}
    </React.Fragment>
  );
};

LatestUpdatesContainer.propTypes = {
  dark: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default LatestUpdatesContainer;
