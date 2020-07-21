import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';

import { Box } from 'rebass';

const OverlayContainer = ({ width, height }) => {
  const [grid1x, setGrid1x] = useState(null);
  const [grid2x, setGrid2x] = useState(null);
  const [grid3x, setGrid3x] = useState(null);
  const [grid4x, setGrid4x] = useState(null);
  const [grid5x, setGrid5x] = useState(null);
  const [grid6x, setGrid6x] = useState(null);
  const [grid7x, setGrid7x] = useState(null);

  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  const { innerHeight } = window;

  useEffect(() => {
    handleResize();
  }, []);

  const handleResize = () => {
    if (!isTabletMobile) {
      // Calculate Scaled Desktop Grid Area
      setGrid1x(width * 0.0688);
      setGrid2x(width * 0.212);
      setGrid3x(width * 0.3552);
      setGrid4x(width * 0.4984);
      setGrid5x(width * 0.6417);
      setGrid6x(width * 0.7849);
      setGrid7x(width * 0.9281);
    } else {
      setGrid1x(width * 0.0827);
      setGrid2x(width * 0.288);
      setGrid3x(width * 0.4933);
      setGrid4x(width * 0.6987);
      setGrid5x(width * 0.904);
    }
  };

  return width && height && grid1x && grid2x ? (
    <Box
      id="OverlayContainer"
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        padding: 0,
        margin: 0,
        zIndex: 2,
        pointerEvents: 'none',
      }}
    >
      {isTabletMobile ? (
        <svg id="overlay" width={width} height={height}>
          <line
            x1={grid1x}
            y1="0"
            x2={grid1x}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid2x}
            y1="0"
            x2={grid2x}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid3x}
            y1="0"
            x2={grid3x}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid4x}
            y1="0"
            x2={grid4x}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid5x}
            y1="0"
            x2={grid5x}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <defs>
            {/* use Width for both X * Y Calculations here because it's Square */}
            <pattern
              id="dot"
              x={width * 0.012}
              y={width * 0.012}
              width={width * 0.064}
              height={innerHeight * 0.064}
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="1"
                cy="1"
                r="2"
                style={{ stroke: 'none', fill: 'rgba(255, 255, 255, 0.2)' }}
              />
            </pattern>
          </defs>
          <rect
            style={{ fill: 'url(#dot) rgba(255, 255, 255, 0.2)' }}
            x="0"
            y="0"
            height={height}
            width={width}
          />
        </svg>
      ) : (
        <svg id="overlay" width={width} height={height}>
          <line
            x1={grid1x}
            y1="0"
            x2={grid1x}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid2x}
            y1="0"
            x2={grid2x}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid3x}
            y1="0"
            x2={grid3x}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid4x}
            y1="0"
            x2={grid4x}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid5x}
            y1="0"
            x2={grid5x}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid6x}
            y1="0"
            x2={grid6x}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid7x}
            y1="0"
            x2={grid7x}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <defs>
            {/* use Width for both X * Y Calculations here because it's Square */}
            <pattern
              id="dot"
              x={width * 0.0208}
              y={width * 0.0208}
              width={width * 0.023839}
              height={innerHeight * 0.023839}
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="1"
                cy="1"
                r="2"
                style={{ stroke: 'none', fill: 'rgba(255, 255, 255, 0.2)' }}
              />
            </pattern>
          </defs>
          <rect
            style={{ fill: 'url(#dot) rgba(255, 255, 255, 0.2)' }}
            x="0"
            y="0"
            height={height}
            width={width}
          />
        </svg>
      )}
    </Box>
  ) : null;
};

OverlayContainer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default OverlayContainer;
