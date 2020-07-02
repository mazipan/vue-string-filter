"use strict";
exports.__esModule = true;
var lowercase_1 = require("./lowercase");
var uppercase_1 = require("./uppercase");
var capitalize_1 = require("./capitalize");
var titlecase_1 = require("./titlecase");
var slug_1 = require("./slug");
var truncate_1 = require("./truncate");
var cut_1 = require("./cut");
var remove_1 = require("./remove");
var remove_first_1 = require("./remove-first");
var replace_1 = require("./replace");
var replace_first_1 = require("./replace-first");
var append_1 = require("./append");
var VueStringFilter = /** @class */ (function () {
    function VueStringFilter() {
    }
    VueStringFilter.prototype.install = function (Vue) {
        Vue.filter('lowercase', lowercase_1["default"]);
        Vue.filter('uppercase', uppercase_1["default"]);
        Vue.filter('capitalize', capitalize_1["default"]);
        Vue.filter('titlecase', titlecase_1["default"]);
        Vue.filter('slug', slug_1["default"]);
        Vue.filter('truncate', truncate_1["default"]);
        Vue.filter('cut', cut_1["default"]);
        Vue.filter('remove', remove_1["default"]);
        Vue.filter('remove_first', remove_first_1["default"]);
        Vue.filter('replace', replace_1["default"]);
        Vue.filter('replace_first', replace_first_1["default"]);
        Vue.filter('append', append_1["default"]);
    };
    return VueStringFilter;
}());
exports["default"] = new VueStringFilter();
