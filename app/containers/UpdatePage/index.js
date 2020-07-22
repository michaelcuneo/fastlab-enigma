import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';

import Slideshow from 'react-slidez';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import CollaboratorBio from 'components/CollaboratorBio';
import ParsedContent from 'components/ParsedContent';

import { Markup } from 'interweave';

import Landing from 'containers/Landing';

import { Flex } from 'rebass';

import OverlayContainer from 'containers/OverlayContainer';
import Footer from 'components/Footer';

import moment from 'moment';

import S3Modal from 'components/S3Modal';

import { DetailHeader } from 'components/DetailHeader';
import { DetailText } from 'components/DetailText';

import { getPost } from '../../../src/graphql/queries';

function UpdatePage({ match, width, height }) {
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
        query={graphqlOperation(getPost, { id: match.params.id })}
      >
        {({ data, loading, error }) => {
          if (error) return <h3>Error</h3>;
          if (loading || !data) return null;

          return (
            <React.Fragment>
              <Landing text={<Markup content={data.getPost.title} />} small />
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
                      <DetailText>
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
      <OverlayContainer width={width} height={height} />
    </React.Fragment>
  );
}

UpdatePage.propTypes = {
  match: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default UpdatePage;
