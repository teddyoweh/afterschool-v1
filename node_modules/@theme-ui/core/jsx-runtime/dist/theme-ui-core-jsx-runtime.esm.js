export { Fragment } from 'react';
import parseProps from '@theme-ui/parse-props';
import { jsx as jsx$1, jsxs as jsxs$1 } from '@emotion/react/jsx-runtime';

const jsx = (type, props, key) => jsx$1(type, parseProps(props), key);
const jsxs = (type, props, key) => jsxs$1(type, parseProps(props), key);

export { jsx, jsxs };
