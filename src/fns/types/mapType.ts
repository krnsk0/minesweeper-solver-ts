export type cellType = '?' | number;

export type mType = {
  grid: Array<Array<cellType>>;
  n: number;
  width: number;
  height: number;
};
