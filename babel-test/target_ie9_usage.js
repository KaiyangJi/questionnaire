"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _context;

// index.js
class Person {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(this.name);
  }

} // index.js


class Person1 {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(this.name);
  }

}

const a = [];
(0, _find.default)(a).call(a, item => {
  return item.a === 1;
});

() => {
  console.log(1);
};

(0, _includes.default)(_context = []).call(_context, 1);
var c = {
  a: 1
};
var d = { ...c
};
const list = [1, 2, 3];
(0, _forEach.default)(list).call(list, item => {
  console.log(item);
});
const list1 = [1, 2, 3];
(0, _map.default)(list1).call(list1, item => {
  console.log(item);
});
