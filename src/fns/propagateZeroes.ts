import { getNeighbors } from './getNeighbors';
import { openCell } from './openCell';
import { mType } from './types/mapType';

const doesBoardHaveZeros = (m: mType): boolean =>
  m.grid.some((row) => row.some((cell) => cell === 0));

export const propagateZeros = (m: mType): mType => {
  while (doesBoardHaveZeros(m)) {
    m.grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === 0) {
          m.grid[rowIndex][colIndex] = '.';
          getNeighbors(rowIndex, colIndex, m.width, m.height)
            .filter(([row, col]) => m.grid[row][col] !== '.')
            .forEach(([row, col]) => openCell(m, row, col));
        }
      });
    });
  }
  return m;
};
