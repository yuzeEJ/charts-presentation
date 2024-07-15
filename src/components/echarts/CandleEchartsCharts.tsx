import ReactECharts from "echarts-for-react";
import "echarts/theme/dark";

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
      <h1 style={{ color: "#fff" }}>Candlestick Chart</h1>
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
