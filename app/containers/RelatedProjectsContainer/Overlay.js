import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'rebass';

const OverlayContainer = ({ width }) => {
  const gap = width * 0.0072;
  const rectangle = width * 0.0167;

  const createRects = () => {
    const children = [];

    for (let i = 0; i < 42; i += 1) {
      children.push(
        <rect
          key={i}
          x={i * (rectangle + gap)}
          width={width * 0.0167}
          height={Math.random() * (135 - 0)}
          style={{
            fill: 'rgba(21, 20, 23, 1)',
          }}
        />,
      );
    }

    return children;
  };

  return width ? (
    <Box style={{ position: 'absolute', padding: 0, margin: 0, zIndex: 2 }}>
      <svg id="overlay" width={width}>
        {createRects()}
      </svg>
    </Box>
  ) : null;
};

OverlayContainer.propTypes = {
  width: PropTypes.number,
};

export default OverlayContainer;
