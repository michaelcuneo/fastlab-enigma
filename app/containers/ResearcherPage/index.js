import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

import ParsedContent from 'components/ParsedContent';
import SideBio from 'components/SideBio';
import BottomBio from 'components/BottomBio';

import Landing from 'containers/Landing';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';
import Footer from 'components/Footer';

import { Flex, Box } from 'rebass';

import Button from 'components/Button';

import { DetailHeader } from 'components/DetailHeader';
import { DetailText } from 'components/DetailText';

import messages from './messages';
import { getStaff } from '../../../src/graphql/queries';

function ResearcherPage({ match, width, height, isTabletMobile }) {
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
        <title>About Page</title>
        <meta name="description" content="FASTLab Contact Page" />
      </Helmet>
      <Landing
        text={<FormattedMessage {...messages.header} />}
        width={width}
        small
      />
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
              <RelatedProjectsContainer width={width} />
            </Flex>
          );
        }}
      </Connect>
      <Footer width={width} isTabletMobile={isTabletMobile} />
    </React.Fragment>
  );
}

ResearcherPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isTabletMobile: PropTypes.bool,
  match: PropTypes.object,
};

export default ResearcherPage;
