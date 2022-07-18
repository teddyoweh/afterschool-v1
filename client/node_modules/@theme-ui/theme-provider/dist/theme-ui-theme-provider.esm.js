import React from 'react';
import { useThemeUI, ThemeProvider as ThemeProvider$1, jsx, __themeUiDefaultContextValue } from '@theme-ui/core';
import { css } from '@theme-ui/css';
import { ColorModeProvider } from '@theme-ui/color-modes';
import { MDXProvider } from '@theme-ui/mdx';
import { Global } from '@emotion/react';

const RootStyles = () => jsx(Global, {
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
    return css({
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
  const outer = useThemeUI();
  const isTopLevel = outer === __themeUiDefaultContextValue;
  return /*#__PURE__*/React.createElement(ThemeProvider$1, {
    theme: theme
  }, /*#__PURE__*/React.createElement(ColorModeProvider, null, isTopLevel && /*#__PURE__*/React.createElement(RootStyles, null), /*#__PURE__*/React.createElement(MDXProvider, {
    components: components
  }, children)));
};

export { ThemeProvider };
