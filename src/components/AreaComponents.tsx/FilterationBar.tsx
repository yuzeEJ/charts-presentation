import React from "react";

interface FilterationBarProps {
  currentRange: string;
  onRangeChange: (range: string) => void;
}

const FilterationBar: React.FC<FilterationBarProps> = ({ currentRange, onRangeChange }) => {
  return (
    <div className="mb-5">
      <button
        onClick={() => onRangeChange("1D")}
        className={`px-4 py-2 border border-blue-500 rounded text-black ${
          currentRange === "1D" ? "bg-blue-100" : "bg-white"
        }`}
      >
        1D
      </button>
      <button
        onClick={() => onRangeChange("5D")}
        className={`px-4 py-2 border border-blue-500 rounded text-black ${
          currentRange === "5D" ? "bg-blue-100" : "bg-white"
        }`}
      >
        5D
      </button>
      <button
        onClick={() => onRangeChange("1W")}
        className={`px-4 py-2 border border-blue-500 rounded text-black ${
          currentRange === "1W" ? "bg-blue-100" : "bg-white"
        }`}
      >
        1W
      </button>
      <button
        onClick={() => onRangeChange("1M")}
        className={`px-4 py-2 border border-blue-500 rounded text-black ${
          currentRange === "1M" ? "bg-blue-100" : "bg-white"
        }`}
      >
        1M
      </button>
    </div>
  );
};

export default FilterationBar;
