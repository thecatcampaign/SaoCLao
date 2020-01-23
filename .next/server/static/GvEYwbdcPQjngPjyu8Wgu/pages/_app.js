module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "/cu9":
/***/ (function(module, exports) {

module.exports = require("react-hook-form-input");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "1SKB":
/***/ (function(module, exports) {



/***/ }),

/***/ "1mXb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("KCAv");

__webpack_require__("bAY4");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "3iL8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("ELjK");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "6UH/":
/***/ (function(module, exports) {



/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "A+GO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myApiAxiosInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return myApiEndPoint; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_storage_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YTI5");



const myApiAxiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: 'https://us-central1-react-movie-2dee0.cloudfunctions.net/api/'
});
myApiAxiosInstance.interceptors.request.use(async config => {
  // const token = await firebase.auth().currentUser.getIdToken(true); slow
  const token = _helpers_storage_helper__WEBPACK_IMPORTED_MODULE_2__[/* localStorageService */ "a"].getToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}, error => _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error));

const myApiEndPoint = {
  TRENDING_TRACKS: 'tracks/trending',
  FAVORITE_TRACKS: 'tracks/likes',
  PLAYED_TRACKS: 'tracks/plays_history',
  FAVORITE_TRACK_IDS: 'tracks/likes/ids',
  PEOPLE_WHO_LIKES_TRACK: 'users/liker/',
  CREATE_NEW_ACCOUNT: 'users/'
};

/***/ }),

/***/ "AThg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "constate"
var external_constate_ = __webpack_require__("R+ss");
var external_constate_default = /*#__PURE__*/__webpack_require__.n(external_constate_);

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__("wVQA");
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__("bnmT");

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__("EuFW");

// EXTERNAL MODULE: external "firebase/functions"
var functions_ = __webpack_require__("dCoW");

// CONCATENATED MODULE: ./firebaseConfig.js
const config = {
  apiKey: 'AIzaSyDsK-R1KusnhbA1ptFDf_8w8tCxaQrpep0',
  authDomain: 'react-movie-2dee0.firebaseapp.com',
  databaseURL: 'https://react-movie-2dee0.firebaseio.com',
  projectId: 'react-movie-2dee0',
  storageBucket: 'react-movie-2dee0.appspot.com',
  messagingSenderId: '997939615224',
  appId: '1:997939615224:web:a69c5f0c3728fd952c720d',
  measurementId: 'G-6YS7S5WNM3'
};
// CONCATENATED MODULE: ./src/constants/firebase.constant.js




 // firebase.initializeApp(config);

!app_default.a.apps.length ? app_default.a.initializeApp(config) : app_default.a.app();

// EXTERNAL MODULE: ./src/constants/myApi.constant.js
var myApi_constant = __webpack_require__("A+GO");

// EXTERNAL MODULE: ./src/helpers/storage.helper.js
var storage_helper = __webpack_require__("YTI5");

// CONCATENATED MODULE: ./src/contexts/AuthContext.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAuth; });








function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }







const useAuther = () => {
  const [user, setUser] = external_react_default.a.useState(null);
  const [refreshToken, setRefreshToken] = external_react_default.a.useState(null);
  external_react_default.a.useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = app_default.a.auth().onAuthStateChanged(async user => {
      if (user) {
        const tokenResult = await app_default.a.auth().currentUser.getIdTokenResult(true);
        storage_helper["a" /* localStorageService */].setToken(tokenResult.token);
        setRefreshToken(true);
        setUser(_objectSpread({}, user, {
          admin: tokenResult.claims.admin,
          username: user.displayName
        }));
      } else {
        storage_helper["a" /* localStorageService */].removeToken();
        setUser(null);
      }
    }); // Unsubscribe to the listener when unmounting

    return () => {
      unsubscribe();
    };
  }, []);

  const loginWithEmail = async (email, password) => {
    await app_default.a.auth().signInWithEmailAndPassword(email, password);
    window.location.reload();
    storage_helper["a" /* localStorageService */].setToken('authenticated'); // for showing user section quickly when token is empty because google auth is slow
  };

  const signOut = () => {
    app_default.a.auth().signOut();
    window.location.reload();
  };

  return {
    user,
    refreshToken,
    loginWithEmail,
    signOut
  };
};

const [AuthProvider, useAuth] = external_constate_default()(useAuther);

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;

__webpack_require__("nOHt");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "BWRB":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "DXIa":
/***/ (function(module, exports) {

module.exports = require("use-immer");

/***/ }),

