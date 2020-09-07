import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Landing from 'containers/Landing';
import AreasContainer from 'containers/AreasContainer';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';
import Footer from 'components/Footer';

import { Flex } from 'rebass';

import messages from './messages';

const AreasPage = ({ width, isTabletMobile }) => {
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
        <title>Rabbit Hole</title>
        <meta name="description" content="FASTLab Contact Page" />
      </Helmet>
      <Landing
        text={<FormattedMessage {...messages.header} />}
        width={width}
        small
      />
      <Flex width={width} flexDirection="column" sx={SX}>
        <AreasContainer width={width} isTabletMobile={isTabletMobile} />
        <RelatedProjectsContainer
          width={width}
          isTabletMobile={isTabletMobile}
        />
      </Flex>
      <Footer width={width} isTabletMobile={isTabletMobile} />
    </React.Fragment>
  );
};

AreasPage.propTypes = {
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default AreasPage;
