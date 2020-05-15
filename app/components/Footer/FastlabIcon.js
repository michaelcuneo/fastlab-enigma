import React from 'react';
import styled from 'styled-components';

import fastlabIcon from 'images/Fastlab_LLW.svg';

import NormalImg from 'components/Img';

const StyledIcon = styled(NormalImg)`
  width: 109px;
  height: 32px;
`;

const FastlabIcon = () => <StyledIcon alt="Fastlab-Icon" src={fastlabIcon} />;

export default FastlabIcon;
