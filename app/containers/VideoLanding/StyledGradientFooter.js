import styled from 'styled-components';
import { Flex } from 'rebass';

export const StyledGradientFooter = styled(Flex)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #151417);
  height: 256px;
  z-index: 1;
`;
