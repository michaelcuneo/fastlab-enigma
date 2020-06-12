import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { FormattedMessage } from 'react-intl';

import { useMediaQuery } from 'react-responsive';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import H2 from 'components/H2';
import ParsedContent from 'components/ParsedContent';
import SideBio from 'components/SideBio';
import Footer from 'components/Footer';

import OverlayContainer from 'containers/OverlayContainer';
import VideoHeader from 'containers/VideoHeader';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';

import { Flex, Box, Text } from 'rebass';

import Button from 'components/Button';

import messages from './messages';
import { getStaff } from '../../../src/graphql/queries';

function ResearcherPage({ width, height, match }) {
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

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>About Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <VideoHeader width={width} height={height} />
      <StyledFlexHeader>
        <H2>
          <FormattedMessage {...messages.header} />
          <span className="blink_me">_</span>
        </H2>
      </StyledFlexHeader>
      <StyledGradientHeader />
      <Connect
        key="StaffContainer"
        query={graphqlOperation(getStaff, { id: match.params.id })}
      >
        {({ data, loading, error }) => {
          if (error) return <h3 key="Error">Error</h3>;
          if (loading || !data) return null;
          return (
            <Flex
              width={width}
              flexDirection="column"
              justifyContent="center"
              sx={{
                position: 'absolute',
                height: 'auto',
                top: '400px',
                background: '#151417',
                borderTop: '1px solid rgba(255, 255, 255, 0.4)',
              }}
            >
              <Flex
                sx={{
                  position: 'relative',
                }}
                justifyContent="flex-begin"
                alignItems="flex-begin"
                pt="162px"
                px={width * 0.0729}
              >
                <Button to="/about" color="dark">
                  Back
                </Button>
                <Flex
                  height="auto"
                  flexDirection="column"
                  pl={width * 0.0802}
                  sx={{ position: 'relative', minWidth: width * 0.4229 }}
                >
                  <DetailHeader>{data.getStaff.name}</DetailHeader>
                </Flex>
              </Flex>
              <Flex
                sx={{
                  position: 'relative',
                }}
                justifyContent="flex-begin"
                alignItems="flex-begin"
                pt="51px"
                pb="162px"
                px={width * 0.0729}
              >
                <SideBio data={data.getStaff} width={width} height={height} />
                <Flex
                  height="auto"
                  flexDirection="column"
                  pl={width * 0.0802}
                  sx={{ position: 'relative', minWidth: width * 0.4229 }}
                >
                  <DetailText>
                    <ParsedContent content={data.getStaff.bio} />
                  </DetailText>
                </Flex>
              </Flex>
              <RelatedProjectsContainer width={width} height={height} />
              <Footer height={height} width={width} />
            </Flex>
          );
        }}
      </Connect>
      <OverlayContainer width={width} />
    </React.Fragment>
  );
}

ResearcherPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  match: PropTypes.object,
};

export default ResearcherPage;
