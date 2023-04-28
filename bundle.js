/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/keyboard.js":
/*!****************************!*\
  !*** ./src/js/keyboard.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keyboard": () => (/* binding */ Keyboard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const enKeyLayout = [
  { name: '~', size: 2 },
  { name: '1', size: 2 },
  { name: '2', size: 2 },
  { name: '3', size: 2 },
  { name: '4', size: 2 },
  { name: '5', size: 2 },
  { name: '6', size: 2 },
  { name: '7', size: 2 },
  { name: '8', size: 2 },
  { name: '9', size: 2 },
  { name: '0', size: 2 },
  { name: '-', size: 2 },
  { name: '+', size: 2 },
  { name: 'Backspace', size: 4 },
  { name: 'Tab', size: 3 },
  { name: 'Q', size: 2 },
  { name: 'W', size: 2 },
  { name: 'E', size: 2 },
  { name: 'R', size: 2 },
  { name: 'T', size: 2 },
  { name: 'Y', size: 2 },
  { name: 'U', size: 2 },
  { name: 'I', size: 2 },
  { name: 'O', size: 2 },
  { name: 'P', size: 2 },
  { name: '[', size: 2 },
  { name: ']', size: 2 },
  { name: '\\', size: 3 },
  { name: 'CapsLock', size: 4 },
  { name: 'A', size: 2 },
  { name: 'S', size: 2 },
  { name: 'D', size: 2 },
  { name: 'F', size: 2 },
  { name: 'G', size: 2 },
  { name: 'H', size: 2 },
  { name: 'J', size: 2 },
  { name: 'K', size: 2 },
  { name: 'L', size: 2 },
  { name: ';', size: 2 },
  { name: '\'', size: 2 },
  { name: 'Return', size: 4 },
  { name: 'Shift', size: 4 },
  { name: 'Z', size: 2 },
  { name: 'X', size: 2 },
  { name: 'C', size: 2 },
  { name: 'V', size: 2 },
  { name: 'B', size: 2 },
  { name: 'N', size: 2 },
  { name: 'M', size: 2 },
  { name: ',', size: 2 },
  { name: '.', size: 2 },
  { name: '/', size: 2 },
  { name: '🡅', size: 2 },
  { name: 'Shift', size: 4 },
  { name: 'Ctrl', size: 3 },
  { name: 'Win', size: 2 },
  { name: 'Alt', size: 2 },
  { name: 'Space', size: 13 },
  { name: 'Alt', size: 2 },
  { name: '🡄', size: 2 },
  { name: '🡇', size: 2 },
  { name: '🡆', size: 2 },
  { name: 'Ctrl', size: 2 },
];

class Keyboard {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.buildMarkup();
  }

  buildMarkup() {
    this.container.classList.add('keyboard');

    const keyList = document.createElement('ul');
    keyList.classList.add('keyboard__list');

    enKeyLayout.forEach(({ name, size }) => {
      const keyEl = document.createElement('li');
      keyEl.classList.add('keyboard__item');
      if (size > 1) {
        keyEl.classList.add(`keyboard__item--size--${size}`);
      }

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.classList.add('keyboard__btn');
      btn.textContent = name;

      keyEl.append(btn);
      keyList.append(keyEl);
    });

    this.container.append(keyList);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.js */ "./src/js/keyboard.js");




function buildBaseMarkup() {
  const container = document.createElement('main');
  container.classList.add('page-main');

  const heading = document.createElement('h1');
  heading.classList.add('page-title');
  heading.textContent = 'RSS Virtual Keyboard';

  const keyboardContainer = document.createElement('div');
  keyboardContainer.id = 'keyboard';

  container.append(heading);
  container.append(keyboardContainer);
  document.body.prepend(container);

  return keyboardContainer;
}

function init() {
  const keyboardContainer = buildBaseMarkup();

  const keyboard = new _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.Keyboard(keyboardContainer);
  keyboard.init();
}

