'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var ReactReduxContext = /*#__PURE__*/React__default['default'].createContext(null);

if (process.env.NODE_ENV !== 'production') {
  ReactReduxContext.displayName = 'ReactRedux';
}

// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();

function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = React.useMemo(function () {
    var subscription = new Subscription(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = React.useMemo(function () {
    return store.getState();
  }, [store]);
  React.useEffect(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return /*#__PURE__*/React__default['default'].createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (process.env.NODE_ENV !== 'production') {
  Provider.propTypes = {
    store: propTypes.shape({
      subscribe: propTypes.func.isRequired,
      dispatch: propTypes.func.isRequired,
      getState: propTypes.func.isRequired
    }),
    context: propTypes.object,
    children: propTypes.any
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1="function"===typeof Symbol&&Symbol.for,c$1=b$1?Symbol.for("react.element"):60103,d$1=b$1?Symbol.for("react.portal"):60106,e$1=b$1?Symbol.for("react.fragment"):60107,f$1=b$1?Symbol.for("react.strict_mode"):60108,g$1=b$1?Symbol.for("react.profiler"):60114,h$1=b$1?Symbol.for("react.provider"):60109,k$1=b$1?Symbol.for("react.context"):60110,l$1=b$1?Symbol.for("react.async_mode"):60111,m$1=b$1?Symbol.for("react.concurrent_mode"):60111,n$1=b$1?Symbol.for("react.forward_ref"):60112,p$1=b$1?Symbol.for("react.suspense"):60113,q$1=b$1?
Symbol.for("react.suspense_list"):60120,r$1=b$1?Symbol.for("react.memo"):60115,t$1=b$1?Symbol.for("react.lazy"):60116,v$1=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$1=b$1?Symbol.for("react.responder"):60118,y$1=b$1?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l$1:case m$1:case e$1:case g$1:case f$1:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n$1:case t$1:case r$1:case h$1:return a;default:return u}}case d$1:return u}}}function A$1(a){return z$1(a)===m$1}var AsyncMode$1=l$1;var ConcurrentMode$1=m$1;var ContextConsumer$1=k$1;var ContextProvider$1=h$1;var Element$1=c$1;var ForwardRef$1=n$1;var Fragment$1=e$1;var Lazy$1=t$1;var Memo$1=r$1;var Portal$1=d$1;
var Profiler$1=g$1;var StrictMode$1=f$1;var Suspense$1=p$1;var isAsyncMode$1=function(a){return A$1(a)||z$1(a)===l$1};var isConcurrentMode$1=A$1;var isContextConsumer$1=function(a){return z$1(a)===k$1};var isContextProvider$1=function(a){return z$1(a)===h$1};var isElement$1=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};var isForwardRef$1=function(a){return z$1(a)===n$1};var isFragment$1=function(a){return z$1(a)===e$1};var isLazy$1=function(a){return z$1(a)===t$1};
var isMemo$1=function(a){return z$1(a)===r$1};var isPortal$1=function(a){return z$1(a)===d$1};var isProfiler$1=function(a){return z$1(a)===g$1};var isStrictMode$1=function(a){return z$1(a)===f$1};var isSuspense$1=function(a){return z$1(a)===p$1};
var isValidElementType$1=function(a){return "string"===typeof a||"function"===typeof a||a===e$1||a===m$1||a===g$1||a===f$1||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r$1||a.$$typeof===h$1||a.$$typeof===k$1||a.$$typeof===n$1||a.$$typeof===w$1||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v$1)};var typeOf$1=z$1;

var reactIs_production_min$1 = {
	AsyncMode: AsyncMode$1,
	ConcurrentMode: ConcurrentMode$1,
	ContextConsumer: ContextConsumer$1,
	ContextProvider: ContextProvider$1,
	Element: Element$1,
	ForwardRef: ForwardRef$1,
	Fragment: Fragment$1,
	Lazy: Lazy$1,
	Memo: Memo$1,
	Portal: Portal$1,
	Profiler: Profiler$1,
	StrictMode: StrictMode$1,
	Suspense: Suspense$1,
	isAsyncMode: isAsyncMode$1,
	isConcurrentMode: isConcurrentMode$1,
	isContextConsumer: isContextConsumer$1,
	isContextProvider: isContextProvider$1,
	isElement: isElement$1,
	isForwardRef: isForwardRef$1,
	isFragment: isFragment$1,
	isLazy: isLazy$1,
	isMemo: isMemo$1,
	isPortal: isPortal$1,
	isProfiler: isProfiler$1,
	isStrictMode: isStrictMode$1,
	isSuspense: isSuspense$1,
	isValidElementType: isValidElementType$1,
	typeOf: typeOf$1
};

var reactIs_development$1 = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1$1 = reactIs_development$1.AsyncMode;
var reactIs_development_2$1 = reactIs_development$1.ConcurrentMode;
var reactIs_development_3$1 = reactIs_development$1.ContextConsumer;
var reactIs_development_4$1 = reactIs_development$1.ContextProvider;
var reactIs_development_5$1 = reactIs_development$1.Element;
var reactIs_development_6$1 = reactIs_development$1.ForwardRef;
var reactIs_development_7$1 = reactIs_development$1.Fragment;
var reactIs_development_8$1 = reactIs_development$1.Lazy;
var reactIs_development_9$1 = reactIs_development$1.Memo;
var reactIs_development_10$1 = reactIs_development$1.Portal;
var reactIs_development_11$1 = reactIs_development$1.Profiler;
var reactIs_development_12$1 = reactIs_development$1.StrictMode;
var reactIs_development_13$1 = reactIs_development$1.Suspense;
var reactIs_development_14$1 = reactIs_development$1.isAsyncMode;
var reactIs_development_15$1 = reactIs_development$1.isConcurrentMode;
var reactIs_development_16$1 = reactIs_development$1.isContextConsumer;
var reactIs_development_17$1 = reactIs_development$1.isContextProvider;
var reactIs_development_18$1 = reactIs_development$1.isElement;
var reactIs_development_19$1 = reactIs_development$1.isForwardRef;
var reactIs_development_20$1 = reactIs_development$1.isFragment;
var reactIs_development_21$1 = reactIs_development$1.isLazy;
var reactIs_development_22$1 = reactIs_development$1.isMemo;
var reactIs_development_23$1 = reactIs_development$1.isPortal;
var reactIs_development_24$1 = reactIs_development$1.isProfiler;
var reactIs_development_25$1 = reactIs_development$1.isStrictMode;
var reactIs_development_26$1 = reactIs_development$1.isSuspense;
var reactIs_development_27$1 = reactIs_development$1.isValidElementType;
var reactIs_development_28$1 = reactIs_development$1.typeOf;

var reactIs$1 = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min$1;
} else {
  module.exports = reactIs_development$1;
}
});

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs$1.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols$1) {
      keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$2="function"===typeof Symbol&&Symbol.for,c$2=b$2?Symbol.for("react.element"):60103,d$2=b$2?Symbol.for("react.portal"):60106,e$2=b$2?Symbol.for("react.fragment"):60107,f$2=b$2?Symbol.for("react.strict_mode"):60108,g$2=b$2?Symbol.for("react.profiler"):60114,h$2=b$2?Symbol.for("react.provider"):60109,k$2=b$2?Symbol.for("react.context"):60110,l$2=b$2?Symbol.for("react.async_mode"):60111,m$2=b$2?Symbol.for("react.concurrent_mode"):60111,n$2=b$2?Symbol.for("react.forward_ref"):60112,p$2=b$2?Symbol.for("react.suspense"):60113,q$2=b$2?
Symbol.for("react.suspense_list"):60120,r$2=b$2?Symbol.for("react.memo"):60115,t$2=b$2?Symbol.for("react.lazy"):60116,v$2=b$2?Symbol.for("react.block"):60121,w$2=b$2?Symbol.for("react.fundamental"):60117,x$2=b$2?Symbol.for("react.responder"):60118,y$2=b$2?Symbol.for("react.scope"):60119;
function z$2(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$2:switch(a=a.type,a){case l$2:case m$2:case e$2:case g$2:case f$2:case p$2:return a;default:switch(a=a&&a.$$typeof,a){case k$2:case n$2:case t$2:case r$2:case h$2:return a;default:return u}}case d$2:return u}}}function A$2(a){return z$2(a)===m$2}var AsyncMode$2=l$2;var ConcurrentMode$2=m$2;var ContextConsumer$2=k$2;var ContextProvider$2=h$2;var Element$2=c$2;var ForwardRef$2=n$2;var Fragment$2=e$2;var Lazy$2=t$2;var Memo$2=r$2;var Portal$2=d$2;
var Profiler$2=g$2;var StrictMode$2=f$2;var Suspense$2=p$2;var isAsyncMode$2=function(a){return A$2(a)||z$2(a)===l$2};var isConcurrentMode$2=A$2;var isContextConsumer$2=function(a){return z$2(a)===k$2};var isContextProvider$2=function(a){return z$2(a)===h$2};var isElement$2=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$2};var isForwardRef$2=function(a){return z$2(a)===n$2};var isFragment$2=function(a){return z$2(a)===e$2};var isLazy$2=function(a){return z$2(a)===t$2};
var isMemo$2=function(a){return z$2(a)===r$2};var isPortal$2=function(a){return z$2(a)===d$2};var isProfiler$2=function(a){return z$2(a)===g$2};var isStrictMode$2=function(a){return z$2(a)===f$2};var isSuspense$2=function(a){return z$2(a)===p$2};
var isValidElementType$2=function(a){return "string"===typeof a||"function"===typeof a||a===e$2||a===m$2||a===g$2||a===f$2||a===p$2||a===q$2||"object"===typeof a&&null!==a&&(a.$$typeof===t$2||a.$$typeof===r$2||a.$$typeof===h$2||a.$$typeof===k$2||a.$$typeof===n$2||a.$$typeof===w$2||a.$$typeof===x$2||a.$$typeof===y$2||a.$$typeof===v$2)};var typeOf$2=z$2;

var reactIs_production_min$2 = {
	AsyncMode: AsyncMode$2,
	ConcurrentMode: ConcurrentMode$2,
	ContextConsumer: ContextConsumer$2,
	ContextProvider: ContextProvider$2,
	Element: Element$2,
	ForwardRef: ForwardRef$2,
	Fragment: Fragment$2,
	Lazy: Lazy$2,
	Memo: Memo$2,
	Portal: Portal$2,
	Profiler: Profiler$2,
	StrictMode: StrictMode$2,
	Suspense: Suspense$2,
	isAsyncMode: isAsyncMode$2,
	isConcurrentMode: isConcurrentMode$2,
	isContextConsumer: isContextConsumer$2,
	isContextProvider: isContextProvider$2,
	isElement: isElement$2,
	isForwardRef: isForwardRef$2,
	isFragment: isFragment$2,
	isLazy: isLazy$2,
	isMemo: isMemo$2,
	isPortal: isPortal$2,
	isProfiler: isProfiler$2,
	isStrictMode: isStrictMode$2,
	isSuspense: isSuspense$2,
	isValidElementType: isValidElementType$2,
	typeOf: typeOf$2
};

var reactIs_development$2 = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1$2 = reactIs_development$2.AsyncMode;
var reactIs_development_2$2 = reactIs_development$2.ConcurrentMode;
var reactIs_development_3$2 = reactIs_development$2.ContextConsumer;
var reactIs_development_4$2 = reactIs_development$2.ContextProvider;
var reactIs_development_5$2 = reactIs_development$2.Element;
var reactIs_development_6$2 = reactIs_development$2.ForwardRef;
var reactIs_development_7$2 = reactIs_development$2.Fragment;
var reactIs_development_8$2 = reactIs_development$2.Lazy;
var reactIs_development_9$2 = reactIs_development$2.Memo;
var reactIs_development_10$2 = reactIs_development$2.Portal;
var reactIs_development_11$2 = reactIs_development$2.Profiler;
var reactIs_development_12$2 = reactIs_development$2.StrictMode;
var reactIs_development_13$2 = reactIs_development$2.Suspense;
var reactIs_development_14$2 = reactIs_development$2.isAsyncMode;
var reactIs_development_15$2 = reactIs_development$2.isConcurrentMode;
var reactIs_development_16$2 = reactIs_development$2.isContextConsumer;
var reactIs_development_17$2 = reactIs_development$2.isContextProvider;
var reactIs_development_18$2 = reactIs_development$2.isElement;
var reactIs_development_19$2 = reactIs_development$2.isForwardRef;
var reactIs_development_20$2 = reactIs_development$2.isFragment;
var reactIs_development_21$2 = reactIs_development$2.isLazy;
var reactIs_development_22$2 = reactIs_development$2.isMemo;
var reactIs_development_23$2 = reactIs_development$2.isPortal;
var reactIs_development_24$2 = reactIs_development$2.isProfiler;
var reactIs_development_25$2 = reactIs_development$2.isStrictMode;
var reactIs_development_26$2 = reactIs_development$2.isSuspense;
var reactIs_development_27$2 = reactIs_development$2.isValidElementType;
var reactIs_development_28$2 = reactIs_development$2.typeOf;

var reactIs$2 = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min$2;
} else {
  module.exports = reactIs_development$2;
}
});
var reactIs_1 = reactIs$2.isValidElementType;
var reactIs_2 = reactIs$2.isContextConsumer;

// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React.useLayoutEffect : React.useEffect;

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context,
      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (process.env.NODE_ENV !== 'production') {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (process.env.NODE_ENV !== 'production' && !reactIs_1(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? React.useMemo : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = React.useMemo(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var reactReduxForwardedRef = props.reactReduxForwardedRef,
            wrapperProps = _objectWithoutPropertiesLoose(props, ["reactReduxForwardedRef"]);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          reactReduxForwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = React.useMemo(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && reactIs_2( /*#__PURE__*/React__default['default'].createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = React.useContext(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (process.env.NODE_ENV !== 'production' && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = React.useMemo(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = React.useMemo(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = React.useMemo(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return _extends({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = React.useReducer(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = React.useRef();
      var lastWrapperProps = React.useRef(wrapperProps);
      var childPropsFromStoreUpdate = React.useRef();
      var renderIsScheduled = React.useRef(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = React.useMemo(function () {
        return /*#__PURE__*/React__default['default'].createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = React.useMemo(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/React__default['default'].createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? React__default['default'].memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = React__default['default'].forwardRef(function forwardConnectRef(props, ref) {
        return /*#__PURE__*/React__default['default'].createElement(Connect, _extends({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoistNonReactStatics_cjs(forwarded, WrappedComponent);
    }

    return hoistNonReactStatics_cjs(Connect, WrappedComponent);
  };
}

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject$1(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning$1(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject$1(value)) {
    warning$1(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (process.env.NODE_ENV !== 'production') verifyPlainObject(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return bindActionCreators(mapDispatchToProps, dispatch);
  }) : undefined;
}
var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}
var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (process.env.NODE_ENV !== 'production') verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      warning$1("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (process.env.NODE_ENV !== 'production') {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? defaultMergePropsFactories : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
        extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
var connect = /*#__PURE__*/createConnect();

/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = React.useContext(ReactReduxContext);

  if (process.env.NODE_ENV !== 'production' && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function () {
    return React.useContext(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext$1(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore = /*#__PURE__*/createStoreHook();

/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useStore$1 = context === ReactReduxContext ? useStore : createStoreHook(context);
  return function useDispatch() {
    var store = useStore$1();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = /*#__PURE__*/createDispatchHook();

var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = React.useReducer(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = React.useMemo(function () {
    return new Subscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = React.useRef();
  var latestSelector = React.useRef();
  var latestStoreState = React.useRef();
  var latestSelectedState = React.useRef();
  var storeState = store.getState();
  var selectedState;

  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(storeState);
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  useIsomorphicLayoutEffect(function () {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  useIsomorphicLayoutEffect(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender();
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function () {
    return React.useContext(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if (process.env.NODE_ENV !== 'production' && !selector) {
      throw new Error("You must pass a selector to useSelector");
    }

    var _useReduxContext = useReduxContext$1(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    React.useDebugValue(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector = /*#__PURE__*/createSelectorHook();

setBatch(reactDom.unstable_batchedUpdates);

var reduxLogger = createCommonjsModule(function (module, exports) {
!function(e,t){t(exports);}(commonjsGlobal,function(e){function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0});}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0});}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0});}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0});}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0});}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return "object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1]);}}}g.push(d);}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else {if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])));}else {var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p);}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p);});}p.length=p.length-1;}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)));}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e);},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs;}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs;}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs;}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]];}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t);}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]];}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n);};l(e,t,n);}}function y(e){return "color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return [r.join("."),n,"→",o];case"N":return [r.join("."),o];case"D":return [r.join(".")];case"A":return [r.join(".")+"["+i+"]",a];default:return []}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff");}catch(e){r.log("diff");}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)));}):r.log("—— no diff ——");try{r.groupEnd();}catch(e){r.log("—— diff end —— ");}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return "function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O);}catch(e){r.log(O);}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h);}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S);}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y);}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w);}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd();}catch(e){r.log("—— log end ——");}});}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l);}catch(e){c.error=o(e);}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof commonjsGlobal?"undefined":N(commonjsGlobal))&&commonjsGlobal?commonjsGlobal:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0);}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return "undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e();}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return "inherit"},prevState:function(){return "#9E9E9E"},action:function(){return "#03A9F4"},nextState:function(){return "#4CAF50"},error:function(){return "#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return "function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0});});
});

unwrapExports(reduxLogger);
var reduxLogger_1 = reduxLogger.createLogger;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = process.env.NODE_ENV;

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1 = invariant;

var isFunction = (function (value) {
  return typeof value === 'function';
});

var toString = (function (value) {
  return value.toString();
});

var DEFAULT_NAMESPACE = '/';
var ACTION_TYPE_DELIMITER = '||';

var identity = (function (value) {
  return value;
});

var isNull = (function (value) {
  return value === null;
});

function createAction(type, payloadCreator, metaCreator) {
  if (payloadCreator === void 0) {
    payloadCreator = identity;
  }

  invariant_1(isFunction(payloadCreator) || isNull(payloadCreator), 'Expected payloadCreator to be a function, undefined or null');
  var finalPayloadCreator = isNull(payloadCreator) || payloadCreator === identity ? identity : function (head) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return head instanceof Error ? head : payloadCreator.apply(void 0, [head].concat(args));
  };
  var hasMeta = isFunction(metaCreator);
  var typeString = type.toString();

  var actionCreator = function actionCreator() {
    var payload = finalPayloadCreator.apply(void 0, arguments);
    var action = {
      type: type
    };

    if (payload instanceof Error) {
      action.error = true;
    }

    if (payload !== undefined) {
      action.payload = payload;
    }

    if (hasMeta) {
      action.meta = metaCreator.apply(void 0, arguments);
    }

    return action;
  };

  actionCreator.toString = function () {
    return typeString;
  };

  return actionCreator;
}

var isPlainObject$2 = (function (value) {
  if (typeof value !== 'object' || value === null) return false;
  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
});

var isNil = (function (value) {
  return value === null || value === undefined;
});

var isMap = (function (value) {
  return typeof Map !== 'undefined' && value instanceof Map;
});

function ownKeys(object) {
  if (isMap(object)) {
    // We are using loose transforms in babel. Here we are trying to convert an
    // interable to an array. Loose mode expects everything to already be an
    // array. The problem is that our eslint rules encourage us to prefer
    // spread over Array.from.
    //
    // Instead of disabling loose mode we simply disable the warning.
    // eslint-disable-next-line unicorn/prefer-spread
    return Array.from(object.keys());
  }

  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    return Reflect.ownKeys(object);
  }

  var keys = Object.getOwnPropertyNames(object);

  if (typeof Object.getOwnPropertySymbols === 'function') {
    keys = keys.concat(Object.getOwnPropertySymbols(object));
  }

  return keys;
}

function get(key, x) {
  return isMap(x) ? x.get(key) : x[key];
}

var flattenWhenNode = (function (predicate) {
  return function flatten(map, _temp, partialFlatMap, partialFlatActionType) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === void 0 ? DEFAULT_NAMESPACE : _ref$namespace,
        prefix = _ref.prefix;

    if (partialFlatMap === void 0) {
      partialFlatMap = {};
    }

    if (partialFlatActionType === void 0) {
      partialFlatActionType = '';
    }

    function connectNamespace(type) {
      var _ref2;

      if (!partialFlatActionType) return type;
      var types = type.toString().split(ACTION_TYPE_DELIMITER);
      var partials = partialFlatActionType.split(ACTION_TYPE_DELIMITER);
      return (_ref2 = []).concat.apply(_ref2, partials.map(function (p) {
        return types.map(function (t) {
          return "" + p + namespace + t;
        });
      })).join(ACTION_TYPE_DELIMITER);
    }

    function connectPrefix(type) {
      if (partialFlatActionType || !prefix || prefix && new RegExp("^" + prefix + namespace).test(type)) {
        return type;
      }

      return "" + prefix + namespace + type;
    }

    ownKeys(map).forEach(function (type) {
      var nextNamespace = connectPrefix(connectNamespace(type));
      var mapValue = get(type, map);

      if (predicate(mapValue)) {
        flatten(mapValue, {
          namespace: namespace,
          prefix: prefix
        }, partialFlatMap, nextNamespace);
      } else {
        partialFlatMap[nextNamespace] = mapValue;
      }
    });
    return partialFlatMap;
  };
});

var isUndefined = (function (value) {
  return value === undefined;
});

function handleAction(type, reducer, defaultState) {
  if (reducer === void 0) {
    reducer = identity;
  }

  var types = toString(type).split(ACTION_TYPE_DELIMITER);
  invariant_1(!isUndefined(defaultState), "defaultState for reducer handling " + types.join(', ') + " should be defined");
  invariant_1(isFunction(reducer) || isPlainObject$2(reducer), 'Expected reducer to be a function or object with next and throw reducers');

  var _ref = isFunction(reducer) ? [reducer, reducer] : [reducer.next, reducer.throw].map(function (aReducer) {
    return isNil(aReducer) ? identity : aReducer;
  }),
      nextReducer = _ref[0],
      throwReducer = _ref[1];

  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    var actionType = action.type;

    if (!actionType || types.indexOf(toString(actionType)) === -1) {
      return state;
    }

    return (action.error === true ? throwReducer : nextReducer)(state, action);
  };
}

var reduceReducers = (function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var initialState = typeof args[args.length - 1] !== 'function' && args.pop();
  var reducers = args;

  if (typeof initialState === 'undefined') {
    throw new TypeError('The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.');
  }

  return function (prevState, value) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    var prevStateIsUndefined = typeof prevState === 'undefined';
    var valueIsUndefined = typeof value === 'undefined';

    if (prevStateIsUndefined && valueIsUndefined && initialState) {
      return initialState;
    }

    return reducers.reduce(function (newState, reducer) {
      return reducer.apply(undefined, [newState, value].concat(args));
    }, prevStateIsUndefined && !valueIsUndefined && initialState ? initialState : prevState);
  };
});

function hasGeneratorInterface(handler) {
  var keys = ownKeys(handler);
  var hasOnlyInterfaceNames = keys.every(function (ownKey) {
    return ownKey === 'next' || ownKey === 'throw';
  });
  return keys.length && keys.length <= 2 && hasOnlyInterfaceNames;
}

var flattenReducerMap = flattenWhenNode(function (node) {
  return (isPlainObject$2(node) || isMap(node)) && !hasGeneratorInterface(node);
});

function handleActions(handlers, defaultState, options) {
  if (options === void 0) {
    options = {};
  }

  invariant_1(isPlainObject$2(handlers) || isMap(handlers), 'Expected handlers to be a plain object.');
  var flattenedReducerMap = flattenReducerMap(handlers, options);
  var reducers = ownKeys(flattenedReducerMap).map(function (type) {
    return handleAction(type, get(type, flattenedReducerMap), defaultState);
  });
  var reducer = reduceReducers.apply(void 0, reducers.concat([defaultState]));
  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    return reducer(state, action);
  };
}

var FieldItem = /** @class */ (function () {
    function FieldItem(fieldItemData) {
        this.str = fieldItemData.str;
        this.col = fieldItemData.col;
        this.row = fieldItemData.row;
        this.type = fieldItemData.type;
    }
    return FieldItem;
}());

var SheetItem = /** @class */ (function () {
    function SheetItem(fieldItemData) {
        this.str = fieldItemData.str;
        this.col = fieldItemData.col;
        this.row = fieldItemData.row;
    }
    SheetItem.prototype.concat = function () {
        var concatSheetItem = new SheetItem({ str: this.str, col: this.col, row: this.row });
        concatSheetItem.isDrag = this.isDrag;
        concatSheetItem.isSelect = this.isSelect;
        return concatSheetItem;
    };
    return SheetItem;
}());

