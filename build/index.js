"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var solveMine_1 = require("./fns/solveMine");
var open_1 = require("./fns/open");
var testData_1 = require("./testData");
var ACTIVE_TEST = 'test5';
var _a = testData_1.testData[ACTIVE_TEST], map = _a.map, result = _a.result, mines = _a.mines, solvable = _a.solvable;
open_1.initializeOpen(result);
var output = solveMine_1.solveMine(map, mines);
console.log('---------');
console.log("output:\n" + output);
console.log('Should be solvable?', solvable);
