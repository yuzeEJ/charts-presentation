// rfc
import { type DataBar } from "../../types";
import { AreaUtils } from "../../utils/AreaUtils";

export default function DataBar(props: { data: DataBar }) {
  return (
    <div className="bg-slate-50 border p-2 w-auto flex rounded-xl ml-10">
      <div className="flex space-x-7">
        {Object.entries(props.data).map(([key, value], index) => (
          <div key={index} className="flex-1">
            <div className="text-slate-500 text-left text-xs">
              {AreaUtils.capitalizeFirstLetter(key)}
            </div>
            <div
              className={`font-bold flex text-right text-nowrap ${
                key === "down"
                  ? "text-red-600"
                  : key === "up"
                  ? "text-green-600"
                  : "text-black "
              }`}
            >
              {value} <p className="text-xs font-normal mt-1.5">.33 SAR</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
