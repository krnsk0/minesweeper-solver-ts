import { solveMine } from './fns/solveMine';
import { testData } from './testData';

const ACTIVE_TEST = 'test5';
const { map, result, mines, solvable } = testData[ACTIVE_TEST];

const output = solveMine(map, mines);

console.log('---------');
console.log(`output:\n${output}`);
console.log('Should be solvable?', solvable);
