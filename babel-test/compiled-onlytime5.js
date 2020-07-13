"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

// index.js
var Person = /*#__PURE__*/function () {
  function Person(name) {
    (0, _classCallCheck2["default"])(this, Person);
    this.name = name;
  }

  (0, _createClass2["default"])(Person, [{
    key: "say",
    value: function say() {
      console.log(this.name);
    }
  }]);
  return Person;
}(); // index.js


var Person1 = /*#__PURE__*/function () {
  function Person1(name) {
    (0, _classCallCheck2["default"])(this, Person1);
    this.name = name;
  }

  (0, _createClass2["default"])(Person1, [{
    key: "say",
    value: function say() {
      console.log(this.name);
    }
  }]);
  return Person1;
}();

var a = [];
(0, _find["default"])(a).call(a, function (item) {
  return item.a === 1;
});
