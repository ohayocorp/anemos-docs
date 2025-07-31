import React from 'react';

export const Spotlight = ({ className, fill }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3600 2800"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="2000"
          cy="270"
          rx="2000"
          ry="270"
          transform="matrix(-0.8 -0.5 -0.5 0.8 3600 2300)"
          fill={fill || 'white'}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter id="filter">
          <feFlood floodOpacity="0"></feFlood>
          <feBlend mode="normal" in="SourceGraphic"></feBlend>
          <feGaussianBlur stdDeviation="150"></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