/***/ "ELjK":
/***/ (function(module, exports) {



/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "F2v3":
/***/ (function(module, exports) {



/***/ }),

/***/ "FYTm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicModal; });
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TDbF");
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xKsY");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oPUE");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function DynamicModal() {
  const isModalShowing = Object(_contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_3__[/* useIsModalShowing */ "b"])();
  const toggleModal = Object(_contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_3__[/* useToggleModal */ "d"])();
  const modalContent = Object(_contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_3__[/* useModalContent */ "c"])();
  return __jsx("div", null, __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      top: 20
    },
    visible: isModalShowing,
    onOk: toggleModal,
    onCancel: toggleModal,
    footer: null,
    destroyOnClose: true // important

  }, modalContent));
}

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "HgHO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: ./src/style.css
var style = __webpack_require__("OMi8");

// EXTERNAL MODULE: ./src/contexts/AuthContext.js + 2 modules
var AuthContext = __webpack_require__("AThg");

// EXTERNAL MODULE: ./src/contexts/TrackContext.js + 1 modules
var TrackContext = __webpack_require__("rlkS");

// EXTERNAL MODULE: ./src/contexts/SingleModalContext.js
var SingleModalContext = __webpack_require__("oPUE");

// EXTERNAL MODULE: ./src/contexts/MusicPlayerContext.js + 1 modules
var MusicPlayerContext = __webpack_require__("WFSc");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/css.js
var css = __webpack_require__("q5v/");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./src/constants/myApi.constant.js
var myApi_constant = __webpack_require__("A+GO");

// EXTERNAL MODULE: ./src/helpers/utils.helper.js
var utils_helper = __webpack_require__("kBtk");

// EXTERNAL MODULE: ./src/helpers/storage.helper.js
var storage_helper = __webpack_require__("YTI5");

// CONCATENATED MODULE: ./src/hooks/track/useFetchFavoriteTrackIds.js








const useFetchFavoriteTrackIds = () => {
  const addFavoriteTrackIds = Object(TrackContext["c" /* useAddFavoriteTrackIds */])();
  const {
    refreshToken
  } = Object(AuthContext["b" /* useAuth */])();
  Object(external_react_["useEffect"])(() => {
    const fetchFavoriteTrackIds = async params => {
      try {
        const res = await myApi_constant["a" /* myApiAxiosInstance */].get(myApi_constant["b" /* myApiEndPoint */].FAVORITE_TRACK_IDS);
        addFavoriteTrackIds(res.data);
      } catch (error) {
        message_default.a.error(Object(utils_helper["b" /* errorSelector */])(error));
      }
    };

    if (!refreshToken) return; // false mean firebase haven't release token, so throw unauthorized error

    fetchFavoriteTrackIds();
  }, [refreshToken]);
};
// CONCATENATED MODULE: ./src/components/Common/Logo.js
var __jsx = external_react_default.a.createElement;

function Logo() {
  const linearGradient = {
    background: 'linear-gradient(#f70,#f30)'
  };
  return __jsx("button", {
    style: linearGradient,
    className: "px-4 py-2"
  }, "SOUNDCLOUND");
}
// EXTERNAL MODULE: ./src/components/Common/Login.js
var Login = __webpack_require__("UlBZ");

// EXTERNAL MODULE: ./src/components/Common/Register.js + 2 modules
var Register = __webpack_require__("QNCQ");

// EXTERNAL MODULE: ./node_modules/antd/lib/dropdown/style/css.js
var style_css = __webpack_require__("aVHW");

// EXTERNAL MODULE: external "antd/lib/dropdown"
var dropdown_ = __webpack_require__("HgHO");
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown_);

// EXTERNAL MODULE: ./node_modules/antd/lib/icon/style/css.js
var icon_style_css = __webpack_require__("OvTR");

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__("BWRB");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: ./node_modules/antd/lib/menu/style/css.js
var menu_style_css = __webpack_require__("lBu3");

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./src/components/Common/UserSection.js






var UserSection_jsx = external_react_default.a.createElement;



function UserSection() {
  const {
    signOut,
    user
  } = Object(AuthContext["b" /* useAuth */])();

  const menu = UserSection_jsx(menu_default.a, null, UserSection_jsx(menu_default.a.Item, {
    key: "0"
  }, UserSection_jsx("a", {
    onClick: signOut
  }, "Signout")));

  return UserSection_jsx("div", null, UserSection_jsx(dropdown_default.a, {
    overlay: menu,
    trigger: ['click']
  }, UserSection_jsx("a", {
    className: "ant-dropdown-link",
    href: "#"
  }, external_lodash_default.a.get(user, 'username'), ' ', UserSection_jsx(icon_default.a, {
    type: "down"
  }))));
}
// EXTERNAL MODULE: ./src/components/Common/DynamicContent.modal.js
var DynamicContent_modal = __webpack_require__("FYTm");

// EXTERNAL MODULE: ./node_modules/react-jinke-music-player/assets/index.css
var assets = __webpack_require__("slXY");

// EXTERNAL MODULE: external "react-jinke-music-player"
var external_react_jinke_music_player_ = __webpack_require__("bhdt");
var external_react_jinke_music_player_default = /*#__PURE__*/__webpack_require__.n(external_react_jinke_music_player_);

