import { mType } from './types/mapType';

const isValid = (s: string): boolean =>
  ['?', '0', '1', '2', '3', '4', '5', '6', '7', '8'].includes(s);

export const parseMap = (map: string, n: number): mType => {
  const grid = map.split(`\n`).map((row) =>
    row
      .split(` `)
      .filter(isValid)
      .map((value) => {
        const output = value === '?' ? value : parseInt(value);
        return output;
      })
  );
  return {
    grid,
    n,
    width: grid[0].length,
    height: grid.length,
  };
};
