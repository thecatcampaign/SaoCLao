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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebaseConfig.js":
/*!***************************!*\
  !*** ./firebaseConfig.js ***!
  \***************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/antd/lib/avatar/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/avatar/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/avatar/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/avatar/style/index.css":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/avatar/style/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/button/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/button/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/button/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/button/style/index.css":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/checkbox/style/css.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/checkbox/style/css.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/checkbox/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/checkbox/style/index.css":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/checkbox/style/index.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/empty/style/css.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/empty/style/css.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/empty/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/empty/style/index.css":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/empty/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/form/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/form/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/form/style/index.css");

__webpack_require__(/*! ../../grid/style/css */ "./node_modules/antd/lib/grid/style/css.js");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/form/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/form/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/grid/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/grid/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/grid/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/grid/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/grid/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/icon/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/icon/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/icon/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/input/style/css.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/input/style/css.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/input/style/index.css");

__webpack_require__(/*! ../../button/style/css */ "./node_modules/antd/lib/button/style/css.js");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/input/style/index.css":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/input/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/list/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/list/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/list/style/index.css");

__webpack_require__(/*! ../../empty/style/css */ "./node_modules/antd/lib/empty/style/css.js");

__webpack_require__(/*! ../../spin/style/css */ "./node_modules/antd/lib/spin/style/css.js");

__webpack_require__(/*! ../../pagination/style/css */ "./node_modules/antd/lib/pagination/style/css.js");

__webpack_require__(/*! ../../grid/style/css */ "./node_modules/antd/lib/grid/style/css.js");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/list/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/list/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/message/style/css.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/message/style/css.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/message/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/message/style/index.css":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/message/style/index.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/modal/style/css.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/modal/style/css.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/modal/style/index.css");

__webpack_require__(/*! ../../button/style/css */ "./node_modules/antd/lib/button/style/css.js");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/modal/style/index.css":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/modal/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/pagination/style/css.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/pagination/style/css.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/pagination/style/index.css");

__webpack_require__(/*! ../../select/style/css */ "./node_modules/antd/lib/select/style/css.js");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/pagination/style/index.css":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/pagination/style/index.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/select/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/select/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/select/style/index.css");

__webpack_require__(/*! ../../empty/style/css */ "./node_modules/antd/lib/empty/style/css.js");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/select/style/index.css":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/select/style/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/spin/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/spin/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/spin/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/spin/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/spin/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/style/index.css":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/style/index.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Common/DynamicContent.modal.js":
/*!*******************************************************!*\
  !*** ./src/components/Common/DynamicContent.modal.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicModal; });
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style/css */ "./node_modules/antd/lib/modal/style/css.js");
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/SingleModalContext */ "./src/contexts/SingleModalContext.js");


var _jsxFileName = "C:\\Users\\PC\\WebstormProjects\\nextjs\\SoundCloudClone\\src\\components\\Common\\DynamicContent.modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function DynamicModal() {
  const isModalShowing = Object(_contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_3__["useIsModalShowing"])();
  const toggleModal = Object(_contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_3__["useToggleModal"])();
  const modalContent = Object(_contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_3__["useModalContent"])();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      top: 20
    },
    visible: isModalShowing,
    onOk: toggleModal,
    onCancel: toggleModal,
    footer: null,
    destroyOnClose: true // important
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, modalContent));
}

/***/ }),

/***/ "./src/components/Common/Login.js":
/*!****************************************!*\
  !*** ./src/components/Common/Login.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Login_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login.modal */ "./src/components/Common/Login.modal.js");
/* harmony import */ var _contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/SingleModalContext */ "./src/contexts/SingleModalContext.js");


var _jsxFileName = "C:\\Users\\PC\\WebstormProjects\\nextjs\\SoundCloudClone\\src\\components\\Common\\Login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Login() {
  const toggleModalWithContent = Object(_contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_4__["useToggleModalWithContent"])();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: " mr-2",
    type: "primary",
    onClick: () => toggleModalWithContent(__jsx(_Login_modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Login"));
}

/***/ }),

/***/ "./src/components/Common/Login.modal.js":
/*!**********************************************!*\
  !*** ./src/components/Common/Login.modal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginModal; });
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/checkbox/style/css */ "./node_modules/antd/lib/checkbox/style/css.js");
/* harmony import */ var antd_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/checkbox */ "antd/lib/checkbox");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form/style/css */ "./node_modules/antd/lib/form/style/css.js");
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_hook_form_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-hook-form-input */ "react-hook-form-input");
/* harmony import */ var react_hook_form_input__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_hook_form_input__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Register */ "./src/components/Common/Register.js");
/* harmony import */ var _hooks_user_useSignInAccount__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/user/useSignInAccount */ "./src/hooks/user/useSignInAccount.js");










var _jsxFileName = "C:\\Users\\PC\\WebstormProjects\\nextjs\\SoundCloudClone\\src\\components\\Common\\Login.modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;





function LoginModal() {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    reset
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["useForm"])();
  const {
    loading,
    signinAccount
  } = Object(_hooks_user_useSignInAccount__WEBPACK_IMPORTED_MODULE_14__["useSigninAccount"])();

  const onSubmit = data => signinAccount(data);

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onSubmit: handleSubmit(onSubmit),
    className: " p-4 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(react_hook_form_input__WEBPACK_IMPORTED_MODULE_12__["RHFInput"], {
    as: __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, {
      prefix: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "user",
        style: {
          color: 'rgba(0,0,0,.25)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }),
      placeholder: "Email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
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
    setValue: setValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), errors.email && errors.email.message), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(react_hook_form_input__WEBPACK_IMPORTED_MODULE_12__["RHFInput"], {
    as: __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a.Password, {
      prefix: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "lock",
        style: {
          color: 'rgba(0,0,0,.25)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }),
      type: "password",
      placeholder: "input password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }),
    rules: {
      required: {
        value: true,
        message: 'Please Type A Password'
      }
    },
    name: "password",
    register: register,
    setValue: setValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), errors.password && errors.password.message), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: " flex justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Remember me"), __jsx("a", {
    className: "login-form-forgot",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Forgot password")), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    htmlType: "submit",
    className: " w-full",
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Log in"), "Or", ' ', __jsx(_Register__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./src/components/Common/Register.js":
/*!*******************************************!*\
  !*** ./src/components/Common/Register.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/SingleModalContext */ "./src/contexts/SingleModalContext.js");
/* harmony import */ var _Register_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Register.modal */ "./src/components/Common/Register.modal.js");


var _jsxFileName = "C:\\Users\\PC\\WebstormProjects\\nextjs\\SoundCloudClone\\src\\components\\Common\\Register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Register() {
  const toggleModalWithContent = Object(_contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_3__["useToggleModalWithContent"])();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    className: "btn-soundClound",
    onClick: () => toggleModalWithContent(__jsx(_Register_modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Register"));
}

/***/ }),