// CONCATENATED MODULE: ./src/components/MusicPlayer/MusicPlayer.js
var MusicPlayer_jsx = external_react_default.a.createElement;





function MusicPlayer() {
  const musicPlayerOptions = Object(MusicPlayerContext["c" /* useMusicPlayerOptions */])();
  return MusicPlayer_jsx("div", null, utils_helper["d" /* isBrowser */] && MusicPlayer_jsx(external_react_jinke_music_player_default.a, musicPlayerOptions));
}
// CONCATENATED MODULE: ./src/components/Layout/LayoutCom.js
var LayoutCom_jsx = external_react_default.a.createElement;










function LayoutComp({
  children
}) {
  useFetchFavoriteTrackIds();
  return LayoutCom_jsx("div", null, LayoutCom_jsx("div", {
    className: "flex z-50 w-full fixed top-0"
  }, LayoutCom_jsx(Logo, null), LayoutCom_jsx("div", {
    className: " bg-dark-charcoal w-full flex items-center justify-between flex-wrap p-4 sm:p-0"
  }, LayoutCom_jsx("button", {
    className: "h-full px-4 text-gray-500 border-r border-black hover:text-white"
  }, LayoutCom_jsx(link_default.a, {
    href: "/"
  }, LayoutCom_jsx("a", null, "Home"))), !storage_helper["a" /* localStorageService */].getToken() ? LayoutCom_jsx("div", {
    className: "p-2 hidden sm:block sm:flex"
  }, LayoutCom_jsx(Login["a" /* default */], null), LayoutCom_jsx(Register["a" /* default */], null)) : LayoutCom_jsx("div", {
    className: "p-2"
  }, LayoutCom_jsx(UserSection, null)))), children, LayoutCom_jsx(MusicPlayer, null), LayoutCom_jsx(DynamicContent_modal["a" /* default */], null));
}
// CONCATENATED MODULE: ./src/pages/_app.js
var _app_jsx = external_react_default.a.createElement;









