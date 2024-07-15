import ReactECharts from "echarts-for-react";
/*
@component
  Displays a pie chart using ECharts, featuring smooth animations and responsive design. 
  The chart is interactive, allowing users to click on the legend to toggle data visibility. 
  The chart's appearance is customizable, with a dark background and styled tooltips to enhance readability. 
  Ideal for visualizing proportional data and traffic sources.

@props
  data: Array of objects representing the pie chart segments. Each object should have:
    - value: Number indicating the segment's value
    - name: String representing the segment's name

@usage
  <PieEchartsCharts 
    data={[
      { value: 335, name: 'Direct' },
      { value: 310, name: 'Email' },
      { value: 234, name: 'Affiliate' },
      { value: 135, name: 'Video Ads' },
      { value: 1548, name: 'Search Engine' }
    ]} 
  />
*/

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
