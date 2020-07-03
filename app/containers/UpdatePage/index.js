import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Slideshow from 'react-slidez';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import CollaboratorBio from 'components/CollaboratorBio';
import ParsedContent from 'components/ParsedContent';

import { useMediaQuery } from 'react-responsive';

import H2 from 'components/H2';

import { Markup } from 'interweave';

import VideoHeader from 'containers/VideoHeader';

import { Flex, Box, Text } from 'rebass';

import OverlayContainer from 'containers/OverlayContainer';
import Footer from 'components/Footer';

import moment from 'moment';

import S3Modal from 'components/S3Modal';
import { getPost } from '../../../src/graphql/queries';

function UpdatePage({ width, height, match }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const DetailHeader = styled(Box)`
    font-family: 'archiaregular', sans-serif;
    font-size: 40px;
    line-height: 25px;
    color: #ec184a;
  `;

  const DetailText = styled(Text)`
    font-family: 'archiaregular', sans-serif;
    font-size: 16px;
    line-height: 25px;
  `;

  const StyledGradientHeader = styled(Flex)`
    position: absolute;
    top: 144px;
    left: 0px;
    right: 0px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), #151417);
    height: 256px;
    z-index: 2;
  `;

  const StyledFlexHeader = styled(Flex)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 400px;
    align-items: center;
    width: ${isTabletMobile ? width * 0.4229 : width * 0.4229};
    z-index: 3;
  `;

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Project Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <VideoHeader width={width} height={height} />
      <Connect
        key="LatestProjectsData"
        query={graphqlOperation(getPost, { id: match.params.id })}
      >
        {({ data, loading, error }) => {
          if (error) return <h3>Error</h3>;
          if (loading || !data) return null;

          return (
            <React.Fragment>
              <StyledFlexHeader
                px={isTabletMobile ? width * 0.096 : width * 0.2167}
              >
                <H2>
                  <Markup content={data.getPost.title} />
                </H2>
              </StyledFlexHeader>
              <StyledGradientHeader />
              <Flex
                width={width}
                flexDirection="column"
                sx={{
                  position: 'absolute',
                  height: 'auto',
                  top: '400px',
                  background: '#151417',
                  borderTop: '1px solid rgba(255, 255, 255, 0.4)',
                  zIndex: 1,
                }}
              >
                <Flex
                  height="auto"
                  width={width}
                  flexDirection="column"
                  pl={width * 0.2161}
                  sx={{
                    position: 'relative',
                  }}
                >
                  <Flex flexDirection="row">
                    <Flex
                      sx={{
                        width: `${width * 0.4229}px`,
                      }}
                      flexDirection="column"
                    >
                      <DetailText
                        sx={{
                          width: `${width * 0.4229}px`,
                        }}
                        pt="80px"
                        pb="30px"
                      >
                        <ParsedContent content={data.getPost.data} />
                      </DetailText>
                    </Flex>
                    <Flex pl={width * 0.0781} flexDirection="column">
                      <DetailHeader pt="100px" pb="30px">
                        AUTHOR
                      </DetailHeader>
                      <DetailText pb="30px">
                        <CollaboratorBio
                          width={width}
                          data={data.getPost.staffID}
                        />
                      </DetailText>
                      <DetailHeader pt="100px" pb="30px">
                        POSTED
                      </DetailHeader>
                      <DetailText pb="30px">
                        {moment(data.getPost.date).format('Do MMMM YYYY')}
                      </DetailText>
                    </Flex>
                  </Flex>
                  <Flex style={{ height: '500px' }}>
                    {data.getPost.gallery !== null && (
                      <Slideshow
                        showIndex
                        autoplay={false}
                        enableKeyboard
                        useDotIndex
                        height="500px"
                        width={`${width * 0.4229}px`}
                        effect="fade"
                      >
                        {data.getPost.gallery.images.items.map(image => (
                          <S3Modal
                            imgKey={`public/${image.key}`}
                            sWidth={Math.round(width * 0.4229)}
                            lWidth={window.innerWidth}
                          />
                        ))}
                      </Slideshow>
                    )}
                  </Flex>
                </Flex>
                <Footer height={height} width={width} />
              </Flex>
            </React.Fragment>
          );
        }}
      </Connect>
      <OverlayContainer width={width} />
    </React.Fragment>
  );
}

UpdatePage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  match: PropTypes.object,
};

export default UpdatePage;
