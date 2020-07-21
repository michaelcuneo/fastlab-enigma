import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';

import Button from 'components/Button';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import { Flex, Box } from 'rebass';

import ProjectContainer from 'containers/ProjectContainer';
import MobileProjectContainer from 'containers/MobileProjectContainer';

import { StyledText } from './StyledText';

import { listProjects } from '../../../src/graphql/queries';

const AllProjects = ({ dark, width }) => {
  const [nextToken, setNextToken] = useState(null);
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const { innerHeight } = window;

  return (
    <React.Fragment>
      <Flex
        flexDirection="column"
        sx={{ background: dark ? '#151417' : '#EC184A' }}
        justifyContent="space-around"
        px={[0, 0, width * 0.0729]}
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
                      <Box key={thisItem.id}>
                        <ProjectContainer
                          width={width}
                          height={innerHeight}
                          screenWidth={width}
                          screenHeight={innerHeight}
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
                    justifyContent={isTabletMobile ? 'center' : 'flex-end'}
                    pb={[40, 40, 80]}
                    pt={[40, 40, 80]}
                    pr={[0, 0, width * 0.0729]}
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
  width: PropTypes.number,
};

export default AllProjects;
