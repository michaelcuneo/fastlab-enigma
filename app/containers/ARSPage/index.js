import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import { Flex } from 'rebass';

import Landing from 'containers/Landing';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';
import Footer from 'components/Footer';
import BiomesContainer from 'containers/BiomesContainer';

import messages from './messages';

const BiomesPage = ({ width, isTabletMobile }) => {
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
        <meta name="description" content="FASTLab Biomes Page" />
      </Helmet>
      <Landing
        text={<FormattedMessage {...messages.header} />}
        width={width}
        small
      />
      <Flex flexDirection="column" sx={SX}>
        <BiomesContainer width={width} isTabletMobile={isTabletMobile} />
        <RelatedProjectsContainer
          width={width}
          isTabletMobile={isTabletMobile}
        />
        <Footer width={width} isTabletMobile={isTabletMobile} />
      </Flex>
    </React.Fragment>
  );
};

BiomesPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default BiomesPage;
