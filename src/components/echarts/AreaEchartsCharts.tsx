import { useState } from "react";
import ReactECharts from "echarts-for-react";
import { AreaApi, AreaData } from "../../types";
import { AreaUtils } from "../../utils/AreaUtils";
import FilterationBar from "../AreaComponents.tsx/FilterationBar";

/*
@component
  Displays an area chart using ECharts. This component is designed to visualize data with smooth lines
    and a shaded area beneath the line. 
  It includes tooltips for interactive data points,
    a dark background for better visibility, and customizable colors for the area and line.

@props
  data: Object containing two properties:
    - categories: Array of strings representing the categories or labels for the x-axis (e.g., dates, time periods).
    - values: Array of numbers representing the values for each category. The order of values corresponds to the order of categories.

  Note: The `categories` and `values` arrays should have the same length, with each value corresponding to a category.

@usage
  <AreaEchartsCharts 
    data={{
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      values: [120, 132, 101, 134, 90]
    }} 
  />
*/

const AreaEchartsCharts = (props: { data: AreaApi }) => {
  const [timeRange, setTimeRange] = useState("5D"); // Default time range
  const data: AreaData[] = AreaUtils.getAreaDataModel(props.data);

  // Function to filter data based on the selected time range
  const getFilteredData = (data: AreaData[], range: string) => {
    const now = new Date();
    let startDate;

    switch (range) {
      case "1D":
        startDate = new Date(now.setDate(now.getDate() - 1));
        break;
      case "5D":
        startDate = new Date(now.setDate(now.getDate() - 5));
        break;
      case "3M":
        startDate = new Date(now.setDate(now.getMonth() - 3));
        break;
      case "6M":
        startDate = new Date(now.setMonth(now.getMonth() - 6));
        break;
      case "1Y":
        startDate = new Date(now.setFullYear(now.getFullYear() - 1));
        break;
      default:
        startDate = new Date(now.setFullYear(now.getFullYear() - 1)); // Default to 1 year
        break;
    }

    return data.filter((el) => new Date(el.date) >= startDate);
  };

  const filteredData = getFilteredData(data, timeRange);

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: { color: "#000" },
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: filteredData.map((el) => el.date.getHours()),
      axisLine: { show: false },
      axisLabel: { color: "#777" },
      axisTick: { show: false },
    },
    yAxis: {
      type: "value",
      axisLabel: { color: "#777", onZero: false },
      axisLine: { show: false },
      position: "right",
      splitLine: {
        show: false, // Hide horizontal grid lines
      },
      min: function (value: { min: number }) {
        return value.min - 20;
      },
    },
    series: [
      {
        name: "Sales",
        type: "line",
        stack: "Total",
        data: filteredData.map((el) => el.value),
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 0.7,
            colorStops: [
              {
                offset: 0,
                color: "rgba(0, 255, 150, 0.8)", // Green color at the top
              },
              {
                offset: 1,
                color: "rgba(0, 255, 150, 0)", // Transparent at the bottom
              },
            ],
          },
        },
        lineStyle: {
          color: "rgba(0, 255, 150, 1)", // Green color for the line
        },
        itemStyle: {
          color: "rgba(0, 255, 250, 1)", // Green color for the points
        },
        symbol: "none",
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <h1>Area chart</h1>
      <FilterationBar currentRange={timeRange} onRangeChange={setTimeRange} />
      <div style={{ height: "60vh", width: "100%", backgroundColor: "#fff" }}>
        <ReactECharts
          option={option}
          style={{ height: "400px", width: "100%", display: "flex" }}
          className="react-echarts"
        />
      </div>
    </div>
  );
};

export default AreaEchartsCharts;
