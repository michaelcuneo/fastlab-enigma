import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';

import Button from 'components/Button';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import { Flex, Box } from 'rebass';

import ProjectContainer from 'containers/ProjectContainer';
import MobileProjectContainer from 'containers/MobileProjectContainer';

import useWindowDimensions from 'utils/getWindowDimensions';

import { StyledText } from './StyledText';

import { listProjects } from '../../../src/graphql/queries';

const AllProjects = ({ dark }) => {
  const [nextToken, setNextToken] = useState(null);
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });
  const { width, height } = useWindowDimensions();

  return (
    <React.Fragment>
      <Flex
        flexDirection="column"
        sx={{ background: dark ? '#151417' : '#EC184A' }}
        justifyContent="space-around"
        pl={[width * 0.0729]}
      >
        {!dark && (
          <Box pt={['172px']} pb={['60px']}>
            <StyledText>All Projects</StyledText>
          </Box>
        )}
        <Flex flexWrap="wrap" flexDirection="row" sx={{ height: 'auto' }}>
          <Connect
            query={graphqlOperation(listProjects, {
              limit: 9,
              nextToken,
            })}
          >
            {({ data, loading, error }) => {
              if (error) return <h3>Error</h3>;
              if (loading || !data) return null;
              return (
                <React.Fragment>
                  {data.listProjects.items.map(thisItem =>
                    !isTabletMobile ? (
                      <Box
                        key={thisItem.id}
                        pr={[width * 0.0039]}
                        py={['40px']}
                      >
                        <ProjectContainer
                          width={width}
                          height={height}
                          screenWidth={width}
                          screenHeight={height}
                          item={thisItem}
                          staggered
                        />
                      </Box>
                    ) : (
                      <MobileProjectContainer
                        key={thisItem.id}
                        item={thisItem}
                        staggered
                      />
                    ),
                  )}
                  <Flex
                    width="100%"
                    flexDirection="row"
                    justifyContent="flex-end"
                    pb={[100]}
                    pr={width * 0.0729}
                  >
                    <Button
                      color="pink"
                      to="/projects"
                      arrow="right"
                      onClick={() => setNextToken(data.listProjects.nextToken)}
                    >
                      Explore more projects
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

AllProjects.propTypes = {
  dark: PropTypes.bool,
};

export default AllProjects;
