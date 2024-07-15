import ReactECharts from 'echarts-for-react';

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
