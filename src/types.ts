export type Pie = {
  id: string;
  label: string;
  value: number;
  color: string;
};

export type Bar = {
  day: string;
  degress: number;
};

export type CandleStick = {
  group: string;
  subgroup: string;
  mu: number;
  sd: number;
  n: number;
  value: number;
};

export type Stream = {
  Raoul: number;
  Josiane: number;
  Marcel: number;
  René: number;
  Paul: number;
  Jacques: number;
};

export type AreaApiData = {
  date: number;
  openPrice: string;
  closePrice: string;
  lowPrice: string;
  highPrice: string;
};
export type AreaApi = {
  historicalPrices: AreaApiData[];
};

export type AreaData = {
  date: Date;
  openPrice: number;
  closePrice: number;
  lowPrice: number;
  highPrice: number;
  value: number;
};
