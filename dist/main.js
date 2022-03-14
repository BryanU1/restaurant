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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayContact = () => {\n  const element = document.createElement('div');\n  const headChef = document.createElement('h1');\n  headChef.textContent = 'Dennis Ly';\n  const headChefInfo = document.createElement('ul');\n  const headChefText = [\n    'chef',\n    '111-111-1111',\n    'rand@email.com',\n  ];\n  headChefText.forEach(function(el) {\n    const li = document.createElement('li');\n    li.textContent = el;\n    headChefInfo.appendChild(li);\n  });\n\n  element.appendChild(headChef);\n  element.appendChild(headChefInfo);\n\n  return element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContact);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayHome = () => {\n  const element = document.createElement('div');\n  const summary = document.createElement('div');\n  summary.classList.add('summary');\n  const hours = document.createElement('ul');\n  hours.classList.add('hours');\n  const hoursText = [\n    'Sunday: Closed',\n    'Monday: 6am - 8pm',\n    'Tuesday: 6am - 8pm',\n    'Wednesday: 6am - 8pm',\n    'Thursday: 6am - 8pm',\n    'Friday: 6am - 8pm',\n    'Saturday: Closed'\n  ];\n  hoursText.forEach(function(el) {\n    const hoursList = document.createElement('li');\n    hoursList.textContent = el;\n    hours.appendChild(hoursList);\n  });\n  const location = document.createElement('div');\n\n  summary.textContent = \"In Noodle Express, we offer customers the best noodles around the world. By serving dishes such as Pho, Lo Mein, and Pad Thai, we offer experiences that makes you feel like traveling around Asia.\";\n\n  location.textContent = \"123 Random St., City, State \"\n\n  element.appendChild(summary);  \n  element.appendChild(hours);\n  element.appendChild(location);\n\n  return element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst homeBtn = document.createElement('button');\nconst menuBtn = document.createElement('button');\nconst contactBtn = document.createElement('button');\nconst content = document.querySelector('#content');\n\nhomeBtn.addEventListener('click', () => {\n  content.textContent = '';\n  content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n});\nhomeBtn.textContent = \"Home\";\n\nmenuBtn.addEventListener('click', () => {\n  content.textContent = '';\n  content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n});\nmenuBtn.textContent = \"Menu\";\n\ncontactBtn.addEventListener('click', () => {\n  content.textContent = '';\n  content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n});\ncontactBtn.textContent = \"Contact\";\n\ndocument.body.insertBefore(homeBtn, content);\ndocument.body.insertBefore(menuBtn, content);\ndocument.body.insertBefore(contactBtn, content);\ncontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayMenu = () => {\n  const element = document.createElement('div');\n  const menu = document.createElement('ul');\n  const menuText = [\n    'Pho Dac Biet -------------------- $10',\n    'Lo Mein -------------------- $11',\n    'Pad Thai -------------------- $18'\n  ];\n\n  menuText.forEach(function(el) {\n    const li = document.createElement('li');\n    li.textContent = el;\n    menu.appendChild(li);\n  });\n\n  element.appendChild(menu);\n\n  return element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;