var MODIFY_TYPE;
(function (MODIFY_TYPE) {
    MODIFY_TYPE["ADD"] = "MODIFY_TYPE_ADD";
    MODIFY_TYPE["REMOVE"] = "MODIFY_TYPE_REMOVE";
    MODIFY_TYPE["MODIFY"] = "MODIFY_TYPE_MODIFY";
    MODIFY_TYPE["COPY"] = "MODIFY_TYPE_COPY";
    MODIFY_TYPE["DELETE"] = "MODIFY_TYPE_DELETE";
    MODIFY_TYPE["CUT"] = "MODIFY_TYPE_CUT";
    MODIFY_TYPE["FIELD_STATE"] = "MODIFY_TYPE_FIELD_STATE";
})(MODIFY_TYPE || (MODIFY_TYPE = {}));
var ModifyData = /** @class */ (function () {
    function ModifyData() {
    }
    return ModifyData;
}());

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".TableSheet-module_wraper__1YJUO{position:absolute;display:flex;flex-direction:column;width:100%;height:100%;min-width:1024px;min-height:590px;background-color:#fff;z-index:1000}.TableSheet-module_header__3wS2E{position:relative;padding-left:68px;height:56px;background-color:#fff;border-bottom:1px solid #e2e2e2}.TableSheet-module_header__3wS2E h1{font-size:20px;font-weight:600;color:#2b2b2b;letter-spacing:-.71px;line-height:56px}.TableSheet-module_header__3wS2E .TableSheet-module_btn_back__2BDNZ,.TableSheet-module_header__3wS2E .TableSheet-module_btn_close__3oZdq{position:absolute;left:16px;top:50%;width:40px;height:40px;transform:translateY(-50%);background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZmlsbD0iIzRGODBGRiIgZD0iTTExLjUgMjEuNUgyOWExLjUgMS41IDAgMDAwLTNIMTEuNWExLjUgMS41IDAgMDAwIDN6Ii8+PHBhdGggZmlsbD0iI0ZGQjUwMCIgZD0iTTEzLjEyMSAyMGw0Ljk0LTQuOTRhMS41IDEuNSAwIDAwLTIuMTIyLTIuMTJsLTYgNmExLjUgMS41IDAgMDAwIDIuMTJsNiA2YTEuNSAxLjUgMCAwMDIuMTIyLTIuMTJMMTMuMTIgMjB6Ii8+PC9nPjwvc3ZnPg==\");background-color:transparent;background-size:40px auto;border:0;vertical-align:top}.TableSheet-module_header__3wS2E .TableSheet-module_btn_close__3oZdq{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMi45MjkgMjcuNTcxKSI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjMiIHk9IjkiIGZpbGw9IiM0RjgwRkYiIHJ4PSIxLjUiLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMyIgeT0iOSIgZmlsbD0iI0ZGQjUwMCIgcng9IjEuNSIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTAgMTAuNSkiLz48L2c+PC9nPjwvc3ZnPg==\")}.TableSheet-module_header__3wS2E .TableSheet-module_btn__2BGYc{position:absolute;right:16px;top:10px;box-sizing:border-box;width:104px;height:36px;background-color:#4f80ff;border:1px solid #4f80ff;border-radius:4px;font-size:14px;color:#fff;text-align:center;line-height:36px}.TableSheet-module_header__3wS2E .TableSheet-module_btn__2BGYc.TableSheet-module_disabled__wlh-v{background-color:#f9f9f9;border-color:#e2e2e2;color:#cbcbcb;pointer-events:none}.TableSheet-module_container__2pHHB{display:flex;flex:1;overflow:hidden;background-color:#fff}.TableSheet-module_aside__D9mrc{position:relative;overflow:auto;flex:none;width:258px;box-sizing:border-box;background-color:#ecf8ff;border:1px solid #d6e9f4;border-top:0;border-radius:0 0 0 6px}.TableSheet-module_aside__D9mrc .TableSheet-module_add_btn_box__1FxZ2{padding:12px 18px;border-bottom:1px solid #d6e9f4}.TableSheet-module_aside__D9mrc .TableSheet-module_add_btn_box__1FxZ2 a{display:block;height:40px;border:1px solid #4f80ff;border-radius:4px;background-color:#fff;font-size:14px;font-weight:600;color:#4f80ff;text-align:center;letter-spacing:-.32px;line-height:40px}.TableSheet-module_aside__D9mrc .TableSheet-module_list__2O440>li{position:relative;box-sizing:content-box;padding:13px 52px;height:22px;background-color:#ecf8ff;border-bottom:1px solid #d6e9f4}.TableSheet-module_aside__D9mrc .TableSheet-module_list__2O440>li:before{position:absolute;left:18px;top:50%;width:22px;height:22px;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNLTE4LTEzM2gxMDI0djc2OEgtMTh6Ii8+PHBhdGggZmlsbD0iI0VDRjhGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiNENkU5RjQiIGQ9Ik0yMzkuNS03Ni41aC0yNTdWNjI5YTUuNDkgNS40OSAwIDAwMS42MSAzLjg5QTUuNDkgNS40OSAwIDAwLTEyIDYzNC41aDI1MS41di03MTF6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjM5LjUtMTIuNWgtMjU3djQ3aDI1N3YtNDd6IiBmaWxsPSIjRUNGOEZGIiBzdHJva2U9IiNENkU5RjQiLz48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSIxMC41IiBmaWxsPSIjRkZGIiBzdHJva2U9IiM0RjgwRkYiLz48cGF0aCBmaWxsPSIjNEY4MEZGIiBkPSJNMTYuMDU3IDExLjQyYTUuMDM5IDUuMDM5IDAgMDEtOC4zMzkgMy4zM2wzLjMzLTMuMzNoNS4wMXptLTUuNDc2LTUuNDc3djQuNjQ4bC0zLjQ5NSAzLjQ5NWE1LjA0IDUuMDQgMCAwMTMuNDk0LTguMTQzek0xMS41ODUgNUE1Ljk4NiA1Ljk4NiAwIDAxMTcgMTAuNDE1aC01LjQxNkwxMS41ODUgNXoiLz48L2c+PC9nPjwvc3ZnPg==\");transform:translateY(-50%);vertical-align:top;content:\"\"}.TableSheet-module_aside__D9mrc .TableSheet-module_list__2O440>li .TableSheet-module_text__17-AU{display:block;overflow:hidden;font-size:12px;font-weight:600;color:#2c313d;text-overflow:ellipsis;white-space:nowrap;word-break:break-all;line-height:22px}.TableSheet-module_aside__D9mrc .TableSheet-module_list__2O440>li.TableSheet-module_active__1MlZx{background-color:#fff;z-index:20}.TableSheet-module_aside__D9mrc .TableSheet-module_list__2O440>li .TableSheet-module_btn_close__3oZdq{position:absolute;right:18px;top:50%;width:24px;height:24px;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGcgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNGRkYiIHN0cm9rZT0iI0UyRTJFMiIgcng9IjQiLz48cGF0aCBmaWxsPSIjOTc5Nzk3IiBkPSJNOC41MyA3LjQ3TDEyIDEwLjkzOWwzLjQ3LTMuNDdhLjc1Ljc1IDAgMDEuOTc2LS4wNzJsLjA4NC4wNzNhLjc0OS43NDkgMCAwMTAgMS4wNkwxMy4wNiAxMmwzLjQ3IDMuNDdhLjc0OS43NDkgMCAxMS0xLjA2IDEuMDZMMTIgMTMuMDYxbC0zLjQ3IDMuNDdhLjc1Ljc1IDAgMDEtMS4wNi0xLjA2MUwxMC45NCAxMiA3LjQ3IDguNTNhLjc0OS43NDkgMCAxMTEuMDYtMS4wNnoiLz48L2c+PC9zdmc+\");transform:translateY(-50%)}.TableSheet-module_aside__D9mrc .TableSheet-module_split_bar__1zyzp{position:absolute;right:0;top:50%;width:16px;height:40px;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSI0MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRDZFOUY0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNiA0MEg2YTYgNiAwIDAxLTYtNlY2YTYgNiAwIDAxNi02aDEwdjQweiIvPjxwYXRoIGZpbGw9IiNBQUM1RDUiIGQ9Ik00LjYzNSAyMC4yNTdsMy45MjgtNy4wN2EuNS41IDAgMDEuOTM3LjI0M3YxNC4xNGEuNS41IDAgMDEtLjkzNy4yNDNsLTMuOTI4LTcuMDdhLjUuNSAwIDAxMC0uNDg2eiIvPjwvZz48L3N2Zz4=\");background-size:16px auto;transform:translateY(-50%);z-index:10;content:\"\"}.TableSheet-module_aside__D9mrc.TableSheet-module_fold__2-kZy{overflow:hidden;width:16px}.TableSheet-module_aside__D9mrc.TableSheet-module_fold__2-kZy .TableSheet-module_split_bar__1zyzp{transform:rotate(180deg)}.TableSheet-module_content__2yUdt{display:flex;flex-direction:column;flex:1;position:relative;overflow:hidden;background-color:#fff;border-radius:0 0 6px 0}.TableSheet-module_content__2yUdt .TableSheet-module_caution_dsc__3b5Tm{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:16px;font-weight:600;color:#4f80ff;text-align:center;line-height:18px}.TableSheet-module_content_navi__2NzTL{position:relative;padding:12px 16px;background-color:#fff}.TableSheet-module_content_navi__2NzTL:after{display:block;clear:both;content:\"\"}.TableSheet-module_content_navi__2NzTL .TableSheet-module_list__2O440{overflow:hidden}.TableSheet-module_content_navi__2NzTL .TableSheet-module_list__2O440 li{float:left;overflow:hidden;width:146px;height:40px;margin-left:6px;border-radius:4px;background-color:#d6e9f4}.TableSheet-module_content_navi__2NzTL .TableSheet-module_list__2O440 li[aria-selected=true]{background-color:#4f80ff}.TableSheet-module_content_navi__2NzTL .TableSheet-module_list__2O440 li[aria-selected=true] a{color:#fff}.TableSheet-module_content_navi__2NzTL .TableSheet-module_list__2O440 li:first-of-type{margin-left:0}.TableSheet-module_content_navi__2NzTL .TableSheet-module_list__2O440 a{display:block;height:40px;color:#728997;text-align:center;letter-spacing:-.3px;line-height:40px;outline:0;cursor:pointer}.TableSheet-module_sheet_form_box__15n2g{padding:18px 27px}.TableSheet-module_sheet_form_box__15n2g .TableSheet-module_btn_box__107Yj{position:relative;overflow:hidden;margin-top:12px}.TableSheet-module_sheet_form_box__15n2g .TableSheet-module_tab__1yA3z{display:inline-block;overflow:hidden;border:1px solid #4f80ff;border-radius:4px;vertical-align:top}.TableSheet-module_sheet_form_box__15n2g .TableSheet-module_tab__1yA3z>a{float:left;overflow:hidden;width:70px;height:30px;border-left:1px solid #4f80ff;font-size:14px;font-weight:600;color:#4f80ff;text-align:center;line-height:32px}.TableSheet-module_sheet_form_box__15n2g .TableSheet-module_tab__1yA3z>a:first-of-type{border-left:0}.TableSheet-module_sheet_form_box__15n2g .TableSheet-module_tab__1yA3z .TableSheet-module_active__1MlZx{color:#fff;background-color:#4f80ff}.TableSheet-module_sheet_form_box__15n2g .TableSheet-module_btn_save__3QvAx{position:absolute;overflow:hidden;top:0;right:0;height:32px;padding:0 18px;border:1px solid #e2e2e2;border-radius:4px;font-size:14px;font-weight:600;color:#555;text-align:center;line-height:30px}.TableSheet-module_dimmed__99l1a{position:fixed;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:1001}.TableSheet-module_cell_layer__cr9KE{position:absolute;box-sizing:border-box;padding:0 8px;border-radius:6px;background-color:#fff;box-shadow:0 1px 6px 0 rgba(0,0,0,.25);z-index:100}.TableSheet-module_cell_layer__cr9KE ul{overflow:hidden}.TableSheet-module_cell_layer__cr9KE ul li{border-top:1px solid #f2f2f2}.TableSheet-module_cell_layer__cr9KE ul li:first-of-type{border-top:0}.TableSheet-module_cell_layer__cr9KE ul .TableSheet-module_link__1io-6{display:block;padding:16px 8px 14px;font-size:14px;font-weight:600;color:#2c313d;line-height:16px}.TableSheet-module_save_layer__BkRAj{position:absolute;right:18px;bottom:45px;width:262px;padding:13px 24px 12px;border-radius:8px;box-shadow:0 2px 6px 2px rgba(0,0,0,.12);border:2px solid #d7eac6;background-color:#e5f3df;z-index:200}.TableSheet-module_save_layer__BkRAj strong{font-size:19px;font-weight:600;color:#468444;line-height:21px}.TableSheet-module_save_layer__BkRAj p{margin-top:8px;font-size:16px;color:#468444;line-height:18px}.TableSheet-module_input__SEDvK{box-sizing:border-box;width:100%;height:40px;padding:0 16px;border:1px solid #e2e2e2;border-radius:4px;outline:0;font-size:14px;font-weight:600;color:#2c313d;letter-spacing:-.33px}.TableSheet-module_sheet_box__eLmce{display:flex;flex-direction:row;flex:1;position:relative;overflow:hidden;padding:0 27px 27px}.TableSheet-module_sheet_box__eLmce *{box-sizing:border-box}.TableSheet-module_empty_cell__2DGKS{position:absolute;left:27px;top:0;width:55px;height:32px;background-color:#f9f9f9;border:1px solid #cbcbcb;z-index:110}.TableSheet-module_left_cell_group__2S9v4{position:relative;width:55px;margin-top:31px;overflow:auto;z-index:100;border-bottom:1px solid #cbcbcb;-ms-overflow-style:none;scrollbar-width:none;margin-bottom:16px}.TableSheet-module_left_cell_group__2S9v4 .TableSheet-module_left_cell__1nBov{border-right:1px solid #cbcbcb}.TableSheet-module_left_cell_group__2S9v4 .TableSheet-module_left_cell__1nBov .TableSheet-module_cell__hphvz{display:block;width:auto;background-color:#f9f9f9;border-right:1px solid #cbcbcb}.TableSheet-module_left_cell_group__2S9v4 .TableSheet-module_left_cell__1nBov .TableSheet-module_cell__hphvz.TableSheet-module_select__uSGPK{background-color:#e3e3e3}.TableSheet-module_left_cell_group__2S9v4 .TableSheet-module_left_cell__1nBov .TableSheet-module_cell__hphvz.TableSheet-module_select_all__2iPfd{background-color:#c2c2c2}.TableSheet-module_left_cell_group__2S9v4 .TableSheet-module_left_cell__1nBov .TableSheet-module_cell_inner__1xJkg{width:53px;min-width:inherit;background-color:inherit;text-align:center}.TableSheet-module_left_cell_group__2S9v4::-webkit-scrollbar{display:none}.TableSheet-module_cont_cell_group__17VXa{display:flex;flex-direction:column;flex:1;position:relative;overflow-y:hidden;margin-left:-1px;padding-bottom:16px}.TableSheet-module_top_cell__2OmNI{position:relative;border:1px solid #cbcbcb;border-width:0 1px 1px 0;margin-bottom:-1px;z-index:100}.TableSheet-module_top_cell__2OmNI .TableSheet-module_tr__1GxL2{background-color:#f9f9f9}.TableSheet-module_top_cell__2OmNI .TableSheet-module_cell__hphvz.TableSheet-module_select__uSGPK{background-color:#e3e3e3}.TableSheet-module_top_cell__2OmNI .TableSheet-module_cell__hphvz.TableSheet-module_select_all__2iPfd{background-color:#c2c2c2}.TableSheet-module_top_cell__2OmNI .TableSheet-module_cell_inner__1xJkg{background-color:inherit;text-align:center}.TableSheet-module_cell_group__t5Jul{position:relative;flex:1 1;overflow-x:hidden;overflow-y:auto;border:1px solid #cbcbcb;border-width:0 1px 1px 0}.TableSheet-module_cell_group__t5Jul::-webkit-scrollbar{display:none}.TableSheet-module_tr__1GxL2{height:31px;border-top:1px solid #cbcbcb;background-color:#fff}.TableSheet-module_tr__1GxL2.TableSheet-module_last_line__2jUVQ{height:32;border-bottom:1px solid #cbcbcb}.TableSheet-module_cell__hphvz{position:relative;display:inline-block;width:90px;height:30px;border-left:1px solid #cbcbcb;white-space:nowrap;vertical-align:top}.TableSheet-module_cell__hphvz,.TableSheet-module_cell_inner__1xJkg{box-sizing:border-box;font-size:12px;font-weight:600;color:#2c313d;line-height:18px}.TableSheet-module_cell_inner__1xJkg{position:absolute;left:0;top:0;min-width:90px;min-height:30px;padding:7px 6px 5px;background-color:#fff}.TableSheet-module_cell_inner__1xJkg::-moz-selection{background-color:hsla(0,0%,100%,0);text-shadow:none}.TableSheet-module_cell_inner__1xJkg::selection{background-color:hsla(0,0%,100%,0);text-shadow:none}.TableSheet-module_cell_dashed_select__3xO6y,.TableSheet-module_cell_edit__Fl_M3,.TableSheet-module_cell_select__3nrtR{position:absolute;box-sizing:border-box;border:2px solid #1592ff;z-index:100}.TableSheet-module_cell_select__3nrtR{pointer-events:none}.TableSheet-module_cell_dashed_select__3xO6y{border:2px dashed #1592ff}.TableSheet-module_cell_drag_select__S3YEq{position:absolute;background-color:rgba(130,209,255,.2);z-index:90}.TableSheet-module_cell_edit_box__NvqNc{position:absolute;z-index:100}.TableSheet-module_cell_edit_box__NvqNc .TableSheet-module_hide__3l1lL{visibility:hidden;position:relative;left:0;top:0;padding:7px;font-size:12px;font-weight:600;color:hsla(0,0%,100%,0);letter-spacing:-.48px;word-break:break-word;word-wrap:break-word;white-space:pre-wrap;line-height:18px}.TableSheet-module_cell_edit__Fl_M3{position:static;padding:5px;background-color:#fff}.TableSheet-module_cell_edit__Fl_M3 textarea{width:100%;height:100%;resize:none;border:0;outline:0;font-size:12px;font-weight:600;color:#2c313d;letter-spacing:-.48px;word-break:break-word;word-wrap:break-word;line-height:18px}.TableSheet-module_col_add__2u0GX{position:absolute;top:0;bottom:27px;width:1px;z-index:100}.TableSheet-module_col_add__2u0GX>a{position:absolute;top:6px;left:50%;width:20px;height:20px;border-radius:50%;transform:translateX(-50%);background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGRlZnM+PGZpbHRlciBpZD0iYSI+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUdyYXBoaWMiIHZhbHVlcz0iMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMS4wMDAwMDAgMCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjkiIGZpbGw9IiMyNUFFRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjMTU5MkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48ZyBmaWx0ZXI9InVybCgjYSkiPjxwYXRoIGZpbGw9IiM1NTUiIGQ9Ik0xMCA1LjVhLjc1Ljc1IDAgMDEuNzUuNzV2M2gzYS43NS43NSAwIDAxMCAxLjVoLTN2M2EuNzUuNzUgMCAwMS0xLjUgMHYtM2gtM2EuNzUuNzUgMCAwMTAtMS41aDN2LTNBLjc1Ljc1IDAgMDExMCA1LjV6Ii8+PC9nPjwvZz48L3N2Zz4=\");z-index:20}.TableSheet-module_col_add__2u0GX .TableSheet-module_line__13R1g{position:absolute;left:0;top:0;bottom:0;width:1px;background-color:#1592ff;font-size:0;z-index:1;pointer-events:none}.TableSheet-module_row_add__2eIfx{position:absolute;left:27px;right:27px;height:1px;z-index:100}.TableSheet-module_row_add__2eIfx>a{position:absolute;left:18px;top:50%;width:20px;height:20px;border-radius:50%;transform:translateY(-50%);background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGRlZnM+PGZpbHRlciBpZD0iYSI+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUdyYXBoaWMiIHZhbHVlcz0iMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMS4wMDAwMDAgMCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjkiIGZpbGw9IiMyNUFFRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjMTU5MkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48ZyBmaWx0ZXI9InVybCgjYSkiPjxwYXRoIGZpbGw9IiM1NTUiIGQ9Ik0xMCA1LjVhLjc1Ljc1IDAgMDEuNzUuNzV2M2gzYS43NS43NSAwIDAxMCAxLjVoLTN2M2EuNzUuNzUgMCAwMS0xLjUgMHYtM2gtM2EuNzUuNzUgMCAwMTAtMS41aDN2LTNBLjc1Ljc1IDAgMDExMCA1LjV6Ii8+PC9nPjwvZz48L3N2Zz4=\");background-size:20px auto;z-index:20}.TableSheet-module_row_add__2eIfx .TableSheet-module_line__13R1g{position:absolute;left:0;right:0;top:0;height:1px;background-color:#1592ff;font-size:0;z-index:1;pointer-events:none}.TableSheet-module_blind__1dMwF{overflow:hidden!important;position:absolute!important;width:1px!important;height:1px!important;border:0!important;padding:0!important;clip:rect(0,0,0,0)!important}.TableSheet-module_error_dimmed__2ayy4{position:absolute;left:0;right:0;top:0;bottom:0;background-image:linear-gradient(180deg,hsla(0,0%,100%,.64),#fff);z-index:200}.TableSheet-module_error_dimmed__2ayy4 .TableSheet-module_inner__1z4WL{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.TableSheet-module_error_dimmed__2ayy4 .TableSheet-module_inner__1z4WL p{font-size:16px;font-weight:600;color:#2c313d;letter-spacing:-.37px;text-align:center;line-height:25px}.TableSheet-module_error_dimmed__2ayy4 .TableSheet-module_inner__1z4WL .TableSheet-module_btn_download__1SRP-{display:block;width:276px;margin:24px auto 0;border-radius:4px;padding:15px 0 12px;background-color:#4f80ff;font-size:14px;font-weight:600;color:#fff;text-align:center;line-height:24px}.TableSheet-module_error_dimmed__2ayy4 .TableSheet-module_inner__1z4WL .TableSheet-module_btn_download__1SRP-:after{display:inline-block;width:24px;height:24px;margin-left:12px;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAuMDQ4KSIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNMTcuNjI2IDE1LjU2M2ExLjUgMS41IDAgMDEtMS41IDEuNWgtOC4yNWExLjUgMS41IDAgMDEtMS41LTEuNXYtLjkzOGEuNzUuNzUgMCAwMTEuNSAwdi45MzhoOC4yNXYtLjkzOGEuNzUuNzUgMCAwMTEuNSAwdi45Mzh6bS0yLjA5NS00LjM0NWwtMyAzYS43NDkuNzQ5IDAgMDEtMS4wNiAwbC0zLTNhLjc0OS43NDkgMCAxMTEuMDYtMS4wNmwxLjcyIDEuNzE4VjYuNzVhLjc1Ljc1IDAgMDExLjUgMHY1LjEyNmwxLjcyLTEuNzE5YS43NDkuNzQ5IDAgMTExLjA2IDEuMDZ6IiBmaWxsPSIjNEY4MEZGIi8+PC9nPjwvc3ZnPg==\");background-size:24px auto;vertical-align:top;content:\"\"}.TableSheet-module_custom_scrollbars__container__1ir2x{overflow:hidden;position:relative}.TableSheet-module_custom_scrollbars__container__1ir2x::-webkit-scrollbar{display:none}.TableSheet-module_custom_scrollbars__content__1dBqe{-ms-overflow-style:none;overflow:auto;scrollbar-width:none}.TableSheet-module_custom_scrollbars__content__1dBqe::-webkit-scrollbar{display:none}.TableSheet-module_custom_scrollbars__track_and_thumb__1vjLV{height:100%;position:absolute;width:7px;top:0;right:0;bottom:0}.TableSheet-module_custom_scrollbars__track__oTt-8{background-color:transparent;border-radius:12px;bottom:0;cursor:pointer;position:absolute;top:0;width:7px}.TableSheet-module_custom_scrollbars__thumb__Dr9TX{border-radius:12px;background-color:#333;position:absolute;width:7px;min-height:10px}";
var Styles = {"wraper":"TableSheet-module_wraper__1YJUO","header":"TableSheet-module_header__3wS2E","btn_back":"TableSheet-module_btn_back__2BDNZ","btn_close":"TableSheet-module_btn_close__3oZdq","btn":"TableSheet-module_btn__2BGYc","disabled":"TableSheet-module_disabled__wlh-v","container":"TableSheet-module_container__2pHHB","aside":"TableSheet-module_aside__D9mrc","add_btn_box":"TableSheet-module_add_btn_box__1FxZ2","list":"TableSheet-module_list__2O440","text":"TableSheet-module_text__17-AU","active":"TableSheet-module_active__1MlZx","split_bar":"TableSheet-module_split_bar__1zyzp","fold":"TableSheet-module_fold__2-kZy","content":"TableSheet-module_content__2yUdt","caution_dsc":"TableSheet-module_caution_dsc__3b5Tm","content_navi":"TableSheet-module_content_navi__2NzTL","sheet_form_box":"TableSheet-module_sheet_form_box__15n2g","btn_box":"TableSheet-module_btn_box__107Yj","tab":"TableSheet-module_tab__1yA3z","btn_save":"TableSheet-module_btn_save__3QvAx","dimmed":"TableSheet-module_dimmed__99l1a","cell_layer":"TableSheet-module_cell_layer__cr9KE","link":"TableSheet-module_link__1io-6","save_layer":"TableSheet-module_save_layer__BkRAj","input":"TableSheet-module_input__SEDvK","sheet_box":"TableSheet-module_sheet_box__eLmce","empty_cell":"TableSheet-module_empty_cell__2DGKS","left_cell_group":"TableSheet-module_left_cell_group__2S9v4","left_cell":"TableSheet-module_left_cell__1nBov","cell":"TableSheet-module_cell__hphvz","select":"TableSheet-module_select__uSGPK","select_all":"TableSheet-module_select_all__2iPfd","cell_inner":"TableSheet-module_cell_inner__1xJkg","cont_cell_group":"TableSheet-module_cont_cell_group__17VXa","top_cell":"TableSheet-module_top_cell__2OmNI","tr":"TableSheet-module_tr__1GxL2","cell_group":"TableSheet-module_cell_group__t5Jul","last_line":"TableSheet-module_last_line__2jUVQ","cell_select":"TableSheet-module_cell_select__3nrtR","cell_dashed_select":"TableSheet-module_cell_dashed_select__3xO6y","cell_edit":"TableSheet-module_cell_edit__Fl_M3","cell_drag_select":"TableSheet-module_cell_drag_select__S3YEq","cell_edit_box":"TableSheet-module_cell_edit_box__NvqNc","hide":"TableSheet-module_hide__3l1lL","col_add":"TableSheet-module_col_add__2u0GX","line":"TableSheet-module_line__13R1g","row_add":"TableSheet-module_row_add__2eIfx","blind":"TableSheet-module_blind__1dMwF","error_dimmed":"TableSheet-module_error_dimmed__2ayy4","inner":"TableSheet-module_inner__1z4WL","btn_download":"TableSheet-module_btn_download__1SRP-","custom_scrollbars__container":"TableSheet-module_custom_scrollbars__container__1ir2x","custom_scrollbars__content":"TableSheet-module_custom_scrollbars__content__1dBqe","custom_scrollbars__track_and_thumb":"TableSheet-module_custom_scrollbars__track_and_thumb__1vjLV","custom_scrollbars__track":"TableSheet-module_custom_scrollbars__track__oTt-8","custom_scrollbars__thumb":"TableSheet-module_custom_scrollbars__thumb__Dr9TX"};
styleInject(css_248z);

var config = {
    SHEET_TABLE: {
        MAX_RENDER: 300,
        CELL_RENDER_COUNT: 3,
        TABLE_SHEET_SIZE: {
            BORDER_SIZE: 1,
            FIRST_CELL_SIZE: 55,
            CELL_WIDTH: 90,
            CELL_HEIGHT: 31,
            TOP_FIELD_HEIGHT: 32,
            FIELD_OVER_MARGIN: 5,
            SPAN_TEXT_PADDING: { TOP: 7, LEFT: 6, RIGHT: 6, BOTTOM: 5 },
        },
        SHEET_BOX_PADDING: { TOP: 0, LEFT: 27, RIGHT: 27, BOTTOM: 27 },
        CELL_OPTION_LAYER_SIZE: {
            WIDTH: 121,
            HEIGHT_DEFAULT: 141,
            HEIGHT_ADD: 47,
        },
        FIELD_OPTION_LAYER_SIZE: {
            WIDTH: 165,
            HEIGHT: 141,
        },
    },
    MAX_CELL: 10000,
    EDITOR: {
        MAX_TEXT: 45,
        HIDE_PADDING: { TOP: 7, LEFT: 7, RIGHT: 7, BOTTOM: 7 },
    },
    LANGUAGE: {
        copy: '복사',
        cut: '잘라내기',
        delete: '셀 내용 삭제',
        paste: '붙여넣기',
        addLeftRow: '왼쪽에 열 추가하기',
        addRightRow: '오른쪽에 열 추가하기',
        deleteRow: '열 삭제',
        addUpCol: '위쪽에 행 추가하기',
        addDownCol: '아래쪽에 행 추가하기',
        deleteCol: '행 삭제',
        saveCompleteTitle: '저장 했습니다.',
        saveCompleteContent: '테이블과 차트의 정보를 저장했습니다.',
        maxCellPopup: '테이블의 셀이 %s개 이상이라서 <br /> 엔트리에서 편집할 수 없어요.',
        maxCellPopupDown: '테이블을 엑셀 파일로 다운로드',
    },
    DEBUG: {
        useLog: false,
    },
};

var cLog = function () {
    var _arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        _arg[_i] = arguments[_i];
    }
};

var TABLE_SHEET_SIZE = config.SHEET_TABLE.TABLE_SHEET_SIZE;
var CELL_WIDTH = TABLE_SHEET_SIZE.CELL_WIDTH, SPAN_TEXT_PADDING = TABLE_SHEET_SIZE.SPAN_TEXT_PADDING;
var OVER_UPDATE_MARGIN = 5;
var CellItem = /** @class */ (function (_super) {
    __extends(CellItem, _super);
    function CellItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            renderFlag: false,
        };
        _this._doubletapTimer = null;
        _this._doubletapDeltaTime = 300;
        _this._onClick = function (e) {
            e.preventDefault();
            var _a = _this.props, data = _a.data, mouseEventMap = _a.mouseEventMap;
            var _b = mouseEventMap || {}, click = _b.click, dobuleClick = _b.dobuleClick;
            if (_this._doubletapTimer == null) {
                // this._textClickPosition(e)
                _this._doubletapTimer = setTimeout(function () {
                    _this._doubletapTimer = null;
                    if (click)
                        click(data, e);
                }, _this._doubletapDeltaTime);
            }
            else {
                clearTimeout(_this._doubletapTimer);
                _this._doubletapTimer = null;
                if (dobuleClick)
                    dobuleClick(data, e);
            }
        };
        _this._textClickPosition = function (e) {
            var _a;
            var data = _this.props.data;
            var textLen = ((_a = data.str) === null || _a === void 0 ? void 0 : _a.toString().length) || 0;
            _this._focusOffset = textLen;
            if (window.getSelection) {
                _this._focusOffset = window.getSelection().focusOffset;
                var _b = e.nativeEvent, offsetX = _b.offsetX, offsetY = _b.offsetY;
                if (_this._focusOffset === null) {
                    _this._focusOffset = textLen;
                }
                else {
                    if (_this.cellRef.current && (_this._focusOffset === 0 || _this._focusOffset === textLen)) {
                        var _c = _this.cellRef.current, offsetHeight = _c.offsetHeight, offsetWidth = _c.offsetWidth;
                        if (offsetY < SPAN_TEXT_PADDING.TOP ||
                            offsetY > offsetHeight - SPAN_TEXT_PADDING.BOTTOM ||
                            offsetX < SPAN_TEXT_PADDING.LEFT ||
                            offsetX > offsetWidth - SPAN_TEXT_PADDING.RIGHT) {
                            _this._focusOffset = textLen;
                        }
                    }
                }
            }
        };
        _this.cellRef = React__default['default'].createRef();
        _this.textRef = React__default['default'].createRef();
        return _this;
    }
    CellItem.prototype.componentWillUnmount = function () { };
    CellItem.prototype.componentWillMount = function () { };
    CellItem.prototype.componentDidMount = function () {
        cLog('[CellItem] componentDidMount');
        this._cellOverUpdate();
    };
    CellItem.prototype.componentDidUpdate = function () {
        cLog('[CellItem] componentDidUpdate');
        this._cellOverUpdate();
    };
    CellItem.prototype.shouldComponentUpdate = function (nextProps) {
        if (this.props && nextProps) {
            var _a = this.props, data = _a.data, addStyle = _a.addStyle, style = _a.style;
            var nextData = nextProps.data, nextAddStyle = nextProps.addStyle, nextStyle = nextProps.style;
            // if (nextStyle && style) {
            //     console.log(difference(nextStyle, style));
            //     console.log(isDifferenceObject(nextStyle, style));
            // }
            // return false;
        }
        return true;
    };
    CellItem.prototype.cellOverReset = function () {
        if (this.cellRef.current) {
            this.cellRef.current.style.zIndex = '';
        }
        if (this.textRef.current) {
            this.textRef.current.style.width = '';
            this.textRef.current.style.overflow = '';
            this.textRef.current.style.pointerEvents = 'none';
        }
    };
    CellItem.prototype._cellOverUpdate = function () {
        this.cellOverReset();
        var _a = this.props, data = _a.data, useCellOver = _a.useCellOver;
        if (!useCellOver)
            return;
        if (this.textRef.current) {
            this.textRef.current.style.width = '';
            var offsetWidth = this.textRef.current.offsetWidth;
            if (offsetWidth > CELL_WIDTH + OVER_UPDATE_MARGIN) {
                var textCellLen = Math.ceil(offsetWidth / CELL_WIDTH);
                var col = data.col, row = data.row, str = data.str;
                var sheetItems = StoreManager$1.state.sheet.sheetItems;
                if (col !== undefined && row !== undefined && sheetItems) {
                    var rows = sheetItems[col];
                    var len = row + textCellLen > rows.length ? rows.length : row + textCellLen;
                    var cnt = 0;
                    for (var i = row + 1; i < len; i++) {
                        if (rows[i].str)
                            break;
                        cnt++;
                    }
                    if (this.cellRef.current && cnt) {
                        // this.cellRef.current.style.width = `${(cnt + 1) * CELL_WIDTH}px`;
                        this.cellRef.current.style.zIndex = '10';
                        var width = (cnt + 1) * (CELL_WIDTH - 1);
                        width = width > offsetWidth ? offsetWidth : width;
                        this.textRef.current.style.width = width + "px";
                        this.textRef.current.style.overflow = 'hidden';
                        this.textRef.current.style.pointerEvents = 'none';
                    }
                }
            }
        }
    };
    CellItem.prototype.reRender = function () {
        this.cellOverReset();
        var renderFlag = !this.state.renderFlag;
        this.setState(__assign(__assign({}, this.state), { renderFlag: renderFlag }));
    };
    CellItem.prototype.render = function () {
        var _a = this.props, data = _a.data, mouseEventMap = _a.mouseEventMap, addStyle = _a.addStyle, style = _a.style;
        var _b = mouseEventMap || {}, down = _b.down, up = _b.up, move = _b.move, over = _b.over, out = _b.out, rightClick = _b.rightClick, click = _b.click, dobuleClick = _b.dobuleClick;
        return (React__default['default'].createElement("div", { style: style, ref: this.cellRef, key: "_" + data.col + "_" + data.row, className: Styles.cell + " " + (data.isSelect ? (data.isSelectAll ? Styles.select_all : Styles.select) : ''), onClick: click || dobuleClick ? this._onClick : undefined, onMouseDown: down ? function (e) { return down(data, e); } : undefined, onMouseMove: move ? function (e) { return move(data, e); } : undefined, onMouseOver: over ? function (e) { return over(data, e); } : undefined, onMouseOut: out ? function (e) { return out(data, e); } : undefined, onMouseUp: up ? function () { return up(data); } : undefined, onContextMenu: rightClick ? function (e) { return rightClick(data, e); } : undefined },
            React__default['default'].createElement("span", { style: addStyle, ref: this.textRef, className: Styles.cell_inner }, data.str)));
    };
    return CellItem;
}(React__default['default'].Component));
// const CellItem = (props: CellItemProps) => {
//     useEffect(() => {
//         cLog('[CellItem] Mount');
//         return () => cLog('[CellItem] Unmount');
//     }, []);
//     useEffect(() => {
//         cLog('[CellItem] Updata');
//     }, [props]);
//     const { data } = props;
//     return (
//         <div key={`_${data.col}_${data.row}`} className={Styles.cell}>
//             <span className={Styles.cell_inner}>{data.str}</span>
//         </div>
//     );
// };
// export default CellItem;

