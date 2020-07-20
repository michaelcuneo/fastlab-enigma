import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';
import { FormattedMessage } from 'react-intl';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import ParsedContent from 'components/ParsedContent';
import SideBio from 'components/SideBio';
import BottomBio from 'components/BottomBio';
import Footer from 'components/Footer';

import OverlayContainer from 'containers/OverlayContainer';
import Landing from 'containers/Landing';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';

import { Flex, Box } from 'rebass';

import Button from 'components/Button';

import useWindowDimensions from 'utils/getWindowDimensions';

import { DetailHeader } from 'components/DetailHeader';
import { DetailText } from 'components/DetailText';

import messages from './messages';
import { getStaff } from '../../../src/graphql/queries';

function ResearcherPage({ match }) {
  const { width, height } = useWindowDimensions();
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  let SX;

  if (isTabletMobile) {
    SX = {
      position: 'absolute',
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
        <title>About Page</title>
        <meta name="description" content="Fastlab Contact Page" />
      </Helmet>
      <Landing text={<FormattedMessage {...messages.header} />} small />
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
              sx={SX}
            >
              <Flex
                sx={{
                  position: 'relative',
                }}
                justifyContent="flex-begin"
                alignItems="flex-begin"
                pt="40px"
                pb={isTabletMobile ? '40px' : '140px'}
                px={isTabletMobile ? '0px' : width * 0.0729}
              >
                {isTabletMobile ? (
                  <React.Fragment>
                    <Flex flexWrap="wrap" direction="column" maxWidth="95%">
                      <Flex
                        height="auto"
                        flexDirection="column"
                        pt="40px"
                        minWidth="100%"
                        width="100%"
                        px={width * 0.0802}
                        sx={{ position: 'relative' }}
                      >
                        <Button to="/about" color="dark" arrow="left">
                          Back
                        </Button>
                        <DetailHeader pb={['51px']}>
                          {data.getStaff.name}
                        </DetailHeader>
                        <DetailText>
                          <ParsedContent content={data.getStaff.bio} />
                        </DetailText>
                      </Flex>
                      <Flex
                        height="auto"
                        flexDirection="column"
                        pt="40px"
                        pl={width * 0.0802}
                        sx={{ position: 'relative' }}
                      >
                        <BottomBio
                          data={data.getStaff}
                          width={width}
                          height={height}
                        />
                        <Button to="/about" color="dark" arrow="left">
                          Back
                        </Button>
                      </Flex>
                    </Flex>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
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
                  </React.Fragment>
                )}
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
