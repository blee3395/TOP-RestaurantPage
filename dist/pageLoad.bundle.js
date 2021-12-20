/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _home_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.jpg */ \"./src/home.jpg\");\n/* harmony import */ var _star_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./star.png */ \"./src/star.png\");\n/* eslint-disable no-plusplus */\r\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\nfunction homePage() {\r\n  const homePage = document.createElement('div');\r\n  homePage.className = 'homePage';\r\n\r\n  const img = new Image();\r\n  img.src = _home_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n  img.alt = 'picture of food';\r\n  img.className = 'homeImg';\r\n\r\n  const review = document.createElement('div');\r\n  review.className = 'review';\r\n\r\n  const rating = document.createElement('div');\r\n  rating.className = 'rating';\r\n\r\n  const openQuote = document.createElement('div');\r\n  openQuote.className = 'quote';\r\n  openQuote.textContent = '\"';\r\n\r\n  const endQuote = document.createElement('div');\r\n  endQuote.className = 'quote';\r\n  endQuote.textContent = '\"';\r\n\r\n  rating.appendChild(openQuote);\r\n  for (let i = 0; i < 5; i++) {\r\n    const starImg = new Image();\r\n    starImg.src = _star_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    starImg.alt = 'a gold star';\r\n    starImg.className = 'star';\r\n    rating.appendChild(starImg);\r\n  }\r\n  rating.appendChild(endQuote);\r\n\r\n  const quote = document.createElement('div');\r\n  quote.className = 'quote text';\r\n  quote.textContent = 'An exquisite family establishment - Vin Diesel';\r\n\r\n  review.appendChild(rating);\r\n  review.appendChild(quote);\r\n\r\n  homePage.appendChild(img);\r\n  homePage.appendChild(review);\r\n\r\n  return homePage;\r\n}\r\n\n\n//# sourceURL=webpack://TOP-RestaurantPage/./src/homePage.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.png */ \"./src/logo.png\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\nfunction pageLoad() {\r\n  const content = document.getElementById('content');\r\n  const header = document.querySelector('.header');\r\n\r\n  const logo = new Image();\r\n  logo.src = _logo_png__WEBPACK_IMPORTED_MODULE_1__;\r\n  logo.alt = 'a restaurant image';\r\n  logo.className = 'logo';\r\n\r\n  // Container for buttons\r\n  const buttons = document.createElement('div');\r\n  buttons.className = 'buttons';\r\n\r\n  // Create headline buttons\r\n  const homeBtn = document.createElement('button');\r\n  homeBtn.className = 'home btn';\r\n  homeBtn.textContent = 'Home';\r\n  homeBtn.addEventListener('click', () => {\r\n    document.querySelector('.homePage').style.visibility = 'visible';\r\n    document.querySelector('.menuPage').style.visibility = 'hidden';\r\n    document.querySelector('.contactPage').style.visibility = 'hidden';\r\n  });\r\n\r\n  const menuBtn = document.createElement('button');\r\n  menuBtn.className = 'menu btn';\r\n  menuBtn.textContent = 'Menu';\r\n  menuBtn.addEventListener('click', () => {\r\n    document.querySelector('.homePage').style.visibility = 'hidden';\r\n    document.querySelector('.menuPage').style.visibility = 'visible';\r\n    document.querySelector('.contactPage').style.visibility = 'hidden';\r\n  });\r\n\r\n  const contactBtn = document.createElement('button');\r\n  contactBtn.className = 'contact btn';\r\n  contactBtn.textContent = 'Contact';\r\n  contactBtn.addEventListener('click', () => {\r\n    document.querySelector('.homePage').style.visibility = 'hidden';\r\n    document.querySelector('.menuPage').style.visibility = 'hidden';\r\n    document.querySelector('.contactPage').style.visibility = 'visible';\r\n  });\r\n\r\n  // Append buttons to div\r\n  buttons.appendChild(homeBtn);\r\n  buttons.appendChild(menuBtn);\r\n  buttons.appendChild(contactBtn);\r\n\r\n  // Append buttons to header\r\n  header.appendChild(logo);\r\n  header.appendChild(buttons);\r\n\r\n  // Create introduction\r\n  const headline = document.createElement('div');\r\n  headline.className = 'headline';\r\n  headline.textContent = 'Welcome to Olive Garden';\r\n\r\n  const motto = document.createElement('div');\r\n  motto.className = 'motto';\r\n  motto.textContent = \"When you're here you're family.\";\r\n\r\n  const intro = document.createElement('div');\r\n  intro.className = 'intro';\r\n  intro.appendChild(headline);\r\n  intro.appendChild(motto);\r\n\r\n  const container = document.createElement('div');\r\n  container.className = 'container';\r\n  container.appendChild(intro);\r\n  container.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\r\n  content.appendChild(container);\r\n}\r\n\n\n//# sourceURL=webpack://TOP-RestaurantPage/./src/pageLoad.js?");

/***/ }),

/***/ "./src/home.jpg":
/*!**********************!*\
  !*** ./src/home.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"228af4a23f9aeebaa518.jpg\";\n\n//# sourceURL=webpack://TOP-RestaurantPage/./src/home.jpg?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d7df4702f1af703975a8.png\";\n\n//# sourceURL=webpack://TOP-RestaurantPage/./src/logo.png?");

/***/ }),

/***/ "./src/star.png":
/*!**********************!*\
  !*** ./src/star.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3266ef513663a3493c7a.png\";\n\n//# sourceURL=webpack://TOP-RestaurantPage/./src/star.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pageLoad.js");
/******/ 	
/******/ })()
;