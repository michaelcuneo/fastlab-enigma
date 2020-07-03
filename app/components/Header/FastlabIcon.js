import React from 'react';
import styled from 'styled-components';

import fastlabIcon from 'images/Fastlab_LLW.svg';

import NormalImg from 'components/Img';

const StyledDesktopIcon = styled(NormalImg)`
  position: fixed;
  width: 109px;
  height: 32px;
  left: 167px;
  top: 26px;
  z-index: 3;
`;

export const FastlabIconDesktop = () => (
  <StyledDesktopIcon alt="Fastlab-Icon-Desktop" src={fastlabIcon} />
);

const StyledMobileIcon = styled(NormalImg)`
  position: fixed;
  width: 95px;
  height: 26px;
  left: 20px;
  top: 26px;
  z-index: 3;
`;

export const FastlabIconMobile = () => (
  <StyledMobileIcon alt="Fastlab-Icon-Mobile" src={fastlabIcon} />
);
