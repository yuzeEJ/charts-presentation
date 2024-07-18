import React from "react";
import AreaIcon from "../../assets/AreaIcon.tsx";
import CandleIcon from "../../assets/CandleIcon.tsx";
interface FilterationBarProps {
  currentRange: string;
  onRangeChange: (range: string) => void;
}

const FilterationBar: React.FC<FilterationBarProps> = ({
  currentRange,
  onRangeChange,
}) => {
  const buttonClass = (
    filter: string
  ) => `px-6 py-2  text-slate-500 rounded-full text-sm font-bold 
 ${
   currentRange === filter
     ? "bg-blue-100 border border-blue-500"
     : "bg-slate-50"
 }`;
  return (
    <div className="mb-5 space-x-2 justify-end flex mr-10">
      <button className={buttonClass("1D")} onClick={() => onRangeChange("1D")}>
        1D
      </button>
      <button onClick={() => onRangeChange("5D")} className={buttonClass("5D")}>
        5D
      </button>
      <button onClick={() => onRangeChange("3M")} className={buttonClass("3M")}>
        3M
      </button>
      <button onClick={() => onRangeChange("6M")} className={buttonClass("6M")}>
        6M
      </button>
      <button onClick={() => onRangeChange("1Y")} className={buttonClass("1Y")}>
        1Y
      </button>
      <button
        onClick={() => onRangeChange("Area")}
        className={buttonClass("Area")}
      >
        <p
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <AreaIcon style={{ marginRight: 3 }} /> Area
        </p>
      </button>
      <button
        onClick={() => onRangeChange("Candle")}
        className={buttonClass("Candle")}
      >
        <p
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CandleIcon style={{ marginRight: 3 }} /> Candles
        </p>
      </button>
    </div>
  );
};

export default FilterationBar;
