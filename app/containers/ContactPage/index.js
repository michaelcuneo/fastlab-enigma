import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import { useMediaQuery } from 'react-responsive';

import { Flex, Text, Image } from 'rebass';

import Sig3 from 'images/scribbles_mark-3-white.svg';

import VideoHeader from 'containers/VideoHeader';
import H2 from 'components/H2';
import Footer from 'components/Footer';

import OverlayContainer from 'containers/OverlayContainer';

import messages from './messages';

function ContactPage({ width, height }) {
  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

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
        <title>Contact Page</title>
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
      <Flex
        width={width}
        flexDirection="column"
        sx={{
          position: 'absolute',
          height: '100% - 400px',
          top: '400px',
          background: '#151417',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <Flex
          sx={{
            position: 'relative',
          }}
          justifyContent="flex-begin"
          alignItems="flex-begin"
          pt={['20px', '20px', '182px']}
          pb={['20px', '20px', '182px']}
          px={[width * 0.0933, width * 0.0933, width * 0.2167]}
        >
          <Image
            sx={{
              position: 'absolute',
              left: `-${(width * 0.1292) / 4}px !important`,
              top: height * 0.1444,
            }}
            width={width * 0.1292}
            src={Sig3}
          />
          <Flex
            height="auto"
            flexDirection="column"
            sx={{ position: 'relative', minWidth: width * 0.4229 }}
          >
            <Text pb={37}>
              We’re open for business and would love to hear from you. Feel free
              to drop us a line and ask any questions or to get the ball rolling
              on a new project.
            </Text>
            <Text
              fontFamily="'jetbrains-bold'"
              color="#0FF48D"
              fontSize="16px"
              lineHeight="25px"
            >
              BUILDING X, NEWSPACE, NEWCASTLE
            </Text>
            <Text
              fontFamily="'jetbrains-bold'"
              color="#0FF48D"
              fontSize="16px"
              lineHeight="25px"
            >
              FASTLAB@SOCI.ORG.AU
            </Text>
            <Text
              fontFamily="'jetbrains-bold'"
              color="#0FF48D"
              fontSize="16px"
              lineHeight="25px"
            >
              (02) 4957 7666
            </Text>
          </Flex>
        </Flex>
        <Footer height={height} width={width} />
      </Flex>
      <OverlayContainer width={width} />
    </React.Fragment>
  );
}

ContactPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ContactPage;