class _app_MyApp extends app_default.a {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return _app_jsx(AuthContext["a" /* AuthProvider */], null, _app_jsx(TrackContext["a" /* TrackProvider */], null, _app_jsx(SingleModalContext["a" /* SingleModalProvider */], null, _app_jsx(MusicPlayerContext["a" /* MusicPlayerProvider */], null, _app_jsx(LayoutComp, null, _app_jsx(Component, pageProps))))));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ "JCEF":
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KCAv":
/***/ (function(module, exports) {



/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "OMi8":
/***/ (function(module, exports) {



/***/ }),

/***/ "OvTR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("dleZ");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "QNCQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/css.js
var css = __webpack_require__("bAY4");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/contexts/SingleModalContext.js
var SingleModalContext = __webpack_require__("oPUE");

// EXTERNAL MODULE: ./node_modules/antd/lib/checkbox/style/css.js
var style_css = __webpack_require__("uATl");

// EXTERNAL MODULE: external "antd/lib/checkbox"
var checkbox_ = __webpack_require__("JCEF");
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// EXTERNAL MODULE: ./node_modules/antd/lib/form/style/css.js
var form_style_css = __webpack_require__("dBUF");

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__("foLw");
var form_default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: ./node_modules/antd/lib/input/style/css.js
var input_style_css = __webpack_require__("1mXb");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: ./node_modules/antd/lib/icon/style/css.js
var icon_style_css = __webpack_require__("OvTR");

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__("BWRB");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: external "react-hook-form-input"
var external_react_hook_form_input_ = __webpack_require__("/cu9");

// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/css.js
var message_style_css = __webpack_require__("q5v/");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./src/constants/myApi.constant.js
var myApi_constant = __webpack_require__("A+GO");

// EXTERNAL MODULE: ./src/contexts/AuthContext.js + 2 modules
var AuthContext = __webpack_require__("AThg");

// EXTERNAL MODULE: ./src/constants/message.constant.js
var message_constant = __webpack_require__("lHcr");

// EXTERNAL MODULE: ./src/helpers/utils.helper.js
var utils_helper = __webpack_require__("kBtk");

// CONCATENATED MODULE: ./src/hooks/user/useRegisterAccount.js






 // eslint-disable-next-line import/prefer-default-export

const useRegisterAccount = () => {
  const {
    loginWithEmail
  } = Object(AuthContext["b" /* useAuth */])();
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const registerAccount = Object(external_react_["useCallback"])(async data => {
    try {
      setLoading(true);
      await myApi_constant["a" /* myApiAxiosInstance */].post(myApi_constant["b" /* myApiEndPoint */].CREATE_NEW_ACCOUNT, data);
      setLoading(false);
      loginWithEmail(data.email, data.password);

      message_default.a.success(message_constant["a" /* messages */].ACCOUNT_WAS_CREATED_SUCCESS);
    } catch (error) {
      setLoading(false);

      message_default.a.error(Object(utils_helper["b" /* errorSelector */])(error));
    }
  }, []);
  return {
    registerAccount,
    loading
  };
};
// EXTERNAL MODULE: ./src/components/Common/Login.js
var Login = __webpack_require__("UlBZ");

// CONCATENATED MODULE: ./src/components/Common/Register.modal.js










var __jsx = external_react_default.a.createElement;





function RegisterModal() {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    reset
  } = Object(external_react_hook_form_["useForm"])();
  const {
    loading,
    registerAccount
  } = useRegisterAccount();

  const onSubmit = data => {
    registerAccount(data);
  };

  return __jsx("div", null, __jsx(form_default.a, {
    onSubmit: handleSubmit(onSubmit),
    className: " p-4 "
  }, __jsx(form_default.a.Item, null, __jsx(external_react_hook_form_input_["RHFInput"], {
    as: __jsx(input_default.a, {
      prefix: __jsx(icon_default.a, {
        type: "name",
        style: {
          color: 'rgba(0,0,0,.25)'
        }
      }),
      placeholder: "Name"
    }),
    rules: {
      required: 'Your name is required'
    },
    name: "name",
    register: register,
    setValue: setValue
  }), errors.name && errors.name.message), __jsx(form_default.a.Item, null, __jsx(external_react_hook_form_input_["RHFInput"], {
    as: __jsx(input_default.a, {
      prefix: __jsx(icon_default.a, {
        type: "user",
        style: {
          color: 'rgba(0,0,0,.25)'
        }
      }),
      placeholder: "Username"
    }),
    rules: {
      required: 'Your Username is required'
    },
    name: "username",
    register: register,
    setValue: setValue
  }), errors.username && errors.username.message), __jsx(form_default.a.Item, null, __jsx(external_react_hook_form_input_["RHFInput"], {
    as: __jsx(input_default.a, {
      prefix: __jsx(icon_default.a, {
        type: "email",
        style: {
          color: 'rgba(0,0,0,.25)'
        }
      }),
      placeholder: "Email"
    }),
    rules: {
      required: {
        value: true,
        message: 'Please Type An Email'
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'invalid email address'
      }
    },
    name: "email",
    register: register,
    setValue: setValue
  }), errors.email && errors.email.message), __jsx(form_default.a.Item, null, __jsx(external_react_hook_form_input_["RHFInput"], {
    as: __jsx(input_default.a.Password, {
      prefix: __jsx(icon_default.a, {
        type: "lock",
        style: {
          color: 'rgba(0,0,0,.25)'
        }
      }),
      type: "password",
      placeholder: "Password"
    }),
    rules: {
      required: {
        value: true,
        message: 'Please Type An Password'
      },
      minLength: {
        value: 6,
        message: 'too short'
      }
    },
    name: "password",
    register: register,
    setValue: setValue
  }), errors.password && errors.password.message), __jsx(form_default.a.Item, null, __jsx("div", {
    className: " flex justify-between"
  }, __jsx(checkbox_default.a, null, "Remember me"), __jsx("a", {
    className: "login-form-forgot",
    href: ""
  }, "Forgot password")), __jsx(button_default.a, {
    type: "primary",
    htmlType: "submit",
    className: " w-full btn-soundClound",
    loading: loading
  }, "Register"), "Or", ' ', __jsx(Login["a" /* default */], null))));
}
// CONCATENATED MODULE: ./src/components/Common/Register.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });


var Register_jsx = external_react_default.a.createElement;



function Register() {
  const toggleModalWithContent = Object(SingleModalContext["e" /* useToggleModalWithContent */])();
  return Register_jsx("div", null, Register_jsx(button_default.a, {
    type: "primary",
    className: "btn-soundClound",
    onClick: () => toggleModalWithContent(Register_jsx(RegisterModal, null))
  }, "Register"));
}

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "QU2i":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("iGLF");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "R+ss":
/***/ (function(module, exports) {

module.exports = require("constate");

/***/ }),

/***/ "Rdar":
/***/ (function(module, exports) {



/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TDbF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("F2v3");

__webpack_require__("bAY4");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UlBZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bAY4");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Login_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("syf5");
/* harmony import */ var _contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oPUE");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Login() {
  const toggleModalWithContent = Object(_contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_4__[/* useToggleModalWithContent */ "e"])();
  return __jsx("div", null, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: " mr-2",
    type: "primary",
    onClick: () => toggleModalWithContent(__jsx(_Login_modal__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null))
  }, "Login"));
}

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "WFSc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "constate"
var external_constate_ = __webpack_require__("R+ss");
var external_constate_default = /*#__PURE__*/__webpack_require__.n(external_constate_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "use-immer"
var external_use_immer_ = __webpack_require__("DXIa");

// EXTERNAL MODULE: ./src/helpers/utils.helper.js
var utils_helper = __webpack_require__("kBtk");

// CONCATENATED MODULE: ./src/constants/musicPlayer.constant.js




const musicPlayer = {
  instance: null,
  setInstance: instance => musicPlayer.instance = instance,
  getInstance: () => musicPlayer.instance
};
const audioList1 = [{
  name: 'Despacito',
  singer: 'Luis Fonsi',
  cover: 'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
  musicSrc: () => promise_default.a.resolve('http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3')
}];
const options = {
  // audio lists model
  audioLists: audioList1,
  // default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,
  // if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,
  // color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
  theme: 'dark',
  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  bounds: 'body',
  // Replace a new playlist with the first loaded playlist
  // instead of adding it at the end of it.
  // [type `boolean`, default `false`]
  clearPriorAudioLists: true,
  // Play your new play list right after your new play list is loaded turn false.
  // [type `boolean`, default `false`]
  autoPlayInitLoadPlayList: true,
  // Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  // "auto|metadata|none" "true| false"
  preload: false,
  // Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: false,
  // The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,
  // The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: true,
  // audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    top: 300,
    left: 120
  },
  //   // play mode text config of the audio player
  //   playModeText: {
  //     order: "",
  //     orderLoop: "",
  //     singleLoop: "",
  //     shufflePlay: ""
  //   },
  defaultPlayMode: 'order',
  // audio mode        mini | full          [type `String`  default `mini`]
  mode: 'mini',

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: false,
  // Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: true,
  // Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: true,
  // audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: true,
  // audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,
  // audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,
  // drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,
  // Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,
  // play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,
  // reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,
  // download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: false,
  // loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,
  // theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: true,
  // lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: false,
  // Extensible custom content       [type 'Array' default '[]' ]
  extendsContent: [],
  // default volume of the audio player [type `Number` default `100` range `0-100`]
  defaultVolume: 100,
  // playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,
  // Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,
  // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
  autoHiddenCover: true,

  // // custom music player root node
  getContainer() {
    return document.body;
  },

  getAudioInstance: instance => {
    musicPlayer.setInstance(instance);
  }
};
// CONCATENATED MODULE: ./src/contexts/MusicPlayerContext.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPlayerProvider; });
/* unused harmony export useCurrentTrack */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useIsCurrentTrackPlaying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useMusicPlayerOptions; });
/* unused harmony export useAddTrackToAudioList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return usePlayTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return usePauseTrack; });










function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }






const isCurrentTrack = (trackId, currentTrack) => trackId === currentTrack.id;

const useMusicPlayer = params => {
  const {
    0: currentTrack,
    1: setCurrentTrack
  } = Object(external_react_["useState"])({
    id: 11,
    playing: false
  });
  const onAudioListsChange = external_react_default.a.useCallback((currentPlayId, audioLists, audioInfo) => {
    setMusicPlayerOptions(preOptions => _objectSpread({}, preOptions, {
      audioLists
    }));
  }, []);
  const onAudioPause = external_react_default.a.useCallback(audioInfo => {
    setCurrentTrackPause(parse_int_default()(audioInfo.lyric));
  }, []);
  const onAudioPlay = external_react_default.a.useCallback(audioInfo => {
    setCurrentTrackPlaying(parse_int_default()(audioInfo.lyric));
  }, []);
  const getAudioInstance = external_react_default.a.useCallback(audioInstance => {
    musicPlayer.setInstance(audioInstance);
  }, []);
  const {
    0: musicPlayerOptions,
    1: setMusicPlayerOptions
  } = Object(external_react_["useState"])(_objectSpread({}, options, {
    onAudioListsChange,
    getAudioInstance,
    onAudioPause,
    onAudioPlay
  }));
  const playTrack = external_react_default.a.useCallback(track => {
    if (!isCurrentTrack(track.id, currentTrack)) {
      console.log('play diff song', track.id, currentTrack);
      addTrackToAudioList({
        name: track.name,
        singer: track.artist,
        cover: track.artwork_url,
        id: track.id,
        lyric: `${track.id}`,
        musicSrc: () => promise_default.a.resolve(`https://api.soundcloud.com/tracks/${track.id}/stream?client_id=${"a281614d7f34dc30b665dfcaa3ed7505"}`)
      });
    }

    musicPlayer.getInstance().play();
  }, [currentTrack]);
  const pauseTrack = external_react_default.a.useCallback(track => {
    musicPlayer.getInstance().pause();
  }, []);
  const addTrackToAudioList = external_react_default.a.useCallback(track => {
    setMusicPlayerOptions(preOptions => _objectSpread({}, preOptions, {
      // if use global state: musicPlayerOptions instead of local state: preOptions,
      // it will cache the initial musicPlayerOptions because of useCallbackOnce
      // Maybe this doesn't apply for dispatch in useReducer, I don't know
      audioLists: [track, ...preOptions.audioLists]
    }));
  }, []);
  const setCurrentTrackPlaying = external_react_default.a.useCallback(trackId => {
    setCurrentTrack(preTrack => {
      const currentTrack = {
        id: trackId,
        playing: true
      };
      return currentTrack;
    });
  }, []);
  const setCurrentTrackPause = external_react_default.a.useCallback(trackId => {
    setCurrentTrack(preTrack => {
      const currentTrack = {
        id: trackId,
        playing: false
      };
      return currentTrack;
    });
  }, []);
  const isCurrentTrackPlaying = external_react_default.a.useCallback(trackId => currentTrack.id === trackId && currentTrack.playing, [currentTrack]);
  return {
    currentTrack,
    isCurrentTrackPlaying,
    musicPlayerOptions,
    addTrackToAudioList,
    playTrack,
    pauseTrack
  };
};

const [MusicPlayerProvider, useCurrentTrack, useIsCurrentTrackPlaying, useMusicPlayerOptions, useAddTrackToAudioList, usePlayTrack, usePauseTrack] = external_constate_default()(useMusicPlayer, value => value.currentTrack, value => value.isCurrentTrackPlaying, value => value.musicPlayerOptions, value => value.addTrackToAudioList, value => value.playTrack, value => value.pauseTrack);

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "Y5RM":
/***/ (function(module, exports) {



/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YTI5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localStorageService; });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kBtk");


