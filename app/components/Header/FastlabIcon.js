import React from 'react';
import styled from 'styled-components';

import fastlabIcon from 'images/Fastlab_LLW.svg';

import NormalImg from 'components/Img';

const StyledIcon = styled(NormalImg)`
  position: fixed;
  width: 109px;
  height: 32px;
  left: 167px;
  top: 26px;
  z-index: 2;
`;

const FastlabIcon = () => <StyledIcon src={fastlabIcon} />;

export default FastlabIcon;
