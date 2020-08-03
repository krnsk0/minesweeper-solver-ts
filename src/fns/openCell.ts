import { open } from './open';
import { mType } from './types/mapType';
import { copyMap } from './copyMap';

const openCell = (m: mType, row: number, col: number): mType => {
  const copy = copyMap(m);
  const result = open(row, col);
  if (result === 'x') throw 'boom';
  else {
    copy.grid[row][col] = parseInt(result);
  }
  return copy;
};
