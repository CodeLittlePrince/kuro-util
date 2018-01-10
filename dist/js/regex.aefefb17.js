/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Regex = exports.Mathematic = undefined;

var _mathematic = __webpack_require__(1);

var _mathematic2 = _interopRequireDefault(_mathematic);

var _regex = __webpack_require__(2);

var _regex2 = _interopRequireDefault(_regex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Mathematic = _mathematic2.default;
exports.Regex = _regex2.default;


const util = {
  Mathematic: _mathematic2.default,
  Regex: _regex2.default
};
exports.default = util;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /**
   * 乱序
   * @param {array} a 数据
   * @returns {array} 乱序后的数据
   */
  shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
    return a;
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // 手机号匹配
  mobile: /^1\d{10}$/,
  // 密码匹配,匹配6-32个中英文字符
  password: /^[A-Za-z0-9]{6,32}$/,
  // 电话号码匹配
  phone: /^((d{3,4})|d{3,4}-)?d{7,8}$/,
  // 电子邮箱匹配
  email: /^w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*$/,
  // 银行卡匹配
  card: /^\d{16}|\d{19}$/,
  // 姓名匹配
  name: /^(\u4E00-\u9FA5){2,}$/,
  // qq号匹配
  QQ: /^[1-9][0-9]{4,}$/,
  // 验证码匹配
  verificationCode: /^[A-Za-z0-9]{1,6}$/,
  // URL地址
  url: new RegExp('(http[s]{0,1}|ftp)://[a-zA-Z0-9\\.\\-]+\\.([a-zA-Z]{2,4})(:\\d+)?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?', 'gi'),
  // 非空数字校验，包含负数
  number: /^-?[0-9]+/
};

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

const tel = document.getElementById('tel');
const tip = document.getElementById('tip');
tel.addEventListener('input', () => {
  tip.className = _index.Regex.mobile.test(tel.value) ? '' : 'hide';
});

/***/ })
/******/ ]);