import { mType } from './types/mapType';

export const copyMap = (m: mType): mType => {
  return {
    grid: m.grid.map((row) => row.slice()),
    n: m.n,
    width: m.width,
    height: m.height,
  };
};
