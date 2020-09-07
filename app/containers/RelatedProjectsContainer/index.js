import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import { Flex, Box } from 'rebass';

import ProjectContainer from 'containers/ProjectContainer';
import MobileProjectContainer from 'containers/MobileProjectContainer';

import { StyledText } from './StyledText';

import Overlay from './Overlay';

import { listProjects } from '../../../src/graphql/queries';

const RelatedProjectsContainer = ({ width, isTabletMobile }) => (
  <React.Fragment>
    <Flex sx={{ position: 'relative' }} flexDirection="column">
      <Overlay width={width} />
      <Flex
        flexDirection="column"
        flexWrap="wrap"
        sx={{ background: '#EC184A' }}
        pl={[0, 0, width * 0.0729]}
      >
        <Box
          pl={[width * 0.0729, width * 0.0729, 0]}
          pt={['172px']}
          pb={['60px']}
        >
          <StyledText>Related Projects</StyledText>
        </Box>
        <Flex flexWrap="wrap" flexDirection="row">
          <Connect
            key="LatestProjectsData"
            query={graphqlOperation(listProjects, {
              filter: {
                featured: {
                  eq: true,
                },
              },
              limit: 3,
            })}
          >
            {({ data, loading, error }) => {
              if (error) return <h3>Error</h3>;
              if (loading || !data) return null;
              return data.listProjects.items.map(item =>
                isTabletMobile ? (
                  <MobileProjectContainer
                    key={item.id}
                    width={width}
                    item={item}
                    wrap
                  />
                ) : (
                  <ProjectContainer
                    key={item.id}
                    width={width}
                    item={item}
                    wrap
                  />
                ),
              );
            }}
          </Connect>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        flexDirection="row"
        justifyContent={isTabletMobile ? 'center' : 'flex-end'}
        sx={{ background: '#ec184a' }}
        pb={[40, 40, 80]}
        pt={[40, 40, 80]}
        pr={[0, 0, width * 0.0729]}
      >
        <Button color="pink" to="/projects">
          Explore more projects
        </Button>
      </Flex>
    </Flex>
  </React.Fragment>
);

RelatedProjectsContainer.propTypes = {
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default RelatedProjectsContainer;
