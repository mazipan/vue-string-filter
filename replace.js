"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
function default_1(value, replacement) {
    if (!utils_1.isExists(value)) {
        return '';
    }
    return value.replace(new RegExp(value, 'g'), replacement);
}
exports["default"] = default_1;
