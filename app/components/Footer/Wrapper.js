import styled from 'styled-components';

import { Flex } from 'rebass';

export const DesktopWrapper = styled(Flex)`
  position: relative;
  height: 155px;
  justify-content: space-between;
  background: #151417;
  color: #ffffff;
  z-index: 9999;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
`;

export const MobileWrapper = styled(Flex)`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  justify-content: center;
  background: #151417;
  color: #ffffff;
  z-index: 9999;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
`;