/***/ "./src/components/Common/Register.modal.js":
/*!*************************************************!*\
  !*** ./src/components/Common/Register.modal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterModal; });
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/checkbox/style/css */ "./node_modules/antd/lib/checkbox/style/css.js");
/* harmony import */ var antd_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/checkbox */ "antd/lib/checkbox");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form/style/css */ "./node_modules/antd/lib/form/style/css.js");
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_hook_form_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-hook-form-input */ "react-hook-form-input");
/* harmony import */ var react_hook_form_input__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_hook_form_input__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hooks_user_useRegisterAccount__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/user/useRegisterAccount */ "./src/hooks/user/useRegisterAccount.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Login */ "./src/components/Common/Login.js");










var _jsxFileName = "C:\\Users\\PC\\WebstormProjects\\nextjs\\SoundCloudClone\\src\\components\\Common\\Register.modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;





function RegisterModal() {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    reset
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["useForm"])();
  const {
    loading,
    registerAccount
  } = Object(_hooks_user_useRegisterAccount__WEBPACK_IMPORTED_MODULE_13__["useRegisterAccount"])();

  const onSubmit = data => {
    registerAccount(data);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onSubmit: handleSubmit(onSubmit),
    className: " p-4 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(react_hook_form_input__WEBPACK_IMPORTED_MODULE_12__["RHFInput"], {
    as: __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, {
      prefix: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "name",
        style: {
          color: 'rgba(0,0,0,.25)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }),
      placeholder: "Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }),
    rules: {
      required: 'Your name is required'
    },
    name: "name",
    register: register,
    setValue: setValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), errors.name && errors.name.message), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(react_hook_form_input__WEBPACK_IMPORTED_MODULE_12__["RHFInput"], {
    as: __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, {
      prefix: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "user",
        style: {
          color: 'rgba(0,0,0,.25)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }),
      placeholder: "Username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }),
    rules: {
      required: 'Your Username is required'
    },
    name: "username",
    register: register,
    setValue: setValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), errors.username && errors.username.message), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(react_hook_form_input__WEBPACK_IMPORTED_MODULE_12__["RHFInput"], {
    as: __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, {
      prefix: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "email",
        style: {
          color: 'rgba(0,0,0,.25)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }),
      placeholder: "Email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
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
    setValue: setValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), errors.email && errors.email.message), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(react_hook_form_input__WEBPACK_IMPORTED_MODULE_12__["RHFInput"], {
    as: __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a.Password, {
      prefix: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "lock",
        style: {
          color: 'rgba(0,0,0,.25)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }),
      type: "password",
      placeholder: "Password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
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
    setValue: setValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), errors.password && errors.password.message), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: " flex justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Remember me"), __jsx("a", {
    className: "login-form-forgot",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Forgot password")), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    htmlType: "submit",
    className: " w-full btn-soundClound",
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Register"), "Or", ' ', __jsx(_Login__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./src/components/Track/Liker.modal.js":
/*!*********************************************!*\
  !*** ./src/components/Track/Liker.modal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LikerModal; });
/* harmony import */ var antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/list/style/css */ "./node_modules/antd/lib/list/style/css.js");
/* harmony import */ var antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/list */ "antd/lib/list");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar/style/css */ "./node_modules/antd/lib/avatar/style/css.js");
/* harmony import */ var antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/spin/style/css */ "./node_modules/antd/lib/spin/style/css.js");
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_user_useFetchLiker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/user/useFetchLiker */ "./src/hooks/user/useFetchLiker.js");






var _jsxFileName = "C:\\Users\\PC\\WebstormProjects\\nextjs\\SoundCloudClone\\src\\components\\Track\\Liker.modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


function LikerModal({
  track
}) {
  const {
    likers,
    loading
  } = Object(_hooks_user_useFetchLiker__WEBPACK_IMPORTED_MODULE_7__["useFetchLiker"])(track);
  const isZeroLikes = react__WEBPACK_IMPORTED_MODULE_6___default.a.useMemo(() => track.count_like === 0, [track.like_count]);
  if (loading && !isZeroLikes) return __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, isZeroLikes ? 'Nobody Likes This Song' : __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a, {
    itemLayout: "horizontal",
    dataSource: likers,
    renderItem: liker => __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a.Item.Meta, {
      avatar: __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }),
      title: liker,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/components/Track/TrackItem.container.js":
/*!*****************************************************!*\
  !*** ./src/components/Track/TrackItem.container.js ***!
  \*****************************************************/
/*! exports provided: TrackItemContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackItemContainer", function() { return TrackItemContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use */ "react-use");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TrackItemLikesCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrackItemLikesCount */ "./src/components/Track/TrackItemLikesCount.js");
/* harmony import */ var _TrackItemHeart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrackItemHeart */ "./src/components/Track/TrackItemHeart.js");
/* harmony import */ var _TrackItemAvatarAndButtonPlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TrackItemAvatarAndButtonPlay */ "./src/components/Track/TrackItemAvatarAndButtonPlay.js");
/* harmony import */ var _contexts_MusicPlayerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/MusicPlayerContext */ "./src/contexts/MusicPlayerContext.js");
var _jsxFileName = "C:\\Users\\PC\\WebstormProjects\\nextjs\\SoundCloudClone\\src\\components\\Track\\TrackItem.container.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const TrackItemContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  track,
  numericalOrder
}) => {
  const element = hovered => __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-1 flex justify-between items-center hover:bg-gray-200', {
      'bg-gray-200': isPlaying
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: " font-semibold text-lg w-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, numericalOrder), __jsx(_TrackItemAvatarAndButtonPlay__WEBPACK_IMPORTED_MODULE_5__["TrackItemAvatarAndButtonPlay"], {
    track: track,
    hovered: hovered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("div", {
    className: " flex-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, track.artist), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, track.name)), __jsx(_TrackItemLikesCount__WEBPACK_IMPORTED_MODULE_3__["TrackItemLikesCount"], {
    track: track,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(_TrackItemHeart__WEBPACK_IMPORTED_MODULE_4__["TrackItemHeart"], {
    track: track,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }));

  const checkIsPlaying = Object(_contexts_MusicPlayerContext__WEBPACK_IMPORTED_MODULE_6__["useIsCurrentTrackPlaying"])();
  const isPlaying = checkIsPlaying(track.id); // this line has to be placed before useHover, so it can pass isPlaying variable to element

  const [hoverable] = Object(react_use__WEBPACK_IMPORTED_MODULE_1__["useHover"])(element);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, hoverable);
});

