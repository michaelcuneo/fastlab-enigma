import React, { useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';

import { Box } from 'rebass';

const OverlayContainer = () => {
  const [grid1x, setGrid1x] = useState(null);
  const [grid2x, setGrid2x] = useState(null);
  const [grid3x, setGrid3x] = useState(null);
  const [grid4x, setGrid4x] = useState(null);
  const [grid5x, setGrid5x] = useState(null);
  const [grid6x, setGrid6x] = useState(null);
  const [grid7x, setGrid7x] = useState(null);

  const [scrollWidth, setScrollWidth] = useState(document.body.scrollWidth);
  const [scrollHeight, setScrollHeight] = useState(document.body.scrollHeight);

  const isTabletMobile = useMediaQuery({ maxWidth: 1224 });

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener('loaded', handleResize());
    return () => {
      window.removeEventListener('loaded', handleResize());
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize());
    return () => {
      window.removeEventListener('resize', handleResize());
    };
  }, []);

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', handleResize());
    return () => {
      window.removeEventListener('DOMContentLoaded', handleResize());
    };
  }, []);

  const handleResize = () => {
    // set overall width and height
    setScrollWidth(document.body.scrollWidth);
    setScrollHeight(document.body.scrollHeight);

    if (!isTabletMobile) {
      // Calculate Scaled Desktop Grid Area
      setGrid1x(scrollWidth * 0.0688);
      setGrid2x(scrollWidth * 0.212);
      setGrid3x(scrollWidth * 0.3552);
      setGrid4x(scrollWidth * 0.4984);
      setGrid5x(scrollWidth * 0.6417);
      setGrid6x(scrollWidth * 0.7849);
      setGrid7x(scrollWidth * 0.9281);
    } else {
      setGrid1x(scrollWidth * 0.0827);
      setGrid2x(scrollWidth * 0.288);
      setGrid3x(scrollWidth * 0.4933);
      setGrid4x(scrollWidth * 0.6987);
      setGrid5x(scrollWidth * 0.904);
    }
  };

  return scrollWidth && scrollHeight && grid1x && grid2x ? (
    <Box
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
        <svg id="overlay" width={scrollWidth} height={scrollHeight}>
          <line
            x1={grid1x}
            y1="0"
            x2={grid1x}
            y2={scrollHeight}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid2x}
            y1="0"
            x2={grid2x}
            y2={scrollHeight}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid3x}
            y1="0"
            x2={grid3x}
            y2={scrollHeight}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid4x}
            y1="0"
            x2={grid4x}
            y2={scrollHeight}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid5x}
            y1="0"
            x2={grid5x}
            y2={scrollHeight}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <defs>
            {/* use Width for both X * Y Calculations here because it's Square */}
            <pattern
              id="dot"
              x={scrollWidth * 0.012}
              y={scrollWidth * 0.012}
              width={scrollWidth * 0.064}
              height={scrollHeight * 0.064}
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
            height={scrollHeight}
            width={scrollWidth}
          />
        </svg>
      ) : (
        <svg id="overlay" width={scrollWidth} height={scrollHeight}>
          <line
            x1={grid1x}
            y1="0"
            x2={grid1x}
            y2={scrollHeight}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid2x}
            y1="0"
            x2={grid2x}
            y2={scrollHeight}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid3x}
            y1="0"
            x2={grid3x}
            y2={scrollHeight}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid4x}
            y1="0"
            x2={grid4x}
            y2={scrollHeight}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid5x}
            y1="0"
            x2={grid5x}
            y2={scrollHeight}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid6x}
            y1="0"
            x2={grid6x}
            y2={scrollHeight}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={grid7x}
            y1="0"
            x2={grid7x}
            y2={scrollHeight}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <defs>
            {/* use Width for both X * Y Calculations here because it's Square */}
            <pattern
              id="dot"
              x={scrollWidth * 0.0208}
              y={scrollWidth * 0.0208}
              width={scrollWidth * 0.023839}
              height={scrollWidth * 0.023839}
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
            height={scrollHeight}
            width={scrollWidth}
          />
        </svg>
      )}
    </Box>
  ) : null;
};

export default OverlayContainer;
