import styled from 'styled-components';

import { Box } from 'rebass';

const Overlay = styled(Box)`
  position: absolute;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #151417);
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 256px;
`;

export default Overlay;
