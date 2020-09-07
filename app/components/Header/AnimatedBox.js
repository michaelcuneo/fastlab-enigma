import styled from 'styled-components';

import { animated as a } from 'react-spring';

export const AnimatedBox = styled(a.div)`
  display: flex;
  width: 100%;
  flex-direction: row;
  overflow: hidden;
  padding: 0px 0px 0px 35px;
  align-items: center;
  justify-content: space-between;
`;
