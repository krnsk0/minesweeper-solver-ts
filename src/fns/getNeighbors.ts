export const getNeighbors = (
  row: number,
  col: number,
  width: number,
  height: number
): Array<Array<number>> => {
  const cellRefs = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
  ]
    .map(([x, y]) => [row + x, col + y])
    .filter(([x, y]) => {
      return x >= 0 && y >= 0 && x < height && y < width;
    });
  return cellRefs;
};
