import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

import { menuItems } from 'containers/ArtworksContainer/MenuItems';

const ArtworksPage = ({ match, width, isTabletMobile }) => (
  <React.Fragment>
    <Flex
      flexDirection={isTabletMobile ? 'column' : 'row'}
      justifyContent="flex-begin"
      alignItems="flex-begin"
      pt={['40px', '40px', '182px']}
      pb={['40px', '40px', '182px']}
      px={[width * 0.0933, width * 0.0933, width * 0.0729]}
    >
      {menuItems[parseInt(match.params.id, 2)].title}
    </Flex>
  </React.Fragment>
);

ArtworksPage.propTypes = {
  match: PropTypes.object,
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default ArtworksPage;
