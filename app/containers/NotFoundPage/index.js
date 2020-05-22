/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import OverlayContainer from 'containers/OverlayContainer';

import { Flex, Box } from 'rebass';
import H1 from 'components/H1';
import Button from 'components/Button';
import messages from './messages';

function NotFound({ height, width }) {
  return (
    <React.Fragment>
      <OverlayContainer width={width} height={height} />
      <Flex
        height={window.innerHeight - 155}
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
    </React.Fragment>
  );
}

NotFound.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default NotFound;