const getToken = params => {
  if (_utils_helper__WEBPACK_IMPORTED_MODULE_0__[/* isBrowser */ "d"]) {
    const token = localStorage.getItem('token_access') || '';
    return token.replace(/\\"/g, '"');
  }
};

const setToken = token => {
  if (_utils_helper__WEBPACK_IMPORTED_MODULE_0__[/* isBrowser */ "d"]) {
    localStorage.setItem('token_access', token);
  }
};

const removeToken = () => {
  if (_utils_helper__WEBPACK_IMPORTED_MODULE_0__[/* isBrowser */ "d"]) {
    localStorage.removeItem('token_access');
  }
};

const localStorageService = {
  token: getToken(),
  setToken,
  removeToken,
  getToken
};

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "aVHW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("6UH/");

__webpack_require__("bAY4");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "bAY4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("Rdar");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "bhdt":
/***/ (function(module, exports) {

module.exports = require("react-jinke-music-player");

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _utils = __webpack_require__("g/15");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "ci3M":
/***/ (function(module, exports) {



/***/ }),

/***/ "dBUF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("tuYn");

__webpack_require__("3iL8");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "dCoW":
/***/ (function(module, exports) {

module.exports = require("firebase/functions");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "dleZ":
/***/ (function(module, exports) {



/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__("UXZV");

var _Promise = __webpack_require__("eVuF");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      return  true && (_cachedData = this.sdc[pathname]) ? _Promise.resolve(_cachedData) : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as));
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (false) {} else {
            console.error(error);
          }

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "foLw":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "iGLF":
/***/ (function(module, exports) {



/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kBtk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertArrayToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return findObjectsByKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return errorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isBrowser; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => _objectSpread({}, obj, {
    [item[key]]: item
  }), initialValue);
};
const findObjectsByKeys = (arrayKey, targetObj) => {
  const initialValue = [];
  return arrayKey.reduce((arrayObj, key) => [...arrayObj, targetObj[key]], initialValue);
};
const errorSelector = error => error.response.data.message.message || error.response.data.message;
const isBrowser = false;

/***/ }),

/***/ "lBu3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("vVUs");

__webpack_require__("QU2i");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "lHcr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return messages; });
const messages = {
  TRACK_LIKED_SUCCESS: ' Was Added To Your Library',
  INCORRECT_USERNAME_PASSWORD_ERROR: 'Incorrect Username Or Password',
  ACCOUNT_WAS_CREATED_SUCCESS: 'Account was created successfully'
};

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oPUE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleModalProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useIsModalShowing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useToggleModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useToggleModalWithContent; });
/* harmony import */ var constate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R+ss");
/* harmony import */ var constate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(constate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const useSingleModal = params => {
  const {
    0: isModalShowing,
    1: setIsModalShowing
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: modalContent,
    1: setModalContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const toggleModal = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setIsModalShowing(pre => !pre);
  }, []);

  const closeModal = () => {
    setIsModalShowing(false);
  };

  const openModal = () => {
    setIsModalShowing(true);
  };

  const setContent = content => {
    setModalContent(content);
  };

  const toggleModalWithContent = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(content => {
    openModal();
    setContent(content);
  }, []);
  return {
    isModalShowing,
    toggleModal,
    modalContent,
    toggleModalWithContent
  };
};

const [SingleModalProvider, useIsModalShowing, useToggleModal, useModalContent, useToggleModalWithContent] = constate__WEBPACK_IMPORTED_MODULE_0___default()(useSingleModal, value => value.isModalShowing, value => value.toggleModal, value => value.modalContent, value => value.toggleModalWithContent);

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "q5v/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("Y5RM");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qLGd":
/***/ (function(module, exports) {

module.exports = require("lodash/remove");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "r7i6":
/***/ (function(module, exports) {

module.exports = require("lodash/pull");

/***/ }),

/***/ "rlkS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "constate"
var external_constate_ = __webpack_require__("R+ss");
var external_constate_default = /*#__PURE__*/__webpack_require__.n(external_constate_);

// EXTERNAL MODULE: external "use-immer"
var external_use_immer_ = __webpack_require__("DXIa");

// EXTERNAL MODULE: external "lodash/pull"
var pull_ = __webpack_require__("r7i6");
var pull_default = /*#__PURE__*/__webpack_require__.n(pull_);

// EXTERNAL MODULE: external "lodash/remove"
var remove_ = __webpack_require__("qLGd");

// CONCATENATED MODULE: ./src/constants/actionTypes.constant.js
const trackActionTypes = {
  TRENDING_TRACKS_FETCHED_SUCCESS: 'TRENDING_TRACKS_FETCHED_SUCCESS',
  FAVORITE_TRACKS_IDS_FETCHED_SUCCESS: 'FAVORITE_TRACKS_IDS_FETCHED_SUCCESS',
  ADD_FAVORITE_TRACK: 'ADD_FAVORITE_TRACK',
  REMOVE_FAVORITE_TRACK: 'REMOVE_FAVORITE_TRACK'
};
// EXTERNAL MODULE: ./src/constants/myApi.constant.js
var myApi_constant = __webpack_require__("A+GO");

// EXTERNAL MODULE: ./src/helpers/utils.helper.js
var utils_helper = __webpack_require__("kBtk");

// CONCATENATED MODULE: ./src/contexts/TrackContext.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackProvider; });
/* unused harmony export useTracks */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useTrendingTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useAddFavoriteTrackIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useIsFavoriteTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAddFavoriteTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useAddTrendingTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useRemoveFavoriteTrack; });








function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }









