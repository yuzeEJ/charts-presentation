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
  
}