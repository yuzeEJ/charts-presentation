import { ResponsiveBar } from "@nivo/bar";
import { Bar } from "../../types";

const BarNivoCharts = (props: { data: Bar[] }) => {
  return (
    <div style={{ paddingBottom: 10 }}>
      <h1>Bar chart</h1>
      <div style={{height:'60vh',backgroundColor:'white'}}>

      <ResponsiveBar
        data={props.data}
        keys={["degress"]}
        indexBy="day"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.4}
        valueScale={{ type: "linear" }}
        colors="#333333"
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "degrees",
          legendPosition: "middle",
          legendOffset: -40,
        }}
      />
      </div>
    </div>
  );
};

export default BarNivoCharts;
