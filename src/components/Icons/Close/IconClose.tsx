import React from "react";

export const IconClose = ({
  width = "2rem",
  height = "2rem",
  fill = "black",
  onClick = () => {},
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 252 252`}
    preserveAspectRatio="none"
    onClick={onClick}
  >
    <path
      fill={fill}
      d="M126 0C56.52 0 0 56.52 0 126s56.52 126 126 126 126-56.52 126-126S195.48 0 126 0zm0 234c-59.55 0-108-48.45-108-108S66.45 18 126 18s108 48.45 108 108-48.45 108-108 108z"
    />
    <path
      fill={fill}
      d="M164.61 87.39a9 9 0 0 0-12.73 0L126 113.27 100.11 87.4A9 9 0 1 0 87.4 100.1L113.27 126 87.4 151.89a9 9 0 1 0 12.73 12.72L126 138.73l25.89 25.88a8.97 8.97 0 0 0 12.72 0 9 9 0 0 0 0-12.73L138.73 126l25.88-25.89a9 9 0 0 0 0-12.72z"
    />
  </svg>
);