// import { transform, isEqual, isObject, size } from 'lodash';
var setDiffValue = function (obj, v1, v2, k1, k2) {
    if (v1 > v2) {
        obj[k1] = v2;
        obj[k2] = v1;
    }
    else {
        obj[k1] = v1;
        obj[k2] = v2;
    }
};
var getRect = function (item1, item2) {
    if (item1 === undefined || item2 === undefined)
        return null;
    var sCol = item1.col, sRow = item1.row;
    var eCol = item2.col, eRow = item2.row;
    var rect = {};
    setDiffValue(rect, sRow, eRow, 'sr', 'er');
    setDiffValue(rect, sCol, eCol, 'sc', 'ec');
    return rect;
};
var TABLE_SHEET_SIZE$1 = config.SHEET_TABLE.TABLE_SHEET_SIZE;
var CELL_WIDTH$1 = TABLE_SHEET_SIZE$1.CELL_WIDTH, CELL_HEIGHT = TABLE_SHEET_SIZE$1.CELL_HEIGHT;
var getCellPositionCSS = function (cellItem, marginX, marginY) {
    if (marginX === void 0) { marginX = 0; }
    if (marginY === void 0) { marginY = 0; }
    if (!cellItem)
        return {};
    var col = cellItem.col, row = cellItem.row;
    var left = CELL_WIDTH$1 * (row || 0) + marginX + "px";
    var top = CELL_HEIGHT * (col || 0) + marginY + "px";
    return { left: left, top: top };
};
var setSelectionRange = function (input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }
    else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    }
};
var setCaretToPos = function (input, pos) {
    setSelectionRange(input, pos, pos);
};
var getRowLength = function () {
    var rows = StoreManager$1.state.sheet.fields.rows;
    return rows ? rows.length || 0 : 0;
};
var getColLength = function () {
    var cols = StoreManager$1.state.sheet.fields.cols;
    return cols ? cols.length || 0 : 0;
};
var getSaveData = function () {
    var data = [];
    var _a = StoreManager$1.state.sheet, sheetItems = _a.sheetItems, originData = _a.originData;
    var length = 0;
    if (sheetItems) {
        var colLen = sheetItems.length;
        var rowLen = sheetItems[0].length;
        for (var col = 0; col < colLen; col++) {
            data[col] = [];
            var rows = sheetItems[col];
            for (var row = 0; row < rowLen; row++) {
                data[col][row] = rows[row].str || '';
            }
        }
        length = colLen * rowLen;
    }
    var fields = (originData === null || originData === void 0 ? void 0 : originData.fields) || { cols: undefined, rows: undefined };
    return { data: data, length: length, fields: fields };
};
var numberWithCommas = function (n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
// /**
//  * Deep diff between two object, using lodash
//  * @param  {Object} object Object compared
//  * @param  {Object} base   Object to compare with
//  * @return {Object}        Return a new object who represent the diff
//  */
// export const difference = (object, base) => {
//     function changes(object, base) {
//         return transform(object, function (result: any, value, key) {
//             if (!isEqual(value, base[key])) {
//                 result[key] = isObject(value) && isObject(base[key]) ? changes(value, base[key]) : value;
//             }
//         });
//     }
//     return changes(object, base);
// };
// export const isDifferenceObject = (object, base) => {
//     const differenceObject = difference(object, base);
//     return size(differenceObject) > 0;
// };
var getDevicePixelRatio = function () {
    var devicePixelRatioMargin = 0;
    if (window.devicePixelRatio <= 0.25) {
        devicePixelRatioMargin = 3;
    }
    else if (window.devicePixelRatio <= 0.34) {
        devicePixelRatioMargin = 2;
    }
    else if (window.devicePixelRatio < 1) {
        devicePixelRatioMargin = 1;
    }
    return devicePixelRatioMargin;
};

var _a = config.SHEET_TABLE, CELL_RENDER_COUNT = _a.CELL_RENDER_COUNT, TABLE_SHEET_SIZE$2 = _a.TABLE_SHEET_SIZE;
var CELL_HEIGHT$1 = TABLE_SHEET_SIZE$2.CELL_HEIGHT, CELL_WIDTH$2 = TABLE_SHEET_SIZE$2.CELL_WIDTH, BORDER_SIZE = TABLE_SHEET_SIZE$2.BORDER_SIZE;
var selectFieldModifyData = function (state) { return state.sheet.fieldModifyData; };
var FIELD_TYPE;
(function (FIELD_TYPE) {
    FIELD_TYPE["TOP"] = "fieldTop";
    FIELD_TYPE["LEFT"] = "fieldLeft";
})(FIELD_TYPE || (FIELD_TYPE = {}));
var TopItems = function (props) {
    var fieldModifyData = useSelector(selectFieldModifyData);
    var addNewField = function () {
        var viewPort = props.viewPort, mouseEventMap = props.mouseEventMap, fieldDatas = props.fieldDatas;
        var newItems = [];
        var colViewStyle;
        if (viewPort && fieldDatas) {
            var _a = (viewPort === null || viewPort === void 0 ? void 0 : viewPort.rect) || {}, sr = _a.sr, er = _a.er;
            if (sr !== undefined && er !== undefined) {
                var maxRowIndex = fieldDatas.length - 1;
                var startIndex = sr - CELL_RENDER_COUNT;
                var endIndex = er + CELL_RENDER_COUNT;
                startIndex = startIndex < 0 ? 0 : startIndex;
                endIndex = endIndex > maxRowIndex ? maxRowIndex : endIndex;
                colViewStyle = { transform: "translate(" + CELL_WIDTH$2 * startIndex + "px, 0px)" };
                for (var i = startIndex; i <= endIndex; i++) {
                    var fieldData = fieldDatas[i];
                    newItems.push(React__default['default'].createElement(CellItem, { ref: setCellItemRef(i), style: colViewStyle, key: FIELD_TYPE.TOP + "_" + fieldData.col + "_" + fieldData.row + "_" + new Date().getTime(), data: fieldData, mouseEventMap: mouseEventMap }));
                }
            }
        }
        addItems(newItems);
    };
    var setCellItemRef = function (index) { return function (element) {
        if (element) {
            if (index < 0) {
                refs.push(element);
            }
            else {
                refs.splice(index, 0, element);
            }
        }
        addRef(refs);
    }; };
    React.useEffect(function () {
        return function () {
            cLog('TopItems DidMount');
        };
    }, []);
    React.useEffect(function () {
        addNewField();
    }, [props.viewPort]);
    var _a = React.useState([]), items = _a[0], addItems = _a[1];
    // useEffect(() => {
    //     const fieldItems = nextFieldItems(props, items);
    //     if (!fieldItems || !fieldItems.length) return;
    //     const { mouseEventMap } = props;
    //     const addItemRef = setCellItemRef(-1);
    //     const nextCellItems = fieldItems.map((fieldData: FieldItem) => {
    //         // const addItemRef = setCellItemRef(fieldData.row);
    //         return (
    //             <CellItem
    //                 ref={addItemRef}
    //                 key={`${FIELD_TYPE.TOP}_${fieldData.col}_${fieldData.row}_${new Date().getTime()}`}
    //                 data={fieldData}
    //                 mouseEventMap={mouseEventMap}
    //             />
    //         );
    //     });
    //     addItems(items.concat(nextCellItems));
    // }, [items]);
    var _b = React.useState([]), refs = _b[0], addRef = _b[1];
    React.useEffect(function () {
        cLog('refs update');
    }, [refs]);
    React.useEffect(function () {
        cLog('======= TopItems props update ========== >>>> ');
        var modifyData = props.modifyData, fieldDatas = props.fieldDatas, mouseEventMap = props.mouseEventMap;
        if (modifyData) {
            var type = modifyData.type, start = modifyData.start, end = modifyData.end, index = modifyData.index, fieldType = modifyData.fieldType;
            if (type === MODIFY_TYPE.FIELD_STATE) ;
            else if (type === MODIFY_TYPE.COPY || type === MODIFY_TYPE.CUT) {
                var addRowCnt = modifyData.addRowCnt;
                if (addRowCnt) {
                    // const addFieldDatas = fieldDatas || [];
                    // const lastIndex = items.length;
                    // const addItemRef = setCellItemRef(-1);
                    // for (let i = 0; i < addRowCnt; i++) {
                    //     const fieldData = addFieldDatas[lastIndex + i];
                    //     items.push(
                    //         <CellItem
                    //             ref={addItemRef}
                    //             key={`${FIELD_TYPE.TOP}_${fieldData.col}_${fieldData.row}_${new Date().getTime()}`}
                    //             data={fieldData}
                    //             mouseEventMap={mouseEventMap}
                    //         />,
                    //     );
                    // }
                    // addItems([...items]);
                    addNewField();
                }
            }
            else if (fieldType === FIELD_TYPE.TOP) {
                switch (type) {
                    case MODIFY_TYPE.ADD:
                        if (index !== undefined) {
                            // const addFieldDatas = fieldDatas || [];
                            // const fieldData = addFieldDatas[index];
                            // const addItemRef = setCellItemRef(index);
                            // const len = addFieldDatas.length;
                            // for (let i = index; i <= len; i++) {
                            //     if (refs[i]) refs[i].reRender();
                            // }
                            // items.splice(
                            //     index,
                            //     0,
                            //     <CellItem
                            //         ref={addItemRef}
                            //         key={`${FIELD_TYPE.TOP}_${fieldData.col}_${fieldData.row}_${new Date().getTime()}`}
                            //         data={fieldData}
                            //         mouseEventMap={mouseEventMap}
                            //     />,
                            // );
                            // addItems([...items]);
                            addNewField();
                        }
                        break;
                    case MODIFY_TYPE.REMOVE:
                        if (index !== undefined) {
                            // items.splice(index, 1);
                            // refs.splice(index, 1);
                            // const addFieldDatas = fieldDatas || [];
                            // const len = addFieldDatas.length;
                            // for (let i = index; i <= len; i++) {
                            //     if (refs[i]) refs[i].reRender();
                            // }
                            // addRef([]);
                            // addItems([...items]);
                            addNewField();
                        }
                        break;
                }
            }
        }
    }, [props.modifyData]);
    React.useEffect(function () {
        refs.forEach(function (ref) { return ref.reRender(); });
    }, [fieldModifyData]);
    return React__default['default'].createElement("div", { className: Styles.tr }, items);
};
var LeftItems = function (props) {
    var fieldModifyData = useSelector(selectFieldModifyData);
    var addNewField = function () {
        var viewPort = props.viewPort, mouseEventMap = props.mouseEventMap, fieldDatas = props.fieldDatas;
        var newItems = [];
        var colViewStyle;
        if (viewPort && fieldDatas) {
            var _a = (viewPort === null || viewPort === void 0 ? void 0 : viewPort.rect) || {}, sc = _a.sc, ec = _a.ec;
            if (sc !== undefined && ec !== undefined) {
                var maxColIndex = fieldDatas.length - 1;
                var startIndex = sc - CELL_RENDER_COUNT;
                var endIndex = ec + CELL_RENDER_COUNT;
                startIndex = startIndex < 0 ? 0 : startIndex;
                endIndex = endIndex > maxColIndex ? maxColIndex : endIndex;
                colViewStyle = { transform: "translate(0px, " + CELL_HEIGHT$1 * startIndex + "px)" };
                for (var i = startIndex; i <= endIndex; i++) {
                    var fieldData = fieldDatas[i];
                    newItems.push(React__default['default'].createElement("div", { style: colViewStyle, className: Styles.tr, key: FIELD_TYPE.LEFT + "_" + fieldData.col + "_" + fieldData.row + "}" },
                        React__default['default'].createElement(CellItem, { ref: setCellItemRef(i), addStyle: _cellStyle, data: fieldData, mouseEventMap: mouseEventMap })));
                }
            }
        }
        addItems(newItems);
    };
    var _cellStyle = { minWidth: '53px' };
    var setCellItemRef = function (index) { return function (element) {
        if (element) {
            if (index < 0) {
                refs.push(element);
            }
            else {
                refs.splice(index, 0, element);
            }
        }
        addRef(refs);
    }; };
    React.useEffect(function () {
        return function () { };
    }, []);
    React.useEffect(function () {
        addNewField();
    }, [props.viewPort]);
    var _a = React.useState([]), items = _a[0], addItems = _a[1];
    // useEffect(() => {
    //     const fieldItems = nextFieldItems(props, items);
    //     if (!fieldItems) return;
    //     const { mouseEventMap } = props;
    //     const addItemRef = setCellItemRef(-1);
    //     const nextCellItems = fieldItems.map((fieldData: FieldItem) => {
    //         return (
    //             <div
    //                 className={Styles.tr}
    //                 key={`${FIELD_TYPE.LEFT}_${fieldData.col}_${fieldData.row}_${new Date().getTime()}`}>
    //                 <CellItem ref={addItemRef} addStyle={_cellStyle} data={fieldData} mouseEventMap={mouseEventMap} />
    //             </div>
    //         );
    //     });
    //     addItems(items.concat(nextCellItems));
    // }, [items]);
    var _b = React.useState([]), refs = _b[0], addRef = _b[1];
    React.useEffect(function () {
        cLog('LeftItems refs update');
        cLog(refs);
    }, [refs]);
    React.useEffect(function () {
        cLog('======= LeftItems props update ========== >>>> ');
        var modifyData = props.modifyData, fieldDatas = props.fieldDatas, mouseEventMap = props.mouseEventMap;
        if (modifyData) {
            var type = modifyData.type, start = modifyData.start, end = modifyData.end, index = modifyData.index, fieldType = modifyData.fieldType;
            if (type === MODIFY_TYPE.FIELD_STATE) ;
            else if (type === MODIFY_TYPE.COPY || type === MODIFY_TYPE.CUT) {
                var addColCnt = modifyData.addColCnt;
                if (addColCnt) {
                    // const addFieldDatas = fieldDatas || [];
                    // const lastIndex = items.length;
                    // const addItemRef = setCellItemRef(-1);
                    // for (let i = 0; i < addColCnt; i++) {
                    //     const fieldData = addFieldDatas[lastIndex + i];
                    //     cLog(addFieldDatas, fieldData);
                    //     items.push(
                    //         <div className={Styles.tr} key={`${FIELD_TYPE.LEFT}_${fieldData.col}_${fieldData.row}}`}>
                    //             <CellItem
                    //                 ref={addItemRef}
                    //                 addStyle={_cellStyle}
                    //                 data={fieldData}
                    //                 mouseEventMap={mouseEventMap}
                    //             />
                    //         </div>,
                    //     );
                    // }
                    // addItems([...items]);
                    addNewField();
                }
            }
            else if (fieldType === FIELD_TYPE.LEFT) {
                switch (type) {
                    case MODIFY_TYPE.ADD:
                        if (index !== undefined) {
                            // const addFieldDatas = fieldDatas || [];
                            // const fieldData = addFieldDatas[index];
                            // const addItemRef = setCellItemRef(index);
                            // const len = addFieldDatas.length;
                            // for (let i = index; i <= len; i++) {
                            //     if (refs[i]) refs[i].reRender();
                            // }
                            // items.splice(
                            //     index,
                            //     0,
                            //     <div className={Styles.tr} key={`${FIELD_TYPE.LEFT}_${fieldData.col}_${fieldData.row}`}>
                            //         <CellItem
                            //             ref={addItemRef}
                            //             addStyle={_cellStyle}
                            //             data={fieldData}
                            //             mouseEventMap={mouseEventMap}
                            //         />
                            //     </div>,
                            // );
                            // addItems([...items]);
                            addNewField();
                        }
                        break;
                    case MODIFY_TYPE.REMOVE:
                        if (index !== undefined) {
                            // items.splice(index, 1);
                            // refs.splice(index, 1);
                            // const addFieldDatas = fieldDatas || [];
                            // const len = addFieldDatas.length;
                            // for (let i = index; i <= len; i++) {
                            //     if (refs[i]) refs[i].reRender();
                            // }
                            // addRef([]);
                            // addItems([...items]);
                            addNewField();
                        }
                        break;
                }
            }
        }
    }, [props.modifyData]);
    React.useEffect(function () {
        refs.forEach(function (ref) { return ref.reRender(); });
    }, [fieldModifyData]);
    return React__default['default'].createElement(React__default['default'].Fragment, null, items);
};
var FieldView = /** @class */ (function (_super) {
    __extends(FieldView, _super);
    function FieldView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.updateDevicePixelRatio = function () {
            var _a;
            var fieldDatas = _this.props.fieldDatas;
            var width = BORDER_SIZE + CELL_WIDTH$2 * ((fieldDatas === null || fieldDatas === void 0 ? void 0 : fieldDatas.length) || 1) + getDevicePixelRatio();
            if ((_a = _this.fieldContainerRef.current) === null || _a === void 0 ? void 0 : _a.style)
                _this.fieldContainerRef.current.style.width = width + "px";
        };
        _this.fieldContainerRef = React__default['default'].createRef();
        return _this;
    }
    FieldView.prototype.componentWillUnmount = function () {
        cLog('[FieldView] componentWillUnmount');
    };
    FieldView.prototype.componentDidMount = function () {
        cLog('[FieldView] componentDidMount');
    };
    FieldView.prototype.componentDidUpdate = function () {
        cLog('[FieldView] componentDidUpdate');
    };
    FieldView.prototype.render = function () {
        var _a = this.props, fieldDatas = _a.fieldDatas, modifyData = _a.modifyData, mouseEventMap = _a.mouseEventMap, viewPort = _a.viewPort, addStyle = _a.addStyle;
        return (React__default['default'].createElement("div", { className: this.props.className, ref: this.fieldContainerRef, style: addStyle }, this.props.type === FIELD_TYPE.TOP ? (React__default['default'].createElement(TopItems, { fieldDatas: fieldDatas, viewPort: viewPort, modifyData: modifyData, mouseEventMap: mouseEventMap })) : (React__default['default'].createElement(LeftItems, { fieldDatas: fieldDatas, viewPort: viewPort, modifyData: modifyData, mouseEventMap: mouseEventMap }))));
    };
    return FieldView;
}(React__default['default'].Component));
var mapStateToProps = function (_state) { return ({
// modifyData: state.editor.modifyData,
}); };
var mapDispatchToProps = function (_dispatch) { return ({
// addEditorModifyData: (eModifyData) => dispatch(editorModifyData(eModifyData)),
}); };
var FieldView$1 = connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(FieldView);

/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
var FIELD_MODIFY_TYPE;
(function (FIELD_MODIFY_TYPE) {
    FIELD_MODIFY_TYPE["FIELD_STATE"] = "MODIFY_TYPE_FIELD_STATE";
})(FIELD_MODIFY_TYPE || (FIELD_MODIFY_TYPE = {}));
var FieldModifyData = /** @class */ (function () {
    function FieldModifyData() {
    }
    return FieldModifyData;
}());

var _a$1;
var ADD_SHEET_DATAS = 'ADD_SHEET_DATAS';
var MODIFY_SHEET_DATA = 'MODIFY_SHEET_DATA';
var MODIFY_ROW_CELL = 'MODIFY_ROW_CELL';
var MODIFY_COL_CELL = 'MODIFY_COL_CELL';
var REMOVE_MODIFY = 'REMOVE_MODIFY';
var COPY_CELL = 'COPY_CELL';
var DELETE_CELL = 'DELETE_CELL';
var CUT_CELL = 'CUT_CELL';
var FIELD_STATE_CHANGE = 'FIELD_STATE_CHANGE';
var RESET_SHEET_STATE = 'RESET_SHEET_STATE';
var fields = {
    cols: undefined,
    rows: undefined,
};
var initState = {
    fields: fields,
    sheetItems: [],
    dragStartItem: undefined,
    dragEndItem: undefined,
    modifyData: undefined,
    fieldRect: undefined,
    fieldModifyData: undefined,
    originData: undefined,
};
var ALPHABET_LEN = 26;
var createFieldNumberStr = function (index) { return (index + 1).toString(); };
var createFieldAlphabetStr = function (index) {
    var val = Number(index + 1);
    var str = '';
    while (val > 0) {
        var a = ((val - 1) / ALPHABET_LEN) | 0;
        var b = (val - 1) % ALPHABET_LEN;
        str = String.fromCharCode(b + 65) + str;
        val = a;
    }
    return str;
};
var createFieldDataStr = function (fields) { return function (index) { return fields ? fields[index] : '-'; }; };
var colFieldDataStr;
var rowFieldDataStr;
var setSheetData = function (state, sheetData) {
    var data = sheetData.data, fields = sheetData.fields;
    var _a = fields, cols = _a.cols, rows = _a.rows;
    var colLen = data.length;
    var colFieldItems = [];
    var rowFieldItems = [];
    var selectItems = [];
    colFieldDataStr = !!(!cols || (cols === null || cols === void 0 ? void 0 : cols.length));
    rowFieldDataStr = !!(!rows || (rows === null || rows === void 0 ? void 0 : rows.length));
    var createLowFieldStr = colFieldDataStr ? createFieldDataStr(cols) : createFieldNumberStr;
    var createRowFieldStr = rowFieldDataStr ? createFieldDataStr(rows) : createFieldAlphabetStr;
    var addRowField = function (rowIndex) {
        var str = createRowFieldStr(rowIndex);
        rowFieldItems.push(new FieldItem({ str: str, col: 0, row: rowIndex, type: FIELD_TYPE.TOP }));
    };
    for (var colIndex = 0; colIndex < colLen; colIndex++) {
        var str = createLowFieldStr(colIndex);
        colFieldItems.push(new FieldItem({ str: str, col: colIndex, row: 0, type: FIELD_TYPE.LEFT }));
        selectItems[colIndex] = [];
        var rowItems = data[colIndex];
        var rowLen = rowItems.length;
        for (var rowIndex = 0; rowIndex < rowLen; rowIndex++) {
            addRowField(rowIndex);
            var sheetItemData = rowItems[rowIndex];
            if (!(sheetItemData === undefined || sheetItemData === null)) {
                sheetItemData = sheetItemData.toString();
            }
            selectItems[colIndex][rowIndex] = new SheetItem({ str: sheetItemData, col: colIndex, row: rowIndex });
        }
        addRowField = function (rowIndex) { return rowIndex; };
    }
    state.sheetItems = selectItems;
    state.fields.cols = colFieldItems;
    state.fields.rows = rowFieldItems;
    cLog(colFieldItems);
    return state;
};
var reducer = handleActions((_a$1 = {},
    _a$1[ADD_SHEET_DATAS] = function (state, action) {
        var sheetData = action.payload.sheetData;
        var originData = sheetData;
        setSheetData(state, sheetData);
        return __assign(__assign({}, state), { originData: originData });
    },
    _a$1[MODIFY_SHEET_DATA] = function (state, action) {
        var _a = action.payload, str = _a.str, col = _a.col, row = _a.row;
        var modifyData = state.modifyData;
        if (state.sheetItems) {
            state.sheetItems[col][row].str = str;
            // state.sheetItems[col][row] = new SheetItem({ str, col, row });
            var modifyItem = state.sheetItems[col][row];
            modifyData = new ModifyData();
            modifyData.type = MODIFY_TYPE.MODIFY;
            modifyData.modifyItem = modifyItem;
        }
        return __assign(__assign({}, state), { modifyData: modifyData });
    },
    _a$1[MODIFY_ROW_CELL] = function (state, action) {
        var _a = action.payload, index = _a.index, type = _a.type, fieldType = _a.fieldType;
        var sheetItems = state.sheetItems || [];
        var colLen = sheetItems.length;
        var modifyData = state.modifyData;
        var modifyRowField;
        var fieldRows = state.fields.rows;
        var _b = state.fieldRect || {}, sc = _b.sc, ec = _b.ec, sr = _b.sr, er = _b.er;
        switch (type) {
            case MODIFY_TYPE.ADD:
                if (fieldRows) {
                    var str = createFieldAlphabetStr(index);
                    fieldRows.splice(index, 0, new FieldItem({ str: str, col: 0, row: index, type: FIELD_TYPE.TOP }));
                }
                modifyRowField = function (rowIndex) {
                    if (fieldRows) {
                        var fieldRow = fieldRows[rowIndex];
                        if (!rowFieldDataStr) {
                            var str = createFieldAlphabetStr(rowIndex);
                            fieldRow.str = str;
                        }
                        fieldRow.row = rowIndex;
                        if (sr !== undefined && er !== undefined)
                            fieldRow.isSelect = rowIndex >= sr && rowIndex <= er;
                    }
                };
                for (var i = 0; i < colLen; i++) {
                    var sheetItem = new SheetItem({ str: '', col: i, row: index });
                    sheetItems[i].splice(index, 0, sheetItem);
                    var rows = sheetItems[i];
                    for (var ui = index; ui < rows.length; ui++) {
                        rows[ui].row = ui;
                        modifyRowField(ui);
                    }
                    modifyRowField = function (rowIndex) { return rowIndex; };
                }
                modifyData = new ModifyData();
                modifyData.index = index;
                modifyData.type = type;
                modifyData.fieldType = fieldType;
                break;
            case MODIFY_TYPE.REMOVE:
                if (fieldRows)
                    fieldRows.splice(index, 1);
                modifyRowField = function (rowIndex) {
                    if (fieldRows) {
                        var fieldRow = fieldRows[rowIndex];
                        if (!rowFieldDataStr) {
                            var str = createFieldAlphabetStr(rowIndex);
                            fieldRow.str = str;
                        }
                        fieldRow.row = rowIndex;
                        if (sr !== undefined && er !== undefined)
                            fieldRow.isSelect = rowIndex >= sr && rowIndex <= er;
                    }
                };
                for (var i = 0; i < colLen; i++) {
                    sheetItems[i].splice(index, 1);
                    var rows = sheetItems[i];
                    for (var ui = index; ui < rows.length; ui++) {
                        rows[ui].row = ui;
                        modifyRowField(ui);
                    }
                    modifyRowField = function (rowIndex) { return rowIndex; };
                }
                modifyData = new ModifyData();
                modifyData.index = index;
                modifyData.type = type;
                modifyData.fieldType = fieldType;
                break;
        }
        return __assign(__assign({}, state), { sheetItems: sheetItems,
            modifyData: modifyData });
    },
    _a$1[MODIFY_COL_CELL] = function (state, action) {
        var _a = action.payload, index = _a.index, type = _a.type, fieldType = _a.fieldType;
        var sheetItems = state.sheetItems || [];
        var sheetRowItems = (sheetItems[0] || []);
        var colLen;
        var modifyData = state.modifyData;
        var modifyColField;
        var fieldCols = state.fields.cols;
        var _b = state.fieldRect || {}, sc = _b.sc, ec = _b.ec, sr = _b.sr, er = _b.er;
        switch (type) {
            case MODIFY_TYPE.ADD:
                if (fieldCols) {
                    var str = createFieldNumberStr(index);
                    fieldCols.splice(index, 0, new FieldItem({ str: str, col: index, row: 0, type: FIELD_TYPE.LEFT }));
                }
                modifyColField = function (colIndex) {
                    if (fieldCols) {
                        var fieldCol = fieldCols[colIndex];
                        if (!colFieldDataStr) {
                            var str = createFieldNumberStr(colIndex);
                            fieldCol.str = str;
                        }
                        fieldCol.col = colIndex;
                        if (sc !== undefined && ec !== undefined)
                            fieldCol.isSelect = colIndex >= sc && colIndex <= ec;
                    }
                };
                var addRows = sheetRowItems.map(function (_item, i) {
                    return new SheetItem({ str: '', col: index, row: i });
                });
                sheetItems.splice(index, 0, addRows);
                colLen = sheetItems.length;
                for (var i = index; i < colLen; i++) {
                    modifyColField(i);
                    var rows = sheetItems[i];
                    for (var ui = 0; ui < rows.length; ui++)
                        rows[ui].col = i;
                }
                modifyData = new ModifyData();
                modifyData.index = index;
                modifyData.type = type;
                modifyData.fieldType = fieldType;
                break;
            case MODIFY_TYPE.REMOVE:
                if (fieldCols)
                    fieldCols.splice(index, 1);
                modifyColField = function (colIndex) {
                    if (fieldCols) {
                        var fieldCol = fieldCols[colIndex];
                        if (!colFieldDataStr) {
                            var str = createFieldNumberStr(colIndex);
                            fieldCol.str = str;
                        }
                        fieldCol.col = colIndex;
                        if (sc !== undefined && ec !== undefined)
                            fieldCol.isSelect = colIndex >= sc && colIndex <= ec;
                    }
                };
                sheetItems.splice(index, 1);
                colLen = sheetItems.length;
                for (var i = index; i < colLen; i++) {
                    modifyColField(i);
                    var rows = sheetItems[i];
                    for (var ui = 0; ui < rows.length; ui++)
                        rows[ui].col = i;
                }
                modifyData = new ModifyData();
                modifyData.index = index;
                modifyData.type = type;
                modifyData.fieldType = fieldType;
                break;
        }
        return __assign(__assign({}, state), { sheetItems: sheetItems,
            modifyData: modifyData });
    },
    _a$1[COPY_CELL] = function (state, action) {
        var _a = action.payload, start = _a.start, end = _a.end, modifyItem = _a.modifyItem, type = _a.type;
        var mCol = modifyItem.col, mRow = modifyItem.row;
        var rect = getRect(start, end);
        var modifyData;
        if (rect) {
            var copyRowLen = rect.er - rect.sr;
            var copyColLen = rect.ec - rect.sc;
            var sheetItems = state.sheetItems || [];
            var sheetRowItems = (sheetItems[0] || []);
            var colLastIndex = sheetItems.length - 1;
            var rowLastIndex = sheetRowItems.length - 1;
            var copyColLastIndex = mCol + copyColLen;
            var copyRowLastIndex = mRow + copyRowLen;
            var _b = state.fields, fieldCols = _b.cols, fieldRows = _b.rows;
            var addColCnt = 0;
            var addRowCnt = 0;
            // col 추가
            if (copyColLastIndex > colLastIndex) {
                addColCnt = copyColLastIndex - colLastIndex;
                var _loop_1 = function (ci) {
                    if (fieldCols) {
                        var str = createFieldNumberStr(ci);
                        fieldCols.push(new FieldItem({ str: str, col: ci, row: 0, type: FIELD_TYPE.LEFT }));
                    }
                    var addRows = sheetRowItems.map(function (_item, i) {
                        return new SheetItem({ str: '', col: ci, row: i });
                    });
                    sheetItems.push(addRows);
                };
                for (var ci = colLastIndex + 1; ci <= copyColLastIndex; ci++) {
                    _loop_1(ci);
                }
            }
            // row 추가
            if (copyRowLastIndex > rowLastIndex) {
                if (fieldRows) {
                    for (var fi = rowLastIndex + 1; fi <= copyRowLastIndex; fi++) {
                        var str = createFieldAlphabetStr(fi);
                        fieldRows.push(new FieldItem({ str: str, col: 0, row: fi, type: FIELD_TYPE.TOP }));
                    }
                }
                var colLen = sheetItems.length;
                addRowCnt = copyRowLastIndex - rowLastIndex;
                for (var i = 0; i < colLen; i++) {
                    for (var ui = rowLastIndex + 1; ui <= copyRowLastIndex; ui++) {
                        sheetItems[i].push(new SheetItem({ str: '', col: i, row: ui }));
                    }
                }
            }
            var copyData = [];
            // 내용 copy
            for (var i = 0; i <= copyColLen; i++) {
                copyData[i] = [];
                var cRows = sheetItems[rect.sc + i];
                for (var ri = 0; ri <= copyRowLen; ri++)
                    copyData[i][ri] = cRows[rect.sr + ri].str;
            }
            // 내용 push
            for (var i = 0; i <= copyColLen; i++) {
                var mRows = sheetItems[mCol + i];
                for (var ri = 0; ri <= copyRowLen; ri++)
                    mRows[mRow + ri].str = copyData[i][ri];
            }
            modifyData = new ModifyData();
            modifyData.type = type;
            modifyData.start = start;
            modifyData.end = end;
            modifyData.rect = rect;
            modifyData.modifyItem = modifyItem;
            modifyData.addColCnt = addColCnt;
            modifyData.addRowCnt = addRowCnt;
        }
        return __assign(__assign({}, state), { modifyData: modifyData });
    },
    _a$1[DELETE_CELL] = function (state, action) {
        var _a = action.payload, start = _a.start, end = _a.end, type = _a.type;
        var rect = getRect(start, end);
        var modifyData;
        if (rect) {
            var sheetItems = state.sheetItems || [];
            var sc = rect.sc, ec = rect.ec, sr = rect.sr, er = rect.er;
            for (var ci = sc; ci <= ec; ci++) {
                var rows = sheetItems[ci];
                for (var ri = sr; ri <= er; ri++)
                    rows[ri].str = '';
            }
            modifyData = new ModifyData();
            modifyData.type = type;
            modifyData.start = start;
            modifyData.end = end;
            modifyData.rect = rect;
        }
        return __assign(__assign({}, state), { modifyData: modifyData });
    },
    _a$1[CUT_CELL] = function (state, action) {
        var _a = action.payload, start = _a.start, end = _a.end, modifyItem = _a.modifyItem, type = _a.type;
        var mCol = modifyItem.col, mRow = modifyItem.row;
        var rect = getRect(start, end);
        var modifyData;
        if (rect) {
            var cutRowLen = rect.er - rect.sr;
            var cutColLen = rect.ec - rect.sc;
            var sheetItems = state.sheetItems || [];
            var sheetRowItems = (sheetItems[0] || []);
            var colLastIndex = sheetItems.length - 1;
            var rowLastIndex = sheetRowItems.length - 1;
            var cutColLastIndex = mCol + cutColLen;
            var cutRowLastIndex = mRow + cutRowLen;
            var _b = state.fields, fieldCols = _b.cols, fieldRows = _b.rows;
            var addColCnt = 0;
            var addRowCnt = 0;
            // col 추가
            if (cutColLastIndex > colLastIndex) {
                addColCnt = cutColLastIndex - colLastIndex;
                var _loop_2 = function (ci) {
                    if (fieldCols) {
                        var str = createFieldNumberStr(ci);
                        fieldCols.push(new FieldItem({ str: str, col: ci, row: 0, type: FIELD_TYPE.LEFT }));
                    }
                    var addRows = sheetRowItems.map(function (_item, i) {
                        return new SheetItem({ str: '', col: ci, row: i });
                    });
                    sheetItems.push(addRows);
                };
                for (var ci = colLastIndex + 1; ci <= cutColLastIndex; ci++) {
                    _loop_2(ci);
                }
            }
            // row 추가
            if (cutRowLastIndex > rowLastIndex) {
                if (fieldRows) {
                    for (var fi = rowLastIndex + 1; fi <= cutRowLastIndex; fi++) {
                        var str = createFieldAlphabetStr(fi);
                        fieldRows.push(new FieldItem({ str: str, col: 0, row: fi, type: FIELD_TYPE.TOP }));
                    }
                }
                var colLen = sheetItems.length;
                addRowCnt = cutRowLastIndex - rowLastIndex;
                for (var i = 0; i < colLen; i++) {
                    for (var ui = rowLastIndex + 1; ui <= cutRowLastIndex; ui++) {
                        sheetItems[i].push(new SheetItem({ str: '', col: i, row: ui }));
                    }
                }
            }
            var cutData = [];
            // 내용 cut
            for (var i = 0; i <= cutColLen; i++) {
                cutData[i] = [];
                var cRows = sheetItems[rect.sc + i];
                for (var ri = 0; ri <= cutRowLen; ri++) {
                    var cutItem = cRows[rect.sr + ri];
                    cutData[i][ri] = cutItem.str;
                    cutItem.str = '';
                }
            }
            // 내용 push
            for (var i = 0; i <= cutColLen; i++) {
                var mRows = sheetItems[mCol + i];
                for (var ri = 0; ri <= cutRowLen; ri++) {
                    var modifyItem_1 = mRows[mRow + ri];
                    modifyItem_1.str = cutData[i][ri];
                }
            }
            modifyData = new ModifyData();
            modifyData.type = type;
            modifyData.start = start;
            modifyData.end = end;
            modifyData.rect = rect;
            modifyData.modifyItem = modifyItem;
            modifyData.addColCnt = addColCnt;
            modifyData.addRowCnt = addRowCnt;
        }
        return __assign(__assign({}, state), { modifyData: modifyData });
    },
    _a$1[FIELD_STATE_CHANGE] = function (state, action) {
        var fieldRect = (action.payload).fieldRect;
        var fieldModifyData = state.fieldModifyData;
        // let modifyData = state.modifyData;
        cLog(fieldRect);
        if (fieldRect) {
            var sc_1 = fieldRect.sc, ec_1 = fieldRect.ec, sr_1 = fieldRect.sr, er_1 = fieldRect.er, standardItem = fieldRect.standardItem;
            if (state.fieldRect) {
                var _a = state.fieldRect, osc = _a.sc, oec = _a.ec, osr = _a.sr, oer = _a.er;
                if (osc === sc_1 && oec === ec_1 && osr === sr_1 && oer === er_1) {
                    return __assign({}, state);
                }
            }
            var fields_1 = state.fields;
            var cols = fields_1.cols, rows = fields_1.rows;
            if (rows)
                rows.forEach(function (rowItem) {
                    var row = rowItem.row;
                    if (row !== undefined) {
                        rowItem.isSelect = row >= sr_1 && row <= er_1;
                        rowItem.isSelectAll = false;
                    }
                });
            if (cols)
                cols.forEach(function (colItem) {
                    var col = colItem.col;
                    if (col !== undefined) {
                        colItem.isSelect = col >= sc_1 && col <= ec_1;
                        colItem.isSelectAll = false;
                    }
                });
            if (standardItem) {
                var standardItemCol = standardItem.col, standardItemRow = standardItem.row, type = standardItem.type;
                if (type === FIELD_TYPE.LEFT) {
                    if (cols)
                        cols[standardItemCol].isSelectAll = true;
                }
                else {
                    if (rows)
                        rows[standardItemRow].isSelectAll = true;
                }
            }
            // modifyData = new ModifyData();
            // modifyData.type = MODIFY_TYPE.FIELD_STATE;
            fieldModifyData = new FieldModifyData();
            fieldModifyData.type = FIELD_MODIFY_TYPE.FIELD_STATE;
        }
        else {
            if (state.fieldRect) {
                cLog('reset');
                var fields_2 = state.fields;
                var cols = fields_2.cols, rows = fields_2.rows;
                if (rows)
                    rows.forEach(function (rowItem) {
                        var row = rowItem.row;
                        if (row !== undefined) {
                            rowItem.isSelect = false;
                            rowItem.isSelectAll = false;
                        }
                    });
                if (cols)
                    cols.forEach(function (colItem) {
                        var col = colItem.col;
                        if (col !== undefined) {
                            colItem.isSelect = false;
                            colItem.isSelectAll = false;
                        }
                    });
                // modifyData = new ModifyData();
                // modifyData.type = MODIFY_TYPE.FIELD_STATE;
                fieldModifyData = new FieldModifyData();
                fieldModifyData.type = FIELD_MODIFY_TYPE.FIELD_STATE;
            }
            // fieldRect = state.fieldRect;
        }
        return __assign(__assign({}, state), { fieldModifyData: fieldModifyData,
            fieldRect: fieldRect });
    },
    _a$1[RESET_SHEET_STATE] = function (_state, _action) {
        var newState = {
            fields: { cols: undefined, rows: undefined },
            sheetItems: [],
            dragStartItem: undefined,
            dragEndItem: undefined,
            modifyData: undefined,
            fieldRect: undefined,
            originData: undefined,
            fieldModifyData: undefined,
        };
        return __assign({}, newState);
    },
    _a$1), initState);
