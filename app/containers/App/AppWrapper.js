import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AppWrapper = ({ children }) => {
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  );

  const StyledWrapper = styled.div`
    position: relative;
    float: left;
    min-height: 100%;
    height: ${scrollHeight};
    width: 100vw;
  `;

  return <StyledWrapper>{children}</StyledWrapper>;
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
