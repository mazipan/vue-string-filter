"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
function default_1(value, string) {
    if (!utils_1.isExists(value)) {
        return '';
    }
    return value.toString().concat(string);
}
exports["default"] = default_1;
