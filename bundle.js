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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var context = __webpack_require__(1);
var partials = __webpack_require__(2);
var helpers = __webpack_require__(3);
var template = __webpack_require__(4);

Handlebars.registerPartial(partials);

Handlebars.registerHelper(helpers);

var template = template;

var compiledData = Handlebars.compile(template);
var compiledTemplate = compiledData(context)

wrapper.innerHTML = compiledTemplate;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
    items: [
      {
        title: "My handlebars title 1",
        content: "Some content 1"
      },
      {
        title: "My handlebars title 2",
        content: "Some content 2"
      },
      {
        title: "My handlebars title 3",
        content: "Some content 3"
      },
      {
        title: "My handlebars title 4",
        content: "Some content 4"
      }
    ]
  };

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {task:`
<div class="main-block-item">
  <h1>{{ info.title }}</h1>
  <div class="main-block-content">
    {{ info.content }}
  </div>
</div>`
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
    code: function(url){
      return `<embed src="${url}"></embed>`;
}}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-block\">\r\n    {{#each items as |item|}}\r\n      {{>task info=item }} \r\n    {{/each}} \r\n    {{#code \"test-file.js\"}}{{/code}}   \r\n</div>";

/***/ })
/******/ ]);