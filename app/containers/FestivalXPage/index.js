import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import { Flex, Image } from 'rebass';

import FestivalX from 'images/fx.png';

import { DetailHeader } from 'components/DetailHeader';
import Landing from 'containers/Landing';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';
import Footer from 'components/Footer';

import messages from './messages';

const FestivalXPage = ({ width, isTabletMobile }) => {
  const { innerHeight } = window;

  let SX;

  if (isTabletMobile) {
    SX = {
      display: 'relative',
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
        <title>Biomes 2020</title>
        <meta name="description" content="FASTLab Festival X Page" />
      </Helmet>
      <Landing
        text={<FormattedMessage {...messages.header} />}
        width={width}
        small
      />
      <Flex flexDirection="column" sx={SX}>
        <Flex
          p="5"
          flexDirection="column"
          alignContent="center"
          alignItems="center"
        >
          <Image width="50vw" src={FestivalX} />
          <DetailHeader sx={{ padding: '40px' }}>Festival X</DetailHeader>
          <DetailHeader sx={{ padding: '40px' }}>Coming soon!</DetailHeader>
          <DetailHeader sx={{ padding: '40px' }}>
            13-15 November 2020
          </DetailHeader>
        </Flex>
        <RelatedProjectsContainer
          width={width}
          isTabletMobile={isTabletMobile}
        />
        <Footer width={width} isTabletMobile={isTabletMobile} />
      </Flex>
    </React.Fragment>
  );
};

FestivalXPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default FestivalXPage;
