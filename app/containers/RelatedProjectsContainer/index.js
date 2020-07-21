import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

import { useMediaQuery } from 'react-responsive';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import { Flex, Box } from 'rebass';

import ProjectContainer from 'containers/ProjectContainer';
import MobileProjectContainer from 'containers/MobileProjectContainer';

import { StyledText } from './StyledText';

import Overlay from './Overlay';

import { listProjects } from '../../../src/graphql/queries';

const RelatedProjectsContainer = ({ width }) => {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });
  const { innerHeight } = window;

  return (
    <React.Fragment>
      <Flex flexDirection="column" width={width}>
        <Overlay width={width} />
        <Flex
          flexDirection="column"
          sx={{ background: '#EC184A' }}
          justifyContent="space-around"
          pl={[0, 0, width * 0.0729]}
        >
          <Box
            pl={[width * 0.0729, width * 0.0729, 0]}
            pt={['172px']}
            pb={['60px']}
          >
            <StyledText>Related Projects</StyledText>
          </Box>
          <Flex
            flexWrap="wrap"
            flexDirection="row"
            maxHeight="800px"
            sx={{ height: 'auto' }}
          >
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
                      item={item}
                      staggered
                    />
                  ) : (
                    <ProjectContainer
                      key={item.id}
                      item={item}
                      width={width}
                      height={innerHeight}
                      screenWidth={width}
                      screenHeight={innerHeight}
                      staggered
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
};

RelatedProjectsContainer.propTypes = {
  width: PropTypes.number,
};

export default RelatedProjectsContainer;