const initialState = {
  tracks: {},
  trendingTracks: [],
  favoriteTracks: [],
  favoriteTrackIds: []
};

const reducer = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case trackActionTypes.TRENDING_TRACKS_FETCHED_SUCCESS:
      const newTracks = Object(utils_helper["a" /* convertArrayToObject */])(payload, 'id');

      const newTrackIds = keys_default()(newTracks).map(Number);

      return void (state.tracks = _objectSpread({}, newTracks, {}, state.tracks), state.trendingTracks.push(...newTrackIds));

    case trackActionTypes.FAVORITE_TRACKS_FETCHED_SUCCESS:
      return void (state.favoriteTracks = payload);

    case trackActionTypes.FAVORITE_TRACKS_IDS_FETCHED_SUCCESS:
      return void (state.favoriteTrackIds = payload);

    case trackActionTypes.ADD_FAVORITE_TRACK:
      return void (state.favoriteTrackIds.push(payload.id), state.tracks[payload.id].count_like += 1);

    case trackActionTypes.REMOVE_FAVORITE_TRACK:
      return void (pull_default()(state.favoriteTrackIds, payload.id), state.tracks[payload.id].count_like -= 1);

    default:
      return state;
  }
};

const useTrack = () => {
  const [state, dispatch] = Object(external_use_immer_["useImmerReducer"])(reducer, initialState);
  const addTrendingTracks = Object(external_react_["useCallback"])(data => {
    // useCallbackOnce here helps prevent previous tracks re-rendering
    dispatch({
      type: trackActionTypes.TRENDING_TRACKS_FETCHED_SUCCESS,
      payload: data
    });
  }, []);
  const addFavoriteTrackIds = Object(external_react_["useCallback"])(data => {
    dispatch({
      type: trackActionTypes.FAVORITE_TRACKS_IDS_FETCHED_SUCCESS,
      payload: data
    });
  }, []);
  const checkIsFavoriteTrack = Object(external_react_["useCallback"])(trackId => {
    const isFavoriteTrack = state.favoriteTrackIds.includes(trackId);
    return isFavoriteTrack;
  }, [state.favoriteTrackIds]);
  const addFavoriteTrack = Object(external_react_["useCallback"])(trackObj => {
    dispatch({
      type: trackActionTypes.ADD_FAVORITE_TRACK,
      // desc order insertion
      payload: trackObj
    });
  }, []);
  const removeFavoriteTrack = Object(external_react_["useCallback"])(trackObj => {
    dispatch({
      type: trackActionTypes.REMOVE_FAVORITE_TRACK,
      payload: trackObj
    });
  }, []);
  return {
    tracks: state.tracks,
    favoriteTrackIds: state.favoriteTrackIds,
    trendingTracks: Object(utils_helper["c" /* findObjectsByKeys */])(state.trendingTracks, state.tracks),
    addFavoriteTrackIds,
    checkIsFavoriteTrack,
    addFavoriteTrack,
    addTrendingTracks,
    removeFavoriteTrack
  };
};

