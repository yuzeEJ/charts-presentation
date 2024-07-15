import ReactECharts from 'echarts-for-react';
/*
@component
  Displays a bar chart using ECharts. This component is designed to visualize data with vertical bars,
    where each bar represents a category and its value. 
  The chart includes customizable colors for each bar and supports tooltips for interactive data display. 
  It has a dark background for better visual contrast and readability.

@props
  data: Object containing three properties:
    - categories: Array of strings representing the categories or labels for the x-axis (e.g., product names, months).
    - values: Array of numbers representing the values for each category. The order of values corresponds to the order of categories.
    - colors: Array of strings representing the colors for each bar. The order of colors should match the order of values.

  Note: The `categories`, `values`, and `colors` arrays should have the same length, with each value
    and color corresponding to a category.

@usage
  <BarEchartsCharts 
    data={{
      categories: ["Product A", "Product B", "Product C"],
      values: [120, 150, 80],
      colors: ["#ff6347", "#4682b4", "#32cd32"]
    }} 
  />
*/

const BarEchartsCharts = (props:{data:{

  categories: string[];
  values: number[];
  colors:string[];
}
}) => {
      const option = {
        tooltip: {},
        xAxis: {
          data: props.data.categories,
          axisLine: { lineStyle: { color: '#fff' } },
          axisLabel: { color: '#fff' }
        },
        yAxis: {
          axisLine: { lineStyle: { color: '#fff' } },
      axisLabel: { color: '#fff' },
      splitLine: { lineStyle: { color: '#444' } }
        },
        series: [{
          name: 'Quantity',
          type: 'bar',
          data: props.data.values.map((value, index) => ({
            value,
            itemStyle: { color: props.data.colors[index], borderWidth:0 }
          })),

        }],
        backgroundColor: '#333'
      };
  return (
    <div>
      <h1>Bar chart</h1>
      <div style={{ height: "60vh"}}>
      <ReactECharts
      option={option}
      style={{ height: '400px', width: '100%' }}
      className="react-echarts"
    />
      </div>
    </div>
  );
};
export default BarEchartsCharts;
