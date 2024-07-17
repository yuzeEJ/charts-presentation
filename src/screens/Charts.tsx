/*
  This is an explanation and hands on comparison between Recharts, Echarts and Nivo

  * Nivo charts is simple and is easy to use and highly customizable (It doesn't have the candle stick 
  chart but has the boxplot one which is a bit similar to the candle stick)

  * Recharts is very basic and doesn't have much ui so it has to be wrapped around ex:shadcn wrapper (it doesn't have
  a candlestick chart or a boxplot)

  * Echarts is pretty simple you just have to set the options and the documentation is thorough, it has 
    smooth animations and highly customizable (it has both boxplot and candlestick with smooth animations)
    it also can have technical indicators on the plot ex:Moving Average, RSI, MACD..

  * chart.JS didn't look into it much but it provides a variety of charts but lacks the candle stick chart unless you
    use a wrapper for it https://www.sgratzl.com/chartjs-chart-boxplot/examples/
  
    ** Summary **
  - In my opinion we should look into Echarts since it handles charts very well and has a variety of large collection
  of charts and is pretty easy to use with its documentation and stylings
  
  [external links]:
  * Nivo @ https://nivo.rocks/components/
  * Recharts @ https://recharts.org/en-US/examples
  * Echarts @ https://echarts.apache.org/examples/en/index.html
  * Chart.JS @ https://www.chartjs.org/docs/latest/samples/area/line-stacked.html
  * Charts.JS(CandleWrapper) @ https://www.sgratzl.com/chartjs-chart-boxplot/examples/
*/
import React from "react";
import AreaEchartsCharts from "../components/echarts/AreaEchartsCharts";
import BarEchartsCharts from "../components/echarts/BarEchartsCharts";
import CandleEchartsCharts from "../components/echarts/CandleEchartsCharts";
import PieEchartsCharts from "../components/echarts/PieEchartsCharts";
import BarNivoCharts from "../components/nivoCharts/BarNivoCharts";
import CandleStickNivoCharts from "../components/nivoCharts/CandleStickCharts";
import PieNivoCharts from "../components/nivoCharts/PieNivoCharts";
import StreamNivoCharts from "../components/nivoCharts/StreamNivoCharts";
import AreaRechartsCharts from "../components/rechartsCharts/AreaRechartsCharts";
import BarRechartsCharts from "../components/rechartsCharts/BarRechartsCharts";
import PieRechartsCharts from "../components/rechartsCharts/PieRecartsCharts";
import { AreaApi } from "../types";
const Charts = () => {
  const pieNivoData = [
    {
      id: "java",
      label: "java",
      value: 195,
      color: "hsl(90, 70%, 50%)",
    },
    {
      id: "erlang",
      label: "erlang",
      value: 419,
      color: "hsl(56, 70%, 50%)",
    },
    {
      id: "ruby",
      label: "ruby",
      value: 407,
      color: "hsl(103, 70%, 50%)",
    },
    {
      id: "haskell",
      label: "haskell",
      value: 474,
      color: "hsl(186, 70%, 50%)",
    },
    {
      id: "go",
      label: "go",
      value: 71,
      color: "hsl(104, 70%, 50%)",
    },
  ];
  const barNivoData = [
    {
      day: "Monday",
      degress: 59,
    },
    {
      day: "Tuesday",
      degress: 61,
    },
    {
      day: "Wednesday",
      degress: 55,
    },
    {
      day: "Thursday",
      degress: 78,
    },
    {
      day: "Friday",
      degress: 71,
    },
    {
      day: "Saturday",
      degress: 56,
    },
    {
      day: "Sunday",
      degress: 67,
    },
  ];
  const candleStickeNivoData = [
    {
      group: "Alpha",
      subgroup: "A",
      mu: 5,
      sd: 1,
      n: 20,
      value: 4.579367009838393,
    },
    {
      group: "Alpha",
      subgroup: "A",
      mu: 5,
      sd: 1,
      n: 20,
      value: 5.029945291061343,
    },
    {
      group: "Alpha",
      subgroup: "A",
      mu: 5,
      sd: 1,
      n: 20,
      value: 5.460165618214442,
    },
    {
      group: "Alpha",
      subgroup: "A",
      mu: 5,
      sd: 1,
      n: 20,
      value: 5.557186595602598,
    },
    {
      group: "Beta",
      subgroup: "A",
      mu: 8,
      sd: 1.4,
      n: 20,
      value: 6.307408208635138,
    },
    {
      group: "Beta",
      subgroup: "A",
      mu: 8,
      sd: 1.4,
      n: 20,
      value: 6.423019117729842,
    },
    {
      group: "Beta",
      subgroup: "A",
      mu: 8,
      sd: 1.4,
      n: 20,
      value: 8.539868652652395,
    },
    {
      group: "Beta",
      subgroup: "A",
      mu: 8,
      sd: 1.4,
      n: 20,
      value: 7.498679085326605,
    },
    {
      group: "Beta",
      subgroup: "B",
      mu: 8,
      sd: 1.4,
      n: 20,
      value: 6.851077969938739,
    },
    {
      group: "Beta",
      subgroup: "B",
      mu: 7.5,
      sd: 1.4,
      n: 20,
      value: 5.719062828771558,
    },
    {
      group: "Beta",
      subgroup: "B",
      mu: 7.5,
      sd: 1.4,
      n: 20,
      value: 5.552489611591833,
    },

    {
      group: "Gamma",
      subgroup: "A",
      mu: 5,
      sd: 1,
      n: 20,
      value: 4.9915192674284805,
    },

    {
      group: "Gamma",
      subgroup: "B",
      mu: 5,
      sd: 1,
      n: 20,
      value: 4.707004943538626,
    },
    {
      group: "Gamma",
      subgroup: "A",
      mu: 5,
      sd: 1,
      n: 20,
      value: 5.374226081911589,
    },

    {
      group: "Gamma",
      subgroup: "B",
      mu: 7.2,
      sd: 1.8,
      n: 20,
      value: 7.9118198968309725,
    },
    {
      group: "Gamma",
      subgroup: "B",
      mu: 7.2,
      sd: 1.8,
      n: 20,
      value: 7.5537377773211,
    },
    {
      group: "Gamma",
      subgroup: "B",
      mu: 7.2,
      sd: 1.8,
      n: 20,
      value: 5.05956646809161,
    },
    {
      group: "Delta",
      subgroup: "A",
      mu: 5,
      sd: 1,
      n: 20,
      value: 5.160938019492353,
    },
    {
      group: "Delta",
      subgroup: "A",
      mu: 5,
      sd: 1,
      n: 20,
      value: 5.516730376234575,
    },
    {
      group: "Delta",
      subgroup: "A",
      mu: 5,
      sd: 1,
      n: 20,
      value: 5.44774961335838,
    },
    {
      group: "Delta",
      subgroup: "A",
      mu: 5,
      sd: 1,
      n: 20,
      value: 5.378198375381815,
    },
    {
      group: "Delta",
      subgroup: "A",
      mu: 5,
      sd: 1,
      n: 20,
      value: 5.293164541318162,
    },
    {
      group: "Delta",
      subgroup: "A",
      mu: 5,
      sd: 1,
      n: 20,
      value: 4.745062294273829,
    },
    {
      group: "Delta",
      subgroup: "B",
      mu: 6,
      sd: 1,
      n: 20,
      value: 5.576943891581173,
    },
    {
      group: "Epsilon",
      subgroup: "A",
      mu: 5,
      sd: 1.4,
      n: 20,
      value: 5.10569362203863,
    },
    {
      group: "Epsilon",
      subgroup: "A",
      mu: 5,
      sd: 1.4,
      n: 20,
      value: 2.8614767500137397,
    },
    {
      group: "Epsilon",
      subgroup: "A",
      mu: 5,
      sd: 1.4,
      n: 20,
      value: 5.1162600160840075,
    },
    {
      group: "Epsilon",
      subgroup: "A",
      mu: 5,
      sd: 1.4,
      n: 20,
      value: 5.719097317674898,
    },
    {
      group: "Epsilon",
      subgroup: "A",
      mu: 5,
      sd: 1.4,
      n: 20,
      value: 5.9253645144780425,
    },
    {
      group: "Epsilon",
      subgroup: "A",
      mu: 5,
      sd: 1.4,
      n: 20,
      value: 5.904247622890937,
    },
  ];

  const streamNivoData = [
    {
      Raoul: 116,
      Josiane: 79,
      Marcel: 107,
      René: 189,
      Paul: 60,
      Jacques: 17,
    },
    {
      Raoul: 167,
      Josiane: 119,
      Marcel: 17,
      René: 135,
      Paul: 150,
      Jacques: 79,
    },
    {
      Raoul: 134,
      Josiane: 133,
      Marcel: 160,
      René: 14,
      Paul: 172,
      Jacques: 150,
    },
    {
      Raoul: 141,
      Josiane: 196,
      Marcel: 183,
      René: 68,
      Paul: 76,
      Jacques: 173,
    },
    {
      Raoul: 101,
      Josiane: 108,
      Marcel: 165,
      René: 196,
      Paul: 53,
      Jacques: 187,
    },
    {
      Raoul: 124,
      Josiane: 25,
      Marcel: 138,
      René: 42,
      Paul: 108,
      Jacques: 42,
    },
    {
      Raoul: 145,
      Josiane: 185,
      Marcel: 20,
      René: 160,
      Paul: 39,
      Jacques: 146,
    },
    {
      Raoul: 193,
      Josiane: 90,
      Marcel: 187,
      René: 184,
      Paul: 25,
      Jacques: 141,
    },
    {
      Raoul: 88,
      Josiane: 170,
      Marcel: 45,
      René: 76,
      Paul: 61,
      Jacques: 80,
    },
  ];

  // Echarts data
  // these candles' data represnets the open, close, highest and lowest stock prices in a period of time
  const candleStickEData: [string, number, number, number, number][] = [
    ["2024-07-01", 2320.26, 2320.26, 2287.3, 2362.94],
    ["2024-07-02", 2300.0, 2291.3, 2288.26, 2308.38],
    ["2024-07-03", 2295.35, 2346.5, 2295.35, 2346.92],
    ["2024-07-04", 2347.22, 2358.98, 2337.35, 2363.8],
    ["2024-07-05", 2360.75, 2382.48, 2347.89, 2383.76],
    ["2024-07-06", 2380.95, 2378.3, 2367.96, 2394.22],
    ["2024-07-07", 2377.41, 2419.02, 2369.57, 2421.15],
    ["2024-07-08", 2418.76, 2436.65, 2417.58, 2440.01],
    ["2024-07-09", 2434.89, 2420.26, 2413.12, 2443.5],
    ["2024-07-10", 2419.75, 2399.97, 2391.13, 2423.56],
    ["2024-07-11", 2400.56, 2409.16, 2385.45, 2413.89],
    ["2024-07-12", 2408.72, 2425.98, 2403.89, 2431.21],
    ["2024-07-13", 2425.95, 2449.45, 2419.32, 2452.99],
    ["2024-07-14", 2448.21, 2465.89, 2442.76, 2473.11],
    ["2024-07-15", 2463.32, 2487.01, 2460.53, 2492.65],
    ["2024-07-16", 2485.12, 2500.23, 2479.21, 2504.87],
    ["2024-07-17", 2502.34, 2512.89, 2498.76, 2515.23],
    ["2024-07-18", 2510.12, 2530.11, 2507.45, 2534.56],
    ["2024-07-19", 2528.78, 2540.45, 2523.65, 2545.12],
    ["2024-07-20", 2538.34, 2556.78, 2532.45, 2560.23],
    ["2024-07-21", 2555.34, 2572.45, 2548.23, 2576.12],
    ["2024-07-22", 2570.89, 2589.32, 2565.45, 2592.21],
    ["2024-07-23", 2588.76, 2605.45, 2583.34, 2608.65],
    ["2024-07-24", 2603.12, 2615.89, 2599.76, 2619.45],
    ["2024-07-25", 2614.45, 2630.32, 2610.23, 2635.78],
    ["2024-07-26", 2629.89, 2645.45, 2624.23, 2648.65],
    ["2024-07-27", 2642.12, 2658.76, 2638.45, 2662.34],
    ["2024-07-28", 2657.78, 2670.45, 2652.34, 2675.23],
    ["2024-07-29", 2669.45, 2685.32, 2664.23, 2689.12],
    ["2024-07-30", 2684.89, 2698.45, 2679.34, 2702.78],
    ["2024-07-31", 2697.12, 2710.89, 2692.34, 2714.45],
    ["2024-08-01", 2709.78, 2725.34, 2705.12, 2729.89],
    ["2024-08-02", 2723.45, 2738.76, 2718.23, 2742.65],
    ["2024-08-03", 2736.12, 2750.45, 2731.34, 2754.89],
    ["2024-08-04", 2748.78, 2765.32, 2743.45, 2769.21],
    ["2024-08-05", 2759.45, 2781.67, 2752.34, 2786.12],
    ["2024-08-06", 2783.21, 2795.45, 2776.12, 2800.34],
    ["2024-08-07", 2792.34, 2809.78, 2785.67, 2813.45],
    ["2024-08-08", 2810.45, 2825.67, 2802.34, 2829.12],
    ["2024-08-09", 2827.34, 2839.78, 2820.45, 2845.23],
  ];

  const areaEData: AreaApi = {
    historicalPrices: [
      {
        date: 1720681200000,
        openPrice: "11767.88",
        closePrice: "11762.78",
        lowPrice: "11744.75",
        highPrice: "11778.95",
      },
      {
        date: 1720684800000,
        openPrice: "11762.78",
        closePrice: "11754.34",
        lowPrice: "11745.82",
        highPrice: "11766.48",
      },
      {
        date: 1720688400000,
        openPrice: "11754.34",
        closePrice: "11759.93",
        lowPrice: "11747.44",
        highPrice: "11770.85",
      },
      {
        date: 1720692000000,
        openPrice: "11759.91",
        closePrice: "11761.97",
        lowPrice: "11747.92",
        highPrice: "11769.12",
      },
      {
        date: 1720695600000,
        openPrice: "11761.96",
        closePrice: "11812.91",
        lowPrice: "11761.15",
        highPrice: "11814.01",
      },
      {
        date: 1720699200000,
        openPrice: "11792.41",
        closePrice: "11792.41",
        lowPrice: "11792.41",
        highPrice: "11792.41",
      },
      {
        date: 1720940400000,
        openPrice: "11800.03",
        closePrice: "11865.88",
        lowPrice: "11796.93",
        highPrice: "11872.79",
      },
      {
        date: 1720944000000,
        openPrice: "11866.31",
        closePrice: "11878.85",
        lowPrice: "11854.65",
        highPrice: "11884.02",
      },
      {
        date: 1720947600000,
        openPrice: "11878.85",
        closePrice: "11874.76",
        lowPrice: "11868.21",
        highPrice: "11891.35",
      },
      {
        date: 1720951200000,
        openPrice: "11874.75",
        closePrice: "11872.41",
        lowPrice: "11862.54",
        highPrice: "11879.88",
      },
      {
        date: 1720954800000,
        openPrice: "11871.97",
        closePrice: "11882.75",
        lowPrice: "11863.7",
        highPrice: "11883.55",
      },
      {
        date: 1720958400000,
        openPrice: "11881.55",
        closePrice: "11881.55",
        lowPrice: "11881.55",
        highPrice: "11881.55",
      },
      {
        date: 1721026800000,
        openPrice: "11896.61",
        closePrice: "11852.33",
        lowPrice: "11831.66",
        highPrice: "11905.74",
      },
      {
        date: 1721030400000,
        openPrice: "11852.34",
        closePrice: "11870.36",
        lowPrice: "11844.67",
        highPrice: "11875.03",
      },
      {
        date: 1721034000000,
        openPrice: "11870.36",
        closePrice: "11917.6",
        lowPrice: "11865.64",
        highPrice: "11925.65",
      },
      {
        date: 1721037600000,
        openPrice: "11917.61",
        closePrice: "11910.43",
        lowPrice: "11909.1",
        highPrice: "11928.34",
      },
      {
        date: 1721041200000,
        openPrice: "11910.43",
        closePrice: "11929.25",
        lowPrice: "11904.75",
        highPrice: "11930.31",
      },
      {
        date: 1721044800000,
        openPrice: "11947.7",
        closePrice: "11947.7",
        lowPrice: "11947.7",
        highPrice: "11947.7",
      },
      {
        date: 1721113200000,
        openPrice: "11958.17",
        closePrice: "11674.59",
        lowPrice: "11647.51",
        highPrice: "12009.8",
      },
      {
        date: 1721116800000,
        openPrice: "11994.18",
        closePrice: "11672.88",
        lowPrice: "11666.72",
        highPrice: "12007.35",
      },
      {
        date: 1721120400000,
        openPrice: "12004.58",
        closePrice: "12024.42",
        lowPrice: "11994.13",
        highPrice: "12034.3",
      },
      {
        date: 1721124000000,
        openPrice: "12024.38",
        closePrice: "12037.11",
        lowPrice: "12015.86",
        highPrice: "12041.75",
      },
      {
        date: 1721127600000,
        openPrice: "12037.12",
        closePrice: "12061.34",
        lowPrice: "12030.64",
        highPrice: "12070.9",
      },
      {
        date: 1721131200000,
        openPrice: "12080.37",
        closePrice: "12080.37",
        lowPrice: "12080.37",
        highPrice: "12080.37",
      },
    ],
  };
  const barEData = {
    categories: [
      "Action",
      "Comedy",
      "Drama",
      "Horror",
      "Sci-Fi",
      "Romance",
      "Documentary",
      "Animation",
      "Fantasy",
      "Thriller",
      "Mystery",
      "Adventure",
      "Crime",
      "Musical",
      "Western",
      "Biography",
      "Family",
      "War",
      "History",
      "Sport",
      "Short",
    ],
    values: [
      50, 70, 65, 30, 45, 40, 20, 55, 35, 60, 25, 50, 48, 15, 25, 33, 44, 22,
      31, 29, 18,
    ],
    colors: [
      "#ff5733",
      "#33ff57",
      "#3357ff",
      "#ff33a8",
      "#a833ff",
      "#33fff1",
      "#f1ff33",
      "#ff8c33",
      "#33d1ff",
      "#8cff33",
      "#ff3381",
      "#33ffa8",
      "#a8ff33",
      "#ff3385",
      "#33ff8c",
      "#8c33ff",
      "#ff3333",
      "#3333ff",
      "#ff3333",
      "#33ffcc",
      "#ffcc33",
    ],
  };
  const pieEdata = [
    { value: 1048, name: "Search Engines" },
    { value: 735, name: "Direct" },
    { value: 580, name: "Email" },
    { value: 484, name: "Union Ads" },
    { value: 300, name: "Video Ads" },
    { value: 450, name: "Social Media" },
    { value: 230, name: "Affiliate Marketing" },
    { value: 600, name: "Content Marketing" },
    { value: 340, name: "Referrals" },
    { value: 720, name: "Organic Search" },
    { value: 290, name: "Paid Search" },
    { value: 410, name: "Display Ads" },
    { value: 510, name: "Influencer Marketing" },
    { value: 390, name: "Public Relations" },
    { value: 470, name: "Partnerships" },
    { value: 530, name: "Events" },
    { value: 330, name: "Print Media" },
    { value: 600, name: "Radio" },
    { value: 270, name: "Television" },
    { value: 410, name: "Podcasts" },
    { value: 360, name: "Webinars" },
  ];

  const [activeTab, setActiveTab] = React.useState("echarts"); // Default active tab

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <h1>Charts Presentation for different libs.</h1>
      <div>
        <button
          style={{ backgroundColor: "transparent", borderColor: "#883333" }}
          onClick={() => handleTabChange("nivo")}
        >
          Nivo
        </button>
        <button
          style={{ backgroundColor: "transparent", borderColor: "#333388" }}
          onClick={() => handleTabChange("recharts")}
        >
          Recharts
        </button>
        <button
          style={{ backgroundColor: "transparent", borderColor: "#338833" }}
          onClick={() => handleTabChange("echarts")}
        >
          Echarts
        </button>
      </div>
      {activeTab === "nivo" && (
        <>
          <h2>Nivo Charts Examples</h2>
          <BarNivoCharts data={barNivoData} />
          <PieNivoCharts data={pieNivoData} />
          <CandleStickNivoCharts data={candleStickeNivoData} />
          <StreamNivoCharts data={streamNivoData} />
        </>
      )}
      {activeTab === "recharts" && (
        <>
          <h2>Recharts Charts Examples</h2>
          <AreaRechartsCharts />
          <BarRechartsCharts />
          <PieRechartsCharts />
        </>
      )}
      {activeTab === "echarts" && (
        <div style={{width:'100%'}}>
          <h2>Echarts Charts Examples</h2>
          <BarEchartsCharts data={barEData} />
          <AreaEchartsCharts data={areaEData} />
          <PieEchartsCharts data={pieEdata} />
          <CandleEchartsCharts data={candleStickEData} />
        </div>
      )}
    </>
  );
};

export default Charts;
