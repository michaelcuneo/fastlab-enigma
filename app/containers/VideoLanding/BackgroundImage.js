import React from 'react';
import styled from 'styled-components';

import MaskGroup from 'images/Mask_Group_1.png';

const BackgroundImage = () => {
  const StyledImage = styled.div`
    background: url(${MaskGroup}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  `;

  return <StyledImage />;
};

export default BackgroundImage;
