import * as chalk from 'chalk';
import { mType } from './types/mapType';

export const printMap = (m: mType): string => {
  return m.grid
    .map((row) =>
      row
        .map((cell) => {
          if (cell === '.') {
            return chalk.green(cell);
          }
          if (typeof cell === 'number') {
            return chalk.bgGreen.black(cell);
          }
          return cell;
        })
        .join(' ')
    )
    .join(`\n`);
};
