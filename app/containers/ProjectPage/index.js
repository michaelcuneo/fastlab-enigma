import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import CollaboratorBio from 'components/CollaboratorBio';
import ParsedContent from 'components/ParsedContent';

import Slideshow from 'react-slidez';

import { Markup } from 'interweave';

import Landing from 'containers/Landing';

import { Flex } from 'rebass';

import OverlayContainer from 'containers/OverlayContainer';
import Footer from 'components/Footer';

import S3Modal from 'components/S3Modal';

import useWindowDimensions from 'utils/getWindowDimensions';

import { DetailHeader } from 'components/DetailHeader';
import { DetailText } from 'components/DetailText';

import { getProject } from '../../../src/graphql/queries';

function ProjectPage({ match }) {
  const { width } = useWindowDimensions();
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  let SX;

  if (isTabletMobile) {
    SX = {
      position: 'relative',
      height: 'auto',
      maxWidth: '100%',
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  } else {
    SX = {
      position: 'absolute',
      height: 'auto',
      maxWidth: '100%',
      top: '400px',
      background: '#151417',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    };
  }

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Project Page</title>
        <meta name="description" content="Fastlab Contact Page" />
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
              <Landing
                text={<Markup content={data.getProject.title} />}
                small
              />
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
                    <Flex width={[1, 1, width * 0.4229]} flexDirection="column">
                      <DetailHeader>ABSTRACT</DetailHeader>
                      <DetailText>
                        <ParsedContent content={data.getProject.abstract} />
                      </DetailText>
                      <DetailHeader>DETAILS</DetailHeader>
                      <DetailText>
                        <ParsedContent content={data.getProject.details} />
                      </DetailText>
                    </Flex>
                    <Flex pl={width * 0.0781} flexDirection="column">
                      <DetailHeader>COLLABORATORS</DetailHeader>
                      <DetailText>
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
                  {/* Replace this soon with a better slideshow */}
                  <Flex
                    sx={{
                      position: 'relative',
                    }}
                    flexDirection={isTabletMobile ? 'column' : 'row'}
                    justifyContent="flex-begin"
                    alignItems="flex-begin"
                    minHeight="500px"
                    maxHeight="800px"
                    px={[width * 0.0933, width * 0.0933, width * 0.2161]}
                  >
                    {data.getProject.gallery.images.items && (
                      <Slideshow
                        showIndex
                        autoplay={false}
                        enableKeyboard
                        useDotIndex
                        height="500px"
                        width={`${width * 0.4229}px`}
                        effect="fade"
                      >
                        {data.getProject.gallery.images.items.map(image => (
                          <S3Modal
                            key={image.id}
                            imgKey={`public/${image.key}`}
                            sWidth={Math.round(width * 0.4229)}
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
                    px={[width * 0.0933, width * 0.0933, width * 0.2161]}
                  >
                    <Flex flexDirection="column" pr={width * 0.1172}>
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
                <Footer />
              </Flex>
            </React.Fragment>
          );
        }}
      </Connect>
      <OverlayContainer />
    </React.Fragment>
  );
}

ProjectPage.propTypes = {
  match: PropTypes.object,
};

export default ProjectPage;
