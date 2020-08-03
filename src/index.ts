import { solveMine } from './fns/solveMine';
import { initializeOpen } from './fns/open';
import { testData } from './testData';

const ACTIVE_TEST = 'test5';
const { map, result, mines, solvable } = testData[ACTIVE_TEST];
initializeOpen(result);

const output = solveMine(map, mines);

console.log('---------');
console.log(`output:\n${output}`);
console.log('Should be solvable?', solvable);
