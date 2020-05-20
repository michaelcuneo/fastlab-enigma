import React, { useEffect, useState } from 'react';

import { Box } from 'rebass';

import LoadingIndicator from 'components/LoadingIndicator';

const OverlayContainer = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  const [grid1x, setGrid1x] = useState(null);
  const [grid2x, setGrid2x] = useState(null);
  const [grid3x, setGrid3x] = useState(null);
  const [grid4x, setGrid4x] = useState(null);
  const [grid5x, setGrid5x] = useState(null);
  const [grid6x, setGrid6x] = useState(null);
  const [grid7x, setGrid7x] = useState(null);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
  }, [window.removeEventListener('resize', handleResize)]);

  const handleResize = () => {
    // set overall width and height
    setWidth(document.body.scrollWidth);
    setHeight(document.body.scrollHeight);

    // Calculate scaled Grid Area
    setGrid1x(document.body.scrollWidth * 0.0688);
    setGrid2x(document.body.scrollWidth * 0.212);
    setGrid3x(document.body.scrollWidth * 0.3552);
    setGrid4x(document.body.scrollWidth * 0.4984);
    setGrid5x(document.body.scrollWidth * 0.6417);
    setGrid6x(document.body.scrollWidth * 0.7849);
    setGrid7x(document.body.scrollWidth * 0.9281);
  };

  return width && height && grid1x && grid2x ? (
    <Box
      style={{
        position: 'fixed',
        background: '#151417',
        top: 0,
        bottom: 0,
        padding: 0,
        margin: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <svg id="overlay" width={width} height={height}>
        <line
          x1={grid1x}
          y1="0"
          x2={grid1x}
          y2={height}
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth={1}
        />
        <line
          x1={grid2x}
          y1="0"
          x2={grid2x}
          y2={height}
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth={1}
        />
        <line
          x1={grid3x}
          y1="0"
          x2={grid3x}
          y2={height}
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth={1}
        />
        <line
          x1={grid4x}
          y1="0"
          x2={grid4x}
          y2={height}
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth={1}
        />
        <line
          x1={grid5x}
          y1="0"
          x2={grid5x}
          y2={height}
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth={1}
        />
        <line
          x1={grid6x}
          y1="0"
          x2={grid6x}
          y2={height}
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth={1}
        />
        <line
          x1={grid7x}
          y1="0"
          x2={grid7x}
          y2={height}
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth={1}
        />
        <defs>
          <pattern
            id="dot"
            x={width * 0.0208}
            y={height * 0.0078}
            width={width * 0.023839}
            height={height * 0.023839}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="1"
              cy="1"
              r="2"
              style={{ stroke: 'none', fill: 'rgba(255, 255, 255, 0.4)' }}
            />
          </pattern>
        </defs>
        <rect
          style={{ fill: 'url(#dot) rgba(255, 255, 255, 0.4)' }}
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
