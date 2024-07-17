import ReactECharts from "echarts-for-react";
import "echarts/theme/dark";
/*
@component
  Displays a candlestick chart using ECharts with a dark theme. 
  This component is designed to visualize financial data or other time-series data where each entry represents 
  a trading day's open, high, low, and close values. The chart includes tooltips for detailed information 
  and customizable axis and series styles for better readability.

@props
  data: Array of tuples where each tuple represents a data point in the chart. Each tuple should have:
    - string: Date or time period (e.g., "2024-01-01")
    - number: Opening value
    - number: Closing value
    - number: Highest value
    - number: Lowest value
  Note: The order of the values in each tuple is: [Date, Open, Close, Highest, Lowest]

@usage
  <CandleEchartsCharts 
      data={[
      ["2024-01-01", 100, 110, 120, 90],
      ["2024-01-02", 110, 120, 130, 100],
      ["2024-01-03", 120, 130, 140, 110],
      ["2024-01-04", 130, 140, 150, 120]
    ]} 
  />
*/

const CandleEchartsCharts = (props: {
  data: [string, number, number, number, number][];
}) => {
  const processData = (data: [string, number, number, number, number][]) => {
    return data.map((item) => ({
      value: item.slice(1),
      name: item[0],
    }));
  };

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: { color: "#fff" },
        label: {
          show: true,
          color: "#000",
          formatter: null,
          precision: "auto",
          margin: 3,
        },
      },
    },
    xAxis: {
      type: "category",
      data: props.data.map((item) => item[0]),
      boundaryGap: false,
      axisLine: { lineStyle: { color: "#fff" } },
      axisLabel: { color: "#fff" },
    },
    yAxis: {
      scale: true,
      axisLine: { lineStyle: { color: "#fff" } },
      axisLabel: { color: "#fff" },
      splitLine: { lineStyle: { color: "#444" } },
    },
    series: [
      {
        name: "Candlestick",
        type: "candlestick",
        data: processData(props.data),
        itemStyle: {
          color: "#00da3c",
          color0: "#ec0000",
          borderColor: "#00da3c",
          borderColor0: "#ec0000",
        },
      },
    ],
    backgroundColor: "#333",
  };

  return (
    <div>
      <h1 style={{ color: "#fff" }}>
        Candlestick Chart
      </h1>
      <div style={{ height: "60vh" }}>
        <ReactECharts
          option={option}
          theme="dark"
          style={{ height: "100%", width: "100%" }}
          className="react-echarts"
        />
      </div>
    </div>
  );
};

export default CandleEchartsCharts;