var sheetActions = {
    addSheetDatas: createAction(ADD_SHEET_DATAS),
    modifySheetData: createAction(MODIFY_SHEET_DATA),
    modifyRowCell: createAction(MODIFY_ROW_CELL),
    modifyColCell: createAction(MODIFY_COL_CELL),
    removeModify: createAction(REMOVE_MODIFY),
    copyCell: createAction(COPY_CELL),
    deleteCell: createAction(DELETE_CELL),
    cutCell: createAction(CUT_CELL),
    fieldStateChange: createAction(FIELD_STATE_CHANGE),
    resetSheetState: createAction(RESET_SHEET_STATE),
};

/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
var EditData = /** @class */ (function () {
    function EditData() {
    }
    return EditData;
}());

var _a$2;
var SELECT_CELL = 'SELECT_CELL';
var SELECT_START_CELL = 'SELECT_START_CELL';
var SELECT_END_CELL = 'SELECT_END_CELL';
var FIELD_SELECT_CELL = 'FIELD_SELECT_CELL';
var MODIFY_DATA = 'MODIFY_DATA';
var MODIFY_RECT = 'MODIFY_RECT';
var RESET_EDITOR_STATE = 'RESET_EDITOR_STATE';
var SET_EDIT = 'SET_EDIT';
var EDIT_COMPLETE = 'EDIT_COMPLETE';
var SET_VIEW_PORT = 'SET_VIEW_PORT';
var SET_REAL_VIEW_PORT = 'SET_REAL_VIEW_PORT';
var CLICK_COUNT = 'CLICK_COUNT';
var initState$1 = {
    time: new Date().getTime(),
    selectCell: undefined,
    startCell: undefined,
    endCell: undefined,
    rect: undefined,
    modifyData: undefined,
    // field on 처리 되는 영역
    fieldRect: undefined,
    // 자르기/복사 관련
    modifyRect: undefined,
    // 텍스트 편집 관련
    editData: undefined,
    isKeyBord: undefined,
    viewPort: undefined,
    realViewPort: undefined,
    clickCount: 0,
};
var reducer$1 = handleActions((_a$2 = {},
    _a$2[SELECT_CELL] = function (state, action) {
        var _a = action.payload, selectCell = _a.selectCell, isKeyBord = _a.isKeyBord;
        var editData = state.editData;
        var clickCount = ((state.clickCount || 0) + 1) % 100000;
        // let startCell;
        // let endCell;
        // let rect;
        // if (state.modifyRect) {
        //     startCell = state.startCell;
        //     endCell = state.endCell;
        //     rect = state.rect;
        // } else {
        //     startCell = action.payload;
        //     endCell = undefined;
        //     rect = undefined;
        // }
        var startCell = selectCell;
        var endCell = undefined;
        var rect = undefined;
        var fieldRect = getRect(selectCell, selectCell);
        return __assign(__assign({}, state), { selectCell: selectCell,
            startCell: startCell,
            endCell: endCell,
            rect: rect,
            fieldRect: fieldRect, editData: undefined, isKeyBord: isKeyBord,
            clickCount: clickCount });
    },
    _a$2[SELECT_START_CELL] = function (state, action) {
        var startCell = action.payload;
        return __assign(__assign({}, state), { startCell: startCell });
    },
    _a$2[SELECT_END_CELL] = function (state, action) {
        var endCell = action.payload;
        var rect = state.startCell ? getRect(state.startCell, endCell) : undefined;
        var fieldRect = rect;
        return __assign(__assign({}, state), { endCell: endCell,
            rect: rect,
            fieldRect: fieldRect });
    },
    _a$2[FIELD_SELECT_CELL] = function (state, action) {
        var _a = action.payload || {}, start = _a.start, end = _a.end, standardItem = _a.standardItem;
        var isKeyBord = undefined;
        var startCell = start;
        var selectCell = start;
        var endCell = end;
        var rect = getRect(start, end);
        var fieldRect = rect;
        if (standardItem && fieldRect)
            fieldRect.standardItem = standardItem;
        var editData = undefined;
        return __assign(__assign({}, state), { selectCell: selectCell,
            startCell: startCell,
            endCell: endCell,
            rect: rect,
            fieldRect: fieldRect,
            editData: editData,
            isKeyBord: isKeyBord });
    },
    _a$2[MODIFY_DATA] = function (state, action) {
        var modifyData = action.payload;
        return __assign(__assign({}, state), { modifyData: modifyData });
    },
    _a$2[MODIFY_RECT] = function (state, action) {
        var type = action.payload;
        var modifyRect;
        if (type) {
            var startCell = state.startCell, rect = state.rect;
            if (rect) {
                var sc = rect.sc, ec = rect.ec, sr = rect.sr, er = rect.er;
                modifyRect = { type: type, sc: sc, ec: ec, sr: sr, er: er };
            }
            else {
                modifyRect = getRect(startCell, startCell);
                if (modifyRect)
                    modifyRect.type = type;
            }
        }
        return __assign(__assign({}, state), { modifyRect: modifyRect });
    },
    _a$2[RESET_EDITOR_STATE] = function (_state, _action) {
        var newState = {
            time: new Date().getTime(),
            selectCell: undefined,
            startCell: undefined,
            endCell: undefined,
            rect: undefined,
            fieldRect: undefined,
            modifyRect: undefined,
            modifyData: undefined,
            editData: undefined,
            isKeyBord: undefined,
            viewPort: undefined,
            realViewPort: undefined,
            clickCount: 0,
        };
        return __assign({}, newState);
    },
    _a$2[SET_EDIT] = function (state, action) {
        var _a = action.payload || {}, defaultText = _a.defaultText, cursor = _a.cursor, isCancel = _a.isCancel;
        var time = state.time, selectCell = state.selectCell;
        var editData = new EditData();
        editData.time = time;
        editData.defaultText = defaultText;
        editData.editItem = selectCell;
        editData.cursor = cursor;
        editData.isCancel = isCancel;
        var startCell = undefined;
        var endCell = undefined;
        var rect = undefined;
        var modifyData = undefined;
        var modifyRect = undefined;
        // const viewPort = undefined;
        var fieldRect = getRect(selectCell, selectCell);
        return __assign(__assign({}, state), { fieldRect: fieldRect,
            startCell: startCell,
            endCell: endCell,
            rect: rect,
            modifyData: modifyData,
            modifyRect: modifyRect,
            editData: editData });
    },
    _a$2[SET_VIEW_PORT] = function (state, action) {
        var viewPort = action.payload;
        return __assign(__assign({}, state), { viewPort: viewPort });
    },
    _a$2[SET_REAL_VIEW_PORT] = function (state, action) {
        var realViewPort = action.payload;
        return __assign(__assign({}, state), { realViewPort: realViewPort });
    },
    _a$2[CLICK_COUNT] = function (state, _action) {
        var clickCount = ((state.clickCount || 0) + 1) % 100000;
        return __assign(__assign({}, state), { clickCount: clickCount });
    },
    _a$2), initState$1);
var editorActions = {
    selectCell: createAction(SELECT_CELL),
    selectStartCell: createAction(SELECT_START_CELL),
    selectEndCell: createAction(SELECT_END_CELL),
    fieldSelectCell: createAction(FIELD_SELECT_CELL),
    editorModifyData: createAction(MODIFY_DATA),
    modifyRect: createAction(MODIFY_RECT),
    resetEditorState: createAction(RESET_EDITOR_STATE),
    setEdit: createAction(SET_EDIT),
    editComplete: createAction(EDIT_COMPLETE),
    setViewPort: createAction(SET_VIEW_PORT),
    setRealViewPort: createAction(SET_REAL_VIEW_PORT),
    addClickCount: createAction(CLICK_COUNT),
};

var reducer$2 = combineReducers({
    sheet: reducer,
    editor: reducer$1,
});

var StoreManager = /** @class */ (function () {
    function StoreManager() {
        this._store =  createStore(reducer$2);
    }
    Object.defineProperty(StoreManager.prototype, "store", {
        get: function () {
            return this._store;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoreManager.prototype, "state", {
        get: function () {
            return this._store.getState();
        },
        enumerable: false,
        configurable: true
    });
    return StoreManager;
}());
var StoreManager$1 = new StoreManager();

var selectEditData = function (state) { return state.editor.editData; };
var selectSelectCell = function (state) { return state.editor.selectCell; };
var selectModifyRect = function (state) { return state.editor.modifyRect; };
var selectModifyData = function (state) { return state.editor.modifyData; };
var selectViewPort = function (state) { return state.editor.viewPort; };
var SheetBoxObserver = function (props) {
    var editData = useSelector(selectEditData);
    var selectCell = useSelector(selectSelectCell);
    var modifyRect = useSelector(selectModifyRect);
    var modifyData = useSelector(selectModifyData);
    var viewPort = useSelector(selectViewPort);
    React.useEffect(function () {
        return function () { };
    }, []);
    React.useEffect(function () {
        var changeEditData = ((props === null || props === void 0 ? void 0 : props.changeMap) || {}).changeEditData;
        if (changeEditData)
            changeEditData(editData);
    }, [editData]);
    React.useEffect(function () {
        var changeSelectCell = ((props === null || props === void 0 ? void 0 : props.changeMap) || {}).changeSelectCell;
        if (changeSelectCell)
            changeSelectCell(selectCell);
    }, [selectCell]);
    React.useEffect(function () {
        var changeModifyRect = ((props === null || props === void 0 ? void 0 : props.changeMap) || {}).changeModifyRect;
        if (changeModifyRect)
            changeModifyRect(modifyRect);
    }, [modifyRect]);
    React.useEffect(function () {
        var changeModifyData = ((props === null || props === void 0 ? void 0 : props.changeMap) || {}).changeModifyData;
        if (changeModifyData)
            changeModifyData(modifyData);
    }, [modifyData]);
    React.useEffect(function () {
        var changeViewPort = ((props === null || props === void 0 ? void 0 : props.changeMap) || {}).changeViewPort;
        if (changeViewPort)
            changeViewPort(viewPort);
    }, [viewPort]);
    return React__default['default'].createElement(React__default['default'].Fragment, null);
};

var EDITOR_MODIFY_TYPE;
(function (EDITOR_MODIFY_TYPE) {
    EDITOR_MODIFY_TYPE["CELL"] = "EDITOR_MODIFY_TYPE_CELL";
    EDITOR_MODIFY_TYPE["FIELD"] = "EDITOR_MODIFY_TYPE_FIELD";
})(EDITOR_MODIFY_TYPE || (EDITOR_MODIFY_TYPE = {}));
var EditorModifyData = /** @class */ (function () {
    function EditorModifyData() {
    }
    EditorModifyData.prototype.clone = function () {
        var editorModifyData = new EditorModifyData();
        editorModifyData.modifyItem = this.modifyItem;
        editorModifyData.type = this.type;
        editorModifyData.fieldType = this.fieldType;
        editorModifyData.position = this.position;
        editorModifyData.positionCSS = this.positionCSS;
        editorModifyData.isLine = this.isLine;
        editorModifyData.openOption = this.openOption;
        editorModifyData.over = this.over;
        return editorModifyData;
    };
    return EditorModifyData;
}());

var SheetBoxResizeSensor = /** @class */ (function (_super) {
    __extends(SheetBoxResizeSensor, _super);
    function SheetBoxResizeSensor(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            expandChildHeight: 0,
            expandChildWidth: 0,
            expandScrollLeft: 0,
            expandScrollTop: 0,
            shrinkScrollTop: 0,
            shrinkScrollLeft: 0,
            lastWidth: 0,
            lastHeight: 0,
        };
        _this.reset = function () {
            var _a, _b;
            var container = _this.containerRef.current;
            var expand = _this.expandRef.current;
            var shrink = _this.shrinkRef.current;
            if (container && expand && shrink) {
                _this.setState({
                    expandChildHeight: expand.offsetHeight + 10,
                    expandChildWidth: expand.offsetWidth + 10,
                    lastWidth: ((_a = container.parentElement) === null || _a === void 0 ? void 0 : _a.offsetWidth) || container.offsetWidth,
                    lastHeight: ((_b = container.parentElement) === null || _b === void 0 ? void 0 : _b.offsetHeight) || container.offsetHeight,
                });
                expand.scrollLeft = expand.scrollWidth;
                expand.scrollTop = expand.scrollHeight;
                shrink.scrollLeft = shrink.scrollWidth;
                shrink.scrollTop = shrink.scrollHeight;
            }
        };
        _this.handleScroll = function (_evt) {
            var _a, _b;
            var state = _this.state;
            var container = _this.containerRef.current;
            if (container) {
                var containerWidth = ((_a = container.parentElement) === null || _a === void 0 ? void 0 : _a.offsetWidth) || container.offsetWidth;
                var containerHeight = ((_b = container.parentElement) === null || _b === void 0 ? void 0 : _b.offsetHeight) || container.offsetHeight;
                if (containerWidth !== state.lastWidth || containerHeight !== state.lastHeight) {
                    var onResize = _this.props.onResize;
                    if (onResize)
                        onResize();
                }
                _this.reset();
            }
        };
        _this.expandRef = React__default['default'].createRef();
        _this.shrinkRef = React__default['default'].createRef();
        _this.containerRef = React__default['default'].createRef();
        return _this;
    }
    SheetBoxResizeSensor.prototype.componentDidMount = function () {
        this.reset();
    };
    SheetBoxResizeSensor.prototype.render = function () {
        var state = this.state;
        var parentStyle = {
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            overflow: 'scroll',
            zIndex: -1,
            visibility: 'hidden',
        };
        var childStyle = {
            position: 'absolute',
            left: 0,
            top: 0,
        };
        var expandChildStyle = __assign(__assign({}, childStyle), { width: state.expandChildWidth, height: state.expandChildHeight });
        var shrinkChildStyle = __assign(__assign({}, childStyle), { width: '200%', height: '200%' });
        return (React__default['default'].createElement("div", { style: parentStyle, ref: this.containerRef },
            React__default['default'].createElement("div", { style: parentStyle, ref: this.expandRef, onScroll: this.handleScroll },
                React__default['default'].createElement("div", { style: expandChildStyle })),
            React__default['default'].createElement("div", { style: parentStyle, onScroll: this.handleScroll, ref: this.shrinkRef },
                React__default['default'].createElement("div", { style: shrinkChildStyle }))));
    };
    return SheetBoxResizeSensor;
}(React__default['default'].Component));
var mapStateToProps$1 = function (_state) { return ({}); };
var mapDispatchToProps$1 = function (_dispatch) { return ({}); };
var SheetBoxResizeSensor$1 = connect(mapStateToProps$1, mapDispatchToProps$1, null, { forwardRef: true })(SheetBoxResizeSensor);

var CellSaveLayer = function (props) {
    React.useEffect(function () {
        return function () { };
    }, []);
    var timeoutID;
    var onSaveToastrComplete = function (e) {
        var _a;
        if (e)
            e.preventDefault();
        clearTimeout(timeoutID);
        setSave(false);
        var saveToastrComplete = (((_a = props.option) === null || _a === void 0 ? void 0 : _a.callBack) || {}).saveToastrComplete;
        if (saveToastrComplete)
            saveToastrComplete();
    };
    var _a = React.useState(false), isSave = _a[0], setSave = _a[1];
    React.useEffect(function () {
        if (isSave) {
            clearTimeout(timeoutID);
            timeoutID = setTimeout(function () {
                var _a;
                setSave(false);
                var saveToastrComplete = (((_a = props.option) === null || _a === void 0 ? void 0 : _a.callBack) || {}).saveToastrComplete;
                if (saveToastrComplete)
                    saveToastrComplete();
            }, 3000);
        }
    }, [isSave]);
    React.useEffect(function () {
        if (props.isSave)
            setSave(props.isSave);
    }, [props.isSave]);
    return isSave ? (React__default['default'].createElement("div", { className: Styles.save_layer, onClick: onSaveToastrComplete },
        React__default['default'].createElement("strong", null, config.LANGUAGE.saveCompleteTitle),
        React__default['default'].createElement("p", null, config.LANGUAGE.saveCompleteContent))) : (React__default['default'].createElement(React__default['default'].Fragment, null));
};

var ErrorDimmed = function (props) {
    React.useEffect(function () {
        return function () { };
    }, []);
    var onSaveExcel = function (e) {
        e.preventDefault();
        var onSaveExcel = props.onSaveExcel;
        if (onSaveExcel)
            onSaveExcel();
    };
    var _a = React.useState('10,000'), maxCell = _a[0], setMaxCell = _a[1];
    var _b = React.useState(false), isError = _b[0], setError = _b[1];
    React.useEffect(function () {
        if (props.isError) {
            setMaxCell(numberWithCommas(config.MAX_CELL));
            setError(props.isError);
        }
    }, [props.isError]);
    var text = config.LANGUAGE.maxCellPopup.replace('%s', maxCell);
    return isError ? (React__default['default'].createElement("div", { className: Styles.error_dimmed },
        React__default['default'].createElement("div", { className: Styles.inner },
            React__default['default'].createElement("p", null, text.split('<br />').map(function (line, i) {
                return (React__default['default'].createElement("span", { key: i },
                    line,
                    React__default['default'].createElement("br", null)));
            })),
            React__default['default'].createElement("a", { href: "/", role: "button", className: Styles.btn_download, onClick: onSaveExcel }, config.LANGUAGE.maxCellPopupDown)))) : (React__default['default'].createElement(React__default['default'].Fragment, null));
};

var selectModifyData$1 = function (state) { return state.editor.modifyData; };
var FieldOptionLayerObserver = function (props) {
    var modifyData = useSelector(selectModifyData$1);
    React.useEffect(function () {
        return function () { };
    }, []);
    React.useEffect(function () {
        var changeEditorModifyData = props.changeEditorModifyData;
        if (changeEditorModifyData)
            changeEditorModifyData(modifyData);
    }, [modifyData]);
    return React__default['default'].createElement(React__default['default'].Fragment, null);
};

var _a$3 = config.SHEET_TABLE, TABLE_SHEET_SIZE$3 = _a$3.TABLE_SHEET_SIZE, SHEET_BOX_PADDING = _a$3.SHEET_BOX_PADDING;
var BORDER_SIZE$1 = TABLE_SHEET_SIZE$3.BORDER_SIZE, TOP_FIELD_HEIGHT = TABLE_SHEET_SIZE$3.TOP_FIELD_HEIGHT;
var BOTTOM = SHEET_BOX_PADDING.BOTTOM;
var LeftCellGroup = /** @class */ (function (_super) {
    __extends(LeftCellGroup, _super);
    function LeftCellGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this._isSynchronizationTop = false;
        _this.synchronizationTop = function (top, target) {
            if (!_this.leftCellGroupRef.current)
                return;
            if (!target || _this.leftCellGroupRef.current !== target) {
                _this._isSynchronizationTop = true;
                _this.leftCellGroupRef.current.scrollTop = top;
            }
        };
        _this.synchronizationScroll = function (_left, top) {
            if (!_this.leftCellGroupRef.current)
                return;
            _this._isSynchronizationTop = true;
            _this.leftCellGroupRef.current.scrollTop = top;
        };
        _this._onScroll = function (e) {
            cLog('[LeftCellGroup] _onScroll', _this._isSynchronizationTop);
            if (_this._isSynchronizationTop) {
                _this._isSynchronizationTop = false;
                return;
            }
            var updateTop = _this.props.updateTop;
            if (updateTop)
                updateTop(e);
        };
        _this.leftCellGroupRef = React__default['default'].createRef();
        return _this;
    }
    LeftCellGroup.prototype.componentWillUnmount = function () {
        var _a;
        cLog('[LeftCellGroup] componentWillUnmount');
        (_a = this.leftCellGroupRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('scroll', this._onScroll);
    };
    LeftCellGroup.prototype.componentDidMount = function () {
        var _a;
        cLog('[LeftCellGroup] componentDidMount');
        (_a = this.leftCellGroupRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('scroll', this._onScroll);
    };
    LeftCellGroup.prototype.componentDidUpdate = function () {
        cLog('[LeftCellGroup] componentDidUpdate');
    };
    LeftCellGroup.prototype.render = function () {
        var _a = this.props, fields = _a.fields, modifyData = _a.modifyData, viewPort = _a.viewPort, fieldMouseEventMap = _a.fieldMouseEventMap, cellHeight = _a.cellHeight;
        var cols = (fields || {}).cols;
        var rootSize = (viewPort || {}).rootSize;
        var height = (rootSize || {}).height;
        var leftCellGroupStyle;
        if (cellHeight && height && height - TOP_FIELD_HEIGHT - BOTTOM > cellHeight) {
            leftCellGroupStyle = { height: cellHeight + BORDER_SIZE$1 };
        }
        var fieldStyle = { height: cellHeight };
        return (React__default['default'].createElement("div", { className: Styles.left_cell_group, ref: this.leftCellGroupRef, style: leftCellGroupStyle },
            React__default['default'].createElement(FieldView$1, { addStyle: fieldStyle, className: Styles.left_cell, type: FIELD_TYPE.LEFT, fieldDatas: cols, viewPort: viewPort, modifyData: modifyData, mouseEventMap: fieldMouseEventMap })));
    };
    return LeftCellGroup;
}(React__default['default'].Component));
var mapStateToProps$2 = function (_state) { return ({
// viewPort: state.editor.viewPort,
}); };
var mapDispatchToProps$2 = function (_dispatch) { return ({
// selectCell: (selectCellItem) => dispatch(selectCell(selectCellItem)),
}); };
var LeftCellGroup$1 = connect(mapStateToProps$2, mapDispatchToProps$2, null, { forwardRef: true })(LeftCellGroup);

var _a$4 = config.SHEET_TABLE.TABLE_SHEET_SIZE, CELL_HEIGHT$2 = _a$4.CELL_HEIGHT, CELL_WIDTH$3 = _a$4.CELL_WIDTH;
var CELL_RENDER_COUNT$1 = config.SHEET_TABLE.CELL_RENDER_COUNT;
var selectEditData$1 = function (state) { return state.editor.editData; };
var ColView = React__default['default'].memo(function (props) {
    cLog('ColView ==> ');
    var addNewItems = function () {
        var viewPort = props.viewPort;
        var newItems = [];
        var colViewStyle;
        if (viewPort) {
            var _a = (viewPort === null || viewPort === void 0 ? void 0 : viewPort.rect) || {}, sr = _a.sr, er = _a.er;
            if (sr !== undefined && er !== undefined) {
                var mouseEventMap = props.mouseEventMap;
                var maxRowIndex = getRowLength() - 1;
                var startIndex = sr - CELL_RENDER_COUNT$1;
                var endIndex = er + CELL_RENDER_COUNT$1;
                startIndex = startIndex < 0 ? 0 : startIndex;
                endIndex = endIndex > maxRowIndex ? maxRowIndex : endIndex;
                colViewStyle = { transform: "translate(" + CELL_WIDTH$3 * startIndex + "px, 0px)" };
                for (var i = startIndex; i <= endIndex; i++) {
                    var sheetItem = props.rows[i];
                    newItems.push(React__default['default'].createElement(CellItem, { style: colViewStyle, ref: setCellItemRef(i), key: 'CELL' + "_" + sheetItem.col + "_" + sheetItem.row, data: sheetItem, useCellOver: true, mouseEventMap: mouseEventMap }));
                }
            }
        }
        addItems(newItems);
    };
    React.useEffect(function () {
        addNewItems();
    }, [props.viewPort]);
    var editData = useSelector(selectEditData$1);
    React.useEffect(function () {
        if (editData) {
            var editItem = editData.editItem;
            var _a = editItem || {}, col = _a.col, row = _a.row;
            if (col !== undefined && row !== undefined && col === props.colIndex) {
                if (refs[row])
                    refs[row].cellOverReset();
            }
        }
    }, [editData]);
    var setCellItemRef = function (index) { return function (element) {
        if (element)
            index < 0 ? refs.push(element) : refs.splice(index, 0, element);
        addRef(refs);
    }; };
    var prevRefRerender = function (index) {
        // 왼쪽 쎌 3칸까지 확인;
        var prevIndex = (index || 0) - 1;
        var rows = props.rows;
        if (prevIndex > -1) {
            for (var i = 0; i < 3; i++) {
                if (prevIndex < 0)
                    return;
                var prevItem = rows[prevIndex];
                if (prevItem.str) {
                    if (refs[prevIndex])
                        refs[prevIndex].reRender();
                    return;
                }
                prevIndex--;
            }
        }
        // if (index && index > -1) {
        //     const prev = index - 1;
        //     if (refs[prev]) refs[prev].reRender();
        // }
    };
    React.useEffect(function () {
        cLog('[ColView] Mount');
        return function () { return cLog('[ColView] Unmount'); };
    }, []);
    var _a = React.useState([]), refs = _a[0], addRef = _a[1];
    var _b = React.useState([]), items = _b[0], addItems = _b[1];
    // useEffect(() => {
    //     const rowItems = nextRowItems(props, items);
    //     if (!rowItems || !rowItems.length) return;
    //     const { mouseEventMap } = props;
    //     const addItemRef = setCellItemRef(-1);
    //     const nextCellItems = rowItems.map((sheetItem: SheetItem) => {
    //         return (
    //             <CellItem
    //                 ref={addItemRef}
    //                 key={`${'CELL'}_${sheetItem.col}_${sheetItem.row}`}
    //                 data={sheetItem}
    //                 useCellOver={true}
    //                 mouseEventMap={mouseEventMap}
    //             />
    //         );
    //     });
    //     addItems(items.concat(nextCellItems));
    // }, [items]);
    React.useEffect(function () {
        var modifyData = props.modifyData, colIndex = props.colIndex, mouseEventMap = props.mouseEventMap, viewPort = props.viewPort;
        if (modifyData) {
            cLog('modifyData props');
            var type = modifyData.type, index = modifyData.index, fieldType = modifyData.fieldType, modifyItem = modifyData.modifyItem, addRowCnt = modifyData.addRowCnt, rect = modifyData.rect;
            switch (type) {
                case MODIFY_TYPE.MODIFY:
                    if (modifyItem) {
                        var startCol_1 = Number(modifyItem.col);
                        if (colIndex === startCol_1) {
                            var i = Number(modifyItem.row);
                            prevRefRerender(i);
                            if (refs[i])
                                refs[i].reRender();
                        }
                    }
                    break;
                case MODIFY_TYPE.ADD:
                    if (index !== undefined) {
                        var rows_1 = props.rows;
                        addNewItems();
                        // if (fieldType === FIELD_TYPE.TOP) {
                        //     prevRefRerender(index);
                        //     const sheetItem = rows[index];
                        //     const addItemRef = setCellItemRef(index);
                        //     items.splice(
                        //         index,
                        //         0,
                        //         <CellItem
                        //             ref={addItemRef}
                        //             key={`${'CELL'}_${sheetItem.col}_${sheetItem.row}_${new Date().getTime()}`}
                        //             data={sheetItem}
                        //             useCellOver={true}
                        //             mouseEventMap={mouseEventMap}
                        //         />,
                        //     );
                        //     addItems([...items]);
                        // } else {
                        //     if (colIndex >= index) {
                        //         const len = Number(rows.length);
                        //         for (let i = 0; i <= len; i++) if (refs[i]) refs[i].reRender();
                        //     }
                        // }
                    }
                    break;
                case MODIFY_TYPE.REMOVE:
                    // if (index !== undefined && fieldType === FIELD_TYPE.TOP) {
                    //     prevRefRerender(index);
                    //     items.splice(index, 1);
                    //     refs.splice(index, 1);
                    //     addRef([]);
                    //     addItems([...items]);
                    // }
                    addNewItems();
                    break;
                case MODIFY_TYPE.COPY:
                case MODIFY_TYPE.CUT:
                    var rows = props.rows;
                    if (modifyItem) {
                        var _a = rect || {}, sc_1 = _a.sc, ec_1 = _a.ec, sr_1 = _a.sr, er_1 = _a.er;
                        var startCol_2 = Number(modifyItem.col);
                        var startRow_1 = Number(modifyItem.row);
                        var lastCol_1 = startCol_2 + ((ec_1 || 0) - (sc_1 || 0));
                        var lastRow_1 = startRow_1 + ((er_1 || 0) - (sr_1 || 0));
                        // 선택한 cell에 데이터 copy/cut
                        if (startCol_2 <= colIndex && lastCol_1 >= colIndex) {
                            for (var ri = startRow_1; ri <= lastRow_1; ri++) {
                                if (refs[ri])
                                    refs[ri].reRender();
                            }
                            prevRefRerender(startRow_1);
                        }
                        if (type === MODIFY_TYPE.CUT) {
                            var startCol_3 = Number(sc_1 || 0);
                            var lastCol_2 = Number(ec_1 || 0);
                            // 데이터 삭제
                            if (startCol_3 <= colIndex && lastCol_2 >= colIndex) {
                                var startRow_2 = Number(sr_1 || 0);
                                var lastRow_2 = Number(er_1 || 0);
                                for (var ri = startRow_2; ri <= lastRow_2; ri++) {
                                    if (refs[ri])
                                        refs[ri].reRender();
                                }
                                prevRefRerender(startRow_2);
                            }
                        }
                    }
                    // cell 추가됬을 경우
                    if (addRowCnt) {
                        // const addItemRef = setCellItemRef(-1);
                        var lastIndex = items.length;
                        prevRefRerender(lastIndex - 1);
                        // for (let i = 0; i < addRowCnt; i++) {
                        //     const sheetItem = rows[lastIndex + i];
                        //     items.push(
                        //         <CellItem
                        //             ref={addItemRef}
                        //             key={`${'CELL'}_${sheetItem.col}_${sheetItem.row}_${new Date().getTime()}`}
                        //             data={sheetItem}
                        //             useCellOver={true}
                        //             mouseEventMap={mouseEventMap}
                        //         />,
                        //     );
                        // }
                        // addItems([...items]);
                        addNewItems();
                    }
                    break;
                case MODIFY_TYPE.DELETE:
                    var _b = rect || {}, sc = _b.sc, ec = _b.ec, sr = _b.sr, er = _b.er;
                    var startCol = Number(sc || 0);
                    var startRow = Number(sr || 0);
                    var lastCol = Number(ec || 0);
                    var lastRow = Number(er || 0);
                    if (startCol <= colIndex && lastCol >= colIndex) {
                        prevRefRerender(startRow);
                        for (var ri = startRow; ri <= lastRow; ri++) {
                            if (refs[ri])
                                refs[ri].reRender();
                        }
                    }
                    break;
            }
        }
    }, [props.modifyData]);
    return (React__default['default'].createElement("div", { style: props.style, className: Styles.tr }, items));
});
var CellView = /** @class */ (function (_super) {
    __extends(CellView, _super);
    function CellView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            colItems: [],
            colItemKeys: [],
        };
        return _this;
    }
    CellView.prototype.componentWillUnmount = function () {
        cLog('[CellView] componentWillUnmount');
    };
    // eslint-disable-next-line react/no-deprecated
    CellView.prototype.componentWillMount = function () {
        cLog('[CellView] componentWillMount');
    };
    CellView.prototype.componentDidMount = function () {
        cLog('[CellView] componentDidMount');
    };
    CellView.prototype.shouldComponentUpdate = function (_nextProps) {
        return true;
    };
    // eslint-disable-next-line react/no-deprecated
    CellView.prototype.componentWillReceiveProps = function (nextProps) {
        cLog('[CellView] componentWillReceiveProps');
        var sheetItems = nextProps.sheetItems, modifyData = nextProps.modifyData, mouseEventMap = nextProps.mouseEventMap, viewPort = nextProps.viewPort;
        var _a = modifyData || {}, type = _a.type, fieldType = _a.fieldType, index = _a.index, addColCnt = _a.addColCnt;
        var itemKeys = this.state.colItemKeys;
        var colItemKeys = itemKeys || [];
        if (viewPort) {
            var colItems = [];
            var colViewStyle_1;
            var _b = (viewPort === null || viewPort === void 0 ? void 0 : viewPort.rect) || {}, sc = _b.sc, ec = _b.ec;
            if (sc !== undefined && ec !== undefined) {
                var maxColIndex = getColLength() - 1;
                var startIndex = sc - CELL_RENDER_COUNT$1;
                var endIndex = ec + CELL_RENDER_COUNT$1;
                startIndex = startIndex < 0 ? 0 : startIndex;
                endIndex = endIndex > maxColIndex ? maxColIndex : endIndex;
                // colViewStyle = {};
                // colViewStyle = { backgroundColor: 'black' };
                colViewStyle_1 = { transform: "translate(0px, " + CELL_HEIGHT$2 * startIndex + "px)" };
                for (var i = startIndex; i <= endIndex; i++) {
                    if (!colItemKeys[i])
                        colItemKeys[i] = "" + i;
                    var rows = sheetItems[i];
                    colItems.push(React__default['default'].createElement(ColView, { style: colViewStyle_1, key: colItemKeys[i], 
                        // key={`${renderKey}`}
                        colIndex: i, rows: rows, viewPort: viewPort, modifyData: modifyData, mouseEventMap: mouseEventMap }));
                }
            }
            else {
                colItems = (sheetItems || []).map(function (rows, index) {
                    colViewStyle_1 = { transform: 'translate(0px, 0px)' };
                    if (!colItemKeys[index])
                        colItemKeys[index] = "" + index;
                    return (React__default['default'].createElement(ColView, { style: colViewStyle_1, key: colItemKeys[index], colIndex: index, rows: rows, viewPort: viewPort, modifyData: modifyData, mouseEventMap: mouseEventMap }));
                });
            }
            this.setState({ colItems: colItems, colItemKeys: colItemKeys });
        }
    };
    // eslint-disable-next-line react/no-deprecated
    CellView.prototype.componentWillUpdate = function () {
        cLog('[CellView] componentWillUpdate');
    };
    CellView.prototype.componentDidUpdate = function () {
        cLog('[CellView] componentDidUpdate');
    };
    CellView.prototype.render = function () {
        cLog('[CellView] render');
        var colItems = this.state.colItems;
        var addStyle = this.props.addStyle;
        return React__default['default'].createElement("div", { style: addStyle }, colItems);
    };
    return CellView;
}(React__default['default'].Component));
var mapStateToProps$3 = function (_state) { return ({}); };
var mapDispatchToProps$3 = function (_dispatch) { return ({}); };
var CellView$1 = connect(mapStateToProps$3, mapDispatchToProps$3, null, { forwardRef: true })(CellView);

