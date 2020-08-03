"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyMap = void 0;
exports.copyMap = function (m) {
    return {
        grid: m.grid.map(function (row) { return row.slice(); }),
        n: m.n,
        width: m.width,
        height: m.height,
    };
};
