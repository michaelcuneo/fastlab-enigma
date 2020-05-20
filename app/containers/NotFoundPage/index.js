/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import OverlayContainer from 'containers/OverlayContainer';

import { Flex } from 'rebass';
import H1 from 'components/H1';
import Button from 'components/Button';
import messages from './messages';

export default function NotFound() {
  return (
    <React.Fragment>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        sx={{ width: '100vw', height: '100vh', zIndex: 1 }}
      >
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Button color="pink" to="/">
          Return to the main page
        </Button>
      </Flex>
      <OverlayContainer />
    </React.Fragment>
  );
}