var fieldStateChange = sheetActions.fieldStateChange;
var selectSelectCell$1 = function (state) { return state.editor.selectCell; };
var selectFieldRect = function (state) { return state.editor.fieldRect; };
var CellSelect = function (_props) {
    var selectCell = useSelector(selectSelectCell$1);
    var fieldRect = useSelector(selectFieldRect);
    var dispatch = useDispatch();
    React.useEffect(function () {
        return function () { };
    }, []);
    var _a = React.useState({ display: 'none' }), positionRect = _a[0], setPositionRect = _a[1];
    React.useEffect(function () {
        if (selectCell) {
            var postionCSS = getCellPositionCSS(selectCell, 0, 0);
            var width = '91px';
            var height = '32px';
            var display = '';
            setPositionRect(__assign(__assign({}, postionCSS), { width: width,
                height: height,
                display: display }));
        }
    }, [selectCell]);
    React.useEffect(function () {
        dispatch(fieldStateChange({
            fieldRect: fieldRect,
        }));
    }, [fieldRect]);
    return selectCell ? React__default['default'].createElement("div", { className: Styles.cell_select, style: positionRect }) : React__default['default'].createElement(React__default['default'].Fragment, null);
};

var selectRect = function (state) { return state.editor.rect; };
var TABLE_SHEET_SIZE$4 = config.SHEET_TABLE.TABLE_SHEET_SIZE;
var CELL_WIDTH$4 = TABLE_SHEET_SIZE$4.CELL_WIDTH, CELL_HEIGHT$3 = TABLE_SHEET_SIZE$4.CELL_HEIGHT;
var CellDragSelect = function (_props) {
    var rect = useSelector(selectRect);
    React.useEffect(function () {
        return function () { };
    }, []);
    var _a = React.useState({ display: 'none' }), positionRect = _a[0], setPositionRect = _a[1];
    React.useEffect(function () {
        if (rect) {
            var sc = rect.sc, ec = rect.ec, sr = rect.sr, er = rect.er;
            if (sc === ec && sr === er) {
                setPositionRect(undefined);
            }
            else {
                var left = CELL_WIDTH$4 * (sr || 0) + "px";
                var top_1 = CELL_HEIGHT$3 * (sc || 0) + "px";
                var width = (er - sr + 1) * CELL_WIDTH$4 + "px";
                var height = (ec - sc + 1) * CELL_HEIGHT$3 + "px";
                setPositionRect({
                    left: left,
                    top: top_1,
                    width: width,
                    height: height,
                    pointerEvents: 'none',
                    display: '',
                });
            }
        }
        else {
            setPositionRect(undefined);
        }
    }, [rect]);
    return positionRect ? React__default['default'].createElement("div", { className: Styles.cell_drag_select, style: positionRect }) : React__default['default'].createElement(React__default['default'].Fragment, null);
};

var selectModifyRect$1 = function (state) { return state.editor.modifyRect; };
var TABLE_SHEET_SIZE$5 = config.SHEET_TABLE.TABLE_SHEET_SIZE;
var CELL_WIDTH$5 = TABLE_SHEET_SIZE$5.CELL_WIDTH, CELL_HEIGHT$4 = TABLE_SHEET_SIZE$5.CELL_HEIGHT;
var CellDashedSelect = function (_props) {
    var modifyRect = useSelector(selectModifyRect$1);
    React.useEffect(function () {
        return function () { };
    }, []);
    var _a = React.useState({ display: 'none' }), positionRect = _a[0], setPositionRect = _a[1];
    React.useEffect(function () {
        if (modifyRect) {
            var sc = modifyRect.sc, ec = modifyRect.ec, sr = modifyRect.sr, er = modifyRect.er;
            var MARGIN_POSITION = 1;
            var MARGIN_SZIE = 3;
            var left = CELL_WIDTH$5 * (sr || 0) - MARGIN_POSITION + "px";
            var top_1 = CELL_HEIGHT$4 * (sc || 0) - MARGIN_POSITION + "px";
            var width = (er - sr + 1) * CELL_WIDTH$5 + MARGIN_SZIE + "px";
            var height = (ec - sc + 1) * CELL_HEIGHT$4 + MARGIN_SZIE + "px";
            setPositionRect({
                left: left,
                top: top_1,
                width: width,
                height: height,
                pointerEvents: 'none',
                display: '',
            });
        }
        else {
            setPositionRect(undefined);
        }
    }, [modifyRect]);
    return positionRect ? React__default['default'].createElement("div", { className: Styles.cell_dashed_select, style: positionRect }) : React__default['default'].createElement(React__default['default'].Fragment, null);
};

var TABLE_SHEET_SIZE$6 = config.SHEET_TABLE.TABLE_SHEET_SIZE;
var EDITOR_OPTION = config.EDITOR;
var CELL_WIDTH$6 = TABLE_SHEET_SIZE$6.CELL_WIDTH, CELL_HEIGHT$5 = TABLE_SHEET_SIZE$6.CELL_HEIGHT;
var MAX_TEXT = EDITOR_OPTION.MAX_TEXT;
var CellEdit = /** @class */ (function (_super) {
    __extends(CellEdit, _super);
    // eslint-disable-next-line no-useless-constructor
    function CellEdit(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            textareaValue: '',
            position: undefined,
        };
        _this._onKeyDown = function (_e) {
            // cLog(e);
            // e.preventDefault();
        };
        _this._handleOnChange = function (e) {
            // this.setState({
            //     textareaValue: e.target.value,
            // });
            var value = e.target.value;
            if (value.length <= MAX_TEXT) {
                var updateText = _this.props.updateText;
                if (updateText)
                    updateText(value);
            }
            else {
                cLog('MAX_TEXT');
            }
        };
        var defaultValue = props.defaultValue;
        _this.state = {
            textareaValue: defaultValue === undefined ? '' : defaultValue,
        };
        _this.textareaRef = React__default['default'].createRef();
        return _this;
    }
    CellEdit.prototype.componentWillUnmount = function () {
        var _a;
        (_a = this.textareaRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('keydown', this._onKeyDown);
    };
    CellEdit.prototype.componentWillMount = function () {
        cLog('[CellEdit] componentWillMount');
    };
    CellEdit.prototype.componentDidMount = function () {
        cLog('[CellEdit] componentDidMount');
        if (this.textareaRef.current) {
            var _a = this.props, defaultValue = _a.defaultValue, defaultCursor = _a.defaultCursor;
            var cursor = defaultCursor === undefined ? (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.toString().length) || 0 : defaultCursor;
            setCaretToPos(this.textareaRef.current, cursor);
            this.textareaRef.current.addEventListener('keydown', this._onKeyDown);
        }
    };
    CellEdit.prototype.componentDidUpdate = function () {
        cLog('[CellEdit] componentDidUpdate');
        this.focus(false);
    };
    CellEdit.prototype.getValue = function () {
        return this.state.textareaValue;
    };
    CellEdit.prototype.cancelValue = function (textareaValue) {
        this.setState({
            textareaValue: textareaValue,
        });
    };
    CellEdit.prototype.updateSize = function (size, text) {
        var updateWidth = size.width, updateHeight = size.height;
        var width = (updateWidth < CELL_WIDTH$6 + 1 ? CELL_WIDTH$6 + 1 : updateWidth) + "px";
        var height = (updateHeight < CELL_HEIGHT$5 + 1 ? CELL_HEIGHT$5 + 1 : updateHeight) + "px";
        this.setState({
            position: { width: width, height: height },
            textareaValue: text,
        });
    };
    CellEdit.prototype.focus = function (isReset) {
        if (isReset === void 0) { isReset = true; }
        if (this.textareaRef.current) {
            if (isReset) {
                this.textareaRef.current.value = '';
                this.state.textareaValue = '';
            }
            this.textareaRef.current.focus();
        }
    };
    CellEdit.prototype.render = function () {
        var _a = this.state, textareaValue = _a.textareaValue, position = _a.position;
        var style = position || {};
        return (React__default['default'].createElement("div", { className: Styles.cell_edit, style: style },
            React__default['default'].createElement("textarea", { ref: this.textareaRef, id: "edit", name: "edit", value: textareaValue === null || textareaValue === void 0 ? void 0 : textareaValue.toString(), onChange: this._handleOnChange })));
    };
    return CellEdit;
}(React__default['default'].Component));
var mapStateToProps$4 = function (_state) { return ({}); };
var mapDispatchToProps$4 = function (_dispatch) { return ({
// modifyItem: (modifyCellItem) => dispatch(modifyItem(modifyCellItem)),
}); };
var CellEdit$1 = connect(mapStateToProps$4, mapDispatchToProps$4, null, { forwardRef: true })(CellEdit);

var CellHide = /** @class */ (function (_super) {
    __extends(CellHide, _super);
    // eslint-disable-next-line no-useless-constructor
    function CellHide(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            textareaValue: '',
            position: undefined,
        };
        _this._updataSize = function () {
            var hide = _this.hideRef.current;
            if (hide) {
                var updateSize = _this.props.updateSize;
                var textareaValue = _this.state.textareaValue;
                if (updateSize)
                    updateSize({
                        width: hide.offsetWidth + 1,
                        height: hide.offsetHeight,
                    }, textareaValue);
            }
        };
        _this.hideRef = React__default['default'].createRef();
        var position = props.position, defaultValue = props.defaultValue;
        _this.state = {
            position: position,
            textareaValue: defaultValue,
        };
        return _this;
    }
    CellHide.prototype.componentWillUnmount = function () { };
    CellHide.prototype.componentWillMount = function () {
        cLog('[CellHide] componentWillMount');
    };
    CellHide.prototype.componentDidMount = function () {
        cLog('[CellHide] componentDidMount');
        this._updataSize();
    };
    CellHide.prototype.componentDidUpdate = function () {
        cLog('[CellHide] componentDidUpdate');
        this._updataSize();
    };
    CellHide.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        this.setState({
            textareaValue: nextProps.defaultValue || '',
            position: nextProps.position,
        });
    };
    CellHide.prototype.updateText = function (text) {
        this.setState({
            textareaValue: text || '',
        });
    };
    CellHide.prototype.render = function () {
        var _a = this.state, textareaValue = _a.textareaValue, position = _a.position;
        var style = position || {};
        return (React__default['default'].createElement("div", { ref: this.hideRef, className: Styles.hide, style: style }, textareaValue));
    };
    return CellHide;
}(React__default['default'].Component));
var mapStateToProps$5 = function (_state) { return ({}); };
var mapDispatchToProps$5 = function (_dispatch) { return ({
// modifyItem: (modifyCellItem) => dispatch(modifyItem(modifyCellItem)),
}); };
var CellHide$1 = connect(mapStateToProps$5, mapDispatchToProps$5, null, { forwardRef: true })(CellHide);

var selectSelectCell$2 = function (state) { return state.editor.selectCell; };
var SelectCellHook = function (props) {
    var selectCell = useSelector(selectSelectCell$2);
    React.useEffect(function () {
        return function () { };
    }, []);
    React.useEffect(function () {
        var changeSelectCell = (props || {}).changeSelectCell;
        if (changeSelectCell)
            changeSelectCell(selectCell);
    }, [selectCell]);
    return React__default['default'].createElement(React__default['default'].Fragment, null);
};

var selectClickCount = function (state) { return state.editor.clickCount; };
var ClickCountHook = function (props) {
    var clickCount = useSelector(selectClickCount);
    React.useEffect(function () {
        return function () { };
    }, []);
    React.useEffect(function () {
        var changeClickCount = (props || {}).changeClickCount;
        if (changeClickCount)
            changeClickCount(clickCount);
    }, [clickCount]);
    return React__default['default'].createElement(React__default['default'].Fragment, null);
};

var selectModifyData$2 = function (state) { return state.editor.modifyData; };
var ModifyDataHook = function (props) {
    var modifyData = useSelector(selectModifyData$2);
    React.useEffect(function () {
        return function () { };
    }, []);
    React.useEffect(function () {
        var changeModifyData = (props || {}).changeModifyData;
        if (changeModifyData)
            changeModifyData(modifyData);
    }, [modifyData]);
    return React__default['default'].createElement(React__default['default'].Fragment, null);
};

var selectRealViewPort = function (state) { return state.editor.realViewPort; };
var RealViewPortHook = function (props) {
    var realViewPort = useSelector(selectRealViewPort);
    React.useEffect(function () {
        return function () { };
    }, []);
    React.useEffect(function () {
        var changeRealViewPort = (props || {}).changeRealViewPort;
        if (changeRealViewPort)
            changeRealViewPort(realViewPort);
    }, [realViewPort]);
    return React__default['default'].createElement(React__default['default'].Fragment, null);
};

var modifySheetData = sheetActions.modifySheetData;
var CELL_WIDTH$7 = config.SHEET_TABLE.TABLE_SHEET_SIZE.CELL_WIDTH;
var HIDE_PADDING = config.EDITOR.HIDE_PADDING;
var CellEditLayer = /** @class */ (function (_super) {
    __extends(CellEditLayer, _super);
    // eslint-disable-next-line no-useless-constructor
    function CellEditLayer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this._cellHideStyle = {
            maxWidth: '1000px',
        };
        _this._updateSize = function (size, text) {
            if (_this.cellEditRef.current)
                _this.cellEditRef.current.updateSize(size, text);
        };
        _this._updateText = function (text) {
            if (_this.cellHideRef.current)
                _this.cellHideRef.current.updateText(text);
        };
        _this._onChangeClickCount = function (_clickCount) {
            _this.cellEditRef.current.focus(false);
        };
        _this._onChangeModifyData = function (modifyData) {
            if (!modifyData)
                _this.cellEditRef.current.focus(false);
        };
        _this._onChangeRealViewPort = function (realViewPort) {
            _this._realViewPort = realViewPort;
            _this._updateRealViewPort();
        };
        _this._onChangeSelectCell = function (_selectCell) {
            _this.cellEditRef.current.focus();
        };
        _this._updateRealViewPort = function () {
            var editData = _this.props.editData;
            if (!editData && _this.cellEditBoxRef.current && _this.cellHideEditBoxRef.current) {
                var _a = _this._realViewPort || {}, x = _a.x, y = _a.y;
                var top_1 = y + "px";
                var left = x + "px";
                _this.cellEditBoxRef.current.style.top = top_1;
                _this.cellEditBoxRef.current.style.left = left;
                _this.cellHideEditBoxRef.current.style.top = top_1;
                _this.cellHideEditBoxRef.current.style.left = left;
            }
        };
        _this.cellEditRef = React__default['default'].createRef();
        _this.cellHideRef = React__default['default'].createRef();
        _this.cellEditBoxRef = React__default['default'].createRef();
        _this.cellHideEditBoxRef = React__default['default'].createRef();
        return _this;
    }
    CellEditLayer.prototype.componentWillUnmount = function () { };
    CellEditLayer.prototype.componentWillMount = function () {
        cLog('[CellEditLayer] componentWillMount');
    };
    CellEditLayer.prototype.componentDidMount = function () { };
    CellEditLayer.prototype.componentDidUpdate = function () {
        cLog('[CellEditLayer] componentDidUpdate');
    };
    // eslint-disable-next-line react/no-deprecated
    CellEditLayer.prototype.componentWillReceiveProps = function (nextProps) {
        cLog('[CellEditLayer] componentWillReceiveProps');
        if (this.props.editData) {
            if (nextProps.editData) {
                var editItem = this.props.editData.editItem;
                var isCancel = nextProps.editData.isCancel;
                if (isCancel && editItem && this.cellEditRef.current) {
                    var str = editItem.str;
                    this.cellEditRef.current.cancelValue(str);
                }
            }
            else {
                var editItem = this.props.editData.editItem;
                if (editItem && this.cellEditRef.current) {
                    var col = editItem.col, row = editItem.row, str = editItem.str;
                    var value = this.cellEditRef.current.getValue();
                    var modifySheetData_1 = this.props.modifySheetData;
                    if (modifySheetData_1) {
                        var sheetData = new SheetItem({
                            col: col,
                            row: row,
                            str: value,
                        });
                        modifySheetData_1(sheetData);
                    }
                }
            }
        }
    };
    CellEditLayer.prototype.render = function () {
        var editData = this.props.editData;
        var position = {};
        var defaultValue = '';
        var cellHideStyle;
        var defaultCursor;
        if (editData) {
            var defaultText = editData.defaultText, editItem = editData.editItem, cursor = editData.cursor;
            if (editItem) {
                var row = editItem.row, str = editItem.str;
                defaultCursor = cursor;
                defaultValue = defaultText === undefined ? (str === undefined ? '' : str) : defaultText;
                position = getCellPositionCSS(editItem, -1, -1);
                position.zIndex = 100;
                position.zIndex = 100;
                var maxWidth = (getRowLength() - (row || 0)) * CELL_WIDTH$7 - (HIDE_PADDING.LEFT + HIDE_PADDING.RIGHT) + "px";
                cLog(maxWidth);
                cellHideStyle = __assign(__assign({}, this._cellHideStyle), { maxWidth: maxWidth });
            }
        }
        else {
            if (this._realViewPort) {
                var _a = this._realViewPort || {}, x = _a.x, y = _a.y;
                position.top = y + "px";
                position.left = x + "px";
            }
            position.zIndex = -1000;
        }
        // return editData ? (
        //     <>
        //         <div className={Styles.cell_edit_box} style={position}>
        //             <CellEdit
        //                 ref={this.cellEditRef}
        //                 defaultCursor={defaultCursor}
        //                 defaultValue={defaultValue}
        //                 updateText={this._updateText}
        //             />
        //         </div>
        //         <div className={Styles.cell_edit_box}>
        //             <CellHide
        //                 ref={this.cellHideRef}
        //                 defaultValue={defaultValue}
        //                 position={cellHideStyle}
        //                 updateSize={this._updateSize}
        //             />
        //         </div>
        //     </>
        // ) : (
        //     <></>
        // );
        return (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement(RealViewPortHook, { changeRealViewPort: this._onChangeRealViewPort }),
            React__default['default'].createElement(ModifyDataHook, { changeModifyData: this._onChangeModifyData }),
            React__default['default'].createElement(ClickCountHook, { changeClickCount: this._onChangeClickCount }),
            React__default['default'].createElement(SelectCellHook, { changeSelectCell: this._onChangeSelectCell }),
            React__default['default'].createElement("div", { className: Styles.cell_edit_box, ref: this.cellEditBoxRef, style: position },
                React__default['default'].createElement(CellEdit$1, { ref: this.cellEditRef, defaultCursor: defaultCursor, defaultValue: defaultValue, updateText: this._updateText })),
            React__default['default'].createElement("div", { className: Styles.cell_edit_box, ref: this.cellHideEditBoxRef, style: position },
                React__default['default'].createElement(CellHide$1, { ref: this.cellHideRef, defaultValue: defaultValue, position: cellHideStyle, updateSize: this._updateSize }))));
    };
    return CellEditLayer;
}(React__default['default'].Component));
var mapStateToProps$6 = function (state) { return ({
    editData: state.editor.editData,
}); };
var mapDispatchToProps$6 = function (dispatch) { return ({
    modifySheetData: function (modifyCellItem) { return dispatch(modifySheetData(modifyCellItem)); },
}); };
var CellEditLayer$1 = connect(mapStateToProps$6, mapDispatchToProps$6, null, { forwardRef: true })(CellEditLayer);

