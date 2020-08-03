import { open } from './open';
import { mType } from './types/mapType';
import { copyMap } from './copyMap';

export const openCell = (m: mType, row: number, col: number): mType => {
  const result = open(row, col);
  if (result === 'x') throw 'boom';
  else {
    m.grid[row][col] = parseInt(result);
  }
  return m;
};
