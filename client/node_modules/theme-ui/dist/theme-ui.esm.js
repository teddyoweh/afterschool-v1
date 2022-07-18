import { jsx as jsx$1 } from '@theme-ui/core';
export { __ThemeUIContext, createElement, merge, useThemeUI } from '@theme-ui/core';
export { InitializeColorMode, useColorMode } from '@theme-ui/color-modes';
export { Themed, components } from '@theme-ui/mdx';
export { ThemeProvider } from '@theme-ui/theme-provider';
export * from '@theme-ui/components';
export { css, get } from '@theme-ui/css';

const BaseStyles = props => jsx('div', { ...props,
  sx: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
    variant: 'styles',
    ...props.sx
  }
});
const jsx = jsx$1;

export { BaseStyles, jsx };
