var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a3, b3) => (typeof require !== "undefined" ? require : a3)[b3]
}) : x2)(function(x2) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x2 + '" is not supported');
});
var __esm = (fn4, res) => function __init() {
  return fn4 && (res = (0, fn4[__getOwnPropNames(fn4)[0]])(fn4 = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module, temp) => {
    return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// external-global:react-dom
var require_react_dom = __commonJS({
  "external-global:react-dom"(exports, module) {
    module.exports = ReactDOM;
  }
});

// ../../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "../../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType2(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
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
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment4 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense6 = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer2(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement4(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment4;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense6;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer2;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement4;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType2;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../../node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "../../node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// ../../node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "../../node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i3 = 0; i3 < 10; i3++) {
          test2["_" + String.fromCharCode(i3)] = i3;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n3) {
          return test2[n3];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s3 = 1; s3 < arguments.length; s3++) {
        from = Object(arguments[s3]);
        for (var key in from) {
          if (hasOwnProperty2.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i3 = 0; i3 < symbols.length; i3++) {
            if (propIsEnumerable.call(from, symbols[i3])) {
              to[symbols[i3]] = from[symbols[i3]];
            }
          }
        }
      }
      return to;
    };
  }
});

// ../../node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// ../../node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "../../node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// ../../node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "../../node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values2, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error2;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                err.name = "Invariant Violation";
                throw err;
              }
              error2 = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error2 = ex;
            }
            if (error2 && !(error2 instanceof Error)) {
              printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error2 + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
            }
            if (error2 instanceof Error && !(error2.message in loggedTypeFailures)) {
              loggedTypeFailures[error2.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning("Failed " + location + " type: " + error2.message + (stack != null ? stack : ""));
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// ../../node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "../../node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
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
        exact: createStrictShapeTypeChecker
      };
      function is2(x2, y2) {
        if (x2 === y2) {
          return x2 !== 0 || 1 / x2 === 1 / y2;
        } else {
          return x2 !== x2 && y2 !== y2;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
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
            var preciseType = getPreciseType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
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
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i3 = 0; i3 < propValue.length; i3++) {
            var error2 = typeChecker(propValue, i3, componentName, location, propFullName + "[" + i3 + "]", ReactPropTypesSecret);
            if (error2 instanceof Error) {
              return error2;
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
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
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
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i3 = 0; i3 < expectedValues.length; i3++) {
            if (is2(propValue, expectedValues[i3])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error2 = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error2 instanceof Error) {
                return error2;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
          var checker = arrayOfTypeCheckers[i3];
          if (typeof checker !== "function") {
            printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i3 + ".");
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i4 = 0; i4 < arrayOfTypeCheckers.length; i4++) {
            var checker2 = arrayOfTypeCheckers[i4];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error2 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error2) {
              return error2;
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
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            }
            var error2 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error2) {
              return error2;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
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
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// ../../node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "../../node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// ../../node_modules/react-modal/lib/helpers/tabbable.js
var require_tabbable = __commonJS({
  "../../node_modules/react-modal/lib/helpers/tabbable.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = findTabbableDescendants;
    var tabbableNode = /input|select|textarea|button|object|iframe/;
    function hidesContents(element) {
      var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;
      if (zeroSize && !element.innerHTML)
        return true;
      try {
        var style2 = window.getComputedStyle(element);
        return zeroSize ? style2.getPropertyValue("overflow") !== "visible" || element.scrollWidth <= 0 && element.scrollHeight <= 0 : style2.getPropertyValue("display") == "none";
      } catch (exception) {
        console.warn("Failed to inspect element style");
        return false;
      }
    }
    function visible(element) {
      var parentElement = element;
      var rootNode = element.getRootNode && element.getRootNode();
      while (parentElement) {
        if (parentElement === document.body)
          break;
        if (rootNode && parentElement === rootNode)
          parentElement = rootNode.host.parentNode;
        if (hidesContents(parentElement))
          return false;
        parentElement = parentElement.parentNode;
      }
      return true;
    }
    function focusable(element, isTabIndexNotNaN) {
      var nodeName = element.nodeName.toLowerCase();
      var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
      return res && visible(element);
    }
    function tabbable(element) {
      var tabIndex = element.getAttribute("tabindex");
      if (tabIndex === null)
        tabIndex = void 0;
      var isTabIndexNaN = isNaN(tabIndex);
      return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
    }
    function findTabbableDescendants(element) {
      var descendants = [].slice.call(element.querySelectorAll("*"), 0).reduce(function(finished, el) {
        return finished.concat(!el.shadowRoot ? [el] : findTabbableDescendants(el.shadowRoot));
      }, []);
      return descendants.filter(tabbable);
    }
    module.exports = exports["default"];
  }
});

// ../../node_modules/react-modal/lib/helpers/focusManager.js
var require_focusManager = __commonJS({
  "../../node_modules/react-modal/lib/helpers/focusManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.resetState = resetState;
    exports.log = log2;
    exports.handleBlur = handleBlur;
    exports.handleFocus = handleFocus;
    exports.markForFocusLater = markForFocusLater;
    exports.returnFocus = returnFocus;
    exports.popWithoutFocus = popWithoutFocus;
    exports.setupScopedFocus = setupScopedFocus;
    exports.teardownScopedFocus = teardownScopedFocus;
    var _tabbable = require_tabbable();
    var _tabbable2 = _interopRequireDefault(_tabbable);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var focusLaterElements = [];
    var modalElement = null;
    var needToFocus = false;
    function resetState() {
      focusLaterElements = [];
    }
    function log2() {
      if (true) {
        console.log("focusManager ----------");
        focusLaterElements.forEach(function(f3) {
          var check = f3 || {};
          console.log(check.nodeName, check.className, check.id);
        });
        console.log("end focusManager ----------");
      }
    }
    function handleBlur() {
      needToFocus = true;
    }
    function handleFocus() {
      if (needToFocus) {
        needToFocus = false;
        if (!modalElement) {
          return;
        }
        setTimeout(function() {
          if (modalElement.contains(document.activeElement)) {
            return;
          }
          var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
          el.focus();
        }, 0);
      }
    }
    function markForFocusLater() {
      focusLaterElements.push(document.activeElement);
    }
    function returnFocus() {
      var preventScroll = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var toFocus = null;
      try {
        if (focusLaterElements.length !== 0) {
          toFocus = focusLaterElements.pop();
          toFocus.focus({ preventScroll });
        }
        return;
      } catch (e2) {
        console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
      }
    }
    function popWithoutFocus() {
      focusLaterElements.length > 0 && focusLaterElements.pop();
    }
    function setupScopedFocus(element) {
      modalElement = element;
      if (window.addEventListener) {
        window.addEventListener("blur", handleBlur, false);
        document.addEventListener("focus", handleFocus, true);
      } else {
        window.attachEvent("onBlur", handleBlur);
        document.attachEvent("onFocus", handleFocus);
      }
    }
    function teardownScopedFocus() {
      modalElement = null;
      if (window.addEventListener) {
        window.removeEventListener("blur", handleBlur);
        document.removeEventListener("focus", handleFocus);
      } else {
        window.detachEvent("onBlur", handleBlur);
        document.detachEvent("onFocus", handleFocus);
      }
    }
  }
});

// ../../node_modules/react-modal/lib/helpers/scopeTab.js
var require_scopeTab = __commonJS({
  "../../node_modules/react-modal/lib/helpers/scopeTab.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = scopeTab;
    var _tabbable = require_tabbable();
    var _tabbable2 = _interopRequireDefault(_tabbable);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getActiveElement() {
      var el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
      return el.activeElement.shadowRoot ? getActiveElement(el.activeElement.shadowRoot) : el.activeElement;
    }
    function scopeTab(node, event) {
      var tabbable = (0, _tabbable2.default)(node);
      if (!tabbable.length) {
        event.preventDefault();
        return;
      }
      var target = void 0;
      var shiftKey = event.shiftKey;
      var head = tabbable[0];
      var tail = tabbable[tabbable.length - 1];
      var activeElement = getActiveElement();
      if (node === activeElement) {
        if (!shiftKey)
          return;
        target = tail;
      }
      if (tail === activeElement && !shiftKey) {
        target = head;
      }
      if (head === activeElement && shiftKey) {
        target = tail;
      }
      if (target) {
        event.preventDefault();
        target.focus();
        return;
      }
      var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
      var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
      if (!isSafariDesktop)
        return;
      var x2 = tabbable.indexOf(activeElement);
      if (x2 > -1) {
        x2 += shiftKey ? -1 : 1;
      }
      target = tabbable[x2];
      if (typeof target === "undefined") {
        event.preventDefault();
        target = shiftKey ? tail : head;
        target.focus();
        return;
      }
      event.preventDefault();
      target.focus();
    }
    module.exports = exports["default"];
  }
});

// ../../node_modules/warning/warning.js
var require_warning = __commonJS({
  "../../node_modules/warning/warning.js"(exports, module) {
    "use strict";
    var __DEV__ = true;
    var warning4 = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format2, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format2.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
      warning4 = function(condition, format2, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format2 === void 0) {
          throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        }
        if (!condition) {
          printWarning.apply(null, [format2].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning4;
  }
});

// ../../node_modules/exenv/index.js
var require_exenv = __commonJS({
  "../../node_modules/exenv/index.js"(exports, module) {
    (function() {
      "use strict";
      var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
      var ExecutionEnvironment = {
        canUseDOM,
        canUseWorkers: typeof Worker !== "undefined",
        canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
        canUseViewport: canUseDOM && !!window.screen
      };
      if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define(function() {
          return ExecutionEnvironment;
        });
      } else if (typeof module !== "undefined" && module.exports) {
        module.exports = ExecutionEnvironment;
      } else {
        window.ExecutionEnvironment = ExecutionEnvironment;
      }
    })();
  }
});

// ../../node_modules/react-modal/lib/helpers/safeHTMLElement.js
var require_safeHTMLElement = __commonJS({
  "../../node_modules/react-modal/lib/helpers/safeHTMLElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.canUseDOM = exports.SafeNodeList = exports.SafeHTMLCollection = void 0;
    var _exenv = require_exenv();
    var _exenv2 = _interopRequireDefault(_exenv);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var EE = _exenv2.default;
    var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};
    var SafeHTMLCollection = exports.SafeHTMLCollection = EE.canUseDOM ? window.HTMLCollection : {};
    var SafeNodeList = exports.SafeNodeList = EE.canUseDOM ? window.NodeList : {};
    var canUseDOM = exports.canUseDOM = EE.canUseDOM;
    exports.default = SafeHTMLElement;
  }
});

// ../../node_modules/react-modal/lib/helpers/ariaAppHider.js
var require_ariaAppHider = __commonJS({
  "../../node_modules/react-modal/lib/helpers/ariaAppHider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.resetState = resetState;
    exports.log = log2;
    exports.assertNodeList = assertNodeList;
    exports.setElement = setElement;
    exports.validateElement = validateElement;
    exports.hide = hide2;
    exports.show = show;
    exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
    var _warning = require_warning();
    var _warning2 = _interopRequireDefault(_warning);
    var _safeHTMLElement = require_safeHTMLElement();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var globalElement = null;
    function resetState() {
      if (globalElement) {
        if (globalElement.removeAttribute) {
          globalElement.removeAttribute("aria-hidden");
        } else if (globalElement.length != null) {
          globalElement.forEach(function(element) {
            return element.removeAttribute("aria-hidden");
          });
        } else {
          document.querySelectorAll(globalElement).forEach(function(element) {
            return element.removeAttribute("aria-hidden");
          });
        }
      }
      globalElement = null;
    }
    function log2() {
      if (true) {
        var check = globalElement || {};
        console.log("ariaAppHider ----------");
        console.log(check.nodeName, check.className, check.id);
        console.log("end ariaAppHider ----------");
      }
    }
    function assertNodeList(nodeList, selector) {
      if (!nodeList || !nodeList.length) {
        throw new Error("react-modal: No elements were found for selector " + selector + ".");
      }
    }
    function setElement(element) {
      var useElement = element;
      if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
        var el = document.querySelectorAll(useElement);
        assertNodeList(el, useElement);
        useElement = el;
      }
      globalElement = useElement || globalElement;
      return globalElement;
    }
    function validateElement(appElement) {
      var el = appElement || globalElement;
      if (el) {
        return Array.isArray(el) || el instanceof HTMLCollection || el instanceof NodeList ? el : [el];
      } else {
        (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));
        return [];
      }
    }
    function hide2(appElement) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = validateElement(appElement)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;
          el.setAttribute("aria-hidden", "true");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    function show(appElement) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = void 0;
      try {
        for (var _iterator2 = validateElement(appElement)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var el = _step2.value;
          el.removeAttribute("aria-hidden");
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
    function documentNotReadyOrSSRTesting() {
      globalElement = null;
    }
  }
});

// ../../node_modules/react-modal/lib/helpers/classList.js
var require_classList = __commonJS({
  "../../node_modules/react-modal/lib/helpers/classList.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.resetState = resetState;
    exports.log = log2;
    var htmlClassList = {};
    var docBodyClassList = {};
    function removeClass(at, cls) {
      at.classList.remove(cls);
    }
    function resetState() {
      var htmlElement = document.getElementsByTagName("html")[0];
      for (var cls in htmlClassList) {
        removeClass(htmlElement, htmlClassList[cls]);
      }
      var body = document.body;
      for (var _cls in docBodyClassList) {
        removeClass(body, docBodyClassList[_cls]);
      }
      htmlClassList = {};
      docBodyClassList = {};
    }
    function log2() {
      if (true) {
        var classes = document.getElementsByTagName("html")[0].className;
        var buffer = "Show tracked classes:\n\n";
        buffer += "<html /> (" + classes + "):\n  ";
        for (var x2 in htmlClassList) {
          buffer += "  " + x2 + " " + htmlClassList[x2] + "\n  ";
        }
        classes = document.body.className;
        buffer += "\n\ndoc.body (" + classes + "):\n  ";
        for (var _x in docBodyClassList) {
          buffer += "  " + _x + " " + docBodyClassList[_x] + "\n  ";
        }
        buffer += "\n";
        console.log(buffer);
      }
    }
    var incrementReference = function incrementReference2(poll, className) {
      if (!poll[className]) {
        poll[className] = 0;
      }
      poll[className] += 1;
      return className;
    };
    var decrementReference = function decrementReference2(poll, className) {
      if (poll[className]) {
        poll[className] -= 1;
      }
      return className;
    };
    var trackClass = function trackClass2(classListRef, poll, classes) {
      classes.forEach(function(className) {
        incrementReference(poll, className);
        classListRef.add(className);
      });
    };
    var untrackClass = function untrackClass2(classListRef, poll, classes) {
      classes.forEach(function(className) {
        decrementReference(poll, className);
        poll[className] === 0 && classListRef.remove(className);
      });
    };
    var add3 = exports.add = function add4(element, classString) {
      return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
    };
    var remove = exports.remove = function remove2(element, classString) {
      return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
    };
  }
});

// ../../node_modules/react-modal/lib/helpers/portalOpenInstances.js
var require_portalOpenInstances = __commonJS({
  "../../node_modules/react-modal/lib/helpers/portalOpenInstances.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.log = log2;
    exports.resetState = resetState;
    function _classCallCheck(instance2, Constructor) {
      if (!(instance2 instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var PortalOpenInstances = function PortalOpenInstances2() {
      var _this = this;
      _classCallCheck(this, PortalOpenInstances2);
      this.register = function(openInstance) {
        if (_this.openInstances.indexOf(openInstance) !== -1) {
          if (true) {
            console.warn("React-Modal: Cannot register modal instance that's already open");
          }
          return;
        }
        _this.openInstances.push(openInstance);
        _this.emit("register");
      };
      this.deregister = function(openInstance) {
        var index2 = _this.openInstances.indexOf(openInstance);
        if (index2 === -1) {
          if (true) {
            console.warn("React-Modal: Unable to deregister " + openInstance + " as it was never registered");
          }
          return;
        }
        _this.openInstances.splice(index2, 1);
        _this.emit("deregister");
      };
      this.subscribe = function(callback) {
        _this.subscribers.push(callback);
      };
      this.emit = function(eventType) {
        _this.subscribers.forEach(function(subscriber) {
          return subscriber(eventType, _this.openInstances.slice());
        });
      };
      this.openInstances = [];
      this.subscribers = [];
    };
    var portalOpenInstances = new PortalOpenInstances();
    function log2() {
      console.log("portalOpenInstances ----------");
      console.log(portalOpenInstances.openInstances.length);
      portalOpenInstances.openInstances.forEach(function(p3) {
        return console.log(p3);
      });
      console.log("end portalOpenInstances ----------");
    }
    function resetState() {
      portalOpenInstances = new PortalOpenInstances();
    }
    exports.default = portalOpenInstances;
  }
});

// ../../node_modules/react-modal/lib/helpers/bodyTrap.js
var require_bodyTrap = __commonJS({
  "../../node_modules/react-modal/lib/helpers/bodyTrap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.resetState = resetState;
    exports.log = log2;
    var _portalOpenInstances = require_portalOpenInstances();
    var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var before = void 0;
    var after = void 0;
    var instances = [];
    function resetState() {
      var _arr = [before, after];
      for (var _i = 0; _i < _arr.length; _i++) {
        var item = _arr[_i];
        if (!item)
          continue;
        item.parentNode && item.parentNode.removeChild(item);
      }
      before = after = null;
      instances = [];
    }
    function log2() {
      console.log("bodyTrap ----------");
      console.log(instances.length);
      var _arr2 = [before, after];
      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var item = _arr2[_i2];
        var check = item || {};
        console.log(check.nodeName, check.className, check.id);
      }
      console.log("edn bodyTrap ----------");
    }
    function focusContent() {
      if (instances.length === 0) {
        if (true) {
          console.warn("React-Modal: Open instances > 0 expected");
        }
        return;
      }
      instances[instances.length - 1].focusContent();
    }
    function bodyTrap(eventType, openInstances) {
      if (!before && !after) {
        before = document.createElement("div");
        before.setAttribute("data-react-modal-body-trap", "");
        before.style.position = "absolute";
        before.style.opacity = "0";
        before.setAttribute("tabindex", "0");
        before.addEventListener("focus", focusContent);
        after = before.cloneNode();
        after.addEventListener("focus", focusContent);
      }
      instances = openInstances;
      if (instances.length > 0) {
        if (document.body.firstChild !== before) {
          document.body.insertBefore(before, document.body.firstChild);
        }
        if (document.body.lastChild !== after) {
          document.body.appendChild(after);
        }
      } else {
        if (before.parentElement) {
          before.parentElement.removeChild(before);
        }
        if (after.parentElement) {
          after.parentElement.removeChild(after);
        }
      }
    }
    _portalOpenInstances2.default.subscribe(bodyTrap);
  }
});

// ../../node_modules/react-modal/lib/components/ModalPortal.js
var require_ModalPortal = __commonJS({
  "../../node_modules/react-modal/lib/components/ModalPortal.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends3 = Object.assign || function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i3 = 0; i3 < props.length; i3++) {
          var descriptor = props[i3];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = __require("react");
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _focusManager = require_focusManager();
    var focusManager2 = _interopRequireWildcard(_focusManager);
    var _scopeTab = require_scopeTab();
    var _scopeTab2 = _interopRequireDefault(_scopeTab);
    var _ariaAppHider = require_ariaAppHider();
    var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
    var _classList = require_classList();
    var classList = _interopRequireWildcard(_classList);
    var _safeHTMLElement = require_safeHTMLElement();
    var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
    var _portalOpenInstances = require_portalOpenInstances();
    var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);
    require_bodyTrap();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance2, Constructor) {
      if (!(instance2 instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var CLASS_NAMES = {
      overlay: "ReactModal__Overlay",
      content: "ReactModal__Content"
    };
    var TAB_KEY = 9;
    var ESC_KEY = 27;
    var ariaHiddenInstances = 0;
    var ModalPortal = function(_Component) {
      _inherits(ModalPortal2, _Component);
      function ModalPortal2(props) {
        _classCallCheck(this, ModalPortal2);
        var _this = _possibleConstructorReturn(this, (ModalPortal2.__proto__ || Object.getPrototypeOf(ModalPortal2)).call(this, props));
        _this.setOverlayRef = function(overlay) {
          _this.overlay = overlay;
          _this.props.overlayRef && _this.props.overlayRef(overlay);
        };
        _this.setContentRef = function(content) {
          _this.content = content;
          _this.props.contentRef && _this.props.contentRef(content);
        };
        _this.afterClose = function() {
          var _this$props = _this.props, appElement = _this$props.appElement, ariaHideApp = _this$props.ariaHideApp, htmlOpenClassName = _this$props.htmlOpenClassName, bodyOpenClassName = _this$props.bodyOpenClassName;
          bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);
          htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);
          if (ariaHideApp && ariaHiddenInstances > 0) {
            ariaHiddenInstances -= 1;
            if (ariaHiddenInstances === 0) {
              ariaAppHider.show(appElement);
            }
          }
          if (_this.props.shouldFocusAfterRender) {
            if (_this.props.shouldReturnFocusAfterClose) {
              focusManager2.returnFocus(_this.props.preventScroll);
              focusManager2.teardownScopedFocus();
            } else {
              focusManager2.popWithoutFocus();
            }
          }
          if (_this.props.onAfterClose) {
            _this.props.onAfterClose();
          }
          _portalOpenInstances2.default.deregister(_this);
        };
        _this.open = function() {
          _this.beforeOpen();
          if (_this.state.afterOpen && _this.state.beforeClose) {
            clearTimeout(_this.closeTimer);
            _this.setState({ beforeClose: false });
          } else {
            if (_this.props.shouldFocusAfterRender) {
              focusManager2.setupScopedFocus(_this.node);
              focusManager2.markForFocusLater();
            }
            _this.setState({ isOpen: true }, function() {
              _this.openAnimationFrame = requestAnimationFrame(function() {
                _this.setState({ afterOpen: true });
                if (_this.props.isOpen && _this.props.onAfterOpen) {
                  _this.props.onAfterOpen({
                    overlayEl: _this.overlay,
                    contentEl: _this.content
                  });
                }
              });
            });
          }
        };
        _this.close = function() {
          if (_this.props.closeTimeoutMS > 0) {
            _this.closeWithTimeout();
          } else {
            _this.closeWithoutTimeout();
          }
        };
        _this.focusContent = function() {
          return _this.content && !_this.contentHasFocus() && _this.content.focus({ preventScroll: true });
        };
        _this.closeWithTimeout = function() {
          var closesAt = Date.now() + _this.props.closeTimeoutMS;
          _this.setState({ beforeClose: true, closesAt }, function() {
            _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
          });
        };
        _this.closeWithoutTimeout = function() {
          _this.setState({
            beforeClose: false,
            isOpen: false,
            afterOpen: false,
            closesAt: null
          }, _this.afterClose);
        };
        _this.handleKeyDown = function(event) {
          if (event.keyCode === TAB_KEY) {
            (0, _scopeTab2.default)(_this.content, event);
          }
          if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
            event.stopPropagation();
            _this.requestClose(event);
          }
        };
        _this.handleOverlayOnClick = function(event) {
          if (_this.shouldClose === null) {
            _this.shouldClose = true;
          }
          if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
            if (_this.ownerHandlesClose()) {
              _this.requestClose(event);
            } else {
              _this.focusContent();
            }
          }
          _this.shouldClose = null;
        };
        _this.handleContentOnMouseUp = function() {
          _this.shouldClose = false;
        };
        _this.handleOverlayOnMouseDown = function(event) {
          if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
            event.preventDefault();
          }
        };
        _this.handleContentOnClick = function() {
          _this.shouldClose = false;
        };
        _this.handleContentOnMouseDown = function() {
          _this.shouldClose = false;
        };
        _this.requestClose = function(event) {
          return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
        };
        _this.ownerHandlesClose = function() {
          return _this.props.onRequestClose;
        };
        _this.shouldBeClosed = function() {
          return !_this.state.isOpen && !_this.state.beforeClose;
        };
        _this.contentHasFocus = function() {
          return document.activeElement === _this.content || _this.content.contains(document.activeElement);
        };
        _this.buildClassName = function(which, additional) {
          var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
            base: CLASS_NAMES[which],
            afterOpen: CLASS_NAMES[which] + "--after-open",
            beforeClose: CLASS_NAMES[which] + "--before-close"
          };
          var className = classNames.base;
          if (_this.state.afterOpen) {
            className = className + " " + classNames.afterOpen;
          }
          if (_this.state.beforeClose) {
            className = className + " " + classNames.beforeClose;
          }
          return typeof additional === "string" && additional ? className + " " + additional : className;
        };
        _this.attributesFromObject = function(prefix3, items) {
          return Object.keys(items).reduce(function(acc, name) {
            acc[prefix3 + "-" + name] = items[name];
            return acc;
          }, {});
        };
        _this.state = {
          afterOpen: false,
          beforeClose: false
        };
        _this.shouldClose = null;
        _this.moveFromContentToOverlay = null;
        return _this;
      }
      _createClass(ModalPortal2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.props.isOpen) {
            this.open();
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          if (true) {
            if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
              console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.');
            }
            if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
              console.warn('React-Modal: "htmlOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.');
            }
          }
          if (this.props.isOpen && !prevProps.isOpen) {
            this.open();
          } else if (!this.props.isOpen && prevProps.isOpen) {
            this.close();
          }
          if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
            this.focusContent();
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.state.isOpen) {
            this.afterClose();
          }
          clearTimeout(this.closeTimer);
          cancelAnimationFrame(this.openAnimationFrame);
        }
      }, {
        key: "beforeOpen",
        value: function beforeOpen() {
          var _props = this.props, appElement = _props.appElement, ariaHideApp = _props.ariaHideApp, htmlOpenClassName = _props.htmlOpenClassName, bodyOpenClassName = _props.bodyOpenClassName;
          bodyOpenClassName && classList.add(document.body, bodyOpenClassName);
          htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);
          if (ariaHideApp) {
            ariaHiddenInstances += 1;
            ariaAppHider.hide(appElement);
          }
          _portalOpenInstances2.default.register(this);
        }
      }, {
        key: "render",
        value: function render2() {
          var _props2 = this.props, id = _props2.id, className = _props2.className, overlayClassName = _props2.overlayClassName, defaultStyles = _props2.defaultStyles, children = _props2.children;
          var contentStyles = className ? {} : defaultStyles.content;
          var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;
          if (this.shouldBeClosed()) {
            return null;
          }
          var overlayProps = {
            ref: this.setOverlayRef,
            className: this.buildClassName("overlay", overlayClassName),
            style: _extends3({}, overlayStyles, this.props.style.overlay),
            onClick: this.handleOverlayOnClick,
            onMouseDown: this.handleOverlayOnMouseDown
          };
          var contentProps = _extends3({
            id,
            ref: this.setContentRef,
            style: _extends3({}, contentStyles, this.props.style.content),
            className: this.buildClassName("content", className),
            tabIndex: "-1",
            onKeyDown: this.handleKeyDown,
            onMouseDown: this.handleContentOnMouseDown,
            onMouseUp: this.handleContentOnMouseUp,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            "aria-label": this.props.contentLabel
          }, this.attributesFromObject("aria", _extends3({ modal: true }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
            "data-testid": this.props.testId
          });
          var contentElement = this.props.contentElement(contentProps, children);
          return this.props.overlayElement(overlayProps, contentElement);
        }
      }]);
      return ModalPortal2;
    }(_react.Component);
    ModalPortal.defaultProps = {
      style: {
        overlay: {},
        content: {}
      },
      defaultStyles: {}
    };
    ModalPortal.propTypes = {
      isOpen: _propTypes2.default.bool.isRequired,
      defaultStyles: _propTypes2.default.shape({
        content: _propTypes2.default.object,
        overlay: _propTypes2.default.object
      }),
      style: _propTypes2.default.shape({
        content: _propTypes2.default.object,
        overlay: _propTypes2.default.object
      }),
      className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
      overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
      bodyOpenClassName: _propTypes2.default.string,
      htmlOpenClassName: _propTypes2.default.string,
      ariaHideApp: _propTypes2.default.bool,
      appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
      onAfterOpen: _propTypes2.default.func,
      onAfterClose: _propTypes2.default.func,
      onRequestClose: _propTypes2.default.func,
      closeTimeoutMS: _propTypes2.default.number,
      shouldFocusAfterRender: _propTypes2.default.bool,
      shouldCloseOnOverlayClick: _propTypes2.default.bool,
      shouldReturnFocusAfterClose: _propTypes2.default.bool,
      preventScroll: _propTypes2.default.bool,
      role: _propTypes2.default.string,
      contentLabel: _propTypes2.default.string,
      aria: _propTypes2.default.object,
      data: _propTypes2.default.object,
      children: _propTypes2.default.node,
      shouldCloseOnEsc: _propTypes2.default.bool,
      overlayRef: _propTypes2.default.func,
      contentRef: _propTypes2.default.func,
      id: _propTypes2.default.string,
      overlayElement: _propTypes2.default.func,
      contentElement: _propTypes2.default.func,
      testId: _propTypes2.default.string
    };
    exports.default = ModalPortal;
    module.exports = exports["default"];
  }
});

// ../../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es_exports = {};
__export(react_lifecycles_compat_es_exports, {
  polyfill: () => polyfill
});
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
function polyfill(Component2) {
  var prototype = Component2.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }
  if (typeof Component2.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
    return Component2;
  }
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === "function") {
    foundWillMountName = "componentWillMount";
  } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
    foundWillMountName = "UNSAFE_componentWillMount";
  }
  if (typeof prototype.componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "componentWillReceiveProps";
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof prototype.componentWillUpdate === "function") {
    foundWillUpdateName = "componentWillUpdate";
  } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
    foundWillUpdateName = "UNSAFE_componentWillUpdate";
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component2.displayName || Component2.name;
    var newApiName = typeof Component2.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");
  }
  if (typeof Component2.getDerivedStateFromProps === "function") {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }
  if (typeof prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof prototype.componentDidUpdate !== "function") {
      throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component2;
}
var init_react_lifecycles_compat_es = __esm({
  "../../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js"() {
    componentWillMount.__suppressDeprecationWarning = true;
    componentWillReceiveProps.__suppressDeprecationWarning = true;
    componentWillUpdate.__suppressDeprecationWarning = true;
  }
});

// ../../node_modules/react-modal/lib/components/Modal.js
var require_Modal = __commonJS({
  "../../node_modules/react-modal/lib/components/Modal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bodyOpenClassName = exports.portalClassName = void 0;
    var _extends3 = Object.assign || function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i3 = 0; i3 < props.length; i3++) {
          var descriptor = props[i3];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = __require("react");
    var _react2 = _interopRequireDefault(_react);
    var _reactDom = require_react_dom();
    var _reactDom2 = _interopRequireDefault(_reactDom);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _ModalPortal = require_ModalPortal();
    var _ModalPortal2 = _interopRequireDefault(_ModalPortal);
    var _ariaAppHider = require_ariaAppHider();
    var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
    var _safeHTMLElement = require_safeHTMLElement();
    var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
    var _reactLifecyclesCompat = (init_react_lifecycles_compat_es(), __toCommonJS(react_lifecycles_compat_es_exports));
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance2, Constructor) {
      if (!(instance2 instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var portalClassName = exports.portalClassName = "ReactModalPortal";
    var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";
    var isReact16 = _safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== void 0;
    var createHTMLElement = function createHTMLElement2(name) {
      return document.createElement(name);
    };
    var getCreatePortal = function getCreatePortal2() {
      return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
    };
    function getParentElement(parentSelector) {
      return parentSelector();
    }
    var Modal3 = function(_Component) {
      _inherits(Modal4, _Component);
      function Modal4() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, Modal4);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal4.__proto__ || Object.getPrototypeOf(Modal4)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function() {
          !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
          var parent = getParentElement(_this.props.parentSelector);
          if (parent && parent.contains(_this.node)) {
            parent.removeChild(_this.node);
          } else {
            console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
          }
        }, _this.portalRef = function(ref2) {
          _this.portal = ref2;
        }, _this.renderPortal = function(props) {
          var createPortal2 = getCreatePortal();
          var portal = createPortal2(_this, _react2.default.createElement(_ModalPortal2.default, _extends3({ defaultStyles: Modal4.defaultStyles }, props)), _this.node);
          _this.portalRef(portal);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(Modal4, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (!_safeHTMLElement.canUseDOM)
            return;
          if (!isReact16) {
            this.node = createHTMLElement("div");
          }
          this.node.className = this.props.portalClassName;
          var parent = getParentElement(this.props.parentSelector);
          parent.appendChild(this.node);
          !isReact16 && this.renderPortal(this.props);
        }
      }, {
        key: "getSnapshotBeforeUpdate",
        value: function getSnapshotBeforeUpdate(prevProps) {
          var prevParent = getParentElement(prevProps.parentSelector);
          var nextParent = getParentElement(this.props.parentSelector);
          return { prevParent, nextParent };
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, _2, snapshot) {
          if (!_safeHTMLElement.canUseDOM)
            return;
          var _props = this.props, isOpen = _props.isOpen, portalClassName2 = _props.portalClassName;
          if (prevProps.portalClassName !== portalClassName2) {
            this.node.className = portalClassName2;
          }
          var prevParent = snapshot.prevParent, nextParent = snapshot.nextParent;
          if (nextParent !== prevParent) {
            prevParent.removeChild(this.node);
            nextParent.appendChild(this.node);
          }
          if (!prevProps.isOpen && !isOpen)
            return;
          !isReact16 && this.renderPortal(this.props);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal)
            return;
          var state = this.portal.state;
          var now = Date.now();
          var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);
          if (closesAt) {
            if (!state.beforeClose) {
              this.portal.closeWithTimeout();
            }
            setTimeout(this.removePortal, closesAt - now);
          } else {
            this.removePortal();
          }
        }
      }, {
        key: "render",
        value: function render2() {
          if (!_safeHTMLElement.canUseDOM || !isReact16) {
            return null;
          }
          if (!this.node && isReact16) {
            this.node = createHTMLElement("div");
          }
          var createPortal2 = getCreatePortal();
          return createPortal2(_react2.default.createElement(_ModalPortal2.default, _extends3({
            ref: this.portalRef,
            defaultStyles: Modal4.defaultStyles
          }, this.props)), this.node);
        }
      }], [{
        key: "setAppElement",
        value: function setAppElement(element) {
          ariaAppHider.setElement(element);
        }
      }]);
      return Modal4;
    }(_react.Component);
    Modal3.propTypes = {
      isOpen: _propTypes2.default.bool.isRequired,
      style: _propTypes2.default.shape({
        content: _propTypes2.default.object,
        overlay: _propTypes2.default.object
      }),
      portalClassName: _propTypes2.default.string,
      bodyOpenClassName: _propTypes2.default.string,
      htmlOpenClassName: _propTypes2.default.string,
      className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
        base: _propTypes2.default.string.isRequired,
        afterOpen: _propTypes2.default.string.isRequired,
        beforeClose: _propTypes2.default.string.isRequired
      })]),
      overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
        base: _propTypes2.default.string.isRequired,
        afterOpen: _propTypes2.default.string.isRequired,
        beforeClose: _propTypes2.default.string.isRequired
      })]),
      appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
      onAfterOpen: _propTypes2.default.func,
      onRequestClose: _propTypes2.default.func,
      closeTimeoutMS: _propTypes2.default.number,
      ariaHideApp: _propTypes2.default.bool,
      shouldFocusAfterRender: _propTypes2.default.bool,
      shouldCloseOnOverlayClick: _propTypes2.default.bool,
      shouldReturnFocusAfterClose: _propTypes2.default.bool,
      preventScroll: _propTypes2.default.bool,
      parentSelector: _propTypes2.default.func,
      aria: _propTypes2.default.object,
      data: _propTypes2.default.object,
      role: _propTypes2.default.string,
      contentLabel: _propTypes2.default.string,
      shouldCloseOnEsc: _propTypes2.default.bool,
      overlayRef: _propTypes2.default.func,
      contentRef: _propTypes2.default.func,
      id: _propTypes2.default.string,
      overlayElement: _propTypes2.default.func,
      contentElement: _propTypes2.default.func
    };
    Modal3.defaultProps = {
      isOpen: false,
      portalClassName,
      bodyOpenClassName,
      role: "dialog",
      ariaHideApp: true,
      closeTimeoutMS: 0,
      shouldFocusAfterRender: true,
      shouldCloseOnEsc: true,
      shouldCloseOnOverlayClick: true,
      shouldReturnFocusAfterClose: true,
      preventScroll: false,
      parentSelector: function parentSelector() {
        return document.body;
      },
      overlayElement: function overlayElement(props, contentEl) {
        return _react2.default.createElement("div", props, contentEl);
      },
      contentElement: function contentElement(props, children) {
        return _react2.default.createElement("div", props, children);
      }
    };
    Modal3.defaultStyles = {
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.75)"
      },
      content: {
        position: "absolute",
        top: "40px",
        left: "40px",
        right: "40px",
        bottom: "40px",
        border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "4px",
        outline: "none",
        padding: "20px"
      }
    };
    (0, _reactLifecyclesCompat.polyfill)(Modal3);
    if (true) {
      Modal3.setCreateHTMLElement = function(fn4) {
        return createHTMLElement = fn4;
      };
    }
    exports.default = Modal3;
  }
});

// ../../node_modules/react-modal/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/react-modal/lib/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _Modal = require_Modal();
    var _Modal2 = _interopRequireDefault(_Modal);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _Modal2.default;
    module.exports = exports["default"];
  }
});

// ../../node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../../node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// ../../node_modules/lodash/_root.js
var require_root = __commonJS({
  "../../node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// ../../node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../../node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// ../../node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../../node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e2) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// ../../node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../../node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// ../../node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../../node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// ../../node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// ../../node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "../../node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction3(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction3;
  }
});

// ../../node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "../../node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// ../../node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "../../node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// ../../node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "../../node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e2) {
        }
        try {
          return func + "";
        } catch (e2) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// ../../node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "../../node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction3 = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction3(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// ../../node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "../../node_modules/lodash/_getValue.js"(exports, module) {
    function getValue2(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue2;
  }
});

// ../../node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "../../node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue2 = require_getValue();
    function getNative(object, key) {
      var value = getValue2(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// ../../node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "../../node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e2) {
      }
    }();
    module.exports = defineProperty;
  }
});

// ../../node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "../../node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// ../../node_modules/lodash/_arrayAggregator.js
var require_arrayAggregator = __commonJS({
  "../../node_modules/lodash/_arrayAggregator.js"(exports, module) {
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        var value = array[index2];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    module.exports = arrayAggregator;
  }
});

// ../../node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "../../node_modules/lodash/_createBaseFor.js"(exports, module) {
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index2];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    module.exports = createBaseFor;
  }
});

// ../../node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "../../node_modules/lodash/_baseFor.js"(exports, module) {
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  }
});

// ../../node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "../../node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n3, iteratee) {
      var index2 = -1, result = Array(n3);
      while (++index2 < n3) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// ../../node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../../node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// ../../node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "../../node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// ../../node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "../../node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// ../../node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "../../node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// ../../node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "../../node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// ../../node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "../../node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// ../../node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "../../node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// ../../node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "../../node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// ../../node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "../../node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// ../../node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "../../node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// ../../node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "../../node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types3 = freeModule && freeModule.require && freeModule.require("util").types;
        if (types3) {
          return types3;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e2) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// ../../node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "../../node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// ../../node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "../../node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType2 = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType2, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType2 && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// ../../node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "../../node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// ../../node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "../../node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// ../../node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "../../node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// ../../node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "../../node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty2.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// ../../node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "../../node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction3 = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction3(value);
    }
    module.exports = isArrayLike;
  }
});

// ../../node_modules/lodash/keys.js
var require_keys = __commonJS({
  "../../node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// ../../node_modules/lodash/_baseForOwn.js
var require_baseForOwn = __commonJS({
  "../../node_modules/lodash/_baseForOwn.js"(exports, module) {
    var baseFor = require_baseFor();
    var keys = require_keys();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    module.exports = baseForOwn;
  }
});

// ../../node_modules/lodash/_createBaseEach.js
var require_createBaseEach = __commonJS({
  "../../node_modules/lodash/_createBaseEach.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
        while (fromRight ? index2-- : ++index2 < length) {
          if (iteratee(iterable[index2], index2, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    module.exports = createBaseEach;
  }
});

// ../../node_modules/lodash/_baseEach.js
var require_baseEach = __commonJS({
  "../../node_modules/lodash/_baseEach.js"(exports, module) {
    var baseForOwn = require_baseForOwn();
    var createBaseEach = require_createBaseEach();
    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
  }
});

// ../../node_modules/lodash/_baseAggregator.js
var require_baseAggregator = __commonJS({
  "../../node_modules/lodash/_baseAggregator.js"(exports, module) {
    var baseEach = require_baseEach();
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection2) {
        setter(accumulator, value, iteratee(value), collection2);
      });
      return accumulator;
    }
    module.exports = baseAggregator;
  }
});

// ../../node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "../../node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// ../../node_modules/lodash/eq.js
var require_eq = __commonJS({
  "../../node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// ../../node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "../../node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// ../../node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "../../node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index2 == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index2, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// ../../node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "../../node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      return index2 < 0 ? void 0 : data[index2][1];
    }
    module.exports = listCacheGet;
  }
});

// ../../node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "../../node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// ../../node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "../../node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index2][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// ../../node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "../../node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// ../../node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "../../node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// ../../node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "../../node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// ../../node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "../../node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// ../../node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "../../node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// ../../node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "../../node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// ../../node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "../../node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// ../../node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "../../node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// ../../node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "../../node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// ../../node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "../../node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty2.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// ../../node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "../../node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
    }
    module.exports = hashHas;
  }
});

// ../../node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "../../node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// ../../node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "../../node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// ../../node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "../../node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// ../../node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "../../node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// ../../node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "../../node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// ../../node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "../../node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// ../../node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "../../node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// ../../node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "../../node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// ../../node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "../../node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// ../../node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "../../node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// ../../node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "../../node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// ../../node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "../../node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// ../../node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "../../node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// ../../node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "../../node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// ../../node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "../../node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values2) {
      var index2 = -1, length = values2 == null ? 0 : values2.length;
      this.__data__ = new MapCache();
      while (++index2 < length) {
        this.add(values2[index2]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// ../../node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "../../node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// ../../node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "../../node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// ../../node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "../../node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index2 < arrLength) {
        var arrValue = array[index2], othValue = other[index2];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// ../../node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "../../node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module.exports = Uint8Array2;
  }
});

// ../../node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "../../node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map) {
      var index2 = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index2] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// ../../node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "../../node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// ../../node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "../../node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// ../../node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "../../node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values2) {
      var index2 = -1, length = values2.length, offset4 = array.length;
      while (++index2 < length) {
        array[offset4 + index2] = values2[index2];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// ../../node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "../../node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// ../../node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "../../node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array[index2];
        if (predicate(value, index2, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// ../../node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "../../node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// ../../node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "../../node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// ../../node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "../../node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// ../../node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "../../node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index2 = objLength;
      while (index2--) {
        var key = objProps[index2];
        if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index2 < objLength) {
        key = objProps[index2];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// ../../node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "../../node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});

// ../../node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "../../node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// ../../node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "../../node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// ../../node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "../../node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap2 = getNative(root, "WeakMap");
    module.exports = WeakMap2;
  }
});

// ../../node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "../../node_modules/lodash/_getTag.js"(exports, module) {
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// ../../node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "../../node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// ../../node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "../../node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// ../../node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "../../node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index2 = matchData.length, length = index2, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index2--) {
        var data = matchData[index2];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index2 < length) {
        data = matchData[index2];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// ../../node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "../../node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    module.exports = isStrictComparable;
  }
});

// ../../node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "../../node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// ../../node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "../../node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// ../../node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "../../node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// ../../node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "../../node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// ../../node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "../../node_modules/lodash/_isKey.js"(exports, module) {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// ../../node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "../../node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// ../../node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "../../node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// ../../node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "../../node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match2, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match2);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// ../../node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "../../node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index2 < length) {
        result[index2] = iteratee(array[index2], index2, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// ../../node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "../../node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// ../../node_modules/lodash/toString.js
var require_toString = __commonJS({
  "../../node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString2(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString2;
  }
});

// ../../node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "../../node_modules/lodash/_castPath.js"(exports, module) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString2 = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString2(value));
    }
    module.exports = castPath;
  }
});

// ../../node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "../../node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// ../../node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "../../node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index2 = 0, length = path.length;
      while (object != null && index2 < length) {
        object = object[toKey(path[index2++])];
      }
      return index2 && index2 == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// ../../node_modules/lodash/get.js
var require_get = __commonJS({
  "../../node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get2(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get2;
  }
});

// ../../node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "../../node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// ../../node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "../../node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index2 = -1, length = path.length, result = false;
      while (++index2 < length) {
        var key = toKey(path[index2]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index2 != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// ../../node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "../../node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// ../../node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "../../node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get2 = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get2(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// ../../node_modules/lodash/identity.js
var require_identity = __commonJS({
  "../../node_modules/lodash/identity.js"(exports, module) {
    function identity(value) {
      return value;
    }
    module.exports = identity;
  }
});

// ../../node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "../../node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// ../../node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "../../node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// ../../node_modules/lodash/property.js
var require_property = __commonJS({
  "../../node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// ../../node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "../../node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  }
});

// ../../node_modules/lodash/_createAggregator.js
var require_createAggregator = __commonJS({
  "../../node_modules/lodash/_createAggregator.js"(exports, module) {
    var arrayAggregator = require_arrayAggregator();
    var baseAggregator = require_baseAggregator();
    var baseIteratee = require_baseIteratee();
    var isArray = require_isArray();
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
        return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
      };
    }
    module.exports = createAggregator;
  }
});

// ../../node_modules/lodash/groupBy.js
var require_groupBy = __commonJS({
  "../../node_modules/lodash/groupBy.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var createAggregator = require_createAggregator();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var groupBy2 = createAggregator(function(result, value, key) {
      if (hasOwnProperty2.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });
    module.exports = groupBy2;
  }
});

// ../../node_modules/lodash/partition.js
var require_partition = __commonJS({
  "../../node_modules/lodash/partition.js"(exports, module) {
    var createAggregator = require_createAggregator();
    var partition2 = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() {
      return [[], []];
    });
    module.exports = partition2;
  }
});

// ../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType2(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
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
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment4 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense6 = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer2(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement4(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment4;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense6;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer2;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement4;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType2;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// ../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is2();
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
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i3 = 0; i3 < keys.length; ++i3) {
          var key = keys[i3];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e2) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// ../../node_modules/react-is/cjs/react-is.development.js
var require_react_is_development3 = __commonJS({
  "../../node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType2(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
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
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment4 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense6 = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer2(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement4(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment4;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense6;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer2;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement4;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType2;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../../node_modules/react-is/index.js
var require_react_is3 = __commonJS({
  "../../node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development3();
    }
  }
});

// ../../node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "../../node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i3 = 0; i3 < selection.rangeCount; i3++) {
        ranges.push(selection.getRangeAt(i3));
      }
      switch (active.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range) {
            selection.addRange(range);
          });
        }
        active && active.focus();
      };
    };
  }
});

// ../../node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "../../node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format2(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy(text, options) {
      var debug, message, reselectPrevious, range, selection, mark, success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e2) {
          e2.stopPropagation();
          if (options.format) {
            e2.preventDefault();
            if (typeof e2.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format3 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format3, text);
            } else {
              e2.clipboardData.clearData();
              e2.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e2.preventDefault();
            options.onCopy(e2.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format2("message" in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy;
  }
});

// src/BlocksEditor.tsx
import { Suspense as Suspense4, useLayoutEffect as useLayoutEffect6 } from "react";

// src/components/BlockTooltip/BlockTooltip.tsx
var BlockTooltip = ({
  title,
  description
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "BlockTooltip"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-semibold"
  }, title), description && /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-sm"
  }, description));
};
var BlockTooltip_default = BlockTooltip;

// assets/svg/drag.svg
import * as React2 from "react";
var SvgDrag = (props) => /* @__PURE__ */ React2.createElement("svg", {
  width: 33,
  height: 32,
  viewBox: "0 0 33 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React2.createElement("path", {
  d: "M3.04007 13.0524C3.32723 12.6855 3.85427 12.6307 4.2172 12.9297L6.59917 14.8913C6.13983 9.67928 9.27272 4.70023 14.3434 3.15603C17.1741 2.29397 20.18 2.61562 22.8074 4.06187C23.2174 4.28751 23.3757 4.80764 23.161 5.22343C22.9463 5.63933 22.4399 5.79356 22.0299 5.56777C19.7993 4.33985 17.2471 4.06682 14.8437 4.79875C10.4373 6.14068 7.75656 10.5378 8.30343 15.0753L10.5355 12.2238C10.8226 11.8568 11.3497 11.8021 11.7127 12.1011C12.0757 12.4 12.1372 12.9397 11.8501 13.3065L8.51826 17.5627C8.518 17.563 8.51782 17.5632 8.51768 17.5635C8.43628 17.6674 8.33572 17.7462 8.22496 17.7992C8.18812 17.8168 8.15009 17.8316 8.11128 17.8434C7.85576 17.9212 7.5664 17.8722 7.34058 17.6863L3.17761 14.2579C2.81443 13.9588 2.75298 13.4192 3.04007 13.0524Z",
  fill: "#222222"
}), /* @__PURE__ */ React2.createElement("path", {
  d: "M28.1911 14.26C27.4517 14.4581 27.0124 15.2189 27.2106 15.9583L27.6293 17.521C27.6623 17.6443 27.5891 17.7711 27.4659 17.8041C27.3426 17.8371 27.2158 17.7639 27.1828 17.6407L26.5248 15.185C26.3267 14.4456 25.5658 14.0063 24.8264 14.2044C24.087 14.4025 23.6478 15.1634 23.8459 15.9028L24.5039 18.3585C24.5369 18.4817 24.4637 18.6085 24.3404 18.6415C24.2172 18.6746 24.0904 18.6013 24.0574 18.4781L23.1601 15.1295C22.962 14.3901 22.2011 13.9508 21.4618 14.1489C20.7224 14.347 20.2831 15.1079 20.4812 15.8473L21.3785 19.1959C21.4115 19.3192 21.3383 19.446 21.215 19.479C21.0918 19.512 20.965 19.4388 20.932 19.3156L18.4795 10.1626C18.2813 9.4232 17.5205 8.98392 16.7811 9.18203C16.0417 9.38015 15.6024 10.141 15.8005 10.8804L18.5983 21.3219L15.2536 20.3298L15.2509 20.3306C15.0209 20.2582 14.7607 20.2513 14.5017 20.3207C13.7605 20.5193 13.3226 21.2779 13.5212 22.0191C13.5906 22.2781 13.729 22.509 13.918 22.6784L13.9152 22.6754L19.885 28.4922C20.8189 29.402 22.1629 29.753 23.4229 29.4153L29.4281 27.8062C31.4007 27.2777 32.5715 25.2498 32.0429 23.2773L29.8895 15.2405C29.6914 14.5011 28.9305 14.0618 28.1911 14.26Z",
  fill: "#222222"
}));

// src/components/AddBlocks/AddBlocks.tsx
var import_react_modal2 = __toESM(require_lib(), 1);

// ../../node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// ../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// ../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// ../../node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style2 = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style2);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style2 = styleProperties.reduce(function(style3, property) {
        style3[property] = "";
        return style3;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style2);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// ../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// ../../node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// ../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// ../../node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// ../../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// ../../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// ../../node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}

// ../../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// ../../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// ../../node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// ../../node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset4 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset4, _state$modifiersData$.centerOffset = offset4 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// ../../node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// ../../node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x2 = _ref.x, y2 = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position3 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position3 === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position3
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// ../../node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance2 = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll3 = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll3) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance2.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance2.update, passive);
  }
  return function() {
    if (scroll3) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance2.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance2.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// ../../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// ../../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}

// ../../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// ../../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}

// ../../node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// ../../node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// ../../node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset4 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset4[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// ../../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a3, b3) {
    return overflows[a3] - overflows[b3];
  });
}

// ../../node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i3 = 0; i3 < placements2.length; i3++) {
    var placement = placements2[i3];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// ../../node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// ../../node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset4) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset4 === "function" ? offset4(Object.assign({}, rects, {
    placement
  })) : offset4, skidding = _ref[0], distance3 = _ref[1];
  skidding = skidding || 0;
  distance3 = (distance3 || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance3,
    y: skidding
  } : {
    x: skidding,
    y: distance3
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset4 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset4);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// ../../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// ../../node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// ../../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset4 = popperOffsets2[mainAxis];
    var min2 = offset4 + overflow[mainSide];
    var max2 = offset4 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset4 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset4 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset4, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset4;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// ../../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll3 = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll3 = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll3.scrollLeft - offsets.x,
    y: rect.top + scroll3.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// ../../node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// ../../node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn4) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn4());
        });
      });
    }
    return pending;
  };
}

// ../../node_modules/@popperjs/core/lib/utils/format.js
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p3, c3) {
    return p3.replace(/%s/, c3);
  }, str);
}

// ../../node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index2, self2) {
      return self2.indexOf(value) === index2;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s3) {
            return '"' + s3 + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// ../../node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy(arr, fn4) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn4(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// ../../node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// ../../node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance2 = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance2.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn4 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn4 === "function") {
            state = fn4({
              state,
              options: _options,
              name,
              instance: instance2
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance2.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance2;
    }
    instance2.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect5 = _ref3.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state,
            name,
            instance: instance2,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn4) {
        return fn4();
      });
      effectCleanupFns = [];
    }
    return instance2;
  };
}

// ../../node_modules/@popperjs/core/lib/popper.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});

// ../../node_modules/tippy.js/dist/tippy.esm.js
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
};
function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value, index2, defaultValue) {
  if (Array.isArray(value)) {
    var v2 = value[index2];
    return v2 == null ? Array.isArray(defaultValue) ? defaultValue[index2] : defaultValue : v2;
  }
  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === "function" ? value.apply(void 0, args) : value;
}
function debounce2(fn4, ms) {
  if (ms === 0) {
    return fn4;
  }
  var timeout;
  return function(arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn4(arg);
    }, ms);
  };
}
function removeProperties(obj, keys) {
  var clone = Object.assign({}, obj);
  keys.forEach(function(key) {
    delete clone[key];
  });
  return clone;
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function(item, index2) {
    return arr.indexOf(item) === index2;
  });
}
function getBasePlacement2(placement) {
  return placement.split("-")[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function div() {
  return document.createElement("div");
}
function isElement2(value) {
  return ["Element", "Fragment"].some(function(type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, "NodeList");
}
function isMouseEvent(value) {
  return isType(value, "MouseEvent");
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement2(value)) {
    return [value];
  }
  if (isNodeList(value)) {
    return arrayFrom(value);
  }
  if (Array.isArray(value)) {
    return value;
  }
  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function(el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function(el) {
    if (el) {
      el.setAttribute("data-state", state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;
  var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX, clientY = event.clientY;
  return popperTreeData.every(function(_ref) {
    var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement2(popperState.placement);
    var offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
    var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
    box[method](event, listener);
  });
}
function actualContains(parent, child) {
  var target = child;
  while (target) {
    var _target$getRootNode;
    if (parent.contains(target)) {
      return true;
    }
    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener("mousemove", onDocumentMouseMove);
  }
}
function onDocumentMouseMove() {
  var now = performance.now();
  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener("mousemove", onDocumentMouseMove);
  }
  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    var instance2 = activeElement._tippy;
    if (activeElement.blur && !instance2.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener("blur", onWindowBlur);
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? !!window.msCrypto : false;
function createMemoryLeakWarning(method) {
  var txt = method === "destroy" ? "n already-" : " ";
  return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function clean(value) {
  var spacesAndTabs2 = /[ \t]{2,}/g;
  var lineStartWithSpaces2 = /^[ \t]*/gm;
  return value.replace(spacesAndTabs2, " ").replace(lineStartWithSpaces2, "").trim();
}
function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\u{1F477}\u200D This is a development-only message. It will be removed in production.\n  ");
}
function getFormattedMessage(message) {
  return [
    getDevMessage(message),
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    "line-height: 1.5",
    "color: #a6a095;"
  ];
}
var visitedMessages;
if (true) {
  resetVisitedMessages();
}
function resetVisitedMessages() {
  visitedMessages = /* @__PURE__ */ new Set();
}
function warnWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console;
    visitedMessages.add(message);
    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
function errorWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console2;
    visitedMessages.add(message);
    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
  }
}
function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === "[object Object]" && !targets.addEventListener;
  errorWhen(didPassFalsyValue, ["tippy() was passed", "`" + String(targets) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" "));
  errorWhen(didPassPlainObject, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: "fade",
  arrow: true,
  content: "",
  inertia: false,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {
  },
  onBeforeUpdate: function onBeforeUpdate() {
  },
  onCreate: function onCreate() {
  },
  onDestroy: function onDestroy() {
  },
  onHidden: function onHidden() {
  },
  onHide: function onHide() {
  },
  onMount: function onMount() {
  },
  onShow: function onShow() {
  },
  onShown: function onShown() {
  },
  onTrigger: function onTrigger() {
  },
  onUntrigger: function onUntrigger() {
  },
  onClickOutside: function onClickOutside() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps2(partialProps) {
  if (true) {
    validateProps(partialProps, []);
  }
  var keys = Object.keys(partialProps);
  keys.forEach(function(key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps2 = plugins.reduce(function(acc, plugin) {
    var name = plugin.name, defaultValue = plugin.defaultValue;
    if (name) {
      var _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
function getDataAttributeProps(reference2, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function(acc, key) {
    var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === "content") {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e2) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
function evaluateProps(reference2, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference2])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
    content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
  };
  return out;
}
function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }
  if (plugins === void 0) {
    plugins = [];
  }
  var keys = Object.keys(partialProps);
  keys.forEach(function(prop) {
    var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
    var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop);
    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function(plugin) {
        return plugin.name === prop;
      }).length === 0;
    }
    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", "\n\n", "All props: https://atomiks.github.io/tippyjs/v6/all-props/\n", "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var innerHTML = function innerHTML2() {
  return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}
function createArrowElement(value) {
  var arrow2 = div();
  if (value === true) {
    arrow2.className = ARROW_CLASS;
  } else {
    arrow2.className = SVG_ARROW_CLASS;
    if (isElement2(value)) {
      arrow2.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow2, value);
    }
  }
  return arrow2;
}
function setContent(content, props) {
  if (isElement2(props.content)) {
    dangerouslySetInnerHTML(content, "");
    content.appendChild(props.content);
  } else if (typeof props.content !== "function") {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper2) {
  var box = popper2.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function(node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function(node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function(node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance2) {
  var popper2 = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute("data-state", "hidden");
  box.setAttribute("tabindex", "-1");
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute("data-state", "hidden");
  setContent(content, instance2.props);
  popper2.appendChild(box);
  box.appendChild(content);
  onUpdate(instance2.props, instance2.props);
  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute("data-theme", nextProps.theme);
    } else {
      box2.removeAttribute("data-theme");
    }
    if (typeof nextProps.animation === "string") {
      box2.setAttribute("data-animation", nextProps.animation);
    } else {
      box2.removeAttribute("data-animation");
    }
    if (nextProps.inertia) {
      box2.setAttribute("data-inertia", "");
    } else {
      box2.removeAttribute("data-inertia");
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute("role", nextProps.role);
    } else {
      box2.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content2, instance2.props);
    }
    if (nextProps.arrow) {
      if (!arrow2) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow2);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow2) {
      box2.removeChild(arrow2);
    }
  }
  return {
    popper: popper2,
    onUpdate
  };
}
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = [];
var mountedInstances = [];
function createTippy(reference2, passedProps) {
  var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners2 = [];
  var debouncedOnMouseMove = debounce2(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    isEnabled: true,
    isVisible: false,
    isDestroyed: false,
    isMounted: false,
    isShown: false
  };
  var instance2 = {
    id,
    reference: reference2,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    clearDelayTimeouts,
    setProps,
    setContent: setContent2,
    show,
    hide: hide2,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy
  };
  if (!props.render) {
    if (true) {
      errorWhen(true, "render() function has not been supplied.");
    }
    return instance2;
  }
  var _props$render = props.render(instance2), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
  popper2.setAttribute("data-tippy-root", "");
  popper2.id = "tippy-" + instance2.id;
  instance2.popper = popper2;
  reference2._tippy = instance2;
  popper2._tippy = instance2;
  var pluginsHooks = plugins.map(function(plugin) {
    return plugin.fn(instance2);
  });
  var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook("onCreate", [instance2]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper2.addEventListener("mouseenter", function() {
    if (instance2.props.interactive && instance2.state.isVisible) {
      instance2.clearDelayTimeouts();
    }
  });
  popper2.addEventListener("mouseleave", function() {
    if (instance2.props.interactive && instance2.props.trigger.indexOf("mouseenter") >= 0) {
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    }
  });
  return instance2;
  function getNormalizedTouchSettings() {
    var touch = instance2.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === "hold";
  }
  function getIsDefaultRenderFn() {
    var _instance$props$rende;
    return !!((_instance$props$rende = instance2.props.render) != null && _instance$props$rende.$$tippy);
  }
  function getCurrentTarget() {
    return currentTarget || reference2;
  }
  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  function getDefaultTemplateChildren() {
    return getChildren(popper2);
  }
  function getDelay(isShow) {
    if (instance2.state.isMounted && !instance2.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
      return 0;
    }
    return getValueAtIndexOrReturn(instance2.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper2.style.pointerEvents = instance2.props.interactive && !fromHide ? "" : "none";
    popper2.style.zIndex = "" + instance2.props.zIndex;
  }
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function(pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      var _instance$props;
      (_instance$props = instance2.props)[hook].apply(_instance$props, args);
    }
  }
  function handleAriaContentAttribute() {
    var aria = instance2.props.aria;
    if (!aria.content) {
      return;
    }
    var attr = "aria-" + aria.content;
    var id2 = popper2.id;
    var nodes = normalizeToArray(instance2.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      var currentValue = node.getAttribute(attr);
      if (instance2.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
      } else {
        var nextValue = currentValue && currentValue.replace(id2, "").trim();
        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance2.props.aria.expanded) {
      return;
    }
    var nodes = normalizeToArray(instance2.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      if (instance2.props.interactive) {
        node.setAttribute("aria-expanded", instance2.state.isVisible && node === getCurrentTarget() ? "true" : "false");
      } else {
        node.removeAttribute("aria-expanded");
      }
    });
  }
  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  function onDocumentPress(event) {
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === "mousedown") {
        return;
      }
    }
    var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
    if (instance2.props.interactive && actualContains(popper2, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance2.props.triggerTarget || reference2).some(function(el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance2.state.isVisible && instance2.props.trigger.indexOf("click") >= 0) {
        return;
      }
    } else {
      invokeHook("onClickOutside", [instance2, event]);
    }
    if (instance2.props.hideOnClick === true) {
      instance2.clearDelayTimeouts();
      instance2.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function() {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance2.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  function onTouchMove() {
    didTouchMove = true;
  }
  function onTouchStart() {
    didTouchMove = false;
  }
  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener("mousedown", onDocumentPress, true);
    doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener("mousedown", onDocumentPress, true);
    doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function() {
      if (!instance2.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
        callback();
      }
    });
  }
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;
    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, "remove", listener);
        callback();
      }
    }
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, "remove", currentTransitionEndListener);
    updateTransitionEndListener(box, "add", listener);
    currentTransitionEndListener = listener;
  }
  function on2(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    var nodes = normalizeToArray(instance2.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      node.addEventListener(eventType, handler, options);
      listeners2.push({
        node,
        eventType,
        handler,
        options
      });
    });
  }
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on2("touchstart", onTrigger2, {
        passive: true
      });
      on2("touchend", onMouseLeave, {
        passive: true
      });
    }
    splitBySpaces(instance2.props.trigger).forEach(function(eventType) {
      if (eventType === "manual") {
        return;
      }
      on2(eventType, onTrigger2);
      switch (eventType) {
        case "mouseenter":
          on2("mouseleave", onMouseLeave);
          break;
        case "focus":
          on2(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
          break;
        case "focusin":
          on2("focusout", onBlurOrFocusOut);
          break;
      }
    });
  }
  function removeListeners() {
    listeners2.forEach(function(_ref) {
      var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners2 = [];
  }
  function onTrigger2(event) {
    var _lastTriggerEvent;
    var shouldScheduleClickHide = false;
    if (!instance2.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }
    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance2.state.isVisible && isMouseEvent(event)) {
      mouseMoveListeners.forEach(function(listener) {
        return listener(event);
      });
    }
    if (event.type === "click" && (instance2.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance2.props.hideOnClick !== false && instance2.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }
    if (event.type === "click") {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }
  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
    if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
      return;
    }
    var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
      var _instance$popperInsta;
      var instance3 = popper3._tippy;
      var state2 = (_instance$popperInsta = instance3.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper3.getBoundingClientRect(),
          popperState: state2,
          props
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }
  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance2.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance2.props.interactive) {
      instance2.hideWithInteractivity(event);
      return;
    }
    scheduleHide(event);
  }
  function onBlurOrFocusOut(event) {
    if (instance2.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
      return;
    }
    if (instance2.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
      return;
    }
    scheduleHide(event);
  }
  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
  }
  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance2.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset4 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
    var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference2;
    var tippyModifier = {
      name: "$$tippy",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function fn4(_ref2) {
        var state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
            if (attr === "placement") {
              box.setAttribute("data-placement", state2.placement);
            } else {
              if (state2.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, "");
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state2.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: "offset",
      options: {
        offset: offset4
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow2) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow2,
          padding: 3
        }
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance2.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers
    }));
  }
  function destroyPopperInstance() {
    if (instance2.popperInstance) {
      instance2.popperInstance.destroy();
      instance2.popperInstance = null;
    }
  }
  function mount() {
    var appendTo = instance2.props.appendTo;
    var parentNode;
    var node = getCurrentTarget();
    if (instance2.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    }
    if (!parentNode.contains(popper2)) {
      parentNode.appendChild(popper2);
    }
    instance2.state.isMounted = true;
    createPopperInstance();
    if (true) {
      warnWhen(instance2.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper2, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
    }
  }
  function getNestedPopperTree() {
    return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
  }
  function scheduleShow(event) {
    instance2.clearDelayTimeouts();
    if (event) {
      invokeHook("onTrigger", [instance2, event]);
    }
    addDocumentPress();
    var delay = getDelay(true);
    var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function() {
        instance2.show();
      }, delay);
    } else {
      instance2.show();
    }
  }
  function scheduleHide(event) {
    instance2.clearDelayTimeouts();
    invokeHook("onUntrigger", [instance2, event]);
    if (!instance2.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance2.props.trigger.indexOf("mouseenter") >= 0 && instance2.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }
    var delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function() {
        if (instance2.state.isVisible) {
          instance2.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function() {
        instance2.hide();
      });
    }
  }
  function enable() {
    instance2.state.isEnabled = true;
  }
  function disable() {
    instance2.hide();
    instance2.state.isEnabled = false;
  }
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  function setProps(partialProps) {
    if (true) {
      warnWhen(instance2.state.isDestroyed, createMemoryLeakWarning("setProps"));
    }
    if (instance2.state.isDestroyed) {
      return;
    }
    invokeHook("onBeforeUpdate", [instance2, partialProps]);
    removeListeners();
    var prevProps = instance2.props;
    var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance2.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce2(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
        node.removeAttribute("aria-expanded");
      });
    } else if (nextProps.triggerTarget) {
      reference2.removeAttribute("aria-expanded");
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance2.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook("onAfterUpdate", [instance2, partialProps]);
  }
  function setContent2(content) {
    instance2.setProps({
      content
    });
  }
  function show() {
    if (true) {
      warnWhen(instance2.state.isDestroyed, createMemoryLeakWarning("show"));
    }
    var isAlreadyVisible = instance2.state.isVisible;
    var isDestroyed = instance2.state.isDestroyed;
    var isDisabled = !instance2.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance2.props.touch;
    var duration = getValueAtIndexOrReturn(instance2.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute("disabled")) {
      return;
    }
    invokeHook("onShow", [instance2], false);
    if (instance2.props.onShow(instance2) === false) {
      return;
    }
    instance2.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "visible";
    }
    handleStyles();
    addDocumentPress();
    if (!instance2.state.isMounted) {
      popper2.style.transition = "none";
    }
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = function onFirstUpdate2() {
      var _instance$popperInsta2;
      if (!instance2.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper2.offsetHeight;
      popper2.style.transition = instance2.props.moveTransition;
      if (getIsDefaultRenderFn() && instance2.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], "visible");
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance2);
      (_instance$popperInsta2 = instance2.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook("onMount", [instance2]);
      if (instance2.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function() {
          instance2.state.isShown = true;
          invokeHook("onShown", [instance2]);
        });
      }
    };
    mount();
  }
  function hide2() {
    if (true) {
      warnWhen(instance2.state.isDestroyed, createMemoryLeakWarning("hide"));
    }
    var isAlreadyHidden = !instance2.state.isVisible;
    var isDestroyed = instance2.state.isDestroyed;
    var isDisabled = !instance2.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance2.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook("onHide", [instance2], false);
    if (instance2.props.onHide(instance2) === false) {
      return;
    }
    instance2.state.isVisible = false;
    instance2.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "hidden";
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
      if (instance2.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], "hidden");
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance2.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance2.unmount);
      }
    } else {
      instance2.unmount();
    }
  }
  function hideWithInteractivity(event) {
    if (true) {
      warnWhen(instance2.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
    }
    getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }
  function unmount() {
    if (true) {
      warnWhen(instance2.state.isDestroyed, createMemoryLeakWarning("unmount"));
    }
    if (instance2.state.isVisible) {
      instance2.hide();
    }
    if (!instance2.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function(nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper2.parentNode) {
      popper2.parentNode.removeChild(popper2);
    }
    mountedInstances = mountedInstances.filter(function(i3) {
      return i3 !== instance2;
    });
    instance2.state.isMounted = false;
    invokeHook("onHidden", [instance2]);
  }
  function destroy() {
    if (true) {
      warnWhen(instance2.state.isDestroyed, createMemoryLeakWarning("destroy"));
    }
    if (instance2.state.isDestroyed) {
      return;
    }
    instance2.clearDelayTimeouts();
    instance2.unmount();
    removeListeners();
    delete reference2._tippy;
    instance2.state.isDestroyed = true;
    invokeHook("onDestroy", [instance2]);
  }
}
function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  if (true) {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }
  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins
  });
  var elements = getArrayOfElements(targets);
  if (true) {
    var isSingleContentElement = isElement2(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var instances = elements.reduce(function(acc, reference2) {
    var instance2 = reference2 && createTippy(reference2, passedProps);
    if (instance2) {
      acc.push(instance2);
    }
    return acc;
  }, []);
  return isElement2(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var applyStylesModifier = Object.assign({}, applyStyles_default, {
  effect: function effect4(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  }
});
tippy.setDefaultProps({
  render
});
var tippy_esm_default = tippy;

// ../../node_modules/@tippyjs/react/dist/tippy-react.esm.js
var import_react_dom = __toESM(require_react_dom());
import React3, { useLayoutEffect, useEffect, useRef, useState, cloneElement, useMemo, forwardRef as forwardRef$1 } from "react";
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++) {
    key = sourceKeys[i3];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var isBrowser2 = typeof window !== "undefined" && typeof document !== "undefined";
function preserveRef(ref2, node) {
  if (ref2) {
    if (typeof ref2 === "function") {
      ref2(node);
    }
    if ({}.hasOwnProperty.call(ref2, "current")) {
      ref2.current = node;
    }
  }
}
function ssrSafeCreateDiv() {
  return isBrowser2 && document.createElement("div");
}
function toDataAttributes(attrs) {
  var dataAttrs = {
    "data-placement": attrs.placement
  };
  if (attrs.referenceHidden) {
    dataAttrs["data-reference-hidden"] = "";
  }
  if (attrs.escaped) {
    dataAttrs["data-escaped"] = "";
  }
  return dataAttrs;
}
function deepEqual(x2, y2) {
  if (x2 === y2) {
    return true;
  } else if (typeof x2 === "object" && x2 != null && typeof y2 === "object" && y2 != null) {
    if (Object.keys(x2).length !== Object.keys(y2).length) {
      return false;
    }
    for (var prop in x2) {
      if (y2.hasOwnProperty(prop)) {
        if (!deepEqual(x2[prop], y2[prop])) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
function uniqueByShape(arr) {
  var output = [];
  arr.forEach(function(item) {
    if (!output.find(function(outputItem) {
      return deepEqual(item, outputItem);
    })) {
      output.push(item);
    }
  });
  return output;
}
function deepPreserveProps(instanceProps, componentProps) {
  var _instanceProps$popper, _componentProps$poppe;
  return Object.assign({}, componentProps, {
    popperOptions: Object.assign({}, instanceProps.popperOptions, componentProps.popperOptions, {
      modifiers: uniqueByShape([].concat(((_instanceProps$popper = instanceProps.popperOptions) == null ? void 0 : _instanceProps$popper.modifiers) || [], ((_componentProps$poppe = componentProps.popperOptions) == null ? void 0 : _componentProps$poppe.modifiers) || []))
    })
  });
}
var useIsomorphicLayoutEffect = isBrowser2 ? useLayoutEffect : useEffect;
function useMutableBox(initialValue) {
  var ref2 = useRef();
  if (!ref2.current) {
    ref2.current = typeof initialValue === "function" ? initialValue() : initialValue;
  }
  return ref2.current;
}
function updateClassName(box, action, classNames) {
  classNames.split(/\s+/).forEach(function(name) {
    if (name) {
      box.classList[action](name);
    }
  });
}
var classNamePlugin = {
  name: "className",
  defaultValue: "",
  fn: function fn2(instance2) {
    var box = instance2.popper.firstElementChild;
    var isDefaultRenderFn = function isDefaultRenderFn2() {
      var _instance$props$rende;
      return !!((_instance$props$rende = instance2.props.render) == null ? void 0 : _instance$props$rende.$$tippy);
    };
    function add3() {
      if (instance2.props.className && !isDefaultRenderFn()) {
        if (true) {
          console.warn(["@tippyjs/react: Cannot use `className` prop in conjunction with", "`render` prop. Place the className on the element you are", "rendering."].join(" "));
        }
        return;
      }
      updateClassName(box, "add", instance2.props.className);
    }
    function remove() {
      if (isDefaultRenderFn()) {
        updateClassName(box, "remove", instance2.props.className);
      }
    }
    return {
      onCreate: add3,
      onBeforeUpdate: remove,
      onAfterUpdate: add3
    };
  }
};
function TippyGenerator(tippy2) {
  function Tippy(_ref) {
    var children = _ref.children, content = _ref.content, visible = _ref.visible, singleton = _ref.singleton, render2 = _ref.render, reference2 = _ref.reference, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, _ref$ignoreAttributes = _ref.ignoreAttributes, ignoreAttributes = _ref$ignoreAttributes === void 0 ? true : _ref$ignoreAttributes, __source = _ref.__source, __self = _ref.__self, restOfNativeProps = _objectWithoutPropertiesLoose(_ref, ["children", "content", "visible", "singleton", "render", "reference", "disabled", "ignoreAttributes", "__source", "__self"]);
    var isControlledMode = visible !== void 0;
    var isSingletonMode = singleton !== void 0;
    var _useState = useState(false), mounted = _useState[0], setMounted = _useState[1];
    var _useState2 = useState({}), attrs = _useState2[0], setAttrs = _useState2[1];
    var _useState3 = useState(), singletonContent = _useState3[0], setSingletonContent = _useState3[1];
    var mutableBox = useMutableBox(function() {
      return {
        container: ssrSafeCreateDiv(),
        renders: 1
      };
    });
    var props = Object.assign({
      ignoreAttributes
    }, restOfNativeProps, {
      content: mutableBox.container
    });
    if (isControlledMode) {
      if (true) {
        ["trigger", "hideOnClick", "showOnCreate"].forEach(function(nativeStateProp) {
          if (props[nativeStateProp] !== void 0) {
            console.warn(["@tippyjs/react: Cannot specify `" + nativeStateProp + "` prop in", "controlled mode (`visible` prop)"].join(" "));
          }
        });
      }
      props.trigger = "manual";
      props.hideOnClick = false;
    }
    if (isSingletonMode) {
      disabled = true;
    }
    var computedProps = props;
    var plugins = props.plugins || [];
    if (render2) {
      computedProps = Object.assign({}, props, {
        plugins: isSingletonMode && singleton.data != null ? [].concat(plugins, [{
          fn: function fn4() {
            return {
              onTrigger: function onTrigger2(instance2, event) {
                var node = singleton.data.children.find(function(_ref2) {
                  var instance3 = _ref2.instance;
                  return instance3.reference === event.currentTarget;
                });
                instance2.state.$$activeSingletonInstance = node.instance;
                setSingletonContent(node.content);
              }
            };
          }
        }]) : plugins,
        render: function render3() {
          return {
            popper: mutableBox.container
          };
        }
      });
    }
    var deps = [reference2].concat(children ? [children.type] : []);
    useIsomorphicLayoutEffect(function() {
      var element = reference2;
      if (reference2 && reference2.hasOwnProperty("current")) {
        element = reference2.current;
      }
      var instance2 = tippy2(element || mutableBox.ref || ssrSafeCreateDiv(), Object.assign({}, computedProps, {
        plugins: [classNamePlugin].concat(props.plugins || [])
      }));
      mutableBox.instance = instance2;
      if (disabled) {
        instance2.disable();
      }
      if (visible) {
        instance2.show();
      }
      if (isSingletonMode) {
        singleton.hook({
          instance: instance2,
          content,
          props: computedProps,
          setSingletonContent
        });
      }
      setMounted(true);
      return function() {
        instance2.destroy();
        singleton == null ? void 0 : singleton.cleanup(instance2);
      };
    }, deps);
    useIsomorphicLayoutEffect(function() {
      var _instance$popperInsta;
      if (mutableBox.renders === 1) {
        mutableBox.renders++;
        return;
      }
      var instance2 = mutableBox.instance;
      instance2.setProps(deepPreserveProps(instance2.props, computedProps));
      (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.forceUpdate();
      if (disabled) {
        instance2.disable();
      } else {
        instance2.enable();
      }
      if (isControlledMode) {
        if (visible) {
          instance2.show();
        } else {
          instance2.hide();
        }
      }
      if (isSingletonMode) {
        singleton.hook({
          instance: instance2,
          content,
          props: computedProps,
          setSingletonContent
        });
      }
    });
    useIsomorphicLayoutEffect(function() {
      var _instance$props$poppe;
      if (!render2) {
        return;
      }
      var instance2 = mutableBox.instance;
      instance2.setProps({
        popperOptions: Object.assign({}, instance2.props.popperOptions, {
          modifiers: [].concat((((_instance$props$poppe = instance2.props.popperOptions) == null ? void 0 : _instance$props$poppe.modifiers) || []).filter(function(_ref3) {
            var name = _ref3.name;
            return name !== "$$tippyReact";
          }), [{
            name: "$$tippyReact",
            enabled: true,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: function fn4(_ref4) {
              var _state$modifiersData;
              var state = _ref4.state;
              var hideData = (_state$modifiersData = state.modifiersData) == null ? void 0 : _state$modifiersData.hide;
              if (attrs.placement !== state.placement || attrs.referenceHidden !== (hideData == null ? void 0 : hideData.isReferenceHidden) || attrs.escaped !== (hideData == null ? void 0 : hideData.hasPopperEscaped)) {
                setAttrs({
                  placement: state.placement,
                  referenceHidden: hideData == null ? void 0 : hideData.isReferenceHidden,
                  escaped: hideData == null ? void 0 : hideData.hasPopperEscaped
                });
              }
              state.attributes.popper = {};
            }
          }])
        })
      });
    }, [attrs.placement, attrs.referenceHidden, attrs.escaped].concat(deps));
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, children ? /* @__PURE__ */ cloneElement(children, {
      ref: function ref2(node) {
        mutableBox.ref = node;
        preserveRef(children.ref, node);
      }
    }) : null, mounted && /* @__PURE__ */ (0, import_react_dom.createPortal)(render2 ? render2(toDataAttributes(attrs), singletonContent, mutableBox.instance) : content, mutableBox.container));
  }
  return Tippy;
}
var forwardRef = function(Tippy, defaultProps3) {
  return /* @__PURE__ */ forwardRef$1(function TippyWrapper(_ref, _ref2) {
    var children = _ref.children, props = _objectWithoutPropertiesLoose(_ref, ["children"]);
    return /* @__PURE__ */ React3.createElement(Tippy, Object.assign({}, defaultProps3, props), children ? /* @__PURE__ */ cloneElement(children, {
      ref: function ref2(node) {
        preserveRef(_ref2, node);
        preserveRef(children.ref, node);
      }
    }) : null);
  });
};
var index = /* @__PURE__ */ forwardRef(/* @__PURE__ */ TippyGenerator(tippy_esm_default));
var tippy_react_esm_default = index;

// src/components/AddBlocks/AddBlocks.tsx
var import_groupBy = __toESM(require_groupBy(), 1);
var import_partition = __toESM(require_partition(), 1);
import { nanoid as nanoid3 } from "nanoid";

// src/hooks/useBlockContext.tsx
import * as React9 from "react";

// src/providers/BlockContext.tsx
import { createContext as createContext3, useContext as useContext2, useEffect as useEffect6, useState as useState6 } from "react";

// src/providers/BlockGroupContext.tsx
import * as React8 from "react";

// ../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o3, p3) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o4, p4) {
    o4.__proto__ = p4;
    return o4;
  };
  return _setPrototypeOf(o3, p3);
}

// ../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// ../../node_modules/react-query/es/core/subscribable.js
var Subscribable = /* @__PURE__ */ function() {
  function Subscribable2() {
    this.listeners = [];
  }
  var _proto = Subscribable2.prototype;
  _proto.subscribe = function subscribe(listener) {
    var _this = this;
    var callback = listener || function() {
      return void 0;
    };
    this.listeners.push(callback);
    this.onSubscribe();
    return function() {
      _this.listeners = _this.listeners.filter(function(x2) {
        return x2 !== callback;
      });
      _this.onUnsubscribe();
    };
  };
  _proto.hasListeners = function hasListeners() {
    return this.listeners.length > 0;
  };
  _proto.onSubscribe = function onSubscribe() {
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
  };
  return Subscribable2;
}();

// ../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
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

// ../../node_modules/react-query/es/core/utils.js
var isServer = typeof window === "undefined";
function noop() {
  return void 0;
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function ensureQueryKeyArray(value) {
  return Array.isArray(value) ? value : [value];
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }
  if (typeof arg2 === "function") {
    return _extends({}, arg3, {
      queryKey: arg1,
      queryFn: arg2
    });
  }
  return _extends({}, arg2, {
    queryKey: arg1
  });
}
function parseMutationArgs(arg1, arg2, arg3) {
  if (isQueryKey(arg1)) {
    if (typeof arg2 === "function") {
      return _extends({}, arg3, {
        mutationKey: arg1,
        mutationFn: arg2
      });
    }
    return _extends({}, arg2, {
      mutationKey: arg1
    });
  }
  if (typeof arg1 === "function") {
    return _extends({}, arg2, {
      mutationFn: arg1
    });
  }
  return _extends({}, arg1);
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [_extends({}, arg2, {
    queryKey: arg1
  }), arg3] : [arg1 || {}, arg2];
}
function mapQueryStatusFilter(active, inactive) {
  if (active === true && inactive === true || active == null && inactive == null) {
    return "all";
  } else if (active === false && inactive === false) {
    return "none";
  } else {
    var isActive = active != null ? active : !inactive;
    return isActive ? "active" : "inactive";
  }
}
function matchQuery(filters, query) {
  var active = filters.active, exact = filters.exact, fetching = filters.fetching, inactive = filters.inactive, predicate = filters.predicate, queryKey = filters.queryKey, stale = filters.stale;
  if (isQueryKey(queryKey)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  var queryStatusFilter = mapQueryStatusFilter(active, inactive);
  if (queryStatusFilter === "none") {
    return false;
  } else if (queryStatusFilter !== "all") {
    var isActive = query.isActive();
    if (queryStatusFilter === "active" && !isActive) {
      return false;
    }
    if (queryStatusFilter === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (typeof fetching === "boolean" && query.isFetching() !== fetching) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  var exact = filters.exact, fetching = filters.fetching, predicate = filters.predicate, mutationKey = filters.mutationKey;
  if (isQueryKey(mutationKey)) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (typeof fetching === "boolean" && mutation.state.status === "loading" !== fetching) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  var hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey);
}
function hashQueryKey(queryKey) {
  var asArray = ensureQueryKeyArray(queryKey);
  return stableValueHash(asArray);
}
function stableValueHash(value) {
  return JSON.stringify(value, function(_2, val) {
    return isPlainObject(val) ? Object.keys(val).sort().reduce(function(result, key) {
      result[key] = val[key];
      return result;
    }, {}) : val;
  });
}
function partialMatchKey(a3, b3) {
  return partialDeepEqual(ensureQueryKeyArray(a3), ensureQueryKeyArray(b3));
}
function partialDeepEqual(a3, b3) {
  if (a3 === b3) {
    return true;
  }
  if (typeof a3 !== typeof b3) {
    return false;
  }
  if (a3 && b3 && typeof a3 === "object" && typeof b3 === "object") {
    return !Object.keys(b3).some(function(key) {
      return !partialDeepEqual(a3[key], b3[key]);
    });
  }
  return false;
}
function replaceEqualDeep(a3, b3) {
  if (a3 === b3) {
    return a3;
  }
  var array = Array.isArray(a3) && Array.isArray(b3);
  if (array || isPlainObject(a3) && isPlainObject(b3)) {
    var aSize = array ? a3.length : Object.keys(a3).length;
    var bItems = array ? b3 : Object.keys(b3);
    var bSize = bItems.length;
    var copy = array ? [] : {};
    var equalItems = 0;
    for (var i3 = 0; i3 < bSize; i3++) {
      var key = array ? i3 : bItems[i3];
      copy[key] = replaceEqualDeep(a3[key], b3[key]);
      if (copy[key] === a3[key]) {
        equalItems++;
      }
    }
    return aSize === bSize && equalItems === aSize ? a3 : copy;
  }
  return b3;
}
function shallowEqualObjects(a3, b3) {
  if (a3 && !b3 || b3 && !a3) {
    return false;
  }
  for (var key in a3) {
    if (a3[key] !== b3[key]) {
      return false;
    }
  }
  return true;
}
function isPlainObject(o3) {
  if (!hasObjectPrototype(o3)) {
    return false;
  }
  var ctor = o3.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  var prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o3) {
  return Object.prototype.toString.call(o3) === "[object Object]";
}
function isQueryKey(value) {
  return typeof value === "string" || Array.isArray(value);
}
function sleep(timeout) {
  return new Promise(function(resolve) {
    setTimeout(resolve, timeout);
  });
}
function scheduleMicrotask(callback) {
  Promise.resolve().then(callback).catch(function(error2) {
    return setTimeout(function() {
      throw error2;
    });
  });
}
function getAbortController() {
  if (typeof AbortController === "function") {
    return new AbortController();
  }
}

// ../../node_modules/react-query/es/core/focusManager.js
var FocusManager = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(FocusManager2, _Subscribable);
  function FocusManager2() {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.setup = function(onFocus) {
      var _window;
      if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
        var listener = function listener2() {
          return onFocus();
        };
        window.addEventListener("visibilitychange", listener, false);
        window.addEventListener("focus", listener, false);
        return function() {
          window.removeEventListener("visibilitychange", listener);
          window.removeEventListener("focus", listener);
        };
      }
    };
    return _this;
  }
  var _proto = FocusManager2.prototype;
  _proto.onSubscribe = function onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;
      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = void 0;
    }
  };
  _proto.setEventListener = function setEventListener(setup) {
    var _this$cleanup2, _this2 = this;
    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(function(focused) {
      if (typeof focused === "boolean") {
        _this2.setFocused(focused);
      } else {
        _this2.onFocus();
      }
    });
  };
  _proto.setFocused = function setFocused(focused) {
    this.focused = focused;
    if (focused) {
      this.onFocus();
    }
  };
  _proto.onFocus = function onFocus() {
    this.listeners.forEach(function(listener) {
      listener();
    });
  };
  _proto.isFocused = function isFocused() {
    if (typeof this.focused === "boolean") {
      return this.focused;
    }
    if (typeof document === "undefined") {
      return true;
    }
    return [void 0, "visible", "prerender"].includes(document.visibilityState);
  };
  return FocusManager2;
}(Subscribable);
var focusManager = new FocusManager();

// ../../node_modules/react-query/es/core/onlineManager.js
var OnlineManager = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(OnlineManager2, _Subscribable);
  function OnlineManager2() {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.setup = function(onOnline) {
      var _window;
      if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
        var listener = function listener2() {
          return onOnline();
        };
        window.addEventListener("online", listener, false);
        window.addEventListener("offline", listener, false);
        return function() {
          window.removeEventListener("online", listener);
          window.removeEventListener("offline", listener);
        };
      }
    };
    return _this;
  }
  var _proto = OnlineManager2.prototype;
  _proto.onSubscribe = function onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;
      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = void 0;
    }
  };
  _proto.setEventListener = function setEventListener(setup) {
    var _this$cleanup2, _this2 = this;
    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(function(online) {
      if (typeof online === "boolean") {
        _this2.setOnline(online);
      } else {
        _this2.onOnline();
      }
    });
  };
  _proto.setOnline = function setOnline(online) {
    this.online = online;
    if (online) {
      this.onOnline();
    }
  };
  _proto.onOnline = function onOnline() {
    this.listeners.forEach(function(listener) {
      listener();
    });
  };
  _proto.isOnline = function isOnline() {
    if (typeof this.online === "boolean") {
      return this.online;
    }
    if (typeof navigator === "undefined" || typeof navigator.onLine === "undefined") {
      return true;
    }
    return navigator.onLine;
  };
  return OnlineManager2;
}(Subscribable);
var onlineManager = new OnlineManager();

// ../../node_modules/react-query/es/core/retryer.js
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * Math.pow(2, failureCount), 3e4);
}
function isCancelable(value) {
  return typeof (value == null ? void 0 : value.cancel) === "function";
}
var CancelledError = function CancelledError2(options) {
  this.revert = options == null ? void 0 : options.revert;
  this.silent = options == null ? void 0 : options.silent;
};
function isCancelledError(value) {
  return value instanceof CancelledError;
}
var Retryer = function Retryer2(config2) {
  var _this = this;
  var cancelRetry = false;
  var cancelFn;
  var continueFn;
  var promiseResolve;
  var promiseReject;
  this.abort = config2.abort;
  this.cancel = function(cancelOptions) {
    return cancelFn == null ? void 0 : cancelFn(cancelOptions);
  };
  this.cancelRetry = function() {
    cancelRetry = true;
  };
  this.continueRetry = function() {
    cancelRetry = false;
  };
  this.continue = function() {
    return continueFn == null ? void 0 : continueFn();
  };
  this.failureCount = 0;
  this.isPaused = false;
  this.isResolved = false;
  this.isTransportCancelable = false;
  this.promise = new Promise(function(outerResolve, outerReject) {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });
  var resolve = function resolve2(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config2.onSuccess == null ? void 0 : config2.onSuccess(value);
      continueFn == null ? void 0 : continueFn();
      promiseResolve(value);
    }
  };
  var reject = function reject2(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config2.onError == null ? void 0 : config2.onError(value);
      continueFn == null ? void 0 : continueFn();
      promiseReject(value);
    }
  };
  var pause = function pause2() {
    return new Promise(function(continueResolve) {
      continueFn = continueResolve;
      _this.isPaused = true;
      config2.onPause == null ? void 0 : config2.onPause();
    }).then(function() {
      continueFn = void 0;
      _this.isPaused = false;
      config2.onContinue == null ? void 0 : config2.onContinue();
    });
  };
  var run = function run2() {
    if (_this.isResolved) {
      return;
    }
    var promiseOrValue;
    try {
      promiseOrValue = config2.fn();
    } catch (error2) {
      promiseOrValue = Promise.reject(error2);
    }
    cancelFn = function cancelFn2(cancelOptions) {
      if (!_this.isResolved) {
        reject(new CancelledError(cancelOptions));
        _this.abort == null ? void 0 : _this.abort();
        if (isCancelable(promiseOrValue)) {
          try {
            promiseOrValue.cancel();
          } catch (_unused) {
          }
        }
      }
    };
    _this.isTransportCancelable = isCancelable(promiseOrValue);
    Promise.resolve(promiseOrValue).then(resolve).catch(function(error2) {
      var _config$retry, _config$retryDelay;
      if (_this.isResolved) {
        return;
      }
      var retry = (_config$retry = config2.retry) != null ? _config$retry : 3;
      var retryDelay = (_config$retryDelay = config2.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
      var delay = typeof retryDelay === "function" ? retryDelay(_this.failureCount, error2) : retryDelay;
      var shouldRetry = retry === true || typeof retry === "number" && _this.failureCount < retry || typeof retry === "function" && retry(_this.failureCount, error2);
      if (cancelRetry || !shouldRetry) {
        reject(error2);
        return;
      }
      _this.failureCount++;
      config2.onFail == null ? void 0 : config2.onFail(_this.failureCount, error2);
      sleep(delay).then(function() {
        if (!focusManager.isFocused() || !onlineManager.isOnline()) {
          return pause();
        }
      }).then(function() {
        if (cancelRetry) {
          reject(error2);
        } else {
          run2();
        }
      });
    });
  };
  run();
};

// ../../node_modules/react-query/es/core/notifyManager.js
var NotifyManager = /* @__PURE__ */ function() {
  function NotifyManager2() {
    this.queue = [];
    this.transactions = 0;
    this.notifyFn = function(callback) {
      callback();
    };
    this.batchNotifyFn = function(callback) {
      callback();
    };
  }
  var _proto = NotifyManager2.prototype;
  _proto.batch = function batch2(callback) {
    var result;
    this.transactions++;
    try {
      result = callback();
    } finally {
      this.transactions--;
      if (!this.transactions) {
        this.flush();
      }
    }
    return result;
  };
  _proto.schedule = function schedule(callback) {
    var _this = this;
    if (this.transactions) {
      this.queue.push(callback);
    } else {
      scheduleMicrotask(function() {
        _this.notifyFn(callback);
      });
    }
  };
  _proto.batchCalls = function batchCalls(callback) {
    var _this2 = this;
    return function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this2.schedule(function() {
        callback.apply(void 0, args);
      });
    };
  };
  _proto.flush = function flush3() {
    var _this3 = this;
    var queue = this.queue;
    this.queue = [];
    if (queue.length) {
      scheduleMicrotask(function() {
        _this3.batchNotifyFn(function() {
          queue.forEach(function(callback) {
            _this3.notifyFn(callback);
          });
        });
      });
    }
  };
  _proto.setNotifyFunction = function setNotifyFunction(fn4) {
    this.notifyFn = fn4;
  };
  _proto.setBatchNotifyFunction = function setBatchNotifyFunction(fn4) {
    this.batchNotifyFn = fn4;
  };
  return NotifyManager2;
}();
var notifyManager = new NotifyManager();

// ../../node_modules/react-query/es/core/logger.js
var logger = console;
function getLogger() {
  return logger;
}
function setLogger(newLogger) {
  logger = newLogger;
}

// ../../node_modules/react-query/es/core/query.js
var Query = /* @__PURE__ */ function() {
  function Query2(config2) {
    this.abortSignalConsumed = false;
    this.hadObservers = false;
    this.defaultOptions = config2.defaultOptions;
    this.setOptions(config2.options);
    this.observers = [];
    this.cache = config2.cache;
    this.queryKey = config2.queryKey;
    this.queryHash = config2.queryHash;
    this.initialState = config2.state || this.getDefaultState(this.options);
    this.state = this.initialState;
    this.meta = config2.meta;
    this.scheduleGc();
  }
  var _proto = Query2.prototype;
  _proto.setOptions = function setOptions(options) {
    var _this$options$cacheTi;
    this.options = _extends({}, this.defaultOptions, options);
    this.meta = options == null ? void 0 : options.meta;
    this.cacheTime = Math.max(this.cacheTime || 0, (_this$options$cacheTi = this.options.cacheTime) != null ? _this$options$cacheTi : 5 * 60 * 1e3);
  };
  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };
  _proto.scheduleGc = function scheduleGc() {
    var _this = this;
    this.clearGcTimeout();
    if (isValidTimeout(this.cacheTime)) {
      this.gcTimeout = setTimeout(function() {
        _this.optionalRemove();
      }, this.cacheTime);
    }
  };
  _proto.clearGcTimeout = function clearGcTimeout() {
    clearTimeout(this.gcTimeout);
    this.gcTimeout = void 0;
  };
  _proto.optionalRemove = function optionalRemove() {
    if (!this.observers.length) {
      if (this.state.isFetching) {
        if (this.hadObservers) {
          this.scheduleGc();
        }
      } else {
        this.cache.remove(this);
      }
    }
  };
  _proto.setData = function setData(updater, options) {
    var _this$options$isDataE, _this$options;
    var prevData = this.state.data;
    var data = functionalUpdate(updater, prevData);
    if ((_this$options$isDataE = (_this$options = this.options).isDataEqual) == null ? void 0 : _this$options$isDataE.call(_this$options, prevData, data)) {
      data = prevData;
    } else if (this.options.structuralSharing !== false) {
      data = replaceEqualDeep(prevData, data);
    }
    this.dispatch({
      data,
      type: "success",
      dataUpdatedAt: options == null ? void 0 : options.updatedAt
    });
    return data;
  };
  _proto.setState = function setState(state, setStateOptions) {
    this.dispatch({
      type: "setState",
      state,
      setStateOptions
    });
  };
  _proto.cancel = function cancel(options) {
    var _this$retryer;
    var promise = this.promise;
    (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
    return promise ? promise.then(noop).catch(noop) : Promise.resolve();
  };
  _proto.destroy = function destroy() {
    this.clearGcTimeout();
    this.cancel({
      silent: true
    });
  };
  _proto.reset = function reset() {
    this.destroy();
    this.setState(this.initialState);
  };
  _proto.isActive = function isActive() {
    return this.observers.some(function(observer) {
      return observer.options.enabled !== false;
    });
  };
  _proto.isFetching = function isFetching() {
    return this.state.isFetching;
  };
  _proto.isStale = function isStale2() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function(observer) {
      return observer.getCurrentResult().isStale;
    });
  };
  _proto.isStaleByTime = function isStaleByTime(staleTime) {
    if (staleTime === void 0) {
      staleTime = 0;
    }
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  };
  _proto.onFocus = function onFocus() {
    var _this$retryer2;
    var observer = this.observers.find(function(x2) {
      return x2.shouldFetchOnWindowFocus();
    });
    if (observer) {
      observer.refetch();
    }
    (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
  };
  _proto.onOnline = function onOnline() {
    var _this$retryer3;
    var observer = this.observers.find(function(x2) {
      return x2.shouldFetchOnReconnect();
    });
    if (observer) {
      observer.refetch();
    }
    (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
  };
  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
      this.hadObservers = true;
      this.clearGcTimeout();
      this.cache.notify({
        type: "observerAdded",
        query: this,
        observer
      });
    }
  };
  _proto.removeObserver = function removeObserver(observer) {
    if (this.observers.indexOf(observer) !== -1) {
      this.observers = this.observers.filter(function(x2) {
        return x2 !== observer;
      });
      if (!this.observers.length) {
        if (this.retryer) {
          if (this.retryer.isTransportCancelable || this.abortSignalConsumed) {
            this.retryer.cancel({
              revert: true
            });
          } else {
            this.retryer.cancelRetry();
          }
        }
        if (this.cacheTime) {
          this.scheduleGc();
        } else {
          this.cache.remove(this);
        }
      }
      this.cache.notify({
        type: "observerRemoved",
        query: this,
        observer
      });
    }
  };
  _proto.getObserversCount = function getObserversCount() {
    return this.observers.length;
  };
  _proto.invalidate = function invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({
        type: "invalidate"
      });
    }
  };
  _proto.fetch = function fetch(options, fetchOptions) {
    var _this2 = this, _this$options$behavio, _context$fetchOptions, _abortController$abor;
    if (this.state.isFetching) {
      if (this.state.dataUpdatedAt && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
        this.cancel({
          silent: true
        });
      } else if (this.promise) {
        var _this$retryer4;
        (_this$retryer4 = this.retryer) == null ? void 0 : _this$retryer4.continueRetry();
        return this.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      var observer = this.observers.find(function(x2) {
        return x2.options.queryFn;
      });
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    var queryKey = ensureQueryKeyArray(this.queryKey);
    var abortController = getAbortController();
    var queryFnContext = {
      queryKey,
      pageParam: void 0,
      meta: this.meta
    };
    Object.defineProperty(queryFnContext, "signal", {
      enumerable: true,
      get: function get2() {
        if (abortController) {
          _this2.abortSignalConsumed = true;
          return abortController.signal;
        }
        return void 0;
      }
    });
    var fetchFn = function fetchFn2() {
      if (!_this2.options.queryFn) {
        return Promise.reject("Missing queryFn");
      }
      _this2.abortSignalConsumed = false;
      return _this2.options.queryFn(queryFnContext);
    };
    var context = {
      fetchOptions,
      options: this.options,
      queryKey,
      state: this.state,
      fetchFn,
      meta: this.meta
    };
    if ((_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch) {
      var _this$options$behavio2;
      (_this$options$behavio2 = this.options.behavior) == null ? void 0 : _this$options$behavio2.onFetch(context);
    }
    this.revertState = this.state;
    if (!this.state.isFetching || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
      var _context$fetchOptions2;
      this.dispatch({
        type: "fetch",
        meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
      });
    }
    this.retryer = new Retryer({
      fn: context.fetchFn,
      abort: abortController == null ? void 0 : (_abortController$abor = abortController.abort) == null ? void 0 : _abortController$abor.bind(abortController),
      onSuccess: function onSuccess(data) {
        _this2.setData(data);
        _this2.cache.config.onSuccess == null ? void 0 : _this2.cache.config.onSuccess(data, _this2);
        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onError: function onError(error2) {
        if (!(isCancelledError(error2) && error2.silent)) {
          _this2.dispatch({
            type: "error",
            error: error2
          });
        }
        if (!isCancelledError(error2)) {
          _this2.cache.config.onError == null ? void 0 : _this2.cache.config.onError(error2, _this2);
          getLogger().error(error2);
        }
        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: "failed"
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: "pause"
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: "continue"
        });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay
    });
    this.promise = this.retryer.promise;
    return this.promise;
  };
  _proto.dispatch = function dispatch3(action) {
    var _this3 = this;
    this.state = this.reducer(this.state, action);
    notifyManager.batch(function() {
      _this3.observers.forEach(function(observer) {
        observer.onQueryUpdate(action);
      });
      _this3.cache.notify({
        query: _this3,
        type: "queryUpdated",
        action
      });
    });
  };
  _proto.getDefaultState = function getDefaultState2(options) {
    var data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    var hasInitialData = typeof options.initialData !== "undefined";
    var initialDataUpdatedAt = hasInitialData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    var hasData = typeof data !== "undefined";
    return {
      data,
      dataUpdateCount: 0,
      dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchMeta: null,
      isFetching: false,
      isInvalidated: false,
      isPaused: false,
      status: hasData ? "success" : "idle"
    };
  };
  _proto.reducer = function reducer5(state, action) {
    var _action$meta, _action$dataUpdatedAt;
    switch (action.type) {
      case "failed":
        return _extends({}, state, {
          fetchFailureCount: state.fetchFailureCount + 1
        });
      case "pause":
        return _extends({}, state, {
          isPaused: true
        });
      case "continue":
        return _extends({}, state, {
          isPaused: false
        });
      case "fetch":
        return _extends({}, state, {
          fetchFailureCount: 0,
          fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
          isFetching: true,
          isPaused: false
        }, !state.dataUpdatedAt && {
          error: null,
          status: "loading"
        });
      case "success":
        return _extends({}, state, {
          data: action.data,
          dataUpdateCount: state.dataUpdateCount + 1,
          dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
          error: null,
          fetchFailureCount: 0,
          isFetching: false,
          isInvalidated: false,
          isPaused: false,
          status: "success"
        });
      case "error":
        var error2 = action.error;
        if (isCancelledError(error2) && error2.revert && this.revertState) {
          return _extends({}, this.revertState);
        }
        return _extends({}, state, {
          error: error2,
          errorUpdateCount: state.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: state.fetchFailureCount + 1,
          isFetching: false,
          isPaused: false,
          status: "error"
        });
      case "invalidate":
        return _extends({}, state, {
          isInvalidated: true
        });
      case "setState":
        return _extends({}, state, action.state);
      default:
        return state;
    }
  };
  return Query2;
}();

// ../../node_modules/react-query/es/core/queryCache.js
var QueryCache = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(QueryCache2, _Subscribable);
  function QueryCache2(config2) {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.config = config2 || {};
    _this.queries = [];
    _this.queriesMap = {};
    return _this;
  }
  var _proto = QueryCache2.prototype;
  _proto.build = function build(client, options, state) {
    var _options$queryHash;
    var queryKey = options.queryKey;
    var queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : hashQueryKeyByOptions(queryKey, options);
    var query = this.get(queryHash);
    if (!query) {
      query = new Query({
        cache: this,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey),
        meta: options.meta
      });
      this.add(query);
    }
    return query;
  };
  _proto.add = function add3(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: "queryAdded",
        query
      });
    }
  };
  _proto.remove = function remove(query) {
    var queryInMap = this.queriesMap[query.queryHash];
    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter(function(x2) {
        return x2 !== query;
      });
      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }
      this.notify({
        type: "queryRemoved",
        query
      });
    }
  };
  _proto.clear = function clear() {
    var _this2 = this;
    notifyManager.batch(function() {
      _this2.queries.forEach(function(query) {
        _this2.remove(query);
      });
    });
  };
  _proto.get = function get2(queryHash) {
    return this.queriesMap[queryHash];
  };
  _proto.getAll = function getAll() {
    return this.queries;
  };
  _proto.find = function find2(arg1, arg2) {
    var _parseFilterArgs = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs[0];
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.queries.find(function(query) {
      return matchQuery(filters, query);
    });
  };
  _proto.findAll = function findAll(arg1, arg2) {
    var _parseFilterArgs2 = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs2[0];
    return Object.keys(filters).length > 0 ? this.queries.filter(function(query) {
      return matchQuery(filters, query);
    }) : this.queries;
  };
  _proto.notify = function notify2(event) {
    var _this3 = this;
    notifyManager.batch(function() {
      _this3.listeners.forEach(function(listener) {
        listener(event);
      });
    });
  };
  _proto.onFocus = function onFocus() {
    var _this4 = this;
    notifyManager.batch(function() {
      _this4.queries.forEach(function(query) {
        query.onFocus();
      });
    });
  };
  _proto.onOnline = function onOnline() {
    var _this5 = this;
    notifyManager.batch(function() {
      _this5.queries.forEach(function(query) {
        query.onOnline();
      });
    });
  };
  return QueryCache2;
}(Subscribable);

// ../../node_modules/react-query/es/core/mutation.js
var Mutation = /* @__PURE__ */ function() {
  function Mutation2(config2) {
    this.options = _extends({}, config2.defaultOptions, config2.options);
    this.mutationId = config2.mutationId;
    this.mutationCache = config2.mutationCache;
    this.observers = [];
    this.state = config2.state || getDefaultState();
    this.meta = config2.meta;
  }
  var _proto = Mutation2.prototype;
  _proto.setState = function setState(state) {
    this.dispatch({
      type: "setState",
      state
    });
  };
  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  };
  _proto.removeObserver = function removeObserver(observer) {
    this.observers = this.observers.filter(function(x2) {
      return x2 !== observer;
    });
  };
  _proto.cancel = function cancel() {
    if (this.retryer) {
      this.retryer.cancel();
      return this.retryer.promise.then(noop).catch(noop);
    }
    return Promise.resolve();
  };
  _proto.continue = function _continue() {
    if (this.retryer) {
      this.retryer.continue();
      return this.retryer.promise;
    }
    return this.execute();
  };
  _proto.execute = function execute3() {
    var _this = this;
    var data;
    var restored = this.state.status === "loading";
    var promise = Promise.resolve();
    if (!restored) {
      this.dispatch({
        type: "loading",
        variables: this.options.variables
      });
      promise = promise.then(function() {
        _this.mutationCache.config.onMutate == null ? void 0 : _this.mutationCache.config.onMutate(_this.state.variables, _this);
      }).then(function() {
        return _this.options.onMutate == null ? void 0 : _this.options.onMutate(_this.state.variables);
      }).then(function(context) {
        if (context !== _this.state.context) {
          _this.dispatch({
            type: "loading",
            context,
            variables: _this.state.variables
          });
        }
      });
    }
    return promise.then(function() {
      return _this.executeMutation();
    }).then(function(result) {
      data = result;
      _this.mutationCache.config.onSuccess == null ? void 0 : _this.mutationCache.config.onSuccess(data, _this.state.variables, _this.state.context, _this);
    }).then(function() {
      return _this.options.onSuccess == null ? void 0 : _this.options.onSuccess(data, _this.state.variables, _this.state.context);
    }).then(function() {
      return _this.options.onSettled == null ? void 0 : _this.options.onSettled(data, null, _this.state.variables, _this.state.context);
    }).then(function() {
      _this.dispatch({
        type: "success",
        data
      });
      return data;
    }).catch(function(error2) {
      _this.mutationCache.config.onError == null ? void 0 : _this.mutationCache.config.onError(error2, _this.state.variables, _this.state.context, _this);
      getLogger().error(error2);
      return Promise.resolve().then(function() {
        return _this.options.onError == null ? void 0 : _this.options.onError(error2, _this.state.variables, _this.state.context);
      }).then(function() {
        return _this.options.onSettled == null ? void 0 : _this.options.onSettled(void 0, error2, _this.state.variables, _this.state.context);
      }).then(function() {
        _this.dispatch({
          type: "error",
          error: error2
        });
        throw error2;
      });
    });
  };
  _proto.executeMutation = function executeMutation() {
    var _this2 = this, _this$options$retry;
    this.retryer = new Retryer({
      fn: function fn4() {
        if (!_this2.options.mutationFn) {
          return Promise.reject("No mutationFn found");
        }
        return _this2.options.mutationFn(_this2.state.variables);
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: "failed"
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: "pause"
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: "continue"
        });
      },
      retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
      retryDelay: this.options.retryDelay
    });
    return this.retryer.promise;
  };
  _proto.dispatch = function dispatch3(action) {
    var _this3 = this;
    this.state = reducer(this.state, action);
    notifyManager.batch(function() {
      _this3.observers.forEach(function(observer) {
        observer.onMutationUpdate(action);
      });
      _this3.mutationCache.notify(_this3);
    });
  };
  return Mutation2;
}();
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: false,
    status: "idle",
    variables: void 0
  };
}
function reducer(state, action) {
  switch (action.type) {
    case "failed":
      return _extends({}, state, {
        failureCount: state.failureCount + 1
      });
    case "pause":
      return _extends({}, state, {
        isPaused: true
      });
    case "continue":
      return _extends({}, state, {
        isPaused: false
      });
    case "loading":
      return _extends({}, state, {
        context: action.context,
        data: void 0,
        error: null,
        isPaused: false,
        status: "loading",
        variables: action.variables
      });
    case "success":
      return _extends({}, state, {
        data: action.data,
        error: null,
        status: "success",
        isPaused: false
      });
    case "error":
      return _extends({}, state, {
        data: void 0,
        error: action.error,
        failureCount: state.failureCount + 1,
        isPaused: false,
        status: "error"
      });
    case "setState":
      return _extends({}, state, action.state);
    default:
      return state;
  }
}

// ../../node_modules/react-query/es/core/mutationCache.js
var MutationCache = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(MutationCache2, _Subscribable);
  function MutationCache2(config2) {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.config = config2 || {};
    _this.mutations = [];
    _this.mutationId = 0;
    return _this;
  }
  var _proto = MutationCache2.prototype;
  _proto.build = function build(client, options, state) {
    var mutation = new Mutation({
      mutationCache: this,
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : void 0,
      meta: options.meta
    });
    this.add(mutation);
    return mutation;
  };
  _proto.add = function add3(mutation) {
    this.mutations.push(mutation);
    this.notify(mutation);
  };
  _proto.remove = function remove(mutation) {
    this.mutations = this.mutations.filter(function(x2) {
      return x2 !== mutation;
    });
    mutation.cancel();
    this.notify(mutation);
  };
  _proto.clear = function clear() {
    var _this2 = this;
    notifyManager.batch(function() {
      _this2.mutations.forEach(function(mutation) {
        _this2.remove(mutation);
      });
    });
  };
  _proto.getAll = function getAll() {
    return this.mutations;
  };
  _proto.find = function find2(filters) {
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.mutations.find(function(mutation) {
      return matchMutation(filters, mutation);
    });
  };
  _proto.findAll = function findAll(filters) {
    return this.mutations.filter(function(mutation) {
      return matchMutation(filters, mutation);
    });
  };
  _proto.notify = function notify2(mutation) {
    var _this3 = this;
    notifyManager.batch(function() {
      _this3.listeners.forEach(function(listener) {
        listener(mutation);
      });
    });
  };
  _proto.onFocus = function onFocus() {
    this.resumePausedMutations();
  };
  _proto.onOnline = function onOnline() {
    this.resumePausedMutations();
  };
  _proto.resumePausedMutations = function resumePausedMutations() {
    var pausedMutations = this.mutations.filter(function(x2) {
      return x2.state.isPaused;
    });
    return notifyManager.batch(function() {
      return pausedMutations.reduce(function(promise, mutation) {
        return promise.then(function() {
          return mutation.continue().catch(noop);
        });
      }, Promise.resolve());
    });
  };
  return MutationCache2;
}(Subscribable);

// ../../node_modules/react-query/es/core/infiniteQueryBehavior.js
function infiniteQueryBehavior() {
  return {
    onFetch: function onFetch(context) {
      context.fetchFn = function() {
        var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;
        var refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
        var fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
        var pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
        var isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === "forward";
        var isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === "backward";
        var oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
        var oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
        var abortController = getAbortController();
        var abortSignal = abortController == null ? void 0 : abortController.signal;
        var newPageParams = oldPageParams;
        var cancelled = false;
        var queryFn = context.options.queryFn || function() {
          return Promise.reject("Missing queryFn");
        };
        var buildNewPages = function buildNewPages2(pages, param2, page, previous) {
          newPageParams = previous ? [param2].concat(newPageParams) : [].concat(newPageParams, [param2]);
          return previous ? [page].concat(pages) : [].concat(pages, [page]);
        };
        var fetchPage = function fetchPage2(pages, manual2, param2, previous) {
          if (cancelled) {
            return Promise.reject("Cancelled");
          }
          if (typeof param2 === "undefined" && !manual2 && pages.length) {
            return Promise.resolve(pages);
          }
          var queryFnContext = {
            queryKey: context.queryKey,
            signal: abortSignal,
            pageParam: param2,
            meta: context.meta
          };
          var queryFnResult = queryFn(queryFnContext);
          var promise2 = Promise.resolve(queryFnResult).then(function(page) {
            return buildNewPages(pages, param2, page, previous);
          });
          if (isCancelable(queryFnResult)) {
            var promiseAsAny = promise2;
            promiseAsAny.cancel = queryFnResult.cancel;
          }
          return promise2;
        };
        var promise;
        if (!oldPages.length) {
          promise = fetchPage([]);
        } else if (isFetchingNextPage) {
          var manual = typeof pageParam !== "undefined";
          var param = manual ? pageParam : getNextPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param);
        } else if (isFetchingPreviousPage) {
          var _manual = typeof pageParam !== "undefined";
          var _param = _manual ? pageParam : getPreviousPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, _manual, _param, true);
        } else {
          (function() {
            newPageParams = [];
            var manual2 = typeof context.options.getNextPageParam === "undefined";
            var shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true;
            promise = shouldFetchFirstPage ? fetchPage([], manual2, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0]));
            var _loop = function _loop2(i4) {
              promise = promise.then(function(pages) {
                var shouldFetchNextPage = refetchPage && oldPages[i4] ? refetchPage(oldPages[i4], i4, oldPages) : true;
                if (shouldFetchNextPage) {
                  var _param2 = manual2 ? oldPageParams[i4] : getNextPageParam(context.options, pages);
                  return fetchPage(pages, manual2, _param2);
                }
                return Promise.resolve(buildNewPages(pages, oldPageParams[i4], oldPages[i4]));
              });
            };
            for (var i3 = 1; i3 < oldPages.length; i3++) {
              _loop(i3);
            }
          })();
        }
        var finalPromise = promise.then(function(pages) {
          return {
            pages,
            pageParams: newPageParams
          };
        });
        var finalPromiseAsAny = finalPromise;
        finalPromiseAsAny.cancel = function() {
          cancelled = true;
          abortController == null ? void 0 : abortController.abort();
          if (isCancelable(promise)) {
            promise.cancel();
          }
        };
        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
}

// ../../node_modules/react-query/es/core/queryClient.js
var QueryClient = /* @__PURE__ */ function() {
  function QueryClient2(config2) {
    if (config2 === void 0) {
      config2 = {};
    }
    this.queryCache = config2.queryCache || new QueryCache();
    this.mutationCache = config2.mutationCache || new MutationCache();
    this.defaultOptions = config2.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
  }
  var _proto = QueryClient2.prototype;
  _proto.mount = function mount() {
    var _this = this;
    this.unsubscribeFocus = focusManager.subscribe(function() {
      if (focusManager.isFocused() && onlineManager.isOnline()) {
        _this.mutationCache.onFocus();
        _this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = onlineManager.subscribe(function() {
      if (focusManager.isFocused() && onlineManager.isOnline()) {
        _this.mutationCache.onOnline();
        _this.queryCache.onOnline();
      }
    });
  };
  _proto.unmount = function unmount() {
    var _this$unsubscribeFocu, _this$unsubscribeOnli;
    (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
    (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
  };
  _proto.isFetching = function isFetching(arg1, arg2) {
    var _parseFilterArgs = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs[0];
    filters.fetching = true;
    return this.queryCache.findAll(filters).length;
  };
  _proto.isMutating = function isMutating(filters) {
    return this.mutationCache.findAll(_extends({}, filters, {
      fetching: true
    })).length;
  };
  _proto.getQueryData = function getQueryData(queryKey, filters) {
    var _this$queryCache$find;
    return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
  };
  _proto.getQueriesData = function getQueriesData(queryKeyOrFilters) {
    return this.getQueryCache().findAll(queryKeyOrFilters).map(function(_ref) {
      var queryKey = _ref.queryKey, state = _ref.state;
      var data = state.data;
      return [queryKey, data];
    });
  };
  _proto.setQueryData = function setQueryData(queryKey, updater, options) {
    var parsedOptions = parseQueryArgs(queryKey);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(updater, options);
  };
  _proto.setQueriesData = function setQueriesData(queryKeyOrFilters, updater, options) {
    var _this2 = this;
    return notifyManager.batch(function() {
      return _this2.getQueryCache().findAll(queryKeyOrFilters).map(function(_ref2) {
        var queryKey = _ref2.queryKey;
        return [queryKey, _this2.setQueryData(queryKey, updater, options)];
      });
    });
  };
  _proto.getQueryState = function getQueryState(queryKey, filters) {
    var _this$queryCache$find2;
    return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
  };
  _proto.removeQueries = function removeQueries(arg1, arg2) {
    var _parseFilterArgs2 = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs2[0];
    var queryCache = this.queryCache;
    notifyManager.batch(function() {
      queryCache.findAll(filters).forEach(function(query) {
        queryCache.remove(query);
      });
    });
  };
  _proto.resetQueries = function resetQueries(arg1, arg2, arg3) {
    var _this3 = this;
    var _parseFilterArgs3 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs3[0], options = _parseFilterArgs3[1];
    var queryCache = this.queryCache;
    var refetchFilters = _extends({}, filters, {
      active: true
    });
    return notifyManager.batch(function() {
      queryCache.findAll(filters).forEach(function(query) {
        query.reset();
      });
      return _this3.refetchQueries(refetchFilters, options);
    });
  };
  _proto.cancelQueries = function cancelQueries(arg1, arg2, arg3) {
    var _this4 = this;
    var _parseFilterArgs4 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs4[0], _parseFilterArgs4$ = _parseFilterArgs4[1], cancelOptions = _parseFilterArgs4$ === void 0 ? {} : _parseFilterArgs4$;
    if (typeof cancelOptions.revert === "undefined") {
      cancelOptions.revert = true;
    }
    var promises = notifyManager.batch(function() {
      return _this4.queryCache.findAll(filters).map(function(query) {
        return query.cancel(cancelOptions);
      });
    });
    return Promise.all(promises).then(noop).catch(noop);
  };
  _proto.invalidateQueries = function invalidateQueries(arg1, arg2, arg3) {
    var _ref3, _filters$refetchActiv, _filters$refetchInact, _this5 = this;
    var _parseFilterArgs5 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs5[0], options = _parseFilterArgs5[1];
    var refetchFilters = _extends({}, filters, {
      active: (_ref3 = (_filters$refetchActiv = filters.refetchActive) != null ? _filters$refetchActiv : filters.active) != null ? _ref3 : true,
      inactive: (_filters$refetchInact = filters.refetchInactive) != null ? _filters$refetchInact : false
    });
    return notifyManager.batch(function() {
      _this5.queryCache.findAll(filters).forEach(function(query) {
        query.invalidate();
      });
      return _this5.refetchQueries(refetchFilters, options);
    });
  };
  _proto.refetchQueries = function refetchQueries(arg1, arg2, arg3) {
    var _this6 = this;
    var _parseFilterArgs6 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs6[0], options = _parseFilterArgs6[1];
    var promises = notifyManager.batch(function() {
      return _this6.queryCache.findAll(filters).map(function(query) {
        return query.fetch(void 0, _extends({}, options, {
          meta: {
            refetchPage: filters == null ? void 0 : filters.refetchPage
          }
        }));
      });
    });
    var promise = Promise.all(promises).then(noop);
    if (!(options == null ? void 0 : options.throwOnError)) {
      promise = promise.catch(noop);
    }
    return promise;
  };
  _proto.fetchQuery = function fetchQuery(arg1, arg2, arg3) {
    var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions);
    if (typeof defaultedOptions.retry === "undefined") {
      defaultedOptions.retry = false;
    }
    var query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  };
  _proto.prefetchQuery = function prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(noop).catch(noop);
  };
  _proto.fetchInfiniteQuery = function fetchInfiniteQuery(arg1, arg2, arg3) {
    var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    parsedOptions.behavior = infiniteQueryBehavior();
    return this.fetchQuery(parsedOptions);
  };
  _proto.prefetchInfiniteQuery = function prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(noop).catch(noop);
  };
  _proto.cancelMutations = function cancelMutations() {
    var _this7 = this;
    var promises = notifyManager.batch(function() {
      return _this7.mutationCache.getAll().map(function(mutation) {
        return mutation.cancel();
      });
    });
    return Promise.all(promises).then(noop).catch(noop);
  };
  _proto.resumePausedMutations = function resumePausedMutations() {
    return this.getMutationCache().resumePausedMutations();
  };
  _proto.executeMutation = function executeMutation(options) {
    return this.mutationCache.build(this, options).execute();
  };
  _proto.getQueryCache = function getQueryCache() {
    return this.queryCache;
  };
  _proto.getMutationCache = function getMutationCache() {
    return this.mutationCache;
  };
  _proto.getDefaultOptions = function getDefaultOptions() {
    return this.defaultOptions;
  };
  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };
  _proto.setQueryDefaults = function setQueryDefaults(queryKey, options) {
    var result = this.queryDefaults.find(function(x2) {
      return hashQueryKey(queryKey) === hashQueryKey(x2.queryKey);
    });
    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({
        queryKey,
        defaultOptions: options
      });
    }
  };
  _proto.getQueryDefaults = function getQueryDefaults(queryKey) {
    var _this$queryDefaults$f;
    return queryKey ? (_this$queryDefaults$f = this.queryDefaults.find(function(x2) {
      return partialMatchKey(queryKey, x2.queryKey);
    })) == null ? void 0 : _this$queryDefaults$f.defaultOptions : void 0;
  };
  _proto.setMutationDefaults = function setMutationDefaults(mutationKey, options) {
    var result = this.mutationDefaults.find(function(x2) {
      return hashQueryKey(mutationKey) === hashQueryKey(x2.mutationKey);
    });
    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({
        mutationKey,
        defaultOptions: options
      });
    }
  };
  _proto.getMutationDefaults = function getMutationDefaults(mutationKey) {
    var _this$mutationDefault;
    return mutationKey ? (_this$mutationDefault = this.mutationDefaults.find(function(x2) {
      return partialMatchKey(mutationKey, x2.mutationKey);
    })) == null ? void 0 : _this$mutationDefault.defaultOptions : void 0;
  };
  _proto.defaultQueryOptions = function defaultQueryOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }
    var defaultedOptions = _extends({}, this.defaultOptions.queries, this.getQueryDefaults(options == null ? void 0 : options.queryKey), options, {
      _defaulted: true
    });
    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
    }
    return defaultedOptions;
  };
  _proto.defaultQueryObserverOptions = function defaultQueryObserverOptions(options) {
    return this.defaultQueryOptions(options);
  };
  _proto.defaultMutationOptions = function defaultMutationOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }
    return _extends({}, this.defaultOptions.mutations, this.getMutationDefaults(options == null ? void 0 : options.mutationKey), options, {
      _defaulted: true
    });
  };
  _proto.clear = function clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  };
  return QueryClient2;
}();

// ../../node_modules/react-query/es/core/queryObserver.js
var QueryObserver = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(QueryObserver2, _Subscribable);
  function QueryObserver2(client, options) {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.options = options;
    _this.trackedProps = [];
    _this.selectError = null;
    _this.bindMethods();
    _this.setOptions(options);
    return _this;
  }
  var _proto = QueryObserver2.prototype;
  _proto.bindMethods = function bindMethods() {
    this.remove = this.remove.bind(this);
    this.refetch = this.refetch.bind(this);
  };
  _proto.onSubscribe = function onSubscribe() {
    if (this.listeners.length === 1) {
      this.currentQuery.addObserver(this);
      if (shouldFetchOnMount(this.currentQuery, this.options)) {
        this.executeFetch();
      }
      this.updateTimers();
    }
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  };
  _proto.shouldFetchOnReconnect = function shouldFetchOnReconnect() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect);
  };
  _proto.shouldFetchOnWindowFocus = function shouldFetchOnWindowFocus() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  };
  _proto.destroy = function destroy() {
    this.listeners = [];
    this.clearTimers();
    this.currentQuery.removeObserver(this);
  };
  _proto.setOptions = function setOptions(options, notifyOptions) {
    var prevOptions = this.options;
    var prevQuery = this.currentQuery;
    this.options = this.client.defaultQueryObserverOptions(options);
    if (typeof this.options.enabled !== "undefined" && typeof this.options.enabled !== "boolean") {
      throw new Error("Expected enabled to be a boolean");
    }
    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }
    this.updateQuery();
    var mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
      this.executeFetch();
    }
    this.updateResult(notifyOptions);
    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.updateStaleTimeout();
    }
    var nextRefetchInterval = this.computeRefetchInterval();
    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) {
      this.updateRefetchInterval(nextRefetchInterval);
    }
  };
  _proto.getOptimisticResult = function getOptimisticResult(options) {
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return this.createResult(query, defaultedOptions);
  };
  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };
  _proto.trackResult = function trackResult(result, defaultedOptions) {
    var _this2 = this;
    var trackedResult = {};
    var trackProp = function trackProp2(key) {
      if (!_this2.trackedProps.includes(key)) {
        _this2.trackedProps.push(key);
      }
    };
    Object.keys(result).forEach(function(key) {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: function get2() {
          trackProp(key);
          return result[key];
        }
      });
    });
    if (defaultedOptions.useErrorBoundary || defaultedOptions.suspense) {
      trackProp("error");
    }
    return trackedResult;
  };
  _proto.getNextResult = function getNextResult(options) {
    var _this3 = this;
    return new Promise(function(resolve, reject) {
      var unsubscribe = _this3.subscribe(function(result) {
        if (!result.isFetching) {
          unsubscribe();
          if (result.isError && (options == null ? void 0 : options.throwOnError)) {
            reject(result.error);
          } else {
            resolve(result);
          }
        }
      });
    });
  };
  _proto.getCurrentQuery = function getCurrentQuery() {
    return this.currentQuery;
  };
  _proto.remove = function remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  };
  _proto.refetch = function refetch(options) {
    return this.fetch(_extends({}, options, {
      meta: {
        refetchPage: options == null ? void 0 : options.refetchPage
      }
    }));
  };
  _proto.fetchOptimistic = function fetchOptimistic(options) {
    var _this4 = this;
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return query.fetch().then(function() {
      return _this4.createResult(query, defaultedOptions);
    });
  };
  _proto.fetch = function fetch(fetchOptions) {
    var _this5 = this;
    return this.executeFetch(fetchOptions).then(function() {
      _this5.updateResult();
      return _this5.currentResult;
    });
  };
  _proto.executeFetch = function executeFetch(fetchOptions) {
    this.updateQuery();
    var promise = this.currentQuery.fetch(this.options, fetchOptions);
    if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
      promise = promise.catch(noop);
    }
    return promise;
  };
  _proto.updateStaleTimeout = function updateStaleTimeout() {
    var _this6 = this;
    this.clearStaleTimeout();
    if (isServer || this.currentResult.isStale || !isValidTimeout(this.options.staleTime)) {
      return;
    }
    var time = timeUntilStale(this.currentResult.dataUpdatedAt, this.options.staleTime);
    var timeout = time + 1;
    this.staleTimeoutId = setTimeout(function() {
      if (!_this6.currentResult.isStale) {
        _this6.updateResult();
      }
    }, timeout);
  };
  _proto.computeRefetchInterval = function computeRefetchInterval() {
    var _this$options$refetch;
    return typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
  };
  _proto.updateRefetchInterval = function updateRefetchInterval(nextInterval) {
    var _this7 = this;
    this.clearRefetchInterval();
    this.currentRefetchInterval = nextInterval;
    if (isServer || this.options.enabled === false || !isValidTimeout(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
      return;
    }
    this.refetchIntervalId = setInterval(function() {
      if (_this7.options.refetchIntervalInBackground || focusManager.isFocused()) {
        _this7.executeFetch();
      }
    }, this.currentRefetchInterval);
  };
  _proto.updateTimers = function updateTimers() {
    this.updateStaleTimeout();
    this.updateRefetchInterval(this.computeRefetchInterval());
  };
  _proto.clearTimers = function clearTimers() {
    this.clearStaleTimeout();
    this.clearRefetchInterval();
  };
  _proto.clearStaleTimeout = function clearStaleTimeout() {
    clearTimeout(this.staleTimeoutId);
    this.staleTimeoutId = void 0;
  };
  _proto.clearRefetchInterval = function clearRefetchInterval() {
    clearInterval(this.refetchIntervalId);
    this.refetchIntervalId = void 0;
  };
  _proto.createResult = function createResult(query, options) {
    var prevQuery = this.currentQuery;
    var prevOptions = this.options;
    var prevResult = this.currentResult;
    var prevResultState = this.currentResultState;
    var prevResultOptions = this.currentResultOptions;
    var queryChange = query !== prevQuery;
    var queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
    var prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
    var state = query.state;
    var dataUpdatedAt = state.dataUpdatedAt, error2 = state.error, errorUpdatedAt = state.errorUpdatedAt, isFetching = state.isFetching, status = state.status;
    var isPreviousData = false;
    var isPlaceholderData = false;
    var data;
    if (options.optimisticResults) {
      var mounted = this.hasListeners();
      var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        isFetching = true;
        if (!dataUpdatedAt) {
          status = "loading";
        }
      }
    }
    if (options.keepPreviousData && !state.dataUpdateCount && (prevQueryResult == null ? void 0 : prevQueryResult.isSuccess) && status !== "error") {
      data = prevQueryResult.data;
      dataUpdatedAt = prevQueryResult.dataUpdatedAt;
      status = prevQueryResult.status;
      isPreviousData = true;
    } else if (options.select && typeof state.data !== "undefined") {
      if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === this.selectFn) {
        data = this.selectResult;
      } else {
        try {
          this.selectFn = options.select;
          data = options.select(state.data);
          if (options.structuralSharing !== false) {
            data = replaceEqualDeep(prevResult == null ? void 0 : prevResult.data, data);
          }
          this.selectResult = data;
          this.selectError = null;
        } catch (selectError) {
          getLogger().error(selectError);
          this.selectError = selectError;
        }
      }
    } else {
      data = state.data;
    }
    if (typeof options.placeholderData !== "undefined" && typeof data === "undefined" && (status === "loading" || status === "idle")) {
      var placeholderData;
      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData() : options.placeholderData;
        if (options.select && typeof placeholderData !== "undefined") {
          try {
            placeholderData = options.select(placeholderData);
            if (options.structuralSharing !== false) {
              placeholderData = replaceEqualDeep(prevResult == null ? void 0 : prevResult.data, placeholderData);
            }
            this.selectError = null;
          } catch (selectError) {
            getLogger().error(selectError);
            this.selectError = selectError;
          }
        }
      }
      if (typeof placeholderData !== "undefined") {
        status = "success";
        data = placeholderData;
        isPlaceholderData = true;
      }
    }
    if (this.selectError) {
      error2 = this.selectError;
      data = this.selectResult;
      errorUpdatedAt = Date.now();
      status = "error";
    }
    var result = {
      status,
      isLoading: status === "loading",
      isSuccess: status === "success",
      isError: status === "error",
      isIdle: status === "idle",
      data,
      dataUpdatedAt,
      error: error2,
      errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      errorUpdateCount: state.errorUpdateCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && status !== "loading",
      isLoadingError: status === "error" && state.dataUpdatedAt === 0,
      isPlaceholderData,
      isPreviousData,
      isRefetchError: status === "error" && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch,
      remove: this.remove
    };
    return result;
  };
  _proto.shouldNotifyListeners = function shouldNotifyListeners(result, prevResult) {
    if (!prevResult) {
      return true;
    }
    var _this$options = this.options, notifyOnChangeProps = _this$options.notifyOnChangeProps, notifyOnChangePropsExclusions = _this$options.notifyOnChangePropsExclusions;
    if (!notifyOnChangeProps && !notifyOnChangePropsExclusions) {
      return true;
    }
    if (notifyOnChangeProps === "tracked" && !this.trackedProps.length) {
      return true;
    }
    var includedProps = notifyOnChangeProps === "tracked" ? this.trackedProps : notifyOnChangeProps;
    return Object.keys(result).some(function(key) {
      var typedKey = key;
      var changed = result[typedKey] !== prevResult[typedKey];
      var isIncluded = includedProps == null ? void 0 : includedProps.some(function(x2) {
        return x2 === key;
      });
      var isExcluded = notifyOnChangePropsExclusions == null ? void 0 : notifyOnChangePropsExclusions.some(function(x2) {
        return x2 === key;
      });
      return changed && !isExcluded && (!includedProps || isIncluded);
    });
  };
  _proto.updateResult = function updateResult(notifyOptions) {
    var prevResult = this.currentResult;
    this.currentResult = this.createResult(this.currentQuery, this.options);
    this.currentResultState = this.currentQuery.state;
    this.currentResultOptions = this.options;
    if (shallowEqualObjects(this.currentResult, prevResult)) {
      return;
    }
    var defaultNotifyOptions = {
      cache: true
    };
    if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && this.shouldNotifyListeners(this.currentResult, prevResult)) {
      defaultNotifyOptions.listeners = true;
    }
    this.notify(_extends({}, defaultNotifyOptions, notifyOptions));
  };
  _proto.updateQuery = function updateQuery() {
    var query = this.client.getQueryCache().build(this.client, this.options);
    if (query === this.currentQuery) {
      return;
    }
    var prevQuery = this.currentQuery;
    this.currentQuery = query;
    this.currentQueryInitialState = query.state;
    this.previousQueryResult = this.currentResult;
    if (this.hasListeners()) {
      prevQuery == null ? void 0 : prevQuery.removeObserver(this);
      query.addObserver(this);
    }
  };
  _proto.onQueryUpdate = function onQueryUpdate(action) {
    var notifyOptions = {};
    if (action.type === "success") {
      notifyOptions.onSuccess = true;
    } else if (action.type === "error" && !isCancelledError(action.error)) {
      notifyOptions.onError = true;
    }
    this.updateResult(notifyOptions);
    if (this.hasListeners()) {
      this.updateTimers();
    }
  };
  _proto.notify = function notify2(notifyOptions) {
    var _this8 = this;
    notifyManager.batch(function() {
      if (notifyOptions.onSuccess) {
        _this8.options.onSuccess == null ? void 0 : _this8.options.onSuccess(_this8.currentResult.data);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(_this8.currentResult.data, null);
      } else if (notifyOptions.onError) {
        _this8.options.onError == null ? void 0 : _this8.options.onError(_this8.currentResult.error);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(void 0, _this8.currentResult.error);
      }
      if (notifyOptions.listeners) {
        _this8.listeners.forEach(function(listener) {
          listener(_this8.currentResult);
        });
      }
      if (notifyOptions.cache) {
        _this8.client.getQueryCache().notify({
          query: _this8.currentQuery,
          type: "observerResultsUpdated"
        });
      }
    });
  };
  return QueryObserver2;
}(Subscribable);
function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (options.enabled !== false) {
    var value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
}

// ../../node_modules/react-query/es/core/mutationObserver.js
var MutationObserver = /* @__PURE__ */ function(_Subscribable) {
  _inheritsLoose(MutationObserver2, _Subscribable);
  function MutationObserver2(client, options) {
    var _this;
    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.setOptions(options);
    _this.bindMethods();
    _this.updateResult();
    return _this;
  }
  var _proto = MutationObserver2.prototype;
  _proto.bindMethods = function bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  };
  _proto.setOptions = function setOptions(options) {
    this.options = this.client.defaultMutationOptions(options);
  };
  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      var _this$currentMutation;
      (_this$currentMutation = this.currentMutation) == null ? void 0 : _this$currentMutation.removeObserver(this);
    }
  };
  _proto.onMutationUpdate = function onMutationUpdate(action) {
    this.updateResult();
    var notifyOptions = {
      listeners: true
    };
    if (action.type === "success") {
      notifyOptions.onSuccess = true;
    } else if (action.type === "error") {
      notifyOptions.onError = true;
    }
    this.notify(notifyOptions);
  };
  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };
  _proto.reset = function reset() {
    this.currentMutation = void 0;
    this.updateResult();
    this.notify({
      listeners: true
    });
  };
  _proto.mutate = function mutate(variables, options) {
    this.mutateOptions = options;
    if (this.currentMutation) {
      this.currentMutation.removeObserver(this);
    }
    this.currentMutation = this.client.getMutationCache().build(this.client, _extends({}, this.options, {
      variables: typeof variables !== "undefined" ? variables : this.options.variables
    }));
    this.currentMutation.addObserver(this);
    return this.currentMutation.execute();
  };
  _proto.updateResult = function updateResult() {
    var state = this.currentMutation ? this.currentMutation.state : getDefaultState();
    var result = _extends({}, state, {
      isLoading: state.status === "loading",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    });
    this.currentResult = result;
  };
  _proto.notify = function notify2(options) {
    var _this2 = this;
    notifyManager.batch(function() {
      if (_this2.mutateOptions) {
        if (options.onSuccess) {
          _this2.mutateOptions.onSuccess == null ? void 0 : _this2.mutateOptions.onSuccess(_this2.currentResult.data, _this2.currentResult.variables, _this2.currentResult.context);
          _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(_this2.currentResult.data, null, _this2.currentResult.variables, _this2.currentResult.context);
        } else if (options.onError) {
          _this2.mutateOptions.onError == null ? void 0 : _this2.mutateOptions.onError(_this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
          _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(void 0, _this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
        }
      }
      if (options.listeners) {
        _this2.listeners.forEach(function(listener) {
          listener(_this2.currentResult);
        });
      }
    });
  };
  return MutationObserver2;
}(Subscribable);

// ../../node_modules/react-query/es/react/reactBatchedUpdates.js
var import_react_dom2 = __toESM(require_react_dom());
var unstable_batchedUpdates = import_react_dom2.default.unstable_batchedUpdates;

// ../../node_modules/react-query/es/react/setBatchUpdatesFn.js
notifyManager.setBatchNotifyFunction(unstable_batchedUpdates);

// ../../node_modules/react-query/es/react/logger.js
var logger2 = console;

// ../../node_modules/react-query/es/react/setLogger.js
setLogger(logger2);

// ../../node_modules/react-query/es/react/QueryClientProvider.js
import React4 from "react";
var defaultContext = /* @__PURE__ */ React4.createContext(void 0);
var QueryClientSharingContext = /* @__PURE__ */ React4.createContext(false);
function getQueryClientContext(contextSharing) {
  if (contextSharing && typeof window !== "undefined") {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }
    return window.ReactQueryClientContext;
  }
  return defaultContext;
}
var useQueryClient = function useQueryClient2() {
  var queryClient2 = React4.useContext(getQueryClientContext(React4.useContext(QueryClientSharingContext)));
  if (!queryClient2) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }
  return queryClient2;
};
var QueryClientProvider = function QueryClientProvider2(_ref) {
  var client = _ref.client, _ref$contextSharing = _ref.contextSharing, contextSharing = _ref$contextSharing === void 0 ? false : _ref$contextSharing, children = _ref.children;
  React4.useEffect(function() {
    client.mount();
    return function() {
      client.unmount();
    };
  }, [client]);
  var Context = getQueryClientContext(contextSharing);
  return /* @__PURE__ */ React4.createElement(QueryClientSharingContext.Provider, {
    value: contextSharing
  }, /* @__PURE__ */ React4.createElement(Context.Provider, {
    value: client
  }, children));
};

// ../../node_modules/react-query/es/react/QueryErrorResetBoundary.js
import React5 from "react";
function createValue() {
  var _isReset = false;
  return {
    clearReset: function clearReset() {
      _isReset = false;
    },
    reset: function reset() {
      _isReset = true;
    },
    isReset: function isReset() {
      return _isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = /* @__PURE__ */ React5.createContext(createValue());
var useQueryErrorResetBoundary = function useQueryErrorResetBoundary2() {
  return React5.useContext(QueryErrorResetBoundaryContext);
};

// ../../node_modules/react-query/es/react/useMutation.js
import React6 from "react";

// ../../node_modules/react-query/es/react/utils.js
function shouldThrowError(suspense, _useErrorBoundary, params) {
  if (typeof _useErrorBoundary === "function") {
    return _useErrorBoundary.apply(void 0, params);
  }
  if (typeof _useErrorBoundary === "boolean")
    return _useErrorBoundary;
  return !!suspense;
}

// ../../node_modules/react-query/es/react/useMutation.js
function useMutation(arg1, arg2, arg3) {
  var mountedRef = React6.useRef(false);
  var _React$useState = React6.useState(0), forceUpdate = _React$useState[1];
  var options = parseMutationArgs(arg1, arg2, arg3);
  var queryClient2 = useQueryClient();
  var obsRef = React6.useRef();
  if (!obsRef.current) {
    obsRef.current = new MutationObserver(queryClient2, options);
  } else {
    obsRef.current.setOptions(options);
  }
  var currentResult = obsRef.current.getCurrentResult();
  React6.useEffect(function() {
    mountedRef.current = true;
    var unsubscribe = obsRef.current.subscribe(notifyManager.batchCalls(function() {
      if (mountedRef.current) {
        forceUpdate(function(x2) {
          return x2 + 1;
        });
      }
    }));
    return function() {
      mountedRef.current = false;
      unsubscribe();
    };
  }, []);
  var mutate = React6.useCallback(function(variables, mutateOptions) {
    obsRef.current.mutate(variables, mutateOptions).catch(noop);
  }, []);
  if (currentResult.error && shouldThrowError(void 0, obsRef.current.options.useErrorBoundary, [currentResult.error])) {
    throw currentResult.error;
  }
  return _extends({}, currentResult, {
    mutate,
    mutateAsync: currentResult.mutate
  });
}

// ../../node_modules/react-query/es/react/useBaseQuery.js
import React7 from "react";
function useBaseQuery(options, Observer) {
  var mountedRef = React7.useRef(false);
  var _React$useState = React7.useState(0), forceUpdate = _React$useState[1];
  var queryClient2 = useQueryClient();
  var errorResetBoundary = useQueryErrorResetBoundary();
  var defaultedOptions = queryClient2.defaultQueryObserverOptions(options);
  defaultedOptions.optimisticResults = true;
  if (defaultedOptions.onError) {
    defaultedOptions.onError = notifyManager.batchCalls(defaultedOptions.onError);
  }
  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = notifyManager.batchCalls(defaultedOptions.onSuccess);
  }
  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = notifyManager.batchCalls(defaultedOptions.onSettled);
  }
  if (defaultedOptions.suspense) {
    if (typeof defaultedOptions.staleTime !== "number") {
      defaultedOptions.staleTime = 1e3;
    }
    if (defaultedOptions.cacheTime === 0) {
      defaultedOptions.cacheTime = 1;
    }
  }
  if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
    if (!errorResetBoundary.isReset()) {
      defaultedOptions.retryOnMount = false;
    }
  }
  var _React$useState2 = React7.useState(function() {
    return new Observer(queryClient2, defaultedOptions);
  }), observer = _React$useState2[0];
  var result = observer.getOptimisticResult(defaultedOptions);
  React7.useEffect(function() {
    mountedRef.current = true;
    errorResetBoundary.clearReset();
    var unsubscribe = observer.subscribe(notifyManager.batchCalls(function() {
      if (mountedRef.current) {
        forceUpdate(function(x2) {
          return x2 + 1;
        });
      }
    }));
    observer.updateResult();
    return function() {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [errorResetBoundary, observer]);
  React7.useEffect(function() {
    observer.setOptions(defaultedOptions, {
      listeners: false
    });
  }, [defaultedOptions, observer]);
  if (defaultedOptions.suspense && result.isLoading) {
    throw observer.fetchOptimistic(defaultedOptions).then(function(_ref) {
      var data = _ref.data;
      defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
    }).catch(function(error2) {
      errorResetBoundary.clearReset();
      defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error2);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(void 0, error2);
    });
  }
  if (result.isError && !errorResetBoundary.isReset() && !result.isFetching && shouldThrowError(defaultedOptions.suspense, defaultedOptions.useErrorBoundary, [result.error, observer.getCurrentQuery()])) {
    throw result.error;
  }
  if (defaultedOptions.notifyOnChangeProps === "tracked") {
    result = observer.trackResult(result, defaultedOptions);
  }
  return result;
}

// ../../node_modules/react-query/es/react/useQuery.js
function useQuery(arg1, arg2, arg3) {
  var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
  return useBaseQuery(parsedOptions, QueryObserver);
}

// src/utils/queries.tsx
import axios from "axios";
import { useContext, useEffect as useEffect4, useState as useState4 } from "react";

// src/providers/LocaleContext.tsx
import { createContext, useEffect as useEffect2, useState as useState2 } from "react";
var LocaleContext = createContext({
  currentLocale: "",
  locales: [],
  setCurrentLocale: () => {
  }
});
function LocaleProvider({
  locales,
  children
}) {
  const [currentLocale, setCurrentLocale] = useState2("");
  useEffect2(() => {
    if (Array.isArray(locales)) {
      const current = locales.find((locale) => locale.active);
      if (current) {
        setCurrentLocale(current.code);
      }
    }
  }, [locales]);
  return /* @__PURE__ */ React.createElement(LocaleContext.Provider, {
    value: { locales, currentLocale, setCurrentLocale }
  }, children);
}

// ../../node_modules/react-hot-toast/dist/react-hot-toast.esm.js
import { useState as useState3, useEffect as useEffect3, useMemo as useMemo2, createElement as createElement2, memo, Fragment, forwardRef as forwardRef2 } from "react";

// ../../node_modules/goober/dist/goober.modern.js
var e = { data: "" };
var t = (t3) => typeof window == "object" ? ((t3 ? t3.querySelector("#_goober") : window._goober) || Object.assign((t3 || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : t3 || e;
var l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
var a = /\/\*[^]*?\*\/|  +/g;
var n = /\n+/g;
var o = (e2, t3) => {
  let r2 = "", l3 = "", a3 = "";
  for (let n3 in e2) {
    let c3 = e2[n3];
    n3[0] == "@" ? n3[1] == "i" ? r2 = n3 + " " + c3 + ";" : l3 += n3[1] == "f" ? o(c3, n3) : n3 + "{" + o(c3, n3[1] == "k" ? "" : t3) + "}" : typeof c3 == "object" ? l3 += o(c3, t3 ? t3.replace(/([^,])+/g, (e3) => n3.replace(/(^:.*)|([^,])+/g, (t4) => /&/.test(t4) ? t4.replace(/&/g, e3) : e3 ? e3 + " " + t4 : t4)) : n3) : c3 != null && (n3 = /^--/.test(n3) ? n3 : n3.replace(/[A-Z]/g, "-$&").toLowerCase(), a3 += o.p ? o.p(n3, c3) : n3 + ":" + c3 + ";");
  }
  return r2 + (t3 && a3 ? t3 + "{" + a3 + "}" : a3) + l3;
};
var c = {};
var s = (e2) => {
  if (typeof e2 == "object") {
    let t3 = "";
    for (let r2 in e2)
      t3 += r2 + s(e2[r2]);
    return t3;
  }
  return e2;
};
var i = (e2, t3, r2, i3, p3) => {
  let u3 = s(e2), d3 = c[u3] || (c[u3] = ((e3) => {
    let t4 = 0, r3 = 11;
    for (; t4 < e3.length; )
      r3 = 101 * r3 + e3.charCodeAt(t4++) >>> 0;
    return "go" + r3;
  })(u3));
  if (!c[d3]) {
    let t4 = u3 !== e2 ? e2 : ((e3) => {
      let t5, r3, o3 = [{}];
      for (; t5 = l.exec(e3.replace(a, "")); )
        t5[4] ? o3.shift() : t5[3] ? (r3 = t5[3].replace(n, " ").trim(), o3.unshift(o3[0][r3] = o3[0][r3] || {})) : o3[0][t5[1]] = t5[2].replace(n, " ").trim();
      return o3[0];
    })(e2);
    c[d3] = o(p3 ? { ["@keyframes " + d3]: t4 } : t4, r2 ? "" : "." + d3);
  }
  return ((e3, t4, r3) => {
    t4.data.indexOf(e3) == -1 && (t4.data = r3 ? e3 + t4.data : t4.data + e3);
  })(c[d3], t3, i3), d3;
};
var p = (e2, t3, r2) => e2.reduce((e3, l3, a3) => {
  let n3 = t3[a3];
  if (n3 && n3.call) {
    let e4 = n3(r2), t4 = e4 && e4.props && e4.props.className || /^go/.test(e4) && e4;
    n3 = t4 ? "." + t4 : e4 && typeof e4 == "object" ? e4.props ? "" : o(e4, "") : e4 === false ? "" : e4;
  }
  return e3 + l3 + (n3 == null ? "" : n3);
}, "");
function u(e2) {
  let r2 = this || {}, l3 = e2.call ? e2(r2.p) : e2;
  return i(l3.unshift ? l3.raw ? p(l3, [].slice.call(arguments, 1), r2.p) : l3.reduce((e3, t3) => Object.assign(e3, t3 && t3.call ? t3(r2.p) : t3), {}) : l3, t(r2.target), r2.g, r2.o, r2.k);
}
var d;
var f;
var g;
var b = u.bind({ g: 1 });
var h = u.bind({ k: 1 });
function m(e2, t3, r2, l3) {
  o.p = t3, d = e2, f = r2, g = l3;
}
function j(e2, t3) {
  let r2 = this || {};
  return function() {
    let l3 = arguments;
    function a3(n3, o3) {
      let c3 = Object.assign({}, n3), s3 = c3.className || a3.className;
      r2.p = Object.assign({ theme: f && f() }, c3), r2.o = / *go\d+/.test(s3), c3.className = u.apply(r2, l3) + (s3 ? " " + s3 : ""), t3 && (c3.ref = o3);
      let i3 = e2;
      return e2[0] && (i3 = c3.as || e2, delete c3.as), g && i3[0] && g(c3), d(i3, c3);
    }
    return t3 ? t3(a3) : a3;
  };
}

// ../../node_modules/react-hot-toast/dist/react-hot-toast.esm.js
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}
var isFunction = function isFunction2(valOrFunction) {
  return typeof valOrFunction === "function";
};
var resolveValue = function resolveValue2(valOrFunction, arg) {
  return isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
};
var genId = /* @__PURE__ */ function() {
  var count2 = 0;
  return function() {
    return (++count2).toString();
  };
}();
var createRectRef = function createRectRef2(onRect) {
  return function(el) {
    if (el) {
      setTimeout(function() {
        var boundingRect = el.getBoundingClientRect();
        onRect(boundingRect);
      });
    }
  };
};
var prefersReducedMotion = /* @__PURE__ */ function() {
  var shouldReduceMotion = void 0;
  return function() {
    if (shouldReduceMotion === void 0 && typeof window !== "undefined") {
      var mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
      shouldReduceMotion = !mediaQuery || mediaQuery.matches;
    }
    return shouldReduceMotion;
  };
}();
var TOAST_LIMIT = 20;
var ActionType;
(function(ActionType2) {
  ActionType2[ActionType2["ADD_TOAST"] = 0] = "ADD_TOAST";
  ActionType2[ActionType2["UPDATE_TOAST"] = 1] = "UPDATE_TOAST";
  ActionType2[ActionType2["UPSERT_TOAST"] = 2] = "UPSERT_TOAST";
  ActionType2[ActionType2["DISMISS_TOAST"] = 3] = "DISMISS_TOAST";
  ActionType2[ActionType2["REMOVE_TOAST"] = 4] = "REMOVE_TOAST";
  ActionType2[ActionType2["START_PAUSE"] = 5] = "START_PAUSE";
  ActionType2[ActionType2["END_PAUSE"] = 6] = "END_PAUSE";
})(ActionType || (ActionType = {}));
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = function addToRemoveQueue2(toastId) {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  var timeout = setTimeout(function() {
    toastTimeouts["delete"](toastId);
    dispatch({
      type: ActionType.REMOVE_TOAST,
      toastId
    });
  }, 1e3);
  toastTimeouts.set(toastId, timeout);
};
var clearFromRemoveQueue = function clearFromRemoveQueue2(toastId) {
  var timeout = toastTimeouts.get(toastId);
  if (timeout) {
    clearTimeout(timeout);
  }
};
var reducer2 = function reducer3(state, action) {
  switch (action.type) {
    case ActionType.ADD_TOAST:
      return _extends2({}, state, {
        toasts: [action.toast].concat(state.toasts).slice(0, TOAST_LIMIT)
      });
    case ActionType.UPDATE_TOAST:
      if (action.toast.id) {
        clearFromRemoveQueue(action.toast.id);
      }
      return _extends2({}, state, {
        toasts: state.toasts.map(function(t3) {
          return t3.id === action.toast.id ? _extends2({}, t3, action.toast) : t3;
        })
      });
    case ActionType.UPSERT_TOAST:
      var toast3 = action.toast;
      return state.toasts.find(function(t3) {
        return t3.id === toast3.id;
      }) ? reducer3(state, {
        type: ActionType.UPDATE_TOAST,
        toast: toast3
      }) : reducer3(state, {
        type: ActionType.ADD_TOAST,
        toast: toast3
      });
    case ActionType.DISMISS_TOAST:
      var toastId = action.toastId;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach(function(toast4) {
          addToRemoveQueue(toast4.id);
        });
      }
      return _extends2({}, state, {
        toasts: state.toasts.map(function(t3) {
          return t3.id === toastId || toastId === void 0 ? _extends2({}, t3, {
            visible: false
          }) : t3;
        })
      });
    case ActionType.REMOVE_TOAST:
      if (action.toastId === void 0) {
        return _extends2({}, state, {
          toasts: []
        });
      }
      return _extends2({}, state, {
        toasts: state.toasts.filter(function(t3) {
          return t3.id !== action.toastId;
        })
      });
    case ActionType.START_PAUSE:
      return _extends2({}, state, {
        pausedAt: action.time
      });
    case ActionType.END_PAUSE:
      var diff = action.time - (state.pausedAt || 0);
      return _extends2({}, state, {
        pausedAt: void 0,
        toasts: state.toasts.map(function(t3) {
          return _extends2({}, t3, {
            pauseDuration: t3.pauseDuration + diff
          });
        })
      });
  }
};
var listeners = [];
var memoryState = {
  toasts: [],
  pausedAt: void 0
};
var dispatch = function dispatch2(action) {
  memoryState = reducer2(memoryState, action);
  listeners.forEach(function(listener) {
    listener(memoryState);
  });
};
var defaultTimeouts = {
  blank: 4e3,
  error: 4e3,
  success: 2e3,
  loading: Infinity,
  custom: 4e3
};
var useStore = function useStore2(toastOptions) {
  if (toastOptions === void 0) {
    toastOptions = {};
  }
  var _useState = useState3(memoryState), state = _useState[0], setState = _useState[1];
  useEffect3(function() {
    listeners.push(setState);
    return function() {
      var index2 = listeners.indexOf(setState);
      if (index2 > -1) {
        listeners.splice(index2, 1);
      }
    };
  }, [state]);
  var mergedToasts = state.toasts.map(function(t3) {
    var _toastOptions$t$type, _toastOptions, _toastOptions$t$type2;
    return _extends2({}, toastOptions, toastOptions[t3.type], t3, {
      duration: t3.duration || ((_toastOptions$t$type = toastOptions[t3.type]) == null ? void 0 : _toastOptions$t$type.duration) || ((_toastOptions = toastOptions) == null ? void 0 : _toastOptions.duration) || defaultTimeouts[t3.type],
      style: _extends2({}, toastOptions.style, (_toastOptions$t$type2 = toastOptions[t3.type]) == null ? void 0 : _toastOptions$t$type2.style, t3.style)
    });
  });
  return _extends2({}, state, {
    toasts: mergedToasts
  });
};
var createToast = function createToast2(message, type, opts) {
  if (type === void 0) {
    type = "blank";
  }
  return _extends2({
    createdAt: Date.now(),
    visible: true,
    type,
    ariaProps: {
      role: "status",
      "aria-live": "polite"
    },
    message,
    pauseDuration: 0
  }, opts, {
    id: (opts == null ? void 0 : opts.id) || genId()
  });
};
var createHandler = function createHandler2(type) {
  return function(message, options) {
    var toast3 = createToast(message, type, options);
    dispatch({
      type: ActionType.UPSERT_TOAST,
      toast: toast3
    });
    return toast3.id;
  };
};
var toast = function toast2(message, opts) {
  return createHandler("blank")(message, opts);
};
toast.error = /* @__PURE__ */ createHandler("error");
toast.success = /* @__PURE__ */ createHandler("success");
toast.loading = /* @__PURE__ */ createHandler("loading");
toast.custom = /* @__PURE__ */ createHandler("custom");
toast.dismiss = function(toastId) {
  dispatch({
    type: ActionType.DISMISS_TOAST,
    toastId
  });
};
toast.remove = function(toastId) {
  return dispatch({
    type: ActionType.REMOVE_TOAST,
    toastId
  });
};
toast.promise = function(promise, msgs, opts) {
  var id = toast.loading(msgs.loading, _extends2({}, opts, opts == null ? void 0 : opts.loading));
  promise.then(function(p3) {
    toast.success(resolveValue(msgs.success, p3), _extends2({
      id
    }, opts, opts == null ? void 0 : opts.success));
    return p3;
  })["catch"](function(e2) {
    toast.error(resolveValue(msgs.error, e2), _extends2({
      id
    }, opts, opts == null ? void 0 : opts.error));
  });
  return promise;
};
var useToaster = function useToaster2(toastOptions) {
  var _useStore = useStore(toastOptions), toasts = _useStore.toasts, pausedAt = _useStore.pausedAt;
  useEffect3(function() {
    if (pausedAt) {
      return;
    }
    var now = Date.now();
    var timeouts = toasts.map(function(t3) {
      if (t3.duration === Infinity) {
        return;
      }
      var durationLeft = (t3.duration || 0) + t3.pauseDuration - (now - t3.createdAt);
      if (durationLeft < 0) {
        if (t3.visible) {
          toast.dismiss(t3.id);
        }
        return;
      }
      return setTimeout(function() {
        return toast.dismiss(t3.id);
      }, durationLeft);
    });
    return function() {
      timeouts.forEach(function(timeout) {
        return timeout && clearTimeout(timeout);
      });
    };
  }, [toasts, pausedAt]);
  var handlers = useMemo2(function() {
    return {
      startPause: function startPause() {
        dispatch({
          type: ActionType.START_PAUSE,
          time: Date.now()
        });
      },
      endPause: function endPause() {
        if (pausedAt) {
          dispatch({
            type: ActionType.END_PAUSE,
            time: Date.now()
          });
        }
      },
      updateHeight: function updateHeight(toastId, height) {
        return dispatch({
          type: ActionType.UPDATE_TOAST,
          toast: {
            id: toastId,
            height
          }
        });
      },
      calculateOffset: function calculateOffset(toast3, opts) {
        var _relevantToasts$filte;
        var _ref = opts || {}, _ref$reverseOrder = _ref.reverseOrder, reverseOrder = _ref$reverseOrder === void 0 ? false : _ref$reverseOrder, _ref$gutter = _ref.gutter, gutter = _ref$gutter === void 0 ? 8 : _ref$gutter, defaultPosition = _ref.defaultPosition;
        var relevantToasts = toasts.filter(function(t3) {
          return (t3.position || defaultPosition) === (toast3.position || defaultPosition) && t3.height;
        });
        var toastIndex = relevantToasts.findIndex(function(t3) {
          return t3.id === toast3.id;
        });
        var toastsBefore = relevantToasts.filter(function(toast4, i3) {
          return i3 < toastIndex && toast4.visible;
        }).length;
        var offset4 = (_relevantToasts$filte = relevantToasts.filter(function(t3) {
          return t3.visible;
        })).slice.apply(_relevantToasts$filte, reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce(function(acc, t3) {
          return acc + (t3.height || 0) + gutter;
        }, 0);
        return offset4;
      }
    };
  }, [toasts, pausedAt]);
  return {
    toasts,
    handlers
  };
};
function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ", ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ", " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: ", " 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ", ";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: ", " 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);
  _templateObject4 = function _templateObject42() {
    return data;
  };
  return data;
}
function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0) rotate(90deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n	opacity: 1;\n}"]);
  _templateObject3 = function _templateObject32() {
    return data;
  };
  return data;
}
function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);
  _templateObject2 = function _templateObject22() {
    return data;
  };
  return data;
}
function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);
  _templateObject = function _templateObject5() {
    return data;
  };
  return data;
}
var circleAnimation = /* @__PURE__ */ h(/* @__PURE__ */ _templateObject());
var firstLineAnimation = /* @__PURE__ */ h(/* @__PURE__ */ _templateObject2());
var secondLineAnimation = /* @__PURE__ */ h(/* @__PURE__ */ _templateObject3());
var ErrorIcon = /* @__PURE__ */ j("div")(/* @__PURE__ */ _templateObject4(), function(p3) {
  return p3.primary || "#ff4b4b";
}, circleAnimation, firstLineAnimation, function(p3) {
  return p3.secondary || "#fff";
}, secondLineAnimation);
function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ", ";\n  border-right-color: ", ";\n  animation: ", " 1s linear infinite;\n"]);
  _templateObject2$1 = function _templateObject22() {
    return data;
  };
  return data;
}
function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);
  _templateObject$1 = function _templateObject5() {
    return data;
  };
  return data;
}
var rotate = /* @__PURE__ */ h(/* @__PURE__ */ _templateObject$1());
var LoaderIcon = /* @__PURE__ */ j("div")(/* @__PURE__ */ _templateObject2$1(), function(p3) {
  return p3.secondary || "#e0e0e0";
}, function(p3) {
  return p3.primary || "#616161";
}, rotate);
function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ", ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ", " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: ", " 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ", ";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);
  _templateObject3$1 = function _templateObject32() {
    return data;
  };
  return data;
}
function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n0% {\n	height: 0;\n	width: 0;\n	opacity: 0;\n}\n40% {\n  height: 0;\n	width: 6px;\n	opacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);
  _templateObject2$2 = function _templateObject22() {
    return data;
  };
  return data;
}
function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n	opacity: 1;\n}"]);
  _templateObject$2 = function _templateObject5() {
    return data;
  };
  return data;
}
var circleAnimation$1 = /* @__PURE__ */ h(/* @__PURE__ */ _templateObject$2());
var checkmarkAnimation = /* @__PURE__ */ h(/* @__PURE__ */ _templateObject2$2());
var CheckmarkIcon = /* @__PURE__ */ j("div")(/* @__PURE__ */ _templateObject3$1(), function(p3) {
  return p3.primary || "#61d345";
}, circleAnimation$1, checkmarkAnimation, function(p3) {
  return p3.secondary || "#fff";
});
function _templateObject4$1() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: ", " 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);
  _templateObject4$1 = function _templateObject42() {
    return data;
  };
  return data;
}
function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);
  _templateObject3$2 = function _templateObject32() {
    return data;
  };
  return data;
}
function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);
  _templateObject2$3 = function _templateObject22() {
    return data;
  };
  return data;
}
function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n"]);
  _templateObject$3 = function _templateObject5() {
    return data;
  };
  return data;
}
var StatusWrapper = /* @__PURE__ */ j("div")(/* @__PURE__ */ _templateObject$3());
var IndicatorWrapper = /* @__PURE__ */ j("div")(/* @__PURE__ */ _templateObject2$3());
var enter = /* @__PURE__ */ h(/* @__PURE__ */ _templateObject3$2());
var AnimatedIconWrapper = /* @__PURE__ */ j("div")(/* @__PURE__ */ _templateObject4$1(), enter);
var ToastIcon = function ToastIcon2(_ref) {
  var toast3 = _ref.toast;
  var icon = toast3.icon, type = toast3.type, iconTheme = toast3.iconTheme;
  if (icon !== void 0) {
    if (typeof icon === "string") {
      return createElement2(AnimatedIconWrapper, null, icon);
    } else {
      return icon;
    }
  }
  if (type === "blank") {
    return null;
  }
  return createElement2(IndicatorWrapper, null, createElement2(LoaderIcon, Object.assign({}, iconTheme)), type !== "loading" && createElement2(StatusWrapper, null, type === "error" ? createElement2(ErrorIcon, Object.assign({}, iconTheme)) : createElement2(CheckmarkIcon, Object.assign({}, iconTheme))));
};
function _templateObject2$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]);
  _templateObject2$4 = function _templateObject22() {
    return data;
  };
  return data;
}
function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);
  _templateObject$4 = function _templateObject5() {
    return data;
  };
  return data;
}
var enterAnimation = function enterAnimation2(factor) {
  return "\n0% {transform: translate3d(0," + factor * -200 + "%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n";
};
var exitAnimation = function exitAnimation2(factor) {
  return "\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0," + factor * -150 + "%,-1px) scale(.6); opacity:0;}\n";
};
var fadeInAnimation = "0%{opacity:0;} 100%{opacity:1;}";
var fadeOutAnimation = "0%{opacity:1;} 100%{opacity:0;}";
var ToastBarBase = /* @__PURE__ */ j("div", forwardRef2)(/* @__PURE__ */ _templateObject$4());
var Message = /* @__PURE__ */ j("div")(/* @__PURE__ */ _templateObject2$4());
var getAnimationStyle = function getAnimationStyle2(position3, visible) {
  var top2 = position3.includes("top");
  var factor = top2 ? 1 : -1;
  var _ref = prefersReducedMotion() ? [fadeInAnimation, fadeOutAnimation] : [enterAnimation(factor), exitAnimation(factor)], enter3 = _ref[0], exit = _ref[1];
  return {
    animation: visible ? h(enter3) + " 0.35s cubic-bezier(.21,1.02,.73,1) forwards" : h(exit) + " 0.4s forwards cubic-bezier(.06,.71,.55,1)"
  };
};
var ToastBar = /* @__PURE__ */ memo(function(_ref2) {
  var toast3 = _ref2.toast, position3 = _ref2.position, style2 = _ref2.style, children = _ref2.children;
  var animationStyle = toast3 != null && toast3.height ? getAnimationStyle(toast3.position || position3 || "top-center", toast3.visible) : {
    opacity: 0
  };
  var icon = createElement2(ToastIcon, {
    toast: toast3
  });
  var message = createElement2(Message, Object.assign({}, toast3.ariaProps), resolveValue(toast3.message, toast3));
  return createElement2(ToastBarBase, {
    className: toast3.className,
    style: _extends2({}, animationStyle, style2, toast3.style)
  }, typeof children === "function" ? children({
    icon,
    message
  }) : createElement2(Fragment, null, icon, message));
});
function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);
  _templateObject$5 = function _templateObject5() {
    return data;
  };
  return data;
}
m(createElement2);
var getPositionStyle = function getPositionStyle2(position3, offset4) {
  var top2 = position3.includes("top");
  var verticalStyle = top2 ? {
    top: 0
  } : {
    bottom: 0
  };
  var horizontalStyle = position3.includes("center") ? {
    justifyContent: "center"
  } : position3.includes("right") ? {
    justifyContent: "flex-end"
  } : {};
  return _extends2({
    left: 0,
    right: 0,
    display: "flex",
    position: "absolute",
    transition: prefersReducedMotion() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
    transform: "translateY(" + offset4 * (top2 ? 1 : -1) + "px)"
  }, verticalStyle, horizontalStyle);
};
var activeClass = /* @__PURE__ */ u(/* @__PURE__ */ _templateObject$5());
var DEFAULT_OFFSET = 16;
var Toaster = function Toaster2(_ref) {
  var reverseOrder = _ref.reverseOrder, _ref$position = _ref.position, position3 = _ref$position === void 0 ? "top-center" : _ref$position, toastOptions = _ref.toastOptions, gutter = _ref.gutter, children = _ref.children, containerStyle = _ref.containerStyle, containerClassName = _ref.containerClassName;
  var _useToaster = useToaster(toastOptions), toasts = _useToaster.toasts, handlers = _useToaster.handlers;
  return createElement2("div", {
    style: _extends2({
      position: "fixed",
      zIndex: 9999,
      top: DEFAULT_OFFSET,
      left: DEFAULT_OFFSET,
      right: DEFAULT_OFFSET,
      bottom: DEFAULT_OFFSET,
      pointerEvents: "none"
    }, containerStyle),
    className: containerClassName,
    onMouseEnter: handlers.startPause,
    onMouseLeave: handlers.endPause
  }, toasts.map(function(t3) {
    var toastPosition = t3.position || position3;
    var offset4 = handlers.calculateOffset(t3, {
      reverseOrder,
      gutter,
      defaultPosition: position3
    });
    var positionStyle = getPositionStyle(toastPosition, offset4);
    var ref2 = t3.height ? void 0 : createRectRef(function(rect) {
      handlers.updateHeight(t3.id, rect.height);
    });
    return createElement2("div", {
      ref: ref2,
      className: t3.visible ? activeClass : "",
      key: t3.id,
      style: positionStyle
    }, t3.type === "custom" ? resolveValue(t3.message, t3) : children ? children(t3) : createElement2(ToastBar, {
      toast: t3,
      position: toastPosition
    }));
  }));
};
var react_hot_toast_esm_default = toast;

// src/utils/queries.tsx
var instance = axios.create();
async function fetcher(url, config2 = {}) {
  try {
    const response = await instance({
      url,
      withCredentials: true,
      ...config2
    });
    return response.data;
  } catch (error2) {
    throw Error(error2);
  }
}
var queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
      cacheTime: Infinity
    }
  }
});
function BlocksProvider({
  children,
  api
}) {
  const [initialized, setInitialized] = useState4(false);
  useEffect4(() => {
    instance.defaults.baseURL = api;
    setInitialized(true);
  }, [api]);
  if (!initialized) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(QueryClientProvider, {
    client: queryClient
  }, children);
}
function useGroups() {
  return useQuery(["block_group"], () => fetcher(`/block_group/list`));
}
function useGroup(id) {
  const { groupId: contextGroupId } = useContext(BlocksGroupContext);
  const { currentLocale } = useContext(LocaleContext);
  const groupId = id || contextGroupId;
  const key = ["block_group", groupId, currentLocale];
  const queryClient2 = useQueryClient();
  const query = useQuery(key, async () => {
    const data = await fetcher(`/block_group`, {
      method: "GET",
      params: {
        id: groupId,
        locale: currentLocale
      }
    });
    return data;
  }, {
    enabled: !!groupId,
    cacheTime: Infinity
  });
  return {
    ...query,
    editGroup: (data) => {
      queryClient2.setQueryData(key, () => {
        return data;
      });
    }
  };
}
function useCreateOrUpdateGroup() {
  const {
    groupId: contextGroupId,
    itemId: contextItemId,
    itemType: contextItemType,
    noRedirect = false
  } = useContext(BlocksGroupContext);
  const { currentLocale } = useContext(LocaleContext);
  const { group: contextGroup } = useContext(BlocksGroupContext);
  return useMutation(({
    groupId = contextGroupId,
    itemId = contextItemId,
    itemType = contextItemType,
    group = contextGroup,
    blocks
  }) => {
    const { itemBlockGroups = {}, ...groupOmitItemBlockGroups } = group;
    let data = {
      blockGroup: {
        ...groupOmitItemBlockGroups,
        jsonContent: JSON.stringify(blocks)
      },
      locale: currentLocale
    };
    console.log(itemId, itemType, contextItemId, contextItemType);
    if (itemId || itemType) {
      data.itemBlockGroup = {
        itemType,
        itemId,
        blockGroupId: group.id
      };
    }
    if (!data.blockGroup.slug) {
      data.blockGroup.slug = null;
    }
    return fetcher(`/block_group`, {
      method: groupId ? "PATCH" : "POST",
      data
    });
  }, {
    onSuccess: (data) => {
      react_hot_toast_esm_default.success("enregistr\xE9 avec succ\xE8s");
      if (noRedirect) {
        window.location.reload();
        return;
      }
      window.location.replace(`/admin/TheliaBlocks/${data.id}`);
    }
  });
}
function useDeleteGroup() {
  const queryClient2 = useQueryClient();
  const { groupId: contextGroupId } = useContext(BlocksGroupContext);
  const { currentLocale } = useContext(LocaleContext);
  return useMutation((id) => {
    if (!id && !contextGroupId) {
      throw new Error("id is mandatory, and no fallback groupId was found in current context");
    }
    return fetcher(`/block_group/${id || contextGroupId}`, {
      method: "DELETE"
    });
  }, {
    onSuccess: (data, groupId) => {
      queryClient2.invalidateQueries(["block_group"]);
      react_hot_toast_esm_default.success("groupe supprim\xE9");
    }
  });
}
function useDuplicateGroup() {
  const { groupId } = useContext(BlocksGroupContext);
  return useMutation((id) => {
    if (!id && !groupId) {
      throw new Error("id is mandatory, and no fallback groupId was found in current context");
    }
    return fetcher(`/block_group/duplicate/${id}`, {
      method: "POST"
    });
  }, {
    onSuccess: (newGroupId) => {
      window.location.replace(`/admin/TheliaBlocks/${newGroupId}`);
    }
  });
}
function usePreviewGroup(timestamp, data) {
  const { currentLocale } = useContext(LocaleContext);
  const key = ["preview_block_group", currentLocale, timestamp];
  const query = useQuery(key, async () => {
    return fetcher(`/preview`, {
      baseURL: window.location.origin + "/TheliaBlocks",
      method: "POST",
      data: {
        json: data
      }
    });
  }, {
    enabled: !!timestamp && !!currentLocale,
    cacheTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    suspense: false
  });
  return query;
}
function useProductsBy({ type, value = null }) {
  let params = {
    ids: null,
    reference: null,
    title: null
  };
  params[type] = value;
  return useQuery(["Product", type, value], () => fetcher(`/product/search`, {
    method: "GET",
    params
  }), {
    enabled: !!value
  });
}

// src/providers/BlockGroupContext.tsx
var BlocksGroupContext = React8.createContext({
  group: void 0,
  editGroup: () => {
  },
  noRedirect: false
});
var BlocksGroupProvider = ({
  groupId,
  itemType,
  itemId,
  children,
  noRedirect
}) => {
  const [group, setGroup] = React8.useState({
    visible: true,
    title: "",
    slug: null
  });
  const { data, editGroup } = useGroup(groupId);
  React8.useEffect(() => {
    if (data) {
      setGroup(data);
    }
  }, [data]);
  return /* @__PURE__ */ React8.createElement(BlocksGroupContext.Provider, {
    value: { group, editGroup, groupId, itemType, itemId, noRedirect }
  }, /* @__PURE__ */ React8.createElement(React8.Suspense, {
    fallback: "loading group"
  }, children));
};

// src/providers/BlockContext.tsx
var BlockContext = createContext3({ blocks: [], setBlocks: () => [] });
var BlockContextProvider = ({
  children,
  defaultBlocks,
  root = false
}) => {
  const [blocks, setBlocks] = useState6(defaultBlocks || []);
  const { group } = useContext2(BlocksGroupContext);
  useEffect6(() => {
    if (root && group?.jsonContent) {
      setBlocks(JSON.parse(group?.jsonContent));
    }
  }, [group?.jsonContent, root]);
  return /* @__PURE__ */ React.createElement(BlockContext.Provider, {
    value: { blocks, setBlocks }
  }, children);
};

// src/utils/array.ts
var reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// src/hooks/useBlockContext.tsx
var useBlocksContext = () => {
  const { blocks, setBlocks } = React9.useContext(BlockContext);
  const findBlockIndex = React9.useCallback((blockId) => blocks.findIndex((block) => block.id === blockId), []);
  const addBlock = React9.useCallback((newBlock) => {
    setBlocks((blocks2) => [...blocks2, newBlock]);
  }, []);
  const removeBlock = React9.useCallback((blockId) => {
    setBlocks((blocks2) => blocks2.filter((block) => block.id !== blockId));
  }, []);
  const updateBlock = React9.useCallback((blockId, data) => {
    setBlocks((blocks2) => blocks2.map((block) => block.id === blockId ? { ...block, data } : block));
  }, []);
  const moveBlockUp = React9.useCallback((blockIndex) => {
    if (blockIndex !== -1 && blockIndex !== 0) {
      setBlocks((blocks2) => [...reorder(blocks2, blockIndex, blockIndex - 1)]);
    }
  }, []);
  const moveBlockDown = React9.useCallback((blockIndex) => {
    if (blockIndex !== -1 && blockIndex < blocks.length) {
      setBlocks((blocks2) => [...reorder(blocks2, blockIndex, blockIndex + 1)]);
    }
  }, []);
  const moveBlockTo = React9.useCallback((blockIndex, to) => {
    if (typeof to === "number" && to <= blocks.length) {
      setBlocks((blocks2) => [...reorder(blocks2, blockIndex, to)]);
    }
  }, []);
  return {
    addBlock,
    removeBlock,
    updateBlock,
    moveBlockUp,
    moveBlockDown,
    moveBlockTo,
    findBlockIndex,
    blockList: blocks
  };
};

// src/blocks/MultiColumns/MultiColumns.tsx
import * as React19 from "react";

// src/components/Block/Block.tsx
import * as React12 from "react";

// src/components/BlockControls/BlockControls.tsx
import * as React11 from "react";

// src/hooks/useWindowSize.tsx
import * as React10 from "react";
var useWindowSize = () => {
  const [size, setSize] = React10.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };
  React10.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
};
var useWindowSize_default = useWindowSize;

// src/components/BlockControls/BlockControls.tsx
var BlockControls = ({
  blockId,
  blockIndex,
  inLayout = false,
  DndDragHandle: DndDragHandle2
}) => {
  const { blockList, removeBlock, moveBlockUp, moveBlockDown } = useBlocksContext();
  const { width } = useWindowSize_default();
  return /* @__PURE__ */ React11.createElement("div", {
    className: "flex"
  }, DndDragHandle2 && /* @__PURE__ */ React11.createElement("div", {
    className: `${!inLayout && width > 768 ? "border-y-2 border-l-2 border-mediumGrey px-2 md:px-6" : "px-2 sm:px-3"} text-darkCharbon`
  }, /* @__PURE__ */ React11.createElement(DndDragHandle2, null)), /* @__PURE__ */ React11.createElement(tippy_react_esm_default, {
    delay: [700, 0],
    disabled: !inLayout && width > 768,
    content: "Monter l'\xE9l\xE9ment"
  }, /* @__PURE__ */ React11.createElement("button", {
    className: `${!inLayout && width > 768 ? "border-y-2 border-l-2 border-mediumGrey px-2 md:px-6" : "px-2 sm:px-3"} ${blockIndex === 0 ? "text-gray-400" : "text-darkCharbon"}`,
    disabled: blockIndex === 0,
    onClick: () => moveBlockUp(blockIndex)
  }, /* @__PURE__ */ React11.createElement("i", {
    className: "fa fa-arrow-up"
  }), !inLayout && width > 768 ? " Monter" : "")), /* @__PURE__ */ React11.createElement(tippy_react_esm_default, {
    delay: [700, 0],
    disabled: !inLayout && width > 768,
    content: "Descendre l'\xE9l\xE9ment",
    placement: "bottom"
  }, /* @__PURE__ */ React11.createElement("button", {
    className: `${!inLayout && width > 768 ? "border-2 border-mediumGrey px-2 md:px-6" : "px-2 sm:px-3"} ${blockIndex === blockList.length - 1 ? "text-gray-400" : "text-darkCharbon"}`,
    disabled: blockIndex === blockList.length - 1,
    onClick: () => moveBlockDown(blockIndex)
  }, /* @__PURE__ */ React11.createElement("i", {
    className: "fa fa-arrow-down"
  }), !inLayout && width > 768 ? " Descendre" : "")), /* @__PURE__ */ React11.createElement(tippy_react_esm_default, {
    delay: [700, 0],
    disabled: !inLayout && width > 768,
    content: "Supprimer l'\xE9l\xE9ment",
    placement: "bottom"
  }, /* @__PURE__ */ React11.createElement("button", {
    className: `${!inLayout && width > 768 ? "border-y-2 border-r-2 border-mediumGrey px-2 md:px-6" : "px-2 sm:px-3"} text-error`,
    onClick: () => removeBlock(blockId)
  }, /* @__PURE__ */ React11.createElement("i", {
    className: "fa fa-trash-alt"
  }), !inLayout && width > 768 ? " Supprimer" : "")));
};
var BlockControls_default = BlockControls;

// src/components/Block/Block.tsx
var Block = ({
  block,
  inLayout = false,
  className,
  DndDragHandle: DndDragHandle2
}) => {
  const { findBlockIndex, updateBlock } = useBlocksContext();
  const blockIndex = findBlockIndex(block.id);
  const plugins = usePlugins();
  const currentPlugin = plugins.find((plugin) => plugin.type.id === block.type.id);
  if (!currentPlugin) {
    return /* @__PURE__ */ React12.createElement("div", {
      style: {
        backgroundColor: "red",
        padding: "1rem",
        margin: "1rem 0"
      }
    }, /* @__PURE__ */ React12.createElement("div", null, "Unsupported Block"), /* @__PURE__ */ React12.createElement(BlockControls_default, {
      blockIndex,
      blockId: block.id,
      DndDragHandle: DndDragHandle2
    }));
  }
  const Component2 = currentPlugin.component;
  const Icon2 = currentPlugin.icon;
  return /* @__PURE__ */ React12.createElement("div", {
    className: `Block mb-4 py-4 md:py-8 rounded-md ${className} ${inLayout ? "bg-pearlLight shadow-md px-4 md:px-8" : ""}`
  }, /* @__PURE__ */ React12.createElement("div", {
    className: "flex justify-between mb-6"
  }, /* @__PURE__ */ React12.createElement("div", {
    className: "flex items-center gap-4"
  }, /* @__PURE__ */ React12.createElement(Icon2, null), /* @__PURE__ */ React12.createElement("div", {
    className: `${inLayout ? "font-bold" : "font-extrabold"} md:text-xl`
  }, currentPlugin.title.fr_FR), /* @__PURE__ */ React12.createElement(tippy_react_esm_default, {
    content: /* @__PURE__ */ React12.createElement("span", null, currentPlugin?.description?.fr_FR)
  }, /* @__PURE__ */ React12.createElement("i", {
    className: "fa fa-info-circle cursor-help"
  }))), /* @__PURE__ */ React12.createElement(BlockControls_default, {
    blockIndex,
    inLayout,
    blockId: block.id,
    DndDragHandle: DndDragHandle2
  })), /* @__PURE__ */ React12.createElement(Component2, {
    data: block.data,
    onUpdate: (data) => updateBlock(block.id, data)
  }));
};
var Block_default = Block;

// src/blocks/MultiColumns/assets/column.svg
import * as React13 from "react";
var SvgColumn = (props) => /* @__PURE__ */ React13.createElement("svg", {
  width: 27,
  height: 7,
  viewBox: "0 0 27 7",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React13.createElement("path", {
  d: "M24.0482 0.551392H3.58632C2.80345 0.551392 2.05265 0.862384 1.49908 1.41595C0.945514 1.96952 0.634521 2.72032 0.634521 3.50319C0.634521 4.28606 0.945514 5.03686 1.49908 5.59043C2.05265 6.144 2.80345 6.45499 3.58632 6.45499H24.0482C24.4359 6.45499 24.8197 6.37864 25.1778 6.2303C25.536 6.08195 25.8614 5.86453 26.1355 5.59043C26.4096 5.31633 26.627 4.99092 26.7753 4.63279C26.9237 4.27467 27 3.89083 27 3.50319C27 3.11555 26.9237 2.73171 26.7753 2.37359C26.627 2.01546 26.4096 1.69005 26.1355 1.41595C25.8614 1.14185 25.536 0.924426 25.1778 0.776084C24.8197 0.627742 24.4359 0.551392 24.0482 0.551392ZM3.58632 5.61878C3.02523 5.61878 2.48712 5.39589 2.09037 4.99914C1.69362 4.60239 1.47073 4.06428 1.47073 3.50319C1.47073 2.9421 1.69362 2.40399 2.09037 2.00724C2.48712 1.61049 3.02523 1.3876 3.58632 1.3876H9.14708V5.61878H3.58632ZM9.98328 5.61878V1.3876H17.6596V5.61878H9.98328ZM24.0482 5.61878H18.4958V1.3876H24.0482C24.6093 1.3876 25.1474 1.61049 25.5442 2.00724C25.9409 2.40399 26.1638 2.9421 26.1638 3.50319C26.1638 4.06428 25.9409 4.60239 25.5442 4.99914C25.1474 5.39589 24.6093 5.61878 24.0482 5.61878Z",
  fill: "#444444"
}));

// ../../node_modules/immer/dist/immer.esm.js
function n2(n3) {
  for (var r2 = arguments.length, t3 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++)
    t3[e2 - 1] = arguments[e2];
  if (true) {
    var i3 = Y[n3], o3 = i3 ? typeof i3 == "function" ? i3.apply(null, t3) : i3 : "unknown error nr: " + n3;
    throw Error("[Immer] " + o3);
  }
  throw Error("[Immer] minified error nr: " + n3 + (t3.length ? " " + t3.map(function(n4) {
    return "'" + n4 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n3) {
  return !!n3 && !!n3[Q];
}
function t2(n3) {
  return !!n3 && (function(n4) {
    if (!n4 || typeof n4 != "object")
      return false;
    var r2 = Object.getPrototypeOf(n4);
    if (r2 === null)
      return true;
    var t3 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
    return t3 === Object || typeof t3 == "function" && Function.toString.call(t3) === Z;
  }(n3) || Array.isArray(n3) || !!n3[L] || !!n3.constructor[L] || s2(n3) || v(n3));
}
function i2(n3, r2, t3) {
  t3 === void 0 && (t3 = false), o2(n3) === 0 ? (t3 ? Object.keys : nn)(n3).forEach(function(e2) {
    t3 && typeof e2 == "symbol" || r2(e2, n3[e2], n3);
  }) : n3.forEach(function(t4, e2) {
    return r2(e2, t4, n3);
  });
}
function o2(n3) {
  var r2 = n3[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n3) ? 1 : s2(n3) ? 2 : v(n3) ? 3 : 0;
}
function u2(n3, r2) {
  return o2(n3) === 2 ? n3.has(r2) : Object.prototype.hasOwnProperty.call(n3, r2);
}
function a2(n3, r2) {
  return o2(n3) === 2 ? n3.get(r2) : n3[r2];
}
function f2(n3, r2, t3) {
  var e2 = o2(n3);
  e2 === 2 ? n3.set(r2, t3) : e2 === 3 ? (n3.delete(r2), n3.add(t3)) : n3[r2] = t3;
}
function c2(n3, r2) {
  return n3 === r2 ? n3 !== 0 || 1 / n3 == 1 / r2 : n3 != n3 && r2 != r2;
}
function s2(n3) {
  return X && n3 instanceof Map;
}
function v(n3) {
  return q && n3 instanceof Set;
}
function p2(n3) {
  return n3.o || n3.t;
}
function l2(n3) {
  if (Array.isArray(n3))
    return Array.prototype.slice.call(n3);
  var r2 = rn(n3);
  delete r2[Q];
  for (var t3 = nn(r2), e2 = 0; e2 < t3.length; e2++) {
    var i3 = t3[e2], o3 = r2[i3];
    o3.writable === false && (o3.writable = true, o3.configurable = true), (o3.get || o3.set) && (r2[i3] = { configurable: true, writable: true, enumerable: o3.enumerable, value: n3[i3] });
  }
  return Object.create(Object.getPrototypeOf(n3), r2);
}
function d2(n3, e2) {
  return e2 === void 0 && (e2 = false), y(n3) || r(n3) || !t2(n3) ? n3 : (o2(n3) > 1 && (n3.set = n3.add = n3.clear = n3.delete = h2), Object.freeze(n3), e2 && i2(n3, function(n4, r2) {
    return d2(r2, true);
  }, true), n3);
}
function h2() {
  n2(2);
}
function y(n3) {
  return n3 == null || typeof n3 != "object" || Object.isFrozen(n3);
}
function b2(r2) {
  var t3 = tn[r2];
  return t3 || n2(18, r2), t3;
}
function _() {
  return U || n2(0), U;
}
function j2(n3, r2) {
  r2 && (b2("Patches"), n3.u = [], n3.s = [], n3.v = r2);
}
function O(n3) {
  g2(n3), n3.p.forEach(S), n3.p = null;
}
function g2(n3) {
  n3 === U && (U = n3.l);
}
function w(n3) {
  return U = { p: [], l: U, h: n3, m: true, _: 0 };
}
function S(n3) {
  var r2 = n3[Q];
  r2.i === 0 || r2.i === 1 ? r2.j() : r2.O = true;
}
function P(r2, e2) {
  e2._ = e2.p.length;
  var i3 = e2.p[0], o3 = r2 !== void 0 && r2 !== i3;
  return e2.h.g || b2("ES5").S(e2, r2, o3), o3 ? (i3[Q].P && (O(e2), n2(4)), t2(r2) && (r2 = M(e2, r2), e2.l || x(e2, r2)), e2.u && b2("Patches").M(i3[Q].t, r2, e2.u, e2.s)) : r2 = M(e2, i3, []), O(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H ? r2 : void 0;
}
function M(n3, r2, t3) {
  if (y(r2))
    return r2;
  var e2 = r2[Q];
  if (!e2)
    return i2(r2, function(i3, o4) {
      return A(n3, e2, r2, i3, o4, t3);
    }, true), r2;
  if (e2.A !== n3)
    return r2;
  if (!e2.P)
    return x(n3, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o3 = e2.i === 4 || e2.i === 5 ? e2.o = l2(e2.k) : e2.o;
    i2(e2.i === 3 ? new Set(o3) : o3, function(r3, i3) {
      return A(n3, e2, o3, r3, i3, t3);
    }), x(n3, o3, false), t3 && n3.u && b2("Patches").R(e2, t3, n3.u, n3.s);
  }
  return e2.o;
}
function A(e2, i3, o3, a3, c3, s3) {
  if (c3 === o3 && n2(5), r(c3)) {
    var v2 = M(e2, c3, s3 && i3 && i3.i !== 3 && !u2(i3.D, a3) ? s3.concat(a3) : void 0);
    if (f2(o3, a3, v2), !r(v2))
      return;
    e2.m = false;
  }
  if (t2(c3) && !y(c3)) {
    if (!e2.h.F && e2._ < 1)
      return;
    M(e2, c3), i3 && i3.A.l || x(e2, c3);
  }
}
function x(n3, r2, t3) {
  t3 === void 0 && (t3 = false), n3.h.F && n3.m && d2(r2, t3);
}
function z(n3, r2) {
  var t3 = n3[Q];
  return (t3 ? p2(t3) : n3)[r2];
}
function I(n3, r2) {
  if (r2 in n3)
    for (var t3 = Object.getPrototypeOf(n3); t3; ) {
      var e2 = Object.getOwnPropertyDescriptor(t3, r2);
      if (e2)
        return e2;
      t3 = Object.getPrototypeOf(t3);
    }
}
function k(n3) {
  n3.P || (n3.P = true, n3.l && k(n3.l));
}
function E(n3) {
  n3.o || (n3.o = l2(n3.t));
}
function R(n3, r2, t3) {
  var e2 = s2(r2) ? b2("MapSet").N(r2, t3) : v(r2) ? b2("MapSet").T(r2, t3) : n3.g ? function(n4, r3) {
    var t4 = Array.isArray(n4), e3 = { i: t4 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, D: {}, l: r3, t: n4, k: null, o: null, j: null, C: false }, i3 = e3, o3 = en;
    t4 && (i3 = [e3], o3 = on);
    var u3 = Proxy.revocable(i3, o3), a3 = u3.revoke, f3 = u3.proxy;
    return e3.k = f3, e3.j = a3, f3;
  }(r2, t3) : b2("ES5").J(r2, t3);
  return (t3 ? t3.A : _()).p.push(e2), e2;
}
function D(e2) {
  return r(e2) || n2(22, e2), function n3(r2) {
    if (!t2(r2))
      return r2;
    var e3, u3 = r2[Q], c3 = o2(r2);
    if (u3) {
      if (!u3.P && (u3.i < 4 || !b2("ES5").K(u3)))
        return u3.t;
      u3.I = true, e3 = F(r2, c3), u3.I = false;
    } else
      e3 = F(r2, c3);
    return i2(e3, function(r3, t3) {
      u3 && a2(u3.t, r3) === t3 || f2(e3, r3, n3(t3));
    }), c3 === 3 ? new Set(e3) : e3;
  }(e2);
}
function F(n3, r2) {
  switch (r2) {
    case 2:
      return new Map(n3);
    case 3:
      return Array.from(n3);
  }
  return l2(n3);
}
var G;
var U;
var W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
var X = typeof Map != "undefined";
var q = typeof Set != "undefined";
var B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined";
var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
var Q = W ? Symbol.for("immer-state") : "__$immer_state";
var V = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator";
var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n3) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n3;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n3) {
  return "Cannot apply patch, path doesn't resolve: " + n3;
}, 16: 'Sets cannot have "replace" patches.', 17: function(n3) {
  return "Unsupported patch operation: " + n3;
}, 18: function(n3) {
  return "The plugin for '" + n3 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n3 + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n3) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n3 + "'";
}, 22: function(n3) {
  return "'current' expects a draft, got: " + n3;
}, 23: function(n3) {
  return "'original' expects a draft, got: " + n3;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
var Z = "" + Object.prototype.constructor;
var nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n3) {
  return Object.getOwnPropertyNames(n3).concat(Object.getOwnPropertySymbols(n3));
} : Object.getOwnPropertyNames;
var rn = Object.getOwnPropertyDescriptors || function(n3) {
  var r2 = {};
  return nn(n3).forEach(function(t3) {
    r2[t3] = Object.getOwnPropertyDescriptor(n3, t3);
  }), r2;
};
var tn = {};
var en = { get: function(n3, r2) {
  if (r2 === Q)
    return n3;
  var e2 = p2(n3);
  if (!u2(e2, r2))
    return function(n4, r3, t3) {
      var e3, i4 = I(r3, t3);
      return i4 ? "value" in i4 ? i4.value : (e3 = i4.get) === null || e3 === void 0 ? void 0 : e3.call(n4.k) : void 0;
    }(n3, e2, r2);
  var i3 = e2[r2];
  return n3.I || !t2(i3) ? i3 : i3 === z(n3.t, r2) ? (E(n3), n3.o[r2] = R(n3.A.h, i3, n3)) : i3;
}, has: function(n3, r2) {
  return r2 in p2(n3);
}, ownKeys: function(n3) {
  return Reflect.ownKeys(p2(n3));
}, set: function(n3, r2, t3) {
  var e2 = I(p2(n3), r2);
  if (e2 == null ? void 0 : e2.set)
    return e2.set.call(n3.k, t3), true;
  if (!n3.P) {
    var i3 = z(p2(n3), r2), o3 = i3 == null ? void 0 : i3[Q];
    if (o3 && o3.t === t3)
      return n3.o[r2] = t3, n3.D[r2] = false, true;
    if (c2(t3, i3) && (t3 !== void 0 || u2(n3.t, r2)))
      return true;
    E(n3), k(n3);
  }
  return n3.o[r2] === t3 && typeof t3 != "number" && (t3 !== void 0 || r2 in n3.o) || (n3.o[r2] = t3, n3.D[r2] = true, true);
}, deleteProperty: function(n3, r2) {
  return z(n3.t, r2) !== void 0 || r2 in n3.t ? (n3.D[r2] = false, E(n3), k(n3)) : delete n3.D[r2], n3.o && delete n3.o[r2], true;
}, getOwnPropertyDescriptor: function(n3, r2) {
  var t3 = p2(n3), e2 = Reflect.getOwnPropertyDescriptor(t3, r2);
  return e2 ? { writable: true, configurable: n3.i !== 1 || r2 !== "length", enumerable: e2.enumerable, value: t3[r2] } : e2;
}, defineProperty: function() {
  n2(11);
}, getPrototypeOf: function(n3) {
  return Object.getPrototypeOf(n3.t);
}, setPrototypeOf: function() {
  n2(12);
} };
var on = {};
i2(en, function(n3, r2) {
  on[n3] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t3) {
  return isNaN(parseInt(t3)) && n2(13), on.set.call(this, r2, t3, void 0);
}, on.set = function(r2, t3, e2) {
  return t3 !== "length" && isNaN(parseInt(t3)) && n2(14), en.set.call(this, r2[0], t3, e2, r2[0]);
};
var un = function() {
  function e2(r2) {
    var e3 = this;
    this.g = B, this.F = true, this.produce = function(r3, i4, o3) {
      if (typeof r3 == "function" && typeof i4 != "function") {
        var u3 = i4;
        i4 = r3;
        var a3 = e3;
        return function(n3) {
          var r4 = this;
          n3 === void 0 && (n3 = u3);
          for (var t3 = arguments.length, e4 = Array(t3 > 1 ? t3 - 1 : 0), o4 = 1; o4 < t3; o4++)
            e4[o4 - 1] = arguments[o4];
          return a3.produce(n3, function(n4) {
            var t4;
            return (t4 = i4).call.apply(t4, [r4, n4].concat(e4));
          });
        };
      }
      var f3;
      if (typeof i4 != "function" && n2(6), o3 !== void 0 && typeof o3 != "function" && n2(7), t2(r3)) {
        var c3 = w(e3), s3 = R(e3, r3, void 0), v2 = true;
        try {
          f3 = i4(s3), v2 = false;
        } finally {
          v2 ? O(c3) : g2(c3);
        }
        return typeof Promise != "undefined" && f3 instanceof Promise ? f3.then(function(n3) {
          return j2(c3, o3), P(n3, c3);
        }, function(n3) {
          throw O(c3), n3;
        }) : (j2(c3, o3), P(f3, c3));
      }
      if (!r3 || typeof r3 != "object") {
        if ((f3 = i4(r3)) === void 0 && (f3 = r3), f3 === H && (f3 = void 0), e3.F && d2(f3, true), o3) {
          var p3 = [], l3 = [];
          b2("Patches").M(r3, f3, p3, l3), o3(p3, l3);
        }
        return f3;
      }
      n2(21, r3);
    }, this.produceWithPatches = function(n3, r3) {
      if (typeof n3 == "function")
        return function(r4) {
          for (var t4 = arguments.length, i5 = Array(t4 > 1 ? t4 - 1 : 0), o4 = 1; o4 < t4; o4++)
            i5[o4 - 1] = arguments[o4];
          return e3.produceWithPatches(r4, function(r5) {
            return n3.apply(void 0, [r5].concat(i5));
          });
        };
      var t3, i4, o3 = e3.produce(n3, r3, function(n4, r4) {
        t3 = n4, i4 = r4;
      });
      return typeof Promise != "undefined" && o3 instanceof Promise ? o3.then(function(n4) {
        return [n4, t3, i4];
      }) : [o3, t3, i4];
    }, typeof (r2 == null ? void 0 : r2.useProxies) == "boolean" && this.setUseProxies(r2.useProxies), typeof (r2 == null ? void 0 : r2.autoFreeze) == "boolean" && this.setAutoFreeze(r2.autoFreeze);
  }
  var i3 = e2.prototype;
  return i3.createDraft = function(e3) {
    t2(e3) || n2(8), r(e3) && (e3 = D(e3));
    var i4 = w(this), o3 = R(this, e3, void 0);
    return o3[Q].C = true, g2(i4), o3;
  }, i3.finishDraft = function(r2, t3) {
    var e3 = r2 && r2[Q];
    e3 && e3.C || n2(9), e3.I && n2(10);
    var i4 = e3.A;
    return j2(i4, t3), P(void 0, i4);
  }, i3.setAutoFreeze = function(n3) {
    this.F = n3;
  }, i3.setUseProxies = function(r2) {
    r2 && !B && n2(20), this.g = r2;
  }, i3.applyPatches = function(n3, t3) {
    var e3;
    for (e3 = t3.length - 1; e3 >= 0; e3--) {
      var i4 = t3[e3];
      if (i4.path.length === 0 && i4.op === "replace") {
        n3 = i4.value;
        break;
      }
    }
    e3 > -1 && (t3 = t3.slice(e3 + 1));
    var o3 = b2("Patches").$;
    return r(n3) ? o3(n3, t3) : this.produce(n3, function(n4) {
      return o3(n4, t3);
    });
  }, e2;
}();
var an = new un();
var fn3 = an.produce;
var cn = an.produceWithPatches.bind(an);
var sn = an.setAutoFreeze.bind(an);
var vn = an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
var ln = an.createDraft.bind(an);
var dn = an.finishDraft.bind(an);
var immer_esm_default = fn3;

// src/hooks/useDragAndDrop.tsx
import * as React18 from "react";

// ../../node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js
import React17, { useLayoutEffect as useLayoutEffect3, useEffect as useEffect10, useRef as useRef5, useState as useState9, useContext as useContext8 } from "react";

// ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// ../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    i3 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

// ../../node_modules/redux/es/redux.js
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject2(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  var type = typeof val;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function": {
      return type;
    }
  }
  if (Array.isArray(val))
    return "array";
  if (isDate(val))
    return "date";
  if (isError(val))
    return "error";
  var constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
  var typeOfVal = typeof val;
  if (true) {
    typeOfVal = miniKindOf(val);
  }
  return typeOfVal;
}
function createStore(reducer5, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(false ? formatProdErrorMessage(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(false ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }
    return enhancer(createStore)(reducer5, preloadedState);
  }
  if (typeof reducer5 !== "function") {
    throw new Error(false ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer5) + "'");
  }
  var currentReducer = reducer5;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(false ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index2 = nextListeners.indexOf(listener);
      nextListeners.splice(index2, 1);
      currentListeners = null;
    };
  }
  function dispatch3(action) {
    if (!isPlainObject2(action)) {
      throw new Error(false ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }
    if (typeof action.type === "undefined") {
      throw new Error(false ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(9) : "Reducers may not dispatch actions.");
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners2 = currentListeners = nextListeners;
    for (var i3 = 0; i3 < listeners2.length; i3++) {
      var listener = listeners2[i3];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(false ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }
    currentReducer = nextReducer;
    dispatch3({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(false ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch3({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch3,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e2) {
  }
}
function bindActionCreator(actionCreator, dispatch3) {
  return function() {
    return dispatch3(actionCreator.apply(this, arguments));
  };
}
function bindActionCreators(actionCreators, dispatch3) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch3);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error(false ? formatProdErrorMessage(16) : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  }
  var boundActionCreators = {};
  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch3);
    }
  }
  return boundActionCreators;
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a3, b3) {
    return function() {
      return a3(b3.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore3) {
    return function() {
      var store = createStore3.apply(void 0, arguments);
      var _dispatch = function dispatch3() {
        throw new Error(false ? formatProdErrorMessage(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      };
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch3() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}
function isCrushed() {
}
if (typeof isCrushed.name === "string" && isCrushed.name !== "isCrushed") {
  warning('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');
}

// ../../node_modules/react-redux/es/components/Provider.js
var import_prop_types = __toESM(require_prop_types());
import React15, { useMemo as useMemo3 } from "react";

// ../../node_modules/react-redux/es/components/Context.js
import React14 from "react";
var ReactReduxContext = /* @__PURE__ */ React14.createContext(null);
if (true) {
  ReactReduxContext.displayName = "ReactRedux";
}

// ../../node_modules/react-redux/es/utils/batch.js
function defaultNoopBatch(callback) {
  callback();
}
var batch = defaultNoopBatch;
var setBatch = function setBatch2(newBatch) {
  return batch = newBatch;
};
var getBatch = function getBatch2() {
  return batch;
};

// ../../node_modules/react-redux/es/utils/Subscription.js
function createListenerCollection() {
  var batch2 = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify2() {
      batch2(function() {
        var listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get2() {
      var listeners2 = [];
      var listener = first;
      while (listener) {
        listeners2.push(listener);
        listener = listener.next;
      }
      return listeners2;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
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
var nullListeners = {
  notify: function notify() {
  },
  get: function get() {
    return [];
  }
};
function createSubscription(store, parentSub) {
  var unsubscribe;
  var listeners2 = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners2.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners2.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners2 = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners2.clear();
      listeners2 = nullListeners;
    }
  }
  var subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners2;
    }
  };
  return subscription;
}

// ../../node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
import { useEffect as useEffect8, useLayoutEffect as useLayoutEffect2 } from "react";
var useIsomorphicLayoutEffect2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? useLayoutEffect2 : useEffect8;

// ../../node_modules/react-redux/es/components/Provider.js
function Provider(_ref) {
  var store = _ref.store, context = _ref.context, children = _ref.children;
  var contextValue = useMemo3(function() {
    var subscription = createSubscription(store);
    return {
      store,
      subscription
    };
  }, [store]);
  var previousState = useMemo3(function() {
    return store.getState();
  }, [store]);
  useIsomorphicLayoutEffect2(function() {
    var subscription = contextValue.subscription;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return function() {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return /* @__PURE__ */ React15.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
if (true) {
  Provider.propTypes = {
    store: import_prop_types.default.shape({
      subscribe: import_prop_types.default.func.isRequired,
      dispatch: import_prop_types.default.func.isRequired,
      getState: import_prop_types.default.func.isRequired
    }),
    context: import_prop_types.default.object,
    children: import_prop_types.default.any
  };
}
var Provider_default = Provider;

// ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++) {
    key = sourceKeys[i3];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// ../../node_modules/react-redux/es/components/connectAdvanced.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var import_react_is = __toESM(require_react_is3());
import React16, { useContext as useContext4, useMemo as useMemo4, useRef as useRef2, useReducer } from "react";
var _excluded = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"];
var _excluded2 = ["reactReduxForwardedRef"];
var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];
var stringifyComponent = function stringifyComponent2(Comp) {
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
  useIsomorphicLayoutEffect2(function() {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false;
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  if (!shouldHandleStateChanges)
    return;
  var didUnsubscribe = false;
  var lastThrownError = null;
  var checkForUpdates = function checkForUpdates2() {
    if (didUnsubscribe) {
      return;
    }
    var latestStoreState = store.getState();
    var newChildProps, error2;
    try {
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e2) {
      error2 = e2;
      lastThrownError = e2;
    }
    if (!error2) {
      lastThrownError = null;
    }
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true;
      forceComponentUpdateDispatch({
        type: "STORE_UPDATED",
        payload: {
          error: error2
        }
      });
    }
  };
  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe();
  checkForUpdates();
  var unsubscribeWrapper = function unsubscribeWrapper2() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;
    if (lastThrownError) {
      throw lastThrownError;
    }
  };
  return unsubscribeWrapper;
}
var initStateUpdates = function initStateUpdates2() {
  return [null, 0];
};
function connectAdvanced(selectorFactory, _ref) {
  if (_ref === void 0) {
    _ref = {};
  }
  var _ref2 = _ref, _ref2$getDisplayName = _ref2.getDisplayName, getDisplayName = _ref2$getDisplayName === void 0 ? function(name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName, _ref2$methodName = _ref2.methodName, methodName = _ref2$methodName === void 0 ? "connectAdvanced" : _ref2$methodName, _ref2$renderCountProp = _ref2.renderCountProp, renderCountProp = _ref2$renderCountProp === void 0 ? void 0 : _ref2$renderCountProp, _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges, shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta, _ref2$storeKey = _ref2.storeKey, storeKey = _ref2$storeKey === void 0 ? "store" : _ref2$storeKey, _ref2$withRef = _ref2.withRef, withRef = _ref2$withRef === void 0 ? false : _ref2$withRef, _ref2$forwardRef = _ref2.forwardRef, forwardRef3 = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef, _ref2$context = _ref2.context, context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context, connectOptions = _objectWithoutPropertiesLoose2(_ref2, _excluded);
  if (true) {
    if (renderCountProp !== void 0) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }
    if (withRef) {
      throw new Error("withRef is removed. To access the wrapped instance, use a ref on the connected component");
    }
    var customStoreWarningMessage = "To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";
    if (storeKey !== "store") {
      throw new Error("storeKey has been removed and does not do anything. " + customStoreWarningMessage);
    }
  }
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (!(0, import_react_is.isValidElementType)(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    var displayName = getDisplayName(wrappedComponentName);
    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName,
      methodName,
      renderCountProp,
      shouldHandleStateChanges,
      storeKey,
      displayName,
      wrappedComponentName,
      WrappedComponent
    });
    var pure = connectOptions.pure;
    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    }
    var usePureOnlyMemo = pure ? useMemo4 : function(callback) {
      return callback();
    };
    function ConnectFunction(props) {
      var _useMemo = useMemo4(function() {
        var reactReduxForwardedRef2 = props.reactReduxForwardedRef, wrapperProps2 = _objectWithoutPropertiesLoose2(props, _excluded2);
        return [props.context, reactReduxForwardedRef2, wrapperProps2];
      }, [props]), propsContext = _useMemo[0], reactReduxForwardedRef = _useMemo[1], wrapperProps = _useMemo[2];
      var ContextToUse = useMemo4(function() {
        return propsContext && propsContext.Consumer && (0, import_react_is.isContextConsumer)(/* @__PURE__ */ React16.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]);
      var contextValue = useContext4(ContextToUse);
      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      if (!didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error('Could not find "store" in the context of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      }
      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = useMemo4(function() {
        return createChildSelector(store);
      }, [store]);
      var _useMemo2 = useMemo4(function() {
        if (!shouldHandleStateChanges)
          return NO_SUBSCRIPTION_ARRAY;
        var subscription2 = createSubscription(store, didStoreComeFromProps ? null : contextValue.subscription);
        var notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
        return [subscription2, notifyNestedSubs2];
      }, [store, didStoreComeFromProps, contextValue]), subscription = _useMemo2[0], notifyNestedSubs = _useMemo2[1];
      var overriddenContextValue = useMemo4(function() {
        if (didStoreComeFromProps) {
          return contextValue;
        }
        return _extends({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]);
      var _useReducer = useReducer(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates), _useReducer$ = _useReducer[0], previousStateUpdateResult = _useReducer$[0], forceComponentUpdateDispatch = _useReducer[1];
      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      }
      var lastChildProps = useRef2();
      var lastWrapperProps = useRef2(wrapperProps);
      var childPropsFromStoreUpdate = useRef2();
      var renderIsScheduled = useRef2(false);
      var actualChildProps = usePureOnlyMemo(function() {
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        }
        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]);
      var renderedWrappedComponent = useMemo4(function() {
        return /* @__PURE__ */ React16.createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]);
      var renderedChild = useMemo4(function() {
        if (shouldHandleStateChanges) {
          return /* @__PURE__ */ React16.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }
        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }
    var Connect = pure ? React16.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;
    if (forwardRef3) {
      var forwarded = React16.forwardRef(function forwardConnectRef(props, ref2) {
        return /* @__PURE__ */ React16.createElement(Connect, _extends({}, props, {
          reactReduxForwardedRef: ref2
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return (0, import_hoist_non_react_statics.default)(forwarded, WrappedComponent);
    }
    return (0, import_hoist_non_react_statics.default)(Connect, WrappedComponent);
  };
}

// ../../node_modules/react-redux/es/utils/shallowEqual.js
function is(x2, y2) {
  if (x2 === y2) {
    return x2 !== 0 || y2 !== 0 || 1 / x2 === 1 / y2;
  } else {
    return x2 !== x2 && y2 !== y2;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB))
    return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return false;
  for (var i3 = 0; i3 < keysA.length; i3++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i3]) || !is(objA[keysA[i3]], objB[keysA[i3]])) {
      return false;
    }
  }
  return true;
}

// ../../node_modules/react-redux/es/utils/bindActionCreators.js
function bindActionCreators2(actionCreators, dispatch3) {
  var boundActionCreators = {};
  var _loop = function _loop2(key2) {
    var actionCreator = actionCreators[key2];
    if (typeof actionCreator === "function") {
      boundActionCreators[key2] = function() {
        return dispatch3(actionCreator.apply(void 0, arguments));
      };
    }
  };
  for (var key in actionCreators) {
    _loop(key);
  }
  return boundActionCreators;
}

// ../../node_modules/react-redux/es/utils/isPlainObject.js
function isPlainObject3(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null)
    return true;
  var baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}

// ../../node_modules/react-redux/es/utils/warning.js
function warning2(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e2) {
  }
}

// ../../node_modules/react-redux/es/utils/verifyPlainObject.js
function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject3(value)) {
    warning2(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

// ../../node_modules/react-redux/es/connect/wrapMapToProps.js
function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch3, options) {
    var constant = getConstant(dispatch3, options);
    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== void 0 ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch3, _ref) {
    var displayName = _ref.displayName;
    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);
      if (typeof props === "function") {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }
      if (true)
        verifyPlainObject(props, displayName, methodName);
      return props;
    };
    return proxy;
  };
}

// ../../node_modules/react-redux/es/connect/mapDispatchToProps.js
function whenMapDispatchToPropsIsFunction(mapDispatchToProps2) {
  return typeof mapDispatchToProps2 === "function" ? wrapMapToPropsFunc(mapDispatchToProps2, "mapDispatchToProps") : void 0;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps2) {
  return !mapDispatchToProps2 ? wrapMapToPropsConstant(function(dispatch3) {
    return {
      dispatch: dispatch3
    };
  }) : void 0;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps2) {
  return mapDispatchToProps2 && typeof mapDispatchToProps2 === "object" ? wrapMapToPropsConstant(function(dispatch3) {
    return bindActionCreators2(mapDispatchToProps2, dispatch3);
  }) : void 0;
}
var mapDispatchToProps_default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

// ../../node_modules/react-redux/es/connect/mapStateToProps.js
function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === "function" ? wrapMapToPropsFunc(mapStateToProps, "mapStateToProps") : void 0;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function() {
    return {};
  }) : void 0;
}
var mapStateToProps_default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

// ../../node_modules/react-redux/es/connect/mergeProps.js
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch3, _ref) {
    var displayName = _ref.displayName, pure = _ref.pure, areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps))
          mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true)
          verifyPlainObject(mergedProps, displayName, "mergeProps");
      }
      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : void 0;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function() {
    return defaultMergeProps;
  } : void 0;
}
var mergeProps_default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

// ../../node_modules/react-redux/es/connect/verifySubselectors.js
function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === "mapStateToProps" || methodName === "mapDispatchToProps") {
    if (!Object.prototype.hasOwnProperty.call(selector, "dependsOnOwnProps")) {
      warning2("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}
function verifySubselectors(mapStateToProps, mapDispatchToProps2, mergeProps, displayName) {
  verify(mapStateToProps, "mapStateToProps", displayName);
  verify(mapDispatchToProps2, "mapDispatchToProps", displayName);
  verify(mergeProps, "mergeProps", displayName);
}

// ../../node_modules/react-redux/es/connect/selectorFactory.js
var _excluded3 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch3) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps2(dispatch3, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch3, _ref) {
  var areStatesEqual = _ref.areStatesEqual, areOwnPropsEqual = _ref.areOwnPropsEqual, areStatePropsEqual = _ref.areStatePropsEqual;
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
    dispatchProps = mapDispatchToProps2(dispatch3, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps2.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps2(dispatch3, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps)
      stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps2.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps2(dispatch3, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged)
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged)
      return handleNewPropsAndNewState();
    if (propsChanged)
      return handleNewProps();
    if (stateChanged)
      return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch3, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps, initMapDispatchToProps = _ref2.initMapDispatchToProps, initMergeProps = _ref2.initMergeProps, options = _objectWithoutPropertiesLoose2(_ref2, _excluded3);
  var mapStateToProps = initMapStateToProps(dispatch3, options);
  var mapDispatchToProps2 = initMapDispatchToProps(dispatch3, options);
  var mergeProps = initMergeProps(dispatch3, options);
  if (true) {
    verifySubselectors(mapStateToProps, mapDispatchToProps2, mergeProps, options.displayName);
  }
  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch3, options);
}

// ../../node_modules/react-redux/es/connect/connect.js
var _excluded4 = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
function match(arg, factories, name) {
  for (var i3 = factories.length - 1; i3 >= 0; i3--) {
    var result = factories[i3](arg);
    if (result)
      return result;
  }
  return function(dispatch3, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}
function strictEqual(a3, b3) {
  return a3 === b3;
}
function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$connectHOC = _ref.connectHOC, connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC, _ref$mapStateToPropsF = _ref.mapStateToPropsFactories, mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? mapStateToProps_default : _ref$mapStateToPropsF, _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories, mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? mapDispatchToProps_default : _ref$mapDispatchToPro, _ref$mergePropsFactor = _ref.mergePropsFactories, mergePropsFactories = _ref$mergePropsFactor === void 0 ? mergeProps_default : _ref$mergePropsFactor, _ref$selectorFactory = _ref.selectorFactory, selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;
  return function connect(mapStateToProps, mapDispatchToProps2, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }
    var _ref3 = _ref2, _ref3$pure = _ref3.pure, pure = _ref3$pure === void 0 ? true : _ref3$pure, _ref3$areStatesEqual = _ref3.areStatesEqual, areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual, _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual, areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua, _ref3$areStatePropsEq = _ref3.areStatePropsEqual, areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq, _ref3$areMergedPropsE = _ref3.areMergedPropsEqual, areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE, extraOptions = _objectWithoutPropertiesLoose2(_ref3, _excluded4);
    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, "mapStateToProps");
    var initMapDispatchToProps = match(mapDispatchToProps2, mapDispatchToPropsFactories, "mapDispatchToProps");
    var initMergeProps = match(mergeProps, mergePropsFactories, "mergeProps");
    return connectHOC(selectorFactory, _extends({
      methodName: "connect",
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      shouldHandleStateChanges: Boolean(mapStateToProps),
      initMapStateToProps,
      initMapDispatchToProps,
      initMergeProps,
      pure,
      areStatesEqual,
      areOwnPropsEqual,
      areStatePropsEqual,
      areMergedPropsEqual
    }, extraOptions));
  };
}
var connect_default = /* @__PURE__ */ createConnect();

// ../../node_modules/react-redux/es/hooks/useStore.js
import { useContext as useContext6 } from "react";

// ../../node_modules/react-redux/es/hooks/useReduxContext.js
import { useContext as useContext5 } from "react";

// ../../node_modules/react-redux/es/hooks/useSelector.js
import { useReducer as useReducer2, useRef as useRef3, useMemo as useMemo5, useContext as useContext7, useDebugValue } from "react";

// ../../node_modules/react-redux/es/utils/reactBatchedUpdates.js
var import_react_dom3 = __toESM(require_react_dom());

// ../../node_modules/react-redux/es/index.js
setBatch(import_react_dom3.unstable_batchedUpdates);

// ../../node_modules/use-memo-one/dist/use-memo-one.esm.js
import { useState as useState8, useRef as useRef4, useEffect as useEffect9 } from "react";
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i3 = 0; i3 < newInputs.length; i3++) {
    if (newInputs[i3] !== lastInputs[i3]) {
      return false;
    }
  }
  return true;
}
function useMemoOne(getResult, inputs) {
  var initial = useState8(function() {
    return {
      inputs,
      result: getResult()
    };
  })[0];
  var isFirstRun = useRef4(true);
  var committed = useRef4(initial);
  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  var cache = useCache ? committed.current : {
    inputs,
    result: getResult()
  };
  useEffect9(function() {
    isFirstRun.current = false;
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function() {
    return callback;
  }, inputs);
}
var useMemo6 = useMemoOne;
var useCallback2 = useCallbackOne;

// ../../node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var isProduction = false;
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? prefix + ": " + provided : prefix;
  throw new Error(value);
}

// ../../node_modules/css-box-model/dist/css-box-model.esm.js
var getRect = function getRect2(_ref) {
  var top2 = _ref.top, right2 = _ref.right, bottom2 = _ref.bottom, left2 = _ref.left;
  var width = right2 - left2;
  var height = bottom2 - top2;
  var rect = {
    top: top2,
    right: right2,
    bottom: bottom2,
    left: left2,
    width,
    height,
    x: left2,
    y: top2,
    center: {
      x: (right2 + left2) / 2,
      y: (bottom2 + top2) / 2
    }
  };
  return rect;
};
var expand = function expand2(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink2(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};
var shift = function shift2(target, shiftBy) {
  return {
    top: target.top + shiftBy.y,
    left: target.left + shiftBy.x,
    bottom: target.bottom + shiftBy.y,
    right: target.right + shiftBy.x
  };
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox2(_ref2) {
  var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox,
    borderBox: getRect(borderBox),
    paddingBox,
    contentBox,
    margin,
    border,
    padding
  };
};
var parse = function parse2(raw) {
  var value = raw.slice(0, -2);
  var suffix2 = raw.slice(-2);
  if (suffix2 !== "px") {
    return 0;
  }
  var result = Number(value);
  !!isNaN(result) ? true ? invariant(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : invariant(false) : void 0;
  return result;
};
var getWindowScroll2 = function getWindowScroll3() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
var offset2 = function offset3(original, change) {
  var borderBox = original.borderBox, border = original.border, margin = original.margin, padding = original.padding;
  var shifted = shift(borderBox, change);
  return createBox({
    borderBox: shifted,
    border,
    margin,
    padding
  });
};
var withScroll = function withScroll2(original, scroll3) {
  if (scroll3 === void 0) {
    scroll3 = getWindowScroll2();
  }
  return offset2(original, scroll3);
};
var calculateBox = function calculateBox2(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };
  return createBox({
    borderBox,
    margin,
    padding,
    border
  });
};
var getBox = function getBox2(el) {
  var borderBox = el.getBoundingClientRect();
  var styles = window.getComputedStyle(el);
  return calculateBox(borderBox, styles);
};

// ../../node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual2(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i3 = 0; i3 < newInputs.length; i3++) {
    if (!isEqual(newInputs[i3], lastInputs[i3])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual5) {
  if (isEqual5 === void 0) {
    isEqual5 = areInputsEqual2;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual5(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var memoize_one_esm_default = memoizeOne;

// ../../node_modules/raf-schd/dist/raf-schd.esm.js
var rafSchd = function rafSchd2(fn4) {
  var lastArgs = [];
  var frameId = null;
  var wrapperFn = function wrapperFn2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    lastArgs = args;
    if (frameId) {
      return;
    }
    frameId = requestAnimationFrame(function() {
      frameId = null;
      fn4.apply(void 0, lastArgs);
    });
  };
  wrapperFn.cancel = function() {
    if (!frameId) {
      return;
    }
    cancelAnimationFrame(frameId);
    frameId = null;
  };
  return wrapperFn;
};
var raf_schd_esm_default = rafSchd;

// ../../node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js
var import_react_dom4 = __toESM(require_react_dom());
var isProduction2 = false;
var spacesAndTabs = /[ \t]{2,}/g;
var lineStartWithSpaces = /^[ \t]*/gm;
var clean2 = function clean3(value) {
  return value.replace(spacesAndTabs, " ").replace(lineStartWithSpaces, "").trim();
};
var getDevMessage2 = function getDevMessage3(message) {
  return clean2("\n  %creact-beautiful-dnd\n\n  %c" + clean2(message) + "\n\n  %c\u{1F477}\u200D This is a development only message. It will be removed in production builds.\n");
};
var getFormattedMessage2 = function getFormattedMessage3(message) {
  return [getDevMessage2(message), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"];
};
var isDisabledFlag = "__react-beautiful-dnd-disable-dev-warnings";
function log(type, message) {
  var _console;
  if (isProduction2) {
    return;
  }
  if (typeof window !== "undefined" && window[isDisabledFlag]) {
    return;
  }
  (_console = console)[type].apply(_console, getFormattedMessage2(message));
}
var warning3 = log.bind(null, "warn");
var error = log.bind(null, "error");
function noop2() {
}
function getOptions(shared2, fromBinding) {
  return _extends({}, shared2, {}, fromBinding);
}
function bindEvents(el, bindings, sharedOptions) {
  var unbindings = bindings.map(function(binding) {
    var options = getOptions(sharedOptions, binding.options);
    el.addEventListener(binding.eventName, binding.fn, options);
    return function unbind() {
      el.removeEventListener(binding.eventName, binding.fn, options);
    };
  });
  return function unbindAll() {
    unbindings.forEach(function(unbind) {
      unbind();
    });
  };
}
var isProduction$1 = false;
var prefix2 = "Invariant failed";
function RbdInvariant(message) {
  this.message = message;
}
RbdInvariant.prototype.toString = function toString() {
  return this.message;
};
function invariant2(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction$1) {
    throw new RbdInvariant(prefix2);
  } else {
    throw new RbdInvariant(prefix2 + ": " + (message || ""));
  }
}
var ErrorBoundary = function(_React$Component) {
  _inheritsLoose(ErrorBoundary3, _React$Component);
  function ErrorBoundary3() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.callbacks = null;
    _this.unbind = noop2;
    _this.onWindowError = function(event) {
      var callbacks = _this.getCallbacks();
      if (callbacks.isDragging()) {
        callbacks.tryAbort();
        true ? warning3("\n        An error was caught by our window 'error' event listener while a drag was occurring.\n        The active drag has been aborted.\n      ") : void 0;
      }
      var err = event.error;
      if (err instanceof RbdInvariant) {
        event.preventDefault();
        if (true) {
          error(err.message);
        }
      }
    };
    _this.getCallbacks = function() {
      if (!_this.callbacks) {
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      }
      return _this.callbacks;
    };
    _this.setCallbacks = function(callbacks) {
      _this.callbacks = callbacks;
    };
    return _this;
  }
  var _proto = ErrorBoundary3.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.unbind = bindEvents(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  };
  _proto.componentDidCatch = function componentDidCatch(err) {
    if (err instanceof RbdInvariant) {
      if (true) {
        error(err.message);
      }
      this.setState({});
      return;
    }
    throw err;
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unbind();
  };
  _proto.render = function render2() {
    return this.props.children(this.setCallbacks);
  };
  return ErrorBoundary3;
}(React17.Component);
var dragHandleUsageInstructions = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n";
var position = function position2(index2) {
  return index2 + 1;
};
var onDragStart = function onDragStart2(start4) {
  return "\n  You have lifted an item in position " + position(start4.source.index) + "\n";
};
var withLocation = function withLocation2(source, destination) {
  var isInHomeList = source.droppableId === destination.droppableId;
  var startPosition = position(source.index);
  var endPosition = position(destination.index);
  if (isInHomeList) {
    return "\n      You have moved the item from position " + startPosition + "\n      to position " + endPosition + "\n    ";
  }
  return "\n    You have moved the item from position " + startPosition + "\n    in list " + source.droppableId + "\n    to list " + destination.droppableId + "\n    in position " + endPosition + "\n  ";
};
var withCombine = function withCombine2(id, source, combine2) {
  var inHomeList = source.droppableId === combine2.droppableId;
  if (inHomeList) {
    return "\n      The item " + id + "\n      has been combined with " + combine2.draggableId;
  }
  return "\n      The item " + id + "\n      in list " + source.droppableId + "\n      has been combined with " + combine2.draggableId + "\n      in list " + combine2.droppableId + "\n    ";
};
var onDragUpdate = function onDragUpdate2(update2) {
  var location = update2.destination;
  if (location) {
    return withLocation(update2.source, location);
  }
  var combine2 = update2.combine;
  if (combine2) {
    return withCombine(update2.draggableId, update2.source, combine2);
  }
  return "You are over an area that cannot be dropped on";
};
var returnedToStart = function returnedToStart2(source) {
  return "\n  The item has returned to its starting position\n  of " + position(source.index) + "\n";
};
var onDragEnd = function onDragEnd2(result) {
  if (result.reason === "CANCEL") {
    return "\n      Movement cancelled.\n      " + returnedToStart(result.source) + "\n    ";
  }
  var location = result.destination;
  var combine2 = result.combine;
  if (location) {
    return "\n      You have dropped the item.\n      " + withLocation(result.source, location) + "\n    ";
  }
  if (combine2) {
    return "\n      You have dropped the item.\n      " + withCombine(result.draggableId, result.source, combine2) + "\n    ";
  }
  return "\n    The item has been dropped while not over a drop area.\n    " + returnedToStart(result.source) + "\n  ";
};
var preset = {
  dragHandleUsageInstructions,
  onDragStart,
  onDragUpdate,
  onDragEnd
};
var origin = {
  x: 0,
  y: 0
};
var add = function add2(point1, point2) {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
};
var subtract = function subtract2(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
};
var isEqual2 = function isEqual3(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
var negate = function negate2(point) {
  return {
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  };
};
var patch = function patch2(line, value, otherValue) {
  var _ref;
  if (otherValue === void 0) {
    otherValue = 0;
  }
  return _ref = {}, _ref[line] = value, _ref[line === "x" ? "y" : "x"] = otherValue, _ref;
};
var distance = function distance2(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var closest = function closest2(target, points) {
  return Math.min.apply(Math, points.map(function(point) {
    return distance(target, point);
  }));
};
var apply = function apply2(fn4) {
  return function(point) {
    return {
      x: fn4(point.x),
      y: fn4(point.y)
    };
  };
};
var executeClip = function(frame, subject) {
  var result = getRect({
    top: Math.max(subject.top, frame.top),
    right: Math.min(subject.right, frame.right),
    bottom: Math.min(subject.bottom, frame.bottom),
    left: Math.max(subject.left, frame.left)
  });
  if (result.width <= 0 || result.height <= 0) {
    return null;
  }
  return result;
};
var offsetByPosition = function offsetByPosition2(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};
var getCorners = function getCorners2(spacing) {
  return [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
};
var noSpacing2 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var scroll = function scroll2(target, frame) {
  if (!frame) {
    return target;
  }
  return offsetByPosition(target, frame.scroll.diff.displacement);
};
var increase = function increase2(target, axis, withPlaceholder) {
  if (withPlaceholder && withPlaceholder.increasedBy) {
    var _extends22;
    return _extends({}, target, (_extends22 = {}, _extends22[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends22));
  }
  return target;
};
var clip = function clip2(target, frame) {
  if (frame && frame.shouldClipSubject) {
    return executeClip(frame.pageMarginBox, target);
  }
  return getRect(target);
};
var getSubject = function(_ref) {
  var page = _ref.page, withPlaceholder = _ref.withPlaceholder, axis = _ref.axis, frame = _ref.frame;
  var scrolled = scroll(page.marginBox, frame);
  var increased = increase(scrolled, axis, withPlaceholder);
  var clipped = clip(increased, frame);
  return {
    page,
    withPlaceholder,
    active: clipped
  };
};
var scrollDroppable = function(droppable2, newScroll) {
  !droppable2.frame ? true ? invariant2(false) : invariant2(false) : void 0;
  var scrollable = droppable2.frame;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);
  var frame = _extends({}, scrollable, {
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  });
  var subject = getSubject({
    page: droppable2.subject.page,
    withPlaceholder: droppable2.subject.withPlaceholder,
    axis: droppable2.axis,
    frame
  });
  var result = _extends({}, droppable2, {
    frame,
    subject
  });
  return result;
};
function isInteger(value) {
  if (Number.isInteger) {
    return Number.isInteger(value);
  }
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
}
function values(map) {
  if (Object.values) {
    return Object.values(map);
  }
  return Object.keys(map).map(function(key) {
    return map[key];
  });
}
function findIndex(list, predicate) {
  if (list.findIndex) {
    return list.findIndex(predicate);
  }
  for (var i3 = 0; i3 < list.length; i3++) {
    if (predicate(list[i3])) {
      return i3;
    }
  }
  return -1;
}
function find(list, predicate) {
  if (list.find) {
    return list.find(predicate);
  }
  var index2 = findIndex(list, predicate);
  if (index2 !== -1) {
    return list[index2];
  }
  return void 0;
}
function toArray(list) {
  return Array.prototype.slice.call(list);
}
var toDroppableMap = memoize_one_esm_default(function(droppables) {
  return droppables.reduce(function(previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDraggableMap = memoize_one_esm_default(function(draggables) {
  return draggables.reduce(function(previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDroppableList = memoize_one_esm_default(function(droppables) {
  return values(droppables);
});
var toDraggableList = memoize_one_esm_default(function(draggables) {
  return values(draggables);
});
var getDraggablesInsideDroppable = memoize_one_esm_default(function(droppableId, draggables) {
  var result = toDraggableList(draggables).filter(function(draggable2) {
    return droppableId === draggable2.descriptor.droppableId;
  }).sort(function(a3, b3) {
    return a3.descriptor.index - b3.descriptor.index;
  });
  return result;
});
function tryGetDestination(impact) {
  if (impact.at && impact.at.type === "REORDER") {
    return impact.at.destination;
  }
  return null;
}
function tryGetCombine(impact) {
  if (impact.at && impact.at.type === "COMBINE") {
    return impact.at.combine;
  }
  return null;
}
var removeDraggableFromList = memoize_one_esm_default(function(remove, list) {
  return list.filter(function(item) {
    return item.descriptor.id !== remove.descriptor.id;
  });
});
var moveToNextCombine = function(_ref) {
  var isMovingForward = _ref.isMovingForward, draggable2 = _ref.draggable, destination = _ref.destination, insideDestination = _ref.insideDestination, previousImpact = _ref.previousImpact;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var location = tryGetDestination(previousImpact);
  if (!location) {
    return null;
  }
  function getImpact(target) {
    var at = {
      type: "COMBINE",
      combine: {
        draggableId: target,
        droppableId: destination.descriptor.id
      }
    };
    return _extends({}, previousImpact, {
      at
    });
  }
  var all = previousImpact.displaced.all;
  var closestId = all.length ? all[0] : null;
  if (isMovingForward) {
    return closestId ? getImpact(closestId) : null;
  }
  var withoutDraggable = removeDraggableFromList(draggable2, insideDestination);
  if (!closestId) {
    if (!withoutDraggable.length) {
      return null;
    }
    var last = withoutDraggable[withoutDraggable.length - 1];
    return getImpact(last.descriptor.id);
  }
  var indexOfClosest = findIndex(withoutDraggable, function(d3) {
    return d3.descriptor.id === closestId;
  });
  !(indexOfClosest !== -1) ? true ? invariant2(false, "Could not find displaced item in set") : invariant2(false) : void 0;
  var proposedIndex = indexOfClosest - 1;
  if (proposedIndex < 0) {
    return null;
  }
  var before = withoutDraggable[proposedIndex];
  return getImpact(before.descriptor.id);
};
var isHomeOf = function(draggable2, destination) {
  return draggable2.descriptor.droppableId === destination.descriptor.id;
};
var noDisplacedBy = {
  point: origin,
  value: 0
};
var emptyGroups = {
  invisible: {},
  visible: {},
  all: []
};
var noImpact = {
  displaced: emptyGroups,
  displacedBy: noDisplacedBy,
  at: null
};
var isWithin = function(lowerBound, upperBound) {
  return function(value) {
    return lowerBound <= value && value <= upperBound;
  };
};
var isPartiallyVisibleThroughFrame = function(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function(subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    if (isContained) {
      return true;
    }
    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;
    if (isPartiallyContained) {
      return true;
    }
    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;
    if (isTargetBiggerThanFrame) {
      return true;
    }
    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
};
var isTotallyVisibleThroughFrame = function(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function(subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
};
var vertical = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
};
var horizontal = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var isTotallyVisibleThroughFrameOnAxis = function(axis) {
  return function(frame) {
    var isWithinVertical = isWithin(frame.top, frame.bottom);
    var isWithinHorizontal = isWithin(frame.left, frame.right);
    return function(subject) {
      if (axis === vertical) {
        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
      }
      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    };
  };
};
var getDroppableDisplaced = function getDroppableDisplaced2(target, destination) {
  var displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
  return offsetByPosition(target, displacement);
};
var isVisibleInDroppable = function isVisibleInDroppable2(target, destination, isVisibleThroughFrameFn) {
  if (!destination.subject.active) {
    return false;
  }
  return isVisibleThroughFrameFn(destination.subject.active)(target);
};
var isVisibleInViewport = function isVisibleInViewport2(target, viewport2, isVisibleThroughFrameFn) {
  return isVisibleThroughFrameFn(viewport2)(target);
};
var isVisible = function isVisible2(_ref) {
  var toBeDisplaced = _ref.target, destination = _ref.destination, viewport2 = _ref.viewport, withDroppableDisplacement2 = _ref.withDroppableDisplacement, isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
  var displacedTarget = withDroppableDisplacement2 ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport2, isVisibleThroughFrameFn);
};
var isPartiallyVisible = function isPartiallyVisible2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  }));
};
var isTotallyVisible = function isTotallyVisible2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  }));
};
var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
  }));
};
var getShouldAnimate = function getShouldAnimate2(id, last, forceShouldAnimate) {
  if (typeof forceShouldAnimate === "boolean") {
    return forceShouldAnimate;
  }
  if (!last) {
    return true;
  }
  var invisible = last.invisible, visible = last.visible;
  if (invisible[id]) {
    return false;
  }
  var previous = visible[id];
  return previous ? previous.shouldAnimate : true;
};
function getTarget(draggable2, displacedBy) {
  var marginBox = draggable2.page.marginBox;
  var expandBy = {
    top: displacedBy.point.y,
    right: 0,
    bottom: 0,
    left: displacedBy.point.x
  };
  return getRect(expand(marginBox, expandBy));
}
function getDisplacementGroups(_ref) {
  var afterDragging = _ref.afterDragging, destination = _ref.destination, displacedBy = _ref.displacedBy, viewport2 = _ref.viewport, forceShouldAnimate = _ref.forceShouldAnimate, last = _ref.last;
  return afterDragging.reduce(function process2(groups, draggable2) {
    var target = getTarget(draggable2, displacedBy);
    var id = draggable2.descriptor.id;
    groups.all.push(id);
    var isVisible3 = isPartiallyVisible({
      target,
      destination,
      viewport: viewport2,
      withDroppableDisplacement: true
    });
    if (!isVisible3) {
      groups.invisible[draggable2.descriptor.id] = true;
      return groups;
    }
    var shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
    var displacement = {
      draggableId: id,
      shouldAnimate
    };
    groups.visible[id] = displacement;
    return groups;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function getIndexOfLastItem(draggables, options) {
  if (!draggables.length) {
    return 0;
  }
  var indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
  return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
}
function goAtEnd(_ref) {
  var insideDestination = _ref.insideDestination, inHomeList = _ref.inHomeList, displacedBy = _ref.displacedBy, destination = _ref.destination;
  var newIndex = getIndexOfLastItem(insideDestination, {
    inHomeList
  });
  return {
    displaced: emptyGroups,
    displacedBy,
    at: {
      type: "REORDER",
      destination: {
        droppableId: destination.descriptor.id,
        index: newIndex
      }
    }
  };
}
function calculateReorderImpact(_ref2) {
  var draggable2 = _ref2.draggable, insideDestination = _ref2.insideDestination, destination = _ref2.destination, viewport2 = _ref2.viewport, displacedBy = _ref2.displacedBy, last = _ref2.last, index2 = _ref2.index, forceShouldAnimate = _ref2.forceShouldAnimate;
  var inHomeList = isHomeOf(draggable2, destination);
  if (index2 == null) {
    return goAtEnd({
      insideDestination,
      inHomeList,
      displacedBy,
      destination
    });
  }
  var match2 = find(insideDestination, function(item) {
    return item.descriptor.index === index2;
  });
  if (!match2) {
    return goAtEnd({
      insideDestination,
      inHomeList,
      displacedBy,
      destination
    });
  }
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var sliceFrom = insideDestination.indexOf(match2);
  var impacted = withoutDragging.slice(sliceFrom);
  var displaced = getDisplacementGroups({
    afterDragging: impacted,
    destination,
    displacedBy,
    last,
    viewport: viewport2.frame,
    forceShouldAnimate
  });
  return {
    displaced,
    displacedBy,
    at: {
      type: "REORDER",
      destination: {
        droppableId: destination.descriptor.id,
        index: index2
      }
    }
  };
}
function didStartAfterCritical(draggableId, afterCritical) {
  return Boolean(afterCritical.effected[draggableId]);
}
var fromCombine = function(_ref) {
  var isMovingForward = _ref.isMovingForward, destination = _ref.destination, draggables = _ref.draggables, combine2 = _ref.combine, afterCritical = _ref.afterCritical;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var combineId = combine2.draggableId;
  var combineWith = draggables[combineId];
  var combineWithIndex = combineWith.descriptor.index;
  var didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);
  if (didCombineWithStartAfterCritical) {
    if (isMovingForward) {
      return combineWithIndex;
    }
    return combineWithIndex - 1;
  }
  if (isMovingForward) {
    return combineWithIndex + 1;
  }
  return combineWithIndex;
};
var fromReorder = function(_ref) {
  var isMovingForward = _ref.isMovingForward, isInHomeList = _ref.isInHomeList, insideDestination = _ref.insideDestination, location = _ref.location;
  if (!insideDestination.length) {
    return null;
  }
  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  var firstIndex = insideDestination[0].descriptor.index;
  var lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
  var upperBound = isInHomeList ? lastIndex : lastIndex + 1;
  if (proposedIndex < firstIndex) {
    return null;
  }
  if (proposedIndex > upperBound) {
    return null;
  }
  return proposedIndex;
};
var moveToNextIndex = function(_ref) {
  var isMovingForward = _ref.isMovingForward, isInHomeList = _ref.isInHomeList, draggable2 = _ref.draggable, draggables = _ref.draggables, destination = _ref.destination, insideDestination = _ref.insideDestination, previousImpact = _ref.previousImpact, viewport2 = _ref.viewport, afterCritical = _ref.afterCritical;
  var wasAt = previousImpact.at;
  !wasAt ? true ? invariant2(false, "Cannot move in direction without previous impact location") : invariant2(false) : void 0;
  if (wasAt.type === "REORDER") {
    var _newIndex = fromReorder({
      isMovingForward,
      isInHomeList,
      location: wasAt.destination,
      insideDestination
    });
    if (_newIndex == null) {
      return null;
    }
    return calculateReorderImpact({
      draggable: draggable2,
      insideDestination,
      destination,
      viewport: viewport2,
      last: previousImpact.displaced,
      displacedBy: previousImpact.displacedBy,
      index: _newIndex
    });
  }
  var newIndex = fromCombine({
    isMovingForward,
    destination,
    displaced: previousImpact.displaced,
    draggables,
    combine: wasAt.combine,
    afterCritical
  });
  if (newIndex == null) {
    return null;
  }
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport: viewport2,
    last: previousImpact.displaced,
    displacedBy: previousImpact.displacedBy,
    index: newIndex
  });
};
var getCombinedItemDisplacement = function(_ref) {
  var displaced = _ref.displaced, afterCritical = _ref.afterCritical, combineWith = _ref.combineWith, displacedBy = _ref.displacedBy;
  var isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);
  if (didStartAfterCritical(combineWith, afterCritical)) {
    return isDisplaced ? origin : negate(displacedBy.point);
  }
  return isDisplaced ? displacedBy.point : origin;
};
var whenCombining = function(_ref) {
  var afterCritical = _ref.afterCritical, impact = _ref.impact, draggables = _ref.draggables;
  var combine2 = tryGetCombine(impact);
  !combine2 ? true ? invariant2(false) : invariant2(false) : void 0;
  var combineWith = combine2.draggableId;
  var center = draggables[combineWith].page.borderBox.center;
  var displaceBy = getCombinedItemDisplacement({
    displaced: impact.displaced,
    afterCritical,
    combineWith,
    displacedBy: impact.displacedBy
  });
  return add(center, displaceBy);
};
var distanceFromStartToBorderBoxCenter = function distanceFromStartToBorderBoxCenter2(axis, box) {
  return box.margin[axis.start] + box.borderBox[axis.size] / 2;
};
var distanceFromEndToBorderBoxCenter = function distanceFromEndToBorderBoxCenter2(axis, box) {
  return box.margin[axis.end] + box.borderBox[axis.size] / 2;
};
var getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter2(axis, target, isMoving) {
  return target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
};
var goAfter = function goAfter2(_ref) {
  var axis = _ref.axis, moveRelativeTo = _ref.moveRelativeTo, isMoving = _ref.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goBefore = function goBefore2(_ref2) {
  var axis = _ref2.axis, moveRelativeTo = _ref2.moveRelativeTo, isMoving = _ref2.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goIntoStart = function goIntoStart2(_ref3) {
  var axis = _ref3.axis, moveInto = _ref3.moveInto, isMoving = _ref3.isMoving;
  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
};
var whenReordering = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, draggables = _ref.draggables, droppable2 = _ref.droppable, afterCritical = _ref.afterCritical;
  var insideDestination = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
  var draggablePage = draggable2.page;
  var axis = droppable2.axis;
  if (!insideDestination.length) {
    return goIntoStart({
      axis,
      moveInto: droppable2.page,
      isMoving: draggablePage
    });
  }
  var displaced = impact.displaced, displacedBy = impact.displacedBy;
  var closestAfter = displaced.all[0];
  if (closestAfter) {
    var closest3 = draggables[closestAfter];
    if (didStartAfterCritical(closestAfter, afterCritical)) {
      return goBefore({
        axis,
        moveRelativeTo: closest3.page,
        isMoving: draggablePage
      });
    }
    var withDisplacement = offset2(closest3.page, displacedBy.point);
    return goBefore({
      axis,
      moveRelativeTo: withDisplacement,
      isMoving: draggablePage
    });
  }
  var last = insideDestination[insideDestination.length - 1];
  if (last.descriptor.id === draggable2.descriptor.id) {
    return draggablePage.borderBox.center;
  }
  if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
    var page = offset2(last.page, negate(afterCritical.displacedBy.point));
    return goAfter({
      axis,
      moveRelativeTo: page,
      isMoving: draggablePage
    });
  }
  return goAfter({
    axis,
    moveRelativeTo: last.page,
    isMoving: draggablePage
  });
};
var withDroppableDisplacement = function(droppable2, point) {
  var frame = droppable2.frame;
  if (!frame) {
    return point;
  }
  return add(point, frame.scroll.diff.displacement);
};
var getResultWithoutDroppableDisplacement = function getResultWithoutDroppableDisplacement2(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, droppable2 = _ref.droppable, draggables = _ref.draggables, afterCritical = _ref.afterCritical;
  var original = draggable2.page.borderBox.center;
  var at = impact.at;
  if (!droppable2) {
    return original;
  }
  if (!at) {
    return original;
  }
  if (at.type === "REORDER") {
    return whenReordering({
      impact,
      draggable: draggable2,
      draggables,
      droppable: droppable2,
      afterCritical
    });
  }
  return whenCombining({
    impact,
    draggables,
    afterCritical
  });
};
var getPageBorderBoxCenterFromImpact = function(args) {
  var withoutDisplacement = getResultWithoutDroppableDisplacement(args);
  var droppable2 = args.droppable;
  var withDisplacement = droppable2 ? withDroppableDisplacement(droppable2, withoutDisplacement) : withoutDisplacement;
  return withDisplacement;
};
var scrollViewport = function(viewport2, newScroll) {
  var diff = subtract(newScroll, viewport2.scroll.initial);
  var displacement = negate(diff);
  var frame = getRect({
    top: newScroll.y,
    bottom: newScroll.y + viewport2.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport2.frame.width
  });
  var updated = {
    frame,
    scroll: {
      initial: viewport2.scroll.initial,
      max: viewport2.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement
      }
    }
  };
  return updated;
};
function getDraggables(ids, draggables) {
  return ids.map(function(id) {
    return draggables[id];
  });
}
function tryGetVisible(id, groups) {
  for (var i3 = 0; i3 < groups.length; i3++) {
    var displacement = groups[i3].visible[id];
    if (displacement) {
      return displacement;
    }
  }
  return null;
}
var speculativelyIncrease = function(_ref) {
  var impact = _ref.impact, viewport2 = _ref.viewport, destination = _ref.destination, draggables = _ref.draggables, maxScrollChange = _ref.maxScrollChange;
  var scrolledViewport = scrollViewport(viewport2, add(viewport2.scroll.current, maxScrollChange));
  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
  var last = impact.displaced;
  var withViewportScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination,
    displacedBy: impact.displacedBy,
    viewport: scrolledViewport.frame,
    last,
    forceShouldAnimate: false
  });
  var withDroppableScroll2 = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: scrolledDroppable,
    displacedBy: impact.displacedBy,
    viewport: viewport2.frame,
    last,
    forceShouldAnimate: false
  });
  var invisible = {};
  var visible = {};
  var groups = [last, withViewportScroll, withDroppableScroll2];
  last.all.forEach(function(id) {
    var displacement = tryGetVisible(id, groups);
    if (displacement) {
      visible[id] = displacement;
      return;
    }
    invisible[id] = true;
  });
  var newImpact = _extends({}, impact, {
    displaced: {
      all: last.all,
      invisible,
      visible
    }
  });
  return newImpact;
};
var withViewportDisplacement = function(viewport2, point) {
  return add(viewport2.scroll.diff.displacement, point);
};
var getClientFromPageBorderBoxCenter = function(_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter, draggable2 = _ref.draggable, viewport2 = _ref.viewport;
  var withoutPageScrollChange = withViewportDisplacement(viewport2, pageBorderBoxCenter);
  var offset4 = subtract(withoutPageScrollChange, draggable2.page.borderBox.center);
  return add(draggable2.client.borderBox.center, offset4);
};
var isTotallyVisibleInNewLocation = function(_ref) {
  var draggable2 = _ref.draggable, destination = _ref.destination, newPageBorderBoxCenter = _ref.newPageBorderBoxCenter, viewport2 = _ref.viewport, withDroppableDisplacement2 = _ref.withDroppableDisplacement, _ref$onlyOnMainAxis = _ref.onlyOnMainAxis, onlyOnMainAxis = _ref$onlyOnMainAxis === void 0 ? false : _ref$onlyOnMainAxis;
  var changeNeeded = subtract(newPageBorderBoxCenter, draggable2.page.borderBox.center);
  var shifted = offsetByPosition(draggable2.page.borderBox, changeNeeded);
  var args = {
    target: shifted,
    destination,
    withDroppableDisplacement: withDroppableDisplacement2,
    viewport: viewport2
  };
  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
};
var moveToNextPlace = function(_ref) {
  var isMovingForward = _ref.isMovingForward, draggable2 = _ref.draggable, destination = _ref.destination, draggables = _ref.draggables, previousImpact = _ref.previousImpact, viewport2 = _ref.viewport, previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, previousClientSelection = _ref.previousClientSelection, afterCritical = _ref.afterCritical;
  if (!destination.isEnabled) {
    return null;
  }
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var isInHomeList = isHomeOf(draggable2, destination);
  var impact = moveToNextCombine({
    isMovingForward,
    draggable: draggable2,
    destination,
    insideDestination,
    previousImpact
  }) || moveToNextIndex({
    isMovingForward,
    isInHomeList,
    draggable: draggable2,
    draggables,
    destination,
    insideDestination,
    previousImpact,
    viewport: viewport2,
    afterCritical
  });
  if (!impact) {
    return null;
  }
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    afterCritical
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable2,
    destination,
    newPageBorderBoxCenter: pageBorderBoxCenter,
    viewport: viewport2.frame,
    withDroppableDisplacement: false,
    onlyOnMainAxis: true
  });
  if (isVisibleInNewLocation) {
    var clientSelection = getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter,
      draggable: draggable2,
      viewport: viewport2
    });
    return {
      clientSelection,
      impact,
      scrollJumpRequest: null
    };
  }
  var distance3 = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
  var cautious = speculativelyIncrease({
    impact,
    viewport: viewport2,
    destination,
    draggables,
    maxScrollChange: distance3
  });
  return {
    clientSelection: previousClientSelection,
    impact: cautious,
    scrollJumpRequest: distance3
  };
};
var getKnownActive = function getKnownActive2(droppable2) {
  var rect = droppable2.subject.active;
  !rect ? true ? invariant2(false, "Cannot get clipped area from droppable") : invariant2(false) : void 0;
  return rect;
};
var getBestCrossAxisDroppable = function(_ref) {
  var isMovingForward = _ref.isMovingForward, pageBorderBoxCenter = _ref.pageBorderBoxCenter, source = _ref.source, droppables = _ref.droppables, viewport2 = _ref.viewport;
  var active = source.subject.active;
  if (!active) {
    return null;
  }
  var axis = source.axis;
  var isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
  var candidates = toDroppableList(droppables).filter(function(droppable2) {
    return droppable2 !== source;
  }).filter(function(droppable2) {
    return droppable2.isEnabled;
  }).filter(function(droppable2) {
    return Boolean(droppable2.subject.active);
  }).filter(function(droppable2) {
    return isPartiallyVisibleThroughFrame(viewport2.frame)(getKnownActive(droppable2));
  }).filter(function(droppable2) {
    var activeOfTarget = getKnownActive(droppable2);
    if (isMovingForward) {
      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
    }
    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
  }).filter(function(droppable2) {
    var activeOfTarget = getKnownActive(droppable2);
    var isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
  }).sort(function(a3, b3) {
    var first = getKnownActive(a3)[axis.crossAxisStart];
    var second = getKnownActive(b3)[axis.crossAxisStart];
    if (isMovingForward) {
      return first - second;
    }
    return second - first;
  }).filter(function(droppable2, index2, array) {
    return getKnownActive(droppable2)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart];
  });
  if (!candidates.length) {
    return null;
  }
  if (candidates.length === 1) {
    return candidates[0];
  }
  var contains2 = candidates.filter(function(droppable2) {
    var isWithinDroppable = isWithin(getKnownActive(droppable2)[axis.start], getKnownActive(droppable2)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });
  if (contains2.length === 1) {
    return contains2[0];
  }
  if (contains2.length > 1) {
    return contains2.sort(function(a3, b3) {
      return getKnownActive(a3)[axis.start] - getKnownActive(b3)[axis.start];
    })[0];
  }
  return candidates.sort(function(a3, b3) {
    var first = closest(pageBorderBoxCenter, getCorners(getKnownActive(a3)));
    var second = closest(pageBorderBoxCenter, getCorners(getKnownActive(b3)));
    if (first !== second) {
      return first - second;
    }
    return getKnownActive(a3)[axis.start] - getKnownActive(b3)[axis.start];
  })[0];
};
var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter2(draggable2, afterCritical) {
  var original = draggable2.page.borderBox.center;
  return didStartAfterCritical(draggable2.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
};
var getCurrentPageBorderBox = function getCurrentPageBorderBox2(draggable2, afterCritical) {
  var original = draggable2.page.borderBox;
  return didStartAfterCritical(draggable2.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
};
var getClosestDraggable = function(_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter, viewport2 = _ref.viewport, destination = _ref.destination, insideDestination = _ref.insideDestination, afterCritical = _ref.afterCritical;
  var sorted = insideDestination.filter(function(draggable2) {
    return isTotallyVisible({
      target: getCurrentPageBorderBox(draggable2, afterCritical),
      destination,
      viewport: viewport2.frame,
      withDroppableDisplacement: true
    });
  }).sort(function(a3, b3) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a3, afterCritical)));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b3, afterCritical)));
    if (distanceToA < distanceToB) {
      return -1;
    }
    if (distanceToB < distanceToA) {
      return 1;
    }
    return a3.descriptor.index - b3.descriptor.index;
  });
  return sorted[0] || null;
};
var getDisplacedBy = memoize_one_esm_default(function getDisplacedBy2(axis, displaceBy) {
  var displacement = displaceBy[axis.line];
  return {
    value: displacement,
    point: patch(axis.line, displacement)
  };
});
var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder2(droppable2, placeholderSize, draggables) {
  var axis = droppable2.axis;
  if (droppable2.descriptor.mode === "virtual") {
    return patch(axis.line, placeholderSize[axis.line]);
  }
  var availableSpace = droppable2.subject.page.contentBox[axis.size];
  var insideDroppable = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
  var spaceUsed = insideDroppable.reduce(function(sum, dimension) {
    return sum + dimension.client.marginBox[axis.size];
  }, 0);
  var requiredSpace = spaceUsed + placeholderSize[axis.line];
  var needsToGrowBy = requiredSpace - availableSpace;
  if (needsToGrowBy <= 0) {
    return null;
  }
  return patch(axis.line, needsToGrowBy);
};
var withMaxScroll = function withMaxScroll2(frame, max2) {
  return _extends({}, frame, {
    scroll: _extends({}, frame.scroll, {
      max: max2
    })
  });
};
var addPlaceholder = function addPlaceholder2(droppable2, draggable2, draggables) {
  var frame = droppable2.frame;
  !!isHomeOf(draggable2, droppable2) ? true ? invariant2(false, "Should not add placeholder space to home list") : invariant2(false) : void 0;
  !!droppable2.subject.withPlaceholder ? true ? invariant2(false, "Cannot add placeholder size to a subject when it already has one") : invariant2(false) : void 0;
  var placeholderSize = getDisplacedBy(droppable2.axis, draggable2.displaceBy).point;
  var requiredGrowth = getRequiredGrowthForPlaceholder(droppable2, placeholderSize, draggables);
  var added = {
    placeholderSize,
    increasedBy: requiredGrowth,
    oldFrameMaxScroll: droppable2.frame ? droppable2.frame.scroll.max : null
  };
  if (!frame) {
    var _subject = getSubject({
      page: droppable2.subject.page,
      withPlaceholder: added,
      axis: droppable2.axis,
      frame: droppable2.frame
    });
    return _extends({}, droppable2, {
      subject: _subject
    });
  }
  var maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
  var newFrame = withMaxScroll(frame, maxScroll);
  var subject = getSubject({
    page: droppable2.subject.page,
    withPlaceholder: added,
    axis: droppable2.axis,
    frame: newFrame
  });
  return _extends({}, droppable2, {
    subject,
    frame: newFrame
  });
};
var removePlaceholder = function removePlaceholder2(droppable2) {
  var added = droppable2.subject.withPlaceholder;
  !added ? true ? invariant2(false, "Cannot remove placeholder form subject when there was none") : invariant2(false) : void 0;
  var frame = droppable2.frame;
  if (!frame) {
    var _subject2 = getSubject({
      page: droppable2.subject.page,
      axis: droppable2.axis,
      frame: null,
      withPlaceholder: null
    });
    return _extends({}, droppable2, {
      subject: _subject2
    });
  }
  var oldMaxScroll = added.oldFrameMaxScroll;
  !oldMaxScroll ? true ? invariant2(false, "Expected droppable with frame to have old max frame scroll when removing placeholder") : invariant2(false) : void 0;
  var newFrame = withMaxScroll(frame, oldMaxScroll);
  var subject = getSubject({
    page: droppable2.subject.page,
    axis: droppable2.axis,
    frame: newFrame,
    withPlaceholder: null
  });
  return _extends({}, droppable2, {
    subject,
    frame: newFrame
  });
};
var moveToNewDroppable = function(_ref) {
  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, moveRelativeTo = _ref.moveRelativeTo, insideDestination = _ref.insideDestination, draggable2 = _ref.draggable, draggables = _ref.draggables, destination = _ref.destination, viewport2 = _ref.viewport, afterCritical = _ref.afterCritical;
  if (!moveRelativeTo) {
    if (insideDestination.length) {
      return null;
    }
    var proposed = {
      displaced: emptyGroups,
      displacedBy: noDisplacedBy,
      at: {
        type: "REORDER",
        destination: {
          droppableId: destination.descriptor.id,
          index: 0
        }
      }
    };
    var proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact: proposed,
      draggable: draggable2,
      droppable: destination,
      draggables,
      afterCritical
    });
    var withPlaceholder = isHomeOf(draggable2, destination) ? destination : addPlaceholder(destination, draggable2, draggables);
    var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
      draggable: draggable2,
      destination: withPlaceholder,
      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
      viewport: viewport2.frame,
      withDroppableDisplacement: false,
      onlyOnMainAxis: true
    });
    return isVisibleInNewLocation ? proposed : null;
  }
  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);
  var proposedIndex = function() {
    var relativeTo = moveRelativeTo.descriptor.index;
    if (moveRelativeTo.descriptor.id === draggable2.descriptor.id) {
      return relativeTo;
    }
    if (isGoingBeforeTarget) {
      return relativeTo;
    }
    return relativeTo + 1;
  }();
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport: viewport2,
    displacedBy,
    last: emptyGroups,
    index: proposedIndex
  });
};
var moveCrossAxis = function(_ref) {
  var isMovingForward = _ref.isMovingForward, previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, draggable2 = _ref.draggable, isOver = _ref.isOver, draggables = _ref.draggables, droppables = _ref.droppables, viewport2 = _ref.viewport, afterCritical = _ref.afterCritical;
  var destination = getBestCrossAxisDroppable({
    isMovingForward,
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    source: isOver,
    droppables,
    viewport: viewport2
  });
  if (!destination) {
    return null;
  }
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var moveRelativeTo = getClosestDraggable({
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    viewport: viewport2,
    destination,
    insideDestination,
    afterCritical
  });
  var impact = moveToNewDroppable({
    previousPageBorderBoxCenter,
    destination,
    draggable: draggable2,
    draggables,
    moveRelativeTo,
    insideDestination,
    viewport: viewport2,
    afterCritical
  });
  if (!impact) {
    return null;
  }
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    afterCritical
  });
  var clientSelection = getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport: viewport2
  });
  return {
    clientSelection,
    impact,
    scrollJumpRequest: null
  };
};
var whatIsDraggedOver = function(impact) {
  var at = impact.at;
  if (!at) {
    return null;
  }
  if (at.type === "REORDER") {
    return at.destination.droppableId;
  }
  return at.combine.droppableId;
};
var getDroppableOver = function getDroppableOver2(impact, droppables) {
  var id = whatIsDraggedOver(impact);
  return id ? droppables[id] : null;
};
var moveInDirection = function(_ref) {
  var state = _ref.state, type = _ref.type;
  var isActuallyOver = getDroppableOver(state.impact, state.dimensions.droppables);
  var isMainAxisMovementAllowed = Boolean(isActuallyOver);
  var home2 = state.dimensions.droppables[state.critical.droppable.id];
  var isOver = isActuallyOver || home2;
  var direction = isOver.axis.direction;
  var isMovingOnMainAxis = direction === "vertical" && (type === "MOVE_UP" || type === "MOVE_DOWN") || direction === "horizontal" && (type === "MOVE_LEFT" || type === "MOVE_RIGHT");
  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }
  var isMovingForward = type === "MOVE_DOWN" || type === "MOVE_RIGHT";
  var draggable2 = state.dimensions.draggables[state.critical.draggable.id];
  var previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
  var _state$dimensions = state.dimensions, draggables = _state$dimensions.draggables, droppables = _state$dimensions.droppables;
  return isMovingOnMainAxis ? moveToNextPlace({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    destination: isOver,
    draggables,
    viewport: state.viewport,
    previousClientSelection: state.current.client.selection,
    previousImpact: state.impact,
    afterCritical: state.afterCritical
  }) : moveCrossAxis({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    isOver,
    draggables,
    droppables,
    viewport: state.viewport,
    afterCritical: state.afterCritical
  });
};
function isMovementAllowed(state) {
  return state.phase === "DRAGGING" || state.phase === "COLLECTING";
}
function isPositionInFrame(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function run(point) {
    return isWithinVertical(point.y) && isWithinHorizontal(point.x);
  };
}
function getHasOverlap(first, second) {
  return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
}
function getFurthestAway(_ref) {
  var pageBorderBox = _ref.pageBorderBox, draggable2 = _ref.draggable, candidates = _ref.candidates;
  var startCenter = draggable2.page.borderBox.center;
  var sorted = candidates.map(function(candidate) {
    var axis = candidate.axis;
    var target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
    return {
      id: candidate.descriptor.id,
      distance: distance(startCenter, target)
    };
  }).sort(function(a3, b3) {
    return b3.distance - a3.distance;
  });
  return sorted[0] ? sorted[0].id : null;
}
function getDroppableOver$1(_ref2) {
  var pageBorderBox = _ref2.pageBorderBox, draggable2 = _ref2.draggable, droppables = _ref2.droppables;
  var candidates = toDroppableList(droppables).filter(function(item) {
    if (!item.isEnabled) {
      return false;
    }
    var active = item.subject.active;
    if (!active) {
      return false;
    }
    if (!getHasOverlap(pageBorderBox, active)) {
      return false;
    }
    if (isPositionInFrame(active)(pageBorderBox.center)) {
      return true;
    }
    var axis = item.axis;
    var childCenter = active.center[axis.crossAxisLine];
    var crossAxisStart = pageBorderBox[axis.crossAxisStart];
    var crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
    var isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
    var isStartContained = isContained(crossAxisStart);
    var isEndContained = isContained(crossAxisEnd);
    if (!isStartContained && !isEndContained) {
      return true;
    }
    if (isStartContained) {
      return crossAxisStart < childCenter;
    }
    return crossAxisEnd > childCenter;
  });
  if (!candidates.length) {
    return null;
  }
  if (candidates.length === 1) {
    return candidates[0].descriptor.id;
  }
  return getFurthestAway({
    pageBorderBox,
    draggable: draggable2,
    candidates
  });
}
var offsetRectByPosition = function offsetRectByPosition2(rect, point) {
  return getRect(offsetByPosition(rect, point));
};
var withDroppableScroll = function(droppable2, area) {
  var frame = droppable2.frame;
  if (!frame) {
    return area;
  }
  return offsetRectByPosition(area, frame.scroll.diff.value);
};
function getIsDisplaced(_ref) {
  var displaced = _ref.displaced, id = _ref.id;
  return Boolean(displaced.visible[id] || displaced.invisible[id]);
}
function atIndex(_ref) {
  var draggable2 = _ref.draggable, closest3 = _ref.closest, inHomeList = _ref.inHomeList;
  if (!closest3) {
    return null;
  }
  if (!inHomeList) {
    return closest3.descriptor.index;
  }
  if (closest3.descriptor.index > draggable2.descriptor.index) {
    return closest3.descriptor.index - 1;
  }
  return closest3.descriptor.index;
}
var getReorderImpact = function(_ref2) {
  var targetRect = _ref2.pageBorderBoxWithDroppableScroll, draggable2 = _ref2.draggable, destination = _ref2.destination, insideDestination = _ref2.insideDestination, last = _ref2.last, viewport2 = _ref2.viewport, afterCritical = _ref2.afterCritical;
  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var closest3 = find(withoutDragging, function(child) {
    var id = child.descriptor.id;
    var childCenter = child.page.borderBox.center[axis.line];
    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: last,
      id
    });
    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd <= childCenter;
      }
      return targetStart < childCenter - displacement;
    }
    if (isDisplaced) {
      return targetEnd <= childCenter + displacement;
    }
    return targetStart < childCenter;
  });
  var newIndex = atIndex({
    draggable: draggable2,
    closest: closest3,
    inHomeList: isHomeOf(draggable2, destination)
  });
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport: viewport2,
    last,
    displacedBy,
    index: newIndex
  });
};
var combineThresholdDivisor = 4;
var getCombineImpact = function(_ref) {
  var draggable2 = _ref.draggable, targetRect = _ref.pageBorderBoxWithDroppableScroll, previousImpact = _ref.previousImpact, destination = _ref.destination, insideDestination = _ref.insideDestination, afterCritical = _ref.afterCritical;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var combineWith = find(withoutDragging, function(child) {
    var id = child.descriptor.id;
    var childRect = child.page.borderBox;
    var childSize = childRect[axis.size];
    var threshold = childSize / combineThresholdDivisor;
    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: previousImpact.displaced,
      id
    });
    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
      }
      return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
    }
    if (isDisplaced) {
      return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
    }
    return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
  });
  if (!combineWith) {
    return null;
  }
  var impact = {
    displacedBy,
    displaced: previousImpact.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: combineWith.descriptor.id,
        droppableId: destination.descriptor.id
      }
    }
  };
  return impact;
};
var getDragImpact = function(_ref) {
  var pageOffset = _ref.pageOffset, draggable2 = _ref.draggable, draggables = _ref.draggables, droppables = _ref.droppables, previousImpact = _ref.previousImpact, viewport2 = _ref.viewport, afterCritical = _ref.afterCritical;
  var pageBorderBox = offsetRectByPosition(draggable2.page.borderBox, pageOffset);
  var destinationId = getDroppableOver$1({
    pageBorderBox,
    draggable: draggable2,
    droppables
  });
  if (!destinationId) {
    return noImpact;
  }
  var destination = droppables[destinationId];
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
  return getCombineImpact({
    pageBorderBoxWithDroppableScroll,
    draggable: draggable2,
    previousImpact,
    destination,
    insideDestination,
    afterCritical
  }) || getReorderImpact({
    pageBorderBoxWithDroppableScroll,
    draggable: draggable2,
    destination,
    insideDestination,
    last: previousImpact.displaced,
    viewport: viewport2,
    afterCritical
  });
};
var patchDroppableMap = function(droppables, updated) {
  var _extends22;
  return _extends({}, droppables, (_extends22 = {}, _extends22[updated.descriptor.id] = updated, _extends22));
};
var clearUnusedPlaceholder = function clearUnusedPlaceholder2(_ref) {
  var previousImpact = _ref.previousImpact, impact = _ref.impact, droppables = _ref.droppables;
  var last = whatIsDraggedOver(previousImpact);
  var now = whatIsDraggedOver(impact);
  if (!last) {
    return droppables;
  }
  if (last === now) {
    return droppables;
  }
  var lastDroppable = droppables[last];
  if (!lastDroppable.subject.withPlaceholder) {
    return droppables;
  }
  var updated = removePlaceholder(lastDroppable);
  return patchDroppableMap(droppables, updated);
};
var recomputePlaceholders = function(_ref2) {
  var draggable2 = _ref2.draggable, draggables = _ref2.draggables, droppables = _ref2.droppables, previousImpact = _ref2.previousImpact, impact = _ref2.impact;
  var cleaned = clearUnusedPlaceholder({
    previousImpact,
    impact,
    droppables
  });
  var isOver = whatIsDraggedOver(impact);
  if (!isOver) {
    return cleaned;
  }
  var droppable2 = droppables[isOver];
  if (isHomeOf(draggable2, droppable2)) {
    return cleaned;
  }
  if (droppable2.subject.withPlaceholder) {
    return cleaned;
  }
  var patched = addPlaceholder(droppable2, draggable2, draggables);
  return patchDroppableMap(cleaned, patched);
};
var update = function(_ref) {
  var state = _ref.state, forcedClientSelection = _ref.clientSelection, forcedDimensions = _ref.dimensions, forcedViewport = _ref.viewport, forcedImpact = _ref.impact, scrollJumpRequest = _ref.scrollJumpRequest;
  var viewport2 = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var clientSelection = forcedClientSelection || state.current.client.selection;
  var offset4 = subtract(clientSelection, state.initial.client.selection);
  var client = {
    offset: offset4,
    selection: clientSelection,
    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset4)
  };
  var page = {
    selection: add(client.selection, viewport2.scroll.current),
    borderBoxCenter: add(client.borderBoxCenter, viewport2.scroll.current),
    offset: add(client.offset, viewport2.scroll.diff.value)
  };
  var current = {
    client,
    page
  };
  if (state.phase === "COLLECTING") {
    return _extends({
      phase: "COLLECTING"
    }, state, {
      dimensions,
      viewport: viewport2,
      current
    });
  }
  var draggable2 = dimensions.draggables[state.critical.draggable.id];
  var newImpact = forcedImpact || getDragImpact({
    pageOffset: page.offset,
    draggable: draggable2,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: state.impact,
    viewport: viewport2,
    afterCritical: state.afterCritical
  });
  var withUpdatedPlaceholders = recomputePlaceholders({
    draggable: draggable2,
    impact: newImpact,
    previousImpact: state.impact,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables
  });
  var result = _extends({}, state, {
    current,
    dimensions: {
      draggables: dimensions.draggables,
      droppables: withUpdatedPlaceholders
    },
    impact: newImpact,
    viewport: viewport2,
    scrollJumpRequest: scrollJumpRequest || null,
    forceShouldAnimate: scrollJumpRequest ? false : null
  });
  return result;
};
function getDraggables$1(ids, draggables) {
  return ids.map(function(id) {
    return draggables[id];
  });
}
var recompute = function(_ref) {
  var impact = _ref.impact, viewport2 = _ref.viewport, draggables = _ref.draggables, destination = _ref.destination, forceShouldAnimate = _ref.forceShouldAnimate;
  var last = impact.displaced;
  var afterDragging = getDraggables$1(last.all, draggables);
  var displaced = getDisplacementGroups({
    afterDragging,
    destination,
    displacedBy: impact.displacedBy,
    viewport: viewport2.frame,
    forceShouldAnimate,
    last
  });
  return _extends({}, impact, {
    displaced
  });
};
var getClientBorderBoxCenter = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, droppable2 = _ref.droppable, draggables = _ref.draggables, viewport2 = _ref.viewport, afterCritical = _ref.afterCritical;
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    draggables,
    droppable: droppable2,
    afterCritical
  });
  return getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport: viewport2
  });
};
var refreshSnap = function(_ref) {
  var state = _ref.state, forcedDimensions = _ref.dimensions, forcedViewport = _ref.viewport;
  !(state.movementMode === "SNAP") ? true ? invariant2(false) : invariant2(false) : void 0;
  var needsVisibilityCheck = state.impact;
  var viewport2 = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var draggables = dimensions.draggables, droppables = dimensions.droppables;
  var draggable2 = draggables[state.critical.draggable.id];
  var isOver = whatIsDraggedOver(needsVisibilityCheck);
  !isOver ? true ? invariant2(false, "Must be over a destination in SNAP movement mode") : invariant2(false) : void 0;
  var destination = droppables[isOver];
  var impact = recompute({
    impact: needsVisibilityCheck,
    viewport: viewport2,
    destination,
    draggables
  });
  var clientSelection = getClientBorderBoxCenter({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    viewport: viewport2,
    afterCritical: state.afterCritical
  });
  return update({
    impact,
    clientSelection,
    state,
    dimensions,
    viewport: viewport2
  });
};
var getHomeLocation = function(descriptor) {
  return {
    index: descriptor.index,
    droppableId: descriptor.droppableId
  };
};
var getLiftEffect = function(_ref) {
  var draggable2 = _ref.draggable, home2 = _ref.home, draggables = _ref.draggables, viewport2 = _ref.viewport;
  var displacedBy = getDisplacedBy(home2.axis, draggable2.displaceBy);
  var insideHome = getDraggablesInsideDroppable(home2.descriptor.id, draggables);
  var rawIndex = insideHome.indexOf(draggable2);
  !(rawIndex !== -1) ? true ? invariant2(false, "Expected draggable to be inside home list") : invariant2(false) : void 0;
  var afterDragging = insideHome.slice(rawIndex + 1);
  var effected = afterDragging.reduce(function(previous, item) {
    previous[item.descriptor.id] = true;
    return previous;
  }, {});
  var afterCritical = {
    inVirtualList: home2.descriptor.mode === "virtual",
    displacedBy,
    effected
  };
  var displaced = getDisplacementGroups({
    afterDragging,
    destination: home2,
    displacedBy,
    last: null,
    viewport: viewport2.frame,
    forceShouldAnimate: false
  });
  var impact = {
    displaced,
    displacedBy,
    at: {
      type: "REORDER",
      destination: getHomeLocation(draggable2.descriptor)
    }
  };
  return {
    impact,
    afterCritical
  };
};
var patchDimensionMap = function(dimensions, updated) {
  return {
    draggables: dimensions.draggables,
    droppables: patchDroppableMap(dimensions.droppables, updated)
  };
};
var start2 = function start3(key) {
  if (true) {
    {
      return;
    }
  }
};
var finish = function finish2(key) {
  if (true) {
    {
      return;
    }
  }
};
var offsetDraggable = function(_ref) {
  var draggable2 = _ref.draggable, offset$1 = _ref.offset, initialWindowScroll = _ref.initialWindowScroll;
  var client = offset2(draggable2.client, offset$1);
  var page = withScroll(client, initialWindowScroll);
  var moved = _extends({}, draggable2, {
    placeholder: _extends({}, draggable2.placeholder, {
      client
    }),
    client,
    page
  });
  return moved;
};
var getFrame = function(droppable2) {
  var frame = droppable2.frame;
  !frame ? true ? invariant2(false, "Expected Droppable to have a frame") : invariant2(false) : void 0;
  return frame;
};
var adjustAdditionsForScrollChanges = function(_ref) {
  var additions = _ref.additions, updatedDroppables = _ref.updatedDroppables, viewport2 = _ref.viewport;
  var windowScrollChange = viewport2.scroll.diff.value;
  return additions.map(function(draggable2) {
    var droppableId = draggable2.descriptor.droppableId;
    var modified = updatedDroppables[droppableId];
    var frame = getFrame(modified);
    var droppableScrollChange = frame.scroll.diff.value;
    var totalChange = add(windowScrollChange, droppableScrollChange);
    var moved = offsetDraggable({
      draggable: draggable2,
      offset: totalChange,
      initialWindowScroll: viewport2.scroll.initial
    });
    return moved;
  });
};
var publishWhileDraggingInVirtual = function(_ref) {
  var state = _ref.state, published = _ref.published;
  start2();
  var withScrollChange = published.modified.map(function(update2) {
    var existing = state.dimensions.droppables[update2.droppableId];
    var scrolled = scrollDroppable(existing, update2.scroll);
    return scrolled;
  });
  var droppables = _extends({}, state.dimensions.droppables, {}, toDroppableMap(withScrollChange));
  var updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
    additions: published.additions,
    updatedDroppables: droppables,
    viewport: state.viewport
  }));
  var draggables = _extends({}, state.dimensions.draggables, {}, updatedAdditions);
  published.removals.forEach(function(id) {
    delete draggables[id];
  });
  var dimensions = {
    droppables,
    draggables
  };
  var wasOverId = whatIsDraggedOver(state.impact);
  var wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
  var draggable2 = dimensions.draggables[state.critical.draggable.id];
  var home2 = dimensions.droppables[state.critical.droppable.id];
  var _getLiftEffect = getLiftEffect({
    draggable: draggable2,
    home: home2,
    draggables,
    viewport: state.viewport
  }), onLiftImpact = _getLiftEffect.impact, afterCritical = _getLiftEffect.afterCritical;
  var previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
  var impact = getDragImpact({
    pageOffset: state.current.page.offset,
    draggable: dimensions.draggables[state.critical.draggable.id],
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact,
    viewport: state.viewport,
    afterCritical
  });
  finish();
  var draggingState = _extends({
    phase: "DRAGGING"
  }, state, {
    phase: "DRAGGING",
    impact,
    onLiftImpact,
    dimensions,
    afterCritical,
    forceShouldAnimate: false
  });
  if (state.phase === "COLLECTING") {
    return draggingState;
  }
  var dropPending3 = _extends({
    phase: "DROP_PENDING"
  }, draggingState, {
    phase: "DROP_PENDING",
    reason: state.reason,
    isWaiting: false
  });
  return dropPending3;
};
var isSnapping = function isSnapping2(state) {
  return state.movementMode === "SNAP";
};
var postDroppableChange = function postDroppableChange2(state, updated, isEnabledChanging) {
  var dimensions = patchDimensionMap(state.dimensions, updated);
  if (!isSnapping(state) || isEnabledChanging) {
    return update({
      state,
      dimensions
    });
  }
  return refreshSnap({
    state,
    dimensions
  });
};
function removeScrollJumpRequest(state) {
  if (state.isDragging && state.movementMode === "SNAP") {
    return _extends({
      phase: "DRAGGING"
    }, state, {
      scrollJumpRequest: null
    });
  }
  return state;
}
var idle = {
  phase: "IDLE",
  completed: null,
  shouldFlush: false
};
var reducer4 = function(state, action) {
  if (state === void 0) {
    state = idle;
  }
  if (action.type === "FLUSH") {
    return _extends({}, idle, {
      shouldFlush: true
    });
  }
  if (action.type === "INITIAL_PUBLISH") {
    !(state.phase === "IDLE") ? true ? invariant2(false, "INITIAL_PUBLISH must come after a IDLE phase") : invariant2(false) : void 0;
    var _action$payload = action.payload, critical = _action$payload.critical, clientSelection = _action$payload.clientSelection, viewport2 = _action$payload.viewport, dimensions = _action$payload.dimensions, movementMode = _action$payload.movementMode;
    var draggable2 = dimensions.draggables[critical.draggable.id];
    var home2 = dimensions.droppables[critical.droppable.id];
    var client = {
      selection: clientSelection,
      borderBoxCenter: draggable2.client.borderBox.center,
      offset: origin
    };
    var initial = {
      client,
      page: {
        selection: add(client.selection, viewport2.scroll.initial),
        borderBoxCenter: add(client.selection, viewport2.scroll.initial),
        offset: add(client.selection, viewport2.scroll.diff.value)
      }
    };
    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function(item) {
      return !item.isFixedOnPage;
    });
    var _getLiftEffect = getLiftEffect({
      draggable: draggable2,
      home: home2,
      draggables: dimensions.draggables,
      viewport: viewport2
    }), impact = _getLiftEffect.impact, afterCritical = _getLiftEffect.afterCritical;
    var result = {
      phase: "DRAGGING",
      isDragging: true,
      critical,
      movementMode,
      dimensions,
      initial,
      current: initial,
      isWindowScrollAllowed,
      impact,
      afterCritical,
      onLiftImpact: impact,
      viewport: viewport2,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return result;
  }
  if (action.type === "COLLECTION_STARTING") {
    if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
      return state;
    }
    !(state.phase === "DRAGGING") ? true ? invariant2(false, "Collection cannot start from phase " + state.phase) : invariant2(false) : void 0;
    var _result = _extends({
      phase: "COLLECTING"
    }, state, {
      phase: "COLLECTING"
    });
    return _result;
  }
  if (action.type === "PUBLISH_WHILE_DRAGGING") {
    !(state.phase === "COLLECTING" || state.phase === "DROP_PENDING") ? true ? invariant2(false, "Unexpected " + action.type + " received in phase " + state.phase) : invariant2(false) : void 0;
    return publishWhileDraggingInVirtual({
      state,
      published: action.payload
    });
  }
  if (action.type === "MOVE") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? true ? invariant2(false, action.type + " not permitted in phase " + state.phase) : invariant2(false) : void 0;
    var _clientSelection = action.payload.client;
    if (isEqual2(_clientSelection, state.current.client.selection)) {
      return state;
    }
    return update({
      state,
      clientSelection: _clientSelection,
      impact: isSnapping(state) ? state.impact : null
    });
  }
  if (action.type === "UPDATE_DROPPABLE_SCROLL") {
    if (state.phase === "DROP_PENDING") {
      return removeScrollJumpRequest(state);
    }
    if (state.phase === "COLLECTING") {
      return removeScrollJumpRequest(state);
    }
    !isMovementAllowed(state) ? true ? invariant2(false, action.type + " not permitted in phase " + state.phase) : invariant2(false) : void 0;
    var _action$payload2 = action.payload, id = _action$payload2.id, newScroll = _action$payload2.newScroll;
    var target = state.dimensions.droppables[id];
    if (!target) {
      return state;
    }
    var scrolled = scrollDroppable(target, newScroll);
    return postDroppableChange(state, scrolled, false);
  }
  if (action.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? true ? invariant2(false, "Attempting to move in an unsupported phase " + state.phase) : invariant2(false) : void 0;
    var _action$payload3 = action.payload, _id = _action$payload3.id, isEnabled = _action$payload3.isEnabled;
    var _target = state.dimensions.droppables[_id];
    !_target ? true ? invariant2(false, "Cannot find Droppable[id: " + _id + "] to toggle its enabled state") : invariant2(false) : void 0;
    !(_target.isEnabled !== isEnabled) ? true ? invariant2(false, "Trying to set droppable isEnabled to " + String(isEnabled) + "\n      but it is already " + String(_target.isEnabled)) : invariant2(false) : void 0;
    var updated = _extends({}, _target, {
      isEnabled
    });
    return postDroppableChange(state, updated, true);
  }
  if (action.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? true ? invariant2(false, "Attempting to move in an unsupported phase " + state.phase) : invariant2(false) : void 0;
    var _action$payload4 = action.payload, _id2 = _action$payload4.id, isCombineEnabled = _action$payload4.isCombineEnabled;
    var _target2 = state.dimensions.droppables[_id2];
    !_target2 ? true ? invariant2(false, "Cannot find Droppable[id: " + _id2 + "] to toggle its isCombineEnabled state") : invariant2(false) : void 0;
    !(_target2.isCombineEnabled !== isCombineEnabled) ? true ? invariant2(false, "Trying to set droppable isCombineEnabled to " + String(isCombineEnabled) + "\n      but it is already " + String(_target2.isCombineEnabled)) : invariant2(false) : void 0;
    var _updated = _extends({}, _target2, {
      isCombineEnabled
    });
    return postDroppableChange(state, _updated, true);
  }
  if (action.type === "MOVE_BY_WINDOW_SCROLL") {
    if (state.phase === "DROP_PENDING" || state.phase === "DROP_ANIMATING") {
      return state;
    }
    !isMovementAllowed(state) ? true ? invariant2(false, "Cannot move by window in phase " + state.phase) : invariant2(false) : void 0;
    !state.isWindowScrollAllowed ? true ? invariant2(false, "Window scrolling is currently not supported for fixed lists") : invariant2(false) : void 0;
    var _newScroll = action.payload.newScroll;
    if (isEqual2(state.viewport.scroll.current, _newScroll)) {
      return removeScrollJumpRequest(state);
    }
    var _viewport = scrollViewport(state.viewport, _newScroll);
    if (isSnapping(state)) {
      return refreshSnap({
        state,
        viewport: _viewport
      });
    }
    return update({
      state,
      viewport: _viewport
    });
  }
  if (action.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!isMovementAllowed(state)) {
      return state;
    }
    var maxScroll = action.payload.maxScroll;
    if (isEqual2(maxScroll, state.viewport.scroll.max)) {
      return state;
    }
    var withMaxScroll3 = _extends({}, state.viewport, {
      scroll: _extends({}, state.viewport.scroll, {
        max: maxScroll
      })
    });
    return _extends({
      phase: "DRAGGING"
    }, state, {
      viewport: withMaxScroll3
    });
  }
  if (action.type === "MOVE_UP" || action.type === "MOVE_DOWN" || action.type === "MOVE_LEFT" || action.type === "MOVE_RIGHT") {
    if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
      return state;
    }
    !(state.phase === "DRAGGING") ? true ? invariant2(false, action.type + " received while not in DRAGGING phase") : invariant2(false) : void 0;
    var _result2 = moveInDirection({
      state,
      type: action.type
    });
    if (!_result2) {
      return state;
    }
    return update({
      state,
      impact: _result2.impact,
      clientSelection: _result2.clientSelection,
      scrollJumpRequest: _result2.scrollJumpRequest
    });
  }
  if (action.type === "DROP_PENDING") {
    var reason = action.payload.reason;
    !(state.phase === "COLLECTING") ? true ? invariant2(false, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : invariant2(false) : void 0;
    var newState = _extends({
      phase: "DROP_PENDING"
    }, state, {
      phase: "DROP_PENDING",
      isWaiting: true,
      reason
    });
    return newState;
  }
  if (action.type === "DROP_ANIMATE") {
    var _action$payload5 = action.payload, completed = _action$payload5.completed, dropDuration = _action$payload5.dropDuration, newHomeClientOffset = _action$payload5.newHomeClientOffset;
    !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? true ? invariant2(false, "Cannot animate drop from phase " + state.phase) : invariant2(false) : void 0;
    var _result3 = {
      phase: "DROP_ANIMATING",
      completed,
      dropDuration,
      newHomeClientOffset,
      dimensions: state.dimensions
    };
    return _result3;
  }
  if (action.type === "DROP_COMPLETE") {
    var _completed = action.payload.completed;
    return {
      phase: "IDLE",
      completed: _completed,
      shouldFlush: false
    };
  }
  return state;
};
var beforeInitialCapture = function beforeInitialCapture2(args) {
  return {
    type: "BEFORE_INITIAL_CAPTURE",
    payload: args
  };
};
var lift = function lift2(args) {
  return {
    type: "LIFT",
    payload: args
  };
};
var initialPublish = function initialPublish2(args) {
  return {
    type: "INITIAL_PUBLISH",
    payload: args
  };
};
var publishWhileDragging = function publishWhileDragging2(args) {
  return {
    type: "PUBLISH_WHILE_DRAGGING",
    payload: args
  };
};
var collectionStarting = function collectionStarting2() {
  return {
    type: "COLLECTION_STARTING",
    payload: null
  };
};
var updateDroppableScroll = function updateDroppableScroll2(args) {
  return {
    type: "UPDATE_DROPPABLE_SCROLL",
    payload: args
  };
};
var updateDroppableIsEnabled = function updateDroppableIsEnabled2(args) {
  return {
    type: "UPDATE_DROPPABLE_IS_ENABLED",
    payload: args
  };
};
var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled2(args) {
  return {
    type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
    payload: args
  };
};
var move = function move2(args) {
  return {
    type: "MOVE",
    payload: args
  };
};
var moveByWindowScroll = function moveByWindowScroll2(args) {
  return {
    type: "MOVE_BY_WINDOW_SCROLL",
    payload: args
  };
};
var updateViewportMaxScroll = function updateViewportMaxScroll2(args) {
  return {
    type: "UPDATE_VIEWPORT_MAX_SCROLL",
    payload: args
  };
};
var moveUp = function moveUp2() {
  return {
    type: "MOVE_UP",
    payload: null
  };
};
var moveDown = function moveDown2() {
  return {
    type: "MOVE_DOWN",
    payload: null
  };
};
var moveRight = function moveRight2() {
  return {
    type: "MOVE_RIGHT",
    payload: null
  };
};
var moveLeft = function moveLeft2() {
  return {
    type: "MOVE_LEFT",
    payload: null
  };
};
var flush = function flush2() {
  return {
    type: "FLUSH",
    payload: null
  };
};
var animateDrop = function animateDrop2(args) {
  return {
    type: "DROP_ANIMATE",
    payload: args
  };
};
var completeDrop = function completeDrop2(args) {
  return {
    type: "DROP_COMPLETE",
    payload: args
  };
};
var drop = function drop2(args) {
  return {
    type: "DROP",
    payload: args
  };
};
var dropPending = function dropPending2(args) {
  return {
    type: "DROP_PENDING",
    payload: args
  };
};
var dropAnimationFinished = function dropAnimationFinished2() {
  return {
    type: "DROP_ANIMATION_FINISHED",
    payload: null
  };
};
function checkIndexes(insideDestination) {
  if (insideDestination.length <= 1) {
    return;
  }
  var indexes = insideDestination.map(function(d3) {
    return d3.descriptor.index;
  });
  var errors = {};
  for (var i3 = 1; i3 < indexes.length; i3++) {
    var current = indexes[i3];
    var previous = indexes[i3 - 1];
    if (current !== previous + 1) {
      errors[current] = true;
    }
  }
  if (!Object.keys(errors).length) {
    return;
  }
  var formatted = indexes.map(function(index2) {
    var hasError = Boolean(errors[index2]);
    return hasError ? "[\u{1F525}" + index2 + "]" : "" + index2;
  }).join(", ");
  true ? warning3("\n    Detected non-consecutive <Draggable /> indexes.\n\n    (This can cause unexpected bugs)\n\n    " + formatted + "\n  ") : void 0;
}
function validateDimensions(critical, dimensions) {
  if (true) {
    var insideDestination = getDraggablesInsideDroppable(critical.droppable.id, dimensions.draggables);
    checkIndexes(insideDestination);
  }
}
var lift$1 = function(marshal) {
  return function(_ref) {
    var getState = _ref.getState, dispatch3 = _ref.dispatch;
    return function(next) {
      return function(action) {
        if (action.type !== "LIFT") {
          next(action);
          return;
        }
        var _action$payload = action.payload, id = _action$payload.id, clientSelection = _action$payload.clientSelection, movementMode = _action$payload.movementMode;
        var initial = getState();
        if (initial.phase === "DROP_ANIMATING") {
          dispatch3(completeDrop({
            completed: initial.completed
          }));
        }
        !(getState().phase === "IDLE") ? true ? invariant2(false, "Unexpected phase to start a drag") : invariant2(false) : void 0;
        dispatch3(flush());
        dispatch3(beforeInitialCapture({
          draggableId: id,
          movementMode
        }));
        var scrollOptions = {
          shouldPublishImmediately: movementMode === "SNAP"
        };
        var request = {
          draggableId: id,
          scrollOptions
        };
        var _marshal$startPublish = marshal.startPublishing(request), critical = _marshal$startPublish.critical, dimensions = _marshal$startPublish.dimensions, viewport2 = _marshal$startPublish.viewport;
        validateDimensions(critical, dimensions);
        dispatch3(initialPublish({
          critical,
          dimensions,
          clientSelection,
          movementMode,
          viewport: viewport2
        }));
      };
    };
  };
};
var style = function(marshal) {
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "INITIAL_PUBLISH") {
          marshal.dragging();
        }
        if (action.type === "DROP_ANIMATE") {
          marshal.dropping(action.payload.completed.result.reason);
        }
        if (action.type === "FLUSH" || action.type === "DROP_COMPLETE") {
          marshal.resting();
        }
        next(action);
      };
    };
  };
};
var curves = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
};
var combine = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
};
var timings = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
};
var outOfTheWayTiming = timings.outOfTheWay + "s " + curves.outOfTheWay;
var transitions = {
  fluid: "opacity " + outOfTheWayTiming,
  snap: "transform " + outOfTheWayTiming + ", opacity " + outOfTheWayTiming,
  drop: function drop3(duration) {
    var timing = duration + "s " + curves.drop;
    return "transform " + timing + ", opacity " + timing;
  },
  outOfTheWay: "transform " + outOfTheWayTiming,
  placeholder: "height " + outOfTheWayTiming + ", width " + outOfTheWayTiming + ", margin " + outOfTheWayTiming
};
var moveTo = function moveTo2(offset4) {
  return isEqual2(offset4, origin) ? null : "translate(" + offset4.x + "px, " + offset4.y + "px)";
};
var transforms = {
  moveTo,
  drop: function drop4(offset4, isCombining) {
    var translate = moveTo(offset4);
    if (!translate) {
      return null;
    }
    if (!isCombining) {
      return translate;
    }
    return translate + " scale(" + combine.scale.drop + ")";
  }
};
var minDropTime = timings.minDropTime;
var maxDropTime = timings.maxDropTime;
var dropTimeRange = maxDropTime - minDropTime;
var maxDropTimeAtDistance = 1500;
var cancelDropModifier = 0.6;
var getDropDuration = function(_ref) {
  var current = _ref.current, destination = _ref.destination, reason = _ref.reason;
  var distance$1 = distance(current, destination);
  if (distance$1 <= 0) {
    return minDropTime;
  }
  if (distance$1 >= maxDropTimeAtDistance) {
    return maxDropTime;
  }
  var percentage = distance$1 / maxDropTimeAtDistance;
  var duration = minDropTime + dropTimeRange * percentage;
  var withDuration = reason === "CANCEL" ? duration * cancelDropModifier : duration;
  return Number(withDuration.toFixed(2));
};
var getNewHomeClientOffset = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, dimensions = _ref.dimensions, viewport2 = _ref.viewport, afterCritical = _ref.afterCritical;
  var draggables = dimensions.draggables, droppables = dimensions.droppables;
  var droppableId = whatIsDraggedOver(impact);
  var destination = droppableId ? droppables[droppableId] : null;
  var home2 = droppables[draggable2.descriptor.droppableId];
  var newClientCenter = getClientBorderBoxCenter({
    impact,
    draggable: draggable2,
    draggables,
    afterCritical,
    droppable: destination || home2,
    viewport: viewport2
  });
  var offset4 = subtract(newClientCenter, draggable2.client.borderBox.center);
  return offset4;
};
var getDropImpact = function(_ref) {
  var draggables = _ref.draggables, reason = _ref.reason, lastImpact = _ref.lastImpact, home2 = _ref.home, viewport2 = _ref.viewport, onLiftImpact = _ref.onLiftImpact;
  if (!lastImpact.at || reason !== "DROP") {
    var recomputedHomeImpact = recompute({
      draggables,
      impact: onLiftImpact,
      destination: home2,
      viewport: viewport2,
      forceShouldAnimate: true
    });
    return {
      impact: recomputedHomeImpact,
      didDropInsideDroppable: false
    };
  }
  if (lastImpact.at.type === "REORDER") {
    return {
      impact: lastImpact,
      didDropInsideDroppable: true
    };
  }
  var withoutMovement = _extends({}, lastImpact, {
    displaced: emptyGroups
  });
  return {
    impact: withoutMovement,
    didDropInsideDroppable: true
  };
};
var drop$1 = function(_ref) {
  var getState = _ref.getState, dispatch3 = _ref.dispatch;
  return function(next) {
    return function(action) {
      if (action.type !== "DROP") {
        next(action);
        return;
      }
      var state = getState();
      var reason = action.payload.reason;
      if (state.phase === "COLLECTING") {
        dispatch3(dropPending({
          reason
        }));
        return;
      }
      if (state.phase === "IDLE") {
        return;
      }
      var isWaitingForDrop = state.phase === "DROP_PENDING" && state.isWaiting;
      !!isWaitingForDrop ? true ? invariant2(false, "A DROP action occurred while DROP_PENDING and still waiting") : invariant2(false) : void 0;
      !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? true ? invariant2(false, "Cannot drop in phase: " + state.phase) : invariant2(false) : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;
      var draggable2 = dimensions.draggables[state.critical.draggable.id];
      var _getDropImpact = getDropImpact({
        reason,
        lastImpact: state.impact,
        afterCritical: state.afterCritical,
        onLiftImpact: state.onLiftImpact,
        home: state.dimensions.droppables[state.critical.droppable.id],
        viewport: state.viewport,
        draggables: state.dimensions.draggables
      }), impact = _getDropImpact.impact, didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;
      var destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
      var combine2 = didDropInsideDroppable ? tryGetCombine(impact) : null;
      var source = {
        index: critical.draggable.index,
        droppableId: critical.droppable.id
      };
      var result = {
        draggableId: draggable2.descriptor.id,
        type: draggable2.descriptor.type,
        source,
        reason,
        mode: state.movementMode,
        destination,
        combine: combine2
      };
      var newHomeClientOffset = getNewHomeClientOffset({
        impact,
        draggable: draggable2,
        dimensions,
        viewport: state.viewport,
        afterCritical: state.afterCritical
      });
      var completed = {
        critical: state.critical,
        afterCritical: state.afterCritical,
        result,
        impact
      };
      var isAnimationRequired = !isEqual2(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);
      if (!isAnimationRequired) {
        dispatch3(completeDrop({
          completed
        }));
        return;
      }
      var dropDuration = getDropDuration({
        current: state.current.client.offset,
        destination: newHomeClientOffset,
        reason
      });
      var args = {
        newHomeClientOffset,
        dropDuration,
        completed
      };
      dispatch3(animateDrop(args));
    };
  };
};
var getWindowScroll4 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
function getWindowScrollBinding(update2) {
  return {
    eventName: "scroll",
    options: {
      passive: true,
      capture: false
    },
    fn: function fn4(event) {
      if (event.target !== window && event.target !== window.document) {
        return;
      }
      update2();
    }
  };
}
function getScrollListener(_ref) {
  var onWindowScroll = _ref.onWindowScroll;
  function updateScroll() {
    onWindowScroll(getWindowScroll4());
  }
  var scheduled = raf_schd_esm_default(updateScroll);
  var binding = getWindowScrollBinding(scheduled);
  var unbind = noop2;
  function isActive() {
    return unbind !== noop2;
  }
  function start4() {
    !!isActive() ? true ? invariant2(false, "Cannot start scroll listener when already active") : invariant2(false) : void 0;
    unbind = bindEvents(window, [binding]);
  }
  function stop() {
    !isActive() ? true ? invariant2(false, "Cannot stop scroll listener when not active") : invariant2(false) : void 0;
    scheduled.cancel();
    unbind();
    unbind = noop2;
  }
  return {
    start: start4,
    stop,
    isActive
  };
}
var shouldEnd = function shouldEnd2(action) {
  return action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATE" || action.type === "FLUSH";
};
var scrollListener = function(store) {
  var listener = getScrollListener({
    onWindowScroll: function onWindowScroll(newScroll) {
      store.dispatch(moveByWindowScroll({
        newScroll
      }));
    }
  });
  return function(next) {
    return function(action) {
      if (!listener.isActive() && action.type === "INITIAL_PUBLISH") {
        listener.start();
      }
      if (listener.isActive() && shouldEnd(action)) {
        listener.stop();
      }
      next(action);
    };
  };
};
var getExpiringAnnounce = function(announce) {
  var wasCalled = false;
  var isExpired = false;
  var timeoutId = setTimeout(function() {
    isExpired = true;
  });
  var result = function result2(message) {
    if (wasCalled) {
      true ? warning3("Announcement already made. Not making a second announcement") : void 0;
      return;
    }
    if (isExpired) {
      true ? warning3("\n        Announcements cannot be made asynchronously.\n        Default message has already been announced.\n      ") : void 0;
      return;
    }
    wasCalled = true;
    announce(message);
    clearTimeout(timeoutId);
  };
  result.wasCalled = function() {
    return wasCalled;
  };
  return result;
};
var getAsyncMarshal = function() {
  var entries = [];
  var execute3 = function execute4(timerId) {
    var index2 = findIndex(entries, function(item) {
      return item.timerId === timerId;
    });
    !(index2 !== -1) ? true ? invariant2(false, "Could not find timer") : invariant2(false) : void 0;
    var _entries$splice = entries.splice(index2, 1), entry = _entries$splice[0];
    entry.callback();
  };
  var add3 = function add4(fn4) {
    var timerId = setTimeout(function() {
      return execute3(timerId);
    });
    var entry = {
      timerId,
      callback: fn4
    };
    entries.push(entry);
  };
  var flush3 = function flush4() {
    if (!entries.length) {
      return;
    }
    var shallow = [].concat(entries);
    entries.length = 0;
    shallow.forEach(function(entry) {
      clearTimeout(entry.timerId);
      entry.callback();
    });
  };
  return {
    add: add3,
    flush: flush3
  };
};
var areLocationsEqual = function areLocationsEqual2(first, second) {
  if (first == null && second == null) {
    return true;
  }
  if (first == null || second == null) {
    return false;
  }
  return first.droppableId === second.droppableId && first.index === second.index;
};
var isCombineEqual = function isCombineEqual2(first, second) {
  if (first == null && second == null) {
    return true;
  }
  if (first == null || second == null) {
    return false;
  }
  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
var isCriticalEqual = function isCriticalEqual2(first, second) {
  if (first === second) {
    return true;
  }
  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};
var withTimings = function withTimings2(key, fn4) {
  start2();
  fn4();
  finish();
};
var getDragStart = function getDragStart2(critical, mode) {
  return {
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    },
    mode
  };
};
var execute = function execute2(responder, data, announce, getDefaultMessage) {
  if (!responder) {
    announce(getDefaultMessage(data));
    return;
  }
  var willExpire = getExpiringAnnounce(announce);
  var provided = {
    announce: willExpire
  };
  responder(data, provided);
  if (!willExpire.wasCalled()) {
    announce(getDefaultMessage(data));
  }
};
var getPublisher = function(getResponders, announce) {
  var asyncMarshal = getAsyncMarshal();
  var dragging = null;
  var beforeCapture = function beforeCapture2(draggableId, mode) {
    !!dragging ? true ? invariant2(false, "Cannot fire onBeforeCapture as a drag start has already been published") : invariant2(false) : void 0;
    withTimings("onBeforeCapture", function() {
      var fn4 = getResponders().onBeforeCapture;
      if (fn4) {
        var before = {
          draggableId,
          mode
        };
        fn4(before);
      }
    });
  };
  var beforeStart = function beforeStart2(critical, mode) {
    !!dragging ? true ? invariant2(false, "Cannot fire onBeforeDragStart as a drag start has already been published") : invariant2(false) : void 0;
    withTimings("onBeforeDragStart", function() {
      var fn4 = getResponders().onBeforeDragStart;
      if (fn4) {
        fn4(getDragStart(critical, mode));
      }
    });
  };
  var start4 = function start5(critical, mode) {
    !!dragging ? true ? invariant2(false, "Cannot fire onBeforeDragStart as a drag start has already been published") : invariant2(false) : void 0;
    var data = getDragStart(critical, mode);
    dragging = {
      mode,
      lastCritical: critical,
      lastLocation: data.source,
      lastCombine: null
    };
    asyncMarshal.add(function() {
      withTimings("onDragStart", function() {
        return execute(getResponders().onDragStart, data, announce, preset.onDragStart);
      });
    });
  };
  var update2 = function update3(critical, impact) {
    var location = tryGetDestination(impact);
    var combine2 = tryGetCombine(impact);
    !dragging ? true ? invariant2(false, "Cannot fire onDragMove when onDragStart has not been called") : invariant2(false) : void 0;
    var hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);
    if (hasCriticalChanged) {
      dragging.lastCritical = critical;
    }
    var hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);
    if (hasLocationChanged) {
      dragging.lastLocation = location;
    }
    var hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine2);
    if (hasGroupingChanged) {
      dragging.lastCombine = combine2;
    }
    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
      return;
    }
    var data = _extends({}, getDragStart(critical, dragging.mode), {
      combine: combine2,
      destination: location
    });
    asyncMarshal.add(function() {
      withTimings("onDragUpdate", function() {
        return execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate);
      });
    });
  };
  var flush3 = function flush4() {
    !dragging ? true ? invariant2(false, "Can only flush responders while dragging") : invariant2(false) : void 0;
    asyncMarshal.flush();
  };
  var drop5 = function drop6(result) {
    !dragging ? true ? invariant2(false, "Cannot fire onDragEnd when there is no matching onDragStart") : invariant2(false) : void 0;
    dragging = null;
    withTimings("onDragEnd", function() {
      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
    });
  };
  var abort = function abort2() {
    if (!dragging) {
      return;
    }
    var result = _extends({}, getDragStart(dragging.lastCritical, dragging.mode), {
      combine: null,
      destination: null,
      reason: "CANCEL"
    });
    drop5(result);
  };
  return {
    beforeCapture,
    beforeStart,
    start: start4,
    update: update2,
    flush: flush3,
    drop: drop5,
    abort
  };
};
var responders = function(getResponders, announce) {
  var publisher = getPublisher(getResponders, announce);
  return function(store) {
    return function(next) {
      return function(action) {
        if (action.type === "BEFORE_INITIAL_CAPTURE") {
          publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
          return;
        }
        if (action.type === "INITIAL_PUBLISH") {
          var critical = action.payload.critical;
          publisher.beforeStart(critical, action.payload.movementMode);
          next(action);
          publisher.start(critical, action.payload.movementMode);
          return;
        }
        if (action.type === "DROP_COMPLETE") {
          var result = action.payload.completed.result;
          publisher.flush();
          next(action);
          publisher.drop(result);
          return;
        }
        next(action);
        if (action.type === "FLUSH") {
          publisher.abort();
          return;
        }
        var state = store.getState();
        if (state.phase === "DRAGGING") {
          publisher.update(state.critical, state.impact);
        }
      };
    };
  };
};
var dropAnimationFinish = function(store) {
  return function(next) {
    return function(action) {
      if (action.type !== "DROP_ANIMATION_FINISHED") {
        next(action);
        return;
      }
      var state = store.getState();
      !(state.phase === "DROP_ANIMATING") ? true ? invariant2(false, "Cannot finish a drop animating when no drop is occurring") : invariant2(false) : void 0;
      store.dispatch(completeDrop({
        completed: state.completed
      }));
    };
  };
};
var dropAnimationFlushOnScroll = function(store) {
  var unbind = null;
  var frameId = null;
  function clear() {
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
    if (unbind) {
      unbind();
      unbind = null;
    }
  }
  return function(next) {
    return function(action) {
      if (action.type === "FLUSH" || action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATION_FINISHED") {
        clear();
      }
      next(action);
      if (action.type !== "DROP_ANIMATE") {
        return;
      }
      var binding = {
        eventName: "scroll",
        options: {
          capture: true,
          passive: false,
          once: true
        },
        fn: function flushDropAnimation() {
          var state = store.getState();
          if (state.phase === "DROP_ANIMATING") {
            store.dispatch(dropAnimationFinished());
          }
        }
      };
      frameId = requestAnimationFrame(function() {
        frameId = null;
        unbind = bindEvents(window, [binding]);
      });
    };
  };
};
var dimensionMarshalStopper = function(marshal) {
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "DROP_COMPLETE" || action.type === "FLUSH" || action.type === "DROP_ANIMATE") {
          marshal.stopPublishing();
        }
        next(action);
      };
    };
  };
};
var focus = function(marshal) {
  var isWatching = false;
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "INITIAL_PUBLISH") {
          isWatching = true;
          marshal.tryRecordFocus(action.payload.critical.draggable.id);
          next(action);
          marshal.tryRestoreFocusRecorded();
          return;
        }
        next(action);
        if (!isWatching) {
          return;
        }
        if (action.type === "FLUSH") {
          isWatching = false;
          marshal.tryRestoreFocusRecorded();
          return;
        }
        if (action.type === "DROP_COMPLETE") {
          isWatching = false;
          var result = action.payload.completed.result;
          if (result.combine) {
            marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
          }
          marshal.tryRestoreFocusRecorded();
        }
      };
    };
  };
};
var shouldStop = function shouldStop2(action) {
  return action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATE" || action.type === "FLUSH";
};
var autoScroll = function(autoScroller) {
  return function(store) {
    return function(next) {
      return function(action) {
        if (shouldStop(action)) {
          autoScroller.stop();
          next(action);
          return;
        }
        if (action.type === "INITIAL_PUBLISH") {
          next(action);
          var state = store.getState();
          !(state.phase === "DRAGGING") ? true ? invariant2(false, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : invariant2(false) : void 0;
          autoScroller.start(state);
          return;
        }
        next(action);
        autoScroller.scroll(store.getState());
      };
    };
  };
};
var pendingDrop = function(store) {
  return function(next) {
    return function(action) {
      next(action);
      if (action.type !== "PUBLISH_WHILE_DRAGGING") {
        return;
      }
      var postActionState = store.getState();
      if (postActionState.phase !== "DROP_PENDING") {
        return;
      }
      if (postActionState.isWaiting) {
        return;
      }
      store.dispatch(drop({
        reason: postActionState.reason
      }));
    };
  };
};
var composeEnhancers = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "react-beautiful-dnd"
}) : compose;
var createStore2 = function(_ref) {
  var dimensionMarshal = _ref.dimensionMarshal, focusMarshal = _ref.focusMarshal, styleMarshal = _ref.styleMarshal, getResponders = _ref.getResponders, announce = _ref.announce, autoScroller = _ref.autoScroller;
  return createStore(reducer4, composeEnhancers(applyMiddleware(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift$1(dimensionMarshal), drop$1, dropAnimationFinish, dropAnimationFlushOnScroll, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
};
var clean$1 = function clean4() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};
function createPublisher(_ref) {
  var registry = _ref.registry, callbacks = _ref.callbacks;
  var staging = clean$1();
  var frameId = null;
  var collect = function collect2() {
    if (frameId) {
      return;
    }
    callbacks.collectionStarting();
    frameId = requestAnimationFrame(function() {
      frameId = null;
      start2();
      var _staging = staging, additions = _staging.additions, removals = _staging.removals, modified = _staging.modified;
      var added = Object.keys(additions).map(function(id) {
        return registry.draggable.getById(id).getDimension(origin);
      }).sort(function(a3, b3) {
        return a3.descriptor.index - b3.descriptor.index;
      });
      var updated = Object.keys(modified).map(function(id) {
        var entry = registry.droppable.getById(id);
        var scroll3 = entry.callbacks.getScrollWhileDragging();
        return {
          droppableId: id,
          scroll: scroll3
        };
      });
      var result = {
        additions: added,
        removals: Object.keys(removals),
        modified: updated
      };
      staging = clean$1();
      finish();
      callbacks.publish(result);
    });
  };
  var add3 = function add4(entry) {
    var id = entry.descriptor.id;
    staging.additions[id] = entry;
    staging.modified[entry.descriptor.droppableId] = true;
    if (staging.removals[id]) {
      delete staging.removals[id];
    }
    collect();
  };
  var remove = function remove2(entry) {
    var descriptor = entry.descriptor;
    staging.removals[descriptor.id] = true;
    staging.modified[descriptor.droppableId] = true;
    if (staging.additions[descriptor.id]) {
      delete staging.additions[descriptor.id];
    }
    collect();
  };
  var stop = function stop2() {
    if (!frameId) {
      return;
    }
    cancelAnimationFrame(frameId);
    frameId = null;
    staging = clean$1();
  };
  return {
    add: add3,
    remove,
    stop
  };
}
var getMaxScroll = function(_ref) {
  var scrollHeight = _ref.scrollHeight, scrollWidth = _ref.scrollWidth, height = _ref.height, width = _ref.width;
  var maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  var adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
};
var getDocumentElement2 = function() {
  var doc = document.documentElement;
  !doc ? true ? invariant2(false, "Cannot find document.documentElement") : invariant2(false) : void 0;
  return doc;
};
var getMaxWindowScroll = function() {
  var doc = getDocumentElement2();
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: doc.clientWidth,
    height: doc.clientHeight
  });
  return maxScroll;
};
var getViewport = function() {
  var scroll3 = getWindowScroll4();
  var maxScroll = getMaxWindowScroll();
  var top2 = scroll3.y;
  var left2 = scroll3.x;
  var doc = getDocumentElement2();
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var right2 = left2 + width;
  var bottom2 = top2 + height;
  var frame = getRect({
    top: top2,
    left: left2,
    right: right2,
    bottom: bottom2
  });
  var viewport2 = {
    frame,
    scroll: {
      initial: scroll3,
      current: scroll3,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport2;
};
var getInitialPublish = function(_ref) {
  var critical = _ref.critical, scrollOptions = _ref.scrollOptions, registry = _ref.registry;
  start2();
  var viewport2 = getViewport();
  var windowScroll = viewport2.scroll.current;
  var home2 = critical.droppable;
  var droppables = registry.droppable.getAllByType(home2.type).map(function(entry) {
    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
  });
  var draggables = registry.draggable.getAllByType(critical.draggable.type).map(function(entry) {
    return entry.getDimension(windowScroll);
  });
  var dimensions = {
    draggables: toDraggableMap(draggables),
    droppables: toDroppableMap(droppables)
  };
  finish();
  var result = {
    dimensions,
    critical,
    viewport: viewport2
  };
  return result;
};
function shouldPublishUpdate(registry, dragging, entry) {
  if (entry.descriptor.id === dragging.id) {
    return false;
  }
  if (entry.descriptor.type !== dragging.type) {
    return false;
  }
  var home2 = registry.droppable.getById(entry.descriptor.droppableId);
  if (home2.descriptor.mode !== "virtual") {
    true ? warning3("\n      You are attempting to add or remove a Draggable [id: " + entry.descriptor.id + "]\n      while a drag is occurring. This is only supported for virtual lists.\n\n      See https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/patterns/virtual-lists.md\n    ") : void 0;
    return false;
  }
  return true;
}
var createDimensionMarshal = function(registry, callbacks) {
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publishWhileDragging,
      collectionStarting: callbacks.collectionStarting
    },
    registry
  });
  var updateDroppableIsEnabled3 = function updateDroppableIsEnabled4(id, isEnabled) {
    !registry.droppable.exists(id) ? true ? invariant2(false, "Cannot update is enabled flag of Droppable " + id + " as it is not registered") : invariant2(false) : void 0;
    if (!collection) {
      return;
    }
    callbacks.updateDroppableIsEnabled({
      id,
      isEnabled
    });
  };
  var updateDroppableIsCombineEnabled3 = function updateDroppableIsCombineEnabled4(id, isCombineEnabled) {
    if (!collection) {
      return;
    }
    !registry.droppable.exists(id) ? true ? invariant2(false, "Cannot update isCombineEnabled flag of Droppable " + id + " as it is not registered") : invariant2(false) : void 0;
    callbacks.updateDroppableIsCombineEnabled({
      id,
      isCombineEnabled
    });
  };
  var updateDroppableScroll3 = function updateDroppableScroll4(id, newScroll) {
    if (!collection) {
      return;
    }
    !registry.droppable.exists(id) ? true ? invariant2(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : invariant2(false) : void 0;
    callbacks.updateDroppableScroll({
      id,
      newScroll
    });
  };
  var scrollDroppable2 = function scrollDroppable3(id, change) {
    if (!collection) {
      return;
    }
    registry.droppable.getById(id).callbacks.scroll(change);
  };
  var stopPublishing = function stopPublishing2() {
    if (!collection) {
      return;
    }
    publisher.stop();
    var home2 = collection.critical.droppable;
    registry.droppable.getAllByType(home2.type).forEach(function(entry) {
      return entry.callbacks.dragStopped();
    });
    collection.unsubscribe();
    collection = null;
  };
  var subscriber = function subscriber2(event) {
    !collection ? true ? invariant2(false, "Should only be subscribed when a collection is occurring") : invariant2(false) : void 0;
    var dragging = collection.critical.draggable;
    if (event.type === "ADDITION") {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.add(event.value);
      }
    }
    if (event.type === "REMOVAL") {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.remove(event.value);
      }
    }
  };
  var startPublishing = function startPublishing2(request) {
    !!collection ? true ? invariant2(false, "Cannot start capturing critical dimensions as there is already a collection") : invariant2(false) : void 0;
    var entry = registry.draggable.getById(request.draggableId);
    var home2 = registry.droppable.getById(entry.descriptor.droppableId);
    var critical = {
      draggable: entry.descriptor,
      droppable: home2.descriptor
    };
    var unsubscribe = registry.subscribe(subscriber);
    collection = {
      critical,
      unsubscribe
    };
    return getInitialPublish({
      critical,
      registry,
      scrollOptions: request.scrollOptions
    });
  };
  var marshal = {
    updateDroppableIsEnabled: updateDroppableIsEnabled3,
    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled3,
    scrollDroppable: scrollDroppable2,
    updateDroppableScroll: updateDroppableScroll3,
    startPublishing,
    stopPublishing
  };
  return marshal;
};
var canStartDrag = function(state, id) {
  if (state.phase === "IDLE") {
    return true;
  }
  if (state.phase !== "DROP_ANIMATING") {
    return false;
  }
  if (state.completed.result.draggableId === id) {
    return false;
  }
  return state.completed.result.reason === "DROP";
};
var scrollWindow = function(change) {
  window.scrollBy(change.x, change.y);
};
var getScrollableDroppables = memoize_one_esm_default(function(droppables) {
  return toDroppableList(droppables).filter(function(droppable2) {
    if (!droppable2.isEnabled) {
      return false;
    }
    if (!droppable2.frame) {
      return false;
    }
    return true;
  });
});
var getScrollableDroppableOver = function getScrollableDroppableOver2(target, droppables) {
  var maybe = find(getScrollableDroppables(droppables), function(droppable2) {
    !droppable2.frame ? true ? invariant2(false, "Invalid result") : invariant2(false) : void 0;
    return isPositionInFrame(droppable2.frame.pageMarginBox)(target);
  });
  return maybe;
};
var getBestScrollableDroppable = function(_ref) {
  var center = _ref.center, destination = _ref.destination, droppables = _ref.droppables;
  if (destination) {
    var _dimension = droppables[destination];
    if (!_dimension.frame) {
      return null;
    }
    return _dimension;
  }
  var dimension = getScrollableDroppableOver(center, droppables);
  return dimension;
};
var config = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: function ease(percentage) {
    return Math.pow(percentage, 2);
  },
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  }
};
var getDistanceThresholds = function(container, axis) {
  var startScrollingFrom = container[axis.size] * config.startFromPercentage;
  var maxScrollValueAt = container[axis.size] * config.maxScrollAtPercentage;
  var thresholds = {
    startScrollingFrom,
    maxScrollValueAt
  };
  return thresholds;
};
var getPercentage = function(_ref) {
  var startOfRange = _ref.startOfRange, endOfRange = _ref.endOfRange, current = _ref.current;
  var range = endOfRange - startOfRange;
  if (range === 0) {
    true ? warning3("\n      Detected distance range of 0 in the fluid auto scroller\n      This is unexpected and would cause a divide by 0 issue.\n      Not allowing an auto scroll\n    ") : void 0;
    return 0;
  }
  var currentInRange = current - startOfRange;
  var percentage = currentInRange / range;
  return percentage;
};
var minScroll = 1;
var getValueFromDistance = function(distanceToEdge, thresholds) {
  if (distanceToEdge > thresholds.startScrollingFrom) {
    return 0;
  }
  if (distanceToEdge <= thresholds.maxScrollValueAt) {
    return config.maxPixelScroll;
  }
  if (distanceToEdge === thresholds.startScrollingFrom) {
    return minScroll;
  }
  var percentageFromMaxScrollValueAt = getPercentage({
    startOfRange: thresholds.maxScrollValueAt,
    endOfRange: thresholds.startScrollingFrom,
    current: distanceToEdge
  });
  var percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
  var scroll3 = config.maxPixelScroll * config.ease(percentageFromStartScrollingFrom);
  return Math.ceil(scroll3);
};
var accelerateAt = config.durationDampening.accelerateAt;
var stopAt = config.durationDampening.stopDampeningAt;
var dampenValueByTime = function(proposedScroll, dragStartTime) {
  var startOfRange = dragStartTime;
  var endOfRange = stopAt;
  var now = Date.now();
  var runTime = now - startOfRange;
  if (runTime >= stopAt) {
    return proposedScroll;
  }
  if (runTime < accelerateAt) {
    return minScroll;
  }
  var betweenAccelerateAtAndStopAtPercentage = getPercentage({
    startOfRange: accelerateAt,
    endOfRange,
    current: runTime
  });
  var scroll3 = proposedScroll * config.ease(betweenAccelerateAtAndStopAtPercentage);
  return Math.ceil(scroll3);
};
var getValue = function(_ref) {
  var distanceToEdge = _ref.distanceToEdge, thresholds = _ref.thresholds, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll3 = getValueFromDistance(distanceToEdge, thresholds);
  if (scroll3 === 0) {
    return 0;
  }
  if (!shouldUseTimeDampening) {
    return scroll3;
  }
  return Math.max(dampenValueByTime(scroll3, dragStartTime), minScroll);
};
var getScrollOnAxis = function(_ref) {
  var container = _ref.container, distanceToEdges = _ref.distanceToEdges, dragStartTime = _ref.dragStartTime, axis = _ref.axis, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var thresholds = getDistanceThresholds(container, axis);
  var isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];
  if (isCloserToEnd) {
    return getValue({
      distanceToEdge: distanceToEdges[axis.end],
      thresholds,
      dragStartTime,
      shouldUseTimeDampening
    });
  }
  return -1 * getValue({
    distanceToEdge: distanceToEdges[axis.start],
    thresholds,
    dragStartTime,
    shouldUseTimeDampening
  });
};
var adjustForSizeLimits = function(_ref) {
  var container = _ref.container, subject = _ref.subject, proposedScroll = _ref.proposedScroll;
  var isTooBigVertically = subject.height > container.height;
  var isTooBigHorizontally = subject.width > container.width;
  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }
  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }
  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
};
var clean$2 = apply(function(value) {
  return value === 0 ? 0 : value;
});
var getScroll = function(_ref) {
  var dragStartTime = _ref.dragStartTime, container = _ref.container, subject = _ref.subject, center = _ref.center, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var distanceToEdges = {
    top: center.y - container.top,
    right: container.right - center.x,
    bottom: container.bottom - center.y,
    left: center.x - container.left
  };
  var y2 = getScrollOnAxis({
    container,
    distanceToEdges,
    dragStartTime,
    axis: vertical,
    shouldUseTimeDampening
  });
  var x2 = getScrollOnAxis({
    container,
    distanceToEdges,
    dragStartTime,
    axis: horizontal,
    shouldUseTimeDampening
  });
  var required2 = clean$2({
    x: x2,
    y: y2
  });
  if (isEqual2(required2, origin)) {
    return null;
  }
  var limited = adjustForSizeLimits({
    container,
    subject,
    proposedScroll: required2
  });
  if (!limited) {
    return null;
  }
  return isEqual2(limited, origin) ? null : limited;
};
var smallestSigned = apply(function(value) {
  if (value === 0) {
    return 0;
  }
  return value > 0 ? 1 : -1;
});
var getOverlap = function() {
  var getRemainder = function getRemainder2(target, max2) {
    if (target < 0) {
      return target;
    }
    if (target > max2) {
      return target - max2;
    }
    return 0;
  };
  return function(_ref) {
    var current = _ref.current, max2 = _ref.max, change = _ref.change;
    var targetScroll = add(current, change);
    var overlap = {
      x: getRemainder(targetScroll.x, max2.x),
      y: getRemainder(targetScroll.y, max2.y)
    };
    if (isEqual2(overlap, origin)) {
      return null;
    }
    return overlap;
  };
}();
var canPartiallyScroll = function canPartiallyScroll2(_ref2) {
  var rawMax = _ref2.max, current = _ref2.current, change = _ref2.change;
  var max2 = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  var smallestChange = smallestSigned(change);
  var overlap = getOverlap({
    max: max2,
    current,
    change: smallestChange
  });
  if (!overlap) {
    return true;
  }
  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }
  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }
  return false;
};
var canScrollWindow = function canScrollWindow2(viewport2, change) {
  return canPartiallyScroll({
    current: viewport2.scroll.current,
    max: viewport2.scroll.max,
    change
  });
};
var getWindowOverlap = function getWindowOverlap2(viewport2, change) {
  if (!canScrollWindow(viewport2, change)) {
    return null;
  }
  var max2 = viewport2.scroll.max;
  var current = viewport2.scroll.current;
  return getOverlap({
    current,
    max: max2,
    change
  });
};
var canScrollDroppable = function canScrollDroppable2(droppable2, change) {
  var frame = droppable2.frame;
  if (!frame) {
    return false;
  }
  return canPartiallyScroll({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change
  });
};
var getDroppableOverlap = function getDroppableOverlap2(droppable2, change) {
  var frame = droppable2.frame;
  if (!frame) {
    return null;
  }
  if (!canScrollDroppable(droppable2, change)) {
    return null;
  }
  return getOverlap({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change
  });
};
var getWindowScrollChange = function(_ref) {
  var viewport2 = _ref.viewport, subject = _ref.subject, center = _ref.center, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll3 = getScroll({
    dragStartTime,
    container: viewport2.frame,
    subject,
    center,
    shouldUseTimeDampening
  });
  return scroll3 && canScrollWindow(viewport2, scroll3) ? scroll3 : null;
};
var getDroppableScrollChange = function(_ref) {
  var droppable2 = _ref.droppable, subject = _ref.subject, center = _ref.center, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var frame = droppable2.frame;
  if (!frame) {
    return null;
  }
  var scroll3 = getScroll({
    dragStartTime,
    container: frame.pageMarginBox,
    subject,
    center,
    shouldUseTimeDampening
  });
  return scroll3 && canScrollDroppable(droppable2, scroll3) ? scroll3 : null;
};
var scroll$1 = function(_ref) {
  var state = _ref.state, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening, scrollWindow2 = _ref.scrollWindow, scrollDroppable2 = _ref.scrollDroppable;
  var center = state.current.page.borderBoxCenter;
  var draggable2 = state.dimensions.draggables[state.critical.draggable.id];
  var subject = draggable2.page.marginBox;
  if (state.isWindowScrollAllowed) {
    var viewport2 = state.viewport;
    var _change = getWindowScrollChange({
      dragStartTime,
      viewport: viewport2,
      subject,
      center,
      shouldUseTimeDampening
    });
    if (_change) {
      scrollWindow2(_change);
      return;
    }
  }
  var droppable2 = getBestScrollableDroppable({
    center,
    destination: whatIsDraggedOver(state.impact),
    droppables: state.dimensions.droppables
  });
  if (!droppable2) {
    return;
  }
  var change = getDroppableScrollChange({
    dragStartTime,
    droppable: droppable2,
    subject,
    center,
    shouldUseTimeDampening
  });
  if (change) {
    scrollDroppable2(droppable2.descriptor.id, change);
  }
};
var createFluidScroller = function(_ref) {
  var scrollWindow2 = _ref.scrollWindow, scrollDroppable2 = _ref.scrollDroppable;
  var scheduleWindowScroll = raf_schd_esm_default(scrollWindow2);
  var scheduleDroppableScroll = raf_schd_esm_default(scrollDroppable2);
  var dragging = null;
  var tryScroll = function tryScroll2(state) {
    !dragging ? true ? invariant2(false, "Cannot fluid scroll if not dragging") : invariant2(false) : void 0;
    var _dragging = dragging, shouldUseTimeDampening = _dragging.shouldUseTimeDampening, dragStartTime = _dragging.dragStartTime;
    scroll$1({
      state,
      scrollWindow: scheduleWindowScroll,
      scrollDroppable: scheduleDroppableScroll,
      dragStartTime,
      shouldUseTimeDampening
    });
  };
  var start$1 = function start$12(state) {
    start2();
    !!dragging ? true ? invariant2(false, "Cannot start auto scrolling when already started") : invariant2(false) : void 0;
    var dragStartTime = Date.now();
    var wasScrollNeeded = false;
    var fakeScrollCallback = function fakeScrollCallback2() {
      wasScrollNeeded = true;
    };
    scroll$1({
      state,
      dragStartTime: 0,
      shouldUseTimeDampening: false,
      scrollWindow: fakeScrollCallback,
      scrollDroppable: fakeScrollCallback
    });
    dragging = {
      dragStartTime,
      shouldUseTimeDampening: wasScrollNeeded
    };
    finish();
    if (wasScrollNeeded) {
      tryScroll(state);
    }
  };
  var stop = function stop2() {
    if (!dragging) {
      return;
    }
    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
    dragging = null;
  };
  return {
    start: start$1,
    stop,
    scroll: tryScroll
  };
};
var createJumpScroller = function(_ref) {
  var move3 = _ref.move, scrollDroppable2 = _ref.scrollDroppable, scrollWindow2 = _ref.scrollWindow;
  var moveByOffset = function moveByOffset2(state, offset4) {
    var client = add(state.current.client.selection, offset4);
    move3({
      client
    });
  };
  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan2(droppable2, change) {
    if (!canScrollDroppable(droppable2, change)) {
      return change;
    }
    var overlap = getDroppableOverlap(droppable2, change);
    if (!overlap) {
      scrollDroppable2(droppable2.descriptor.id, change);
      return null;
    }
    var whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable2(droppable2.descriptor.id, whatTheDroppableCanScroll);
    var remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };
  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan2(isWindowScrollAllowed, viewport2, change) {
    if (!isWindowScrollAllowed) {
      return change;
    }
    if (!canScrollWindow(viewport2, change)) {
      return change;
    }
    var overlap = getWindowOverlap(viewport2, change);
    if (!overlap) {
      scrollWindow2(change);
      return null;
    }
    var whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow2(whatTheWindowCanScroll);
    var remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };
  var jumpScroller = function jumpScroller2(state) {
    var request = state.scrollJumpRequest;
    if (!request) {
      return;
    }
    var destination = whatIsDraggedOver(state.impact);
    !destination ? true ? invariant2(false, "Cannot perform a jump scroll when there is no destination") : invariant2(false) : void 0;
    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);
    if (!droppableRemainder) {
      return;
    }
    var viewport2 = state.viewport;
    var windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport2, droppableRemainder);
    if (!windowRemainder) {
      return;
    }
    moveByOffset(state, windowRemainder);
  };
  return jumpScroller;
};
var createAutoScroller = function(_ref) {
  var scrollDroppable2 = _ref.scrollDroppable, scrollWindow2 = _ref.scrollWindow, move3 = _ref.move;
  var fluidScroller = createFluidScroller({
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2
  });
  var jumpScroll = createJumpScroller({
    move: move3,
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2
  });
  var scroll3 = function scroll4(state) {
    if (state.phase !== "DRAGGING") {
      return;
    }
    if (state.movementMode === "FLUID") {
      fluidScroller.scroll(state);
      return;
    }
    if (!state.scrollJumpRequest) {
      return;
    }
    jumpScroll(state);
  };
  var scroller = {
    scroll: scroll3,
    start: fluidScroller.start,
    stop: fluidScroller.stop
  };
  return scroller;
};
var prefix$1 = "data-rbd";
var dragHandle = function() {
  var base = prefix$1 + "-drag-handle";
  return {
    base,
    draggableId: base + "-draggable-id",
    contextId: base + "-context-id"
  };
}();
var draggable = function() {
  var base = prefix$1 + "-draggable";
  return {
    base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var droppable = function() {
  var base = prefix$1 + "-droppable";
  return {
    base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var scrollContainer = {
  contextId: prefix$1 + "-scroll-container-context-id"
};
var makeGetSelector = function makeGetSelector2(context) {
  return function(attribute) {
    return "[" + attribute + '="' + context + '"]';
  };
};
var getStyles = function getStyles2(rules, property) {
  return rules.map(function(rule) {
    var value = rule.styles[property];
    if (!value) {
      return "";
    }
    return rule.selector + " { " + value + " }";
  }).join(" ");
};
var noPointerEvents = "pointer-events: none;";
var getStyles$1 = function(contextId) {
  var getSelector2 = makeGetSelector(contextId);
  var dragHandle$1 = function() {
    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
    return {
      selector: getSelector2(dragHandle.contextId),
      styles: {
        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
        resting: grabCursor,
        dragging: noPointerEvents,
        dropAnimating: grabCursor
      }
    };
  }();
  var draggable$1 = function() {
    var transition = "\n      transition: " + transitions.outOfTheWay + ";\n    ";
    return {
      selector: getSelector2(draggable.contextId),
      styles: {
        dragging: transition,
        dropAnimating: transition,
        userCancel: transition
      }
    };
  }();
  var droppable$1 = {
    selector: getSelector2(droppable.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  };
  var body = {
    selector: "body",
    styles: {
      dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
    }
  };
  var rules = [draggable$1, dragHandle$1, droppable$1, body];
  return {
    always: getStyles(rules, "always"),
    resting: getStyles(rules, "resting"),
    dragging: getStyles(rules, "dragging"),
    dropAnimating: getStyles(rules, "dropAnimating"),
    userCancel: getStyles(rules, "userCancel")
  };
};
var useIsomorphicLayoutEffect3 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? useLayoutEffect3 : useEffect10;
var getHead = function getHead2() {
  var head = document.querySelector("head");
  !head ? true ? invariant2(false, "Cannot find the head to append a style to") : invariant2(false) : void 0;
  return head;
};
var createStyleEl = function createStyleEl2(nonce) {
  var el = document.createElement("style");
  if (nonce) {
    el.setAttribute("nonce", nonce);
  }
  el.type = "text/css";
  return el;
};
function useStyleMarshal(contextId, nonce) {
  var styles = useMemo6(function() {
    return getStyles$1(contextId);
  }, [contextId]);
  var alwaysRef = useRef5(null);
  var dynamicRef = useRef5(null);
  var setDynamicStyle = useCallback2(memoize_one_esm_default(function(proposed) {
    var el = dynamicRef.current;
    !el ? true ? invariant2(false, "Cannot set dynamic style element if it is not set") : invariant2(false) : void 0;
    el.textContent = proposed;
  }), []);
  var setAlwaysStyle = useCallback2(function(proposed) {
    var el = alwaysRef.current;
    !el ? true ? invariant2(false, "Cannot set dynamic style element if it is not set") : invariant2(false) : void 0;
    el.textContent = proposed;
  }, []);
  useIsomorphicLayoutEffect3(function() {
    !(!alwaysRef.current && !dynamicRef.current) ? true ? invariant2(false, "style elements already mounted") : invariant2(false) : void 0;
    var always = createStyleEl(nonce);
    var dynamic = createStyleEl(nonce);
    alwaysRef.current = always;
    dynamicRef.current = dynamic;
    always.setAttribute(prefix$1 + "-always", contextId);
    dynamic.setAttribute(prefix$1 + "-dynamic", contextId);
    getHead().appendChild(always);
    getHead().appendChild(dynamic);
    setAlwaysStyle(styles.always);
    setDynamicStyle(styles.resting);
    return function() {
      var remove = function remove2(ref2) {
        var current = ref2.current;
        !current ? true ? invariant2(false, "Cannot unmount ref as it is not set") : invariant2(false) : void 0;
        getHead().removeChild(current);
        ref2.current = null;
      };
      remove(alwaysRef);
      remove(dynamicRef);
    };
  }, [nonce, setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, contextId]);
  var dragging = useCallback2(function() {
    return setDynamicStyle(styles.dragging);
  }, [setDynamicStyle, styles.dragging]);
  var dropping = useCallback2(function(reason) {
    if (reason === "DROP") {
      setDynamicStyle(styles.dropAnimating);
      return;
    }
    setDynamicStyle(styles.userCancel);
  }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
  var resting = useCallback2(function() {
    if (!dynamicRef.current) {
      return;
    }
    setDynamicStyle(styles.resting);
  }, [setDynamicStyle, styles.resting]);
  var marshal = useMemo6(function() {
    return {
      dragging,
      dropping,
      resting
    };
  }, [dragging, dropping, resting]);
  return marshal;
}
var getWindowFromEl = function(el) {
  return el && el.ownerDocument ? el.ownerDocument.defaultView : window;
};
function isHtmlElement(el) {
  return el instanceof getWindowFromEl(el).HTMLElement;
}
function findDragHandle(contextId, draggableId) {
  var selector = "[" + dragHandle.contextId + '="' + contextId + '"]';
  var possible = toArray(document.querySelectorAll(selector));
  if (!possible.length) {
    true ? warning3('Unable to find any drag handles in the context "' + contextId + '"') : void 0;
    return null;
  }
  var handle = find(possible, function(el) {
    return el.getAttribute(dragHandle.draggableId) === draggableId;
  });
  if (!handle) {
    true ? warning3('Unable to find drag handle with id "' + draggableId + '" as no handle with a matching id was found') : void 0;
    return null;
  }
  if (!isHtmlElement(handle)) {
    true ? warning3("drag handle needs to be a HTMLElement") : void 0;
    return null;
  }
  return handle;
}
function useFocusMarshal(contextId) {
  var entriesRef = useRef5({});
  var recordRef = useRef5(null);
  var restoreFocusFrameRef = useRef5(null);
  var isMountedRef = useRef5(false);
  var register = useCallback2(function register2(id, focus2) {
    var entry = {
      id,
      focus: focus2
    };
    entriesRef.current[id] = entry;
    return function unregister() {
      var entries = entriesRef.current;
      var current = entries[id];
      if (current !== entry) {
        delete entries[id];
      }
    };
  }, []);
  var tryGiveFocus = useCallback2(function tryGiveFocus2(tryGiveFocusTo) {
    var handle = findDragHandle(contextId, tryGiveFocusTo);
    if (handle && handle !== document.activeElement) {
      handle.focus();
    }
  }, [contextId]);
  var tryShiftRecord = useCallback2(function tryShiftRecord2(previous, redirectTo) {
    if (recordRef.current === previous) {
      recordRef.current = redirectTo;
    }
  }, []);
  var tryRestoreFocusRecorded = useCallback2(function tryRestoreFocusRecorded2() {
    if (restoreFocusFrameRef.current) {
      return;
    }
    if (!isMountedRef.current) {
      return;
    }
    restoreFocusFrameRef.current = requestAnimationFrame(function() {
      restoreFocusFrameRef.current = null;
      var record = recordRef.current;
      if (record) {
        tryGiveFocus(record);
      }
    });
  }, [tryGiveFocus]);
  var tryRecordFocus = useCallback2(function tryRecordFocus2(id) {
    recordRef.current = null;
    var focused = document.activeElement;
    if (!focused) {
      return;
    }
    if (focused.getAttribute(dragHandle.draggableId) !== id) {
      return;
    }
    recordRef.current = id;
  }, []);
  useIsomorphicLayoutEffect3(function() {
    isMountedRef.current = true;
    return function clearFrameOnUnmount() {
      isMountedRef.current = false;
      var frameId = restoreFocusFrameRef.current;
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);
  var marshal = useMemo6(function() {
    return {
      register,
      tryRecordFocus,
      tryRestoreFocusRecorded,
      tryShiftRecord
    };
  }, [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord]);
  return marshal;
}
function createRegistry() {
  var entries = {
    draggables: {},
    droppables: {}
  };
  var subscribers = [];
  function subscribe(cb) {
    subscribers.push(cb);
    return function unsubscribe() {
      var index2 = subscribers.indexOf(cb);
      if (index2 === -1) {
        return;
      }
      subscribers.splice(index2, 1);
    };
  }
  function notify2(event) {
    if (subscribers.length) {
      subscribers.forEach(function(cb) {
        return cb(event);
      });
    }
  }
  function findDraggableById(id) {
    return entries.draggables[id] || null;
  }
  function getDraggableById(id) {
    var entry = findDraggableById(id);
    !entry ? true ? invariant2(false, "Cannot find draggable entry with id [" + id + "]") : invariant2(false) : void 0;
    return entry;
  }
  var draggableAPI = {
    register: function register(entry) {
      entries.draggables[entry.descriptor.id] = entry;
      notify2({
        type: "ADDITION",
        value: entry
      });
    },
    update: function update2(entry, last) {
      var current = entries.draggables[last.descriptor.id];
      if (!current) {
        return;
      }
      if (current.uniqueId !== entry.uniqueId) {
        return;
      }
      delete entries.draggables[last.descriptor.id];
      entries.draggables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var draggableId = entry.descriptor.id;
      var current = findDraggableById(draggableId);
      if (!current) {
        return;
      }
      if (entry.uniqueId !== current.uniqueId) {
        return;
      }
      delete entries.draggables[draggableId];
      notify2({
        type: "REMOVAL",
        value: entry
      });
    },
    getById: getDraggableById,
    findById: findDraggableById,
    exists: function exists(id) {
      return Boolean(findDraggableById(id));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.draggables).filter(function(entry) {
        return entry.descriptor.type === type;
      });
    }
  };
  function findDroppableById(id) {
    return entries.droppables[id] || null;
  }
  function getDroppableById(id) {
    var entry = findDroppableById(id);
    !entry ? true ? invariant2(false, "Cannot find droppable entry with id [" + id + "]") : invariant2(false) : void 0;
    return entry;
  }
  var droppableAPI = {
    register: function register(entry) {
      entries.droppables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var current = findDroppableById(entry.descriptor.id);
      if (!current) {
        return;
      }
      if (entry.uniqueId !== current.uniqueId) {
        return;
      }
      delete entries.droppables[entry.descriptor.id];
    },
    getById: getDroppableById,
    findById: findDroppableById,
    exists: function exists(id) {
      return Boolean(findDroppableById(id));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.droppables).filter(function(entry) {
        return entry.descriptor.type === type;
      });
    }
  };
  function clean5() {
    entries.draggables = {};
    entries.droppables = {};
    subscribers.length = 0;
  }
  return {
    draggable: draggableAPI,
    droppable: droppableAPI,
    subscribe,
    clean: clean5
  };
}
function useRegistry() {
  var registry = useMemo6(createRegistry, []);
  useEffect10(function() {
    return function unmount() {
      requestAnimationFrame(registry.clean);
    };
  }, [registry]);
  return registry;
}
var StoreContext = React17.createContext(null);
var getBodyElement = function() {
  var body = document.body;
  !body ? true ? invariant2(false, "Cannot find document.body") : invariant2(false) : void 0;
  return body;
};
var visuallyHidden = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
var getId = function getId2(contextId) {
  return "rbd-announcement-" + contextId;
};
function useAnnouncer(contextId) {
  var id = useMemo6(function() {
    return getId(contextId);
  }, [contextId]);
  var ref2 = useRef5(null);
  useEffect10(function setup() {
    var el = document.createElement("div");
    ref2.current = el;
    el.id = id;
    el.setAttribute("aria-live", "assertive");
    el.setAttribute("aria-atomic", "true");
    _extends(el.style, visuallyHidden);
    getBodyElement().appendChild(el);
    return function cleanup() {
      setTimeout(function remove() {
        var body = getBodyElement();
        if (body.contains(el)) {
          body.removeChild(el);
        }
        if (el === ref2.current) {
          ref2.current = null;
        }
      });
    };
  }, [id]);
  var announce = useCallback2(function(message) {
    var el = ref2.current;
    if (el) {
      el.textContent = message;
      return;
    }
    true ? warning3('\n      A screen reader message was trying to be announced but it was unable to do so.\n      This can occur if you unmount your <DragDropContext /> in your onDragEnd.\n      Consider calling provided.announce() before the unmount so that the instruction will\n      not be lost for users relying on a screen reader.\n\n      Message not passed to screen reader:\n\n      "' + message + '"\n    ') : void 0;
  }, []);
  return announce;
}
var count = 0;
var defaults = {
  separator: "::"
};
function useUniqueId(prefix3, options) {
  if (options === void 0) {
    options = defaults;
  }
  return useMemo6(function() {
    return "" + prefix3 + options.separator + count++;
  }, [options.separator, prefix3]);
}
function getElementId(_ref) {
  var contextId = _ref.contextId, uniqueId = _ref.uniqueId;
  return "rbd-hidden-text-" + contextId + "-" + uniqueId;
}
function useHiddenTextElement(_ref2) {
  var contextId = _ref2.contextId, text = _ref2.text;
  var uniqueId = useUniqueId("hidden-text", {
    separator: "-"
  });
  var id = useMemo6(function() {
    return getElementId({
      contextId,
      uniqueId
    });
  }, [uniqueId, contextId]);
  useEffect10(function mount() {
    var el = document.createElement("div");
    el.id = id;
    el.textContent = text;
    el.style.display = "none";
    getBodyElement().appendChild(el);
    return function unmount() {
      var body = getBodyElement();
      if (body.contains(el)) {
        body.removeChild(el);
      }
    };
  }, [id, text]);
  return id;
}
var AppContext = React17.createContext(null);
var peerDependencies = {
  react: "^16.8.5 || ^17.0.0",
  "react-dom": "^16.8.5 || ^17.0.0"
};
var semver = /(\d+)\.(\d+)\.(\d+)/;
var getVersion = function getVersion2(value) {
  var result = semver.exec(value);
  !(result != null) ? true ? invariant2(false, "Unable to parse React version " + value) : invariant2(false) : void 0;
  var major = Number(result[1]);
  var minor = Number(result[2]);
  var patch3 = Number(result[3]);
  return {
    major,
    minor,
    patch: patch3,
    raw: value
  };
};
var isSatisfied = function isSatisfied2(expected, actual) {
  if (actual.major > expected.major) {
    return true;
  }
  if (actual.major < expected.major) {
    return false;
  }
  if (actual.minor > expected.minor) {
    return true;
  }
  if (actual.minor < expected.minor) {
    return false;
  }
  return actual.patch >= expected.patch;
};
var checkReactVersion = function(peerDepValue, actualValue) {
  var peerDep = getVersion(peerDepValue);
  var actual = getVersion(actualValue);
  if (isSatisfied(peerDep, actual)) {
    return;
  }
  true ? warning3("\n    React version: [" + actual.raw + "]\n    does not satisfy expected peer dependency version: [" + peerDep.raw + "]\n\n    This can result in run time bugs, and even fatal crashes\n  ") : void 0;
};
var suffix = "\n  We expect a html5 doctype: <!doctype html>\n  This is to ensure consistent browser layout and measurement\n\n  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md\n";
var checkDoctype = function(doc) {
  var doctype = doc.doctype;
  if (!doctype) {
    true ? warning3("\n      No <!doctype html> found.\n\n      " + suffix + "\n    ") : void 0;
    return;
  }
  if (doctype.name.toLowerCase() !== "html") {
    true ? warning3("\n      Unexpected <!doctype> found: (" + doctype.name + ")\n\n      " + suffix + "\n    ") : void 0;
  }
  if (doctype.publicId !== "") {
    true ? warning3("\n      Unexpected <!doctype> publicId found: (" + doctype.publicId + ")\n      A html5 doctype does not have a publicId\n\n      " + suffix + "\n    ") : void 0;
  }
};
function useDev(useHook) {
  if (true) {
    useHook();
  }
}
function useDevSetupWarning(fn4, inputs) {
  useDev(function() {
    useEffect10(function() {
      try {
        fn4();
      } catch (e2) {
        error("\n          A setup problem was encountered.\n\n          > " + e2.message + "\n        ");
      }
    }, inputs);
  });
}
function useStartupValidation() {
  useDevSetupWarning(function() {
    checkReactVersion(peerDependencies.react, React17.version);
    checkDoctype(document);
  }, []);
}
function usePrevious(current) {
  var ref2 = useRef5(current);
  useEffect10(function() {
    ref2.current = current;
  });
  return ref2;
}
function create() {
  var lock = null;
  function isClaimed() {
    return Boolean(lock);
  }
  function isActive(value) {
    return value === lock;
  }
  function claim(abandon) {
    !!lock ? true ? invariant2(false, "Cannot claim lock as it is already claimed") : invariant2(false) : void 0;
    var newLock = {
      abandon
    };
    lock = newLock;
    return newLock;
  }
  function release() {
    !lock ? true ? invariant2(false, "Cannot release lock when there is no lock") : invariant2(false) : void 0;
    lock = null;
  }
  function tryAbandon() {
    if (lock) {
      lock.abandon();
      release();
    }
  }
  return {
    isClaimed,
    isActive,
    claim,
    release,
    tryAbandon
  };
}
var tab = 9;
var enter2 = 13;
var escape = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end2 = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;
var _preventedKeys;
var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter2] = true, _preventedKeys[tab] = true, _preventedKeys);
var preventStandardKeyEvents = function(event) {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
};
var supportedEventName = function() {
  var base = "visibilitychange";
  if (typeof document === "undefined") {
    return base;
  }
  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
  var supported = find(candidates, function(eventName) {
    return "on" + eventName in document;
  });
  return supported || base;
}();
var primaryButton = 0;
var sloppyClickThreshold = 5;
function isSloppyClickThresholdExceeded(original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
}
var idle$1 = {
  type: "IDLE"
};
function getCaptureBindings(_ref) {
  var cancel = _ref.cancel, completed = _ref.completed, getPhase = _ref.getPhase, setPhase = _ref.setPhase;
  return [{
    eventName: "mousemove",
    fn: function fn4(event) {
      var button = event.button, clientX = event.clientX, clientY = event.clientY;
      if (button !== primaryButton) {
        return;
      }
      var point = {
        x: clientX,
        y: clientY
      };
      var phase = getPhase();
      if (phase.type === "DRAGGING") {
        event.preventDefault();
        phase.actions.move(point);
        return;
      }
      !(phase.type === "PENDING") ? true ? invariant2(false, "Cannot be IDLE") : invariant2(false) : void 0;
      var pending = phase.point;
      if (!isSloppyClickThresholdExceeded(pending, point)) {
        return;
      }
      event.preventDefault();
      var actions = phase.actions.fluidLift(point);
      setPhase({
        type: "DRAGGING",
        actions
      });
    }
  }, {
    eventName: "mouseup",
    fn: function fn4(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: "mousedown",
    fn: function fn4(event) {
      if (getPhase().type === "DRAGGING") {
        event.preventDefault();
      }
      cancel();
    }
  }, {
    eventName: "keydown",
    fn: function fn4(event) {
      var phase = getPhase();
      if (phase.type === "PENDING") {
        cancel();
        return;
      }
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }
      preventStandardKeyEvents(event);
    }
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "scroll",
    options: {
      passive: true,
      capture: false
    },
    fn: function fn4() {
      if (getPhase().type === "PENDING") {
        cancel();
      }
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: function fn4(event) {
      var phase = getPhase();
      !(phase.type !== "IDLE") ? true ? invariant2(false, "Unexpected phase") : invariant2(false) : void 0;
      if (phase.actions.shouldRespectForcePress()) {
        cancel();
        return;
      }
      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useMouseSensor(api) {
  var phaseRef = useRef5(idle$1);
  var unbindEventsRef = useRef5(noop2);
  var startCaptureBinding = useMemo6(function() {
    return {
      eventName: "mousedown",
      fn: function onMouseDown(event) {
        if (event.defaultPrevented) {
          return;
        }
        if (event.button !== primaryButton) {
          return;
        }
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!actions) {
          return;
        }
        event.preventDefault();
        var point = {
          x: event.clientX,
          y: event.clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var preventForcePressBinding = useMemo6(function() {
    return {
      eventName: "webkitmouseforcewillbegin",
      fn: function fn4(event) {
        if (event.defaultPrevented) {
          return;
        }
        var id = api.findClosestDraggableId(event);
        if (!id) {
          return;
        }
        var options = api.findOptionsForDraggable(id);
        if (!options) {
          return;
        }
        if (options.shouldRespectForcePress) {
          return;
        }
        if (!api.canGetLock(id)) {
          return;
        }
        event.preventDefault();
      }
    };
  }, [api]);
  var listenForCapture = useCallback2(function listenForCapture2() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
  }, [preventForcePressBinding, startCaptureBinding]);
  var stop = useCallback2(function() {
    var current = phaseRef.current;
    if (current.type === "IDLE") {
      return;
    }
    phaseRef.current = idle$1;
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture]);
  var cancel = useCallback2(function() {
    var phase = phaseRef.current;
    stop();
    if (phase.type === "DRAGGING") {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }
    if (phase.type === "PENDING") {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = useCallback2(function bindCapturingEvents2() {
    var options = {
      capture: true,
      passive: false
    };
    var bindings = getCaptureBindings({
      cancel,
      completed: stop,
      getPhase: function getPhase() {
        return phaseRef.current;
      },
      setPhase: function setPhase(phase) {
        phaseRef.current = phase;
      }
    });
    unbindEventsRef.current = bindEvents(window, bindings, options);
  }, [cancel, stop]);
  var startPendingDrag = useCallback2(function startPendingDrag2(actions, point) {
    !(phaseRef.current.type === "IDLE") ? true ? invariant2(false, "Expected to move from IDLE to PENDING drag") : invariant2(false) : void 0;
    phaseRef.current = {
      type: "PENDING",
      point,
      actions
    };
    bindCapturingEvents();
  }, [bindCapturingEvents]);
  useIsomorphicLayoutEffect3(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}
var _scrollJumpKeys;
function noop$1() {
}
var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end2] = true, _scrollJumpKeys);
function getDraggingBindings(actions, stop) {
  function cancel() {
    stop();
    actions.cancel();
  }
  function drop5() {
    stop();
    actions.drop();
  }
  return [{
    eventName: "keydown",
    fn: function fn4(event) {
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }
      if (event.keyCode === space) {
        event.preventDefault();
        drop5();
        return;
      }
      if (event.keyCode === arrowDown) {
        event.preventDefault();
        actions.moveDown();
        return;
      }
      if (event.keyCode === arrowUp) {
        event.preventDefault();
        actions.moveUp();
        return;
      }
      if (event.keyCode === arrowRight) {
        event.preventDefault();
        actions.moveRight();
        return;
      }
      if (event.keyCode === arrowLeft) {
        event.preventDefault();
        actions.moveLeft();
        return;
      }
      if (scrollJumpKeys[event.keyCode]) {
        event.preventDefault();
        return;
      }
      preventStandardKeyEvents(event);
    }
  }, {
    eventName: "mousedown",
    fn: cancel
  }, {
    eventName: "mouseup",
    fn: cancel
  }, {
    eventName: "click",
    fn: cancel
  }, {
    eventName: "touchstart",
    fn: cancel
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "wheel",
    fn: cancel,
    options: {
      passive: true
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useKeyboardSensor(api) {
  var unbindEventsRef = useRef5(noop$1);
  var startCaptureBinding = useMemo6(function() {
    return {
      eventName: "keydown",
      fn: function onKeyDown(event) {
        if (event.defaultPrevented) {
          return;
        }
        if (event.keyCode !== space) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var preDrag = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!preDrag) {
          return;
        }
        event.preventDefault();
        var isCapturing = true;
        var actions = preDrag.snapLift();
        unbindEventsRef.current();
        function stop() {
          !isCapturing ? true ? invariant2(false, "Cannot stop capturing a keyboard drag when not capturing") : invariant2(false) : void 0;
          isCapturing = false;
          unbindEventsRef.current();
          listenForCapture();
        }
        unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
          capture: true,
          passive: false
        });
      }
    };
  }, [api]);
  var listenForCapture = useCallback2(function tryStartCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  useIsomorphicLayoutEffect3(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}
var idle$2 = {
  type: "IDLE"
};
var timeForLongPress = 120;
var forcePressThreshold = 0.15;
function getWindowBindings(_ref) {
  var cancel = _ref.cancel, getPhase = _ref.getPhase;
  return [{
    eventName: "orientationchange",
    fn: cancel
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "contextmenu",
    fn: function fn4(event) {
      event.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: function fn4(event) {
      if (getPhase().type !== "DRAGGING") {
        cancel();
        return;
      }
      if (event.keyCode === escape) {
        event.preventDefault();
      }
      cancel();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function getHandleBindings(_ref2) {
  var cancel = _ref2.cancel, completed = _ref2.completed, getPhase = _ref2.getPhase;
  return [{
    eventName: "touchmove",
    options: {
      capture: false
    },
    fn: function fn4(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      phase.hasMoved = true;
      var _event$touches$ = event.touches[0], clientX = _event$touches$.clientX, clientY = _event$touches$.clientY;
      var point = {
        x: clientX,
        y: clientY
      };
      event.preventDefault();
      phase.actions.move(point);
    }
  }, {
    eventName: "touchend",
    fn: function fn4(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: "touchcancel",
    fn: function fn4(event) {
      if (getPhase().type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      cancel();
    }
  }, {
    eventName: "touchforcechange",
    fn: function fn4(event) {
      var phase = getPhase();
      !(phase.type !== "IDLE") ? true ? invariant2(false) : invariant2(false) : void 0;
      var touch = event.touches[0];
      if (!touch) {
        return;
      }
      var isForcePress = touch.force >= forcePressThreshold;
      if (!isForcePress) {
        return;
      }
      var shouldRespect = phase.actions.shouldRespectForcePress();
      if (phase.type === "PENDING") {
        if (shouldRespect) {
          cancel();
        }
        return;
      }
      if (shouldRespect) {
        if (phase.hasMoved) {
          event.preventDefault();
          return;
        }
        cancel();
        return;
      }
      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useTouchSensor(api) {
  var phaseRef = useRef5(idle$2);
  var unbindEventsRef = useRef5(noop2);
  var getPhase = useCallback2(function getPhase2() {
    return phaseRef.current;
  }, []);
  var setPhase = useCallback2(function setPhase2(phase) {
    phaseRef.current = phase;
  }, []);
  var startCaptureBinding = useMemo6(function() {
    return {
      eventName: "touchstart",
      fn: function onTouchStart(event) {
        if (event.defaultPrevented) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!actions) {
          return;
        }
        var touch = event.touches[0];
        var clientX = touch.clientX, clientY = touch.clientY;
        var point = {
          x: clientX,
          y: clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var listenForCapture = useCallback2(function listenForCapture2() {
    var options = {
      capture: true,
      passive: false
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  var stop = useCallback2(function() {
    var current = phaseRef.current;
    if (current.type === "IDLE") {
      return;
    }
    if (current.type === "PENDING") {
      clearTimeout(current.longPressTimerId);
    }
    setPhase(idle$2);
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture, setPhase]);
  var cancel = useCallback2(function() {
    var phase = phaseRef.current;
    stop();
    if (phase.type === "DRAGGING") {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }
    if (phase.type === "PENDING") {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = useCallback2(function bindCapturingEvents2() {
    var options = {
      capture: true,
      passive: false
    };
    var args = {
      cancel,
      completed: stop,
      getPhase
    };
    var unbindTarget = bindEvents(window, getHandleBindings(args), options);
    var unbindWindow = bindEvents(window, getWindowBindings(args), options);
    unbindEventsRef.current = function unbindAll() {
      unbindTarget();
      unbindWindow();
    };
  }, [cancel, getPhase, stop]);
  var startDragging = useCallback2(function startDragging2() {
    var phase = getPhase();
    !(phase.type === "PENDING") ? true ? invariant2(false, "Cannot start dragging from phase " + phase.type) : invariant2(false) : void 0;
    var actions = phase.actions.fluidLift(phase.point);
    setPhase({
      type: "DRAGGING",
      actions,
      hasMoved: false
    });
  }, [getPhase, setPhase]);
  var startPendingDrag = useCallback2(function startPendingDrag2(actions, point) {
    !(getPhase().type === "IDLE") ? true ? invariant2(false, "Expected to move from IDLE to PENDING drag") : invariant2(false) : void 0;
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    setPhase({
      type: "PENDING",
      point,
      actions,
      longPressTimerId
    });
    bindCapturingEvents();
  }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
  useIsomorphicLayoutEffect3(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
      var phase = getPhase();
      if (phase.type === "PENDING") {
        clearTimeout(phase.longPressTimerId);
        setPhase(idle$2);
      }
    };
  }, [getPhase, listenForCapture, setPhase]);
  useIsomorphicLayoutEffect3(function webkitHack() {
    var unbind = bindEvents(window, [{
      eventName: "touchmove",
      fn: function fn4() {
      },
      options: {
        capture: false,
        passive: false
      }
    }]);
    return unbind;
  }, []);
}
function useValidateSensorHooks(sensorHooks) {
  useDev(function() {
    var previousRef = usePrevious(sensorHooks);
    useDevSetupWarning(function() {
      !(previousRef.current.length === sensorHooks.length) ? true ? invariant2(false, "Cannot change the amount of sensor hooks after mounting") : invariant2(false) : void 0;
    });
  });
}
var interactiveTagNames = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
};
function isAnInteractiveElement(parent, current) {
  if (current == null) {
    return false;
  }
  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);
  if (hasAnInteractiveTag) {
    return true;
  }
  var attribute = current.getAttribute("contenteditable");
  if (attribute === "true" || attribute === "") {
    return true;
  }
  if (current === parent) {
    return false;
  }
  return isAnInteractiveElement(parent, current.parentElement);
}
function isEventInInteractiveElement(draggable2, event) {
  var target = event.target;
  if (!isHtmlElement(target)) {
    return false;
  }
  return isAnInteractiveElement(draggable2, target);
}
var getBorderBoxCenterPosition = function(el) {
  return getRect(el.getBoundingClientRect()).center;
};
function isElement3(el) {
  return el instanceof getWindowFromEl(el).Element;
}
var supportedMatchesName = function() {
  var base = "matches";
  if (typeof document === "undefined") {
    return base;
  }
  var candidates = [base, "msMatchesSelector", "webkitMatchesSelector"];
  var value = find(candidates, function(name) {
    return name in Element.prototype;
  });
  return value || base;
}();
function closestPonyfill(el, selector) {
  if (el == null) {
    return null;
  }
  if (el[supportedMatchesName](selector)) {
    return el;
  }
  return closestPonyfill(el.parentElement, selector);
}
function closest$1(el, selector) {
  if (el.closest) {
    return el.closest(selector);
  }
  return closestPonyfill(el, selector);
}
function getSelector(contextId) {
  return "[" + dragHandle.contextId + '="' + contextId + '"]';
}
function findClosestDragHandleFromEvent(contextId, event) {
  var target = event.target;
  if (!isElement3(target)) {
    true ? warning3("event.target must be a Element") : void 0;
    return null;
  }
  var selector = getSelector(contextId);
  var handle = closest$1(target, selector);
  if (!handle) {
    return null;
  }
  if (!isHtmlElement(handle)) {
    true ? warning3("drag handle must be a HTMLElement") : void 0;
    return null;
  }
  return handle;
}
function tryGetClosestDraggableIdFromEvent(contextId, event) {
  var handle = findClosestDragHandleFromEvent(contextId, event);
  if (!handle) {
    return null;
  }
  return handle.getAttribute(dragHandle.draggableId);
}
function findDraggable(contextId, draggableId) {
  var selector = "[" + draggable.contextId + '="' + contextId + '"]';
  var possible = toArray(document.querySelectorAll(selector));
  var draggable$1 = find(possible, function(el) {
    return el.getAttribute(draggable.id) === draggableId;
  });
  if (!draggable$1) {
    return null;
  }
  if (!isHtmlElement(draggable$1)) {
    true ? warning3("Draggable element is not a HTMLElement") : void 0;
    return null;
  }
  return draggable$1;
}
function preventDefault(event) {
  event.preventDefault();
}
function _isActive(_ref) {
  var expected = _ref.expected, phase = _ref.phase, isLockActive = _ref.isLockActive, shouldWarn = _ref.shouldWarn;
  if (!isLockActive()) {
    if (shouldWarn) {
      true ? warning3("\n        Cannot perform action.\n        The sensor no longer has an action lock.\n\n        Tips:\n\n        - Throw away your action handlers when forceStop() is called\n        - Check actions.isActive() if you really need to\n      ") : void 0;
    }
    return false;
  }
  if (expected !== phase) {
    if (shouldWarn) {
      true ? warning3("\n        Cannot perform action.\n        The actions you used belong to an outdated phase\n\n        Current phase: " + expected + "\n        You called an action from outdated phase: " + phase + "\n\n        Tips:\n\n        - Do not use preDragActions actions after calling preDragActions.lift()\n      ") : void 0;
    }
    return false;
  }
  return true;
}
function canStart(_ref2) {
  var lockAPI = _ref2.lockAPI, store = _ref2.store, registry = _ref2.registry, draggableId = _ref2.draggableId;
  if (lockAPI.isClaimed()) {
    return false;
  }
  var entry = registry.draggable.findById(draggableId);
  if (!entry) {
    true ? warning3("Unable to find draggable with id: " + draggableId) : void 0;
    return false;
  }
  if (!entry.options.isEnabled) {
    return false;
  }
  if (!canStartDrag(store.getState(), draggableId)) {
    return false;
  }
  return true;
}
function tryStart(_ref3) {
  var lockAPI = _ref3.lockAPI, contextId = _ref3.contextId, store = _ref3.store, registry = _ref3.registry, draggableId = _ref3.draggableId, forceSensorStop = _ref3.forceSensorStop, sourceEvent = _ref3.sourceEvent;
  var shouldStart = canStart({
    lockAPI,
    store,
    registry,
    draggableId
  });
  if (!shouldStart) {
    return null;
  }
  var entry = registry.draggable.getById(draggableId);
  var el = findDraggable(contextId, entry.descriptor.id);
  if (!el) {
    true ? warning3("Unable to find draggable element with id: " + draggableId) : void 0;
    return null;
  }
  if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
    return null;
  }
  var lock = lockAPI.claim(forceSensorStop || noop2);
  var phase = "PRE_DRAG";
  function getShouldRespectForcePress() {
    return entry.options.shouldRespectForcePress;
  }
  function isLockActive() {
    return lockAPI.isActive(lock);
  }
  function tryDispatch(expected, getAction) {
    if (_isActive({
      expected,
      phase,
      isLockActive,
      shouldWarn: true
    })) {
      store.dispatch(getAction());
    }
  }
  var tryDispatchWhenDragging = tryDispatch.bind(null, "DRAGGING");
  function lift$12(args) {
    function completed() {
      lockAPI.release();
      phase = "COMPLETED";
    }
    if (phase !== "PRE_DRAG") {
      completed();
      !(phase === "PRE_DRAG") ? true ? invariant2(false, "Cannot lift in phase " + phase) : invariant2(false) : void 0;
    }
    store.dispatch(lift(args.liftActionArgs));
    phase = "DRAGGING";
    function finish3(reason, options) {
      if (options === void 0) {
        options = {
          shouldBlockNextClick: false
        };
      }
      args.cleanup();
      if (options.shouldBlockNextClick) {
        var unbind = bindEvents(window, [{
          eventName: "click",
          fn: preventDefault,
          options: {
            once: true,
            passive: false,
            capture: true
          }
        }]);
        setTimeout(unbind);
      }
      completed();
      store.dispatch(drop({
        reason
      }));
    }
    return _extends({
      isActive: function isActive() {
        return _isActive({
          expected: "DRAGGING",
          phase,
          isLockActive,
          shouldWarn: false
        });
      },
      shouldRespectForcePress: getShouldRespectForcePress,
      drop: function drop5(options) {
        return finish3("DROP", options);
      },
      cancel: function cancel(options) {
        return finish3("CANCEL", options);
      }
    }, args.actions);
  }
  function fluidLift(clientSelection) {
    var move$1 = raf_schd_esm_default(function(client) {
      tryDispatchWhenDragging(function() {
        return move({
          client
        });
      });
    });
    var api = lift$12({
      liftActionArgs: {
        id: draggableId,
        clientSelection,
        movementMode: "FLUID"
      },
      cleanup: function cleanup() {
        return move$1.cancel();
      },
      actions: {
        move: move$1
      }
    });
    return _extends({}, api, {
      move: move$1
    });
  }
  function snapLift() {
    var actions = {
      moveUp: function moveUp$1() {
        return tryDispatchWhenDragging(moveUp);
      },
      moveRight: function moveRight$1() {
        return tryDispatchWhenDragging(moveRight);
      },
      moveDown: function moveDown$1() {
        return tryDispatchWhenDragging(moveDown);
      },
      moveLeft: function moveLeft$1() {
        return tryDispatchWhenDragging(moveLeft);
      }
    };
    return lift$12({
      liftActionArgs: {
        id: draggableId,
        clientSelection: getBorderBoxCenterPosition(el),
        movementMode: "SNAP"
      },
      cleanup: noop2,
      actions
    });
  }
  function abortPreDrag() {
    var shouldRelease = _isActive({
      expected: "PRE_DRAG",
      phase,
      isLockActive,
      shouldWarn: true
    });
    if (shouldRelease) {
      lockAPI.release();
    }
  }
  var preDrag = {
    isActive: function isActive() {
      return _isActive({
        expected: "PRE_DRAG",
        phase,
        isLockActive,
        shouldWarn: false
      });
    },
    shouldRespectForcePress: getShouldRespectForcePress,
    fluidLift,
    snapLift,
    abort: abortPreDrag
  };
  return preDrag;
}
var defaultSensors = [useMouseSensor, useKeyboardSensor, useTouchSensor];
function useSensorMarshal(_ref4) {
  var contextId = _ref4.contextId, store = _ref4.store, registry = _ref4.registry, customSensors = _ref4.customSensors, enableDefaultSensors = _ref4.enableDefaultSensors;
  var useSensors = [].concat(enableDefaultSensors ? defaultSensors : [], customSensors || []);
  var lockAPI = useState9(function() {
    return create();
  })[0];
  var tryAbandonLock = useCallback2(function tryAbandonLock2(previous, current) {
    if (previous.isDragging && !current.isDragging) {
      lockAPI.tryAbandon();
    }
  }, [lockAPI]);
  useIsomorphicLayoutEffect3(function listenToStore() {
    var previous = store.getState();
    var unsubscribe = store.subscribe(function() {
      var current = store.getState();
      tryAbandonLock(previous, current);
      previous = current;
    });
    return unsubscribe;
  }, [lockAPI, store, tryAbandonLock]);
  useIsomorphicLayoutEffect3(function() {
    return lockAPI.tryAbandon;
  }, [lockAPI.tryAbandon]);
  var canGetLock = useCallback2(function(draggableId) {
    return canStart({
      lockAPI,
      registry,
      store,
      draggableId
    });
  }, [lockAPI, registry, store]);
  var tryGetLock = useCallback2(function(draggableId, forceStop, options) {
    return tryStart({
      lockAPI,
      registry,
      contextId,
      store,
      draggableId,
      forceSensorStop: forceStop,
      sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
    });
  }, [contextId, lockAPI, registry, store]);
  var findClosestDraggableId = useCallback2(function(event) {
    return tryGetClosestDraggableIdFromEvent(contextId, event);
  }, [contextId]);
  var findOptionsForDraggable = useCallback2(function(id) {
    var entry = registry.draggable.findById(id);
    return entry ? entry.options : null;
  }, [registry.draggable]);
  var tryReleaseLock = useCallback2(function tryReleaseLock2() {
    if (!lockAPI.isClaimed()) {
      return;
    }
    lockAPI.tryAbandon();
    if (store.getState().phase !== "IDLE") {
      store.dispatch(flush());
    }
  }, [lockAPI, store]);
  var isLockClaimed = useCallback2(lockAPI.isClaimed, [lockAPI]);
  var api = useMemo6(function() {
    return {
      canGetLock,
      tryGetLock,
      findClosestDraggableId,
      findOptionsForDraggable,
      tryReleaseLock,
      isLockClaimed
    };
  }, [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
  useValidateSensorHooks(useSensors);
  for (var i3 = 0; i3 < useSensors.length; i3++) {
    useSensors[i3](api);
  }
}
var createResponders = function createResponders2(props) {
  return {
    onBeforeCapture: props.onBeforeCapture,
    onBeforeDragStart: props.onBeforeDragStart,
    onDragStart: props.onDragStart,
    onDragEnd: props.onDragEnd,
    onDragUpdate: props.onDragUpdate
  };
};
function getStore(lazyRef) {
  !lazyRef.current ? true ? invariant2(false, "Could not find store from lazy ref") : invariant2(false) : void 0;
  return lazyRef.current;
}
function App(props) {
  var contextId = props.contextId, setCallbacks = props.setCallbacks, sensors = props.sensors, nonce = props.nonce, dragHandleUsageInstructions2 = props.dragHandleUsageInstructions;
  var lazyStoreRef = useRef5(null);
  useStartupValidation();
  var lastPropsRef = usePrevious(props);
  var getResponders = useCallback2(function() {
    return createResponders(lastPropsRef.current);
  }, [lastPropsRef]);
  var announce = useAnnouncer(contextId);
  var dragHandleUsageInstructionsId = useHiddenTextElement({
    contextId,
    text: dragHandleUsageInstructions2
  });
  var styleMarshal = useStyleMarshal(contextId, nonce);
  var lazyDispatch = useCallback2(function(action) {
    getStore(lazyStoreRef).dispatch(action);
  }, []);
  var marshalCallbacks = useMemo6(function() {
    return bindActionCreators({
      publishWhileDragging,
      updateDroppableScroll,
      updateDroppableIsEnabled,
      updateDroppableIsCombineEnabled,
      collectionStarting
    }, lazyDispatch);
  }, [lazyDispatch]);
  var registry = useRegistry();
  var dimensionMarshal = useMemo6(function() {
    return createDimensionMarshal(registry, marshalCallbacks);
  }, [registry, marshalCallbacks]);
  var autoScroller = useMemo6(function() {
    return createAutoScroller(_extends({
      scrollWindow,
      scrollDroppable: dimensionMarshal.scrollDroppable
    }, bindActionCreators({
      move
    }, lazyDispatch)));
  }, [dimensionMarshal.scrollDroppable, lazyDispatch]);
  var focusMarshal = useFocusMarshal(contextId);
  var store = useMemo6(function() {
    return createStore2({
      announce,
      autoScroller,
      dimensionMarshal,
      focusMarshal,
      getResponders,
      styleMarshal
    });
  }, [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);
  if (true) {
    if (lazyStoreRef.current && lazyStoreRef.current !== store) {
      true ? warning3("unexpected store change") : void 0;
    }
  }
  lazyStoreRef.current = store;
  var tryResetStore = useCallback2(function() {
    var current = getStore(lazyStoreRef);
    var state = current.getState();
    if (state.phase !== "IDLE") {
      current.dispatch(flush());
    }
  }, []);
  var isDragging = useCallback2(function() {
    var state = getStore(lazyStoreRef).getState();
    return state.isDragging || state.phase === "DROP_ANIMATING";
  }, []);
  var appCallbacks = useMemo6(function() {
    return {
      isDragging,
      tryAbort: tryResetStore
    };
  }, [isDragging, tryResetStore]);
  setCallbacks(appCallbacks);
  var getCanLift = useCallback2(function(id) {
    return canStartDrag(getStore(lazyStoreRef).getState(), id);
  }, []);
  var getIsMovementAllowed = useCallback2(function() {
    return isMovementAllowed(getStore(lazyStoreRef).getState());
  }, []);
  var appContext = useMemo6(function() {
    return {
      marshal: dimensionMarshal,
      focus: focusMarshal,
      contextId,
      canLift: getCanLift,
      isMovementAllowed: getIsMovementAllowed,
      dragHandleUsageInstructionsId,
      registry
    };
  }, [contextId, dimensionMarshal, dragHandleUsageInstructionsId, focusMarshal, getCanLift, getIsMovementAllowed, registry]);
  useSensorMarshal({
    contextId,
    store,
    registry,
    customSensors: sensors,
    enableDefaultSensors: props.enableDefaultSensors !== false
  });
  useEffect10(function() {
    return tryResetStore;
  }, [tryResetStore]);
  return React17.createElement(AppContext.Provider, {
    value: appContext
  }, React17.createElement(Provider_default, {
    context: StoreContext,
    store
  }, props.children));
}
var count$1 = 0;
function useInstanceCount() {
  return useMemo6(function() {
    return "" + count$1++;
  }, []);
}
function DragDropContext(props) {
  var contextId = useInstanceCount();
  var dragHandleUsageInstructions2 = props.dragHandleUsageInstructions || preset.dragHandleUsageInstructions;
  return React17.createElement(ErrorBoundary, null, function(setCallbacks) {
    return React17.createElement(App, {
      nonce: props.nonce,
      contextId,
      setCallbacks,
      dragHandleUsageInstructions: dragHandleUsageInstructions2,
      enableDefaultSensors: props.enableDefaultSensors,
      sensors: props.sensors,
      onBeforeCapture: props.onBeforeCapture,
      onBeforeDragStart: props.onBeforeDragStart,
      onDragStart: props.onDragStart,
      onDragUpdate: props.onDragUpdate,
      onDragEnd: props.onDragEnd
    }, props.children);
  });
}
var isEqual$1 = function isEqual4(base) {
  return function(value) {
    return base === value;
  };
};
var isScroll = isEqual$1("scroll");
var isAuto = isEqual$1("auto");
var isVisible$1 = isEqual$1("visible");
var isEither = function isEither2(overflow, fn4) {
  return fn4(overflow.overflowX) || fn4(overflow.overflowY);
};
var isBoth = function isBoth2(overflow, fn4) {
  return fn4(overflow.overflowX) && fn4(overflow.overflowY);
};
var isElementScrollable = function isElementScrollable2(el) {
  var style2 = window.getComputedStyle(el);
  var overflow = {
    overflowX: style2.overflowX,
    overflowY: style2.overflowY
  };
  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};
var isBodyScrollable = function isBodyScrollable2() {
  if (false) {
    return false;
  }
  var body = getBodyElement();
  var html = document.documentElement;
  !html ? true ? invariant2(false) : invariant2(false) : void 0;
  if (!isElementScrollable(body)) {
    return false;
  }
  var htmlStyle = window.getComputedStyle(html);
  var htmlOverflow = {
    overflowX: htmlStyle.overflowX,
    overflowY: htmlStyle.overflowY
  };
  if (isBoth(htmlOverflow, isVisible$1)) {
    return false;
  }
  true ? warning3("\n    We have detected that your <body> element might be a scroll container.\n    We have found no reliable way of detecting whether the <body> element is a scroll container.\n    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)\n\n    Because we cannot determine if the <body> is a scroll container, and generally it is not one,\n    we will be treating the <body> as *not* a scroll container\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/how-we-detect-scroll-containers.md\n  ") : void 0;
  return false;
};
var getClosestScrollable = function getClosestScrollable2(el) {
  if (el == null) {
    return null;
  }
  if (el === document.body) {
    return isBodyScrollable() ? el : null;
  }
  if (el === document.documentElement) {
    return null;
  }
  if (!isElementScrollable(el)) {
    return getClosestScrollable2(el.parentElement);
  }
  return el;
};
var checkForNestedScrollContainers = function(scrollable) {
  if (!scrollable) {
    return;
  }
  var anotherScrollParent = getClosestScrollable(scrollable.parentElement);
  if (!anotherScrollParent) {
    return;
  }
  true ? warning3("\n    Droppable: unsupported nested scroll container detected.\n    A Droppable can only have one scroll parent (which can be itself)\n    Nested scroll containers are currently not supported.\n\n    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131\n  ") : void 0;
};
var getScroll$1 = function(el) {
  return {
    x: el.scrollLeft,
    y: el.scrollTop
  };
};
var getIsFixed = function getIsFixed2(el) {
  if (!el) {
    return false;
  }
  var style2 = window.getComputedStyle(el);
  if (style2.position === "fixed") {
    return true;
  }
  return getIsFixed2(el.parentElement);
};
var getEnv = function(start4) {
  var closestScrollable = getClosestScrollable(start4);
  var isFixedOnPage = getIsFixed(start4);
  return {
    closestScrollable,
    isFixedOnPage
  };
};
var getDroppableDimension = function(_ref) {
  var descriptor = _ref.descriptor, isEnabled = _ref.isEnabled, isCombineEnabled = _ref.isCombineEnabled, isFixedOnPage = _ref.isFixedOnPage, direction = _ref.direction, client = _ref.client, page = _ref.page, closest3 = _ref.closest;
  var frame = function() {
    if (!closest3) {
      return null;
    }
    var scrollSize = closest3.scrollSize, frameClient = closest3.client;
    var maxScroll = getMaxScroll({
      scrollHeight: scrollSize.scrollHeight,
      scrollWidth: scrollSize.scrollWidth,
      height: frameClient.paddingBox.height,
      width: frameClient.paddingBox.width
    });
    return {
      pageMarginBox: closest3.page.marginBox,
      frameClient,
      scrollSize,
      shouldClipSubject: closest3.shouldClipSubject,
      scroll: {
        initial: closest3.scroll,
        current: closest3.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  }();
  var axis = direction === "vertical" ? vertical : horizontal;
  var subject = getSubject({
    page,
    withPlaceholder: null,
    axis,
    frame
  });
  var dimension = {
    descriptor,
    isCombineEnabled,
    isFixedOnPage,
    axis,
    isEnabled,
    client,
    page,
    frame,
    subject
  };
  return dimension;
};
var getClient = function getClient2(targetRef, closestScrollable) {
  var base = getBox(targetRef);
  if (!closestScrollable) {
    return base;
  }
  if (targetRef !== closestScrollable) {
    return base;
  }
  var top2 = base.paddingBox.top - closestScrollable.scrollTop;
  var left2 = base.paddingBox.left - closestScrollable.scrollLeft;
  var bottom2 = top2 + closestScrollable.scrollHeight;
  var right2 = left2 + closestScrollable.scrollWidth;
  var paddingBox = {
    top: top2,
    right: right2,
    bottom: bottom2,
    left: left2
  };
  var borderBox = expand(paddingBox, base.border);
  var client = createBox({
    borderBox,
    margin: base.margin,
    border: base.border,
    padding: base.padding
  });
  return client;
};
var getDimension = function(_ref) {
  var ref2 = _ref.ref, descriptor = _ref.descriptor, env = _ref.env, windowScroll = _ref.windowScroll, direction = _ref.direction, isDropDisabled = _ref.isDropDisabled, isCombineEnabled = _ref.isCombineEnabled, shouldClipSubject = _ref.shouldClipSubject;
  var closestScrollable = env.closestScrollable;
  var client = getClient(ref2, closestScrollable);
  var page = withScroll(client, windowScroll);
  var closest3 = function() {
    if (!closestScrollable) {
      return null;
    }
    var frameClient = getBox(closestScrollable);
    var scrollSize = {
      scrollHeight: closestScrollable.scrollHeight,
      scrollWidth: closestScrollable.scrollWidth
    };
    return {
      client: frameClient,
      page: withScroll(frameClient, windowScroll),
      scroll: getScroll$1(closestScrollable),
      scrollSize,
      shouldClipSubject
    };
  }();
  var dimension = getDroppableDimension({
    descriptor,
    isEnabled: !isDropDisabled,
    isCombineEnabled,
    isFixedOnPage: env.isFixedOnPage,
    direction,
    client,
    page,
    closest: closest3
  });
  return dimension;
};
var immediate = {
  passive: false
};
var delayed = {
  passive: true
};
var getListenerOptions = function(options) {
  return options.shouldPublishImmediately ? immediate : delayed;
};
function useRequiredContext(Context) {
  var result = useContext8(Context);
  !result ? true ? invariant2(false, "Could not find required context") : invariant2(false) : void 0;
  return result;
}
var getClosestScrollableFromDrag = function getClosestScrollableFromDrag2(dragging) {
  return dragging && dragging.env.closestScrollable || null;
};
function useDroppablePublisher(args) {
  var whileDraggingRef = useRef5(null);
  var appContext = useRequiredContext(AppContext);
  var uniqueId = useUniqueId("droppable");
  var registry = appContext.registry, marshal = appContext.marshal;
  var previousRef = usePrevious(args);
  var descriptor = useMemo6(function() {
    return {
      id: args.droppableId,
      type: args.type,
      mode: args.mode
    };
  }, [args.droppableId, args.mode, args.type]);
  var publishedDescriptorRef = useRef5(descriptor);
  var memoizedUpdateScroll = useMemo6(function() {
    return memoize_one_esm_default(function(x2, y2) {
      !whileDraggingRef.current ? true ? invariant2(false, "Can only update scroll when dragging") : invariant2(false) : void 0;
      var scroll4 = {
        x: x2,
        y: y2
      };
      marshal.updateDroppableScroll(descriptor.id, scroll4);
    });
  }, [descriptor.id, marshal]);
  var getClosestScroll = useCallback2(function() {
    var dragging = whileDraggingRef.current;
    if (!dragging || !dragging.env.closestScrollable) {
      return origin;
    }
    return getScroll$1(dragging.env.closestScrollable);
  }, []);
  var updateScroll = useCallback2(function() {
    var scroll4 = getClosestScroll();
    memoizedUpdateScroll(scroll4.x, scroll4.y);
  }, [getClosestScroll, memoizedUpdateScroll]);
  var scheduleScrollUpdate = useMemo6(function() {
    return raf_schd_esm_default(updateScroll);
  }, [updateScroll]);
  var onClosestScroll = useCallback2(function() {
    var dragging = whileDraggingRef.current;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !(dragging && closest3) ? true ? invariant2(false, "Could not find scroll options while scrolling") : invariant2(false) : void 0;
    var options = dragging.scrollOptions;
    if (options.shouldPublishImmediately) {
      updateScroll();
      return;
    }
    scheduleScrollUpdate();
  }, [scheduleScrollUpdate, updateScroll]);
  var getDimensionAndWatchScroll = useCallback2(function(windowScroll, options) {
    !!whileDraggingRef.current ? true ? invariant2(false, "Cannot collect a droppable while a drag is occurring") : invariant2(false) : void 0;
    var previous = previousRef.current;
    var ref2 = previous.getDroppableRef();
    !ref2 ? true ? invariant2(false, "Cannot collect without a droppable ref") : invariant2(false) : void 0;
    var env = getEnv(ref2);
    var dragging = {
      ref: ref2,
      descriptor,
      env,
      scrollOptions: options
    };
    whileDraggingRef.current = dragging;
    var dimension = getDimension({
      ref: ref2,
      descriptor,
      env,
      windowScroll,
      direction: previous.direction,
      isDropDisabled: previous.isDropDisabled,
      isCombineEnabled: previous.isCombineEnabled,
      shouldClipSubject: !previous.ignoreContainerClipping
    });
    var scrollable = env.closestScrollable;
    if (scrollable) {
      scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
      scrollable.addEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
      if (true) {
        checkForNestedScrollContainers(scrollable);
      }
    }
    return dimension;
  }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
  var getScrollWhileDragging = useCallback2(function() {
    var dragging = whileDraggingRef.current;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !(dragging && closest3) ? true ? invariant2(false, "Can only recollect Droppable client for Droppables that have a scroll container") : invariant2(false) : void 0;
    return getScroll$1(closest3);
  }, []);
  var dragStopped = useCallback2(function() {
    var dragging = whileDraggingRef.current;
    !dragging ? true ? invariant2(false, "Cannot stop drag when no active drag") : invariant2(false) : void 0;
    var closest3 = getClosestScrollableFromDrag(dragging);
    whileDraggingRef.current = null;
    if (!closest3) {
      return;
    }
    scheduleScrollUpdate.cancel();
    closest3.removeAttribute(scrollContainer.contextId);
    closest3.removeEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
  }, [onClosestScroll, scheduleScrollUpdate]);
  var scroll3 = useCallback2(function(change) {
    var dragging = whileDraggingRef.current;
    !dragging ? true ? invariant2(false, "Cannot scroll when there is no drag") : invariant2(false) : void 0;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !closest3 ? true ? invariant2(false, "Cannot scroll a droppable with no closest scrollable") : invariant2(false) : void 0;
    closest3.scrollTop += change.y;
    closest3.scrollLeft += change.x;
  }, []);
  var callbacks = useMemo6(function() {
    return {
      getDimensionAndWatchScroll,
      getScrollWhileDragging,
      dragStopped,
      scroll: scroll3
    };
  }, [dragStopped, getDimensionAndWatchScroll, getScrollWhileDragging, scroll3]);
  var entry = useMemo6(function() {
    return {
      uniqueId,
      descriptor,
      callbacks
    };
  }, [callbacks, descriptor, uniqueId]);
  useIsomorphicLayoutEffect3(function() {
    publishedDescriptorRef.current = entry.descriptor;
    registry.droppable.register(entry);
    return function() {
      if (whileDraggingRef.current) {
        true ? warning3("Unsupported: changing the droppableId or type of a Droppable during a drag") : void 0;
        dragStopped();
      }
      registry.droppable.unregister(entry);
    };
  }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
  useIsomorphicLayoutEffect3(function() {
    if (!whileDraggingRef.current) {
      return;
    }
    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
  }, [args.isDropDisabled, marshal]);
  useIsomorphicLayoutEffect3(function() {
    if (!whileDraggingRef.current) {
      return;
    }
    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
  }, [args.isCombineEnabled, marshal]);
}
function noop$2() {
}
var empty = {
  width: 0,
  height: 0,
  margin: noSpacing2
};
var getSize = function getSize2(_ref) {
  var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount, placeholder2 = _ref.placeholder, animate = _ref.animate;
  if (isAnimatingOpenOnMount) {
    return empty;
  }
  if (animate === "close") {
    return empty;
  }
  return {
    height: placeholder2.client.borderBox.height,
    width: placeholder2.client.borderBox.width,
    margin: placeholder2.client.margin
  };
};
var getStyle = function getStyle2(_ref2) {
  var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount, placeholder2 = _ref2.placeholder, animate = _ref2.animate;
  var size = getSize({
    isAnimatingOpenOnMount,
    placeholder: placeholder2,
    animate
  });
  return {
    display: placeholder2.display,
    boxSizing: "border-box",
    width: size.width,
    height: size.height,
    marginTop: size.margin.top,
    marginRight: size.margin.right,
    marginBottom: size.margin.bottom,
    marginLeft: size.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: animate !== "none" ? transitions.placeholder : null
  };
};
function Placeholder(props) {
  var animateOpenTimerRef = useRef5(null);
  var tryClearAnimateOpenTimer = useCallback2(function() {
    if (!animateOpenTimerRef.current) {
      return;
    }
    clearTimeout(animateOpenTimerRef.current);
    animateOpenTimerRef.current = null;
  }, []);
  var animate = props.animate, onTransitionEnd = props.onTransitionEnd, onClose = props.onClose, contextId = props.contextId;
  var _useState = useState9(props.animate === "open"), isAnimatingOpenOnMount = _useState[0], setIsAnimatingOpenOnMount = _useState[1];
  useEffect10(function() {
    if (!isAnimatingOpenOnMount) {
      return noop$2;
    }
    if (animate !== "open") {
      tryClearAnimateOpenTimer();
      setIsAnimatingOpenOnMount(false);
      return noop$2;
    }
    if (animateOpenTimerRef.current) {
      return noop$2;
    }
    animateOpenTimerRef.current = setTimeout(function() {
      animateOpenTimerRef.current = null;
      setIsAnimatingOpenOnMount(false);
    });
    return tryClearAnimateOpenTimer;
  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
  var onSizeChangeEnd = useCallback2(function(event) {
    if (event.propertyName !== "height") {
      return;
    }
    onTransitionEnd();
    if (animate === "close") {
      onClose();
    }
  }, [animate, onClose, onTransitionEnd]);
  var style2 = getStyle({
    isAnimatingOpenOnMount,
    animate: props.animate,
    placeholder: props.placeholder
  });
  return React17.createElement(props.placeholder.tagName, {
    style: style2,
    "data-rbd-placeholder-context-id": contextId,
    onTransitionEnd: onSizeChangeEnd,
    ref: props.innerRef
  });
}
var Placeholder$1 = React17.memo(Placeholder);
var DroppableContext = React17.createContext(null);
function checkIsValidInnerRef(el) {
  !(el && isHtmlElement(el)) ? true ? invariant2(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ") : invariant2(false) : void 0;
}
function isBoolean(value) {
  return typeof value === "boolean";
}
function runChecks(args, checks) {
  checks.forEach(function(check) {
    return check(args);
  });
}
var shared = [function required(_ref) {
  var props = _ref.props;
  !props.droppableId ? true ? invariant2(false, "A Droppable requires a droppableId prop") : invariant2(false) : void 0;
  !(typeof props.droppableId === "string") ? true ? invariant2(false, "A Droppable requires a [string] droppableId. Provided: [" + typeof props.droppableId + "]") : invariant2(false) : void 0;
}, function _boolean(_ref2) {
  var props = _ref2.props;
  !isBoolean(props.isDropDisabled) ? true ? invariant2(false, "isDropDisabled must be a boolean") : invariant2(false) : void 0;
  !isBoolean(props.isCombineEnabled) ? true ? invariant2(false, "isCombineEnabled must be a boolean") : invariant2(false) : void 0;
  !isBoolean(props.ignoreContainerClipping) ? true ? invariant2(false, "ignoreContainerClipping must be a boolean") : invariant2(false) : void 0;
}, function ref(_ref3) {
  var getDroppableRef = _ref3.getDroppableRef;
  checkIsValidInnerRef(getDroppableRef());
}];
var standard = [function placeholder(_ref4) {
  var props = _ref4.props, getPlaceholderRef = _ref4.getPlaceholderRef;
  if (!props.placeholder) {
    return;
  }
  var ref2 = getPlaceholderRef();
  if (ref2) {
    return;
  }
  true ? warning3('\n      Droppable setup issue [droppableId: "' + props.droppableId + '"]:\n      DroppableProvided > placeholder could not be found.\n\n      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.\n      More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md\n    ') : void 0;
}];
var virtual = [function hasClone(_ref5) {
  var props = _ref5.props;
  !props.renderClone ? true ? invariant2(false, "Must provide a clone render function (renderClone) for virtual lists") : invariant2(false) : void 0;
}, function hasNoPlaceholder(_ref6) {
  var getPlaceholderRef = _ref6.getPlaceholderRef;
  !!getPlaceholderRef() ? true ? invariant2(false, "Expected virtual list to not have a placeholder") : invariant2(false) : void 0;
}];
function useValidation(args) {
  useDevSetupWarning(function() {
    runChecks(args, shared);
    if (args.props.mode === "standard") {
      runChecks(args, standard);
    }
    if (args.props.mode === "virtual") {
      runChecks(args, virtual);
    }
  });
}
var AnimateInOut = function(_React$PureComponent) {
  _inheritsLoose(AnimateInOut2, _React$PureComponent);
  function AnimateInOut2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      isVisible: Boolean(_this.props.on),
      data: _this.props.on,
      animate: _this.props.shouldAnimate && _this.props.on ? "open" : "none"
    };
    _this.onClose = function() {
      if (_this.state.animate !== "close") {
        return;
      }
      _this.setState({
        isVisible: false
      });
    };
    return _this;
  }
  AnimateInOut2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (!props.shouldAnimate) {
      return {
        isVisible: Boolean(props.on),
        data: props.on,
        animate: "none"
      };
    }
    if (props.on) {
      return {
        isVisible: true,
        data: props.on,
        animate: "open"
      };
    }
    if (state.isVisible) {
      return {
        isVisible: true,
        data: state.data,
        animate: "close"
      };
    }
    return {
      isVisible: false,
      animate: "close",
      data: null
    };
  };
  var _proto = AnimateInOut2.prototype;
  _proto.render = function render2() {
    if (!this.state.isVisible) {
      return null;
    }
    var provided = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(provided);
  };
  return AnimateInOut2;
}(React17.PureComponent);
var zIndexOptions = {
  dragging: 5e3,
  dropAnimating: 4500
};
var getDraggingTransition = function getDraggingTransition2(shouldAnimateDragMovement, dropping) {
  if (dropping) {
    return transitions.drop(dropping.duration);
  }
  if (shouldAnimateDragMovement) {
    return transitions.snap;
  }
  return transitions.fluid;
};
var getDraggingOpacity = function getDraggingOpacity2(isCombining, isDropAnimating) {
  if (!isCombining) {
    return null;
  }
  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};
var getShouldDraggingAnimate = function getShouldDraggingAnimate2(dragging) {
  if (dragging.forceShouldAnimate != null) {
    return dragging.forceShouldAnimate;
  }
  return dragging.mode === "SNAP";
};
function getDraggingStyle(dragging) {
  var dimension = dragging.dimension;
  var box = dimension.client;
  var offset4 = dragging.offset, combineWith = dragging.combineWith, dropping = dragging.dropping;
  var isCombining = Boolean(combineWith);
  var shouldAnimate = getShouldDraggingAnimate(dragging);
  var isDropAnimating = Boolean(dropping);
  var transform = isDropAnimating ? transforms.drop(offset4, isCombining) : transforms.moveTo(offset4);
  var style2 = {
    position: "fixed",
    top: box.marginBox.top,
    left: box.marginBox.left,
    boxSizing: "border-box",
    width: box.borderBox.width,
    height: box.borderBox.height,
    transition: getDraggingTransition(shouldAnimate, dropping),
    transform,
    opacity: getDraggingOpacity(isCombining, isDropAnimating),
    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
    pointerEvents: "none"
  };
  return style2;
}
function getSecondaryStyle(secondary) {
  return {
    transform: transforms.moveTo(secondary.offset),
    transition: secondary.shouldAnimateDisplacement ? null : "none"
  };
}
function getStyle$1(mapped) {
  return mapped.type === "DRAGGING" ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}
function getDimension$1(descriptor, el, windowScroll) {
  if (windowScroll === void 0) {
    windowScroll = origin;
  }
  var computedStyles = window.getComputedStyle(el);
  var borderBox = el.getBoundingClientRect();
  var client = calculateBox(borderBox, computedStyles);
  var page = withScroll(client, windowScroll);
  var placeholder2 = {
    client,
    tagName: el.tagName.toLowerCase(),
    display: computedStyles.display
  };
  var displaceBy = {
    x: client.marginBox.width,
    y: client.marginBox.height
  };
  var dimension = {
    descriptor,
    placeholder: placeholder2,
    displaceBy,
    client,
    page
  };
  return dimension;
}
function useDraggablePublisher(args) {
  var uniqueId = useUniqueId("draggable");
  var descriptor = args.descriptor, registry = args.registry, getDraggableRef = args.getDraggableRef, canDragInteractiveElements = args.canDragInteractiveElements, shouldRespectForcePress = args.shouldRespectForcePress, isEnabled = args.isEnabled;
  var options = useMemo6(function() {
    return {
      canDragInteractiveElements,
      shouldRespectForcePress,
      isEnabled
    };
  }, [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
  var getDimension2 = useCallback2(function(windowScroll) {
    var el = getDraggableRef();
    !el ? true ? invariant2(false, "Cannot get dimension when no ref is set") : invariant2(false) : void 0;
    return getDimension$1(descriptor, el, windowScroll);
  }, [descriptor, getDraggableRef]);
  var entry = useMemo6(function() {
    return {
      uniqueId,
      descriptor,
      options,
      getDimension: getDimension2
    };
  }, [descriptor, getDimension2, options, uniqueId]);
  var publishedRef = useRef5(entry);
  var isFirstPublishRef = useRef5(true);
  useIsomorphicLayoutEffect3(function() {
    registry.draggable.register(publishedRef.current);
    return function() {
      return registry.draggable.unregister(publishedRef.current);
    };
  }, [registry.draggable]);
  useIsomorphicLayoutEffect3(function() {
    if (isFirstPublishRef.current) {
      isFirstPublishRef.current = false;
      return;
    }
    var last = publishedRef.current;
    publishedRef.current = entry;
    registry.draggable.update(entry, last);
  }, [entry, registry.draggable]);
}
function useValidation$1(props, contextId, getRef) {
  useDevSetupWarning(function() {
    function prefix3(id2) {
      return "Draggable[id: " + id2 + "]: ";
    }
    var id = props.draggableId;
    !id ? true ? invariant2(false, "Draggable requires a draggableId") : invariant2(false) : void 0;
    !(typeof id === "string") ? true ? invariant2(false, "Draggable requires a [string] draggableId.\n      Provided: [type: " + typeof id + "] (value: " + id + ")") : invariant2(false) : void 0;
    !isInteger(props.index) ? true ? invariant2(false, prefix3(id) + " requires an integer index prop") : invariant2(false) : void 0;
    if (props.mapped.type === "DRAGGING") {
      return;
    }
    checkIsValidInnerRef(getRef());
    if (props.isEnabled) {
      !findDragHandle(contextId, id) ? true ? invariant2(false, prefix3(id) + " Unable to find drag handle") : invariant2(false) : void 0;
    }
  });
}
function useClonePropValidation(isClone) {
  useDev(function() {
    var initialRef = useRef5(isClone);
    useDevSetupWarning(function() {
      !(isClone === initialRef.current) ? true ? invariant2(false, "Draggable isClone prop value changed during component life") : invariant2(false) : void 0;
    }, [isClone]);
  });
}
function preventHtml5Dnd(event) {
  event.preventDefault();
}
function Draggable(props) {
  var ref2 = useRef5(null);
  var setRef = useCallback2(function(el) {
    ref2.current = el;
  }, []);
  var getRef = useCallback2(function() {
    return ref2.current;
  }, []);
  var _useRequiredContext = useRequiredContext(AppContext), contextId = _useRequiredContext.contextId, dragHandleUsageInstructionsId = _useRequiredContext.dragHandleUsageInstructionsId, registry = _useRequiredContext.registry;
  var _useRequiredContext2 = useRequiredContext(DroppableContext), type = _useRequiredContext2.type, droppableId = _useRequiredContext2.droppableId;
  var descriptor = useMemo6(function() {
    return {
      id: props.draggableId,
      index: props.index,
      type,
      droppableId
    };
  }, [props.draggableId, props.index, type, droppableId]);
  var children = props.children, draggableId = props.draggableId, isEnabled = props.isEnabled, shouldRespectForcePress = props.shouldRespectForcePress, canDragInteractiveElements = props.canDragInteractiveElements, isClone = props.isClone, mapped = props.mapped, dropAnimationFinishedAction = props.dropAnimationFinished;
  useValidation$1(props, contextId, getRef);
  useClonePropValidation(isClone);
  if (!isClone) {
    var forPublisher = useMemo6(function() {
      return {
        descriptor,
        registry,
        getDraggableRef: getRef,
        canDragInteractiveElements,
        shouldRespectForcePress,
        isEnabled
      };
    }, [descriptor, registry, getRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled]);
    useDraggablePublisher(forPublisher);
  }
  var dragHandleProps = useMemo6(function() {
    return isEnabled ? {
      tabIndex: 0,
      role: "button",
      "aria-describedby": dragHandleUsageInstructionsId,
      "data-rbd-drag-handle-draggable-id": draggableId,
      "data-rbd-drag-handle-context-id": contextId,
      draggable: false,
      onDragStart: preventHtml5Dnd
    } : null;
  }, [contextId, dragHandleUsageInstructionsId, draggableId, isEnabled]);
  var onMoveEnd = useCallback2(function(event) {
    if (mapped.type !== "DRAGGING") {
      return;
    }
    if (!mapped.dropping) {
      return;
    }
    if (event.propertyName !== "transform") {
      return;
    }
    dropAnimationFinishedAction();
  }, [dropAnimationFinishedAction, mapped]);
  var provided = useMemo6(function() {
    var style2 = getStyle$1(mapped);
    var onTransitionEnd = mapped.type === "DRAGGING" && mapped.dropping ? onMoveEnd : null;
    var result = {
      innerRef: setRef,
      draggableProps: {
        "data-rbd-draggable-context-id": contextId,
        "data-rbd-draggable-id": draggableId,
        style: style2,
        onTransitionEnd
      },
      dragHandleProps
    };
    return result;
  }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);
  var rubric = useMemo6(function() {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  }, [descriptor.droppableId, descriptor.id, descriptor.index, descriptor.type]);
  return children(provided, mapped.snapshot, rubric);
}
var isStrictEqual = function(a3, b3) {
  return a3 === b3;
};
var whatIsDraggedOverFromResult = function(result) {
  var combine2 = result.combine, destination = result.destination;
  if (destination) {
    return destination.droppableId;
  }
  if (combine2) {
    return combine2.droppableId;
  }
  return null;
};
var getCombineWithFromResult = function getCombineWithFromResult2(result) {
  return result.combine ? result.combine.draggableId : null;
};
var getCombineWithFromImpact = function getCombineWithFromImpact2(impact) {
  return impact.at && impact.at.type === "COMBINE" ? impact.at.combine.draggableId : null;
};
function getDraggableSelector() {
  var memoizedOffset = memoize_one_esm_default(function(x2, y2) {
    return {
      x: x2,
      y: y2
    };
  });
  var getMemoizedSnapshot = memoize_one_esm_default(function(mode, isClone, draggingOver, combineWith, dropping) {
    return {
      isDragging: true,
      isClone,
      isDropAnimating: Boolean(dropping),
      dropAnimation: dropping,
      mode,
      draggingOver,
      combineWith,
      combineTargetFor: null
    };
  });
  var getMemoizedProps = memoize_one_esm_default(function(offset4, mode, dimension, isClone, draggingOver, combineWith, forceShouldAnimate) {
    return {
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver,
        combineWith,
        mode,
        offset: offset4,
        dimension,
        forceShouldAnimate,
        snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
      }
    };
  });
  var selector = function selector2(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }
      var offset4 = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var draggingOver = whatIsDraggedOver(state.impact);
      var combineWith = getCombineWithFromImpact(state.impact);
      var forceShouldAnimate = state.forceShouldAnimate;
      return getMemoizedProps(memoizedOffset(offset4.x, offset4.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (completed.result.draggableId !== ownProps.draggableId) {
        return null;
      }
      var isClone = ownProps.isClone;
      var _dimension = state.dimensions.draggables[ownProps.draggableId];
      var result = completed.result;
      var mode = result.mode;
      var _draggingOver = whatIsDraggedOverFromResult(result);
      var _combineWith = getCombineWithFromResult(result);
      var duration = state.dropDuration;
      var dropping = {
        duration,
        curve: curves.drop,
        moveTo: state.newHomeClientOffset,
        opacity: _combineWith ? combine.opacity.drop : null,
        scale: _combineWith ? combine.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: state.newHomeClientOffset,
          dimension: _dimension,
          dropping,
          draggingOver: _draggingOver,
          combineWith: _combineWith,
          mode,
          forceShouldAnimate: null,
          snapshot: getMemoizedSnapshot(mode, isClone, _draggingOver, _combineWith, dropping)
        }
      };
    }
    return null;
  };
  return selector;
}
function getSecondarySnapshot(combineTargetFor) {
  return {
    isDragging: false,
    isDropAnimating: false,
    isClone: false,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor,
    combineWith: null
  };
}
var atRest = {
  mapped: {
    type: "SECONDARY",
    offset: origin,
    combineTargetFor: null,
    shouldAnimateDisplacement: true,
    snapshot: getSecondarySnapshot(null)
  }
};
function getSecondarySelector() {
  var memoizedOffset = memoize_one_esm_default(function(x2, y2) {
    return {
      x: x2,
      y: y2
    };
  });
  var getMemoizedSnapshot = memoize_one_esm_default(getSecondarySnapshot);
  var getMemoizedProps = memoize_one_esm_default(function(offset4, combineTargetFor, shouldAnimateDisplacement) {
    if (combineTargetFor === void 0) {
      combineTargetFor = null;
    }
    return {
      mapped: {
        type: "SECONDARY",
        offset: offset4,
        combineTargetFor,
        shouldAnimateDisplacement,
        snapshot: getMemoizedSnapshot(combineTargetFor)
      }
    };
  });
  var getFallback = function getFallback2(combineTargetFor) {
    return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
  };
  var getProps = function getProps2(ownId, draggingId, impact, afterCritical) {
    var visualDisplacement = impact.displaced.visible[ownId];
    var isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
    var combine2 = tryGetCombine(impact);
    var combineTargetFor = combine2 && combine2.draggableId === ownId ? draggingId : null;
    if (!visualDisplacement) {
      if (!isAfterCriticalInVirtualList) {
        return getFallback(combineTargetFor);
      }
      if (impact.displaced.invisible[ownId]) {
        return null;
      }
      var change = negate(afterCritical.displacedBy.point);
      var _offset = memoizedOffset(change.x, change.y);
      return getMemoizedProps(_offset, combineTargetFor, true);
    }
    if (isAfterCriticalInVirtualList) {
      return getFallback(combineTargetFor);
    }
    var displaceBy = impact.displacedBy.point;
    var offset4 = memoizedOffset(displaceBy.x, displaceBy.y);
    return getMemoizedProps(offset4, combineTargetFor, visualDisplacement.shouldAnimate);
  };
  var selector = function selector2(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }
      return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (completed.result.draggableId === ownProps.draggableId) {
        return null;
      }
      return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
    }
    return null;
  };
  return selector;
}
var makeMapStateToProps = function makeMapStateToProps2() {
  var draggingSelector = getDraggableSelector();
  var secondarySelector = getSecondarySelector();
  var selector = function selector2(state, ownProps) {
    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
  };
  return selector;
};
var mapDispatchToProps = {
  dropAnimationFinished
};
var ConnectedDraggable = connect_default(makeMapStateToProps, mapDispatchToProps, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);
function PrivateDraggable(props) {
  var droppableContext = useRequiredContext(DroppableContext);
  var isUsingCloneFor = droppableContext.isUsingCloneFor;
  if (isUsingCloneFor === props.draggableId && !props.isClone) {
    return null;
  }
  return React17.createElement(ConnectedDraggable, props);
}
function PublicDraggable(props) {
  var isEnabled = typeof props.isDragDisabled === "boolean" ? !props.isDragDisabled : true;
  var canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
  var shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
  return React17.createElement(PrivateDraggable, _extends({}, props, {
    isClone: false,
    isEnabled,
    canDragInteractiveElements,
    shouldRespectForcePress
  }));
}
function Droppable(props) {
  var appContext = useContext8(AppContext);
  !appContext ? true ? invariant2(false, "Could not find app context") : invariant2(false) : void 0;
  var contextId = appContext.contextId, isMovementAllowed2 = appContext.isMovementAllowed;
  var droppableRef = useRef5(null);
  var placeholderRef = useRef5(null);
  var children = props.children, droppableId = props.droppableId, type = props.type, mode = props.mode, direction = props.direction, ignoreContainerClipping = props.ignoreContainerClipping, isDropDisabled = props.isDropDisabled, isCombineEnabled = props.isCombineEnabled, snapshot = props.snapshot, useClone = props.useClone, updateViewportMaxScroll3 = props.updateViewportMaxScroll, getContainerForClone = props.getContainerForClone;
  var getDroppableRef = useCallback2(function() {
    return droppableRef.current;
  }, []);
  var setDroppableRef = useCallback2(function(value) {
    droppableRef.current = value;
  }, []);
  var getPlaceholderRef = useCallback2(function() {
    return placeholderRef.current;
  }, []);
  var setPlaceholderRef = useCallback2(function(value) {
    placeholderRef.current = value;
  }, []);
  useValidation({
    props,
    getDroppableRef,
    getPlaceholderRef
  });
  var onPlaceholderTransitionEnd = useCallback2(function() {
    if (isMovementAllowed2()) {
      updateViewportMaxScroll3({
        maxScroll: getMaxWindowScroll()
      });
    }
  }, [isMovementAllowed2, updateViewportMaxScroll3]);
  useDroppablePublisher({
    droppableId,
    type,
    mode,
    direction,
    isDropDisabled,
    isCombineEnabled,
    ignoreContainerClipping,
    getDroppableRef
  });
  var placeholder2 = React17.createElement(AnimateInOut, {
    on: props.placeholder,
    shouldAnimate: props.shouldAnimatePlaceholder
  }, function(_ref) {
    var onClose = _ref.onClose, data = _ref.data, animate = _ref.animate;
    return React17.createElement(Placeholder$1, {
      placeholder: data,
      onClose,
      innerRef: setPlaceholderRef,
      animate,
      contextId,
      onTransitionEnd: onPlaceholderTransitionEnd
    });
  });
  var provided = useMemo6(function() {
    return {
      innerRef: setDroppableRef,
      placeholder: placeholder2,
      droppableProps: {
        "data-rbd-droppable-id": droppableId,
        "data-rbd-droppable-context-id": contextId
      }
    };
  }, [contextId, droppableId, placeholder2, setDroppableRef]);
  var isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
  var droppableContext = useMemo6(function() {
    return {
      droppableId,
      type,
      isUsingCloneFor
    };
  }, [droppableId, isUsingCloneFor, type]);
  function getClone() {
    if (!useClone) {
      return null;
    }
    var dragging = useClone.dragging, render2 = useClone.render;
    var node = React17.createElement(PrivateDraggable, {
      draggableId: dragging.draggableId,
      index: dragging.source.index,
      isClone: true,
      isEnabled: true,
      shouldRespectForcePress: false,
      canDragInteractiveElements: true
    }, function(draggableProvided, draggableSnapshot) {
      return render2(draggableProvided, draggableSnapshot, dragging);
    });
    return import_react_dom4.default.createPortal(node, getContainerForClone());
  }
  return React17.createElement(DroppableContext.Provider, {
    value: droppableContext
  }, children(provided, snapshot), getClone());
}
var isMatchingType = function isMatchingType2(type, critical) {
  return type === critical.droppable.type;
};
var getDraggable = function getDraggable2(critical, dimensions) {
  return dimensions.draggables[critical.draggable.id];
};
var makeMapStateToProps$1 = function makeMapStateToProps3() {
  var idleWithAnimation = {
    placeholder: null,
    shouldAnimatePlaceholder: true,
    snapshot: {
      isDraggingOver: false,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: false
    },
    useClone: null
  };
  var idleWithoutAnimation = _extends({}, idleWithAnimation, {
    shouldAnimatePlaceholder: false
  });
  var getDraggableRubric = memoize_one_esm_default(function(descriptor) {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  });
  var getMapProps = memoize_one_esm_default(function(id, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) {
    var draggableId = dragging.descriptor.id;
    var isHome = dragging.descriptor.droppableId === id;
    if (isHome) {
      var useClone = renderClone ? {
        render: renderClone,
        dragging: getDraggableRubric(dragging.descriptor)
      } : null;
      var _snapshot = {
        isDraggingOver: isDraggingOverForConsumer,
        draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
        draggingFromThisWith: draggableId,
        isUsingPlaceholder: true
      };
      return {
        placeholder: dragging.placeholder,
        shouldAnimatePlaceholder: false,
        snapshot: _snapshot,
        useClone
      };
    }
    if (!isEnabled) {
      return idleWithoutAnimation;
    }
    if (!isDraggingOverForImpact) {
      return idleWithAnimation;
    }
    var snapshot = {
      isDraggingOver: isDraggingOverForConsumer,
      draggingOverWith: draggableId,
      draggingFromThisWith: null,
      isUsingPlaceholder: true
    };
    return {
      placeholder: dragging.placeholder,
      shouldAnimatePlaceholder: true,
      snapshot,
      useClone: null
    };
  });
  var selector = function selector2(state, ownProps) {
    var id = ownProps.droppableId;
    var type = ownProps.type;
    var isEnabled = !ownProps.isDropDisabled;
    var renderClone = ownProps.renderClone;
    if (state.isDragging) {
      var critical = state.critical;
      if (!isMatchingType(type, critical)) {
        return idleWithoutAnimation;
      }
      var dragging = getDraggable(critical, state.dimensions);
      var isDraggingOver = whatIsDraggedOver(state.impact) === id;
      return getMapProps(id, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (!isMatchingType(type, completed.critical)) {
        return idleWithoutAnimation;
      }
      var _dragging = getDraggable(completed.critical, state.dimensions);
      return getMapProps(id, isEnabled, whatIsDraggedOverFromResult(completed.result) === id, whatIsDraggedOver(completed.impact) === id, _dragging, renderClone);
    }
    if (state.phase === "IDLE" && state.completed && !state.shouldFlush) {
      var _completed = state.completed;
      if (!isMatchingType(type, _completed.critical)) {
        return idleWithoutAnimation;
      }
      var wasOver = whatIsDraggedOver(_completed.impact) === id;
      var wasCombining = Boolean(_completed.impact.at && _completed.impact.at.type === "COMBINE");
      var isHome = _completed.critical.droppable.id === id;
      if (wasOver) {
        return wasCombining ? idleWithAnimation : idleWithoutAnimation;
      }
      if (isHome) {
        return idleWithAnimation;
      }
      return idleWithoutAnimation;
    }
    return idleWithoutAnimation;
  };
  return selector;
};
var mapDispatchToProps$1 = {
  updateViewportMaxScroll
};
function getBody() {
  !document.body ? true ? invariant2(false, "document.body is not ready") : invariant2(false) : void 0;
  return document.body;
}
var defaultProps2 = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false,
  renderClone: null,
  getContainerForClone: getBody
};
var ConnectedDroppable = connect_default(makeMapStateToProps$1, mapDispatchToProps$1, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
ConnectedDroppable.defaultProps = defaultProps2;

// src/hooks/useDragAndDrop.tsx
var DndDragHandle = ({
  dragHandleProps,
  className
}) => {
  return /* @__PURE__ */ React18.createElement("div", {
    className: `BlockWrapper-dragHandle ${className}`,
    ...dragHandleProps
  }, /* @__PURE__ */ React18.createElement(tippy_react_esm_default, {
    content: "Faites glisser l'\xE9l\xE9ment pour le d\xE9placer",
    delay: [700, 0]
  }, /* @__PURE__ */ React18.createElement("i", {
    className: "fa fa-bars"
  })));
};
var DndWrapper = ({
  id,
  children,
  onDragEnd: onDragEnd3,
  wrapperClass = ""
}) => {
  return /* @__PURE__ */ React18.createElement(DragDropContext, {
    onDragEnd: onDragEnd3
  }, /* @__PURE__ */ React18.createElement(ConnectedDroppable, {
    droppableId: id
  }, (provided, snapshot) => /* @__PURE__ */ React18.createElement("div", {
    className: `${wrapperClass} relative`,
    ...provided.droppableProps,
    ref: provided.innerRef
  }, children, provided.placeholder, snapshot.isDraggingOver && /* @__PURE__ */ React18.createElement("div", {
    className: "absolute inset-0 opacity-60 bg-pearlMedium"
  }))));
};
var DndWrapElement = ({
  id,
  children,
  index: index2,
  wrapperClass = ""
}) => {
  return /* @__PURE__ */ React18.createElement(PublicDraggable, {
    draggableId: id,
    index: index2
  }, (provided) => /* @__PURE__ */ React18.createElement("div", {
    key: `${id}-wrapper`,
    ref: provided.innerRef,
    className: wrapperClass,
    ...provided.draggableProps
  }, children({
    DndDragHandle: () => /* @__PURE__ */ React18.createElement(DndDragHandle, {
      dragHandleProps: provided.dragHandleProps
    })
  })));
};
var useDragAndDrop = () => ({ DndWrapper, DndWrapElement });
var useDragAndDrop_default = useDragAndDrop;

// src/blocks/MultiColumns/MultiColumns.tsx
var NestedColumn = ({ onUpdate }) => {
  const { blockList, moveBlockTo } = useBlocksContext();
  const { DndWrapper: DndWrapper2, DndWrapElement: DndWrapElement2 } = useDragAndDrop_default();
  React19.useEffect(() => {
    onUpdate(blockList);
  }, [blockList]);
  const onDragEnd3 = (e2) => {
    if (e2.destination) {
      moveBlockTo(e2.source.index, e2.destination.index);
    }
  };
  return /* @__PURE__ */ React19.createElement(React19.Fragment, null, blockList.length > 0 && /* @__PURE__ */ React19.createElement(DndWrapper2, {
    id: "main",
    onDragEnd: onDragEnd3
  }, blockList.map((block, index2) => /* @__PURE__ */ React19.createElement(DndWrapElement2, {
    key: block.id,
    id: block.id,
    index: index2
  }, ({ DndDragHandle: DndDragHandle2 }) => /* @__PURE__ */ React19.createElement(Block_default, {
    DndDragHandle: DndDragHandle2,
    inLayout: true,
    key: index2,
    className: "border-l-8 border-l-lighterVermillon",
    block
  })))));
};
var ColumnIcon = ({
  cols,
  currentCol
}) => {
  const { width } = useWindowSize_default();
  return /* @__PURE__ */ React19.createElement("div", {
    className: "h-3 rounded-full flex overflow-hidden border bg-white border-white mr-3",
    style: { minWidth: width > 768 ? "80px" : "60px" }
  }, [...Array(cols)].map((_2, index2) => /* @__PURE__ */ React19.createElement("div", {
    key: index2,
    style: { width: 100 / cols + "%" },
    className: `${index2 !== cols - 1 && "mr-px"} ${currentCol === index2 ? "bg-white" : "bg-mediumCharbon"}`
  })));
};
var ColumnComponent = ({
  column,
  index: index2,
  data,
  onUpdate
}) => {
  const [open, setOpen] = React19.useState(true);
  const { width } = useWindowSize_default();
  return /* @__PURE__ */ React19.createElement("div", {
    key: index2,
    className: "flex flex-col rounded-md shadow-md border-l-8 border-l-vermillon bg-white"
  }, /* @__PURE__ */ React19.createElement("div", {
    className: `py-2 md:py-4 px-4 md:px-8 bg-mediumCharbon text-white rounded-tr-md ${!open && "rounded-br-md"} flex justify-between items-center`
  }, /* @__PURE__ */ React19.createElement("div", {
    className: "flex items-center"
  }, width > 400 && /* @__PURE__ */ React19.createElement(ColumnIcon, {
    cols: data.length,
    currentCol: index2
  }), /* @__PURE__ */ React19.createElement("span", {
    className: "md:text-xl font-bold"
  }, `Colonne #${index2 + 1}`)), /* @__PURE__ */ React19.createElement("button", {
    onClick: () => setOpen(!open),
    className: "flex"
  }, /* @__PURE__ */ React19.createElement("div", {
    className: "bg-lightVermillon px-2 py-1 rounded-l-md"
  }, open ? /* @__PURE__ */ React19.createElement("i", {
    className: "fa fa-chevron-down"
  }) : /* @__PURE__ */ React19.createElement("i", {
    className: "fa fa-chevron-right"
  })), /* @__PURE__ */ React19.createElement("div", {
    className: "bg-vermillon px-2 py-1 rounded-r-md"
  }, open ? "Replier" : "D\xE9plier"))), /* @__PURE__ */ React19.createElement("div", {
    className: `p-4 md:py-8 md:px-11 ${!open ? "hidden" : null}`
  }, /* @__PURE__ */ React19.createElement(BlockContextProvider, {
    defaultBlocks: column
  }, /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement(NestedColumn, {
    onUpdate: (columnNewData) => {
      const nextState = immer_esm_default(data, (draft) => {
        draft[index2] = columnNewData;
      });
      onUpdate(nextState);
    }
  }), /* @__PURE__ */ React19.createElement(AddBlock, {
    excludeLayout: ["Column", "Accordion"]
  })))));
};
var MultiColumnsComponent = ({
  data,
  onUpdate
}) => {
  return /* @__PURE__ */ React19.createElement("div", {
    className: "flex flex-col gap-5 justify-between"
  }, data.map((column, index2) => {
    return /* @__PURE__ */ React19.createElement(ColumnComponent, {
      key: index2,
      data,
      onUpdate,
      column,
      index: index2
    });
  }));
};
var moduleLayout = "Column";
var moduleType = {
  id: "multiColumns"
};
var Column = {
  type: moduleType,
  component: MultiColumnsComponent,
  initialData: [[]],
  layout: moduleLayout,
  icon: SvgColumn,
  title: {
    default: "Columns",
    fr_FR: "Colonnes"
  },
  description: {
    default: "Display blocks in multiple columns",
    fr_FR: "Affiche des blocks dans diff\xE9rentes colonnes"
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&multiColumns"
  }
};
var TwoColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "2cols" },
  title: {
    default: "2 Columns",
    fr_FR: "2 Colonnes"
  },
  layout: moduleLayout,
  initialData: [[], []]
};
var ThreeColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "3cols" },
  layout: moduleLayout,
  title: {
    default: "3 Columns",
    fr_FR: "3 Colonnes"
  },
  initialData: [[], [], []]
};
var FourColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "4cols" },
  layout: moduleLayout,
  title: {
    default: "4 Columns",
    fr_FR: "4 Colonnes"
  },
  initialData: [[], [], [], []]
};
var FiveColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "5cols" },
  layout: moduleLayout,
  title: {
    default: "5 Columns",
    fr_FR: "5 Colonnes"
  },
  initialData: [[], [], [], [], []]
};
var SixColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "6cols" },
  layout: moduleLayout,
  title: {
    default: "6 Columns",
    fr_FR: "6 Colonnes"
  },
  initialData: [[], [], [], [], [], []]
};

// src/blocks/Accordion/Accordion.tsx
import * as React21 from "react";

// src/components/LayoutHeader/LayoutHeader.tsx
var LayoutHeader = ({
  title,
  open,
  setOpen
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: `py-2 md:py-4 px-4 md:px-8 bg-mediumCharbon text-white rounded-tr-md ${!open && "rounded-br-md"} flex justify-between items-center`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:text-xl font-bold"
  }, title)), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setOpen(!open),
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-lightVermillon px-2 py-1 rounded-l-md"
  }, open ? /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-chevron-down"
  }) : /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-chevron-right"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "bg-vermillon px-2 py-1 rounded-r-md"
  }, open ? "Replier" : "D\xE9plier")));
};
var LayoutHeader_default = LayoutHeader;

// src/blocks/Accordion/assets/accordion.svg
import * as React20 from "react";
var SvgAccordion = (props) => /* @__PURE__ */ React20.createElement("svg", {
  width: 22,
  height: 18,
  viewBox: "0 0 22 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React20.createElement("path", {
  d: "M4.77332 8.72599H16.9231C17.4777 8.75248 18.032 8.66612 18.5523 8.47212C19.0726 8.27812 19.5481 7.98052 19.95 7.59736C20.3519 7.2142 20.6718 6.75345 20.8904 6.24301C21.109 5.73257 21.2217 5.18306 21.2217 4.62778C21.2217 4.0725 21.109 3.523 20.8904 3.01256C20.6718 2.50212 20.3519 2.04136 19.95 1.6582C19.5481 1.27504 19.0726 0.977448 18.5523 0.783448C18.032 0.589449 17.4777 0.503081 16.9231 0.529576H4.77332C3.72027 0.579878 2.72698 1.03362 1.99951 1.79667C1.27204 2.55972 0.866211 3.57352 0.866211 4.62778C0.866211 5.68204 1.27204 6.69585 1.99951 7.4589C2.72698 8.22195 3.72027 8.67569 4.77332 8.72599ZM4.77332 1.43613H16.9231C17.353 1.41276 17.7832 1.47725 18.1873 1.62568C18.5915 1.77411 18.9611 2.00335 19.2737 2.29942C19.5863 2.59548 19.8353 2.95216 20.0055 3.34766C20.1756 3.74316 20.2634 4.16919 20.2634 4.59974C20.2634 5.03029 20.1756 5.45633 20.0055 5.85183C19.8353 6.24733 19.5863 6.60401 19.2737 6.90007C18.9611 7.19614 18.5915 7.42538 18.1873 7.57381C17.7832 7.72224 17.353 7.78673 16.9231 7.76335H4.77332C3.96402 7.71935 3.20235 7.36686 2.64501 6.77839C2.08768 6.18993 1.77706 5.41025 1.77706 4.59974C1.77706 3.78924 2.08768 3.00956 2.64501 2.42109C3.20235 1.83263 3.96402 1.48014 4.77332 1.43613Z",
  fill: "#444444"
}), /* @__PURE__ */ React20.createElement("path", {
  d: "M16.9045 9.7078H4.75477C3.70171 9.7581 2.70843 10.2118 1.98096 10.9749C1.25348 11.7379 0.847656 12.7517 0.847656 13.806C0.847656 14.8603 1.25348 15.8741 1.98096 16.6371C2.70843 17.4002 3.70171 17.8539 4.75477 17.9042H16.9045C17.4592 17.9307 18.0134 17.8443 18.5337 17.6503C19.054 17.4563 19.5295 17.1587 19.9314 16.7756C20.3333 16.3924 20.6532 15.9317 20.8718 15.4212C21.0905 14.9108 21.2032 14.3613 21.2032 13.806C21.2032 13.2507 21.0905 12.7012 20.8718 12.1908C20.6532 11.6803 20.3333 11.2196 19.9314 10.8364C19.5295 10.4533 19.054 10.1557 18.5337 9.96167C18.0134 9.76767 17.4592 9.6813 16.9045 9.7078ZM16.9045 16.9696H4.75477C3.94546 16.9256 3.1838 16.5731 2.62646 15.9847C2.06912 15.3962 1.7585 14.6165 1.7585 13.806C1.7585 12.9955 2.06912 12.2158 2.62646 11.6274C3.1838 11.0389 3.94546 10.6864 4.75477 10.6424H16.9045C17.3344 10.619 17.7646 10.6835 18.1688 10.8319C18.5729 10.9804 18.9426 11.2096 19.2552 11.5057C19.5678 11.8017 19.8168 12.1584 19.9869 12.5539C20.1571 12.9494 20.2448 13.3755 20.2448 13.806C20.2448 14.2366 20.1571 14.6626 19.9869 15.0581C19.8168 15.4536 19.5678 15.8103 19.2552 16.1063C18.9426 16.4024 18.5729 16.6316 18.1688 16.7801C17.7646 16.9285 17.3344 16.993 16.9045 16.9696Z",
  fill: "#444444"
}), /* @__PURE__ */ React20.createElement("path", {
  d: "M14.96 4.99674H16.0348V6.10891C16.0331 6.15947 16.0423 6.20981 16.0616 6.25655C16.0809 6.30329 16.11 6.34536 16.147 6.37995C16.2208 6.45578 16.3215 6.49944 16.4273 6.50144C16.5311 6.49837 16.6305 6.45864 16.7077 6.38929C16.744 6.35228 16.7726 6.30844 16.7918 6.26032C16.8111 6.2122 16.8206 6.16074 16.8199 6.10891V4.99674H17.8947C18.0005 4.99474 18.1012 4.95108 18.175 4.87525C18.211 4.83996 18.2395 4.79777 18.2588 4.75119C18.2781 4.70461 18.2877 4.65462 18.2872 4.60421C18.2885 4.55232 18.2792 4.50071 18.2599 4.45251C18.2406 4.40431 18.2117 4.36054 18.175 4.32384C18.1012 4.248 18.0005 4.20434 17.8947 4.20234H16.8199V3.12755C16.8206 3.07573 16.8111 3.02427 16.7918 2.97615C16.7726 2.92802 16.744 2.88419 16.7077 2.84717C16.6297 2.78007 16.5302 2.74316 16.4273 2.74316C16.3244 2.74316 16.225 2.78007 16.147 2.84717C16.1107 2.88419 16.0821 2.92802 16.0628 2.97615C16.0436 3.02427 16.0341 3.07573 16.0348 3.12755V4.23972H14.96C14.9075 4.2402 14.8557 4.2512 14.8075 4.27207C14.7594 4.29294 14.7159 4.32325 14.6796 4.36122C14.6429 4.39792 14.6141 4.4417 14.5948 4.4899C14.5755 4.53809 14.5662 4.5897 14.5675 4.6416C14.567 4.692 14.5766 4.742 14.5959 4.78857C14.6152 4.83515 14.6436 4.87735 14.6796 4.91263C14.7588 4.97577 14.8592 5.00591 14.96 4.99674Z",
  fill: "#444444"
}), /* @__PURE__ */ React20.createElement("path", {
  d: "M17.8941 13.4359H16.8193V12.3611C16.8173 12.2553 16.7737 12.1545 16.6978 12.0807C16.6223 12.0124 16.524 11.9746 16.4221 11.9746C16.3203 11.9746 16.222 12.0124 16.1464 12.0807C16.1102 12.1177 16.0816 12.1616 16.0623 12.2097C16.0431 12.2578 16.0335 12.3093 16.0343 12.3611V13.4359H14.9501C14.8482 13.4425 14.7522 13.486 14.6799 13.5582C14.6077 13.6304 14.5642 13.7265 14.5576 13.8284C14.559 13.9325 14.599 14.0324 14.6698 14.1088C14.7068 14.1451 14.7506 14.1737 14.7987 14.1929C14.8469 14.2122 14.8983 14.2217 14.9501 14.221H16.0343V15.3051C16.0337 15.3555 16.0434 15.4055 16.0627 15.4521C16.0819 15.4986 16.1104 15.5408 16.1464 15.5761C16.1827 15.6141 16.2262 15.6444 16.2743 15.6653C16.3225 15.6861 16.3743 15.6971 16.4268 15.6976C16.5288 15.691 16.6248 15.6475 16.697 15.5753C16.7693 15.5031 16.8127 15.407 16.8193 15.3051V14.221H17.8941C17.946 14.2217 17.9974 14.2122 18.0455 14.1929C18.0937 14.1737 18.1375 14.1451 18.1745 14.1088C18.2453 14.0324 18.2853 13.9325 18.2867 13.8284C18.286 13.7404 18.2564 13.655 18.2025 13.5854C18.1653 13.5393 18.1184 13.502 18.0651 13.4761C18.0118 13.4503 17.9534 13.4365 17.8941 13.4359Z",
  fill: "#444444"
}));

// src/blocks/Accordion/Accordion.tsx
var NestedBlocks = ({ onUpdate }) => {
  const { blockList, moveBlockTo } = useBlocksContext();
  const { DndWrapper: DndWrapper2, DndWrapElement: DndWrapElement2 } = useDragAndDrop_default();
  React21.useEffect(() => {
    onUpdate(blockList);
  }, [blockList]);
  const onDragEnd3 = (e2) => {
    if (e2.destination) {
      moveBlockTo(e2.source.index, e2.destination.index);
    }
  };
  return /* @__PURE__ */ React21.createElement("div", null, blockList.length > 0 && /* @__PURE__ */ React21.createElement(DndWrapper2, {
    id: "main",
    onDragEnd: onDragEnd3
  }, blockList.map((block, index2) => /* @__PURE__ */ React21.createElement(DndWrapElement2, {
    key: block.id,
    id: block.id,
    index: index2
  }, ({ DndDragHandle: DndDragHandle2 }) => /* @__PURE__ */ React21.createElement(Block_default, {
    DndDragHandle: DndDragHandle2,
    inLayout: true,
    key: index2,
    className: "border-l-8 border-l-lighterVermillon",
    block
  })))));
};
var AccordionContentComponent = ({
  blocks,
  index: index2,
  data,
  onUpdate
}) => {
  const [open, setOpen] = React21.useState(true);
  return /* @__PURE__ */ React21.createElement("div", {
    key: index2,
    className: "flex flex-col rounded-md shadow-md border-l-8 border-l-vermillon bg-white"
  }, /* @__PURE__ */ React21.createElement(LayoutHeader_default, {
    title: "Accord\xE9on",
    open,
    setOpen
  }), /* @__PURE__ */ React21.createElement("div", {
    className: `p-4 md:py-8 md:px-11 ${!open ? "hidden" : null}`
  }, /* @__PURE__ */ React21.createElement(BlockContextProvider, {
    defaultBlocks: blocks
  }, /* @__PURE__ */ React21.createElement(React21.Fragment, null, /* @__PURE__ */ React21.createElement(NestedBlocks, {
    onUpdate: (columnNewData) => {
      const nextState = immer_esm_default(data, (draft) => {
        draft[index2] = columnNewData;
      });
      onUpdate(nextState);
    }
  }), /* @__PURE__ */ React21.createElement(AddBlock, {
    excludeLayout: ["Column", "Accordion"]
  })))));
};
var AccordionComponent = ({
  data,
  onUpdate
}) => {
  return /* @__PURE__ */ React21.createElement("div", {
    className: "flex flex-col gap-5 justify-between"
  }, data.map((blocks, index2) => {
    return /* @__PURE__ */ React21.createElement(AccordionContentComponent, {
      key: index2,
      data,
      onUpdate,
      blocks,
      index: index2
    });
  }));
};
var moduleLayout2 = "Accordion";
var moduleType2 = {
  id: "Accordion"
};
var Accordion = {
  type: moduleType2,
  component: AccordionComponent,
  initialData: [[]],
  layout: moduleLayout2,
  title: {
    default: "Accordion",
    fr_FR: "Accord\xE9on"
  },
  icon: SvgAccordion,
  description: {
    default: "Display blocks in accordion",
    fr_FR: "Affiche des blocs en accord\xE9on"
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&multiColumns"
  }
};
var Accordion_default = Accordion;

// src/blocks/Button/Button.tsx
import * as React24 from "react";

// src/components/Input/Input.tsx
import React22 from "react";
var Input = ({
  value,
  onChange,
  className,
  placeholder: placeholder2,
  icon,
  iconAlignment = "right",
  isValid,
  label,
  ...props
}) => {
  return /* @__PURE__ */ React22.createElement(React22.Fragment, null, label && /* @__PURE__ */ React22.createElement("label", {
    className: "text-sm md:text-base"
  }, label), /* @__PURE__ */ React22.createElement("div", {
    className: "relative w-full flex flex-wrap items-stretch"
  }, /* @__PURE__ */ React22.createElement("input", {
    value,
    onChange,
    className: `relative w-full rounded-md shadow outline-none placeholder-mediumGrey ${iconAlignment === "left" && isValid ? "px-10" : iconAlignment === "left" ? "pl-10" : ""} ${className}`,
    placeholder: placeholder2,
    ...props
  }), icon && /* @__PURE__ */ React22.createElement(Icon, {
    className: iconAlignment === "right" ? "right-0" : "left-0",
    icon
  }), icon && isValid && iconAlignment === "left" && /* @__PURE__ */ React22.createElement(Icon, {
    className: "right-0",
    icon: /* @__PURE__ */ React22.createElement("i", {
      className: "fas fa-check text-greenDark"
    })
  })));
};
var Icon = ({ icon, className }) => {
  return /* @__PURE__ */ React22.createElement("span", {
    className: `absolute py-1 px-5 w-8 h-full leading-snug rounded text-base font-normal text-center flex items-center justify-center ${className}`
  }, icon);
};
var Input_default = Input;

// src/blocks/Button/assets/button.svg
import * as React23 from "react";
var SvgButton = (props) => /* @__PURE__ */ React23.createElement("svg", {
  width: 25,
  height: 17,
  viewBox: "0 0 25 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React23.createElement("path", {
  d: "M22.1277 8.32771C23.0244 8.08057 23.809 7.47447 24.3331 6.62408C24.8572 5.77368 25.0844 4.73797 24.9718 3.71286C24.8592 2.68775 24.4146 1.74434 23.722 1.0611C23.0294 0.377865 22.137 0.00217757 21.2135 0.0051124H3.97091C3.45883 -0.0230592 2.94696 0.0654142 2.46637 0.265164C1.98579 0.464914 1.5465 0.771777 1.17516 1.16713C0.803825 1.56249 0.508183 2.03809 0.306174 2.56509C0.104165 3.09209 0 3.65949 0 4.23287C0 4.80625 0.104165 5.37365 0.306174 5.90065C0.508183 6.42765 0.803825 6.90325 1.17516 7.29861C1.5465 7.69396 1.98579 8.00083 2.46637 8.20058C2.94696 8.40033 3.45883 8.4888 3.97091 8.46063H17.7851V14.5952C17.7737 14.719 17.7986 14.8436 17.8562 14.9501C17.9138 15.0566 18.0009 15.1393 18.1042 15.1855C18.2075 15.2317 18.3215 15.239 18.4289 15.2063C18.5363 15.1736 18.6312 15.1026 18.6993 15.0042L20.7106 12.7446L22.1277 16.6503C22.1528 16.7189 22.1897 16.7813 22.2364 16.8339C22.2831 16.8865 22.3386 16.9282 22.3998 16.9567C22.461 16.9852 22.5266 17 22.5928 17C22.6591 17.0001 22.7247 16.9855 22.7859 16.957C22.9106 16.8981 23.0099 16.7873 23.0628 16.648C23.1156 16.5087 23.118 16.3519 23.0694 16.2107L21.6157 12.305H24.4773C24.5774 12.3067 24.6755 12.2744 24.7588 12.2123C24.8421 12.1502 24.9065 12.0613 24.9436 11.9573C24.9836 11.8531 24.9946 11.7378 24.975 11.6265C24.9555 11.5152 24.9062 11.4131 24.8338 11.3337L22.1277 8.32771ZM3.96177 7.30528C3.23436 7.30528 2.53674 6.98212 2.02238 6.40689C1.50802 5.83166 1.21905 5.05148 1.21905 4.23798C1.21905 3.42448 1.50802 2.64431 2.02238 2.06908C2.53674 1.49385 3.23436 1.17069 3.96177 1.17069H21.2135C21.5736 1.16733 21.9309 1.24334 22.2648 1.39439C22.5987 1.54543 22.9027 1.76855 23.1595 2.051C23.4164 2.33345 23.6209 2.66971 23.7615 3.04056C23.9021 3.41142 23.976 3.80962 23.979 4.21242C23.982 4.61522 23.9141 5.01474 23.779 5.38817C23.6439 5.7616 23.4444 6.10162 23.1919 6.38881C22.9393 6.67601 22.6386 6.90477 22.307 7.06201C21.9754 7.21926 21.6193 7.30192 21.2592 7.30528L18.6627 4.43224C18.5946 4.3338 18.4997 4.26284 18.3923 4.23013C18.2849 4.19742 18.171 4.20473 18.0676 4.25095C17.9643 4.29718 17.8772 4.3798 17.8197 4.48631C17.7621 4.59282 17.7371 4.71741 17.7485 4.84122V7.3155L3.96177 7.30528ZM20.8569 11.1701C20.7908 11.1698 20.7252 11.1841 20.6641 11.2121C20.6029 11.2402 20.5472 11.2815 20.5003 11.3337L18.809 13.2252V6.21128L23.2431 11.1701H20.8569Z",
  fill: "#333333"
}));

// src/blocks/Button/Button.tsx
var BlockButtonComponent = ({
  data,
  onUpdate
}) => {
  const [label, setLabel] = React24.useState("");
  const [url, setUrl] = React24.useState("");
  React24.useEffect(() => {
    if (data.url) {
      setUrl(data.url);
    }
    if (data.label) {
      setLabel(data.label);
    }
  }, [data]);
  const onChangeLabel = (e2) => {
    setLabel(e2.target.value);
  };
  const onBlurLabel = (e2) => {
    if (e2.target.value) {
      onUpdate({ ...data, label: e2.target.value });
    }
  };
  const onChangeUrl = (e2) => {
    setUrl(e2.target.value);
  };
  const onBlurUrl = (e2) => {
    if (e2.target.value) {
      onUpdate({ ...data, url: e2.target.value });
    }
  };
  return /* @__PURE__ */ React24.createElement("div", {
    className: "BlockButton"
  }, /* @__PURE__ */ React24.createElement("div", {
    className: "BlockButton-field"
  }, /* @__PURE__ */ React24.createElement(Input_default, {
    type: "text",
    name: "field-text",
    id: "field-text",
    placeholder: "Indiquez le texte du bouton",
    value: label,
    onChange: onChangeLabel,
    onBlur: onBlurLabel,
    label: "Texte du bouton"
  })), /* @__PURE__ */ React24.createElement("div", {
    className: "BlockButton-field mt-4"
  }, /* @__PURE__ */ React24.createElement(Input_default, {
    type: "text",
    name: "field-url",
    id: "field-url",
    placeholder: "Indiquez le lien du bouton",
    value: url,
    icon: /* @__PURE__ */ React24.createElement("i", {
      className: "fa fa-link text-darkCharbon"
    }),
    iconAlignment: "left",
    onChange: onChangeUrl,
    onBlur: onBlurUrl,
    label: "URL du bouton"
  })));
};
var initialData = {
  label: "",
  url: ""
};
var moduleType3 = {
  id: "blockButton"
};
var blockButton = {
  type: moduleType3,
  component: BlockButtonComponent,
  initialData,
  title: {
    default: "Button",
    fr_FR: "Bouton"
  },
  icon: SvgButton,
  description: {
    default: "Link to an URL",
    fr_FR: "Lien vers une URL"
  }
};
var Button_default = blockButton;

// src/blocks/Text/Text.tsx
import * as React26 from "react";

// src/blocks/Text/assets/text.svg
import * as React25 from "react";
var SvgText = (props) => /* @__PURE__ */ React25.createElement("svg", {
  width: 15,
  height: 15,
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React25.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7.92 12.67H9.5C9.70952 12.67 9.91046 12.7532 10.0586 12.9014C10.2068 13.0495 10.29 13.2505 10.29 13.46C10.29 13.6695 10.2068 13.8705 10.0586 14.0186C9.91046 14.1668 9.70952 14.25 9.5 14.25H4.75C4.54048 14.25 4.33954 14.1668 4.19139 14.0186C4.04323 13.8705 3.96 13.6695 3.96 13.46C3.96 13.2505 4.04323 13.0495 4.19139 12.9014C4.33954 12.7532 4.54048 12.67 4.75 12.67H6.33V1.58H1.58V3.17C1.58 3.37952 1.49677 3.58046 1.34861 3.72861C1.20046 3.87677 0.999521 3.96 0.79 3.96C0.580479 3.96 0.379539 3.87677 0.231386 3.72861C0.0832319 3.58046 0 3.37952 0 3.17V0.79C0 0.580479 0.0832319 0.379539 0.231386 0.231386C0.379539 0.0832319 0.580479 0 0.79 0H13.5C13.7095 0 13.9105 0.0832319 14.0586 0.231386C14.2068 0.379539 14.29 0.580479 14.29 0.79V3.17C14.29 3.37952 14.2068 3.58046 14.0586 3.72861C13.9105 3.87677 13.7095 3.96 13.5 3.96C13.2905 3.96 13.0895 3.87677 12.9414 3.72861C12.7932 3.58046 12.71 3.37952 12.71 3.17V1.58H7.92V12.67Z",
  fill: "#333333"
}));

// src/blocks/Text/Text.tsx
function BlockTextComponent({
  data,
  onUpdate
}) {
  const [localData, setData] = React26.useState(data.value);
  React26.useEffect(() => {
    setData(data.value);
  }, [data]);
  const onChangeText = (e2) => {
    setData(e2.target.value);
  };
  const onBlurText = (e2) => {
    if (e2.target.value) {
      onUpdate({
        value: e2.target.value
      });
    }
  };
  return /* @__PURE__ */ React26.createElement("div", {
    className: "BlockText"
  }, data !== void 0 ? /* @__PURE__ */ React26.createElement("textarea", {
    className: "w-full rounded-md",
    placeholder: "Votre texte ici",
    rows: 5,
    onChange: onChangeText,
    onBlur: onBlurText,
    defaultValue: localData
  }) : null);
}
var initialData2 = {
  value: ""
};
var moduleType4 = {
  id: "blockText"
};
var Blocktext = {
  type: moduleType4,
  component: BlockTextComponent,
  initialData: initialData2,
  title: {
    default: "Text",
    fr_FR: "Texte"
  },
  icon: SvgText,
  description: {
    default: "Display a formated text",
    fr_FR: "Affiche un texte mis en forme"
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockText"
  }
};
var Text_default = Blocktext;

// src/blocks/List/List.tsx
import React28 from "react";

// src/blocks/List/assets/accordion.svg
import * as React27 from "react";
var SvgAccordion2 = (props) => /* @__PURE__ */ React27.createElement("svg", {
  width: 22,
  height: 18,
  viewBox: "0 0 22 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React27.createElement("path", {
  d: "M4.77332 8.72599H16.9231C17.4777 8.75248 18.032 8.66612 18.5523 8.47212C19.0726 8.27812 19.5481 7.98052 19.95 7.59736C20.3519 7.2142 20.6718 6.75345 20.8904 6.24301C21.109 5.73257 21.2217 5.18306 21.2217 4.62778C21.2217 4.0725 21.109 3.523 20.8904 3.01256C20.6718 2.50212 20.3519 2.04136 19.95 1.6582C19.5481 1.27504 19.0726 0.977448 18.5523 0.783448C18.032 0.589449 17.4777 0.503081 16.9231 0.529576H4.77332C3.72027 0.579878 2.72698 1.03362 1.99951 1.79667C1.27204 2.55972 0.866211 3.57352 0.866211 4.62778C0.866211 5.68204 1.27204 6.69585 1.99951 7.4589C2.72698 8.22195 3.72027 8.67569 4.77332 8.72599ZM4.77332 1.43613H16.9231C17.353 1.41276 17.7832 1.47725 18.1873 1.62568C18.5915 1.77411 18.9611 2.00335 19.2737 2.29942C19.5863 2.59548 19.8353 2.95216 20.0055 3.34766C20.1756 3.74316 20.2634 4.16919 20.2634 4.59974C20.2634 5.03029 20.1756 5.45633 20.0055 5.85183C19.8353 6.24733 19.5863 6.60401 19.2737 6.90007C18.9611 7.19614 18.5915 7.42538 18.1873 7.57381C17.7832 7.72224 17.353 7.78673 16.9231 7.76335H4.77332C3.96402 7.71935 3.20235 7.36686 2.64501 6.77839C2.08768 6.18993 1.77706 5.41025 1.77706 4.59974C1.77706 3.78924 2.08768 3.00956 2.64501 2.42109C3.20235 1.83263 3.96402 1.48014 4.77332 1.43613Z",
  fill: "#444444"
}), /* @__PURE__ */ React27.createElement("path", {
  d: "M16.9045 9.7078H4.75477C3.70171 9.7581 2.70843 10.2118 1.98096 10.9749C1.25348 11.7379 0.847656 12.7517 0.847656 13.806C0.847656 14.8603 1.25348 15.8741 1.98096 16.6371C2.70843 17.4002 3.70171 17.8539 4.75477 17.9042H16.9045C17.4592 17.9307 18.0134 17.8443 18.5337 17.6503C19.054 17.4563 19.5295 17.1587 19.9314 16.7756C20.3333 16.3924 20.6532 15.9317 20.8718 15.4212C21.0905 14.9108 21.2032 14.3613 21.2032 13.806C21.2032 13.2507 21.0905 12.7012 20.8718 12.1908C20.6532 11.6803 20.3333 11.2196 19.9314 10.8364C19.5295 10.4533 19.054 10.1557 18.5337 9.96167C18.0134 9.76767 17.4592 9.6813 16.9045 9.7078ZM16.9045 16.9696H4.75477C3.94546 16.9256 3.1838 16.5731 2.62646 15.9847C2.06912 15.3962 1.7585 14.6165 1.7585 13.806C1.7585 12.9955 2.06912 12.2158 2.62646 11.6274C3.1838 11.0389 3.94546 10.6864 4.75477 10.6424H16.9045C17.3344 10.619 17.7646 10.6835 18.1688 10.8319C18.5729 10.9804 18.9426 11.2096 19.2552 11.5057C19.5678 11.8017 19.8168 12.1584 19.9869 12.5539C20.1571 12.9494 20.2448 13.3755 20.2448 13.806C20.2448 14.2366 20.1571 14.6626 19.9869 15.0581C19.8168 15.4536 19.5678 15.8103 19.2552 16.1063C18.9426 16.4024 18.5729 16.6316 18.1688 16.7801C17.7646 16.9285 17.3344 16.993 16.9045 16.9696Z",
  fill: "#444444"
}), /* @__PURE__ */ React27.createElement("path", {
  d: "M14.96 4.99674H16.0348V6.10891C16.0331 6.15947 16.0423 6.20981 16.0616 6.25655C16.0809 6.30329 16.11 6.34536 16.147 6.37995C16.2208 6.45578 16.3215 6.49944 16.4273 6.50144C16.5311 6.49837 16.6305 6.45864 16.7077 6.38929C16.744 6.35228 16.7726 6.30844 16.7918 6.26032C16.8111 6.2122 16.8206 6.16074 16.8199 6.10891V4.99674H17.8947C18.0005 4.99474 18.1012 4.95108 18.175 4.87525C18.211 4.83996 18.2395 4.79777 18.2588 4.75119C18.2781 4.70461 18.2877 4.65462 18.2872 4.60421C18.2885 4.55232 18.2792 4.50071 18.2599 4.45251C18.2406 4.40431 18.2117 4.36054 18.175 4.32384C18.1012 4.248 18.0005 4.20434 17.8947 4.20234H16.8199V3.12755C16.8206 3.07573 16.8111 3.02427 16.7918 2.97615C16.7726 2.92802 16.744 2.88419 16.7077 2.84717C16.6297 2.78007 16.5302 2.74316 16.4273 2.74316C16.3244 2.74316 16.225 2.78007 16.147 2.84717C16.1107 2.88419 16.0821 2.92802 16.0628 2.97615C16.0436 3.02427 16.0341 3.07573 16.0348 3.12755V4.23972H14.96C14.9075 4.2402 14.8557 4.2512 14.8075 4.27207C14.7594 4.29294 14.7159 4.32325 14.6796 4.36122C14.6429 4.39792 14.6141 4.4417 14.5948 4.4899C14.5755 4.53809 14.5662 4.5897 14.5675 4.6416C14.567 4.692 14.5766 4.742 14.5959 4.78857C14.6152 4.83515 14.6436 4.87735 14.6796 4.91263C14.7588 4.97577 14.8592 5.00591 14.96 4.99674Z",
  fill: "#444444"
}), /* @__PURE__ */ React27.createElement("path", {
  d: "M17.8941 13.4359H16.8193V12.3611C16.8173 12.2553 16.7737 12.1545 16.6978 12.0807C16.6223 12.0124 16.524 11.9746 16.4221 11.9746C16.3203 11.9746 16.222 12.0124 16.1464 12.0807C16.1102 12.1177 16.0816 12.1616 16.0623 12.2097C16.0431 12.2578 16.0335 12.3093 16.0343 12.3611V13.4359H14.9501C14.8482 13.4425 14.7522 13.486 14.6799 13.5582C14.6077 13.6304 14.5642 13.7265 14.5576 13.8284C14.559 13.9325 14.599 14.0324 14.6698 14.1088C14.7068 14.1451 14.7506 14.1737 14.7987 14.1929C14.8469 14.2122 14.8983 14.2217 14.9501 14.221H16.0343V15.3051C16.0337 15.3555 16.0434 15.4055 16.0627 15.4521C16.0819 15.4986 16.1104 15.5408 16.1464 15.5761C16.1827 15.6141 16.2262 15.6444 16.2743 15.6653C16.3225 15.6861 16.3743 15.6971 16.4268 15.6976C16.5288 15.691 16.6248 15.6475 16.697 15.5753C16.7693 15.5031 16.8127 15.407 16.8193 15.3051V14.221H17.8941C17.946 14.2217 17.9974 14.2122 18.0455 14.1929C18.0937 14.1737 18.1375 14.1451 18.1745 14.1088C18.2453 14.0324 18.2853 13.9325 18.2867 13.8284C18.286 13.7404 18.2564 13.655 18.2025 13.5854C18.1653 13.5393 18.1184 13.502 18.0651 13.4761C18.0118 13.4503 17.9534 13.4365 17.8941 13.4359Z",
  fill: "#444444"
}));

// src/blocks/List/List.tsx
import { nanoid } from "nanoid";
var types = [
  {
    label: "Ordered",
    value: "ol" /* Ordered */
  },
  {
    label: "Unordered",
    value: "ul" /* Unordered */
  }
];
function BlockListComponent({
  data,
  onUpdate
}) {
  const [listItems, setListItems] = React28.useState([]);
  React28.useEffect(() => {
    if (data.values) {
      setListItems(data.values.map((value) => ({ id: nanoid(), value })));
    }
  }, []);
  const onChangeType = (e2) => {
    onUpdate({ ...data, type: e2.target.value });
  };
  const addLine = () => {
    const newListItems = [...listItems, { id: nanoid(), value: "" }];
    setListItems(newListItems);
    onUpdate({ ...data, values: newListItems.map(({ value }) => value) });
  };
  const deleteLine = (id) => {
    const newListItems = listItems.filter(({ id: currentId }) => currentId !== id);
    setListItems(newListItems);
    onUpdate({ ...data, values: newListItems.map(({ value }) => value) });
  };
  const handleUpdateText = (listItem, textData) => {
    const newListItems = listItems.map(({ id, value }) => ({
      id,
      value: id === listItem.id ? textData.value : value
    }));
    setListItems(newListItems);
    onUpdate({
      ...data,
      values: newListItems.map(({ value }) => value)
    });
  };
  return /* @__PURE__ */ React28.createElement("div", {
    className: "BlockList"
  }, /* @__PURE__ */ React28.createElement("div", {
    className: "BlockList-config flex flex-col w-1/3 mb-4"
  }, /* @__PURE__ */ React28.createElement("label", {
    htmlFor: "title-level"
  }, "Type"), /* @__PURE__ */ React28.createElement("select", {
    name: "title-level",
    id: "title-level",
    className: "rounded-md border p-2",
    onChange: onChangeType,
    value: data.type
  }, types.map(({ label, value }) => /* @__PURE__ */ React28.createElement("option", {
    key: value,
    value
  }, label)))), /* @__PURE__ */ React28.createElement("div", {
    className: "BlockList-list flex flex-col gap-4"
  }, listItems.map((listItem) => /* @__PURE__ */ React28.createElement("div", {
    className: "BlockList-line bg-white p-4 border-l-8 border-vermillon rounded-md",
    key: listItem.id
  }, /* @__PURE__ */ React28.createElement(Text_default.component, {
    id: `text-${listItem.id}`,
    data: { value: listItem.value },
    onUpdate: (textData) => {
      handleUpdateText(listItem, textData);
    }
  }), /* @__PURE__ */ React28.createElement("button", {
    type: "button",
    onClick: () => deleteLine(listItem.id),
    disabled: listItems.length === 1,
    className: `${listItems.length === 1 ? "text-gray-400" : "text-error"}`
  }, /* @__PURE__ */ React28.createElement("i", {
    className: "fa fa-trash"
  })))), /* @__PURE__ */ React28.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React28.createElement("button", {
    type: "button",
    className: "BlockList-add font-semibold w-max border-2 border-vermillon text-vermillon hover:bg-vermillon hover:text-white px-2 md:px-4 md:py-1 rounded-md",
    onClick: addLine
  }, /* @__PURE__ */ React28.createElement("i", {
    className: "fa fa-plus"
  }), " Ajouter une ligne"))));
}
var initialData3 = {
  type: "ul" /* Unordered */,
  values: [""]
};
var moduleType5 = {
  id: "blockList"
};
var BlockList = {
  type: moduleType5,
  component: BlockListComponent,
  initialData: initialData3,
  title: {
    default: "List",
    fr_FR: "Liste"
  },
  icon: SvgAccordion2,
  description: {
    default: "Display a list",
    fr_FR: "Affiche une liste"
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockList"
  }
};
var List_default = BlockList;

// src/blocks/Product/Product.tsx
import { Suspense as Suspense2, useEffect as useEffect15, useState as useState14 } from "react";

// src/blocks/Product/assets/product.svg
import * as React29 from "react";
var SvgProduct = (props) => /* @__PURE__ */ React29.createElement("svg", {
  width: 24,
  height: 25,
  viewBox: "0 0 24 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React29.createElement("path", {
  d: "M23.1203 19.6913V5.12125C23.1208 5.01464 23.0898 4.91027 23.031 4.82129C22.9723 4.73232 22.8886 4.66271 22.7903 4.62125L11.7603 0.0112518C11.6944 -0.00279117 11.6263 -0.00279117 11.5603 0.0112518C11.4945 -0.00375059 11.4262 -0.00375059 11.3603 0.0112518L0.330342 4.62125C0.23049 4.66039 0.145181 4.72944 0.0861036 4.81895C0.0270265 4.90847 -0.0029286 5.01405 0.000342419 5.12125V19.6913C-0.00356197 19.7998 0.0260012 19.907 0.0850279 19.9982C0.144055 20.0894 0.229693 20.1603 0.330342 20.2013L11.3303 24.8013C11.4402 24.841 11.5605 24.841 11.6703 24.8013L11.8503 24.7413L22.7903 20.2213C22.8926 20.1768 22.9789 20.1023 23.0378 20.0076C23.0968 19.913 23.1255 19.8026 23.1203 19.6913ZM11.5603 1.10125H11.6503L14.9003 2.46125L5.48034 6.67125L1.85034 5.15125L11.5603 1.10125ZM11.0303 23.4913L1.03034 19.3313V6.00125L5.03034 7.67125V11.9713C5.01987 12.0476 5.02589 12.1254 5.04798 12.1993C5.07007 12.2731 5.10772 12.3414 5.15841 12.3995C5.2091 12.4576 5.27164 12.5042 5.34183 12.5361C5.41202 12.5681 5.48824 12.5846 5.56534 12.5846C5.64245 12.5846 5.71866 12.5681 5.78885 12.5361C5.85905 12.5042 5.92159 12.4576 5.97228 12.3995C6.02296 12.3414 6.06062 12.2731 6.08271 12.1993C6.1048 12.1254 6.11081 12.0476 6.10034 11.9713V8.11125L11.0003 10.1113L11.0303 23.4913ZM11.5603 9.22125H11.4603L6.86034 7.22125L16.2703 3.05125H16.3703L21.2603 5.05125L20.7103 5.28125L11.5603 9.22125ZM22.0603 19.3413L21.9003 19.4013L12.1203 23.4913V10.1613L12.2703 10.1013L22.0903 6.00125L22.0603 19.3413Z",
  fill: "#333333"
}));

// src/blocks/Product/Product.tsx
var Product = ({
  productId,
  productIndex,
  data,
  onUpdate
}) => {
  const { data: product } = useProductsBy({ type: "ids", value: productId });
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex justify-between bg-white rounded-md gap-4 md:gap-8 p-2 mb-4 items-center sm:h-20"
  }, product?.[0]?.images.length > 0 ? /* @__PURE__ */ React.createElement("img", {
    className: "h-full hidden sm:block",
    src: product?.[0]?.images[0].url,
    alt: "product image"
  }) : /* @__PURE__ */ React.createElement("img", {
    className: "h-full hidden sm:block",
    src: "https://via.placeholder.com/150",
    alt: "product image"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:flex-row md:w-1/5 md:justify-between md:gap-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "font-semibold text-left"
  }, product?.[0]?.i18n.title), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm md:text-base text-left text-gray-400"
  }, "#", product?.[0]?.reference)), /* @__PURE__ */ React.createElement("div", {
    className: "md:border-x md:border-gray-400 flex gap-8 px-2 md:px-4"
  }, /* @__PURE__ */ React.createElement("button", {
    className: `${productIndex === 0 && "text-gray-400"}`,
    disabled: productIndex === 0,
    onClick: () => onUpdate({
      ...data,
      productList: [
        ...reorder(data.productList, productIndex, productIndex - 1)
      ]
    })
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-arrow-up"
  })), /* @__PURE__ */ React.createElement("button", {
    className: `${productIndex === data.productList.length - 1 && "text-gray-400"}`,
    disabled: productIndex === data.productList.length - 1,
    onClick: () => onUpdate({
      ...data,
      productList: [
        ...reorder(data.productList, productIndex, productIndex + 1)
      ]
    })
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-arrow-down"
  }))), /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: product?.[0]?.url,
    className: "hidden font-semibold tracking-wider border-2 border-vermillon text-vermillon hover:bg-vermillon hover:text-white px-2 md:px-4 md:py-1 rounded-md text-center lg:flex items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:mr-2"
  }, "Fiche produit"), /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-arrow-right hidden md:block"
  })), /* @__PURE__ */ React.createElement("button", {
    className: "md:self-start hover:text-vermillon pr-1",
    onClick: () => onUpdate({
      ...data,
      productList: data.productList.filter((id) => id != product?.[0]?.id)
    })
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-xmark"
  })));
};
function ProductsList({
  type,
  value,
  onUpdate
}) {
  const { data: products } = useProductsBy({ type, value });
  return /* @__PURE__ */ React.createElement("ul", {
    className: "top-full bg-white rounded-md shadow-xl overflow-hidden w-full absolute"
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, products?.length > 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, products?.filter((product) => !products.includes(product.id)).map((product) => /* @__PURE__ */ React.createElement("li", {
    key: product.id,
    onClick: () => {
      onUpdate(product);
    },
    className: "px-8 py-4 cursor-pointer hover:bg-gray-200 flex flex-col"
  }, /* @__PURE__ */ React.createElement("span", null, product.i18n.title), /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-400 text-sm"
  }, "#", product.reference)))) : value && value.length > 1 ? /* @__PURE__ */ React.createElement("li", {
    className: "px-8 py-4 text-center"
  }, /* @__PURE__ */ React.createElement("span", null, "Aucun r\xE9sultat", " ", value && value.length > 0 ? /* @__PURE__ */ React.createElement("span", null, 'pour "', /* @__PURE__ */ React.createElement("span", {
    className: `font-bold text-vermillon`
  }, value), '"') : "")) : null));
}
function BlockProductComponent({ data, onUpdate }) {
  const [searchByRef, setSearchByRef] = useState14(false);
  const [query, setQuery] = useState14("");
  useEffect15(() => query.startsWith("#") ? setSearchByRef(true) : setSearchByRef(false), [query]);
  const type = searchByRef ? "reference" : "title";
  const value = searchByRef ? query.substring(1) : query;
  return /* @__PURE__ */ React.createElement("div", {
    className: "BlockProduct"
  }, data.productList.map((productId, index2) => {
    return /* @__PURE__ */ React.createElement(Suspense2, {
      fallback: /* @__PURE__ */ React.createElement("div", {
        className: "text-center py-4 text-2xl text-vermillon"
      }, /* @__PURE__ */ React.createElement("i", {
        className: "fa fa-circle-notch fa-spin"
      }))
    }, /* @__PURE__ */ React.createElement(Product, {
      key: index2,
      productIndex: index2,
      productId,
      data,
      onUpdate
    }));
  }), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white border-l-8 border-vermillon rounded-md shadow-md px-4 md:px-14 py-4 md:py-8"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:text-xl font-extrabold"
  }, "Ajouter un produit"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 xl:w-2/3 relative"
  }, /* @__PURE__ */ React.createElement(Input_default, {
    onChange: (e2) => setQuery(e2.target.value),
    value: query,
    placeholder: "R\xE9f\xE9rence, nom, ...",
    name: "product-field",
    type: "text",
    className: searchByRef ? "text-vermillon" : "",
    icon: /* @__PURE__ */ React.createElement("i", {
      className: "fa fa-search text-vermillon"
    }),
    iconAlignment: "right",
    label: "Rechercher"
  }), /* @__PURE__ */ React.createElement(Suspense2, {
    fallback: /* @__PURE__ */ React.createElement("div", {
      className: "text-center py-4 text-2xl text-vermillon"
    }, /* @__PURE__ */ React.createElement("i", {
      className: "fa fa-circle-notch fa-spin"
    }))
  }, /* @__PURE__ */ React.createElement(ProductsList, {
    type,
    value,
    onUpdate: (product) => {
      onUpdate({
        ...data,
        productList: [...data.productList, product.id]
      });
      setQuery("");
    }
  })))));
}
var initialData4 = {
  productList: []
};
var moduleType6 = {
  id: "blockProduct"
};
var blockProduct = {
  type: moduleType6,
  component: BlockProductComponent,
  initialData: initialData4,
  title: {
    default: "Product",
    fr_FR: "Produit"
  },
  icon: SvgProduct,
  description: {
    default: "Display a product",
    fr_FR: "Affiche des produits du catalogue"
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockProduct"
  }
};
var Product_default = blockProduct;

// src/blocks/Raw/Raw.tsx
import { useEffect as useEffect16, useState as useState15 } from "react";

// src/blocks/Raw/assets/html.svg
import * as React30 from "react";
var SvgHtml = (props) => /* @__PURE__ */ React30.createElement("svg", {
  width: 21,
  height: 21,
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React30.createElement("path", {
  d: "M18.95 2.85741e-05H1.76C1.52934 -0.00128947 1.30071 0.0430028 1.08723 0.130358C0.873755 0.217714 0.679654 0.346409 0.51609 0.509043C0.352527 0.671677 0.222729 0.865041 0.134159 1.07801C0.0455887 1.29099 -3.76563e-06 1.51937 2.33271e-10 1.75003V18.92C-3.76563e-06 19.1507 0.0455887 19.3791 0.134159 19.592C0.222729 19.805 0.352527 19.9984 0.51609 20.161C0.679654 20.3236 0.873755 20.4523 1.08723 20.5397C1.30071 20.6271 1.52934 20.6713 1.76 20.67H18.95C19.4124 20.6674 19.8549 20.4818 20.181 20.1539C20.507 19.826 20.69 19.3824 20.69 18.92V1.75003C20.69 1.28763 20.507 0.844017 20.181 0.516114C19.8549 0.188211 19.4124 0.00267087 18.95 2.85741e-05ZM19.69 18.92C19.6874 19.1013 19.6135 19.2742 19.4844 19.4015C19.3553 19.5287 19.1813 19.6 19 19.6H1.76C1.57965 19.6 1.40669 19.5284 1.27917 19.4009C1.15164 19.2733 1.08 19.1004 1.08 18.92V5.92003H19.69V18.92ZM19.69 4.92003H1.08V1.75003C1.08 1.56968 1.15164 1.39672 1.27917 1.2692C1.40669 1.14167 1.57965 1.07003 1.76 1.07003H18.95C19.1313 1.07001 19.3053 1.14133 19.4344 1.26858C19.5635 1.39582 19.6374 1.56877 19.64 1.75003L19.69 4.92003Z",
  fill: "#333333"
}), /* @__PURE__ */ React30.createElement("path", {
  d: "M6.31094 15.6204C6.41206 15.7209 6.54832 15.7783 6.69094 15.7804C6.79721 15.7796 6.9009 15.7476 6.98903 15.6882C7.07716 15.6288 7.14581 15.5447 7.18638 15.4465C7.22695 15.3483 7.23764 15.2403 7.21711 15.136C7.19657 15.0317 7.14572 14.9359 7.07094 14.8604L5.01094 12.8004L7.07094 10.7304C7.12174 10.681 7.16212 10.6219 7.1897 10.5566C7.21727 10.4913 7.23148 10.4212 7.23148 10.3504C7.23148 10.2795 7.21727 10.2094 7.1897 10.1441C7.16212 10.0788 7.12174 10.0197 7.07094 9.97035C6.9688 9.87252 6.83236 9.81866 6.69094 9.82035C6.54971 9.81971 6.41365 9.87342 6.31094 9.97035L3.87094 12.4204C3.82023 12.4698 3.77995 12.5289 3.75247 12.5942C3.72499 12.6594 3.71087 12.7295 3.71094 12.8004C3.71164 12.8696 3.72615 12.938 3.75362 13.0015C3.7811 13.065 3.82098 13.1224 3.87094 13.1704L6.31094 15.6204Z",
  fill: "#333333"
}), /* @__PURE__ */ React30.createElement("path", {
  d: "M15.6892 12.8H15.6392L13.6392 14.8C13.5436 14.9034 13.4905 15.0391 13.4905 15.18C13.4905 15.3208 13.5436 15.4565 13.6392 15.56C13.7414 15.6588 13.877 15.7159 14.0192 15.72C14.09 15.72 14.1601 15.7059 14.2254 15.6784C14.2906 15.651 14.3497 15.6107 14.3992 15.56L16.8492 13.11C16.8978 13.0616 16.9361 13.0038 16.9619 12.9403C16.9877 12.8767 17.0003 12.8086 16.9992 12.74C17.0011 12.6698 16.9888 12.5999 16.963 12.5346C16.9373 12.4693 16.8985 12.4099 16.8492 12.36L14.3992 9.90997C14.3492 9.8606 14.2898 9.82186 14.2245 9.79609C14.1592 9.77031 14.0894 9.75802 14.0192 9.75997C13.9128 9.75783 13.8083 9.78775 13.7191 9.84583C13.63 9.90391 13.5604 9.98747 13.5194 10.0856C13.4785 10.1838 13.468 10.292 13.4893 10.3962C13.5107 10.5005 13.5629 10.5958 13.6392 10.67L15.6892 12.8Z",
  fill: "#333333"
}), /* @__PURE__ */ React30.createElement("path", {
  d: "M8.95914 16.9703C9.09442 17.0147 9.24176 17.0039 9.36911 16.9402C9.49647 16.8765 9.59351 16.7651 9.63914 16.6303L12.0891 9.30026C12.1336 9.16498 12.1228 9.01764 12.0591 8.89028C11.9954 8.76293 11.884 8.66588 11.7491 8.62026H11.5791C11.4654 8.61762 11.3538 8.65238 11.2617 8.71922C11.1696 8.78605 11.1019 8.88127 11.0691 8.99026L8.62914 16.3203C8.60191 16.3852 8.58789 16.4549 8.58789 16.5253C8.58789 16.5957 8.60191 16.6653 8.62914 16.7303C8.70644 16.8476 8.8237 16.9329 8.95914 16.9703Z",
  fill: "#333333"
}), /* @__PURE__ */ React30.createElement("path", {
  d: "M4.24933 2.43957H3.02933C2.95294 2.4291 2.87519 2.43511 2.80132 2.4572C2.72744 2.4793 2.65915 2.51695 2.60104 2.56764C2.54294 2.61832 2.49636 2.68087 2.46445 2.75106C2.43253 2.82125 2.41602 2.89746 2.41602 2.97457C2.41602 3.05168 2.43253 3.12789 2.46445 3.19808C2.49636 3.26827 2.54294 3.33082 2.60104 3.3815C2.65915 3.43219 2.72744 3.46985 2.80132 3.49194C2.87519 3.51403 2.95294 3.52004 3.02933 3.50957H4.24933C4.37864 3.49185 4.49715 3.4279 4.58295 3.32954C4.66875 3.23119 4.71601 3.10509 4.71601 2.97457C4.71601 2.84405 4.66875 2.71795 4.58295 2.6196C4.49715 2.52124 4.37864 2.45729 4.24933 2.43957Z",
  fill: "#333333"
}), /* @__PURE__ */ React30.createElement("path", {
  d: "M7.90934 2.43957H6.68934C6.56003 2.45729 6.44152 2.52124 6.35572 2.6196C6.26993 2.71795 6.22266 2.84405 6.22266 2.97457C6.22266 3.10509 6.26993 3.23119 6.35572 3.32954C6.44152 3.4279 6.56003 3.49185 6.68934 3.50957H7.90934C7.98574 3.52004 8.06348 3.51403 8.13736 3.49194C8.21123 3.46985 8.27952 3.43219 8.33763 3.3815C8.39573 3.33082 8.44231 3.26827 8.47423 3.19808C8.50614 3.12789 8.52266 3.05168 8.52266 2.97457C8.52266 2.89746 8.50614 2.82125 8.47423 2.75106C8.44231 2.68087 8.39573 2.61832 8.33763 2.56764C8.27952 2.51695 8.21123 2.4793 8.13736 2.4572C8.06348 2.43511 7.98574 2.4291 7.90934 2.43957Z",
  fill: "#333333"
}), /* @__PURE__ */ React30.createElement("path", {
  d: "M11.5794 2.43957H10.3594C10.283 2.4291 10.2053 2.43511 10.1314 2.4572C10.0575 2.4793 9.98923 2.51695 9.93112 2.56764C9.87302 2.61832 9.82644 2.68087 9.79452 2.75106C9.76261 2.82125 9.74609 2.89746 9.74609 2.97457C9.74609 3.05168 9.76261 3.12789 9.79452 3.19808C9.82644 3.26827 9.87302 3.33082 9.93112 3.3815C9.98923 3.43219 10.0575 3.46985 10.1314 3.49194C10.2053 3.51403 10.283 3.52004 10.3594 3.50957H11.5794C11.6558 3.52004 11.7336 3.51403 11.8074 3.49194C11.8813 3.46985 11.9496 3.43219 12.0077 3.3815C12.0658 3.33082 12.1124 3.26827 12.1443 3.19808C12.1762 3.12789 12.1927 3.05168 12.1927 2.97457C12.1927 2.89746 12.1762 2.82125 12.1443 2.75106C12.1124 2.68087 12.0658 2.61832 12.0077 2.56764C11.9496 2.51695 11.8813 2.4793 11.8074 2.4572C11.7336 2.43511 11.6558 2.4291 11.5794 2.43957Z",
  fill: "#333333"
}));

// src/blocks/Raw/Raw.tsx
var import_react_modal = __toESM(require_lib(), 1);

// assets/svg/html-warning.svg
import * as React31 from "react";
var SvgHtmlWarning = (props) => /* @__PURE__ */ React31.createElement("svg", {
  width: 317,
  height: 274,
  viewBox: "0 0 317 274",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  ...props
}, /* @__PURE__ */ React31.createElement("rect", {
  width: 317,
  height: 274,
  fill: "url(#pattern0)"
}), /* @__PURE__ */ React31.createElement("defs", null, /* @__PURE__ */ React31.createElement("pattern", {
  id: "pattern0",
  patternContentUnits: "objectBoundingBox",
  width: 1,
  height: 1
}, /* @__PURE__ */ React31.createElement("use", {
  xlinkHref: "#image0_640_49951",
  transform: "translate(-0.000748686) scale(0.000576236)"
})), /* @__PURE__ */ React31.createElement("image", {
  id: "image0_640_49951",
  width: 1738,
  height: 1500,
  xlinkHref: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AFvRHVja3kAAQAEAAAAPAACAHgAAAA6AG0AZQB0AGEAcABoAG8AcgBzAC4AIABWAGUAYwB0AG8AcgAgAGkAcwBvAGwAYQB0AGUAZAAgAGMAbwBuAGMAZQBwAHQAIABtAGUAdABhAHAAaABvAHIAIABpAGwAbAB1AHMAdAByAGEAdABpAG8AbgBzAC4AAwDeAAAAbQBGAG8AcgAgAGEAbABsACAAcQB1AGUAcwB0AGkAbwBuAHMAIABjAG8AbgBjAGUAcgBuAGkAbgBnACAAYwBvAHAAeQByAGkAZwBoAHQAIABwAGwAZQBhAHMAZQAgAGMAbwBuAHQAYQBjAHQAIAB2AGkAYQAgAGUAbQBhAGkAbAAgAGkAbgBmAG8AQAB2AGkAZwBlAC4AYwBvACAAbwByACAAdgBpAHMAaQB0ACAAbwB1AHIAIAB3AGUAYgBzAGkAdABlACAAdwB3AHcALgB2AGkAZwBlAC4AYwBvAAD/7gAmQWRvYmUAZMAAAAABAwAVBAMGCg0AAKWzAADH+gABVeEAAeLb/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wgARCAXcBsoDAREAAhEBAxEB/8QA+QABAAIDAQEBAAAAAAAAAAAAAAECAwQFBgcIAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUGEAABAgQDBwQDAQACAwEAAAAAAQIREgMEIDATEEBQYDEUBSEyMwZwIjQVIzXAQSQWEQABAgIECgcHAwQBAwQDAAABAAIRMSFxMgMQIDBgQVGBkRIiQFBhobHRc8FCUnIjMwThYhNwgpKy0vFTFMDwQ2OiwoMSAAEDAQcEAgMAAAAAAAAAAHABESGAACAwQGAxYVCQsMAQcaDQQRMAAgEBBQYHAQEBAQAAAAAAAAERMSAhQVFhEDDwcYGRQFBgobHB0fHhcMD/2gAMAwEAAhEDEQAAAfqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQULkgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9oACAEBAAEFAv8AxBZ9eiwd5CkL5Fx/o1j/AELiP+jdCeVchT8pZvVFRU/J9a9psKl1WqZCoijW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ABCSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS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SSSSSSIaANMVdSSSSSSSSSSSSHBySSSSSRKMSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSYEySSSSSSt8SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSPJSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSRSXSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSTSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS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"
})));

// src/blocks/Raw/Raw.tsx
var WarningModal = ({
  isOpen,
  setIsOpen
}) => {
  const [checked, setChecked] = useState15(false);
  return /* @__PURE__ */ React.createElement(import_react_modal.default, {
    ariaHideApp: false,
    isOpen,
    onRequestClose: () => setIsOpen(false),
    overlayClassName: "Overlay",
    className: "Modal-htmlWarning"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Modal-content flex flex-col p-4"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setIsOpen(false),
    className: "self-end"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-xmark hover:text-vermillon text-xl md:text-3xl"
  })), /* @__PURE__ */ React.createElement(SvgHtmlWarning, {
    className: "mx-auto"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "lg:px-12 lg:pb-12 text-mediumCharbon"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mb-4"
  }, "Ici un petit message pour informer sur l'utilisation de HTML directement dans le back-office. Ce message apparait en pop-in \xE0 chaque fois que l'utilisateur ajoute un bloc de HTML."), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-2 items-center mb-6"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    checked,
    onChange: () => setChecked(!checked),
    name: "display-alert",
    id: "display-alert"
  }), /* @__PURE__ */ React.createElement("label", {
    className: "mb-0 tracking-normal select-none",
    htmlFor: "display-alert"
  }, "Ne plus afficher l'alerte")), /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setIsOpen(false);
      if (checked) {
        localStorage.setItem("display-html-alert", "false");
      }
    },
    className: "bg-vermillon hover:bg-lightVermillon text-white py-2 px-4 rounded-md"
  }, "J'ai compris"))));
};
function BlockRawComponent({
  data,
  onUpdate
}) {
  const [value, setValue] = useState15("");
  const [isOpen, setIsOpen] = useState15(localStorage.getItem("display-html-alert") === "false" ? false : true);
  useEffect16(() => {
    if (data.value) {
      setValue(data.value);
    }
  }, [data]);
  const onChangeValue = (e2) => {
    setValue(e2.target.value);
  };
  const onBlurValue = (e2) => {
    if (e2.target.value) {
      onUpdate({ value: e2.target.value });
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("textarea", {
    className: "w-full rounded-md",
    placeholder: "Value",
    rows: 5,
    onChange: onChangeValue,
    onBlur: onBlurValue,
    value
  }), /* @__PURE__ */ React.createElement(WarningModal, {
    isOpen,
    setIsOpen
  }));
}
var initialData5 = {
  value: ""
};
var moduleType7 = {
  id: "blockRaw"
};
var blockRaw = {
  type: moduleType7,
  component: BlockRawComponent,
  initialData: initialData5,
  title: {
    default: "HTML",
    fr_FR: "HTML"
  },
  icon: SvgHtml,
  description: {
    default: "Raw HTML content",
    fr_FR: "Contenu libre HTML"
  }
};
var Raw_default = blockRaw;

// src/blocks/Separator/Separator.tsx
import * as React33 from "react";

// src/blocks/Separator/assets/separator.svg
import * as React32 from "react";
var SvgSeparator = (props) => /* @__PURE__ */ React32.createElement("svg", {
  width: 19,
  height: 21,
  viewBox: "0 0 19 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React32.createElement("path", {
  d: "M14.1924 13.45H4.09598C3.57853 13.45 3.06614 13.5519 2.58808 13.7499C2.11001 13.9479 1.67563 14.2382 1.30974 14.6041C0.570782 15.343 0.15564 16.3453 0.15564 17.3903V20.5884C0.189519 20.707 0.261113 20.8114 0.359585 20.8856C0.458057 20.9599 0.578047 21.0001 0.701394 21.0001C0.824741 21.0001 0.94473 20.9599 1.0432 20.8856C1.14167 20.8114 1.21327 20.707 1.24715 20.5884V17.3903C1.24708 17.0187 1.32112 16.6508 1.46495 16.3082C1.60877 15.9656 1.81949 15.6551 2.08477 15.3949C2.35005 15.1347 2.66456 14.93 3.0099 14.7929C3.35524 14.6557 3.72447 14.5888 4.09598 14.596H14.1924C14.9335 14.596 15.6442 14.8904 16.1683 15.4145C16.6923 15.9385 16.9867 16.6492 16.9867 17.3903V20.5884C17.0206 20.707 17.0922 20.8114 17.1906 20.8856C17.2891 20.9599 17.4091 21.0001 17.5324 21.0001C17.6558 21.0001 17.7758 20.9599 17.8743 20.8856C17.9727 20.8114 18.0443 20.707 18.0782 20.5884V17.3903C18.0783 16.3546 17.6707 15.3606 16.9435 14.6232C16.2163 13.8858 15.228 13.4643 14.1924 13.45Z",
  fill: "#333333"
}), /* @__PURE__ */ React32.createElement("path", {
  d: "M0.723483 11.2237H2.4044C2.52301 11.1898 2.62735 11.1182 2.70163 11.0197C2.77591 10.9213 2.81609 10.8013 2.81609 10.6779C2.81609 10.5546 2.77591 10.4346 2.70163 10.3361C2.62735 10.2377 2.52301 10.1661 2.4044 10.1322H0.723483C0.639013 10.1081 0.550095 10.1039 0.463729 10.1199C0.377364 10.136 0.295908 10.1719 0.225776 10.2248C0.155643 10.2777 0.0987481 10.3462 0.0595699 10.4248C0.0203918 10.5034 0 10.5901 0 10.6779C0 10.7658 0.0203918 10.8524 0.0595699 10.9311C0.0987481 11.0097 0.155643 11.0782 0.225776 11.1311C0.295908 11.184 0.377364 11.2199 0.463729 11.2359C0.550095 11.252 0.639013 11.2478 0.723483 11.2237Z",
  fill: "#333333"
}), /* @__PURE__ */ React32.createElement("path", {
  d: "M5.77597 10.0885C5.6915 10.0644 5.60259 10.0602 5.51622 10.0762C5.42985 10.0923 5.3484 10.1282 5.27827 10.1811C5.20813 10.234 5.15124 10.3025 5.11206 10.3811C5.07288 10.4597 5.05249 10.5464 5.05249 10.6342C5.05249 10.7221 5.07288 10.8087 5.11206 10.8874C5.15124 10.966 5.20813 11.0345 5.27827 11.0874C5.3484 11.1403 5.42985 11.1762 5.51622 11.1922C5.60259 11.2083 5.6915 11.2041 5.77597 11.18H7.47873C7.59733 11.1461 7.70167 11.0745 7.77595 10.976C7.85023 10.8776 7.89041 10.7576 7.89041 10.6342C7.89041 10.5109 7.85023 10.3909 7.77595 10.2924C7.70167 10.194 7.59733 10.1224 7.47873 10.0885H5.77597Z",
  fill: "#333333"
}), /* @__PURE__ */ React32.createElement("path", {
  d: "M10.8199 10.0885C10.7354 10.0644 10.6465 10.0602 10.5602 10.0762C10.4738 10.0923 10.3923 10.1282 10.3222 10.1811C10.2521 10.234 10.1952 10.3025 10.156 10.3811C10.1168 10.4597 10.0964 10.5464 10.0964 10.6342C10.0964 10.7221 10.1168 10.8087 10.156 10.8874C10.1952 10.966 10.2521 11.0345 10.3222 11.0874C10.3923 11.1403 10.4738 11.1762 10.5602 11.1922C10.6465 11.2083 10.7354 11.2041 10.8199 11.18H12.5008C12.5853 11.2041 12.6742 11.2083 12.7606 11.1922C12.847 11.1762 12.9284 11.1403 12.9985 11.0874C13.0687 11.0345 13.1256 10.966 13.1648 10.8874C13.2039 10.8087 13.2243 10.7221 13.2243 10.6342C13.2243 10.5464 13.2039 10.4597 13.1648 10.3811C13.1256 10.3025 13.0687 10.234 12.9985 10.1811C12.9284 10.1282 12.847 10.0923 12.7606 10.0762C12.6742 10.0602 12.5853 10.0644 12.5008 10.0885H10.8199Z",
  fill: "#333333"
}), /* @__PURE__ */ React32.createElement("path", {
  d: "M17.5533 10.0885H15.8724C15.7879 10.0644 15.699 10.0602 15.6127 10.0762C15.5263 10.0923 15.4448 10.1282 15.3747 10.1811C15.3046 10.234 15.2477 10.3025 15.2085 10.3811C15.1693 10.4597 15.1489 10.5464 15.1489 10.6342C15.1489 10.7221 15.1693 10.8087 15.2085 10.8874C15.2477 10.966 15.3046 11.0345 15.3747 11.0874C15.4448 11.1403 15.5263 11.1762 15.6127 11.1922C15.699 11.2083 15.7879 11.2041 15.8724 11.18H17.5533C17.6378 11.2041 17.7267 11.2083 17.8131 11.1922C17.8995 11.1762 17.9809 11.1403 18.051 11.0874C18.1212 11.0345 18.1781 10.966 18.2172 10.8874C18.2564 10.8087 18.2768 10.7221 18.2768 10.6342C18.2768 10.5464 18.2564 10.4597 18.2172 10.3811C18.1781 10.3025 18.1212 10.234 18.051 10.1811C17.9809 10.1282 17.8995 10.0923 17.8131 10.0762C17.7267 10.0602 17.6378 10.0644 17.5533 10.0885Z",
  fill: "#333333"
}), /* @__PURE__ */ React32.createElement("path", {
  d: "M4.09493 7.86195H14.1914C15.2345 7.85906 16.234 7.44264 16.9706 6.70399C17.7072 5.96535 18.1208 4.96476 18.1208 3.9216V0.723483C18.1449 0.639013 18.1491 0.550095 18.1331 0.463729C18.117 0.377364 18.0811 0.295908 18.0282 0.225776C17.9753 0.155643 17.9068 0.0987481 17.8282 0.0595699C17.7495 0.0203918 17.6629 0 17.5751 0C17.4872 0 17.4006 0.0203918 17.3219 0.0595699C17.2433 0.0987481 17.1748 0.155643 17.1219 0.225776C17.069 0.295908 17.0331 0.377364 17.017 0.463729C17.001 0.550095 17.0052 0.639013 17.0293 0.723483V3.9216C17.0293 4.66369 16.7353 5.37555 16.2115 5.90131C15.6878 6.42707 14.9771 6.72389 14.235 6.72678H4.09493C3.35095 6.72678 2.63744 6.43123 2.11137 5.90516C1.58529 5.37909 1.28975 4.66558 1.28975 3.9216V0.723483C1.25587 0.60488 1.18428 0.500542 1.0858 0.42626C0.987333 0.351979 0.867343 0.311797 0.743996 0.311797C0.620649 0.311797 0.500659 0.351979 0.402188 0.42626C0.303716 0.500542 0.232122 0.60488 0.198242 0.723483V3.9216C0.198179 4.95912 0.607322 5.95481 1.33686 6.69252C2.0664 7.43024 3.05747 7.85045 4.09493 7.86195Z",
  fill: "#333333"
}));

// src/blocks/Separator/Separator.tsx
var types2 = [
  { label: "Espace", value: "space" },
  { label: "Bordure", value: "hr" }
];
var initialData6 = {
  type: "space",
  size: 1
};
var BlockSeparatorComponent = ({
  data,
  onUpdate
}) => {
  const [type, setType] = React33.useState(initialData6.type);
  const [size, setSize] = React33.useState(initialData6.size);
  React33.useEffect(() => {
    if (data.type) {
      setType(data.type);
    }
    if (data.size) {
      setSize(data.size);
    }
  }, [data]);
  const onChangeType = (e2) => {
    setType(e2.target.value);
    onUpdate({ ...data, type: e2.target.value });
  };
  const onChangeSize = (e2) => {
    setSize(+e2.target.value);
  };
  const onBlurSize = (e2) => {
    if (e2.target.value) {
      onUpdate({ ...data, size: +e2.target.value });
    }
  };
  return /* @__PURE__ */ React33.createElement("div", {
    className: "BlockSeparator",
    "data-type": type
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "BlockSeparator-field"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "flex flex-col w-full md:w-1/2 mb-6"
  }, /* @__PURE__ */ React33.createElement("label", {
    htmlFor: "separator-type"
  }, "Style du s\xE9parateur"), /* @__PURE__ */ React33.createElement("select", {
    className: "rounded-md mb-4",
    name: "separator-type",
    id: "separator-type",
    onChange: onChangeType,
    value: type.toString()
  }, types2.map(({ label, value }) => /* @__PURE__ */ React33.createElement("option", {
    key: value,
    value
  }, label))), /* @__PURE__ */ React33.createElement(Input_default, {
    type: "number",
    name: "separator-size",
    id: "separator-size",
    className: "rounded-md",
    value: size.toString(),
    onChange: onChangeSize,
    onBlur: onBlurSize,
    label: "Taille du s\xE9parateur"
  })))), /* @__PURE__ */ React33.createElement("div", {
    className: "border-dotted border rounded-md p-4 border-black"
  }, type === "hr" ? /* @__PURE__ */ React33.createElement("div", {
    className: "bg-black h-px"
  }) : null));
};
var moduleType8 = {
  id: "blockSeparator"
};
var BlockSeparator = {
  type: moduleType8,
  component: BlockSeparatorComponent,
  initialData: initialData6,
  title: {
    default: "Separator",
    fr_FR: "S\xE9parateur"
  },
  icon: SvgSeparator,
  description: {
    default: "Display a separator",
    fr_FR: "Affiche un s\xE9parateur"
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockSeparator"
  }
};
var Separator_default = BlockSeparator;

// src/blocks/Title/Title.tsx
import * as React35 from "react";

// src/blocks/Title/assets/title.svg
import * as React34 from "react";
var SvgTitle = (props) => /* @__PURE__ */ React34.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React34.createElement("path", {
  d: "M11.9 0C9.54598 8.31164e-07 7.24484 0.698177 5.28768 2.00621C3.33052 3.31424 1.80527 5.17336 0.904881 7.34838C0.004493 9.5234 -0.230582 11.9166 0.229393 14.2253C0.689368 16.5339 1.82373 18.6543 3.48897 20.3181C5.15422 21.982 7.27553 23.1145 9.58456 23.5726C11.8936 24.0306 14.2866 23.7935 16.4609 22.8913C18.6351 21.9891 20.493 20.4623 21.7994 18.504C23.1057 16.5457 23.802 14.244 23.8 11.89C23.7947 8.73647 22.5389 5.71376 20.3081 3.48481C18.0773 1.25587 15.0535 0.00264336 11.9 0V0ZM11.9 22.54C9.79363 22.54 7.73456 21.9154 5.98318 20.7452C4.23179 19.5749 2.86676 17.9116 2.06068 15.9656C1.25461 14.0195 1.04371 11.8782 1.45464 9.81229C1.86557 7.74639 2.87988 5.84874 4.36931 4.35931C5.85874 2.86988 7.75639 1.85557 9.82229 1.44464C11.8882 1.0337 14.0295 1.24461 15.9756 2.05068C17.9216 2.85676 19.5849 4.22179 20.7552 5.97318C21.9254 7.72456 22.55 9.78363 22.55 11.89C22.5474 14.7137 21.4245 17.4211 19.4278 19.4178C17.4311 21.4145 14.7237 22.5374 11.9 22.54Z",
  fill: "#333333"
}), /* @__PURE__ */ React34.createElement("path", {
  d: "M16.4507 6.87996H7.5707C7.48103 6.87861 7.392 6.89528 7.30889 6.92897C7.22578 6.96267 7.15028 7.01271 7.08686 7.07612C7.02345 7.13954 6.97341 7.21504 6.93972 7.29815C6.90602 7.38126 6.88935 7.47029 6.8907 7.55996V9.21996C6.8907 9.40031 6.96234 9.57327 7.08987 9.70079C7.21739 9.82832 7.39035 9.89996 7.5707 9.89996C7.75105 9.89996 7.92401 9.82832 8.05153 9.70079C8.17906 9.57327 8.2507 9.40031 8.2507 9.21996V8.21996H11.3307V15.74H10.3307C10.1504 15.74 9.97739 15.8116 9.84987 15.9391C9.72234 16.0666 9.6507 16.2396 9.6507 16.42C9.6507 16.6003 9.72234 16.7733 9.84987 16.9008C9.97739 17.0283 10.1504 17.1 10.3307 17.1H13.6707C13.851 17.1 14.024 17.0283 14.1515 16.9008C14.2791 16.7733 14.3507 16.6003 14.3507 16.42C14.3507 16.2396 14.2791 16.0666 14.1515 15.9391C14.024 15.8116 13.851 15.74 13.6707 15.74H12.6707V8.23996H15.7507V9.23996C15.7507 9.42031 15.8223 9.59327 15.9499 9.72079C16.0774 9.84832 16.2504 9.91996 16.4307 9.91996C16.611 9.91996 16.784 9.84832 16.9115 9.72079C17.0391 9.59327 17.1107 9.42031 17.1107 9.23996V7.55996C17.112 7.47197 17.096 7.38458 17.0635 7.30279C17.0311 7.22099 16.9828 7.14639 16.9216 7.08325C16.8603 7.0201 16.7871 6.96965 16.7063 6.93477C16.6256 6.89989 16.5387 6.88126 16.4507 6.87996Z",
  fill: "#333333"
}));

// src/blocks/Title/Title.tsx
var levels = [
  {
    label: "Neutre",
    value: 0
  },
  {
    label: "Niveau 1",
    value: 1
  },
  {
    label: "Niveau 2",
    value: 2
  },
  {
    label: "Niveau 3",
    value: 3
  },
  {
    label: "Niveau 4",
    value: 4
  },
  {
    label: "Niveau 5",
    value: 5
  },
  {
    label: "Niveau 6",
    value: 6
  }
];
function BlockTitleComponent({
  data,
  onUpdate
}) {
  const [level, setLevel] = React35.useState(initialData7.level);
  const [text, setText] = React35.useState(initialData7.text);
  React35.useEffect(() => {
    if (data.level) {
      setLevel(data.level);
    }
    if (data.text) {
      setText(data.text);
    }
  }, [data]);
  const onChangeLevel = (e2) => {
    setLevel(parseInt(e2.target.value, 10));
    onUpdate({ ...data, level: parseInt(e2.target.value, 10) });
  };
  const onChangeText = (e2) => {
    setText(e2.target.value);
  };
  const onBlurText = (e2) => {
    if (e2.target.value) {
      onUpdate({ ...data, text: e2.target.value });
    }
  };
  return /* @__PURE__ */ React35.createElement("div", {
    className: "BlockTitle"
  }, /* @__PURE__ */ React35.createElement("div", {
    className: "BlockTitle-field md:w-1/2"
  }, /* @__PURE__ */ React35.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React35.createElement("label", {
    htmlFor: "title-level"
  }, "Style"), /* @__PURE__ */ React35.createElement("select", {
    name: "title-level",
    id: "title-level",
    className: "rounded-md",
    onChange: onChangeLevel,
    value: level.toString()
  }, levels.map(({ label, value }) => /* @__PURE__ */ React35.createElement("option", {
    key: value,
    value
  }, label))))), /* @__PURE__ */ React35.createElement("div", {
    className: "flex-grow BlockTitle-field mt-4 md:w-1/2"
  }, /* @__PURE__ */ React35.createElement(Input_default, {
    type: "text",
    name: "title-text",
    id: "title-text",
    className: "rounded-md",
    value: text,
    onChange: onChangeText,
    onBlur: onBlurText,
    placeholder: "Votre titre ici"
  })));
}
var initialData7 = {
  level: 0,
  text: ""
};
var moduleType9 = {
  id: "blockTitle"
};
var BlockTitle = {
  type: moduleType9,
  component: BlockTitleComponent,
  initialData: initialData7,
  title: {
    default: "Title",
    fr_FR: "Titre"
  },
  icon: SvgTitle,
  description: {
    default: "Display a title",
    fr_FR: "Affiche un titre"
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockTitle"
  }
};
var Title_default = BlockTitle;

// src/blocks/Video/Video.tsx
import * as React37 from "react";

// src/blocks/Video/assets/video.svg
import * as React36 from "react";
var SvgVideo = (props) => /* @__PURE__ */ React36.createElement("svg", {
  width: 21,
  height: 24,
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React36.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M19.9551 9.80845H5.13784L19.3717 5.67813C19.4267 5.66411 19.4782 5.63875 19.5229 5.60366C19.5675 5.56858 19.6044 5.52455 19.631 5.47439C19.6724 5.36712 19.6724 5.24828 19.631 5.141L18.8809 2.5665C18.7349 2.07042 18.4342 1.63396 18.0228 1.32077C17.6113 1.00758 17.1105 0.834041 16.5935 0.825469C16.3679 0.824339 16.1434 0.855525 15.9267 0.918077L2.56334 4.78909C1.95422 4.97756 1.44329 5.39737 1.14027 5.95838C0.837258 6.51939 0.766322 7.17686 0.9427 7.78959L1.6743 10.2993V20.6528C1.6743 21.2939 1.92896 21.9087 2.38225 22.362C2.60669 22.5864 2.87315 22.7645 3.1664 22.8859C3.45965 23.0074 3.77396 23.0699 4.09137 23.0699H17.9826C18.622 23.0675 19.2344 22.8117 19.6857 22.3587C20.137 21.9057 20.3904 21.2923 20.3904 20.6528V10.2344C20.388 10.1206 20.341 10.0123 20.2597 9.93264C20.1783 9.853 20.069 9.80842 19.9551 9.80845ZM16.5379 10.6697L14.6857 13.8739H12.2964L14.1486 10.6697H16.5379ZM13.1392 10.6697L11.287 13.8739H8.88847L10.7406 10.6697H13.1392ZM9.7312 10.6697L7.87904 13.8739H5.48975L7.34191 10.6697H9.7312ZM6.33249 10.6697L4.48033 13.8739H2.50778V10.6697H6.33249ZM16.1675 1.75155C16.3065 1.71493 16.4497 1.69626 16.5935 1.69598C16.9289 1.69448 17.2557 1.80206 17.5246 2.00251C17.7936 2.20296 17.99 2.48542 18.0844 2.80728L18.7142 4.96505L16.9731 5.47439L16.9083 5.40031L13.8245 2.43685L16.1675 1.75155ZM12.8706 2.67763C12.8835 2.70347 12.9026 2.72574 12.9262 2.74245L16.0193 5.70591L13.6948 6.38195C13.6848 6.35428 13.6651 6.33122 13.6393 6.31712L10.5554 3.38145L12.8706 2.67763ZM9.59229 3.60371L9.65711 3.66853L12.741 6.64125L10.4258 7.30803C10.4128 7.28219 10.3938 7.25992 10.3702 7.24321L7.27709 4.32605L9.59229 3.60371ZM6.32323 4.52979C6.33987 4.55585 6.36199 4.57797 6.38805 4.59462L9.4719 7.56733L7.1567 8.23411L7.10113 8.16928L4.00802 5.27991L6.32323 4.52979ZM1.74839 7.54881C1.68721 7.35492 1.66633 7.15057 1.68703 6.94831C1.70773 6.74605 1.76958 6.55016 1.86878 6.37269C1.96627 6.19293 2.09824 6.03415 2.25715 5.90544C2.41605 5.77673 2.59877 5.6806 2.79486 5.62256L3.0449 5.54848L3.10047 5.62256L6.19357 8.58602L2.3596 9.69732L1.74839 7.54881ZM19.5199 20.6528C19.5199 21.063 19.3569 21.4564 19.0669 21.7464C18.7769 22.0365 18.3835 22.1994 17.9733 22.1994H4.08211C3.67194 22.1994 3.27857 22.0365 2.98853 21.7464C2.6985 21.4564 2.53556 21.063 2.53556 20.6528V14.7352H19.5199V20.6528ZM19.5199 13.8739H15.7044L17.5566 10.6697H19.5291L19.5199 13.8739Z",
  fill: "#444444"
}), /* @__PURE__ */ React36.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M13.7958 18.051L9.98032 15.8469C9.91519 15.8058 9.83973 15.7839 9.76269 15.7839C9.68565 15.7839 9.61019 15.8058 9.54506 15.8469C9.4807 15.8851 9.42729 15.9393 9.38998 16.0042C9.35267 16.0691 9.33272 16.1425 9.33207 16.2174V20.6255C9.33111 20.7019 9.35029 20.7772 9.38768 20.8439C9.42507 20.9105 9.47935 20.9662 9.54506 21.0052C9.61373 21.041 9.68989 21.06 9.76732 21.0608C9.84196 21.0612 9.91542 21.0421 9.98032 21.0052L13.7958 18.8011C13.8635 18.7646 13.9201 18.7105 13.9595 18.6445C13.999 18.5785 14.0198 18.503 14.0198 18.4261C14.0198 18.3491 13.999 18.2737 13.9595 18.2076C13.9201 18.1416 13.8635 18.0875 13.7958 18.051ZM10.2026 19.8754V17.0045L12.7123 18.4492L10.2026 19.8754Z",
  fill: "#444444"
}));

// src/utils/youtube.ts
var getYouTubeID = (url) => url.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/)?.[6];

// src/blocks/Video/Video.tsx
var YouTubeFrame = ({
  url,
  className,
  ...props
}) => /* @__PURE__ */ React37.createElement("iframe", {
  ...props,
  className: `${className}`,
  src: `https://www.youtube.com/embed/${url}`,
  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  allowFullScreen: true
});
var BlockVideoComponent = ({ data, onUpdate }) => {
  const [url, setUrl] = React37.useState("");
  const [isUrlValid, setIsUrlValid] = React37.useState(false);
  React37.useEffect(() => {
    if (data.url) {
      setUrl(data.url);
    }
  }, [data]);
  React37.useEffect(() => {
    if (getYouTubeID(url)?.trim().length === 11) {
      setIsUrlValid(true);
    } else {
      setIsUrlValid(false);
    }
  }, [url]);
  return /* @__PURE__ */ React37.createElement("div", {
    className: "BlockVideo"
  }, url.length > 0 && isUrlValid ? /* @__PURE__ */ React37.createElement(YouTubeFrame, {
    url: getYouTubeID(url)?.trim(),
    className: "w-full lg:w-1/3",
    style: { aspectRatio: "16/9" }
  }) : null, /* @__PURE__ */ React37.createElement("div", {
    className: "bg-white border-l-8 border-vermillon rounded-md shadow-md p-4 md:px-14 md:py-8 mt-8"
  }, /* @__PURE__ */ React37.createElement("div", {
    className: "font-bold md:text-xl"
  }, "Ajouter une vid\xE9o depuis YouTube"), /* @__PURE__ */ React37.createElement("div", {
    className: "BlockVideo-field flex flex-col xl:w-2/3 mt-4"
  }, /* @__PURE__ */ React37.createElement(Input_default, {
    name: "video-url",
    id: "video-url",
    type: "text",
    placeholder: "URL de la vid\xE9o",
    className: `${url.length > 2 && isUrlValid && "border-greenDark bg-greenLight"}`,
    onChange: (e2) => setUrl(e2.target.value),
    onBlur: (e2) => onUpdate({ ...data, url: e2.target.value }),
    value: url,
    icon: /* @__PURE__ */ React37.createElement("i", {
      className: "fa fa-link text-darkCharbon"
    }),
    iconAlignment: "left",
    isValid: isUrlValid,
    label: "URL de la vid\xE9o"
  }))));
};
var initialData8 = {
  url: ""
};
var moduleType10 = {
  id: "blockVideo"
};
var blockVideo = {
  type: moduleType10,
  component: BlockVideoComponent,
  initialData: initialData8,
  title: {
    default: "Video",
    fr_FR: "Vid\xE9o"
  },
  icon: SvgVideo,
  description: {
    default: "Display a YouTube video",
    fr_FR: "Affiche une vid\xE9o YouTube"
  },
  image: {
    default: ""
  }
};
var Video_default = blockVideo;

// src/blocks/index.ts
var Columns = {
  TwoColumns,
  ThreeColumns,
  FourColumns,
  FiveColumns,
  SixColumns
};

// src/hooks/usePlugins.tsx
import { useEffect as useEffect20, useState as useState19 } from "react";
import { nanoid as nanoid2 } from "nanoid";
var TB_DEFAULT_PLUGINS = [
  { id: nanoid2(), ...Text_default },
  { id: nanoid2(), ...Title_default },
  { id: nanoid2(), ...Button_default },
  { id: nanoid2(), ...List_default },
  { id: nanoid2(), ...Video_default },
  { id: nanoid2(), ...Raw_default },
  { id: nanoid2(), ...Accordion_default },
  { id: nanoid2(), ...Separator_default },
  { id: nanoid2(), ...Product_default },
  ...Object.values(Columns).map((colType) => ({ id: nanoid2(), ...colType }))
];
window.eventTBPlugins = new CustomEvent("update-tb-plugins");
function registerPlugin(plugin) {
  if (!window.TB__PLUGINS)
    window.TB__PLUGINS = [];
  window.TB__PLUGINS.push({ ...plugin, id: nanoid2() });
  document.dispatchEvent(window.eventTBPlugins);
}
function usePlugins() {
  const [plugins, setPlugins] = useState19([
    ...TB_DEFAULT_PLUGINS,
    ...window.TB__PLUGINS || []
  ]);
  useEffect20(() => {
    const fn4 = () => {
      setPlugins([...TB_DEFAULT_PLUGINS, ...window.TB__PLUGINS]);
    };
    document.addEventListener("update-tb-plugins", fn4);
    () => {
      document.removeEventListener("update-tb-plugins", fn4);
    };
  }, []);
  return plugins;
}

// src/components/AddBlocks/AddBlocks.tsx
import { useState as useState20 } from "react";
var AddButton = ({
  plugin,
  setIsOpen
}) => {
  const { addBlock } = useBlocksContext();
  const Icon2 = plugin?.icon;
  return /* @__PURE__ */ React.createElement(tippy_react_esm_default, {
    content: /* @__PURE__ */ React.createElement(BlockTooltip_default, {
      title: plugin.title.fr_FR,
      description: plugin?.description?.fr_FR
    }),
    delay: [500, 0]
  }, /* @__PURE__ */ React.createElement("button", {
    className: "flex flex-col items-center justify-center w-24 h-24 gap-2 rounded-md BlocksEditor-btn bg-pearlLight hover:bg-pearlMedium md:h-28 md:w-28",
    onClick: () => {
      addBlock({
        id: nanoid3(),
        data: plugin.initialData,
        parent: null,
        type: { id: plugin.type.id }
      });
      setIsOpen(false);
    },
    key: plugin.id
  }, /* @__PURE__ */ React.createElement(Icon2, null), plugin.title.fr_FR));
};
function AddBlock({
  excludeLayout
}) {
  const [isOpen, setIsOpen] = useState20(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center p-4 border border-dotted rounded-md border-greyDark"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-2 rounded-full bg-pearlLight"
  }, /* @__PURE__ */ React.createElement(SvgDrag, null)), /* @__PURE__ */ React.createElement("span", {
    className: "my-4"
  }, "Glissez-d\xE9posez le type de contenu souhait\xE9"), /* @__PURE__ */ React.createElement("button", {
    className: "px-2 font-semibold border-2 rounded-md w-max border-vermillon text-vermillon hover:bg-vermillon hover:text-white md:px-4 md:py-1",
    onClick: () => {
      setIsOpen(true);
    }
  }, "Ajouter du contenu"), /* @__PURE__ */ React.createElement(AddBlockModal, {
    title: "Choisissez le contenu souhait\xE9",
    isOpen,
    setIsOpen
  }, /* @__PURE__ */ React.createElement(ModalContent, {
    excludeLayout,
    setIsOpen
  })));
}
var AddBlockModal = ({
  children,
  title,
  isOpen,
  setIsOpen
}) => {
  return /* @__PURE__ */ React.createElement(import_react_modal2.default, {
    isOpen,
    onRequestClose: () => setIsOpen(false),
    overlayClassName: "Overlay",
    className: "Modal-TheliaBlocks"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col p-4 Modal-content"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setIsOpen(false),
    className: "self-end"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "text-xl fa fa-xmark hover:text-vermillon md:text-3xl"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "lg:px-12 lg:pb-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-3 mb-6 font-extrabold text-center md:text-left md:text-xl"
  }, title), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap BlocksEditor-AddBlocks"
  }, children))));
};
var ModalContent = ({
  excludeLayout,
  setIsOpen
}) => {
  const [subModalOpen, setSubModalOpen] = useState20(false);
  const plugins = usePlugins();
  let availablePLugins = plugins;
  if (excludeLayout) {
    availablePLugins = plugins.filter((plugin) => !excludeLayout.includes(plugin.layout));
  }
  const [commonBlocks, layoutPlugins] = (0, import_partition.default)(availablePLugins, (i3) => !i3.layout);
  const layoutPluginsByType = (0, import_groupBy.default)(layoutPlugins, "layout");
  return /* @__PURE__ */ React.createElement("ol", {
    className: "flex flex-wrap justify-center gap-4"
  }, commonBlocks.map((plugin, index2) => {
    return /* @__PURE__ */ React.createElement(AddButton, {
      key: index2,
      plugin,
      setIsOpen
    });
  }), Object.entries(layoutPluginsByType).map(([layoutType, layoutPluginsByType2], index2) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: index2,
      className: "inline-block BlocksEditor-dropdown group"
    }, layoutPluginsByType2.length === 1 ? /* @__PURE__ */ React.createElement(AddButton, {
      plugin: layoutPluginsByType2[0],
      setIsOpen
    }) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
      onClick: () => setSubModalOpen(true),
      className: "flex flex-col items-center justify-center w-24 h-24 gap-2 rounded-md BlocksEditor-btn bg-pearlLight hover:bg-pearlMedium md:h-28 md:w-28"
    }, layoutType), /* @__PURE__ */ React.createElement(AddBlockModal, {
      title: "Choisissez le nombre de colonnes",
      isOpen: subModalOpen,
      setIsOpen: setSubModalOpen
    }, /* @__PURE__ */ React.createElement("ol", {
      className: "flex flex-wrap gap-2 BlocksEditor-dropdown__content"
    }, layoutPluginsByType2.map((plugin, index3) => /* @__PURE__ */ React.createElement(AddButton, {
      key: index3,
      plugin,
      setIsOpen
    }))))));
  }));
};

// src/components/BlocksContent/BlocksContent.tsx
function BlocksContent() {
  const { blockList, moveBlockTo } = useBlocksContext();
  const { DndWrapper: DndWrapper2, DndWrapElement: DndWrapElement2 } = useDragAndDrop_default();
  if (!blockList || !blockList.length)
    return null;
  const onDragEnd3 = (e2) => {
    if (e2.destination) {
      moveBlockTo(e2.source.index, e2.destination.index);
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "BlocksContent my-12"
  }, blockList.length > 0 && /* @__PURE__ */ React.createElement(DndWrapper2, {
    id: "main",
    onDragEnd: onDragEnd3
  }, blockList.map((block, index2) => /* @__PURE__ */ React.createElement(DndWrapElement2, {
    key: block.id,
    id: block.id,
    index: index2
  }, ({ DndDragHandle: DndDragHandle2 }) => /* @__PURE__ */ React.createElement(Block_default, {
    DndDragHandle: DndDragHandle2,
    key: index2,
    block
  })))));
}

// src/components/GroupLocale/GroupLocale.tsx
import { useContext as useContext9 } from "react";
function GroupLocale() {
  const { locales, currentLocale, setCurrentLocale } = useContext9(LocaleContext);
  if (!locales || locales.length <= 0) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: (e2) => {
      e2.preventDefault();
    },
    className: "flex gap-8"
  }, locales.map((locale) => {
    return /* @__PURE__ */ React.createElement("label", {
      htmlFor: locale.code,
      key: locale.id,
      className: locale.code === currentLocale ? "bg-red" : ""
    }, /* @__PURE__ */ React.createElement("input", {
      id: locale.code,
      type: "radio",
      name: "locale",
      value: locale.code,
      checked: currentLocale === locale.code,
      onChange: () => {
        setCurrentLocale(locale.code);
      },
      className: "sr-only"
    }), locale.title);
  }));
}

// src/components/GroupTitle/GroupTitle.tsx
import {
  useContext as useContext10,
  useEffect as useEffect22,
  useLayoutEffect as useLayoutEffect4,
  useRef as useRef6,
  useState as useState22
} from "react";
function GroupTitle() {
  const titleRef = useRef6(null);
  const [title, setTitle] = useState22("");
  const [isEditing, setIsEditing] = useState22(false);
  const { group, editGroup } = useContext10(BlocksGroupContext);
  useEffect22(() => {
    if (group?.title) {
      setTitle(group.title);
    }
  }, [group]);
  useLayoutEffect4(() => {
    if (isEditing && titleRef.current) {
      titleRef?.current?.focus();
    }
  }, [isEditing, titleRef]);
  return /* @__PURE__ */ React.createElement("div", null, isEditing ? /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    ref: titleRef,
    value: title,
    onChange: (e2) => setTitle(e2.target.value),
    className: "w-full",
    onBlur: () => {
      setIsEditing(false);
      editGroup({ ...group, title });
    }
  })) : /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-4xl"
  }, title || "aucun titre"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "bg-gray-500 text-white p-4 hover:bg-gray-700",
    onClick: () => {
      setIsEditing(true);
    }
  }, "edit")));
}

// src/BlocksEditor.tsx
var import_react_modal4 = __toESM(require_lib(), 1);

// src/components/ToolBar/ToolBar.tsx
import { Suspense as Suspense3, useContext as useContext11, useState as useState24 } from "react";

// src/components/ErrorBoundary.tsx
import { Component } from "react";
var ErrorBoundary2 = class extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      hasError: false
    });
  }
  static getDerivedStateFromError(_2) {
    return { hasError: true };
  }
  componentDidCatch(error2, errorInfo) {
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ React.createElement("h1", {
        className: "p-8 text-3xl text-red"
      }, "Une erreur est survenue");
    }
    return this.props.children;
  }
};
var ErrorBoundary_default = ErrorBoundary2;

// src/components/Preview/Preview.tsx
import { useEffect as useEffect24, useState as useState23 } from "react";

// src/components/Iframe/Iframe.tsx
import { useEffect as useEffect23, useRef as useRef7 } from "react";
var Iframe = ({ content }) => {
  const ref2 = useRef7(null);
  useEffect23(() => {
    const node = ref2.current;
    if (!node)
      return;
    let doc = node.contentDocument;
    if (!doc)
      return;
    doc.open();
    doc.write(content);
    doc.close();
    node.style.width = "100%";
    if (node.contentWindow) {
      node.style.height = `80vh`;
    }
  }, [ref2, content]);
  return /* @__PURE__ */ React.createElement("iframe", {
    src: "about:blank",
    frameBorder: "0",
    ref: ref2,
    sandbox: "allow-same-origin"
  });
};
var Iframe_default = Iframe;

// src/components/Preview/Preview.tsx
var import_react_modal3 = __toESM(require_lib(), 1);
function Preview({
  timestamp,
  data
}) {
  const [isOpen, setIsOpen] = useState23(true);
  const { blockList } = useBlocksContext();
  const preview = usePreviewGroup(timestamp, JSON.stringify(data || blockList));
  useEffect24(() => {
    if (timestamp) {
      setIsOpen(true);
    }
    return () => {
      setIsOpen(false);
    };
  }, [timestamp]);
  if (preview.isLoading) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "text-green text-4xl"
    }, "Chargement");
  }
  if (preview.isError) {
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_modal3.default, {
    onRequestClose: () => setIsOpen(false),
    isOpen,
    overlayClassName: "Overlay",
    className: "Modal-TheliaBlocks"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setIsOpen(false),
    className: "bg-red"
  }, "close"), preview.data ? /* @__PURE__ */ React.createElement(Iframe_default, {
    content: preview.data
  }) : null));
}

// src/components/ToolBar/ToolBar.tsx
var ToolBar = () => {
  const { group } = useContext11(BlocksGroupContext);
  const { blockList } = useBlocksContext();
  const mutation = useCreateOrUpdateGroup();
  const [showPreview, setShowPreview] = useState24(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, blockList.length !== 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "w-full bg-lightCharbon h-20 sticky bottom-0 px-4 py-5 md:px-12 xl:px-44 2xl:px-60 flex gap-2 items-center justify-end text-white"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "Toolbar-view border border-white rounded-md px-3 py-1 hover:text-black hover:bg-white h-full",
    onClick: () => {
      setShowPreview(Date.now());
    }
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-eye mr-3"
  }), "Pr\xE9visualiser"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "Toolbar-save text-white bg-vermillon hover:bg-lightVermillon px-2 md:px-4 md:py-1 rounded-md h-full",
    onClick: () => {
      if (!group?.title) {
        console.log("hey");
        react_hot_toast_esm_default.error("Titre manquant");
        return;
      }
      mutation.mutate({ blocks: blockList });
    }
  }, "Enregistrer")), typeof showPreview === "number" ? /* @__PURE__ */ React.createElement(ErrorBoundary_default, null, /* @__PURE__ */ React.createElement(Suspense3, {
    fallback: "loading"
  }, /* @__PURE__ */ React.createElement(Preview, {
    timestamp: showPreview
  }))) : null));
};
var ToolBar_default = ToolBar;

// src/BlocksEditor.tsx
function BlocksEditor({
  apiUrl,
  containerId,
  groupId,
  itemId,
  itemType,
  locales,
  backlink = true,
  noRedirect = false
}) {
  if (!apiUrl)
    return null;
  useLayoutEffect6(() => {
    if (containerId) {
      import_react_modal4.default.setAppElement("#" + containerId);
    }
  }, [containerId]);
  return /* @__PURE__ */ React.createElement(LocaleProvider, {
    locales
  }, /* @__PURE__ */ React.createElement(BlocksProvider, {
    api: apiUrl
  }, /* @__PURE__ */ React.createElement(Suspense4, {
    fallback: "loading"
  }, /* @__PURE__ */ React.createElement(BlocksGroupProvider, {
    groupId,
    itemType,
    itemId,
    noRedirect
  }, /* @__PURE__ */ React.createElement("div", {
    className: "BlocksEditor"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Toaster, null)), /* @__PURE__ */ React.createElement("div", {
    className: "BlocksEditor__header"
  }, backlink ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "/admin/TheliaBlocks"
  }, "Back to BlocksList")) : null, /* @__PURE__ */ React.createElement(GroupTitle, null), /* @__PURE__ */ React.createElement(GroupLocale, null)), /* @__PURE__ */ React.createElement(BlockContextProvider, {
    root: true
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "BlocksEditor__content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 py-12 md:px-12 xl:px-44 2xl:px-60"
  }, /* @__PURE__ */ React.createElement(BlocksContent, null), /* @__PURE__ */ React.createElement(AddBlock, null))), /* @__PURE__ */ React.createElement(ToolBar_default, null))))))));
}

// src/BlocksList.tsx
import { Suspense as Suspense5 } from "react";

// src/utils/content-url.ts
var getContentUrl = (type, id) => {
  const typeUrl = {
    folder: `/admin/folders/update/${id}`,
    content: `/admin/content/update/${id}`,
    category: `/admin/categories/update?category_id=${id}`,
    product: `/admin/products/update?product_id=${id}`
  };
  return typeUrl[type] ?? null;
};

// ../../node_modules/react-use/esm/useCopyToClipboard.js
var import_copy_to_clipboard = __toESM(require_copy_to_clipboard());
import { useCallback as useCallback5 } from "react";

// ../../node_modules/react-use/esm/useMountedState.js
import { useCallback as useCallback3, useEffect as useEffect26, useRef as useRef8 } from "react";
function useMountedState() {
  var mountedRef = useRef8(false);
  var get2 = useCallback3(function() {
    return mountedRef.current;
  }, []);
  useEffect26(function() {
    mountedRef.current = true;
    return function() {
      mountedRef.current = false;
    };
  }, []);
  return get2;
}

// ../../node_modules/react-use/esm/useSetState.js
import { useCallback as useCallback4, useState as useState25 } from "react";
var useSetState = function(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }
  var _a = useState25(initialState), state = _a[0], set = _a[1];
  var setState = useCallback4(function(patch3) {
    set(function(prevState) {
      return Object.assign({}, prevState, patch3 instanceof Function ? patch3(prevState) : patch3);
    });
  }, []);
  return [state, setState];
};
var useSetState_default = useSetState;

// ../../node_modules/react-use/esm/useCopyToClipboard.js
var useCopyToClipboard = function() {
  var isMounted = useMountedState();
  var _a = useSetState_default({
    value: void 0,
    error: void 0,
    noUserInteraction: true
  }), state = _a[0], setState = _a[1];
  var copyToClipboard = useCallback5(function(value) {
    if (!isMounted()) {
      return;
    }
    var noUserInteraction;
    var normalizedValue;
    try {
      if (typeof value !== "string" && typeof value !== "number") {
        var error2 = new Error("Cannot copy typeof " + typeof value + " to clipboard, must be a string");
        if (true)
          console.error(error2);
        setState({
          value,
          error: error2,
          noUserInteraction: true
        });
        return;
      } else if (value === "") {
        var error2 = new Error("Cannot copy empty string to clipboard.");
        if (true)
          console.error(error2);
        setState({
          value,
          error: error2,
          noUserInteraction: true
        });
        return;
      }
      normalizedValue = value.toString();
      noUserInteraction = (0, import_copy_to_clipboard.default)(normalizedValue);
      setState({
        value: normalizedValue,
        error: void 0,
        noUserInteraction
      });
    } catch (error3) {
      setState({
        value: normalizedValue,
        error: error3,
        noUserInteraction
      });
    }
  }, []);
  return [state, copyToClipboard];
};
var useCopyToClipboard_default = useCopyToClipboard;

// src/BlocksList.tsx
function List() {
  const { data: groups = [] } = useGroups();
  const [copied, copyToClipboard] = useCopyToClipboard_default();
  const mutationDelete = useDeleteGroup();
  const mutationDuplicate = useDuplicateGroup();
  if (groups.length <= 0) {
    return /* @__PURE__ */ React.createElement("div", null, "No blocks to display");
  }
  return /* @__PURE__ */ React.createElement("table", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "ID"), /* @__PURE__ */ React.createElement("th", null, "Nom"), /* @__PURE__ */ React.createElement("th", null, "Contenus li\xE9s"), /* @__PURE__ */ React.createElement("th", null, "Langues disponibles"), /* @__PURE__ */ React.createElement("th", null, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, groups.map((group) => {
    return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, group.id), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("a", {
      href: `/admin/TheliaBlocks/${group.id}`
    }, group.title || "No Title")), /* @__PURE__ */ React.createElement("td", {
      className: ""
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex gap-2 items-center"
    }, !!group.itemBlockGroups?.length && /* @__PURE__ */ React.createElement("span", {
      className: "text-sm font-normal text-gray-400"
    }, /* @__PURE__ */ React.createElement("i", {
      className: "fa fa-link ml-1"
    }), group.itemBlockGroups.map(({ itemId, itemType }) => {
      if (itemId && itemType) {
        return /* @__PURE__ */ React.createElement("a", {
          href: getContentUrl(itemType, itemId),
          key: `${itemType}-${itemId}`
        }, itemType, "-", itemId);
      } else {
        return /* @__PURE__ */ React.createElement("span", {
          key: `${itemType}-${itemId}`
        }, itemType, "-", itemId);
      }
    })))), /* @__PURE__ */ React.createElement("td", null, "TODO"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
        mutationDelete.mutate(group.id);
      }
    }, "delete"), /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
        mutationDuplicate.mutate(group.id);
      }
    }, "duplicate"), /* @__PURE__ */ React.createElement("button", {
      type: "button",
      onClick: () => {
        const shortcode = `[block_group slug=${group.slug}]`;
        copyToClipboard(shortcode);
        react_hot_toast_esm_default(`${shortcode} copi\xE9 avec succ\xE8s`);
      }
    }, "shortcode"))));
  })));
}
function BlocksList({ apiUrl }) {
  if (!apiUrl)
    return null;
  return /* @__PURE__ */ React.createElement(BlocksProvider, {
    api: apiUrl
  }, /* @__PURE__ */ React.createElement("div", {
    className: "BlocksList"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Toaster, null)), /* @__PURE__ */ React.createElement("div", {
    className: "mb-8"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/admin/TheliaBlocks/new",
    className: "btn btn-danger "
  }, "Create new group")), /* @__PURE__ */ React.createElement(Suspense5, {
    fallback: "loading"
  }, /* @__PURE__ */ React.createElement(List, null))));
}
export {
  BlocksEditor,
  BlocksList,
  registerPlugin
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=index.js.map