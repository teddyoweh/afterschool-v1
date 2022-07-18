'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('@emotion/react');
var React = require('react');
var deepmerge = require('deepmerge');
var packageInfo = require('@emotion/react/package.json');
var parseProps = require('@theme-ui/parse-props');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var deepmerge__default = /*#__PURE__*/_interopDefault(deepmerge);
var packageInfo__default = /*#__PURE__*/_interopDefault(packageInfo);
var parseProps__default = /*#__PURE__*/_interopDefault(parseProps);

const __EMOTION_VERSION__ = packageInfo__default['default'].version;
const jsx = (type, props, ...children) => react.jsx(type, parseProps__default['default'](props), ...children);
/**
 * @internal for Babel JSX pragma
 * @see https://github.com/system-ui/theme-ui/issues/1603
 */

const createElement = jsx;

/**
 * @internal
 */
const __themeUiDefaultContextValue = {
  __EMOTION_VERSION__,
  theme: {}
};
/**
 * @internal
 */

const __ThemeUIContext = /*#__PURE__*/React.createContext(__themeUiDefaultContextValue);
const useThemeUI = () => React.useContext(__ThemeUIContext);
const canUseSymbol = typeof Symbol === 'function' && Symbol.for;
const REACT_ELEMENT = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
const FORWARD_REF = canUseSymbol ? Symbol.for('react.forward_ref') : 0xeac7;
const deepmergeOptions = {
  isMergeableObject: n => {
    return !!n && typeof n === 'object' && n.$$typeof !== REACT_ELEMENT && n.$$typeof !== FORWARD_REF;
  },
  arrayMerge: (_leftArray, rightArray) => rightArray
};
/**
 * Deeply merge themes
 */

const merge = (a, b) => deepmerge__default['default'](a, b, deepmergeOptions);

function mergeAll(...args) {
  return deepmerge__default['default'].all(args, deepmergeOptions);
}

merge.all = mergeAll;

/**
 * @internal
 */
const __ThemeUIInternalBaseThemeProvider = ({
  context,
  children
}) => jsx(react.ThemeContext.Provider, {
  value: context.theme
}, jsx(__ThemeUIContext.Provider, {
  value: context,
  children
}));
function ThemeProvider({
  theme,
  children
}) {
  const outer = useThemeUI();

  const context = typeof theme === 'function' ? { ...outer,
    theme: theme(outer.theme)
  } : merge.all({}, outer, {
    theme
  });
  return jsx(__ThemeUIInternalBaseThemeProvider, {
    context,
    children
  });
}

exports.ThemeProvider = ThemeProvider;
exports.__ThemeUIContext = __ThemeUIContext;
exports.__ThemeUIInternalBaseThemeProvider = __ThemeUIInternalBaseThemeProvider;
exports.__themeUiDefaultContextValue = __themeUiDefaultContextValue;
exports.createElement = createElement;
exports.jsx = jsx;
exports.merge = merge;
exports.useThemeUI = useThemeUI;
