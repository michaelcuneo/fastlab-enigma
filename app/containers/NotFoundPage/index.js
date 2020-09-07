import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Footer from 'components/Footer';

import { Flex, Box } from 'rebass';
import H1 from 'components/H1';
import Button from 'components/Button';

import messages from './messages';

const NotFound = ({ width, isTabletMobile }) => {
  const { innerHeight } = window;

  return (
    <React.Fragment>
      <Flex
        height={innerHeight}
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        sx={{
          background: '#151417',
        }}
      >
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Box p="40px">
          <Button color="dark" to="/">
            Return to the main page
          </Button>
        </Box>
      </Flex>
      <Footer width={width} isTabletMobile={isTabletMobile} />
    </React.Fragment>
  );
};

NotFound.propTypes = {
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default NotFound;
