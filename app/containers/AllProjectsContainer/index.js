import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import { Flex, Box } from 'rebass';

import ProjectContainer from 'containers/ProjectContainer';
import MobileProjectContainer from 'containers/MobileProjectContainer';

import { StyledText } from './StyledText';

import { listProjects } from '../../../src/graphql/queries';

const AllProjects = ({ dark, width, isTabletMobile }) => {
  const [nextToken, setNextToken] = useState(null);

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
          <Box
            pt={['40px', '40px', '182px']}
            pb={['40px', '40px', '182px']}
            px={[width * 0.0933, width * 0.0933, width * 0.0729]}
          >
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
                      <ProjectContainer
                        key={thisItem.id}
                        width={width}
                        height={innerHeight}
                        item={thisItem}
                        isTabletMobile={isTabletMobile}
                        wrap
                      />
                    ) : (
                      <MobileProjectContainer
                        key={thisItem.id}
                        width={width}
                        item={thisItem}
                        isTabletMobile={isTabletMobile}
                        wrap
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
  isTabletMobile: PropTypes.bool,
};

export default AllProjects;
