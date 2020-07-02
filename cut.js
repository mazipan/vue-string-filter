"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
function default_1(value, count) {
    if (!utils_1.isExists(value)) {
        return '';
    }
    return value.length < count ? value : value.slice(0, count);
}
exports["default"] = default_1;