const [TrackProvider, useTracks, useTrendingTracks, useAddFavoriteTrackIds, useIsFavoriteTrack, useAddFavoriteTrack, useAddTrendingTracks, useRemoveFavoriteTrack] = external_constate_default()(useTrack, value => value.tracks, value => value.trendingTracks, value => value.addFavoriteTrackIds, value => value.checkIsFavoriteTrack, value => value.addFavoriteTrack, value => value.addTrendingTracks, value => value.removeFavoriteTrack);

/***/ }),

/***/ "slXY":
/***/ (function(module, exports) {



/***/ }),

/***/ "syf5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/css.js
var css = __webpack_require__("bAY4");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./node_modules/antd/lib/checkbox/style/css.js
var style_css = __webpack_require__("uATl");

// EXTERNAL MODULE: external "antd/lib/checkbox"
var checkbox_ = __webpack_require__("JCEF");
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// EXTERNAL MODULE: ./node_modules/antd/lib/form/style/css.js
var form_style_css = __webpack_require__("dBUF");

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__("foLw");
var form_default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: ./node_modules/antd/lib/input/style/css.js
var input_style_css = __webpack_require__("1mXb");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: ./node_modules/antd/lib/icon/style/css.js
var icon_style_css = __webpack_require__("OvTR");

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__("BWRB");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: external "react-hook-form-input"
var external_react_hook_form_input_ = __webpack_require__("/cu9");