/***/ }),

/***/ "./src/components/Track/TrackItemArtwork.js":
/*!**************************************************!*\
  !*** ./src/components/Track/TrackItemArtwork.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrackItemArtwork; });
/* harmony import */ var antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/avatar/style/css */ "./node_modules/antd/lib/avatar/style/css.js");
/* harmony import */ var antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\PC\\WebstormProjects\\nextjs\\SoundCloudClone\\src\\components\\Track\\TrackItemArtwork.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function TrackItemArtwork({
  track
}) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: " mx-4 flex-none",
    shape: "square",
    size: 64,
    icon: "user",
    src: track.artwork_url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/components/Track/TrackItemAvatarAndButtonPlay.js":
/*!**************************************************************!*\
  !*** ./src/components/Track/TrackItemAvatarAndButtonPlay.js ***!
  \**************************************************************/
/*! exports provided: TrackItemAvatarAndButtonPlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackItemAvatarAndButtonPlay", function() { return TrackItemAvatarAndButtonPlay; });
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_MusicPlayerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/MusicPlayerContext */ "./src/contexts/MusicPlayerContext.js");
/* harmony import */ var _TrackItemArtwork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrackItemArtwork */ "./src/components/Track/TrackItemArtwork.js");


var _jsxFileName = "C:\\Users\\PC\\WebstormProjects\\nextjs\\SoundCloudClone\\src\\components\\Track\\TrackItemAvatarAndButtonPlay.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // eslint-disable-next-line import/prefer-default-export

const TrackItemAvatarAndButtonPlay = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(({
  track,
  hovered
}) => {
  const checkIsPlaying = Object(_contexts_MusicPlayerContext__WEBPACK_IMPORTED_MODULE_3__["useIsCurrentTrackPlaying"])();
  const playTrack = Object(_contexts_MusicPlayerContext__WEBPACK_IMPORTED_MODULE_3__["usePlayTrack"])();
  const pauseTrack = Object(_contexts_MusicPlayerContext__WEBPACK_IMPORTED_MODULE_3__["usePauseTrack"])();
  const isPlaying = checkIsPlaying(track.id);
  return __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex justify-center items-center inset-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_TrackItemArtwork__WEBPACK_IMPORTED_MODULE_4__["default"], {
    track: track,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), (hovered || isPlaying) && __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: isPlaying ? 'pause-circle' : 'play-circle',
    onClick: isPlaying ? () => pauseTrack(track) : () => playTrack(track),
    theme: "twoTone",
    twoToneColor: "#f50",
    className: "absolute text-3xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })));
});

/***/ }),

/***/ "./src/components/Track/TrackItemHeart.js":
/*!************************************************!*\
  !*** ./src/components/Track/TrackItemHeart.js ***!
  \************************************************/
/*! exports provided: TrackItemHeart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackItemHeart", function() { return TrackItemHeart; });
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_track_useLikeTrack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/track/useLikeTrack */ "./src/hooks/track/useLikeTrack.js");
/* harmony import */ var _hooks_track_useUnlikeTrack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/track/useUnlikeTrack */ "./src/hooks/track/useUnlikeTrack.js");
/* harmony import */ var _helpers_storage_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/storage.helper */ "./src/helpers/storage.helper.js");
/* harmony import */ var _contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/SingleModalContext */ "./src/contexts/SingleModalContext.js");
/* harmony import */ var _Common_Login_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Common/Login.modal */ "./src/components/Common/Login.modal.js");
/* harmony import */ var _contexts_TrackContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/TrackContext */ "./src/contexts/TrackContext.js");


var _jsxFileName = "C:\\Users\\PC\\WebstormProjects\\nextjs\\SoundCloudClone\\src\\components\\Track\\TrackItemHeart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const TrackItemHeart = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(({
  track
}) => {
  const checkIsFavoriteTrack = Object(_contexts_TrackContext__WEBPACK_IMPORTED_MODULE_8__["useIsFavoriteTrack"])();
  const isFavoriteTrack = checkIsFavoriteTrack(track.id);
  const {
    likeTrack
  } = Object(_hooks_track_useLikeTrack__WEBPACK_IMPORTED_MODULE_3__["useLikeTrack"])(track);
  const {
    unlikeTrack
  } = Object(_hooks_track_useUnlikeTrack__WEBPACK_IMPORTED_MODULE_4__["useUnlikeTrack"])(track);
  const toggleModalWithContent = Object(_contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_6__["useToggleModalWithContent"])();

  const handleLiking = params => {
    if (!_helpers_storage_helper__WEBPACK_IMPORTED_MODULE_5__["localStorageService"].getToken()) toggleModalWithContent(__jsx(_Common_Login_modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }));else if (!isFavoriteTrack) likeTrack();else unlikeTrack();
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("button", {
    className: "",
    onClick: handleLiking,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "heart",
    theme: "twoTone",
    twoToneColor: isFavoriteTrack ? '#f00' : '#000',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })));
});

/***/ }),

/***/ "./src/components/Track/TrackItemLikesCount.js":
/*!*****************************************************!*\
  !*** ./src/components/Track/TrackItemLikesCount.js ***!
  \*****************************************************/
/*! exports provided: TrackItemLikesCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackItemLikesCount", function() { return TrackItemLikesCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Liker_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Liker.modal */ "./src/components/Track/Liker.modal.js");
/* harmony import */ var _contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/SingleModalContext */ "./src/contexts/SingleModalContext.js");
/* harmony import */ var _Common_DynamicContent_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/DynamicContent.modal */ "./src/components/Common/DynamicContent.modal.js");
var _jsxFileName = "C:\\Users\\PC\\WebstormProjects\\nextjs\\SoundCloudClone\\src\\components\\Track\\TrackItemLikesCount.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TrackItemLikesCount = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  track
}) => {
  const toggleModalWithContent = Object(_contexts_SingleModalContext__WEBPACK_IMPORTED_MODULE_2__["useToggleModalWithContent"])();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("button", {
    className: " underline mx-1",
    onClick: () => toggleModalWithContent(__jsx(_Liker_modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      track: track,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, track.count_like));
});

/***/ }),

