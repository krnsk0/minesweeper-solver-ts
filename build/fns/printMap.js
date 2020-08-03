"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printMap = void 0;
var chalk_1 = require("chalk");
exports.printMap = function (m) {
    return m.grid
        .map(function (row) {
        return row
            .map(function (cell) {
            if (cell === '.') {
                return chalk_1.default.green(cell);
            }
            if (typeof cell === 'number') {
                return chalk_1.default.bgGreen.black(cell);
            }
            return cell;
        })
            .join(' ');
    })
        .join("\n");
};