// EXTERNAL MODULE: ./src/components/Common/Register.js + 2 modules
var Register = __webpack_require__("QNCQ");

// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/css.js
var message_style_css = __webpack_require__("q5v/");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./src/contexts/AuthContext.js + 2 modules
var AuthContext = __webpack_require__("AThg");

// EXTERNAL MODULE: ./src/constants/message.constant.js
var message_constant = __webpack_require__("lHcr");

// CONCATENATED MODULE: ./src/hooks/user/useSignInAccount.js



/* eslint-disable import/prefer-default-export */



const useSigninAccount = () => {
  const {
    loginWithEmail
  } = Object(AuthContext["b" /* useAuth */])();
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const signinAccount = Object(external_react_["useCallback"])(async data => {
    try {
      setLoading(true);
      await loginWithEmail(data.email, data.password);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      message_default.a.error(message_constant["a" /* messages */].INCORRECT_USERNAME_PASSWORD_ERROR);
    }
  }, []);
  return {
    signinAccount,
    loading
  };
};
// CONCATENATED MODULE: ./src/components/Common/Login.modal.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModal; });










var __jsx = external_react_default.a.createElement;





function LoginModal() {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    reset
  } = Object(external_react_hook_form_["useForm"])();
  const {
    loading,
    signinAccount
  } = useSigninAccount();

  const onSubmit = data => signinAccount(data);

  return __jsx("div", null, __jsx(form_default.a, {
    onSubmit: handleSubmit(onSubmit),
    className: " p-4 "
  }, __jsx(form_default.a.Item, null, __jsx(external_react_hook_form_input_["RHFInput"], {
    as: __jsx(input_default.a, {
      prefix: __jsx(icon_default.a, {
        type: "user",
        style: {
          color: 'rgba(0,0,0,.25)'
        }
      }),
      placeholder: "Email"
    }),
    rules: {
      required: {
        value: true,
        message: 'Please Type An Email'
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'invalid email address'
      }
    },
    name: "email",
    register: register,
    setValue: setValue
  }), errors.email && errors.email.message), __jsx(form_default.a.Item, null, __jsx(external_react_hook_form_input_["RHFInput"], {
    as: __jsx(input_default.a.Password, {
      prefix: __jsx(icon_default.a, {
        type: "lock",
        style: {
          color: 'rgba(0,0,0,.25)'
        }
      }),
      type: "password",
      placeholder: "input password"
    }),
    rules: {
      required: {
        value: true,
        message: 'Please Type A Password'
      }
    },
    name: "password",
    register: register,
    setValue: setValue
  }), errors.password && errors.password.message), __jsx(form_default.a.Item, null, __jsx("div", {
    className: " flex justify-between"
  }, __jsx(checkbox_default.a, null, "Remember me"), __jsx("a", {
    className: "login-form-forgot",
    href: ""
  }, "Forgot password")), __jsx(button_default.a, {
    type: "primary",
    htmlType: "submit",
    className: " w-full",
    loading: loading
  }, "Log in"), "Or", ' ', __jsx(Register["a" /* default */], null))));
}

/***/ }),

/***/ "tuYn":
/***/ (function(module, exports) {



/***/ }),

/***/ "uATl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1SKB");

__webpack_require__("ci3M");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "vVUs":
/***/ (function(module, exports) {



/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });