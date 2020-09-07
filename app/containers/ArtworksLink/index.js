import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StyledLink from 'components/StyledLink';
import { Flex, Text } from 'rebass';

const ArtworksContainer = ({ menuItem }) => {
  const StyledArtwork = styled(Flex)`
    position: relative;
    z-index: 999;
    height: 500px;
    width: 500px;
    background-image: url(${menuItem.image});
    background-size: cover;
    background-position: center;
    border: 1px solid white;
  `;

  const StyledFlex = styled(Flex)`
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: black;
    height: 80px;
  `;

  return (
    <React.Fragment>
      <StyledArtwork>
        <StyledLink to={`/artwork/${menuItem.id}`}>
          <StyledFlex>
            <Text p={3}>{menuItem.title}</Text>
          </StyledFlex>
        </StyledLink>
      </StyledArtwork>
    </React.Fragment>
  );
};

ArtworksContainer.propTypes = {
  menuItem: PropTypes.object,
};

export default ArtworksContainer;
