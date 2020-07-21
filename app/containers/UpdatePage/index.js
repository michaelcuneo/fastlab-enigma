import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

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
