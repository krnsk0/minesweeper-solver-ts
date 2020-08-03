"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solveMine = void 0;
var parseMap_1 = require("./parseMap");
var propagateZeroes_1 = require("./propagateZeroes");
var printMap_1 = require("./printMap");
exports.solveMine = function (map, n) {
    var m = parseMap_1.parseMap(map, n);
    m = propagateZeroes_1.propagateZeros(m);
    return printMap_1.printMap(m);
};
