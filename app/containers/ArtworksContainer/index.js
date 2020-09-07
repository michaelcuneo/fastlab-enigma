import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import Slider from 'react-slick';

import ArtworksLink from 'containers/ArtworksLink';
import { menuItems } from './MenuItems';

const ArtworksContainer = ({ width, isTabletMobile }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    maxWidth: width * 0.5658,
    width: width * 0.5658,
  };

  return (
    <React.Fragment>
      <Flex
        flexDirection={isTabletMobile ? 'column' : 'row'}
        justifyContent="flex-begin"
        alignItems="flex-begin"
        style={{ zIndex: 5, maxWidth: width * 0.5658 }}
      >
        <Slider {...settings}>
          {menuItems.map(menuItem => (
            <ArtworksLink menuItem={menuItem} />
          ))}
        </Slider>
      </Flex>
    </React.Fragment>
  );
};

ArtworksContainer.propTypes = {
  width: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default ArtworksContainer;
