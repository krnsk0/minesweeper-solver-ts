"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openCell = void 0;
var open_1 = require("./open");
var copyMap_1 = require("./copyMap");
exports.openCell = function (m, row, col) {
    var copy = copyMap_1.copyMap(m);
    var result = open_1.open(row, col);
    if (result === 'x')
        throw 'boom';
    else {
        copy.grid[row][col] = parseInt(result);
    }
    return copy;
};
