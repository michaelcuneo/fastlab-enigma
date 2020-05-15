import React from 'react';
import styled from 'styled-components';

import uonWhite from 'images/UoN_White.svg';

import NormalImg from 'components/Img';

const StyledIcon = styled(NormalImg)`
  width: 70px;
  height: 69px;
`;

const UonIcon = () => <StyledIcon src={uonWhite} />;

export default UonIcon;
