// icon:stats-chart-outline | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from "react";

function AreaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M72 320 H104 A8 8 0 0 1 112 328 V472 A8 8 0 0 1 104 480 H72 A8 8 0 0 1 64 472 V328 A8 8 0 0 1 72 320 z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M296 224 H328 A8 8 0 0 1 336 232 V472 A8 8 0 0 1 328 480 H296 A8 8 0 0 1 288 472 V232 A8 8 0 0 1 296 224 z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M408 112 H440 A8 8 0 0 1 448 120 V472 A8 8 0 0 1 440 480 H408 A8 8 0 0 1 400 472 V120 A8 8 0 0 1 408 112 z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M184 32 H216 A8 8 0 0 1 224 40 V472 A8 8 0 0 1 216 480 H184 A8 8 0 0 1 176 472 V40 A8 8 0 0 1 184 32 z"
      />
    </svg>
  );
}

export default AreaIcon;
