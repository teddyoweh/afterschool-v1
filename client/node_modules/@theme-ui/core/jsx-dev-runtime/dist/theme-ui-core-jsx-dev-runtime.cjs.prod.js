'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var parseProps = require('@theme-ui/parse-props');
var jsxDevRuntime = require('@emotion/react/jsx-dev-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var parseProps__default = /*#__PURE__*/_interopDefault(parseProps);

// @ts-ignore
const jsxDEV = (type, props, key, isStaticChildren, source, self) => jsxDevRuntime.jsxDEV(type, parseProps__default['default'](props), key, isStaticChildren, source, self);

Object.defineProperty(exports, 'Fragment', {
  enumerable: true,
  get: function () {
    return React.Fragment;
  }
});
exports.jsxDEV = jsxDEV;
