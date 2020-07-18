import React from 'react';
import PropTypes from 'prop-types';
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

import { Flex } from 'rebass';

import OverlayContainer from 'containers/OverlayContainer';
import Footer from 'components/Footer';

import moment from 'moment';

import S3Modal from 'components/S3Modal';

import useWindowDimensions from 'utils/getWindowDimensions';

import { DetailHeader } from './DetailHeader';
import { DetailText } from './DetailText';
import { StyledFlexHeader } from './StyledFlexHeader';
import { StyledGradientHeader } from './StyledGradientHeader';

import { getPost } from '../../../src/graphql/queries';

function UpdatePage({ match }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const { width } = useWindowDimensions();

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>Project Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <VideoHeader />
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
                isTabletMobile={isTabletMobile}
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
                    {data.getPost.gallery && (
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
                            key={image.key}
                            imgKey={`public/${image.key}`}
                            sWidth={Math.round(width * 0.4229)}
                            lWidth={window.innerWidth}
                          />
                        ))}
                      </Slideshow>
                    )}
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

UpdatePage.propTypes = {
  match: PropTypes.object,
};

export default UpdatePage;