/***/ "./src/components/Track/TrackList.js":
/*!*******************************************!*\
  !*** ./src/components/Track/TrackList.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrackList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\PC\\WebstormProjects\\nextjs\\SoundCloudClone\\src\\components\\Track\\TrackList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function TrackList({
  children
}) {
  return __jsx("div", {
    className: " m-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, children);
}

/***/ }),

/***/ "./src/components/Track/TrackListHeader.js":
/*!*************************************************!*\
  !*** ./src/components/Track/TrackListHeader.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrackListHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\PC\\WebstormProjects\\nextjs\\SoundCloudClone\\src\\components\\Track\\TrackListHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function TrackListHeader() {
  return __jsx("div", {
    className: "flex mb-4 pb-2 px-4 border-b border-gray-200 justify-between items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "#"), __jsx("div", {
    className: " ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Track"), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Likes"));
}

/***/ }),

/***/ "./src/constants/actionTypes.constant.js":
/*!***********************************************!*\
  !*** ./src/constants/actionTypes.constant.js ***!
  \***********************************************/
/*! exports provided: trackActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackActionTypes", function() { return trackActionTypes; });
const trackActionTypes = {
  TRENDING_TRACKS_FETCHED_SUCCESS: 'TRENDING_TRACKS_FETCHED_SUCCESS',
  FAVORITE_TRACKS_IDS_FETCHED_SUCCESS: 'FAVORITE_TRACKS_IDS_FETCHED_SUCCESS',
  ADD_FAVORITE_TRACK: 'ADD_FAVORITE_TRACK',
  REMOVE_FAVORITE_TRACK: 'REMOVE_FAVORITE_TRACK'
};

/***/ }),

/***/ "./src/constants/firebase.constant.js":
/*!********************************************!*\
  !*** ./src/constants/firebase.constant.js ***!
  \********************************************/
/*! exports provided: firebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/functions */ "firebase/functions");
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_functions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebaseConfig */ "./firebaseConfig.js");




 // firebase.initializeApp(config);

!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__["config"]) : firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app();


/***/ }),

/***/ "./src/constants/message.constant.js":
/*!*******************************************!*\
  !*** ./src/constants/message.constant.js ***!
  \*******************************************/
/*! exports provided: messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
const messages = {
  TRACK_LIKED_SUCCESS: ' Was Added To Your Library',
  INCORRECT_USERNAME_PASSWORD_ERROR: 'Incorrect Username Or Password',
  ACCOUNT_WAS_CREATED_SUCCESS: 'Account was created successfully'
};

/***/ }),

/***/ "./src/constants/musicPlayer.constant.js":
/*!***********************************************!*\
  !*** ./src/constants/musicPlayer.constant.js ***!
  \***********************************************/
/*! exports provided: musicPlayer, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "musicPlayer", function() { return musicPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_MusicPlayerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/MusicPlayerContext */ "./src/contexts/MusicPlayerContext.js");
/* harmony import */ var _helpers_utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/utils.helper */ "./src/helpers/utils.helper.js");




const musicPlayer = {
  instance: null,
  setInstance: instance => musicPlayer.instance = instance,
  getInstance: () => musicPlayer.instance
};
const audioList1 = [{
  name: 'Despacito',
  singer: 'Luis Fonsi',
  cover: 'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
  musicSrc: () => _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3')
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

/***/ }),

/***/ "./src/constants/myApi.constant.js":
/*!*****************************************!*\
  !*** ./src/constants/myApi.constant.js ***!
  \*****************************************/
/*! exports provided: myApiAxiosInstance, myApiEndPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myApiAxiosInstance", function() { return myApiAxiosInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myApiEndPoint", function() { return myApiEndPoint; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_storage_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/storage.helper */ "./src/helpers/storage.helper.js");



const myApiAxiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: 'https://us-central1-react-movie-2dee0.cloudfunctions.net/api/'
});
myApiAxiosInstance.interceptors.request.use(async config => {
  // const token = await firebase.auth().currentUser.getIdToken(true); slow
  const token = _helpers_storage_helper__WEBPACK_IMPORTED_MODULE_2__["localStorageService"].getToken();
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

/***/ "./src/contexts/AuthContext.js":
/*!*************************************!*\
  !*** ./src/contexts/AuthContext.js ***!
  \*************************************/
/*! exports provided: AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var constate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constate */ "constate");
/* harmony import */ var constate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(constate__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants_firebase_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/firebase.constant */ "./src/constants/firebase.constant.js");
/* harmony import */ var _constants_myApi_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants/myApi.constant */ "./src/constants/myApi.constant.js");
/* harmony import */ var _helpers_storage_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/storage.helper */ "./src/helpers/storage.helper.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







const useAuther = () => {
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null);
  const [refreshToken, setRefreshToken] = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null);
  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = _constants_firebase_constant__WEBPACK_IMPORTED_MODULE_9__["firebase"].auth().onAuthStateChanged(async user => {
      if (user) {
        const tokenResult = await _constants_firebase_constant__WEBPACK_IMPORTED_MODULE_9__["firebase"].auth().currentUser.getIdTokenResult(true);
        _helpers_storage_helper__WEBPACK_IMPORTED_MODULE_11__["localStorageService"].setToken(tokenResult.token);
        setRefreshToken(true);
        setUser(_objectSpread({}, user, {
          admin: tokenResult.claims.admin,
          username: user.displayName
        }));
      } else {
        _helpers_storage_helper__WEBPACK_IMPORTED_MODULE_11__["localStorageService"].removeToken();
        setUser(null);
      }
    }); // Unsubscribe to the listener when unmounting

    return () => {
      unsubscribe();
    };
  }, []);

  const loginWithEmail = async (email, password) => {
    await _constants_firebase_constant__WEBPACK_IMPORTED_MODULE_9__["firebase"].auth().signInWithEmailAndPassword(email, password);
    window.location.reload();
    _helpers_storage_helper__WEBPACK_IMPORTED_MODULE_11__["localStorageService"].setToken('authenticated'); // for showing user section quickly when token is empty because google auth is slow
  };

  const signOut = () => {
    _constants_firebase_constant__WEBPACK_IMPORTED_MODULE_9__["firebase"].auth().signOut();
    window.location.reload();
  };

  return {
    user,
    refreshToken,
    loginWithEmail,
    signOut
  };
};

