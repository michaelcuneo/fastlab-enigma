import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import { Flex } from 'rebass';

import Landing from 'containers/Landing';
import RelatedProjectsContainer from 'containers/RelatedProjectsContainer';
import Footer from 'components/Footer';
import AboutContainer from 'containers/AboutContainer';

import messages from './messages';

const AboutPage = ({ width, isTabletMobile }) => {
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
        <title>About Page</title>
        <meta name="description" content="FASTLab Contact Page" />
      </Helmet>
      <Landing
        text={<FormattedMessage {...messages.header} />}
        width={width}
        small
      />
      <Flex flexDirection="column" sx={SX}>
        <AboutContainer width={width} isTabletMobile={isTabletMobile} />
        <RelatedProjectsContainer
          width={width}
          isTabletMobile={isTabletMobile}
        />
        <Footer width={width} isTabletMobile={isTabletMobile} />
      </Flex>
    </React.Fragment>
  );
};

AboutPage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default AboutPage;
