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
exports.getNeighbors = void 0;
exports.getNeighbors = function (row, col, width, height) {
    var cellRefs = [
        [1, 0],
        [1, 1],
        [0, 1],
        [-1, 1],
        [-1, 0],
        [-1, -1],
        [0, -1],
        [1, -1],
    ]
        .map(function (_a) {
        var _b = __read(_a, 2), x = _b[0], y = _b[1];
        return [row + x, col + y];
    })
        .filter(function (_a) {
        var _b = __read(_a, 2), x = _b[0], y = _b[1];
        return x >= 0 && y >= 0 && x < height && y < width;
    });
    return cellRefs;
};
