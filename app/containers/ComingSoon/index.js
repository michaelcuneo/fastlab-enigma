import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import ParsedContent from 'components/ParsedContent';

import { Flex } from 'rebass';

import Footer from 'components/Footer';
import Landing from 'containers/Landing';

import { DetailHeader } from 'components/DetailHeader';
import { DetailText } from 'components/DetailText';

const ComingSoon = ({ width, isTabletMobile }) => (
  <React.Fragment>
    <Helmet>
      <title>Coming Soon</title>
      <meta name="description" content="FASTLab" />
    </Helmet>
    <Landing
      text={'The centre of <br /> applied chaos'}
      width={width}
      isTabletMobile={isTabletMobile}
      small
    />
    <Flex
      width={width}
      flexDirection="column"
      sx={{
        position: 'absolute',
        height: 'auto',
        top: '300px',
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
        pt={['40px', '40px', '182px']}
        pb={['40px', '40px', '182px']}
        px={[width * 0.0933, width * 0.0933, width * 0.0729]}
        flexDirection="column"
      >
        <DetailHeader pt="10px" pb="30px">
          <ParsedContent content="FastLab is currently being flipped, mixed, shaken, re-invented and restored for all of your mobile devices." />
        </DetailHeader>
        <DetailText>
          While you are waiting for the mobile version to appear, please feel
          free to open FastLab on your laptop or computer for a perfect
          experience.
        </DetailText>
      </Flex>
    </Flex>
    <Footer width={width} isTabletMobile={isTabletMobile} />
  </React.Fragment>
);

ComingSoon.propTypes = {
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default ComingSoon;
