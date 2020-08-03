"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propagateZeros = void 0;
var getNeighbors_1 = require("./getNeighbors");
var openCell_1 = require("./openCell");
var doesBoardHaveZeros = function (m) {
    return m.grid.some(function (row) { return row.some(function (cell) { return cell === 0; }); });
};
exports.propagateZeros = function (m) {
    while (doesBoardHaveZeros(m)) {
        m.grid.forEach(function (row, rowIndex) {
            row.forEach(function (cell, colIndex) {
                if (cell === 0) {
                    m.grid[rowIndex][colIndex] = '.';
                    getNeighbors_1.getNeighbors(rowIndex, colIndex, m.width, m.height)
                        .filter(function (_a) {
                        var _b = __read(_a, 2), row = _b[0], col = _b[1];
                        return m.grid[row][col] !== '.';
                    })
                        .forEach(function (_a) {
                        var _b = __read(_a, 2), row = _b[0], col = _b[1];
                        return openCell_1.openCell(m, row, col);
                    });
                }
            });
        });
    }
    return m;
};
