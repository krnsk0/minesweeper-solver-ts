const test1 = {
  map: `? ? ? ? ? ?
? ? ? ? ? ?
? ? ? 0 ? ?
? ? ? ? ? ?
? ? ? ? ? ?
0 0 0 ? ? ?`,
  result: `1 x 1 1 x 1
2 2 2 1 2 2
2 x 2 0 1 x
2 x 2 1 2 2
1 1 1 1 x 1
0 0 0 1 1 1`,
  mines: 6,
  solvable: true,
};

const test2 = {
  map: `0 ? ?
  0 ? ?`,
  result: `0 1 x
  0 1 1`,
  mines: 1,
  solvable: false,
};

const test3 = {
  map: `0 ? ?
  0 ? ?`,
  result: `0 2 x
  0 2 x`,
  mines: 2,
  solvable: true,
};

const test4 = {
  map: `? ? ? ? 0 0 0
  ? ? ? ? 0 ? ?
  ? ? ? 0 0 ? ?
  ? ? ? 0 0 ? ?
  0 ? ? ? 0 0 0
  0 ? ? ? 0 0 0
  0 ? ? ? 0 ? ?
  0 0 0 0 0 ? ?
  0 0 0 0 0 ? ?`,
  result: `1 x x 1 0 0 0
  2 3 3 1 0 1 1
  1 x 1 0 0 1 x
  1 1 1 0 0 1 1
  0 1 1 1 0 0 0
  0 1 x 1 0 0 0
  0 1 1 1 0 1 1
  0 0 0 0 0 1 x
  0 0 0 0 0 1 1`,
  mines: 6,
  solvable: true,
};

const test5 = {
  map: `0 0 0 0 0 0 0 0 0 0 0 0 ? ? ? 0 0 0 0 0 0 0 0 ? ? ? ? ? ? 0
  0 0 0 0 0 0 0 0 0 0 0 0 ? ? ? 0 ? ? ? 0 0 0 0 ? ? ? ? ? ? 0
  ? ? ? 0 0 0 0 ? ? ? 0 0 0 0 ? ? ? ? ? 0 0 0 0 ? ? ? ? ? ? 0
  ? ? ? ? ? ? 0 ? ? ? ? ? 0 0 ? ? ? ? ? 0 0 0 0 ? ? ? 0 0 0 0
  ? ? ? ? ? ? 0 ? ? ? ? ? 0 0 ? ? ? ? 0 0 0 0 0 ? ? ? 0 0 ? ?
  0 ? ? ? ? ? 0 0 0 ? ? ? 0 ? ? ? ? ? 0 0 0 0 0 ? ? ? 0 0 ? ?
  0 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? 0 0 0 ? ? ? ? ? ? ?
  0 0 0 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? 0 ? ? ? 0 0 ? ? ? 0
  0 ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? 0 ? ? ? 0 0 ? ? ? 0
  ? ? ? ? 0 ? ? ? ? 0 0 0 ? ? ? ? ? ? ? 0 0 ? ? ? 0 0 ? ? ? 0
  ? ? ? ? 0 ? ? ? ? ? 0 0 ? ? ? ? ? ? ? 0 0 0 ? ? ? 0 0 0 0 0
  ? ? ? ? ? ? ? ? ? ? 0 0 ? ? ? ? ? ? ? 0 0 0 ? ? ? ? 0 0 0 0
  ? ? ? ? ? ? ? ? ? ? 0 0 0 0 ? ? ? ? ? 0 0 0 ? ? ? ? 0 0 0 0
  ? ? ? ? ? ? ? 0 0 ? ? ? 0 0 ? ? ? 0 0 0 0 0 ? ? ? ? 0 0 0 0
  ? ? ? ? 0 0 0 0 0 ? ? ? 0 0 ? ? ? 0 0 0 0 0 ? ? ? 0 0 0 0 0`,
  result: `0 0 0 0 0 0 0 0 0 0 0 0 1 x 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 0
  0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 0 1 1 1 0 0 0 0 2 x 2 1 x 1 0
  1 1 1 0 0 0 0 1 1 1 0 0 0 0 1 1 2 x 1 0 0 0 0 2 x 2 1 1 1 0
  1 x 1 1 1 1 0 1 x 2 1 1 0 0 1 x 2 1 1 0 0 0 0 1 1 1 0 0 0 0
  1 2 2 3 x 2 0 1 1 2 x 1 0 0 1 2 2 1 0 0 0 0 0 1 1 1 0 0 1 1
  0 1 x 3 x 2 0 0 0 1 1 1 0 1 2 3 x 1 0 0 0 0 0 1 x 1 0 0 1 x
  0 1 1 3 3 3 2 1 1 1 1 2 1 2 x x 2 2 1 1 0 0 0 1 1 1 1 1 2 1
  0 0 0 1 x x 2 x 1 1 x 2 x 2 3 3 3 2 x 1 0 1 1 1 0 0 2 x 2 0
  0 1 1 2 2 2 3 2 2 1 1 2 1 1 1 x 2 x 2 1 0 1 x 1 0 0 2 x 2 0
  1 2 x 1 0 1 2 x 1 0 0 0 1 1 2 2 3 2 1 0 0 1 1 1 0 0 1 1 1 0
  1 x 2 1 0 1 x 3 2 1 0 0 1 x 1 1 x 2 1 0 0 0 1 1 1 0 0 0 0 0
  1 1 2 1 2 2 2 2 x 1 0 0 1 1 1 1 2 x 1 0 0 0 1 x 2 1 0 0 0 0
  1 1 2 x 2 x 1 1 1 1 0 0 0 0 1 1 2 1 1 0 0 0 1 2 x 1 0 0 0 0
  1 x 3 2 2 1 1 0 0 1 1 1 0 0 1 x 1 0 0 0 0 0 1 2 2 1 0 0 0 0
  1 2 x 1 0 0 0 0 0 1 x 1 0 0 1 1 1 0 0 0 0 0 1 x 1 0 0 0 0 0`,
  mines: 45,
  solvable: true,
};

export const testData = { test1, test2, test3, test4, test5 };
