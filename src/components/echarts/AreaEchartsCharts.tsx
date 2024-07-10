import ReactECharts from 'echarts-for-react';

const AreaEchartsCharts = () => {
    const data = {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      values: [120, 132, 101, 134, 90, 230, 210]
      };
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
          data: data.categories,
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
          data: data.values,
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
