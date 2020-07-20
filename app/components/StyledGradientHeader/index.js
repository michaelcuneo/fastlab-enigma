import styled from 'styled-components';
import { Flex } from 'rebass';

export const StyledGradientHeader = styled(Flex)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #151417);
  height: 256px;
  z-index: 2;
`;
