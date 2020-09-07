import styled from 'styled-components';

import { Flex } from 'rebass';

export const DesktopWrapper = styled(Flex)`
  position: relative;
  justify-content: space-between;
  flex-shrink: 0;
  background: #151417;
  color: #ffffff;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 9999;
`;

export const MobileWrapper = styled(Flex)`
  position: relative;
  height: 300px;
  flex-shrink: 0;
  justify-content: center;
  background: #151417;
  color: #ffffff;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 9999;
`;
