type mType = Array<Array<string>>;

let m: mType;

const isValid = (s: string): boolean =>
  ['?', 'x', '0', '1', '2', '3', '4', '5', '6', '7', '8'].includes(s);

export const initializeOpen = (result: string) => {
  m = result.split(`\n`).map((row) => row.split(` `).filter(isValid));
};

export const open = (row: number, column: number): string => {
  if (m[row][column] === 'x') return 'open a mine, Booom!';
  else return m[row][column];
};
