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
  const candleStickEData: [string, number, number, number, number][] = [
    ["2024-07-01", 2320.26, 2320.26, 2287.3, 2362.94],
    ["2024-07-02", 2300, 2291.3, 2288.26, 2308.38],
    ["2024-07-03", 2295.35, 2346.5, 2295.35, 2346.92],
    ["2024-07-04", 2347.22, 2358.98, 2337.35, 2363.8],
    ["2024-07-05", 2360.75, 2382.48, 2347.89, 2383.76],
    
  ];
  const areaEData = {
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    values: [120, 132, 101, 134, 90, 230, 210]
    };
    const barEData={
      categories: ['Apples', 'Bananas', 'Grapes', 'Oranges'],
      values: [25, 40, 30, 35],
      colors: ['#ff4d4d', '#ffb84d', '#4d79ff', '#4dff4d']

    };
    const pieEdata= [
      { value: 1048, name: "Search Engines" },
      { value: 735, name: "Direct" },
      { value: 580, name: "Email" },
      { value: 484, name: "Union Ads" },
      { value: 300, name: "Video Ads" },
    ];
  const [activeTab, setActiveTab] = React.useState("echarts"); // Default active tab

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <h1>Charts Presentation for different libs.</h1>
      <div>
        <button style={{backgroundColor:'transparent',borderColor:'#883333'}}onClick={() => handleTabChange("nivo")}>Nivo</button>
        <button style={{backgroundColor:'transparent',borderColor:'#333388'}} onClick={() => handleTabChange("recharts")}>Recharts</button>
        <button style={{backgroundColor:'transparent',borderColor:'#338833'}} onClick={() => handleTabChange("echarts")}>Echarts</button>
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
        <>
          <h2>Echarts Charts Examples</h2>
          <BarEchartsCharts data={barEData}/>
          <AreaEchartsCharts data={areaEData}/>
          <PieEchartsCharts data={pieEdata}/>
          <CandleEchartsCharts data={candleStickEData}/>
        </>
      )}
    </>
  );
};

export default Charts;