const [AuthProvider, useAuth] = constate__WEBPACK_IMPORTED_MODULE_8___default()(useAuther);

/***/ }),

/***/ "./src/contexts/MusicPlayerContext.js":
/*!********************************************!*\
  !*** ./src/contexts/MusicPlayerContext.js ***!
  \********************************************/
/*! exports provided: MusicPlayerProvider, useCurrentTrack, useIsCurrentTrackPlaying, useMusicPlayerOptions, useAddTrackToAudioList, usePlayTrack, usePauseTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPlayerProvider", function() { return MusicPlayerProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCurrentTrack", function() { return useCurrentTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsCurrentTrackPlaying", function() { return useIsCurrentTrackPlaying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMusicPlayerOptions", function() { return useMusicPlayerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddTrackToAudioList", function() { return useAddTrackToAudioList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePlayTrack", function() { return usePlayTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePauseTrack", function() { return usePauseTrack; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! constate */ "constate");
/* harmony import */ var constate__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(constate__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! use-immer */ "use-immer");
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(use_immer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constants_musicPlayer_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants/musicPlayer.constant */ "./src/constants/musicPlayer.constant.js");










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






const isCurrentTrack = (trackId, currentTrack) => trackId === currentTrack.id;

const useMusicPlayer = params => {
  const {
    0: currentTrack,
    1: setCurrentTrack
  } = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({
    id: 11,
    playing: false
  });
  const onAudioListsChange = react__WEBPACK_IMPORTED_MODULE_10___default.a.useCallback((currentPlayId, audioLists, audioInfo) => {
    setMusicPlayerOptions(preOptions => _objectSpread({}, preOptions, {
      audioLists
    }));
  }, []);
  const onAudioPause = react__WEBPACK_IMPORTED_MODULE_10___default.a.useCallback(audioInfo => {
    setCurrentTrackPause(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(audioInfo.lyric));
  }, []);
  const onAudioPlay = react__WEBPACK_IMPORTED_MODULE_10___default.a.useCallback(audioInfo => {
    setCurrentTrackPlaying(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(audioInfo.lyric));
  }, []);
  const getAudioInstance = react__WEBPACK_IMPORTED_MODULE_10___default.a.useCallback(audioInstance => {
    _constants_musicPlayer_constant__WEBPACK_IMPORTED_MODULE_12__["musicPlayer"].setInstance(audioInstance);
  }, []);
  const {
    0: musicPlayerOptions,
    1: setMusicPlayerOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(_objectSpread({}, _constants_musicPlayer_constant__WEBPACK_IMPORTED_MODULE_12__["options"], {
    onAudioListsChange,
    getAudioInstance,
    onAudioPause,
    onAudioPlay
  }));
  const playTrack = react__WEBPACK_IMPORTED_MODULE_10___default.a.useCallback(track => {
    if (!isCurrentTrack(track.id, currentTrack)) {
      console.log('play diff song', track.id, currentTrack);
      addTrackToAudioList({
        name: track.name,
        singer: track.artist,
        cover: track.artwork_url,
        id: track.id,
        lyric: `${track.id}`,
        musicSrc: () => _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a.resolve(`https://api.soundcloud.com/tracks/${track.id}/stream?client_id=${"a281614d7f34dc30b665dfcaa3ed7505"}`)
      });
    }

    _constants_musicPlayer_constant__WEBPACK_IMPORTED_MODULE_12__["musicPlayer"].getInstance().play();
  }, [currentTrack]);
  const pauseTrack = react__WEBPACK_IMPORTED_MODULE_10___default.a.useCallback(track => {
    _constants_musicPlayer_constant__WEBPACK_IMPORTED_MODULE_12__["musicPlayer"].getInstance().pause();
  }, []);
  const addTrackToAudioList = react__WEBPACK_IMPORTED_MODULE_10___default.a.useCallback(track => {
    setMusicPlayerOptions(preOptions => _objectSpread({}, preOptions, {
      // if use global state: musicPlayerOptions instead of local state: preOptions,
      // it will cache the initial musicPlayerOptions because of useCallbackOnce
      // Maybe this doesn't apply for dispatch in useReducer, I don't know
      audioLists: [track, ...preOptions.audioLists]
    }));
  }, []);
  const setCurrentTrackPlaying = react__WEBPACK_IMPORTED_MODULE_10___default.a.useCallback(trackId => {
    setCurrentTrack(preTrack => {
      const currentTrack = {
        id: trackId,
        playing: true
      };
      return currentTrack;
    });
  }, []);
  const setCurrentTrackPause = react__WEBPACK_IMPORTED_MODULE_10___default.a.useCallback(trackId => {
    setCurrentTrack(preTrack => {
      const currentTrack = {
        id: trackId,
        playing: false
      };
      return currentTrack;
    });
  }, []);
  const isCurrentTrackPlaying = react__WEBPACK_IMPORTED_MODULE_10___default.a.useCallback(trackId => currentTrack.id === trackId && currentTrack.playing, [currentTrack]);
  return {
    currentTrack,
    isCurrentTrackPlaying,
    musicPlayerOptions,
    addTrackToAudioList,
    playTrack,
    pauseTrack
  };
};

const [MusicPlayerProvider, useCurrentTrack, useIsCurrentTrackPlaying, useMusicPlayerOptions, useAddTrackToAudioList, usePlayTrack, usePauseTrack] = constate__WEBPACK_IMPORTED_MODULE_9___default()(useMusicPlayer, value => value.currentTrack, value => value.isCurrentTrackPlaying, value => value.musicPlayerOptions, value => value.addTrackToAudioList, value => value.playTrack, value => value.pauseTrack);

/***/ }),

/***/ "./src/contexts/SingleModalContext.js":
/*!********************************************!*\
  !*** ./src/contexts/SingleModalContext.js ***!
  \********************************************/
