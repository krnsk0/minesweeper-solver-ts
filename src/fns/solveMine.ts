import { parseMap } from './parseMap';
import { propagateZeros } from './propagateZeroes';
import { printMap } from './printMap';

export const solveMine = (map: string, n: number): string => {
  let m = parseMap(map, n);

  m = propagateZeros(m);

  return printMap(m);
};
