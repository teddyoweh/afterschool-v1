'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Constrained identity function used to constrain user's theme type to Theme
 * while preserving its exact type.
 */
const makeTheme = theme => theme;
/**
 * Constrained identity function used to create a styles dictionary
 * assignable to ThemeStyles while preserving its exact type.
 */

const makeStyles = styles => styles;
const makeColorsScale = colors => colors;

exports.makeColorsScale = makeColorsScale;
exports.makeStyles = makeStyles;
exports.makeTheme = makeTheme;
