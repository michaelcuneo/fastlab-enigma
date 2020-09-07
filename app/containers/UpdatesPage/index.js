import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import AllUpdatesContainer from 'containers/AllUpdatesContainer';
import Footer from 'components/Footer';
import Landing from 'containers/Landing';

import { Flex } from 'rebass';

import messages from './messages';

function UpdatesPage({ width, height, isTabletMobile }) {
  const { innerHeight } = window;

  let SX;

  if (isTabletMobile) {
    SX = {
      position: 'relative',
      maxWidth: '100%',
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
        <title>Updates Page</title>
        <meta name="description" content="FASTLab Updates Page" />
      </Helmet>
      <Landing
        text={<FormattedMessage {...messages.header} />}
        width={width}
        small
      />
      <Flex width={width} flexDirection="column" sx={SX}>
        <AllUpdatesContainer
          width={width}
          height={height}
          isTabletMobile={isTabletMobile}
        />
        <Footer width={width} isTabletMobile={isTabletMobile} />
      </Flex>
    </React.Fragment>
  );
}

UpdatesPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default UpdatesPage;
