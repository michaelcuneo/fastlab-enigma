import React from 'react';

import Button from 'components/Button';

import { useMediaQuery } from 'react-responsive';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import { Flex, Box } from 'rebass';

import ProjectContainer from 'containers/ProjectContainer';
import MobileProjectContainer from 'containers/MobileProjectContainer';

import useWindowDimensions from 'utils/getWindowDimensions';

import { StyledText } from './StyledText';

import Overlay from './Overlay';

import { listProjects } from '../../../src/graphql/queries';

const RelatedProjectsContainer = () => {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });
  const { width, height } = useWindowDimensions();

  return (
    <React.Fragment>
      <Flex flexDirection="column" width={width}>
        <Overlay width={width} />
        <Flex
          flexDirection="column"
          sx={{ background: '#EC184A' }}
          justifyContent="space-around"
          pl={[width * 0.0729]}
        >
          <Box pt={['172px']} pb={['60px']}>
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
                      screenWidth={width}
                      screenHeight={height}
                      staggered
                    />
                  ) : (
                    <ProjectContainer
                      key={item.id}
                      item={item}
                      screenWidth={width}
                      screenHeight={height}
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
          justifyContent="flex-end"
          sx={{ background: '#ec184a' }}
          pb={[100]}
          pr={[width * 0.0729]}
        >
          <Button color="pink" to="/projects">
            Explore more projects
          </Button>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default RelatedProjectsContainer;
