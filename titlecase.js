"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
function default_1(value) {
    if (!utils_1.isExists(value)) {
        return '';
    }
    return value.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
exports["default"] = default_1;
