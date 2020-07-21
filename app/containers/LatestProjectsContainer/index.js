import React from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';

import Sig1 from 'images/scribbles_mark-1-white.svg';
import Sig3 from 'images/scribbles_mark-3-white.svg';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import Button from 'components/Button';

import { Flex, Image } from 'rebass';
import ProjectContainer from 'containers/ProjectContainer';
import MobileProjectContainer from 'containers/MobileProjectContainer';

import { listProjects } from '../../../src/graphql/queries';

const LatestProjectsContainer = ({ dark, width }) => {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });
  const { innerHeight } = window;

  return (
    <React.Fragment>
      <Flex
        flexDirection="column"
        sx={{ position: 'relative', background: '#151417', zIndex: '1' }}
        justifyContent="space-around"
      >
        <Flex
          flexWrap={isTabletMobile ? 'wrap' : 'none'}
          width="100%"
          minHeight={innerHeight * 1.25}
          height="auto"
          px={[0, 0, width * 0.0729]}
        >
          <Connect
            key="LatestProjectsData"
            query={graphqlOperation(listProjects, {
              filter: {
                featured: {
                  eq: true,
                },
              },
              limit: 100,
            })}
          >
            {({ data, loading, error }) => {
              if (error) return <h3>Error</h3>;
              if (loading || !data) return null;
              return !isTabletMobile ? (
                <React.Fragment>
                  <ProjectContainer
                    key={data.listProjects.items[0].id}
                    width={width * 0.2885}
                    height={innerHeight * 0.3981}
                    top={`${innerHeight * 0.1917}px`}
                    left="0px"
                    item={data.listProjects.items[0]}
                  />
                  <Image
                    sx={{
                      width: width * 0.1292,
                      height: innerHeight * 0.1769,
                      position: 'absolute',
                      left: `${width * 0.3323}px`,
                      top: `${innerHeight * 0.087}px`,
                    }}
                    src={Sig3}
                  />
                  <ProjectContainer
                    key={data.listProjects.items[1].id}
                    width={width * 0.212}
                    height={innerHeight * 0.4685}
                    top={`${innerHeight * 0.388}px`}
                    left={`${width * 0.2885}px`}
                    item={data.listProjects.items[1]}
                  />
                  <ProjectContainer
                    key={data.listProjects.items[2].id}
                    width={width * 0.2193}
                    height={innerHeight * 0.4685}
                    top={`${innerHeight * 0.2722}px`}
                    left={`${width * 0.5005}px`}
                    item={data.listProjects.items[2]}
                  />
                  <ProjectContainer
                    key={data.listProjects.items[3].id}
                    width={width * 0.2802}
                    height={innerHeight * 0.4685}
                    top={`${innerHeight * 0.038}px`}
                    left={`${width * 0.7198}px`}
                    item={data.listProjects.items[3]}
                  />
                  <ProjectContainer
                    key={data.listProjects.items[4].id}
                    width={width * 0.1521}
                    height={innerHeight * 0.3852}
                    top={`${innerHeight * 0.5898}px`}
                    left={`${width * 0.1365}px`}
                    item={data.listProjects.items[4]}
                  />
                  <ProjectContainer
                    key={data.listProjects.items[5].id}
                    width={width * 0.212}
                    height={innerHeight * 0.3852}
                    top={`${innerHeight * 0.8565}px`}
                    left={`${width * 0.4323}px`}
                    item={data.listProjects.items[5]}
                  />
                  <ProjectContainer
                    key={data.listProjects.items[6].id}
                    width={width * 0.212}
                    height={innerHeight * 0.4685}
                    top={`${innerHeight * 0.6083}px`}
                    left={`${width * 0.7198}px`}
                    item={data.listProjects.items[6]}
                  />
                </React.Fragment>
              ) : (
                data.listProjects.items.map(item => (
                  <MobileProjectContainer key={item.id} item={item} staggered />
                ))
              );
            }}
          </Connect>
          <Image
            sx={{
              position: 'absolute',
              left: `-${width * 0.1292} / 2`,
              bottom: `170px`,
            }}
            width={width * 0.1292}
            src={Sig1}
          />
        </Flex>
      </Flex>
      {!dark && (
        <Flex
          width="100%"
          flexDirection="row"
          justifyContent={isTabletMobile ? 'center' : 'flex-end'}
          sx={{ background: '#151417' }}
          pb={[40, 40, 80]}
          pt={[40, 40, 80]}
          pr={[0, 0, width * 0.0729]}
        >
          <Button color="dark" to="/projects" arrow="right">
            Explore more projects
          </Button>
        </Flex>
      )}
    </React.Fragment>
  );
};

LatestProjectsContainer.propTypes = {
  dark: PropTypes.bool,
  width: PropTypes.number,
};

export default LatestProjectsContainer;
