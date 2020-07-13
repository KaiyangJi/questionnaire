'use strict';

var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault');

var _defineProperty2 = _interopRequireDefault(
    require('@babel/runtime-corejs3/core-js-stable/object/define-property')
);

var _defineProperties = _interopRequireDefault(
    require('@babel/runtime-corejs3/core-js-stable/object/define-properties')
);

var _getOwnPropertyDescriptors = _interopRequireDefault(
    require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors')
);

var _forEach = _interopRequireDefault(
    require('@babel/runtime-corejs3/core-js-stable/instance/for-each')
);

var _getOwnPropertyDescriptor = _interopRequireDefault(
    require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor')
);

var _filter = _interopRequireDefault(
    require('@babel/runtime-corejs3/core-js-stable/instance/filter')
);

var _getOwnPropertySymbols = _interopRequireDefault(
    require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols')
);

var _keys = _interopRequireDefault(require('@babel/runtime-corejs3/core-js-stable/object/keys'));

var _defineProperty3 = _interopRequireDefault(
    require('@babel/runtime-corejs3/helpers/defineProperty')
);

var _includes = _interopRequireDefault(
    require('@babel/runtime-corejs3/core-js-stable/instance/includes')
);

var _find = _interopRequireDefault(require('@babel/runtime-corejs3/core-js-stable/instance/find'));

var _classCallCheck2 = _interopRequireDefault(
    require('@babel/runtime-corejs3/helpers/classCallCheck')
);

var _createClass2 = _interopRequireDefault(require('@babel/runtime-corejs3/helpers/createClass'));

var _context;

function ownKeys(object, enumerableOnly) {
    var keys = (0, _keys.default)(object);
    if (_getOwnPropertySymbols.default) {
        var symbols = (0, _getOwnPropertySymbols.default)(object);
        if (enumerableOnly)
            symbols = (0, _filter.default)(symbols).call(symbols, function (sym) {
                return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable;
            });
        keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            var _context2;
            (0, _forEach.default)((_context2 = ownKeys(Object(source), true))).call(
                _context2,
                function (key) {
                    (0, _defineProperty3.default)(target, key, source[key]);
                }
            );
        } else if (_getOwnPropertyDescriptors.default) {
            (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source));
        } else {
            var _context3;
            (0, _forEach.default)((_context3 = ownKeys(Object(source)))).call(_context3, function (
                key
            ) {
                (0, _defineProperty2.default)(
                    target,
                    key,
                    (0, _getOwnPropertyDescriptor.default)(source, key)
                );
            });
        }
    }
    return target;
}

// index.js
var Person = /*#__PURE__*/ (function () {
    function Person(name) {
        (0, _classCallCheck2.default)(this, Person);
        this.name = name;
    }

    (0, _createClass2.default)(Person, [
        {
            key: 'say',
            value: function say() {
                console.log(this.name);
            },
        },
    ]);
    return Person;
})(); // index.js

var Person1 = /*#__PURE__*/ (function () {
    function Person1(name) {
        (0, _classCallCheck2.default)(this, Person1);
        this.name = name;
    }

    (0, _createClass2.default)(Person1, [
        {
            key: 'say',
            value: function say() {
                console.log(this.name);
            },
        },
    ]);
    return Person1;
})();

var a = [];
(0, _find.default)(a).call(a, function (item) {
    return item.a === 1;
});

(function () {
    console.log(1);
});

(0, _includes.default)((_context = [])).call(_context, 1);
var c = {
    a: 1,
};

var d = _objectSpread({}, c);
