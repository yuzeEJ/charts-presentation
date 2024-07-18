import { AreaApi, AreaApiData, AreaData } from "../types";

export const AreaUtils = {
  getAreaDataModel(areaApi: AreaApi): AreaData[] {
    return areaApi.historicalPrices.map((data: AreaApiData) => {
      return {
        date: new Date(data.date),
        openPrice: parseInt(data.openPrice),
        closePrice: parseInt(data.closePrice),
        highPrice: parseInt(data.highPrice),
        lowPrice: parseInt(data.lowPrice),
        value: parseInt(data.closePrice),
      };
    });
  },
  capitalizeFirstLetter(string: string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
};
