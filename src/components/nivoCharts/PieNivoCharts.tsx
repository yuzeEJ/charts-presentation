import { ResponsivePie } from "@nivo/pie";
import { Pie } from "../../types";
const PieNivoCharts = (props: { data: Pie[] }) => {
  return (
    <div>
      <h1>Pie chart example</h1>
      <div style={{height:'60vh',backgroundColor:'white'}}>

      <ResponsivePie
        data={props.data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      />
</div>
    </div>
  );
};
export default PieNivoCharts;