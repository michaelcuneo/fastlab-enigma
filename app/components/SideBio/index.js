import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from 'rebass';

const SideMenu = ({ width, data }) => {
  const containerWidth = width * 0.2073;

  const StyledMenu = styled(Box)`
    background: #151417;
    border: 1px solid #707070;
    border-radius: 40px;
    z-index: 99999;
  `;

  console.log(data);

  return (
    <StyledMenu
      px={width * 0.0182}
      minWidth={containerWidth}
      height="auto"
      py="50px"
    >
      {data.name}
    </StyledMenu>
  );
};

SideMenu.propTypes = {
  width: PropTypes.number,
  data: PropTypes.object,
};

export default SideMenu;
