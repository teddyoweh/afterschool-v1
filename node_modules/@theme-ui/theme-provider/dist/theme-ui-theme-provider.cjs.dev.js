'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@theme-ui/core');
var css = require('@theme-ui/css');
var colorModes = require('@theme-ui/color-modes');
var mdx = require('@theme-ui/mdx');
var react = require('@emotion/react');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const RootStyles = () => core.jsx(react.Global, {
  styles: emotionTheme => {
    var _theme$config;

    const theme = emotionTheme;
    const {
      useRootStyles
    } = theme.config || theme;

    if (useRootStyles === false || theme.styles && !theme.styles.root) {
      return null;
    }

    const boxSizing = ((_theme$config = theme.config) == null ? void 0 : _theme$config.useBorderBox) === false ? undefined : 'border-box';
    return css.css({
      '*': {
        boxSizing
      },
      html: {
        variant: 'styles.root'
      },
      body: {
        margin: 0
      }
    })(theme);
  }
});

const ThemeProvider = ({
  theme,
  components,
  children
}) => {
  const outer = core.useThemeUI();
  const isTopLevel = outer === core.__themeUiDefaultContextValue;
  return /*#__PURE__*/React__default['default'].createElement(core.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default['default'].createElement(colorModes.ColorModeProvider, null, isTopLevel && /*#__PURE__*/React__default['default'].createElement(RootStyles, null), /*#__PURE__*/React__default['default'].createElement(mdx.MDXProvider, {
    components: components
  }, children)));
};

exports.ThemeProvider = ThemeProvider;
