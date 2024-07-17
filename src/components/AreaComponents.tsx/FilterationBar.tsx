import React from "react";

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
  ) => `px-6 py-1 border border-blue-500 text-black rounded-full text-sm font-bold 
 ${currentRange === filter ? "bg-blue-100" : "bg-white"}`;
  return (
    <div className="mb-5">
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
    </div>
  );
};

export default FilterationBar;
