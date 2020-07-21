import React from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import Button from 'components/Button';

import { Flex, Box } from 'rebass';

import UpdateContainer from 'containers/UpdateContainer';
import MobileUpdateContainer from 'containers/MobileUpdateContainer';

import { StyledHeader } from './StyledHeader';
import Overlay from './Overlay';

import { listPosts } from '../../../src/graphql/queries';

const LatestUpdatesContainer = ({ dark, width, height }) => {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <React.Fragment>
      {!dark && <Overlay width={width} height={height} />}
      <Box
        sx={{ background: dark ? '#151417' : '#EC184A' }}
        px={width * 0.0729}
      >
        {!dark && (
          <Box pt={['172px']} pb={['60px']}>
            <StyledHeader isTabletMobile={isTabletMobile}>
              Latest Updates
            </StyledHeader>
          </Box>
        )}
      </Box>
      <Flex
        flexWrap={isTabletMobile ? 'wrap' : 'none'}
        width="100%"
        height="auto"
        sx={{ background: dark ? '#151417' : '#EC184A' }}
        px={[0, 0, width * 0.0729]}
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
            return data.listPosts.items.map(item =>
              item && isTabletMobile ? (
                <MobileUpdateContainer
                  width={width}
                  key={item.id}
                  item={item}
                />
              ) : (
                <UpdateContainer width={width} key={item.id} item={item} />
              ),
            );
          }}
        </Connect>
      </Flex>
      {!dark && (
        <Flex
          width="100%"
          flexDirection="row"
          justifyContent={isTabletMobile ? 'center' : 'flex-end'}
          sx={{ background: '#EC184A' }}
          pb={[40, 40, 80]}
          pt={[40, 40, 80]}
          pr={[0, 0, width * 0.0729]}
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