var SheetUIContainer = /** @class */ (function (_super) {
    __extends(SheetUIContainer, _super);
    function SheetUIContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this._onMaxCell = function () {
            var _a;
            var maxCellPopup = (((_a = _this.props.option) === null || _a === void 0 ? void 0 : _a.callBack) || {}).maxCellPopup;
            if (maxCellPopup)
                maxCellPopup();
        };
        return _this;
    }
    SheetUIContainer.prototype.componentWillUnmount = function () {
        cLog('[SheetUIContainer] componentWillUnmount');
    };
    SheetUIContainer.prototype.componentWillMount = function () {
        cLog('[SheetUIContainer] componentWillMount');
    };
    SheetUIContainer.prototype.componentDidMount = function () {
        cLog('[SheetUIContainer] componentDidMount');
    };
    SheetUIContainer.prototype.componentDidUpdate = function () {
        cLog('[SheetUIContainer] componentDidUpdate');
    };
    SheetUIContainer.prototype.render = function () {
        var root = this.props.root;
        return (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement(CellSelect, null),
            React__default['default'].createElement(CellDragSelect, null),
            React__default['default'].createElement(CellDashedSelect, null),
            React__default['default'].createElement(CellEditLayer$1, { root: root })));
    };
    return SheetUIContainer;
}(React__default['default'].Component));
// export default SheetContainer;
var mapStateToProps$7 = function (_state) { return ({}); };
var mapDispatchToProps$7 = function (_dispatch) { return ({
// addSheetDatas: (sheetDatas) => dispatch(addSheetDatas(sheetDatas)),
}); };
var SheetUiContainer = connect(mapStateToProps$7, mapDispatchToProps$7, null, { forwardRef: true })(SheetUIContainer);

// eslint-disable-next-line react/display-name
var Scrollbar = React.forwardRef(function (props, ref) {
    var children = props.children, className = props.className, style = props.style, onScroll = props.onScroll;
    var contentRef = React.useRef(null);
    var scrollTrackRef = React.useRef(null);
    var scrollThumbRef = React.useRef(null);
    var scrollTrandAndThumb = React.useRef(null);
    var observer = React.useRef(null);
    var _a = React.useState(20), thumbHeight = _a[0], setThumbHeight = _a[1];
    var _b = React.useState(0), scrollStartPosition = _b[0], setScrollStartPosition = _b[1];
    var _c = React.useState(0), initialScrollTop = _c[0], setInitialScrollTop = _c[1];
    var _d = React.useState(false), isDragging = _d[0], setIsDragging = _d[1];
    var _e = React.useState(true), showScroll = _e[0], setShowScroll = _e[1];
    function handleResize(ref, trackSize) {
        var clientHeight = ref.clientHeight, scrollHeight = ref.scrollHeight;
        if (clientHeight >= scrollHeight) {
            setShowScroll(false);
        }
        setThumbHeight(Math.max((clientHeight / scrollHeight) * trackSize, 20));
    }
    var handleTrackClick = React.useCallback(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var trackCurrent = scrollTrackRef.current;
        var contentCurrent = contentRef.current;
        if (trackCurrent && contentCurrent) {
            var clientY = e.clientY;
            var target = e.target;
            var rect = target.getBoundingClientRect();
            var trackTop = rect.top;
            var thumbOffset = -(thumbHeight / 2);
            var clickRatio = (clientY - trackTop + thumbOffset) / trackCurrent.clientHeight;
            var scrollAmount = Math.floor(clickRatio * contentCurrent.scrollHeight);
            contentCurrent.scrollTo({
                top: scrollAmount,
                behavior: 'smooth',
            });
        }
    }, [thumbHeight]);
    var handleThumbPosition = React.useCallback(function (e) {
        if (!contentRef.current || !scrollTrackRef.current || !scrollThumbRef.current) {
            return;
        }
        var _a = contentRef.current, contentTop = _a.scrollTop, contentHeight = _a.scrollHeight;
        var trackHeight = scrollTrackRef.current.clientHeight;
        var newTop = (+contentTop / +contentHeight) * trackHeight;
        newTop = Math.min(newTop, trackHeight - thumbHeight);
        var thumb = scrollThumbRef.current;
        thumb.style.top = newTop + "px";
        if (scrollTrandAndThumb.current) {
            var top_1 = e.target.scrollTop;
            scrollTrandAndThumb.current.style.top = top_1 + "px";
        }
    }, []);
    var handleThumbMousedown = React.useCallback(function (e) {
        e.preventDefault();
        e.stopPropagation();
        setScrollStartPosition(e.clientY);
        if (contentRef.current)
            setInitialScrollTop(contentRef.current.scrollTop);
        setIsDragging(true);
    }, []);
    var handleThumbMouseup = React.useCallback(function (e) {
        e.preventDefault();
        // e.stopPropagation();
        if (isDragging) {
            setIsDragging(false);
        }
    }, [isDragging]);
    var handleThumbMousemove = React.useCallback(function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (isDragging && contentRef.current) {
            var _a = contentRef.current, contentScrollHeight = _a.scrollHeight, contentOffsetHeight = _a.offsetHeight;
            var deltaY = (e.clientY - scrollStartPosition) * (contentOffsetHeight / thumbHeight);
            var newScrollTop = Math.min(initialScrollTop + deltaY, contentScrollHeight - contentOffsetHeight);
            contentRef.current.scrollTop = newScrollTop;
        }
    }, [isDragging, scrollStartPosition, thumbHeight]);
    // If the content and the scrollbar track exist, use a ResizeObserver to adjust height of thumb and listen for scroll event to move the thumb
    React.useEffect(function () {
        if (contentRef.current && scrollTrackRef.current) {
            var ref_1 = contentRef.current;
            var trackSize_1 = scrollTrackRef.current.clientHeight;
            observer.current = new ResizeObserver(function () {
                handleResize(ref_1, trackSize_1);
            });
            observer.current.observe(ref_1);
            ref_1.addEventListener('scroll', handleThumbPosition);
            return function () {
                var _a;
                (_a = observer.current) === null || _a === void 0 ? void 0 : _a.unobserve(ref_1);
                ref_1.removeEventListener('scroll', handleThumbPosition);
            };
        }
        return undefined;
    }, []);
    // Listen for mouse events to handle scrolling by dragging the thumb
    React.useEffect(function () {
        document.addEventListener('mousemove', handleThumbMousemove);
        document.addEventListener('mouseup', handleThumbMouseup);
        document.addEventListener('mouseleave', handleThumbMouseup);
        return function () {
            document.removeEventListener('mousemove', handleThumbMousemove);
            document.removeEventListener('mouseup', handleThumbMouseup);
            document.removeEventListener('mouseleave', handleThumbMouseup);
        };
    }, [handleThumbMousemove, handleThumbMouseup]);
    return (React__default['default'].createElement("div", { className: Styles.custom_scrollbars__container + " " + className, style: style, ref: function (node) {
            contentRef.current = node;
            if (typeof ref === 'function') {
                ref(node);
            }
            else if (ref) {
                ref.current = node;
            }
        } },
        children,
        showScroll && (React__default['default'].createElement("div", { className: Styles.custom_scrollbars__scrollbar },
            React__default['default'].createElement("div", { className: Styles.custom_scrollbars__track_and_thumb, ref: scrollTrandAndThumb },
                React__default['default'].createElement("div", { className: Styles.custom_scrollbars__track, ref: scrollTrackRef, onClick: handleTrackClick }),
                React__default['default'].createElement("div", { className: Styles.custom_scrollbars__thumb, ref: scrollThumbRef, onMouseDown: handleThumbMousedown, style: {
                        height: thumbHeight + "px",
                        cursor: isDragging ? 'grabbing' : 'grab',
                    } }))))));
});

var _a$5 = config.SHEET_TABLE, TABLE_SHEET_SIZE$7 = _a$5.TABLE_SHEET_SIZE;
var BORDER_SIZE$2 = TABLE_SHEET_SIZE$7.BORDER_SIZE, CELL_WIDTH$8 = TABLE_SHEET_SIZE$7.CELL_WIDTH, TOP_FIELD_HEIGHT$1 = TABLE_SHEET_SIZE$7.TOP_FIELD_HEIGHT;
var ContCellGroup = /** @class */ (function (_super) {
    __extends(ContCellGroup, _super);
    function ContCellGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this._isSynchronizationTop = false;
        _this.synchronizationTop = function (top, target) {
            if (!_this.cellGroupRef.current)
                return;
            if (!target || _this.cellGroupRef.current !== target) {
                _this._isSynchronizationTop = true;
                _this.cellGroupRef.current.scrollTop = top;
            }
        };
        _this.synchronizationScroll = function (left, top) {
            setTimeout(function () {
                if (!_this.cellGroupRef.current || !_this.contCellGroupRef.current)
                    return;
                _this._isSynchronizationTop = true;
                _this.cellGroupRef.current.scrollTop = top;
                _this.contCellGroupRef.current.scrollLeft = left;
            }, 0);
        };
        _this.getRect = function () {
            var _a, _b, _c, _d;
            _this._rect.x = ((_a = _this.contCellGroupRef.current) === null || _a === void 0 ? void 0 : _a.scrollLeft) || 0;
            _this._rect.y = ((_b = _this.cellGroupRef.current) === null || _b === void 0 ? void 0 : _b.scrollTop) || 0;
            _this._rect.width = ((_c = _this.contCellGroupRef.current) === null || _c === void 0 ? void 0 : _c.clientWidth) || 0;
            _this._rect.height = ((_d = _this.cellGroupRef.current) === null || _d === void 0 ? void 0 : _d.clientHeight) || 0;
            return _this._rect;
        };
        _this.updateDevicePixelRatio = function () {
            var _a, _b;
            var fields = _this.props.fields;
            var rows = (fields || {}).rows;
            var width = BORDER_SIZE$2 + CELL_WIDTH$8 * ((rows === null || rows === void 0 ? void 0 : rows.length) || 1) + getDevicePixelRatio();
            if ((_a = _this.cellGroupRef.current) === null || _a === void 0 ? void 0 : _a.style)
                _this.cellGroupRef.current.style.width = width + "px";
            (_b = _this.fieldViewRef.current) === null || _b === void 0 ? void 0 : _b.updateDevicePixelRatio();
        };
        _this._onScroll = function (e) {
            cLog('[ContCellGroup] _onScroll', _this._isSynchronizationTop);
            if (_this._isSynchronizationTop) {
                _this._isSynchronizationTop = false;
                return;
            }
            var _a = _this.props, updateTop = _a.updateTop, updateLeft = _a.updateLeft;
            var target = e.target;
            if (target === _this.cellGroupRef.current) {
                cLog('[ContCellGroup] updateTop');
                if (updateTop)
                    updateTop(e);
            }
            else {
                if (updateLeft)
                    updateLeft(e);
            }
        };
        _this.contCellGroupRef = React__default['default'].createRef();
        _this.cellGroupRef = React__default['default'].createRef();
        _this.fieldViewRef = React__default['default'].createRef();
        _this._rect = { x: 0, y: 0, width: 0, height: 0 };
        return _this;
    }
    ContCellGroup.prototype.componentWillUnmount = function () {
        var _a, _b;
        cLog('[ContCellGroup] componentWillUnmount');
        (_a = this.contCellGroupRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('scroll', this._onScroll);
        (_b = this.cellGroupRef.current) === null || _b === void 0 ? void 0 : _b.removeEventListener('scroll', this._onScroll);
    };
    ContCellGroup.prototype.componentDidMount = function () {
        var _a, _b;
        cLog('[ContCellGroup] componentDidMount');
        (_a = this.contCellGroupRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('scroll', this._onScroll);
        (_b = this.cellGroupRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener('scroll', this._onScroll);
        this.synchronizationTop(0, null);
    };
    ContCellGroup.prototype.componentDidUpdate = function () {
        cLog('[ContCellGroup] componentDidUpdate');
    };
    ContCellGroup.prototype.render = function () {
        var _a = this.props, fields = _a.fields, modifyData = _a.modifyData, viewPort = _a.viewPort, fieldMouseEventMap = _a.fieldMouseEventMap, cellMouseEventMap = _a.cellMouseEventMap, sheetItems = _a.sheetItems, cellHeight = _a.cellHeight, option = _a.option;
        var rows = (fields || {}).rows;
        var width = BORDER_SIZE$2 + CELL_WIDTH$8 * ((rows === null || rows === void 0 ? void 0 : rows.length) || 1) + getDevicePixelRatio();
        var style = { width: width };
        var cellGroupStyle = { width: width, overflowY: 'overlay' };
        var cellStyle = { height: cellHeight };
        var viewPortMaxSize = (viewPort || {}).viewPortMaxSize;
        var height = (viewPortMaxSize || {}).height;
        var contCellGroupStyle = { overflowX: 'overlay' };
        if (cellHeight && height && height > cellHeight) {
            contCellGroupStyle = __assign(__assign({}, contCellGroupStyle), { height: cellHeight + TOP_FIELD_HEIGHT$1 + 16 });
            cellGroupStyle.overflow = 'hidden';
        }
        return (React__default['default'].createElement("div", { className: Styles.cont_cell_group, ref: this.contCellGroupRef, style: contCellGroupStyle },
            React__default['default'].createElement(FieldView$1, { ref: this.fieldViewRef, addStyle: style, className: Styles.top_cell, type: FIELD_TYPE.TOP, fieldDatas: rows, viewPort: viewPort, modifyData: modifyData, mouseEventMap: fieldMouseEventMap }),
            React__default['default'].createElement(Scrollbar, { className: Styles.cell_group, style: cellGroupStyle, ref: this.cellGroupRef },
                React__default['default'].createElement(CellView$1, { addStyle: cellStyle, viewPort: viewPort, sheetItems: sheetItems, modifyData: modifyData, mouseEventMap: cellMouseEventMap }),
                React__default['default'].createElement(SheetUiContainer, { option: option }))));
    };
    return ContCellGroup;
}(React__default['default'].Component));
var mapStateToProps$8 = function (_state) { return ({
// viewPort: state.editor.viewPort,
}); };
var mapDispatchToProps$8 = function (_dispatch) { return ({
// selectCell: (selectCellItem) => dispatch(selectCell(selectCellItem)),
}); };
var ContCellGroup$1 = connect(mapStateToProps$8, mapDispatchToProps$8, null, { forwardRef: true })(ContCellGroup);

var selectCell = editorActions.selectCell, selectStartCell = editorActions.selectStartCell, selectEndCell = editorActions.selectEndCell, fieldSelectCell = editorActions.fieldSelectCell, editorModifyData = editorActions.editorModifyData, setEdit = editorActions.setEdit;
var _a$6 = config.SHEET_TABLE, CELL_OPTION_LAYER_SIZE = _a$6.CELL_OPTION_LAYER_SIZE, TABLE_SHEET_SIZE$8 = _a$6.TABLE_SHEET_SIZE, FIELD_OPTION_LAYER_SIZE = _a$6.FIELD_OPTION_LAYER_SIZE, SHEET_BOX_PADDING$1 = _a$6.SHEET_BOX_PADDING;
var BORDER_SIZE$3 = TABLE_SHEET_SIZE$8.BORDER_SIZE, FIRST_CELL_SIZE = TABLE_SHEET_SIZE$8.FIRST_CELL_SIZE, CELL_WIDTH$9 = TABLE_SHEET_SIZE$8.CELL_WIDTH, CELL_HEIGHT$6 = TABLE_SHEET_SIZE$8.CELL_HEIGHT, TOP_FIELD_HEIGHT$2 = TABLE_SHEET_SIZE$8.TOP_FIELD_HEIGHT, FIELD_OVER_MARGIN = TABLE_SHEET_SIZE$8.FIELD_OVER_MARGIN;
var SHEET_BOX_LEFT_PADDING = SHEET_BOX_PADDING$1.LEFT;
var CELL_OPTION_WIDTH = CELL_OPTION_LAYER_SIZE.WIDTH, CELL_OPTION_HEIGHT_DEFAULT = CELL_OPTION_LAYER_SIZE.HEIGHT_DEFAULT, CELL_OPTION_HEIGHT_ADD = CELL_OPTION_LAYER_SIZE.HEIGHT_ADD;
var FIELD_OPTION_WIDTH = FIELD_OPTION_LAYER_SIZE.WIDTH, FIELD_OPTION_HEIGHT = FIELD_OPTION_LAYER_SIZE.HEIGHT;
var FIELD_POSITION_DIRECTION = {
    LEFT: 0,
    RIGHT: 1,
    TOP: 0,
    BOTTOM: 1,
};
var SheetTableContainer = /** @class */ (function (_super) {
    __extends(SheetTableContainer, _super);
    function SheetTableContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            cellMouseEventMap: {},
            fieldMouseEventMap: {},
            isMouseDown: false,
        };
        _this._outSetTimeOutID = undefined;
        _this._synchronizationTimer = null;
        _this.getRect = function () {
            var _a;
            return (_a = _this.contCellGroupRef.current) === null || _a === void 0 ? void 0 : _a.getRect();
        };
        _this.updateScroll = function (left, top) {
            var _a, _b;
            (_a = _this.contCellGroupRef.current) === null || _a === void 0 ? void 0 : _a.synchronizationScroll(left, top);
            (_b = _this.leftCellGroupRef.current) === null || _b === void 0 ? void 0 : _b.synchronizationScroll(left, top);
        };
        _this.updateDevicePixelRatio = function () {
            var _a;
            (_a = _this.contCellGroupRef.current) === null || _a === void 0 ? void 0 : _a.updateDevicePixelRatio();
        };
        _this._onMouseUP = function () {
            _this.state.isMouseDown = false;
        };
        _this._onFieldDown = function (data, e) {
            var nativeEvent = e.nativeEvent;
            var which = nativeEvent.which;
            if (which === 1) {
                _this._selectFieldCell(data);
                _this._selectModifyCell(undefined, e);
            }
            else if (which === 3) {
                //    this._selectCell(data);
                _this._selectModifyField(data, e);
            }
            else {
                cLog('');
            }
        };
        _this._onFieldOver = function (_data, _e) {
            // cLog('\n mouse over \n');
            // cLog(data);
            clearTimeout(_this._outSetTimeOutID);
        };
        _this._onFieldOut = function (_data, _e) {
            // cLog('\n mouse out \n');
            var editor = StoreManager$1.state.editor;
            var modifyData = editor.modifyData;
            var addEditorModifyData = _this.props.addEditorModifyData;
            if (modifyData && !modifyData.openOption && modifyData.type !== EDITOR_MODIFY_TYPE.CELL) {
                _this._outSetTimeOutID = setTimeout(function () {
                    addEditorModifyData(undefined);
                    cLog('remove');
                }, 100);
            }
            // cLog(data);
        };
        _this._createEditorModifyData = function (data, position) {
            var type = data.type, col = data.col, row = data.row;
            var _a = _this.props.fields || {}, cols = _a.cols, rows = _a.rows;
            var x = position.x, y = position.y, width = position.width, height = position.height, direction = position.direction;
            var positionCSS = { left: x + "px", top: y + "px" };
            if (height)
                positionCSS.height = height + "px";
            if (width)
                positionCSS.width = width + "px";
            var modifyItem;
            if (type === FIELD_TYPE.TOP) {
                if (rows)
                    modifyItem = rows[row + direction];
            }
            else if (type === FIELD_TYPE.LEFT) {
                if (cols)
                    modifyItem = cols[col + direction];
            }
            if (!modifyItem)
                modifyItem = data;
            var editorModifyData = new EditorModifyData();
            editorModifyData.type = EDITOR_MODIFY_TYPE.FIELD;
            editorModifyData.modifyItem = modifyItem;
            editorModifyData.fieldType = type;
            editorModifyData.position = position;
            editorModifyData.positionCSS = positionCSS;
            editorModifyData.isLine = true;
            return editorModifyData;
        };
        _this._onFieldMove = function (data, e) {
            var addEditorModifyData = _this.props.addEditorModifyData;
            var editor = StoreManager$1.state.editor;
            var modifyData = editor.modifyData;
            var editorModifyData;
            if (modifyData) {
                if (modifyData.isLine && !modifyData.openOption) {
                    var position = _this._fieldOverPosition(data, e);
                    if (position) {
                        if (modifyData.position &&
                            modifyData.position.x === position.x &&
                            modifyData.position.y === position.y) ;
                        else {
                            editorModifyData = _this._createEditorModifyData(data, position);
                        }
                    }
                    else {
                        addEditorModifyData(undefined);
                    }
                }
            }
            else {
                // 보여지기;
                var position = _this._fieldOverPosition(data, e);
                if (position) {
                    editorModifyData = _this._createEditorModifyData(data, position);
                    addEditorModifyData(editorModifyData);
                }
            }
            // cLog('mouse move');
            // cLog(offsetX, offsetY);
            // cLog(data);
        };
        _this._onFieldRightClick = function (_data, e) {
            e.preventDefault();
        };
        _this._onCellDobuleClick = function (_data, _e, cursor) {
            cLog('CellDobuleClick');
            var setEdit = _this.props.setEdit;
            if (setEdit)
                setEdit({ cursor: cursor });
        };
        _this._onCellDown = function (data, e) {
            var nativeEvent = e.nativeEvent;
            var which = nativeEvent.which;
            if (which === 1) {
                _this._selectCell(data);
                _this._selectModifyCell(undefined, e);
                _this.state.isMouseDown = true;
            }
            else if (which === 3) {
                var editor = StoreManager$1.state.editor;
                var rect = editor.rect;
                if (rect) {
                    var sc = rect.sc, ec = rect.ec, sr = rect.sr, er = rect.er;
                    var col = data.col, row = data.row;
                    if (col >= sc && col <= ec && row >= sr && row <= er) {
                        _this._selectModifyCell(data, e);
                    }
                    else {
                        _this._selectCell(data);
                        _this._selectModifyCell(data, e);
                    }
                }
                else {
                    _this._selectCell(data);
                    _this._selectModifyCell(data, e);
                }
            }
            else {
                cLog('');
            }
        };
        _this._selectFieldCell = function (data) {
            // cLog(data);
            var col = data.col, row = data.row, type = data.type;
            var sheet = StoreManager$1.state.sheet;
            var sheetItems = sheet.sheetItems;
            var modifyData;
            if (sheetItems) {
                if (type === FIELD_TYPE.TOP) {
                    var colLen = sheetItems.length - 1;
                    if (colLen > -1) {
                        modifyData = new ModifyData();
                        modifyData.start = new FieldItem(sheetItems[0][row]);
                        modifyData.end = new FieldItem(sheetItems[colLen][row]);
                        modifyData.standardItem = data;
                    }
                }
                else if (type === FIELD_TYPE.LEFT) {
                    var rowLen = sheetItems[0].length - 1;
                    if (rowLen > -1) {
                        modifyData = new ModifyData();
                        modifyData.start = new FieldItem(sheetItems[col][0]);
                        modifyData.end = new FieldItem(sheetItems[col][rowLen]);
                        modifyData.standardItem = data;
                    }
                }
            }
            var fieldSelectCell = _this.props.fieldSelectCell;
            if (modifyData && fieldSelectCell) {
                fieldSelectCell(modifyData);
            }
        };
        _this._selectModifyField = function (data, e) {
            var _a, _b;
            var addEditorModifyData = _this.props.addEditorModifyData;
            var editorModifyData;
            if (data) {
                var nativeEvent = e.nativeEvent;
                var offsetX = nativeEvent.offsetX, offsetY = nativeEvent.offsetY;
                var left = 0;
                var top_1 = 0;
                var editor = StoreManager$1.state.editor;
                var realViewPort = editor.realViewPort;
                var scrollLeft = 0;
                var scrollTop = 0;
                var viewPortWidth = 0;
                var viewPortHeight = 0;
                if (realViewPort) {
                    scrollLeft = realViewPort.x;
                    scrollTop = realViewPort.y;
                    viewPortWidth = ((_a = realViewPort.viewPortMaxSize) === null || _a === void 0 ? void 0 : _a.width) || realViewPort.width;
                    viewPortHeight = ((_b = realViewPort.viewPortMaxSize) === null || _b === void 0 ? void 0 : _b.height) || realViewPort.height;
                }
                var col = data.col, row = data.row, type = data.type;
                if (type === FIELD_TYPE.TOP) {
                    left = SHEET_BOX_LEFT_PADDING + FIRST_CELL_SIZE + CELL_WIDTH$9 * (row || 0) + offsetX - scrollLeft;
                    top_1 = offsetY;
                }
                else {
                    left = SHEET_BOX_LEFT_PADDING + offsetX;
                    top_1 = TOP_FIELD_HEIGHT$2 + CELL_HEIGHT$6 * (col || 0) + offsetY;
                }
                var maxX = SHEET_BOX_LEFT_PADDING + FIRST_CELL_SIZE + viewPortWidth;
                var maxY = TOP_FIELD_HEIGHT$2 + viewPortHeight;
                var optionMaxX = left + FIELD_OPTION_WIDTH;
                var optionMaxY = top_1 + FIELD_OPTION_HEIGHT;
                if (maxX < optionMaxX)
                    left += maxX - optionMaxX;
                if (maxY < optionMaxY)
                    top_1 += maxY - optionMaxY;
                var position = { x: left, y: top_1 };
                var positionCSS = { left: left + "px", top: top_1 + "px" };
                editorModifyData = new EditorModifyData();
                editorModifyData.type = EDITOR_MODIFY_TYPE.FIELD;
                editorModifyData.fieldType = type;
                editorModifyData.modifyItem = data;
                editorModifyData.position = position;
                editorModifyData.positionCSS = positionCSS;
                editorModifyData.openOption = true;
            }
            addEditorModifyData(editorModifyData);
        };
        _this._selectModifyCell = function (data, e) {
            var _a, _b;
            var addEditorModifyData = _this.props.addEditorModifyData;
            var editorModifyData;
            if (data) {
                // const { nativeEvent } = e;
                // const { offsetX, offsetY } = nativeEvent;
                // const { col, row } = data;
                // let left = CELL_WIDTH * (row || 0) + offsetX;
                // let top = CELL_HEIGHT * (col || 0) + offsetY;
                // const { editor } = StoreManager.state;
                // const { modifyRect, realViewPort } = editor;
                // if (realViewPort) {
                //     const { x, y, width, height } = realViewPort;
                //     const maxX = x + width;
                //     const maxY = y + height;
                //     const optionMaxX = left + CELL_OPTION_WIDTH;
                //     const optionMaxY = top + CELL_OPTION_HEIGHT_DEFAULT + (modifyRect ? CELL_OPTION_HEIGHT_ADD : 0);
                //     if (maxX < optionMaxX) left += maxX - optionMaxX;
                //     if (maxY < optionMaxY) top += maxY - optionMaxY;
                // }
                // const position = { x: left, y: top };
                // const positionCSS = { left: `${left}px`, top: `${top}px`, width: '120px' };
                var nativeEvent = e.nativeEvent;
                var offsetX = nativeEvent.offsetX, offsetY = nativeEvent.offsetY;
                var left = 0;
                var top_2 = 0;
                var editor = StoreManager$1.state.editor;
                var modifyRect = editor.modifyRect, realViewPort = editor.realViewPort;
                var scrollLeft = 0;
                var scrollTop = 0;
                var viewPortWidth = 0;
                var viewPortHeight = 0;
                if (realViewPort) {
                    scrollLeft = realViewPort.x;
                    scrollTop = realViewPort.y;
                    viewPortWidth = ((_a = realViewPort.viewPortMaxSize) === null || _a === void 0 ? void 0 : _a.width) || realViewPort.width;
                    viewPortHeight = ((_b = realViewPort.viewPortMaxSize) === null || _b === void 0 ? void 0 : _b.height) || realViewPort.height;
                }
                var col = data.col, row = data.row;
                left = SHEET_BOX_LEFT_PADDING + FIRST_CELL_SIZE + CELL_WIDTH$9 * (row || 0) + offsetX - scrollLeft;
                top_2 = TOP_FIELD_HEIGHT$2 + CELL_HEIGHT$6 * (col || 0) + offsetY - scrollTop;
                var maxX = SHEET_BOX_LEFT_PADDING + FIRST_CELL_SIZE + viewPortWidth;
                var maxY = TOP_FIELD_HEIGHT$2 + viewPortHeight;
                var optionMaxX = left + CELL_OPTION_WIDTH - (SHEET_BOX_LEFT_PADDING >> 1);
                var optionMaxY = top_2 + CELL_OPTION_HEIGHT_DEFAULT + (modifyRect ? CELL_OPTION_HEIGHT_ADD : 0);
                if (maxX < optionMaxX)
                    left += maxX - optionMaxX;
                if (maxY < optionMaxY)
                    top_2 += maxY - optionMaxY;
                var position = { x: left, y: top_2 };
                var positionCSS = { left: left + "px", top: top_2 + "px" };
                editorModifyData = new EditorModifyData();
                editorModifyData.type = EDITOR_MODIFY_TYPE.CELL;
                editorModifyData.modifyItem = data;
                editorModifyData.position = position;
                editorModifyData.positionCSS = positionCSS;
            }
            addEditorModifyData(editorModifyData);
        };
        _this._selectCell = function (data) {
            var selectCell = _this.props.selectCell;
            if (selectCell)
                selectCell({ selectCell: data });
        };
        _this._onCellOver = function (data) {
            if (_this.state.isMouseDown) {
                var selectEndCell_1 = _this.props.selectEndCell;
                if (selectEndCell_1)
                    selectEndCell_1(data);
            }
        };
        _this._onCellRightClick = function (_data, e) {
            e.preventDefault();
        };
        _this._onChangeEditorModifyData = function (editorModifyData) {
            if (editorModifyData) {
                var openOption = editorModifyData.openOption, modifyItem = editorModifyData.modifyItem, over = editorModifyData.over;
                if (openOption)
                    _this._selectFieldCell(modifyItem);
                if (over)
                    clearTimeout(_this._outSetTimeOutID);
            }
        };
        _this._updateTop = function (e) {
            _this._lastUpdateTopEvent = e;
            _this._synchronizationTop();
            var updateViewport = _this.props.updateViewport;
            if (updateViewport)
                updateViewport();
            if (_this._synchronizationTimer)
                clearTimeout(_this._synchronizationTimer);
            _this._synchronizationTimer = setTimeout(_this._synchronizationTop, 200);
        };
        _this._synchronizationTop = function () {
            var _a, _b;
            if (_this._lastUpdateTopEvent) {
                var target = _this._lastUpdateTopEvent.target;
                var top_3 = target.scrollTop;
                (_a = _this.contCellGroupRef.current) === null || _a === void 0 ? void 0 : _a.synchronizationTop(top_3, target);
                (_b = _this.leftCellGroupRef.current) === null || _b === void 0 ? void 0 : _b.synchronizationTop(top_3, target);
            }
        };
        _this._updateLeft = function (_e) {
            var updateViewport = _this.props.updateViewport;
            if (updateViewport)
                updateViewport();
        };
        _this._updateCheck = function (width, height) {
            var _a = _this.props, updateViewport = _a.updateViewport, modifyData = _a.modifyData, viewPort = _a.viewPort;
            var _b = modifyData || {}, addColCnt = _b.addColCnt, addRowCnt = _b.addRowCnt, type = _b.type, fieldType = _b.fieldType;
            if (addColCnt || addRowCnt)
                updateViewport();
            if (type === MODIFY_TYPE.ADD) {
                var rootSize = (viewPort || {}).rootSize;
                var _c = rootSize || {}, viewPortWidth = _c.width, viewPortHeight = _c.height;
                if (fieldType === FIELD_TYPE.TOP && width < (viewPortWidth || 0))
                    updateViewport();
                if (fieldType === FIELD_TYPE.LEFT && height < (viewPortHeight || 0))
                    updateViewport();
            }
        };
        var fieldMouseEventMap = {
            rightClick: function (_data, e) {
                e.preventDefault();
            },
        };
        var cellMouseEventMap = {
            rightClick: function (_data, e) {
                e.preventDefault();
            },
        };
        if (props.option) {
            var type = props.option.type;
            if (type === SheetOptionType.EDITOR) {
                fieldMouseEventMap = {
                    down: _this._onFieldDown,
                    over: _this._onFieldOver,
                    out: _this._onFieldOut,
                    move: _this._onFieldMove,
                    rightClick: _this._onFieldRightClick,
                };
                cellMouseEventMap = {
                    dobuleClick: _this._onCellDobuleClick,
                    down: _this._onCellDown,
                    over: _this._onCellOver,
                    rightClick: _this._onCellRightClick,
                };
            }
        }
        _this.state.cellMouseEventMap = cellMouseEventMap;
        _this.state.fieldMouseEventMap = fieldMouseEventMap;
        _this.contCellGroupRef = React__default['default'].createRef();
        _this.leftCellGroupRef = React__default['default'].createRef();
        window.addEventListener('mouseup', _this._onMouseUP);
        return _this;
    }
    SheetTableContainer.prototype.componentWillUnmount = function () {
        cLog('[SheetTableContainer] componentWillUnmount');
        window.removeEventListener('mouseup', this._onMouseUP);
    };
    SheetTableContainer.prototype.componentDidMount = function () {
        cLog('[SheetTableContainer] componentDidMount');
    };
    SheetTableContainer.prototype.componentDidUpdate = function () {
        cLog('[SheetTableContainer] componentDidUpdate');
    };
    SheetTableContainer.prototype._fieldOverPosition = function (data, e) {
        var col = data.col, row = data.row, type = data.type;
        var nativeEvent = e.nativeEvent;
        var offsetX = nativeEvent.offsetX, offsetY = nativeEvent.offsetY;
        var position = { x: 0, y: 0 };
        var fields = this.props.fields;
        var _a = fields || {}, cols = _a.cols, rows = _a.rows;
        var rowLen = (rows === null || rows === void 0 ? void 0 : rows.length) || 1;
        var colLen = (cols === null || cols === void 0 ? void 0 : cols.length) || 1;
        var editor = StoreManager$1.state.editor;
        var realViewPort = editor.realViewPort;
        var scrollLeft = 0;
        var scrollTop = 0;
        var viewPortWidth = CELL_WIDTH$9 * rowLen;
        var viewPortHeight = CELL_HEIGHT$6 * colLen;
        if (realViewPort) {
            scrollLeft = realViewPort.x;
            scrollTop = realViewPort.y;
            viewPortWidth = realViewPort.width;
            viewPortHeight = realViewPort.height;
        }
        if (type === FIELD_TYPE.TOP) {
            var rowIndex = row || 0;
            if (FIELD_OVER_MARGIN >= offsetX) {
                // 왼쪽
                position.x = SHEET_BOX_LEFT_PADDING + FIRST_CELL_SIZE + CELL_WIDTH$9 * rowIndex - scrollLeft;
                position.height = TOP_FIELD_HEIGHT$2 + viewPortHeight;
                position.direction = FIELD_POSITION_DIRECTION.LEFT;
            }
            else if (CELL_WIDTH$9 - FIELD_OVER_MARGIN <= offsetX) {
                // 오른쪽
                if (rowIndex === rowLen - 1)
                    return null;
                position.x = SHEET_BOX_LEFT_PADDING + FIRST_CELL_SIZE + CELL_WIDTH$9 * (rowIndex + 1) - scrollLeft;
                position.height = TOP_FIELD_HEIGHT$2 + viewPortHeight;
                position.direction = FIELD_POSITION_DIRECTION.RIGHT;
            }
            else {
                position = null;
            }
        }
        else {
            var colIndex = col || 0;
            position.x = SHEET_BOX_LEFT_PADDING;
            if (FIELD_OVER_MARGIN >= offsetY) {
                // 위
                position.y = TOP_FIELD_HEIGHT$2 + CELL_HEIGHT$6 * colIndex - scrollTop;
                position.width = FIRST_CELL_SIZE + viewPortWidth;
                position.direction = FIELD_POSITION_DIRECTION.TOP;
            }
            else if (CELL_HEIGHT$6 - FIELD_OVER_MARGIN <= offsetY) {
                // 아래
                if (colIndex === colLen - 1)
                    return null;
                position.y = TOP_FIELD_HEIGHT$2 + CELL_HEIGHT$6 * (colIndex + 1) - scrollTop;
                position.width = FIRST_CELL_SIZE + viewPortWidth;
                position.direction = FIELD_POSITION_DIRECTION.BOTTOM;
            }
            else {
                position = null;
            }
        }
        return position;
    };
    SheetTableContainer.prototype.render = function () {
        var _a = this.state, cellMouseEventMap = _a.cellMouseEventMap, fieldMouseEventMap = _a.fieldMouseEventMap;
        var _b = this.props, sheetItems = _b.sheetItems, fields = _b.fields, modifyData = _b.modifyData, viewPort = _b.viewPort, option = _b.option;
        var _c = fields || {}, cols = _c.cols, rows = _c.rows;
        var height = CELL_HEIGHT$6 * ((cols === null || cols === void 0 ? void 0 : cols.length) || 1);
        var width = BORDER_SIZE$3 + CELL_WIDTH$9 * ((rows === null || rows === void 0 ? void 0 : rows.length) || 1) + getDevicePixelRatio();
        this._updateCheck(width, height);
        /* 테이블 시트 */
        return (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement(FieldOptionLayerObserver, { changeEditorModifyData: this._onChangeEditorModifyData }),
            React__default['default'].createElement(LeftCellGroup$1, { ref: this.leftCellGroupRef, cellHeight: height, fields: fields, viewPort: viewPort, modifyData: modifyData, fieldMouseEventMap: fieldMouseEventMap, updateTop: this._updateTop }),
            React__default['default'].createElement(ContCellGroup$1, { ref: this.contCellGroupRef, option: option, cellHeight: height, fields: fields, viewPort: viewPort, sheetItems: sheetItems, modifyData: modifyData, fieldMouseEventMap: fieldMouseEventMap, cellMouseEventMap: cellMouseEventMap, updateTop: this._updateTop, updateLeft: this._updateLeft })));
    };
    return SheetTableContainer;
}(React__default['default'].Component));
var mapStateToProps$9 = function (state) { return ({
    sheetItems: state.sheet.sheetItems,
    fields: state.sheet.fields,
    modifyData: state.sheet.modifyData,
    viewPort: state.editor.viewPort,
}); };
var mapDispatchToProps$9 = function (dispatch) { return ({
    selectCell: function (selectCellItem) { return dispatch(selectCell(selectCellItem)); },
    selectStartCell: function (selectCellItem) { return dispatch(selectStartCell(selectCellItem)); },
    selectEndCell: function (selectCellItem) { return dispatch(selectEndCell(selectCellItem)); },
    fieldSelectCell: function (modifyData) { return dispatch(fieldSelectCell(modifyData)); },
    addEditorModifyData: function (eModifyData) { return dispatch(editorModifyData(eModifyData)); },
    setEdit: function (editorData) { return dispatch(setEdit(editorData)); },
}); };
var SheetTableContainer$1 = connect(mapStateToProps$9, mapDispatchToProps$9, null, { forwardRef: true })(SheetTableContainer);