/*! exports provided: SingleModalProvider, useIsModalShowing, useToggleModal, useModalContent, useToggleModalWithContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleModalProvider", function() { return SingleModalProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsModalShowing", function() { return useIsModalShowing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToggleModal", function() { return useToggleModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useModalContent", function() { return useModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToggleModalWithContent", function() { return useToggleModalWithContent; });
/* harmony import */ var constate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constate */ "constate");
/* harmony import */ var constate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(constate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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

/***/ "./src/contexts/TrackContext.js":
/*!**************************************!*\
  !*** ./src/contexts/TrackContext.js ***!
  \**************************************/
/*! exports provided: TrackProvider, useTracks, useTrendingTracks, useAddFavoriteTrackIds, useIsFavoriteTrack, useAddFavoriteTrack, useAddTrendingTracks, useRemoveFavoriteTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackProvider", function() { return TrackProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTracks", function() { return useTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrendingTracks", function() { return useTrendingTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddFavoriteTrackIds", function() { return useAddFavoriteTrackIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsFavoriteTrack", function() { return useIsFavoriteTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddFavoriteTrack", function() { return useAddFavoriteTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddTrendingTracks", function() { return useAddTrendingTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRemoveFavoriteTrack", function() { return useRemoveFavoriteTrack; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var constate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constate */ "constate");
/* harmony import */ var constate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(constate__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! use-immer */ "use-immer");
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(use_immer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/pull */ "lodash/pull");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_pull__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/remove */ "lodash/remove");
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_remove__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constants_actionTypes_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants/actionTypes.constant */ "./src/constants/actionTypes.constant.js");
/* harmony import */ var _constants_myApi_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants/myApi.constant */ "./src/constants/myApi.constant.js");
/* harmony import */ var _helpers_utils_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../helpers/utils.helper */ "./src/helpers/utils.helper.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }









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
    case _constants_actionTypes_constant__WEBPACK_IMPORTED_MODULE_12__["trackActionTypes"].TRENDING_TRACKS_FETCHED_SUCCESS:
      const newTracks = Object(_helpers_utils_helper__WEBPACK_IMPORTED_MODULE_14__["convertArrayToObject"])(payload, 'id');

      const newTrackIds = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(newTracks).map(Number);

      return void (state.tracks = _objectSpread({}, newTracks, {}, state.tracks), state.trendingTracks.push(...newTrackIds));

    case _constants_actionTypes_constant__WEBPACK_IMPORTED_MODULE_12__["trackActionTypes"].FAVORITE_TRACKS_FETCHED_SUCCESS:
      return void (state.favoriteTracks = payload);

    case _constants_actionTypes_constant__WEBPACK_IMPORTED_MODULE_12__["trackActionTypes"].FAVORITE_TRACKS_IDS_FETCHED_SUCCESS:
      return void (state.favoriteTrackIds = payload);

    case _constants_actionTypes_constant__WEBPACK_IMPORTED_MODULE_12__["trackActionTypes"].ADD_FAVORITE_TRACK:
      return void (state.favoriteTrackIds.push(payload.id), state.tracks[payload.id].count_like += 1);

    case _constants_actionTypes_constant__WEBPACK_IMPORTED_MODULE_12__["trackActionTypes"].REMOVE_FAVORITE_TRACK:
      return void (lodash_pull__WEBPACK_IMPORTED_MODULE_10___default()(state.favoriteTrackIds, payload.id), state.tracks[payload.id].count_like -= 1);

    default:
      return state;
  }
};

const useTrack = () => {
  const [state, dispatch] = Object(use_immer__WEBPACK_IMPORTED_MODULE_9__["useImmerReducer"])(reducer, initialState);
  const addTrendingTracks = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(data => {
    // useCallbackOnce here helps prevent previous tracks re-rendering
    dispatch({
      type: _constants_actionTypes_constant__WEBPACK_IMPORTED_MODULE_12__["trackActionTypes"].TRENDING_TRACKS_FETCHED_SUCCESS,
      payload: data
    });
  }, []);
  const addFavoriteTrackIds = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(data => {
    dispatch({
      type: _constants_actionTypes_constant__WEBPACK_IMPORTED_MODULE_12__["trackActionTypes"].FAVORITE_TRACKS_IDS_FETCHED_SUCCESS,
      payload: data
    });
  }, []);
  const checkIsFavoriteTrack = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(trackId => {
    const isFavoriteTrack = state.favoriteTrackIds.includes(trackId);
    return isFavoriteTrack;
  }, [state.favoriteTrackIds]);
  const addFavoriteTrack = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(trackObj => {
    dispatch({
      type: _constants_actionTypes_constant__WEBPACK_IMPORTED_MODULE_12__["trackActionTypes"].ADD_FAVORITE_TRACK,
      // desc order insertion
      payload: trackObj
    });
  }, []);
  const removeFavoriteTrack = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(trackObj => {
    dispatch({
      type: _constants_actionTypes_constant__WEBPACK_IMPORTED_MODULE_12__["trackActionTypes"].REMOVE_FAVORITE_TRACK,
      payload: trackObj
    });
  }, []);
  return {
    tracks: state.tracks,
    favoriteTrackIds: state.favoriteTrackIds,
    trendingTracks: Object(_helpers_utils_helper__WEBPACK_IMPORTED_MODULE_14__["findObjectsByKeys"])(state.trendingTracks, state.tracks),
    addFavoriteTrackIds,
    checkIsFavoriteTrack,
    addFavoriteTrack,
    addTrendingTracks,
    removeFavoriteTrack
  };
};

const [TrackProvider, useTracks, useTrendingTracks, useAddFavoriteTrackIds, useIsFavoriteTrack, useAddFavoriteTrack, useAddTrendingTracks, useRemoveFavoriteTrack] = constate__WEBPACK_IMPORTED_MODULE_8___default()(useTrack, value => value.tracks, value => value.trendingTracks, value => value.addFavoriteTrackIds, value => value.checkIsFavoriteTrack, value => value.addFavoriteTrack, value => value.addTrendingTracks, value => value.removeFavoriteTrack);

/***/ }),

/***/ "./src/helpers/storage.helper.js":
/*!***************************************!*\
  !*** ./src/helpers/storage.helper.js ***!
  \***************************************/
/*! exports provided: localStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageService", function() { return localStorageService; });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.helper */ "./src/helpers/utils.helper.js");


