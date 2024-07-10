import ReactECharts from 'echarts-for-react';

const BarEchartsCharts = () => {
    const data = {
        categories: ['Apples', 'Bananas', 'Grapes', 'Oranges'],
        values: [25, 40, 30, 35],
        colors: ['#ff4d4d', '#ffb84d', '#4d79ff', '#4dff4d']

      };
      const option = {
        tooltip: {},
        xAxis: {
          data: data.categories,
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
          data: data.values.map((value, index) => ({
            value,
            itemStyle: { color: data.colors[index], borderWidth:0 }
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
