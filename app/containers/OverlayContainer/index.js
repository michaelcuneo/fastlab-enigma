import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'rebass';

const OverlayContainer = ({ width, height, isTabletMobile }) =>
  width && height ? (
    <Box
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        padding: 0,
        margin: 0,
        zIndex: 3,
        maxWidth: width,
        pointerEvents: 'none',
      }}
    >
      {isTabletMobile ? (
        <svg id="overlay" width={width} height={height}>
          <line
            x1={width * 0.0827}
            y1="0"
            x2={width * 0.0827}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={width * 0.288}
            y1="0"
            x2={width * 0.288}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={width * 0.4933}
            y1="0"
            x2={width * 0.4933}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={width * 0.6987}
            y1="0"
            x2={width * 0.6987}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={width * 0.904}
            y1="0"
            x2={width * 0.904}
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
              height={width * 0.064}
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
            x1={width * 0.0688}
            y1="0"
            x2={width * 0.0688}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={width * 0.212}
            y1="0"
            x2={width * 0.212}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={width * 0.3552}
            y1="0"
            x2={width * 0.3552}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={width * 0.4984}
            y1="0"
            x2={width * 0.4984}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={width * 0.6417}
            y1="0"
            x2={width * 0.6417}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={width * 0.7849}
            y1="0"
            x2={width * 0.7849}
            y2={height}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
          />
          <line
            x1={width * 0.9281}
            y1="0"
            x2={width * 0.9281}
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
              height={width * 0.023839}
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

OverlayContainer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isTabletMobile: PropTypes.bool,
};

export default OverlayContainer;
