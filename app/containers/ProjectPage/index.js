import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import ReactPlayer from 'react-player';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import CollaboratorBio from 'components/CollaboratorBio';
import ParsedContent from 'components/ParsedContent';

import Slideshow from 'react-slidez';

import Landing from 'containers/Landing';
import Footer from 'components/Footer';

import { Flex } from 'rebass';

import S3Modal from 'components/S3Modal';

import { DetailHeader } from 'components/DetailHeader';
import { DetailText } from 'components/DetailText';

import { getProject } from '../../../src/graphql/queries';

function ProjectPage({ match, width, isTabletMobile }) {
  const { innerHeight } = window;

  let SX;

  if (isTabletMobile) {
    SX = {
      position: 'relative',
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  } else {
    SX = {
      position: 'relative',
      marginTop: `-${innerHeight - 400}px`,
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  }

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Project Page</title>
        <meta name="description" content="FASTLab Contact Page" />
      </Helmet>
      <Connect
        key="LatestProjectsData"
        query={graphqlOperation(getProject, { id: match.params.id })}
      >
        {({ data, loading, error }) => {
          if (error) return <h3>Error</h3>;
          if (loading || !data) return null;

          return (
            <React.Fragment>
              <Landing text={data.getProject.title} width={width} small />
              <Flex width={width} flexDirection="column" sx={SX}>
                <Flex
                  flexDirection="column"
                  sx={{
                    position: 'relative',
                  }}
                >
                  <Flex
                    sx={{
                      position: 'relative',
                    }}
                    flexDirection={isTabletMobile ? 'column' : 'row'}
                    justifyContent="flex-begin"
                    alignItems="flex-begin"
                    px={[width * 0.0933, width * 0.0933, width * 0.2161]}
                  >
                    <Flex
                      minWidth={[1, 1, width * 0.4229]}
                      flexDirection="column"
                    >
                      <DetailHeader
                        pt={['60px', '60px', '105px']}
                        pb={['44px', '44px', '30px']}
                      >
                        ABSTRACT
                      </DetailHeader>
                      <DetailText pb={['44px', '44px', '85px']}>
                        <ParsedContent content={data.getProject.abstract} />
                      </DetailText>
                      <DetailHeader pb={['44px', '44px', '30px']}>
                        DETAILS
                      </DetailHeader>
                      <DetailText pb={['44px', '44px', '85px']}>
                        <ParsedContent content={data.getProject.details} />
                      </DetailText>
                    </Flex>
                    <Flex
                      minWidth={[1, 1, width * 0.2869]}
                      pl={isTabletMobile ? 0 : width * 0.0781}
                      flexDirection="column"
                    >
                      <DetailHeader
                        pt={['60px', '60px', '105px']}
                        pb={['44px', '44px', '30px']}
                      >
                        COLLABORATORS
                      </DetailHeader>
                      <DetailText pb={['44px', '44px', '85px']}>
                        {data.getProject.collaborators.items.map(item => [
                          <CollaboratorBio
                            key={item.id}
                            width={width}
                            data={item.staff}
                          />,
                        ])}
                      </DetailText>
                    </Flex>
                  </Flex>
                  {data.getProject.videoURL !== null && (
                    <Flex
                      sx={{
                        position: 'relative',
                      }}
                      flexDirection={isTabletMobile ? 'column' : 'row'}
                      justifyContent="flex-begin"
                      alignItems="flex-begin"
                      px={[width * 0.0933, width * 0.0933, width * 0.2161]}
                    >
                      <div className="player-wrapper" width={width * 0.4229}>
                        <ReactPlayer
                          className="react-player"
                          width={width * 0.4229}
                          height="100%"
                          url={data.getProject.videoURL}
                        />
                      </div>
                    </Flex>
                  )}
                  {/* Replace this soon with a better slideshow */}
                  <Flex
                    sx={{
                      position: 'relative',
                      zIndex: 5,
                    }}
                    flexDirection={isTabletMobile ? 'column' : 'row'}
                    justifyContent="flex-begin"
                    alignItems="flex-begin"
                    minHeight="500px"
                    maxHeight="800px"
                    px={[0, 0, width * 0.2161]}
                  >
                    {data.getProject.gallery.images.items && (
                      <Slideshow
                        showIndex
                        autoplay={false}
                        enableKeyboard
                        useDotIndex
                        height="500px"
                        width={isTabletMobile ? `100%` : `${width * 0.4229}px`}
                        effect="fade"
                      >
                        {data.getProject.gallery.images.items.map(image => (
                          <S3Modal
                            key={image.id}
                            imgKey={`public/${image.key}`}
                            sWidth={
                              isTabletMobile
                                ? Math.round(width)
                                : Math.round(width * 0.4229)
                            }
                            lWidth={width}
                          />
                        ))}
                      </Slideshow>
                    )}
                  </Flex>
                  <Flex
                    sx={{
                      position: 'relative',
                    }}
                    flexDirection={isTabletMobile ? 'column' : 'row'}
                    justifyContent="flex-begin"
                    alignItems="flex-begin"
                    px={[width * 0.0933, width * 0.0933, width * 0.2167]}
                  >
                    <Flex
                      flexDirection="column"
                      width={isTabletMobile ? '100%' : width * 0.2167}
                    >
                      <DetailHeader pt="80px" pb="30px">
                        FUNDING
                      </DetailHeader>
                      <DetailText pb="80px">
                        <ParsedContent content={data.getProject.funding} />
                      </DetailText>
                    </Flex>
                    <Flex flexDirection="column">
                      <DetailHeader pt="80px" pb="30px">
                        CATEGORIES
                      </DetailHeader>
                      <DetailText
                        sx={{
                          width: `${width * 0.4229}px`,
                        }}
                        pb="80px"
                      >
                        <ParsedContent
                          content={data.getProject.category.label}
                        />
                      </DetailText>
                    </Flex>
                  </Flex>
                </Flex>
                <Footer width={width} isTabletMobile={isTabletMobile} />
              </Flex>
            </React.Fragment>
          );
        }}
      </Connect>
    </React.Fragment>
  );
}

ProjectPage.propTypes = {
  match: PropTypes.object,
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default ProjectPage;
