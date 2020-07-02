"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
function default_1(value) {
    if (!utils_1.isExists(value)) {
        return '';
    }
    return value.toString().toLowerCase();
}
exports["default"] = default_1;
