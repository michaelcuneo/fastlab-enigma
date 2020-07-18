import React from 'react';
import { FormattedMessage } from 'react-intl';

import OverlayContainer from 'containers/OverlayContainer';
import Footer from 'components/Footer';

import { Flex, Box } from 'rebass';
import H1 from 'components/H1';
import Button from 'components/Button';

import useWindowDimensions from 'utils/getWindowDimensions';

import messages from './messages';

const NotFound = () => {
  const { height } = useWindowDimensions();
  return (
    <React.Fragment>
      <OverlayContainer />
      <Flex
        height={height - 155}
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
      <Footer />
    </React.Fragment>
  );
};

export default NotFound;