var MODIFY_RECT_TYPE;
(function (MODIFY_RECT_TYPE) {
    MODIFY_RECT_TYPE["COPY"] = "MODIFY_RECT_TYPE_COPY";
    MODIFY_RECT_TYPE["CUT"] = "MODIFY_RECT_TYPE_CUT";
})(MODIFY_RECT_TYPE || (MODIFY_RECT_TYPE = {}));

var editorModifyData$1 = editorActions.editorModifyData, modifyRect = editorActions.modifyRect;
var copyCell = sheetActions.copyCell, deleteCell = sheetActions.deleteCell, cutCell = sheetActions.cutCell;
var CellOptionLayer = /** @class */ (function (_super) {
    __extends(CellOptionLayer, _super);
    function CellOptionLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this._onContextMenu = function (e) {
            e.preventDefault();
        };
        _this._onCopy = function (e) {
            e.preventDefault();
            cLog('COPY');
            var _a = _this.props, setModifyRect = _a.setModifyRect, addEditorModifyData = _a.addEditorModifyData;
            setModifyRect(MODIFY_RECT_TYPE.COPY);
            addEditorModifyData(undefined);
        };
        _this._onCut = function (e) {
            e.preventDefault();
            cLog('CUT');
            var _a = _this.props, setModifyRect = _a.setModifyRect, addEditorModifyData = _a.addEditorModifyData;
            setModifyRect(MODIFY_RECT_TYPE.CUT);
            addEditorModifyData(undefined);
        };
        _this._onPaste = function (e) {
            e.preventDefault();
            cLog('PASTE');
            var _a = _this.props, setModifyRect = _a.setModifyRect, addEditorModifyData = _a.addEditorModifyData, copyCell = _a.copyCell, cutCell = _a.cutCell, modifyRect = _a.modifyRect;
            if (modifyRect) {
                var sc = modifyRect.sc, ec = modifyRect.ec, sr = modifyRect.sr, er = modifyRect.er, type = modifyRect.type;
                var _b = StoreManager$1.state.editor, rect = _b.rect, selectCell = _b.selectCell;
                var start = { col: sc, row: sr };
                var end = { col: ec, row: er };
                var modify = void 0;
                if (rect) {
                    var col_1 = rect.sc, row_1 = rect.sr;
                    modify = { col: col_1, row: row_1 };
                }
                else if (selectCell) {
                    modify = { col: selectCell.col, row: selectCell.row };
                }
                var col = 0;
                var row = 0;
                var modifyCol = modify.col + (ec - sc);
                var modifyRow = modify.row + (er - sr);
                var sheetItems = StoreManager$1.state.sheet.sheetItems;
                if (sheetItems) {
                    col = sheetItems.length;
                    row = col ? sheetItems[0].length : 0;
                }
                var resultColLen = Math.max(col, modifyCol + 1);
                var resultRowLen = Math.max(row, modifyRow + 1);
                if (resultColLen * resultRowLen > config.MAX_CELL) {
                    var onMaxCell = _this.props.onMaxCell;
                    if (onMaxCell)
                        onMaxCell();
                }
                else if (modify) {
                    var modifyData = new ModifyData();
                    modifyData.start = start;
                    modifyData.end = end;
                    modifyData.modifyItem = modify;
                    if (type === MODIFY_RECT_TYPE.COPY) {
                        modifyData.type = MODIFY_TYPE.COPY;
                        copyCell(modifyData);
                    }
                    else if (type === MODIFY_RECT_TYPE.CUT) {
                        modifyData.type = MODIFY_TYPE.CUT;
                        cutCell(modifyData);
                    }
                    setModifyRect(undefined);
                }
                addEditorModifyData(undefined);
            }
        };
        _this._onDelete = function (e) {
            e.preventDefault();
            cLog('DELETE');
            var _a = _this.props, deleteCell = _a.deleteCell, addEditorModifyData = _a.addEditorModifyData, setModifyRect = _a.setModifyRect;
            var modifyData = new ModifyData();
            modifyData.type = MODIFY_TYPE.DELETE;
            var _b = StoreManager$1.state.editor, rect = _b.rect, selectCell = _b.selectCell;
            if (rect) {
                var sc = rect.sc, ec = rect.ec, sr = rect.sr, er = rect.er;
                modifyData.start = { col: sc, row: sr };
                modifyData.end = { col: ec, row: er };
            }
            else if (selectCell) {
                modifyData.start = selectCell;
                modifyData.end = selectCell;
            }
            else {
                modifyData = null;
            }
            if (modifyData) {
                addEditorModifyData(undefined);
                deleteCell(modifyData);
            }
            setModifyRect(undefined);
        };
        return _this;
    }
    CellOptionLayer.prototype.componentWillUnmount = function () { };
    CellOptionLayer.prototype.componentWillMount = function () { };
    CellOptionLayer.prototype.componentDidMount = function () { };
    CellOptionLayer.prototype.componentDidUpdate = function () {
        cLog('[CellOptionLayer] componentDidUpdate');
    };
    CellOptionLayer.prototype.render = function () {
        var _a = this.props, modifyData = _a.modifyData, modifyRect = _a.modifyRect;
        var position = {};
        var isShow;
        if (modifyData) {
            var positionCSS = modifyData.positionCSS, type = modifyData.type;
            position = positionCSS || {};
            isShow = type === EDITOR_MODIFY_TYPE.CELL;
        }
        return modifyData && isShow ? (React__default['default'].createElement("div", { className: Styles.cell_layer, style: position, onContextMenu: this._onContextMenu },
            React__default['default'].createElement("ul", null,
                React__default['default'].createElement("li", null,
                    React__default['default'].createElement("a", { href: "/", className: Styles.link, onClick: this._onCut }, config.LANGUAGE.cut)),
                React__default['default'].createElement("li", null,
                    React__default['default'].createElement("a", { href: "/", className: Styles.link, onClick: this._onCopy }, config.LANGUAGE.copy)),
                modifyRect ? (React__default['default'].createElement("li", null,
                    React__default['default'].createElement("a", { href: "/", className: Styles.link, onClick: this._onPaste }, config.LANGUAGE.paste))) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
                React__default['default'].createElement("li", null,
                    React__default['default'].createElement("a", { href: "/", className: Styles.link, onClick: this._onDelete }, config.LANGUAGE.delete))))) : (React__default['default'].createElement(React__default['default'].Fragment, null));
    };
    return CellOptionLayer;
}(React__default['default'].Component));
var mapStateToProps$a = function (state) { return ({
    modifyData: state.editor.modifyData,
    modifyRect: state.editor.modifyRect,
}); };
var mapDispatchToProps$a = function (dispatch) { return ({
    addEditorModifyData: function (eModifyData) { return dispatch(editorModifyData$1(eModifyData)); },
    copyCell: function (modifyCell) { return dispatch(copyCell(modifyCell)); },
    deleteCell: function (modifyCell) { return dispatch(deleteCell(modifyCell)); },
    cutCell: function (modifyCell) { return dispatch(cutCell(modifyCell)); },
    setModifyRect: function (modifyCell) { return dispatch(modifyRect(modifyCell)); },
}); };
var CellOptionLayer$1 = connect(mapStateToProps$a, mapDispatchToProps$a, null, { forwardRef: true })(CellOptionLayer);

var FieldOption = /** @class */ (function (_super) {
    __extends(FieldOption, _super);
    function FieldOption() {
        var _a;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            openLine: false,
        };
        _this._textMap = (_a = {},
            _a[FIELD_TYPE.TOP] = {
                addFirst: 'addLeftRow',
                addSecond: 'addRightRow',
                remove: 'deleteRow',
            },
            _a[FIELD_TYPE.LEFT] = {
                addFirst: 'addUpCol',
                addSecond: 'addDownCol',
                remove: 'deleteCol',
            },
            _a);
        return _this;
    }
    FieldOption.prototype.componentWillUnmount = function () { };
    FieldOption.prototype.componentWillMount = function () { };
    FieldOption.prototype.componentDidMount = function () { };
    FieldOption.prototype.componentDidUpdate = function () {
        cLog('[FieldOption] componentDidUpdate');
    };
    FieldOption.prototype.render = function () {
        var _a = this.props, fieldType = _a.fieldType, styleOption = _a.styleOption, mouseEventMap = _a.mouseEventMap;
        var textMap = this._textMap[fieldType || ''] || {};
        var _b = mouseEventMap || {}, addFirstClick = _b.addFirstClick, addSecondClick = _b.addSecondClick, removeClick = _b.removeClick;
        var languageMap = config.LANGUAGE;
        // {/* 열 추가 하기 */}
        return (React__default['default'].createElement("div", { className: Styles.cell_layer, style: styleOption },
            React__default['default'].createElement("ul", null,
                React__default['default'].createElement("li", null,
                    React__default['default'].createElement("a", { href: "/", className: Styles.link, onClick: addFirstClick }, languageMap[textMap.addFirst || ''])),
                React__default['default'].createElement("li", null,
                    React__default['default'].createElement("a", { href: "/", className: Styles.link, onClick: addSecondClick }, languageMap[textMap.addSecond || ''])),
                React__default['default'].createElement("li", null,
                    React__default['default'].createElement("a", { href: "/", className: Styles.link, onClick: removeClick }, languageMap[textMap.remove || ''])))));
    };
    return FieldOption;
}(React__default['default'].Component));

var editorModifyData$2 = editorActions.editorModifyData, fieldSelectCell$1 = editorActions.fieldSelectCell, modifyRect$1 = editorActions.modifyRect;
var modifyRowCell = sheetActions.modifyRowCell, modifyColCell = sheetActions.modifyColCell;
var _a$7 = config.SHEET_TABLE, TABLE_SHEET_SIZE$9 = _a$7.TABLE_SHEET_SIZE, FIELD_OPTION_LAYER_SIZE$1 = _a$7.FIELD_OPTION_LAYER_SIZE;
var FIELD_OPTION_WIDTH$1 = FIELD_OPTION_LAYER_SIZE$1.WIDTH, FIELD_OPTION_HEIGHT$1 = FIELD_OPTION_LAYER_SIZE$1.HEIGHT;
var FIRST_CELL_SIZE$1 = TABLE_SHEET_SIZE$9.FIRST_CELL_SIZE, TOP_FIELD_HEIGHT$3 = TABLE_SHEET_SIZE$9.TOP_FIELD_HEIGHT, CELL_WIDTH$a = TABLE_SHEET_SIZE$9.CELL_WIDTH, CELL_HEIGHT$7 = TABLE_SHEET_SIZE$9.CELL_HEIGHT;
var ADD_ROW_TYPE;
(function (ADD_ROW_TYPE) {
    ADD_ROW_TYPE["PREV"] = "prev";
    ADD_ROW_TYPE["NEXT"] = "next";
})(ADD_ROW_TYPE || (ADD_ROW_TYPE = {}));
var FieldOptionLayer = /** @class */ (function (_super) {
    __extends(FieldOptionLayer, _super);
    function FieldOptionLayer(props) {
        var _a, _b, _c;
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this._textMap = (_a = {},
            _a[FIELD_TYPE.TOP] = {
                blind: '열 추가하기',
            },
            _a[FIELD_TYPE.LEFT] = {
                blind: '행 추가하기',
            },
            _a);
        _this._layerPosition = (_b = {},
            _b[FIELD_TYPE.TOP] = {
                width: '164px',
            },
            _b[FIELD_TYPE.LEFT] = {
                width: '164px',
            },
            _b);
        _this._layerOpenPosition = (_c = {},
            _c[FIELD_TYPE.TOP] = {
                left: 8,
                top: 24,
                width: '164px',
            },
            _c[FIELD_TYPE.LEFT] = {
                left: 35,
                top: 8,
                width: '164px',
            },
            _c);
        _this._mouseMap = {};
        _this._isAddField = function (fieldType) {
            var fields = StoreManager$1.state.sheet.fields;
            var cols = fields.cols, rows = fields.rows;
            var rowLen = (rows === null || rows === void 0 ? void 0 : rows.length) || 0;
            var colLen = (cols === null || cols === void 0 ? void 0 : cols.length) || 0;
            if (fieldType === FIELD_TYPE.TOP) {
                rowLen += 1;
            }
            else {
                colLen += 1;
            }
            if (rowLen * colLen > config.MAX_CELL) {
                var onMaxCell = _this.props.onMaxCell;
                if (onMaxCell)
                    onMaxCell();
                return false;
            }
            return true;
        };
        _this._isRemoveField = function (fieldType) {
            var fields = StoreManager$1.state.sheet.fields;
            var cols = fields.cols, rows = fields.rows;
            var checkItem = (fieldType === FIELD_TYPE.TOP ? rows : cols) || [];
            if (checkItem.length <= 1) {
                var onMinCell = _this.props.onMinCell;
                if (onMinCell)
                    onMinCell();
                return false;
            }
            return true;
        };
        _this._modifyField = function (type, modifyType) {
            var _a = _this.props, onColumnEdit = _a.onColumnEdit, onRowEdit = _a.onRowEdit, modifyData = _a.modifyData, modifyRowCell = _a.modifyRowCell, modifyColCell = _a.modifyColCell, addEditorModifyData = _a.addEditorModifyData, fieldSelectCell = _a.fieldSelectCell, modifyRect = _a.modifyRect;
            if (modifyData) {
                var fieldItem = modifyData.modifyItem;
                if (fieldItem !== undefined) {
                    var row = fieldItem.row, col = fieldItem.col, fieldType = fieldItem.type;
                    var mData = new ModifyData();
                    mData.type = modifyType;
                    mData.fieldType = fieldType;
                    var fields = StoreManager$1.state.sheet.fields;
                    var cols = fields.cols, rows = fields.rows;
                    var rowLen = (rows === null || rows === void 0 ? void 0 : rows.length) || 0;
                    var colLen = (cols === null || cols === void 0 ? void 0 : cols.length) || 0;
                    var rowLastIndex = rowLen - 1;
                    var colLastIndex = colLen - 1;
                    if (modifyType === MODIFY_TYPE.REMOVE && !_this._isRemoveField(fieldType)) {
                        addEditorModifyData(undefined);
                        return;
                    }
                    if (modifyType === MODIFY_TYPE.REMOVE) {
                        if (fieldType === FIELD_TYPE.TOP) {
                            if (row === rowLastIndex)
                                fieldSelectCell(undefined);
                        }
                        else {
                            if (col === colLastIndex)
                                fieldSelectCell(undefined);
                        }
                        modifyRect(undefined);
                    }
                    addEditorModifyData(undefined);
                    if (modifyType === MODIFY_TYPE.ADD && !_this._isAddField(fieldType)) {
                        return;
                    }
                    if (fieldType === FIELD_TYPE.TOP) {
                        mData.index = (row || 0) + (type === ADD_ROW_TYPE.PREV ? 0 : 1);
                        modifyRowCell(mData);
                        if (onColumnEdit)
                            onColumnEdit(mData);
                    }
                    else {
                        mData.index = (col || 0) + (type === ADD_ROW_TYPE.PREV ? 0 : 1);
                        modifyColCell(mData);
                        if (onRowEdit)
                            onRowEdit(mData);
                    }
                }
            }
        };
        _this._onAddFirstClick = function (e) {
            e.preventDefault();
            _this._modifyField(ADD_ROW_TYPE.PREV, MODIFY_TYPE.ADD);
        };
        _this._onAddSecondClick = function (e) {
            e.preventDefault();
            _this._modifyField(ADD_ROW_TYPE.NEXT, MODIFY_TYPE.ADD);
        };
        _this._onRemoveClick = function (e) {
            e.preventDefault();
            _this._modifyField(ADD_ROW_TYPE.PREV, MODIFY_TYPE.REMOVE);
            cLog('_onRemoveClick');
        };
        _this._onContextMenu = function (e) {
            e.preventDefault();
        };
        _this._onFieldOptionOpen = function (e) {
            e.preventDefault();
            var editor = StoreManager$1.state.editor;
            if (editor.editData) {
                var completeEdit = _this.props.completeEdit;
                if (completeEdit)
                    completeEdit();
            }
            _this._modifyField(ADD_ROW_TYPE.PREV, MODIFY_TYPE.ADD);
            // const { addEditorModifyData, modifyData } = this.props;
            // if (modifyData) {
            //     const editorModifyData = modifyData.clone();
            //     editorModifyData.openOption = true;
            //     if (addEditorModifyData) addEditorModifyData(editorModifyData);
            // }
        };
        _this._onAddFieldOptionOver = function (_e) {
            cLog('_onAddFieldOptionOver');
            var _a = _this.props, addEditorModifyData = _a.addEditorModifyData, modifyData = _a.modifyData;
            if (modifyData) {
                var editorModifyData_1 = modifyData.clone();
                editorModifyData_1.over = true;
                if (addEditorModifyData)
                    addEditorModifyData(editorModifyData_1);
            }
        };
        _this._onAddFieldOptionOut = function (_e) {
            cLog('_onAddFieldOptionOut');
        };
        _this._mouseMap = {
            addFirstClick: _this._onAddFirstClick,
            addSecondClick: _this._onAddSecondClick,
            removeClick: _this._onRemoveClick,
        };
        return _this;
    }
    FieldOptionLayer.prototype.componentWillUnmount = function () { };
    FieldOptionLayer.prototype.componentWillMount = function () { };
    FieldOptionLayer.prototype.componentDidMount = function () { };
    FieldOptionLayer.prototype.componentDidUpdate = function () {
        cLog('[CellOptionLayer] componentDidUpdate');
    };
    FieldOptionLayer.prototype.render = function () {
        var modifyData = this.props.modifyData;
        var optionPosition = {
            zIndex: 120,
        };
        var linePosition = {};
        var isShow;
        var fieldType;
        var textMap = {};
        var useLine;
        var isOptionOpen;
        var layerOpenPosition = {};
        if (modifyData) {
            var positionCSS = modifyData.positionCSS, type = modifyData.type, isLine = modifyData.isLine, openOption = modifyData.openOption, position = modifyData.position;
            fieldType = modifyData.fieldType;
            var _a = positionCSS || {}, left = _a.left, top_1 = _a.top;
            var _b = position || {}, pWidth = _b.width, pHeight = _b.height;
            if (left)
                optionPosition.left = left;
            if (top_1)
                optionPosition.top = top_1;
            var sheet = StoreManager$1.state.sheet;
            var fields = sheet.fields;
            var cols = fields.cols, rows = fields.rows;
            if (pWidth) {
                var lineWidth = (rows || []).length * CELL_WIDTH$a + FIRST_CELL_SIZE$1 || 0;
                if (lineWidth > pWidth)
                    lineWidth = pWidth;
                linePosition.width = lineWidth;
            }
            if (pHeight) {
                var lineHeight = (cols || []).length * CELL_HEIGHT$7 + TOP_FIELD_HEIGHT$3 || 0;
                if (lineHeight > pHeight)
                    lineHeight = pHeight;
                linePosition.height = lineHeight;
            }
            isShow = type === EDITOR_MODIFY_TYPE.FIELD;
            textMap = this._textMap[fieldType || ''] || {};
            useLine = isLine;
            isOptionOpen = openOption;
            if (openOption) {
                var editor = StoreManager$1.state.editor;
                var realViewPort = editor.realViewPort;
                if (realViewPort && position) {
                    var openPosition = this._layerOpenPosition[fieldType];
                    var left_1 = openPosition.left;
                    var top_2 = openPosition.top;
                    var x = realViewPort.x, y = realViewPort.y, width = realViewPort.width, height = realViewPort.height;
                    var maxX = x + width;
                    var maxY = y + height;
                    var optionMaxX = left_1 + position.x + FIELD_OPTION_WIDTH$1;
                    var optionMaxY = top_2 + position.y + FIELD_OPTION_HEIGHT$1;
                    if (maxX < optionMaxX)
                        left_1 += maxX - optionMaxX;
                    if (maxY < optionMaxY)
                        top_2 += maxY - optionMaxY;
                    layerOpenPosition = __assign(__assign({}, openPosition), { left: left_1 + "px", top: top_2 + "px" });
                }
            }
        }
        // {/* 열 추가 하기 */}
        return modifyData && isShow ? (React__default['default'].createElement("div", { className: fieldType === FIELD_TYPE.TOP ? Styles.col_add : Styles.row_add, style: optionPosition, onContextMenu: this._onContextMenu }, useLine ? (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement("a", { href: "/", role: "button", onClick: this._onFieldOptionOpen, onMouseOver: this._onAddFieldOptionOver, onMouseOut: this._onAddFieldOptionOut },
                React__default['default'].createElement("span", { className: Styles.blind }, textMap.blind)),
            isOptionOpen ? (React__default['default'].createElement(FieldOption, { fieldType: fieldType, styleOption: layerOpenPosition, mouseEventMap: this._mouseMap })) : (React__default['default'].createElement(React__default['default'].Fragment, null)),
            React__default['default'].createElement("span", { className: Styles.line, style: linePosition }, "\u00A0"))) : (React__default['default'].createElement(FieldOption, { fieldType: fieldType, styleOption: this._layerPosition[fieldType], mouseEventMap: this._mouseMap })))) : (React__default['default'].createElement(React__default['default'].Fragment, null));
    };
    return FieldOptionLayer;
}(React__default['default'].Component));
var mapStateToProps$b = function (state) { return ({
    modifyData: state.editor.modifyData,
}); };
var mapDispatchToProps$b = function (dispatch) { return ({
    addEditorModifyData: function (eModifyData) { return dispatch(editorModifyData$2(eModifyData)); },
    modifyRowCell: function (modifyData) { return dispatch(modifyRowCell(modifyData)); },
    modifyColCell: function (modifyData) { return dispatch(modifyColCell(modifyData)); },
    fieldSelectCell: function (modifyData) { return dispatch(fieldSelectCell$1(modifyData)); },
    modifyRect: function (modifyData) { return dispatch(modifyRect$1(modifyData)); },
}); };
var FieldOptionLayer$1 = connect(mapStateToProps$b, mapDispatchToProps$b, null, { forwardRef: true })(FieldOptionLayer);

