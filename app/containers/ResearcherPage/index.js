import React from 'react';
import PropTypes from 'prop-types';
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

import { Flex, Box } from 'rebass';

import Button from 'components/Button';

import useWindowDimensions from 'utils/getWindowDimensions';

import { DetailHeader } from './DetailHeader';
import { DetailText } from './DetailText';
import { StyledFlexHeader } from './StyledFlexHeader';
import { StyledGradientHeader } from './StyledGradientHeader';

import messages from './messages';
import { getStaff } from '../../../src/graphql/queries';

function ResearcherPage({ match }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const { width, height } = useWindowDimensions();

  return (
    <React.Fragment>
      <Helmet key="Helmet">
        <title>About Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <VideoHeader />
      <StyledFlexHeader isTabletMobile={isTabletMobile} width={width}>
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
              }}
            >
              <Flex
                sx={{
                  position: 'relative',
                }}
                justifyContent="flex-begin"
                alignItems="flex-begin"
                pt="40px"
                pb="142px"
                px={width * 0.0729}
              >
                <Flex flexDirection="column">
                  <Box>
                    <Button to="/about" color="dark" arrow="left">
                      Back
                    </Button>
                  </Box>
                  <Box pt="50px">
                    <SideBio
                      data={data.getStaff}
                      width={width}
                      height={height}
                    />
                  </Box>
                </Flex>
                <Flex
                  height="auto"
                  flexDirection="column"
                  maxWidth={width * 0.4313}
                  pt="40px"
                  pl={width * 0.0802}
                  sx={{ position: 'relative' }}
                >
                  <DetailHeader pb={['51px']}>
                    {data.getStaff.name}
                  </DetailHeader>
                  <DetailText>
                    <ParsedContent content={data.getStaff.bio} />
                  </DetailText>
                </Flex>
              </Flex>
              <RelatedProjectsContainer />
              <Footer />
            </Flex>
          );
        }}
      </Connect>
      <OverlayContainer />
    </React.Fragment>
  );
}

ResearcherPage.propTypes = {
  match: PropTypes.object,
};

export default ResearcherPage;
