'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var css = require('@theme-ui/css');

const getCSS = props => theme => {
  const styles = css.css(props.sx)(theme);
  const raw = typeof props.css === 'function' ? props.css(theme) : props.css;
  return [styles, raw];
};

const parseProps = props => {
  if (!props || !props.sx && !props.css) return props;
  const next = {};

  for (let key in props) {
    if (key === 'sx') continue;
    next[key] = props[key];
  }

  next.css = getCSS(props);
  return next;
};

exports.default = parseProps;
