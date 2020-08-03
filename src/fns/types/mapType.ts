export type cellType = '?' | '.' | 'x' | number;

export type mType = {
  grid: Array<Array<cellType>>;
  n: number;
  width: number;
  height: number;
};
