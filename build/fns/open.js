"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.open = exports.initializeOpen = void 0;
var m;
var isValid = function (s) {
    return ['?', 'x', '0', '1', '2', '3', '4', '5', '6', '7', '8'].includes(s);
};
exports.initializeOpen = function (result) {
    m = result.split("\n").map(function (row) { return row.split(" ").filter(isValid); });
};
exports.open = function (row, column) {
    if (m[row][column] === 'x')
        return 'open a mine, Booom!';
    else
        return m[row][column];
};