const getToken = params => {
  if (_utils_helper__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
    const token = localStorage.getItem('token_access') || '';
    return token.replace(/\\"/g, '"');
  }
};

const setToken = token => {
  if (_utils_helper__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
    localStorage.setItem('token_access', token);
  }
};

const removeToken = () => {
  if (_utils_helper__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
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

/***/ "./src/helpers/utils.helper.js":
/*!*************************************!*\
  !*** ./src/helpers/utils.helper.js ***!
  \*************************************/
/*! exports provided: convertArrayToObject, findObjectsByKeys, errorSelector, isBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertArrayToObject", function() { return convertArrayToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findObjectsByKeys", function() { return findObjectsByKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorSelector", function() { return errorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

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

/***/ "./src/hooks/track/useLikeTrack.js":
/*!*****************************************!*\
  !*** ./src/hooks/track/useLikeTrack.js ***!
  \*****************************************/
/*! exports provided: useLikeTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLikeTrack", function() { return useLikeTrack; });
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message/style/css */ "./node_modules/antd/lib/message/style/css.js");
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_myApi_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/myApi.constant */ "./src/constants/myApi.constant.js");
/* harmony import */ var _constants_message_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/message.constant */ "./src/constants/message.constant.js");
/* harmony import */ var _contexts_TrackContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/TrackContext */ "./src/contexts/TrackContext.js");
/* harmony import */ var _helpers_utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/utils.helper */ "./src/helpers/utils.helper.js");







const useLikeTrack = track => {
  const addFavoriteTrack = Object(_contexts_TrackContext__WEBPACK_IMPORTED_MODULE_5__["useAddFavoriteTrack"])();

  const likeTrack = async () => {
    try {
      addFavoriteTrack(track);
      await _constants_myApi_constant__WEBPACK_IMPORTED_MODULE_3__["myApiAxiosInstance"].post(`tracks/${track.id}/likes`); // update db

      antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success(track.name + _constants_message_constant__WEBPACK_IMPORTED_MODULE_4__["messages"].TRACK_LIKED_SUCCESS);
    } catch (error) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error(Object(_helpers_utils_helper__WEBPACK_IMPORTED_MODULE_6__["errorSelector"])(error));
    }
  };

  return {
    likeTrack
  };
};

/***/ }),

/***/ "./src/hooks/track/usePublicTracks.js":
/*!********************************************!*\
  !*** ./src/hooks/track/usePublicTracks.js ***!
  \********************************************/
/*! exports provided: usePublicTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePublicTracks", function() { return usePublicTracks; });
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message/style/css */ "./node_modules/antd/lib/message/style/css.js");
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_myApi_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/myApi.constant */ "./src/constants/myApi.constant.js");
/* harmony import */ var _helpers_utils_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/utils.helper */ "./src/helpers/utils.helper.js");
/* harmony import */ var _contexts_TrackContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/TrackContext */ "./src/contexts/TrackContext.js");







const usePublicTracks = (endpoint, limit) => {
  const trendingTracks = Object(_contexts_TrackContext__WEBPACK_IMPORTED_MODULE_6__["useTrendingTracks"])();
  const addTrendingTracks = Object(_contexts_TrackContext__WEBPACK_IMPORTED_MODULE_6__["useAddTrendingTracks"])();
  const {
    0: offset,
    1: setOffset
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("");
  const {
    0: hasMore,
    1: setHasMore
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true);

  const loadMore = async params => {
    if (!hasMore) {
      return;
    }

    try {
      const res = await _constants_myApi_constant__WEBPACK_IMPORTED_MODULE_4__["myApiAxiosInstance"].get(endpoint, {
        params: {
          limit,
          lastVisible: offset
        }
      });
      if (res.data.lastVisible == "end") setHasMore(false);
      addTrendingTracks(res.data.collection);
      setOffset(res.data.lastVisible);
    } catch (error) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error(Object(_helpers_utils_helper__WEBPACK_IMPORTED_MODULE_5__["errorSelector"])(error));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    loadMore();
  }, []);
  return {
    trendingTracks,
    loadMore,
    hasMore
  };
};

/***/ }),

/***/ "./src/hooks/track/useUnlikeTrack.js":
/*!*******************************************!*\
  !*** ./src/hooks/track/useUnlikeTrack.js ***!
  \*******************************************/
/*! exports provided: useUnlikeTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUnlikeTrack", function() { return useUnlikeTrack; });
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message/style/css */ "./node_modules/antd/lib/message/style/css.js");
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_myApi_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/myApi.constant */ "./src/constants/myApi.constant.js");
/* harmony import */ var _contexts_TrackContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/TrackContext */ "./src/contexts/TrackContext.js");
/* harmony import */ var _helpers_utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/utils.helper */ "./src/helpers/utils.helper.js");




 // eslint-disable-next-line import/prefer-default-export

const useUnlikeTrack = track => {
  const removeFavoriteTrack = Object(_contexts_TrackContext__WEBPACK_IMPORTED_MODULE_3__["useRemoveFavoriteTrack"])();

  const unlikeTrack = async () => {
    try {
      removeFavoriteTrack(track);
      await _constants_myApi_constant__WEBPACK_IMPORTED_MODULE_2__["myApiAxiosInstance"].delete(`tracks/${track.id}/likes`);
    } catch (error) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error(Object(_helpers_utils_helper__WEBPACK_IMPORTED_MODULE_4__["errorSelector"])(error));
    }
  };

  return {
    unlikeTrack
  };
};

/***/ }),

/***/ "./src/hooks/user/useFetchLiker.js":
/*!*****************************************!*\
  !*** ./src/hooks/user/useFetchLiker.js ***!
  \*****************************************/
/*! exports provided: useFetchLiker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchLiker", function() { return useFetchLiker; });
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message/style/css */ "./node_modules/antd/lib/message/style/css.js");
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_myApi_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/myApi.constant */ "./src/constants/myApi.constant.js");
/* harmony import */ var _helpers_utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/utils.helper */ "./src/helpers/utils.helper.js");




 // eslint-disable-next-line import/prefer-default-export