document.addEventListener('DOMContentLoaded', init);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9zY3NzL21haW4uc2Nzcz9jYmI3Iiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvanMva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgZW5LZXlMYXlvdXQgPSBbXG4gIHsgbmFtZTogJ34nLCBzaXplOiAyIH0sXG4gIHsgbmFtZTogJzEnLCBzaXplOiAyIH0sXG4gIHsgbmFtZTogJzInLCBzaXplOiAyIH0sXG4gIHsgbmFtZTogJzMnLCBzaXplOiAyIH0sXG4gIHsgbmFtZTogJzQnLCBzaXplOiAyIH0sXG4gIHsgbmFtZTogJzUnLCBzaXplOiAyIH0sXG4gIHsgbmFtZTogJzYnLCBzaXplOiAyIH0sXG4gIHsgbmFtZTogJzcnLCBzaXplOiAyIH0sXG4gIHsgbmFtZTogJzgnLCBzaXplOiAyIH0sXG4gIHsgbmFtZTogJzknLCBzaXplOiAyIH0sXG4gIHsgbmFtZTogJzAnLCBzaXplOiAyIH0sXG4gIHsgbmFtZTogJy0nLCBzaXplOiAyIH0sXG4gIHsgbmFtZTogJysnLCBzaXplOiAyIH0sXG4gIHsgbmFtZTogJ0JhY2tzcGFjZScsIHNpemU6IDQgfSxcbiAgeyBuYW1lOiAnVGFiJywgc2l6ZTogMyB9LFxuICB7IG5hbWU6ICdRJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdXJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdFJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdSJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdUJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdZJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdVJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdJJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdPJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdQJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdbJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICddJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdcXFxcJywgc2l6ZTogMyB9LFxuICB7IG5hbWU6ICdDYXBzTG9jaycsIHNpemU6IDQgfSxcbiAgeyBuYW1lOiAnQScsIHNpemU6IDIgfSxcbiAgeyBuYW1lOiAnUycsIHNpemU6IDIgfSxcbiAgeyBuYW1lOiAnRCcsIHNpemU6IDIgfSxcbiAgeyBuYW1lOiAnRicsIHNpemU6IDIgfSxcbiAgeyBuYW1lOiAnRycsIHNpemU6IDIgfSxcbiAgeyBuYW1lOiAnSCcsIHNpemU6IDIgfSxcbiAgeyBuYW1lOiAnSicsIHNpemU6IDIgfSxcbiAgeyBuYW1lOiAnSycsIHNpemU6IDIgfSxcbiAgeyBuYW1lOiAnTCcsIHNpemU6IDIgfSxcbiAgeyBuYW1lOiAnOycsIHNpemU6IDIgfSxcbiAgeyBuYW1lOiAnXFwnJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdSZXR1cm4nLCBzaXplOiA0IH0sXG4gIHsgbmFtZTogJ1NoaWZ0Jywgc2l6ZTogNCB9LFxuICB7IG5hbWU6ICdaJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdYJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdDJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdWJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdCJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdOJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdNJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICcsJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICcuJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICcvJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICfwn6GFJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdTaGlmdCcsIHNpemU6IDQgfSxcbiAgeyBuYW1lOiAnQ3RybCcsIHNpemU6IDMgfSxcbiAgeyBuYW1lOiAnV2luJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdBbHQnLCBzaXplOiAyIH0sXG4gIHsgbmFtZTogJ1NwYWNlJywgc2l6ZTogMTMgfSxcbiAgeyBuYW1lOiAnQWx0Jywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICfwn6GEJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICfwn6GHJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICfwn6GGJywgc2l6ZTogMiB9LFxuICB7IG5hbWU6ICdDdHJsJywgc2l6ZTogMiB9LFxuXTtcblxuZXhwb3J0IGNsYXNzIEtleWJvYXJkIHtcbiAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuYnVpbGRNYXJrdXAoKTtcbiAgfVxuXG4gIGJ1aWxkTWFya3VwKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkJyk7XG5cbiAgICBjb25zdCBrZXlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBrZXlMaXN0LmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkX19saXN0Jyk7XG5cbiAgICBlbktleUxheW91dC5mb3JFYWNoKCh7IG5hbWUsIHNpemUgfSkgPT4ge1xuICAgICAgY29uc3Qga2V5RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAga2V5RWwuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2l0ZW0nKTtcbiAgICAgIGlmIChzaXplID4gMSkge1xuICAgICAgICBrZXlFbC5jbGFzc0xpc3QuYWRkKGBrZXlib2FyZF9faXRlbS0tc2l6ZS0tJHtzaXplfWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2J0bicpO1xuICAgICAgYnRuLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgICAga2V5RWwuYXBwZW5kKGJ0bik7XG4gICAgICBrZXlMaXN0LmFwcGVuZChrZXlFbCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoa2V5TGlzdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xuXG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4va2V5Ym9hcmQuanMnO1xuXG5mdW5jdGlvbiBidWlsZEJhc2VNYXJrdXAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtbWFpbicpO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtdGl0bGUnKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdSU1MgVmlydHVhbCBLZXlib2FyZCc7XG5cbiAgY29uc3Qga2V5Ym9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAga2V5Ym9hcmRDb250YWluZXIuaWQgPSAna2V5Ym9hcmQnO1xuXG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGluZyk7XG4gIGNvbnRhaW5lci5hcHBlbmQoa2V5Ym9hcmRDb250YWluZXIpO1xuICBkb2N1bWVudC5ib2R5LnByZXBlbmQoY29udGFpbmVyKTtcblxuICByZXR1cm4ga2V5Ym9hcmRDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IGtleWJvYXJkQ29udGFpbmVyID0gYnVpbGRCYXNlTWFya3VwKCk7XG5cbiAgY29uc3Qga2V5Ym9hcmQgPSBuZXcgS2V5Ym9hcmQoa2V5Ym9hcmRDb250YWluZXIpO1xuICBrZXlib2FyZC5pbml0KCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==