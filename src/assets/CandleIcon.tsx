// icon:chart-candle | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconChartCandle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M5 6 H7 A1 1 0 0 1 8 7 V10 A1 1 0 0 1 7 11 H5 A1 1 0 0 1 4 10 V7 A1 1 0 0 1 5 6 z" />
      <path d="M6 4v2M6 11v9" />
      <path d="M11 14 H13 A1 1 0 0 1 14 15 V18 A1 1 0 0 1 13 19 H11 A1 1 0 0 1 10 18 V15 A1 1 0 0 1 11 14 z" />
      <path d="M12 4v10M12 19v1" />
      <path d="M17 5 H19 A1 1 0 0 1 20 6 V10 A1 1 0 0 1 19 11 H17 A1 1 0 0 1 16 10 V6 A1 1 0 0 1 17 5 z" />
      <path d="M18 4v1M18 11v9" />
    </svg>
  );
}

export default IconChartCandle;
