import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const AreaRechartsCharts = () => {
  return (
    <div>
      <h1>Area chart</h1>
      <div style={{ height: "60vh", backgroundColor: "white" }}>
      <ResponsiveContainer width="100%" height="100%">


        <AreaChart
          accessibilityLayer
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          data={chartData}
          >
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
            />
          <Area
            dataKey="mobile"
            type="natural"
            fill="#FF0000"
            fillOpacity={0.4}
            stroke="#FF00FF"
            stackId="a"
            />
          <Area
            dataKey="desktop"
            type="natural"
            fill="#0000FF"
            fillOpacity={0.4}
            stroke="#45f098)"
            stackId="a"
            />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
            </ResponsiveContainer>
      </div>
    </div>
  );
};
export default AreaRechartsCharts;