var SheetOptionContainer = /** @class */ (function (_super) {
    __extends(SheetOptionContainer, _super);
    function SheetOptionContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this._onMaxCell = function () {
            var _a;
            var maxCellPopup = (((_a = _this.props.option) === null || _a === void 0 ? void 0 : _a.callBack) || {}).maxCellPopup;
            if (maxCellPopup)
                maxCellPopup();
        };
        _this._onMinCell = function () {
            var _a;
            var minCellPopup = (((_a = _this.props.option) === null || _a === void 0 ? void 0 : _a.callBack) || {}).minCellPopup;
            if (minCellPopup)
                minCellPopup();
        };
        _this._onColumnEdit = function (modifyData) {
            var _a;
            var onColumnEdit = (((_a = _this.props.option) === null || _a === void 0 ? void 0 : _a.callBack) || {}).onColumnEdit;
            if (onColumnEdit && modifyData.index !== undefined) {
                var columnEditData = {
                    editType: modifyData.type === MODIFY_TYPE.ADD ? ColumnEditType.ADD : ColumnEditType.REMOVE,
                    index: modifyData.index,
                };
                onColumnEdit(columnEditData);
            }
        };
        _this._onRowEdit = function (modifyData) {
            var _a;
            var onRowEdit = (((_a = _this.props.option) === null || _a === void 0 ? void 0 : _a.callBack) || {}).onRowEdit;
            if (onRowEdit && modifyData.index !== undefined) {
                var rowEditData = {
                    editType: modifyData.type === MODIFY_TYPE.ADD ? RowEditType.ADD : RowEditType.REMOVE,
                    index: modifyData.index,
                };
                onRowEdit(rowEditData);
            }
        };
        return _this;
    }
    SheetOptionContainer.prototype.componentWillUnmount = function () {
        cLog('[SheetOptionContainer] componentWillUnmount');
    };
    SheetOptionContainer.prototype.componentWillMount = function () {
        cLog('[SheetOptionContainer] componentWillMount');
    };
    SheetOptionContainer.prototype.componentDidMount = function () {
        cLog('[SheetOptionContainer] componentDidMount');
    };
    SheetOptionContainer.prototype.componentDidUpdate = function () {
        cLog('[SheetOptionContainer] componentDidUpdate');
    };
    SheetOptionContainer.prototype.render = function () {
        var completeEdit = this.props.completeEdit;
        return (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement(FieldOptionLayer$1, { onMaxCell: this._onMaxCell, onMinCell: this._onMinCell, onColumnEdit: this._onColumnEdit, onRowEdit: this._onRowEdit, completeEdit: completeEdit }),
            React__default['default'].createElement(CellOptionLayer$1, { onMaxCell: this._onMaxCell })));
    };
    return SheetOptionContainer;
}(React__default['default'].Component));
// export default SheetContainer;
var mapStateToProps$c = function (_state) { return ({}); };
var mapDispatchToProps$c = function (_dispatch) { return ({
// addSheetDatas: (sheetDatas) => dispatch(addSheetDatas(sheetDatas)),
}); };
var SheetOptionContainer$1 = connect(mapStateToProps$c, mapDispatchToProps$c, null, { forwardRef: true })(SheetOptionContainer);

var selectCell$1 = editorActions.selectCell, modifyRect$2 = editorActions.modifyRect, setEdit$1 = editorActions.setEdit, editorModifyData$3 = editorActions.editorModifyData, setViewPort = editorActions.setViewPort, setRealViewPort = editorActions.setRealViewPort, addClickCount = editorActions.addClickCount;
var _a$8 = config.SHEET_TABLE.SHEET_BOX_PADDING, BOX_PADDING_BOTTOM = _a$8.BOTTOM;
var _b = config.SHEET_TABLE.TABLE_SHEET_SIZE, CELL_WIDTH$b = _b.CELL_WIDTH, CELL_HEIGHT$8 = _b.CELL_HEIGHT, TOP_FIELD_HEIGHT$4 = _b.TOP_FIELD_HEIGHT;
var SheetBox = /** @class */ (function (_super) {
    __extends(SheetBox, _super);
    function SheetBox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.isFocus = false;
        _this.isDown = false;
        _this._isEnterUp = false;
        _this._isTabUp = false;
        _this._changeSelectCell = function (selectCell) {
            _this._selectCell = selectCell;
            if (!_this._getIsKeyBord())
                _this._tabPostion = undefined;
            if (_this._selectCell && _this.sheetTableContainerRef.current) {
                var _a = _this._selectCell, col = _a.col, row = _a.row;
                var left = (row || 0) * CELL_WIDTH$b;
                var top_1 = (col || 0) * CELL_HEIGHT$8;
                var cellRect = {
                    left: left,
                    top: top_1,
                    right: left + CELL_WIDTH$b,
                    bottom: top_1 + CELL_HEIGHT$8,
                };
                var isChange = false;
                var updateLeft = _this._localViewPort.x;
                var updateTop = _this._localViewPort.y;
                if (cellRect.left < _this._localViewPort.x) {
                    updateLeft = cellRect.left;
                    isChange = true;
                }
                else if (cellRect.right > _this._localViewPort.x + _this._localViewPort.width) {
                    updateLeft = cellRect.right - _this._localViewPort.width + 1;
                    isChange = true;
                }
                if (cellRect.top < _this._localViewPort.y) {
                    updateTop = cellRect.top - 1;
                    if (updateTop < 0)
                        updateTop = 0;
                    isChange = true;
                }
                else if (cellRect.bottom > _this._localViewPort.y + _this._localViewPort.height) {
                    updateTop = cellRect.bottom - _this._localViewPort.height;
                    isChange = true;
                }
                if (isChange) {
                    _this.sheetTableContainerRef.current.updateScroll(updateLeft, updateTop);
                    setTimeout(function () { return _this._updateViewPort(); }, 0);
                }
            }
        };
        _this._changeModifyRect = function (modifyRect) {
            _this._modifyRect = modifyRect;
        };
        _this._changeModifyData = function (modifyData) {
            _this._modifyData = modifyData;
        };
        _this._changeViewPort = function (viewPort) {
            _this._viewPort = viewPort;
        };
        _this._changeEditData = function (editData) {
            _this._editData = editData;
            if (_this._editData) {
                var isCancel = _this._editData.isCancel;
                if (isCancel && _this._selectCell) {
                    var _a = _this._selectCell, col = _a.col, row = _a.row;
                    _this._setSelectCell(col, row);
                }
            }
        };
        _this._setSelectCell = function (col, row, isKeyBord) {
            var selectCell = _this.props.selectCell;
            if (selectCell) {
                var sheetItem = _this._getSheetItem(col, row);
                selectCell({ selectCell: sheetItem, isKeyBord: isKeyBord });
            }
        };
        _this._getIsKeyBord = function () { return StoreManager$1.state.editor.isKeyBord; };
        _this._getSheetItem = function (col, row) {
            var sheetItems = StoreManager$1.state.sheet.sheetItems;
            return sheetItems ? sheetItems[col][row] : undefined;
        };
        _this._enterKey = function (_e) {
            if (!_this._selectCell)
                return;
            if (!_this._isOptionOpen()) {
                var _a = _this._selectCell, col = _a.col, row = _a.row;
                var colLen = getColLength();
                var nextCol = col || 0;
                var nextRow = row || 0;
                if (_this._tabPostion) {
                    nextCol = _this._tabPostion.col || 0;
                    nextRow = _this._tabPostion.row || 0;
                }
                nextCol += 1;
                if (nextCol < colLen) {
                    if (!_this._tabPostion)
                        _this._tabPostion = {};
                    _this._tabPostion.col = nextCol;
                    _this._tabPostion.row = nextRow;
                    _this._setSelectCell(nextCol, nextRow, true);
                }
            }
        };
        _this._escKey = function (e) {
            cLog('Esc');
            var addModifyRect = _this.props.addModifyRect;
            // edit Cancel
            _this._cancelEdit(e);
            // 자르기/붙여넣기 cancel
            if (addModifyRect && _this._modifyRect) {
                e.preventDefault();
                addModifyRect(undefined);
            }
            _this._cancelOption(e);
        };
        _this._cancelEdit = function (e) {
            var setEdit = _this.props.setEdit;
            if (setEdit && _this._editData) {
                if (e)
                    e.preventDefault();
                setEdit({ cursor: undefined, isCancel: true });
            }
        };
        _this._completeEdit = function () {
            if (_this._editData && _this._selectCell) {
                var _a = _this._selectCell, col = _a.col, row = _a.row;
                _this._setSelectCell(col, row);
            }
        };
        _this._cancelOption = function (e) {
            if (_this._modifyData) {
                var addEditorModifyData = _this.props.addEditorModifyData;
                if (addEditorModifyData) {
                    if (e)
                        e.preventDefault();
                    var _a = _this._modifyData, type = _a.type, openOption = _a.openOption;
                    if (type === EDITOR_MODIFY_TYPE.FIELD) {
                        if (openOption)
                            addEditorModifyData(undefined);
                    }
                    else {
                        addEditorModifyData(undefined);
                    }
                }
            }
        };
        _this._isOptionOpen = function () {
            var isOptionOpen = true;
            if (_this._modifyData) {
                var _a = _this._modifyData, type = _a.type, openOption = _a.openOption;
                if (type === EDITOR_MODIFY_TYPE.FIELD && !openOption) {
                    isOptionOpen = false;
                }
            }
            else {
                isOptionOpen = false;
            }
            return isOptionOpen;
        };
        _this._setEditKey = function (e) {
            var key = e.key;
            // key 값이 1개로 들어오는 것만 문자로 인식 하도록 처리.
            if ((key.length === 1 || key === 'Process') && !_this._editData) {
                var setEdit_1 = _this.props.setEdit;
                if (setEdit_1 && !_this._isOptionOpen()) {
                    e.preventDefault();
                    // window에서 한글 key 값이 process로 들어옴....
                    if (key === 'Process') {
                        setEdit_1({ defaultText: '', cursor: undefined });
                        return;
                    }
                    var check_num = /[0-9]/;
                    var check_eng = /[a-zA-Z]/;
                    var check_spc = /[~!@#$%^&*()_+|<>?:{}]/;
                    if (check_num.test(key) || check_eng.test(key) || check_spc.test(key)) {
                        setEdit_1({ defaultText: key, cursor: undefined });
                    }
                    else {
                        setEdit_1({ defaultText: '', cursor: undefined });
                    }
                    // setEdit({ defaultText: key, cursor: undefined });
                    // setEdit({ defaultText: '', cursor: undefined });
                }
            }
        };
        _this._onKeyUp = function (e) {
            var key = e.key;
            if (key === 'Enter') {
                _this._isEnterUp = true;
                setTimeout(function () {
                    _this._isEnterUp = false;
                }, 0);
            }
            else if (key === 'Tab') {
                _this._isTabUp = true;
                setTimeout(function () {
                    _this._isTabUp = false;
                }, 0);
            }
        };
        _this._onKeyDown = function (e) {
            if (!_this.isFocus || !_this._selectCell)
                return;
            var _a = _this._selectCell, col = _a.col, row = _a.row;
            var key = e.key;
            var rowLen;
            var colLen;
            var nextRow;
            var nextCol;
            switch (key) {
                case 'Tab':
                    e.preventDefault();
                    if (!_this._isOptionOpen()) {
                        if (_this._isTabUp)
                            return;
                        rowLen = getRowLength();
                        nextRow = (row || 0) + 1;
                        nextCol = col || 0;
                        if (nextRow < rowLen) {
                            if (!_this._getIsKeyBord()) {
                                _this._tabPostion = {};
                                _this._tabPostion.col = col;
                                _this._tabPostion.row = row;
                            }
                            _this._setSelectCell(nextCol, nextRow, true);
                        }
                    }
                    break;
                case 'Down':
                case 'ArrowDown':
                    if (!_this._editData) {
                        e.preventDefault();
                        if (!_this._isOptionOpen()) {
                            colLen = getColLength();
                            nextRow = row || 0;
                            nextCol = (col || 0) + 1;
                            if (nextCol < colLen) {
                                _this._setSelectCell(nextCol, nextRow);
                            }
                        }
                    }
                    break;
                case 'Up':
                case 'ArrowUp':
                    if (!_this._editData) {
                        e.preventDefault();
                        if (!_this._isOptionOpen()) {
                            nextRow = row || 0;
                            nextCol = (col || 0) - 1;
                            if (nextCol > -1) {
                                _this._setSelectCell(nextCol, nextRow);
                            }
                        }
                    }
                    break;
                case 'Left':
                case 'ArrowLeft':
                    if (!_this._editData) {
                        e.preventDefault();
                        if (!_this._isOptionOpen()) {
                            nextRow = (row || 0) - 1;
                            nextCol = col || 0;
                            if (nextRow > -1) {
                                _this._setSelectCell(nextCol, nextRow);
                            }
                        }
                    }
                    break;
                case 'Right':
                case 'ArrowRight':
                    if (!_this._editData) {
                        e.preventDefault();
                        if (!_this._isOptionOpen()) {
                            rowLen = getRowLength();
                            nextRow = (row || 0) + 1;
                            nextCol = col || 0;
                            if (nextRow < rowLen) {
                                _this._setSelectCell(nextCol, nextRow);
                            }
                        }
                    }
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (_this._isEnterUp)
                        return;
                    _this._enterKey(e);
                    break;
                case 'Esc':
                case 'Escape':
                    _this._escKey(e);
                    break;
                default:
                    _this._setEditKey(e);
                    return;
            }
        };
        _this._onResize = function () {
            _this._updateViewPort();
        };
        _this._onClick = function (_e) {
            cLog('_onClick');
            _this.isDown = true;
        };
        _this._onWindowClick = function (_e) {
            cLog('_onWindowClick');
            _this.isFocus = _this.isDown;
            _this.isDown = false;
            if (!_this.isFocus) {
                // this._cancelEdit();
                _this._completeEdit();
                _this._cancelOption();
            }
            else {
                var addClickCountPlus = _this.props.addClickCountPlus;
                if (addClickCountPlus)
                    addClickCountPlus();
            }
        };
        _this._updateViewPort = function () {
            if (_this._modifyData &&
                (_this._modifyData.type === EDITOR_MODIFY_TYPE.FIELD || _this._modifyData.type === EDITOR_MODIFY_TYPE.CELL)) {
                var addEditorModifyData = _this.props.addEditorModifyData;
                if (addEditorModifyData)
                    addEditorModifyData(undefined);
            }
            if (_this.sheetTableContainerRef.current) {
                var rootWidth_1 = 0;
                var rootHeight_1 = 0;
                if (_this.sheetBoxRef.current) {
                    rootWidth_1 = _this.sheetBoxRef.current.clientWidth;
                    rootHeight_1 = _this.sheetBoxRef.current.clientHeight;
                }
                var colLastIndex = getColLength() - 1;
                var rowLastIndex = getRowLength() - 1;
                var _a = _this.sheetTableContainerRef.current.getRect(), x_1 = _a.x, y_1 = _a.y, width_1 = _a.width, height_1 = _a.height;
                var sx = x_1;
                var sy = y_1;
                var sr_1 = (sx < 0 ? 0 : sx / CELL_WIDTH$b) | 0;
                var sc_1 = (sy < 0 ? 0 : sy / CELL_HEIGHT$8) | 0;
                var viewPortMaxSize_1 = {
                    width: width_1,
                    height: rootHeight_1 - TOP_FIELD_HEIGHT$4 - BOX_PADDING_BOTTOM,
                };
                var ex = sx + width_1;
                var ey = sy + height_1;
                var er_1 = (ex / CELL_WIDTH$b) | 0;
                var ec_1 = (ey / CELL_HEIGHT$8) | 0;
                if (ec_1 > colLastIndex)
                    ec_1 = colLastIndex;
                if (er_1 > rowLastIndex)
                    er_1 = rowLastIndex;
                if (_this._localViewPort.devicePixelRatio !== window.devicePixelRatio) {
                    _this.sheetTableContainerRef.current.updateDevicePixelRatio();
                }
                _this._localViewPort.x = x_1;
                _this._localViewPort.y = y_1;
                _this._localViewPort.width = width_1;
                _this._localViewPort.height = height_1;
                _this._localViewPort.devicePixelRatio = window.devicePixelRatio;
                _this._localViewPort.rootSize = { width: rootWidth_1, height: rootHeight_1 };
                _this._localViewPort.viewPortMaxSize = viewPortMaxSize_1;
                var _b = _this.props, addViewPort_1 = _b.addViewPort, addRealViewPort = _b.addRealViewPort;
                if (!_this._viewPort) {
                    if (addViewPort_1)
                        addViewPort_1({
                            x: x_1,
                            y: y_1,
                            width: width_1,
                            height: height_1,
                            rect: { sc: sc_1, ec: ec_1, sr: sr_1, er: er_1 },
                            devicePixelRatio: window.devicePixelRatio,
                            rootSize: {
                                width: rootWidth_1,
                                height: rootHeight_1,
                            },
                            viewPortMaxSize: viewPortMaxSize_1,
                        });
                }
                else {
                    var rect = _this._viewPort.rect;
                    var _c = rect || {}, osr = _c.sr, osc = _c.sc, oer = _c.er, oec = _c.ec;
                    if (osr !== sr_1 || osc !== sc_1 || oer !== er_1 || oec !== ec_1) {
                        // 타이밍 문제로 다음 프레임에 호출
                        if (addViewPort_1)
                            setTimeout(function () {
                                return addViewPort_1({
                                    x: x_1,
                                    y: y_1,
                                    width: width_1,
                                    height: height_1,
                                    rect: { sc: sc_1, ec: ec_1, sr: sr_1, er: er_1 },
                                    devicePixelRatio: window.devicePixelRatio,
                                    rootSize: {
                                        width: rootWidth_1,
                                        height: rootHeight_1,
                                    },
                                    viewPortMaxSize: viewPortMaxSize_1,
                                });
                            }, 0);
                    }
                }
                addRealViewPort({
                    x: x_1,
                    y: y_1,
                    width: width_1,
                    height: height_1,
                    rect: { sc: sc_1, ec: ec_1, sr: sr_1, er: er_1 },
                    devicePixelRatio: window.devicePixelRatio,
                    rootSize: {
                        width: rootWidth_1,
                        height: rootHeight_1,
                    },
                    viewPortMaxSize: viewPortMaxSize_1,
                });
            }
        };
        _this._isError = function () {
            var isError = false;
            var sheetData = _this.props.sheetData;
            if (sheetData) {
                var length_1 = sheetData.length, data = sheetData.data;
                if (length_1) {
                    isError = length_1 > config.MAX_CELL;
                }
                else if (data) {
                    var col = data.length;
                    var row = data[0].length;
                    isError = col * row > config.MAX_CELL;
                }
            }
            return isError;
        };
        _this._onSaveExcel = function () {
            var option = _this.props.option;
            var saveExcel = ((option === null || option === void 0 ? void 0 : option.callBack) || {}).saveExcel;
            if (saveExcel) {
                var saveData = getSaveData();
                saveExcel(saveData);
            }
        };
        _this.sheetBoxRef = React__default['default'].createRef();
        _this.innerRef = React__default['default'].createRef();
        _this.sheetTableContainerRef = React__default['default'].createRef();
        _this._sheetBoxObserverMap = {
            changeSelectCell: _this._changeSelectCell,
            changeEditData: _this._changeEditData,
            changeModifyRect: _this._changeModifyRect,
            changeModifyData: _this._changeModifyData,
            changeViewPort: _this._changeViewPort,
        };
        _this._localViewPort = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            devicePixelRatio: 1,
            rootSize: { width: 0, height: 0 },
            viewPortMaxSize: { width: 0, height: 0 },
        };
        return _this;
    }
    SheetBox.prototype.componentWillUnmount = function () {
        var _a;
        cLog('[SheetBox] componentWillUnmount');
        (_a = this.sheetBoxRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('mousedown', this._onClick);
        window.removeEventListener('mousedown', this._onWindowClick);
        window.removeEventListener('keydown', this._onKeyDown);
        window.removeEventListener('keyup', this._onKeyUp);
    };
    SheetBox.prototype.componentWillMount = function () {
        cLog('[SheetBox] componentWillMount');
    };
    SheetBox.prototype.componentDidMount = function () {
        var _a;
        cLog('[SheetBox] componentDidMount');
        (_a = this.sheetBoxRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('mousedown', this._onClick);
        window.addEventListener('mousedown', this._onWindowClick);
        window.addEventListener('keydown', this._onKeyDown);
        window.addEventListener('keyup', this._onKeyUp);
        this._updateViewPort();
    };
    SheetBox.prototype.componentDidUpdate = function () {
        cLog('[SheetBox] componentDidUpdate');
    };
    SheetBox.prototype.render = function () {
        cLog('[SheetBox] render');
        var _a = this.props, option = _a.option, sheetData = _a.sheetData;
        var isError = this._isError();
        return (React__default['default'].createElement("div", { ref: this.sheetBoxRef, className: Styles.sheet_box },
            React__default['default'].createElement(SheetBoxResizeSensor$1, { onResize: this._onResize }),
            React__default['default'].createElement(SheetBoxObserver, { changeMap: this._sheetBoxObserverMap }),
            React__default['default'].createElement("div", { className: Styles.empty_cell }, "\u00A0"),
            React__default['default'].createElement(SheetTableContainer$1, { option: option, ref: this.sheetTableContainerRef, updateViewport: this._updateViewPort }),
            React__default['default'].createElement(SheetOptionContainer$1, { option: option, completeEdit: this._completeEdit }),
            React__default['default'].createElement(ErrorDimmed, { isError: isError, onSaveExcel: this._onSaveExcel }),
            React__default['default'].createElement(CellSaveLayer, { isSave: sheetData === null || sheetData === void 0 ? void 0 : sheetData.isSave, option: option })));
    };
    return SheetBox;
}(React__default['default'].Component));
// export default SheetContainer;
var mapStateToProps$d = function (_state) { return ({}); };
var mapDispatchToProps$d = function (dispatch) { return ({
    selectCell: function (selectCellItem) { return dispatch(selectCell$1(selectCellItem)); },
    setEdit: function (editorData) { return dispatch(setEdit$1(editorData)); },
    addModifyRect: function (sheetModifyRect) { return dispatch(modifyRect$2(sheetModifyRect)); },
    addEditorModifyData: function (eModifyData) { return dispatch(editorModifyData$3(eModifyData)); },
    addViewPort: function (viewPort) { return dispatch(setViewPort(viewPort)); },
    addRealViewPort: function (viewPort) { return dispatch(setRealViewPort(viewPort)); },
    addClickCountPlus: function () { return dispatch(addClickCount()); },
}); };
var SheetBox$1 = connect(mapStateToProps$d, mapDispatchToProps$d, null, { forwardRef: true })(SheetBox);

var addSheetDatas = sheetActions.addSheetDatas, modifySheetData$1 = sheetActions.modifySheetData, modifyRowCell$1 = sheetActions.modifyRowCell, modifyColCell$1 = sheetActions.modifyColCell, copyCell$1 = sheetActions.copyCell, deleteCell$1 = sheetActions.deleteCell, cutCell$1 = sheetActions.cutCell;
var SheetContainer = /** @class */ (function (_super) {
    __extends(SheetContainer, _super);
    function SheetContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.sheetBoxRef = React__default['default'].createRef();
        return _this;
    }
    SheetContainer.prototype.componentWillUnmount = function () {
        cLog('[SheetContainer] componentWillUnmount');
    };
    SheetContainer.prototype.componentWillMount = function () {
        cLog('[SheetContainer] componentWillMount');
        var _a = this.props, addSheetDatas = _a.addSheetDatas, sheetData = _a.sheetData, option = _a.option;
        if (sheetData)
            addSheetDatas({ sheetData: sheetData, option: option });
    };
    SheetContainer.prototype.componentDidMount = function () {
        cLog('[SheetContainer] componentDidMount');
    };
    SheetContainer.prototype.componentWillReceiveProps = function (nextProps) {
        cLog('componentWillReceiveProps');
        cLog(nextProps);
    };
    SheetContainer.prototype.componentDidUpdate = function () {
        cLog('[SheetContainer] componentDidUpdate');
        var _a = this.props, addSheetDatas = _a.addSheetDatas, sheetData = _a.sheetData, option = _a.option;
        if (sheetData)
            addSheetDatas({ sheetData: sheetData, option: option });
    };
    // testCode
    SheetContainer.prototype.testChangeSheetData = function (sheetData) {
        var modifySheetData = this.props.modifySheetData;
        if (sheetData)
            modifySheetData(sheetData);
    };
    SheetContainer.prototype.testModifyRowCell = function (modifyData) {
        var modifyRowCell = this.props.modifyRowCell;
        if (modifyData)
            modifyRowCell(modifyData);
    };
    SheetContainer.prototype.testModifyColCell = function (modifyData) {
        var modifyColCell = this.props.modifyColCell;
        if (modifyData)
            modifyColCell(modifyData);
    };
    SheetContainer.prototype.testCopyCell = function (modifyData) {
        var copyCell = this.props.copyCell;
        if (modifyData)
            copyCell(modifyData);
    };
    SheetContainer.prototype.testDeleteCell = function (modifyData) {
        var deleteCell = this.props.deleteCell;
        if (modifyData)
            deleteCell(modifyData);
    };
    SheetContainer.prototype.testCutCell = function (modifyData) {
        var cutCell = this.props.cutCell;
        if (modifyData)
            cutCell(modifyData);
    };
    SheetContainer.prototype.render = function () {
        var _a = this.props, option = _a.option, sheetData = _a.sheetData;
        return React__default['default'].createElement(SheetBox$1, { sheetData: sheetData, option: option });
    };
    return SheetContainer;
}(React__default['default'].Component));
// export default SheetContainer;
var mapStateToProps$e = function (_state) { return ({}); };
var mapDispatchToProps$e = function (dispatch) { return ({
    addSheetDatas: function (sheetDatas) { return dispatch(addSheetDatas(sheetDatas)); },
    modifySheetData: function (sheetDatas) { return dispatch(modifySheetData$1(sheetDatas)); },
    modifyRowCell: function (modifyCell) { return dispatch(modifyRowCell$1(modifyCell)); },
    modifyColCell: function (modifyCell) { return dispatch(modifyColCell$1(modifyCell)); },
    copyCell: function (modifyCell) { return dispatch(copyCell$1(modifyCell)); },
    deleteCell: function (modifyCell) { return dispatch(deleteCell$1(modifyCell)); },
    cutCell: function (modifyCell) { return dispatch(cutCell$1(modifyCell)); },
}); };
var SheetContainer$1 = connect(mapStateToProps$e, mapDispatchToProps$e, null, { forwardRef: true })(SheetContainer);

var resetEditorState = editorActions.resetEditorState;
var resetSheetState = sheetActions.resetSheetState;
window.EntrySheetVersion = 'v1.0.0.0';
var ColumnEditType = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
};
var RowEditType = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
};
var SheetOptionType = {
    EDITOR: 'EDITOR',
    VIEWER: 'VIEWER',
};
var EntrySheetComponent = /** @class */ (function (_super) {
    __extends(EntrySheetComponent, _super);
    function EntrySheetComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            renderFlag: false,
            sheetData: undefined,
            option: undefined,
        };
        _this.getSheetData = function () {
            var sheetData = getSaveData();
            return sheetData;
        };
        _this.setSheetData = function (sheetData) {
            var renderFlag = !_this.state.renderFlag;
            _this.setState(__assign(__assign({}, _this.state), { renderFlag: renderFlag,
                sheetData: sheetData }));
        };
        _this.sheetContainerRef = React__default['default'].createRef();
        return _this;
        // const reducer = getReducers();
        // this._store = useLogger ? createStore(reducer, applyMiddleware(createLogger())) : createStore(reducer);
    }
    EntrySheetComponent.prototype.UNSAFE_componentWillMount = function () {
        cLog('[EntrySheetComponent] UNSAFE_componentWillMount');
        var _a = this.props, sheetData = _a.sheetData, option = _a.option;
        var optionConfig = (option || {}).config;
        var _b = optionConfig || {}, maxCell = _b.maxCell, language = _b.language;
        if (maxCell)
            config.MAX_CELL = maxCell;
        if (language) {
            config.LANGUAGE = __assign(__assign({}, config.LANGUAGE), language);
        }
        this.setState(__assign(__assign({}, this.state), { sheetData: sheetData,
            option: option }));
    };
    EntrySheetComponent.prototype.componentWillUnmount = function () {
        cLog('[EntrySheetComponent] componentWillUnmount');
    };
    EntrySheetComponent.prototype.componentDidMount = function () {
        cLog('[EntrySheetComponent] componentDidMount');
    };
    // eslint-disable-next-line react/no-deprecated
    EntrySheetComponent.prototype.componentWillUpdate = function () {
        cLog('[EntrySheetComponent] componentWillUpdate');
        cLog(StoreManager$1.state);
        StoreManager$1.store.dispatch(resetEditorState());
        StoreManager$1.store.dispatch(resetSheetState());
    };
    EntrySheetComponent.prototype.componentWillReceiveProps = function (_nextProps) {
        cLog('[EntrySheetComponent] componentWillReceiveProps');
        var sheetData = _nextProps.sheetData, option = _nextProps.option;
        var optionConfig = (option || {}).config;
        var _a = optionConfig || {}, maxCell = _a.maxCell, language = _a.language;
        if (maxCell)
            config.MAX_CELL = maxCell;
        if (language) {
            config.LANGUAGE = __assign(__assign({}, config.LANGUAGE), language);
        }
        this.setState(__assign(__assign({}, this.state), { sheetData: sheetData,
            option: option }));
    };
    EntrySheetComponent.prototype.componentDidUpdate = function () {
        cLog('[EntrySheetComponent] componentDidUpdate');
    };
    EntrySheetComponent.prototype.testChangeSheetData = function (sheetData) {
        if (this.sheetContainerRef.current)
            this.sheetContainerRef.current.testChangeSheetData(sheetData);
    };
    EntrySheetComponent.prototype.testModifyRowCell = function (modifyData) {
        if (this.sheetContainerRef.current)
            this.sheetContainerRef.current.testModifyRowCell(modifyData);
    };
    EntrySheetComponent.prototype.testModifyColCell = function (modifyData) {
        if (this.sheetContainerRef.current)
            this.sheetContainerRef.current.testModifyColCell(modifyData);
    };
    EntrySheetComponent.prototype.testCopyCell = function (modifyData) {
        if (this.sheetContainerRef.current)
            this.sheetContainerRef.current.testCopyCell(modifyData);
    };
    EntrySheetComponent.prototype.testDeleteCell = function (modifyData) {
        if (this.sheetContainerRef.current)
            this.sheetContainerRef.current.testDeleteCell(modifyData);
    };
    EntrySheetComponent.prototype.testCutCell = function (modifyData) {
        if (this.sheetContainerRef.current)
            this.sheetContainerRef.current.testCutCell(modifyData);
    };
    EntrySheetComponent.prototype.render = function () {
        var _a = this.state, sheetData = _a.sheetData, option = _a.option;
        return (React__default['default'].createElement(Provider, { store: StoreManager$1.store },
            React__default['default'].createElement(SheetContainer$1, { key: "SheetContainer__" + new Date().getTime(), ref: this.sheetContainerRef, sheetData: sheetData, option: option })));
    };
    return EntrySheetComponent;
}(React__default['default'].Component));

exports.ColumnEditType = ColumnEditType;
exports.RowEditType = RowEditType;
exports.SheetOptionType = SheetOptionType;
exports.default = EntrySheetComponent;
//# sourceMappingURL=entrysheet.bundle.js.map
