"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
function default_1(value) {
    if (!utils_1.isExists(value)) {
        return '';
    }
    return value
        .toString()
        .toLowerCase()
        .trim()
        .replace(/&/g, '-and-')
        .replace(/[\s\W]/g, '-')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '-');
}
exports["default"] = default_1;
