'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@theme-ui/core');
var colorModes = require('@theme-ui/color-modes');
var mdx = require('@theme-ui/mdx');
var themeProvider = require('@theme-ui/theme-provider');
var components = require('@theme-ui/components');
var css = require('@theme-ui/css');

const BaseStyles = props => jsx('div', { ...props,
  sx: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
    variant: 'styles',
    ...props.sx
  }
});
const jsx = core.jsx;

Object.keys(components).forEach(function (k) {
  if (k !== 'default') Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return components[k];
    }
  });
});
Object.defineProperty(exports, '__ThemeUIContext', {
  enumerable: true,
  get: function () {
    return core.__ThemeUIContext;
  }
});
Object.defineProperty(exports, 'createElement', {
  enumerable: true,
  get: function () {
    return core.createElement;
  }
});
Object.defineProperty(exports, 'merge', {
  enumerable: true,
  get: function () {
    return core.merge;
  }
});
Object.defineProperty(exports, 'useThemeUI', {
  enumerable: true,
  get: function () {
    return core.useThemeUI;
  }
});
Object.defineProperty(exports, 'InitializeColorMode', {
  enumerable: true,
  get: function () {
    return colorModes.InitializeColorMode;
  }
});
Object.defineProperty(exports, 'useColorMode', {
  enumerable: true,
  get: function () {
    return colorModes.useColorMode;
  }
});
Object.defineProperty(exports, 'Themed', {
  enumerable: true,
  get: function () {
    return mdx.Themed;
  }
});
Object.defineProperty(exports, 'components', {
  enumerable: true,
  get: function () {
    return mdx.components;
  }
});
Object.defineProperty(exports, 'ThemeProvider', {
  enumerable: true,
  get: function () {
    return themeProvider.ThemeProvider;
  }
});
Object.defineProperty(exports, 'css', {
  enumerable: true,
  get: function () {
    return css.css;
  }
});
Object.defineProperty(exports, 'get', {
  enumerable: true,
  get: function () {
    return css.get;
  }
});
exports.BaseStyles = BaseStyles;
exports.jsx = jsx;
