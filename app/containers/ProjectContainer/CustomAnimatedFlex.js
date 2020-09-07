import styled from 'styled-components';

import { animated as a } from 'react-spring';

export const CustomAnimatedFlex = styled(a.div)`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  background: #ffffff;
  border-left: 4px solid red;
  margin: 5px 0px 0px 0px;
  overflow: hidden;
  padding: 34px;
  z-index: 999999;
`;
