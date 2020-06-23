import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import CollaboratorBio from 'components/CollaboratorBio';
import ParsedContent from 'components/ParsedContent';

import Slider from 'react-slick';

import { useMediaQuery } from 'react-responsive';

import H2 from 'components/H2';

import { Markup } from 'interweave';

import VideoHeader from 'containers/VideoHeader';

import { Flex, Box, Text } from 'rebass';

import OverlayContainer from 'containers/OverlayContainer';
import Footer from 'components/Footer';

import CustomS3Image from './CustomS3Image';
import { getProject } from '../../../src/graphql/queries';

function ProjectPage({ width, height, match }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const DetailHeader = styled(Box)`
    font-family: 'archia', sans-serif;
    font-size: 40px;
    line-height: 25px;
    color: #ec184a;
  `;

  const DetailText = styled(Text)`
    font-family: 'archia', sans-serif;
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
    top: 0px;
    left: 0px;
    right: 0px;
    height: 400px;
    align-items: center;
    padding: 0px 0px 0px ${isTabletMobile ? width * 0.096 : width * 0.2167}px;
    z-index: 3;
  `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Project Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <VideoHeader width={width} height={height} />
      <Connect
        key="LatestProjectsData"
        query={graphqlOperation(getProject, { id: match.params.id })}
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
                  <Markup content={data.getProject.title} />
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
                      <DetailHeader pt="100px" pb="30px">
                        ABSTRACT
                      </DetailHeader>
                      <DetailText>
                        <ParsedContent content={data.getProject.abstract} />
                      </DetailText>
                      <DetailHeader pt="80px" pb="75px">
                        DETAILS
                      </DetailHeader>
                      <DetailText
                        sx={{
                          width: `${width * 0.4229}px`,
                        }}
                        pb="30px"
                      >
                        <ParsedContent content={data.getProject.details} />
                      </DetailText>
                    </Flex>
                    <Flex pl={width * 0.0781} flexDirection="column">
                      <DetailHeader pt="100px" pb="30px">
                        COLLABORATORS
                      </DetailHeader>
                      <DetailText pb="30px">
                        {data.getProject.collaborators.items.map(item => [
                          <CollaboratorBio width={width} data={item.staff} />,
                        ])}
                      </DetailText>
                    </Flex>
                  </Flex>
                  <Slider {...settings}>
                    {data.getProject.gallery.images.items.map(image => (
                      <Flex flexDirection="row" height="450px">
                        <CustomS3Image
                          key={image.id}
                          style={{
                            container: {
                              width: width * 0.4229,
                              height: width * 0.4229,
                            },
                            image: {
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center',
                            },
                          }}
                          imgKey={image.key}
                        />
                      </Flex>
                    ))}
                  </Slider>
                  <Flex flexDirection="row">
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

ProjectPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  match: PropTypes.object,
};

export default ProjectPage;
