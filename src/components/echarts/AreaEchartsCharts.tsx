import ReactECharts from 'echarts-for-react';

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

const AreaEchartsCharts = (props:{data:{
  categories:string[];
  values:number[];
}}) => {

      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: "cross",
            crossStyle: { color: '#fff' }
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: props.data.categories,
          axisLine: { lineStyle: { color: '#fff' } },
          axisLabel: { color: '#fff' }
        },
        yAxis: {
          type: 'value',
          axisLabel: { color: '#fff' },
          splitLine: { lineStyle: { color: '#444' } }
        },
        series: [{
          name: 'Sales',
          type: 'line',
          stack: 'Total',
          smooth:'true',
          data: props.data.values,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(255, 0, 0, 0.8)' // Red color at the top
              }, {
                offset: 1, color: 'rgba(255, 0, 0, 0)' // Transparent at the bottom
              }]
            }
          },
          lineStyle: {
            color: 'rgba(255, 0, 0, 1)' // Red color for the line
          },
          itemStyle: {
            color: 'rgba(255, 0, 0, 1)' // Red color for the points
          }
    
        }],
        background:'#333'
      };
    
  return (
    <div>
      <h1>Area chart</h1>
      <div style={{ height: "60vh" }}>
      <ReactECharts
      option={option}
      style={{ height: '400px', width: '100%' }}
      className="react-echarts"
    />
      </div>
    </div>
  );
};
export default AreaEchartsCharts;
