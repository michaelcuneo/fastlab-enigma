import React, { useEffect, useState } from 'react';

import { Box } from 'rebass';

import LoadingIndicator from 'components/LoadingIndicator';

const OverlayContainer = () => {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  const [grid1x, setGrid1x] = useState();
  const [grid2x, setGrid2x] = useState();
  const [grid3x, setGrid3x] = useState();
  const [grid4x, setGrid4x] = useState();
  const [grid5x, setGrid5x] = useState();
  const [grid6x, setGrid6x] = useState();

  useEffect(() => {
    // set overall width and height
    setWidth(document.body.scrollWidth);
    setHeight(document.body.scrollHeight);

    // Calculate scaled Grid Area
    setGrid1x(window.innerWidth / 1);
    setGrid2x(window.innerWidth / 2);
    setGrid3x(window.innerWidth / 3);
    setGrid4x(window.innerWidth / 4);
    setGrid5x(window.innerWidth / 5);
    setGrid6x(window.innerWidth / 6);
  }, []);

  return width && height && grid1x && grid2x ? (
    <Box style={{ position: 'absolute', top: 0 }}>
      <svg id="overlay" width={width} height={height}>
        <line
          x1={grid1x}
          y1="0"
          x2={grid1x}
          y2={height}
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth={1}
        />
        <line
          x1={grid2x}
          y1="0"
          x2={grid2x}
          y2={height}
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth={1}
        />
        <line
          x1={grid3x}
          y1="0"
          x2={grid3x}
          y2={height}
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth={1}
        />
        <line
          x1={grid4x}
          y1="0"
          x2={grid4x}
          y2={height}
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth={1}
        />
        <line
          x1={grid5x}
          y1="0"
          x2={grid5x}
          y2={height}
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth={1}
        />
        <line
          x1={grid6x}
          y1="0"
          x2={grid6x}
          y2={height}
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth={1}
        />
        <defs>
          <pattern
            id="dot"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="1"
              cy="1"
              r="2"
              style={{ stroke: 'none', fill: 'rgba(255, 255, 255, 0.3)' }}
            />
          </pattern>
        </defs>
        <rect
          style={{ fill: 'url(#dot) rgba(255, 255, 255, 0.3)' }}
          x="0"
          y="0"
          height={width}
          width={height}
        />
      </svg>
    </Box>
  ) : (
    <LoadingIndicator />
  );
};

export default OverlayContainer;
