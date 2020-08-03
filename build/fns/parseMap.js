"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMap = void 0;
var isValid = function (s) {
    return ['?', '0', '1', '2', '3', '4', '5', '6', '7', '8'].includes(s);
};
exports.parseMap = function (map, n) {
    var grid = map.split("\n").map(function (row) {
        return row
            .split(" ")
            .filter(isValid)
            .map(function (value) {
            var output = value === '?' ? value : parseInt(value);
            return output;
        });
    });
    return {
        grid: grid,
        n: n,
        width: grid[0].length,
        height: grid.length,
    };
};