const useFetchLiker = track => {
  const {
    0: likers,
    1: setLikers
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const fetchLiker = async () => {
      try {
        const res = await _constants_myApi_constant__WEBPACK_IMPORTED_MODULE_3__["myApiAxiosInstance"].get(`${_constants_myApi_constant__WEBPACK_IMPORTED_MODULE_3__["myApiEndPoint"].PEOPLE_WHO_LIKES_TRACK}${track.id}`);
        setLikers(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);

        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error(Object(_helpers_utils_helper__WEBPACK_IMPORTED_MODULE_4__["errorSelector"])(error));
      }
    };

    if (!track.count_like) return;
    fetchLiker();
  }, []);
  return {
    likers,
    loading
  };
};

/***/ }),

/***/ "./src/hooks/user/useRegisterAccount.js":
/*!**********************************************!*\
  !*** ./src/hooks/user/useRegisterAccount.js ***!
  \**********************************************/
/*! exports provided: useRegisterAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterAccount", function() { return useRegisterAccount; });
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message/style/css */ "./node_modules/antd/lib/message/style/css.js");
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_myApi_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/myApi.constant */ "./src/constants/myApi.constant.js");
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/AuthContext */ "./src/contexts/AuthContext.js");
/* harmony import */ var _constants_message_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/message.constant */ "./src/constants/message.constant.js");
/* harmony import */ var _helpers_utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/utils.helper */ "./src/helpers/utils.helper.js");






 // eslint-disable-next-line import/prefer-default-export

const useRegisterAccount = () => {
  const {
    loginWithEmail
  } = Object(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__["useAuth"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const registerAccount = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(async data => {
    try {
      setLoading(true);
      await _constants_myApi_constant__WEBPACK_IMPORTED_MODULE_3__["myApiAxiosInstance"].post(_constants_myApi_constant__WEBPACK_IMPORTED_MODULE_3__["myApiEndPoint"].CREATE_NEW_ACCOUNT, data);
      setLoading(false);
      loginWithEmail(data.email, data.password);

      antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success(_constants_message_constant__WEBPACK_IMPORTED_MODULE_5__["messages"].ACCOUNT_WAS_CREATED_SUCCESS);
    } catch (error) {
      setLoading(false);

      antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error(Object(_helpers_utils_helper__WEBPACK_IMPORTED_MODULE_6__["errorSelector"])(error));
    }
  }, []);
  return {
    registerAccount,
    loading
  };
};

/***/ }),

/***/ "./src/hooks/user/useSignInAccount.js":
/*!********************************************!*\
  !*** ./src/hooks/user/useSignInAccount.js ***!
  \********************************************/
/*! exports provided: useSigninAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSigninAccount", function() { return useSigninAccount; });
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message/style/css */ "./node_modules/antd/lib/message/style/css.js");
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/AuthContext */ "./src/contexts/AuthContext.js");
/* harmony import */ var _constants_message_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/message.constant */ "./src/constants/message.constant.js");



/* eslint-disable import/prefer-default-export */



const useSigninAccount = () => {
  const {
    loginWithEmail
  } = Object(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const signinAccount = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(async data => {
    try {
      setLoading(true);
      await loginWithEmail(data.email, data.password);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error(_constants_message_constant__WEBPACK_IMPORTED_MODULE_4__["messages"].INCORRECT_USERNAME_PASSWORD_ERROR);
    }
  }, []);
  return {
    signinAccount,
    loading
  };
};

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style/css */ "./node_modules/antd/lib/spin/style/css.js");
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-infinite-scroller */ "react-infinite-scroller");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_myApi_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/myApi.constant */ "./src/constants/myApi.constant.js");
/* harmony import */ var _components_Track_TrackList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Track/TrackList */ "./src/components/Track/TrackList.js");
/* harmony import */ var _components_Track_TrackItem_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Track/TrackItem.container */ "./src/components/Track/TrackItem.container.js");
/* harmony import */ var _hooks_track_usePublicTracks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/track/usePublicTracks */ "./src/hooks/track/usePublicTracks.js");
/* harmony import */ var _components_Track_TrackListHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Track/TrackListHeader */ "./src/components/Track/TrackListHeader.js");
/* harmony import */ var _helpers_utils_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/utils.helper */ "./src/helpers/utils.helper.js");


var _jsxFileName = "C:\\Users\\PC\\WebstormProjects\\nextjs\\SoundCloudClone\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








function Index() {
  const {
    trendingTracks,
    loadMore,
    hasMore
  } = Object(_hooks_track_usePublicTracks__WEBPACK_IMPORTED_MODULE_7__["usePublicTracks"])(_constants_myApi_constant__WEBPACK_IMPORTED_MODULE_4__["myApiEndPoint"].TRENDING_TRACKS, 10);
  return _helpers_utils_helper__WEBPACK_IMPORTED_MODULE_9__["isBrowser"] && __jsx("div", {
    className: "px-4 pt-16 bg-grey-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_components_Track_TrackListHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default.a, {
    initialLoad: false // have to set up false then use useEffectOnce in hook. There is some bug with true state
    ,
    pageStart: 0,
    loadMore: loadMore,
    hasMore: hasMore,
    loader: __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_components_Track_TrackList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, trendingTracks.map((track, i) => __jsx(_components_Track_TrackItem_container__WEBPACK_IMPORTED_MODULE_6__["TrackItemContainer"], {
    key: track.id,
    track: track,
    numericalOrder: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })))));
}

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PC\WebstormProjects\nextjs\SoundCloudClone\src\pages\index.js */"./src/pages/index.js");


/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/checkbox":
/*!************************************!*\
  !*** external "antd/lib/checkbox" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/list":
/*!********************************!*\
  !*** external "antd/lib/list" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/list");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/modal":
/*!*********************************!*\
  !*** external "antd/lib/modal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "antd/lib/spin":
/*!********************************!*\
  !*** external "antd/lib/spin" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "constate":
/*!***************************!*\
  !*** external "constate" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("constate");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/functions":
/*!*************************************!*\
  !*** external "firebase/functions" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/functions");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/pull":
/*!******************************!*\
  !*** external "lodash/pull" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/pull");

/***/ }),

/***/ "lodash/remove":
/*!********************************!*\
  !*** external "lodash/remove" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/remove");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-hook-form-input":
/*!****************************************!*\
  !*** external "react-hook-form-input" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form-input");

/***/ }),

/***/ "react-infinite-scroller":
/*!******************************************!*\
  !*** external "react-infinite-scroller" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ }),

/***/ "react-use":
/*!****************************!*\
  !*** external "react-use" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-use");

/***/ }),

/***/ "use-immer":
/*!****************************!*\
  !*** external "use-immer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-immer");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map