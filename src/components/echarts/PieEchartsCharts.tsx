import ReactECharts from "echarts-for-react";

const PieEchartsCharts = (props:{
  data:{
    value:number;
    name:string;
  }[]
}) => {
  
  const option = {
    tooltip: {
      trigger: "item",
      axisPointer: {
        crossStyle: { color: "#fff" },
      },
    },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle:{color:"#fff"}
    },
    series: [
      {
        name: "Traffic Sources",
        type: "pie",
        radius: "50%",
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
    backgroundColor: "#333",
  };

  return (
    <div>
      <h1>Pie chart</h1>
      <div style={{ height: "60vh"}}>
        <ReactECharts
          option={option}
          style={{ height: "400px", width: "100%" }}
          className="react-echarts"
        />
      </div>
    </div>
  );
};
export default PieEchartsCharts;
