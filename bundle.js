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

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTROL_KEYS": () => (/* binding */ CONTROL_KEYS),
/* harmony export */   "KEY_ORDER": () => (/* binding */ KEY_ORDER),
/* harmony export */   "KEY_SIZES": () => (/* binding */ KEY_SIZES),
/* harmony export */   "MODIFIERS": () => (/* binding */ MODIFIERS),
/* harmony export */   "VALID_KEYS": () => (/* binding */ VALID_KEYS)
/* harmony export */ });
const KEY_ORDER = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'Delete',
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Enter',
  'ShiftLeft',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ArrowUp',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'MetaRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'ControlRight',
];

const KEY_SIZES = {
  Backquote: 2,
  Digit1: 2,
  Digit2: 2,
  Digit3: 2,
  Digit4: 2,
  Digit5: 2,
  Digit6: 2,
  Digit7: 2,
  Digit8: 2,
  Digit9: 2,
  Digit0: 2,
  Minus: 2,
  Equal: 2,
  Backspace: 5,
  Tab: 3,
  KeyQ: 2,
  KeyW: 2,
  KeyE: 2,
  KeyR: 2,
  KeyT: 2,
  KeyY: 2,
  KeyU: 2,
  KeyI: 2,
  KeyO: 2,
  KeyP: 2,
  BracketLeft: 2,
  BracketRight: 2,
  Backslash: 2,
  Delete: 2,
  CapsLock: 4,
  KeyA: 2,
  KeyS: 2,
  KeyD: 2,
  KeyF: 2,
  KeyG: 2,
  KeyH: 2,
  KeyJ: 2,
  KeyK: 2,
  KeyL: 2,
  Semicolon: 2,
  Quote: 2,
  Enter: 5,
  ShiftLeft: 5,
  KeyZ: 2,
  KeyX: 2,
  KeyC: 2,
  KeyV: 2,
  KeyB: 2,
  KeyN: 2,
  KeyM: 2,
  Comma: 2,
  Period: 2,
  Slash: 2,
  ArrowUp: 2,
  ShiftRight: 4,
  ControlLeft: 3,
  MetaLeft: 2,
  AltLeft: 2,
  Space: 12,
  AltRight: 2,
  MetaRight: 2,
  ArrowLeft: 2,
  ArrowDown: 2,
  ArrowRight: 2,
  ControlRight: 2,
};

const CONTROL_KEYS = [
  'Enter',
  'Backspace',
  'Delete',
  'End',
  'Home',
  'OSLeft',
  'OSRight',
  'MetaLeft',
  'MetaRight',
  'CapsLock',
  'ControlLeft',
  'ControlRight',
  'ShiftLeft',
  'ShiftRight',
  'AltLeft',
  'AltRight',
  'ArrowLeft',
  'ArrowUp',
  'ArrowRight',
  'ArrowDown',
  'Space',
];

const MODIFIERS = [
  'ShiftLeft',
  'ShiftRight',
  'ControlLeft',
  'ControlRight',
  'AltLeft',
  'AltRight',
  'OSLeft',
  'OSRight',
  'MetaLeft',
  'MetaRight',
  'CapsLock',
  'Backspace',
  'Delete',
];

const VALID_KEYS = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'Delete',
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Enter',
  'ShiftLeft',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ArrowUp',
  'ShiftRight',
  'ControlLeft',
  'OSLeft',
  'MetaLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'OSRight',
  'MetaRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'ControlRight',
];


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
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/js/constants.js");
/* harmony import */ var _layouts_en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/en.js */ "./src/js/layouts/en.js");
/* harmony import */ var _layouts_ru_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/ru.js */ "./src/js/layouts/ru.js");




const CAPS_CODE = 'CapsLock';
const LAYOUT_CHANGE_SHORTCUT = ['ControlLeft', 'AltLeft'];

class Keyboard {
  constructor(container) {
    this.container = container;
    this.keyboard = navigator.keyboard;
    this.keyboardState = _constants_js__WEBPACK_IMPORTED_MODULE_0__.KEY_ORDER.reduce((obj, curr) => (
      { ...obj, [curr]: { pressed: false } }
    ), {});
    this.cursorPos = 0;
    this.layout = _layouts_en_js__WEBPACK_IMPORTED_MODULE_1__.layout;
    this.mouseKey = null;
    this.isCaps = false;
  }

  init() {
    this.setInitialState();
    this.buildMarkup();
    this.bindEvents();
  }

  setInitialState() {
    const layout = localStorage.getItem('kbLayout') || 'en';

    this.layout = (layout === 'en') ? _layouts_en_js__WEBPACK_IMPORTED_MODULE_1__.layout : _layouts_ru_js__WEBPACK_IMPORTED_MODULE_2__.layout;
    localStorage.setItem('kbLayout', layout);
  }

  buildMarkup() {
    this.keyElements = {};
    this.container.classList.add('keyboard');

    const output = document.createElement('textarea');
    output.classList.add('keyboard__output');
    this.output = output;

    const keyList = document.createElement('ul');
    keyList.classList.add('keyboard__list');

    _constants_js__WEBPACK_IMPORTED_MODULE_0__.KEY_ORDER.forEach((keyCode) => {
      const size = _constants_js__WEBPACK_IMPORTED_MODULE_0__.KEY_SIZES[keyCode];

      const keyEl = document.createElement('li');
      keyEl.classList.add('keyboard__item');
      if (size > 2) {
        keyEl.classList.add(`keyboard__item--size--${size}`);
      }

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.code = keyCode;
      btn.classList.add('keyboard__btn');
      btn.textContent = this.layout[keyCode].default;

      keyEl.append(btn);
      keyList.append(keyEl);

      this.keyElements[keyCode] = btn;
    });

    this.container.append(output);
    this.container.append(keyList);
    output.focus();
  }

  getKeyName(keyCode) {
    const isShift = this.keyboardState.ShiftLeft.pressed || this.keyboardState.ShiftRight.pressed;

    if (!this.layout[keyCode].isLetter) {
      const value = this.layout[keyCode][isShift ? 'alt' : 'default'];
      return value || this.layout[keyCode].default;
    }
    const isAlt = (this.isCaps && !isShift) || (!this.isCaps && isShift);
    const value = this.layout[keyCode][isAlt ? 'alt' : 'default'];
    return value || this.layout[keyCode].default;
  }

  getKeyValue(keyCode) {
    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__.MODIFIERS.includes(keyCode)) {
      return '';
    }

    let value;
    switch (keyCode) {
      case 'Tab':
        value = '\t';
        break;
      case 'Space':
        value = ' ';
        break;
      case 'Enter':
        value = '\n';
        break;
      default:
        value = this.getKeyName(keyCode);
        break;
    }

    return value;
  }

  update() {
    _constants_js__WEBPACK_IMPORTED_MODULE_0__.KEY_ORDER.forEach((keyCode) => {
      const isPressed = this.keyboardState[keyCode].pressed;
      this.keyElements[keyCode].classList[isPressed ? 'add' : 'remove']('keyboard__btn--active');
      this.keyElements[keyCode].textContent = this.getKeyName(keyCode);
    });
    this.keyElements[CAPS_CODE].classList[this.isCaps ? 'add' : 'remove']('keyboard__btn--active');
  }

  handleKeyDownEvent(e) {
    this.output.focus();

    const { code, isTrusted } = e;

    if (code === CAPS_CODE) {
      this.isCaps = !this.isCaps;
    }
    if (code === 'Tab') {
      e.preventDefault();
    }
    // Change layout
    if (LAYOUT_CHANGE_SHORTCUT.every((key) => this.keyboardState[key].pressed)) {
      if (this.layout === _layouts_en_js__WEBPACK_IMPORTED_MODULE_1__.layout) {
        this.layout = _layouts_ru_js__WEBPACK_IMPORTED_MODULE_2__.layout;
        localStorage.setItem('kbLayout', 'ru');
      } else {
        this.layout = _layouts_en_js__WEBPACK_IMPORTED_MODULE_1__.layout;
        localStorage.setItem('kbLayout', 'en');
      }
    }
    if (isTrusted && _constants_js__WEBPACK_IMPORTED_MODULE_0__.CONTROL_KEYS.includes(code)) {
      return;
    }

    let textStart = this.cursorPos;
    let textEnd = this.cursorPos;
    switch (code) {
      case 'Backspace':
        textStart -= 1;
        break;
      case 'Delete':
        textEnd += 1;
        break;
      default:
        break;
    }

    this.cursorPos = this.output.selectionEnd;
    this.output.setRangeText(
      this.getKeyValue(e.code),
      textStart,
      textEnd,
      'end',
    );
  }

  bindEvents() {
    // Mouse events
    this.container.addEventListener('mousedown', (e) => {
      const { code } = e.target.dataset;
      if (!code) {
        return;
      }

      e.preventDefault();

      this.cursorPos = this.output.selectionEnd;

      const keyboardEvent = new KeyboardEvent('keydown', {
        key: this.getKeyName(code),
        code,
        bubbles: true,
        cancelable: true,
      });
      window.dispatchEvent(keyboardEvent);
      this.mouseKey = code;
    });

    this.container.addEventListener('mouseup', () => {
      if (!this.mouseKey) {
        return;
      }

      const keyboardEvent = new KeyboardEvent('keyup', {
        key: this.getKeyName(this.mouseKey),
        code: this.mouseKey,
        bubbles: true,
        cancelable: true,
      });
      window.dispatchEvent(keyboardEvent);
      this.mouseKey = null;
    });

    // Keyboard events
    window.addEventListener('keydown', (e) => {
      let { code } = e;
      this.cursorPos = this.output.selectionEnd;

      if (!_constants_js__WEBPACK_IMPORTED_MODULE_0__.CONTROL_KEYS.includes(code)) {
        e.preventDefault();
      }
      if (!_constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_KEYS.includes(code)) {
        return;
      }
      // Firefox Meta key fix
      if (code === 'OSLeft') {
        code = 'MetaLeft';
      }
      if (code === 'OSRight') {
        code = 'MetaRight';
      }

      this.keyboardState[code].pressed = true;
      this.handleKeyDownEvent(e);
      this.update();
    });

    window.addEventListener('keyup', (e) => {
      let { code } = e;
      if (!_constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_KEYS.includes(code)) {
        return;
      }
      // Firefox Meta key fix
      if (code === 'OSLeft') {
        code = 'MetaLeft';
      }
      if (code === 'OSRight') {
        code = 'MetaRight';
      }
      this.keyboardState[code].pressed = false;
      this.update();
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);


/***/ }),

/***/ "./src/js/layouts/en.js":
/*!******************************!*\
  !*** ./src/js/layouts/en.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
const layout = {
  Backquote: {
    isLetter: false,
    default: '`',
    alt: '~',
  },
  Digit1: {
    isLetter: false,
    default: '1',
    alt: '!',
  },
  Digit2: {
    isLetter: false,
    default: '2',
    alt: '@',
  },
  Digit3: {
    isLetter: false,
    default: '3',
    alt: '#',
  },
  Digit4: {
    isLetter: false,
    default: '4',
    alt: '$',
  },
  Digit5: {
    isLetter: false,
    default: '5',
    alt: '%',
  },
  Digit6: {
    isLetter: false,
    default: '6',
    alt: '^',
  },
  Digit7: {
    isLetter: false,
    default: '7',
    alt: '&',
  },
  Digit8: {
    isLetter: false,
    default: '8',
    alt: '*',
  },
  Digit9: {
    isLetter: false,
    default: '9',
    alt: '(',
  },
  Digit0: {
    isLetter: false,
    default: '0',
    alt: ')',
  },
  Minus: {
    isLetter: false,
    default: '-',
    alt: '_',
  },
  Equal: {
    isLetter: false,
    default: '=',
    alt: '+',
  },
  Backspace: {
    isLetter: false,
    default: 'Backspace',
  },
  Tab: {
    isLetter: false,
    default: 'Tab',
  },
  KeyQ: {
    isLetter: true,
    default: 'q',
    alt: 'Q',
  },
  KeyW: {
    isLetter: true,
    default: 'w',
    alt: 'W',
  },
  KeyE: {
    isLetter: true,
    default: 'e',
    alt: 'E',
  },
  KeyR: {
    isLetter: true,
    default: 'r',
    alt: 'R',
  },
  KeyT: {
    isLetter: true,
    default: 't',
    alt: 'T',
  },
  KeyY: {
    isLetter: true,
    default: 'y',
    alt: 'Y',
  },
  KeyU: {
    isLetter: true,
    default: 'u',
    alt: 'U',
  },
  KeyI: {
    isLetter: true,
    default: 'i',
    alt: 'I',
  },
  KeyO: {
    isLetter: true,
    default: 'o',
    alt: 'O',
  },
  KeyP: {
    isLetter: true,
    default: 'p',
    alt: 'P',
  },
  BracketLeft: {
    isLetter: false,
    default: '[',
    alt: '{',
  },
  BracketRight: {
    isLetter: false,
    default: ']',
    alt: '}',
  },
  Backslash: {
    isLetter: false,
    default: '\\',
    alt: '|',
  },
  Delete: {
    isLetter: false,
    default: 'Del',
  },
  CapsLock: {
    isLetter: false,
    default: 'CapsLock',
  },
  KeyA: {
    isLetter: true,
    default: 'a',
    alt: 'A',
  },
  KeyS: {
    isLetter: true,
    default: 's',
    alt: 'S',
  },
  KeyD: {
    isLetter: true,
    default: 'd',
    alt: 'D',
  },
  KeyF: {
    isLetter: true,
    default: 'f',
    alt: 'F',
  },
  KeyG: {
    isLetter: true,
    default: 'g',
    alt: 'G',
  },
  KeyH: {
    isLetter: true,
    default: 'h',
    alt: 'H',
  },
  KeyJ: {
    isLetter: true,
    default: 'j',
    alt: 'J',
  },
  KeyK: {
    isLetter: true,
    default: 'k',
    alt: 'K',
  },
  KeyL: {
    isLetter: true,
    default: 'l',
    alt: 'L',
  },
  Semicolon: {
    isLetter: false,
    default: ';',
    alt: ':',
  },
  Quote: {
    isLetter: false,
    default: '\'',
    alt: '"',
  },
  Enter: {
    isLetter: false,
    default: 'Enter',
  },
  ShiftLeft: {
    isLetter: false,
    default: 'Shift',
  },
  KeyZ: {
    isLetter: true,
    default: 'z',
    alt: 'Z',
  },
  KeyX: {
    isLetter: true,
    default: 'x',
    alt: 'X',
  },
  KeyC: {
    isLetter: true,
    default: 'c',
    alt: 'C',
  },
  KeyV: {
    isLetter: true,
    default: 'v',
    alt: 'V',
  },
  KeyB: {
    isLetter: true,
    default: 'b',
    alt: 'B',
  },
  KeyN: {
    isLetter: true,
    default: 'n',
    alt: 'N',
  },
  KeyM: {
    isLetter: true,
    default: 'm',
    alt: 'M',
  },
  Comma: {
    isLetter: false,
    default: ',',
    alt: '<',
  },
  Period: {
    isLetter: false,
    default: '.',
    alt: '>',
  },
  Slash: {
    isLetter: false,
    default: '/',
    alt: '?',
  },
  ArrowUp: {
    isLetter: false,
    default: '🡅',
  },
  ShiftRight: {
    isLetter: false,
    default: 'Shift',
  },
  ControlLeft: {
    isLetter: false,
    default: 'Ctrl',
  },
  OSLeft: {
    isLetter: false,
    default: 'Win',
  },
  MetaLeft: {
    isLetter: false,
    default: 'Win',
  },
  AltLeft: {
    isLetter: false,
    default: 'Alt',
  },
  Space: {
    isLetter: false,
    default: 'Space',
  },
  AltRight: {
    isLetter: false,
    default: 'Alt',
  },
  OSRight: {
    isLetter: false,
    default: 'Win',
  },
  MetaRight: {
    isLetter: false,
    default: 'Win',
  },
  ArrowLeft: {
    isLetter: false,
    default: '🡄',
  },
  ArrowDown: {
    isLetter: false,
    default: '🡇',
  },
  ArrowRight: {
    isLetter: false,
    default: '🡆',
  },
  ControlRight: {
    isLetter: false,
    default: 'Ctrl',
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);


/***/ }),

/***/ "./src/js/layouts/ru.js":
/*!******************************!*\
  !*** ./src/js/layouts/ru.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
const layout = {
  Backquote: {
    isLetter: true,
    default: 'ё',
    alt: 'Ё',
  },
  Digit1: {
    isLetter: false,
    default: '1',
    alt: '!',
  },
  Digit2: {
    isLetter: false,
    default: '2',
    alt: '"',
  },
  Digit3: {
    isLetter: false,
    default: '3',
    alt: '№',
  },
  Digit4: {
    isLetter: false,
    default: '4',
    alt: ';',
  },
  Digit5: {
    isLetter: false,
    default: '5',
    alt: '%',
  },
  Digit6: {
    isLetter: false,
    default: '6',
    alt: ':',
  },
  Digit7: {
    isLetter: false,
    default: '7',
    alt: '?',
  },
  Digit8: {
    isLetter: false,
    default: '8',
    alt: '*',
  },
  Digit9: {
    isLetter: false,
    default: '9',
    alt: '(',
  },
  Digit0: {
    isLetter: false,
    default: '0',
    alt: ')',
  },
  Minus: {
    isLetter: false,
    default: '-',
    alt: '_',
  },
  Equal: {
    isLetter: false,
    default: '=',
    alt: '+',
  },
  Backspace: {
    isLetter: false,
    default: 'Backspace',
  },
  Tab: {
    isLetter: false,
    default: 'Tab',
  },
  KeyQ: {
    isLetter: true,
    default: 'й',
    alt: 'Й',
  },
  KeyW: {
    isLetter: true,
    default: 'ц',
    alt: 'Ц',
  },
  KeyE: {
    isLetter: true,
    default: 'у',
    alt: 'У',
  },
  KeyR: {
    isLetter: true,
    default: 'к',
    alt: 'К',
  },
  KeyT: {
    isLetter: true,
    default: 'е',
    alt: 'Е',
  },
  KeyY: {
    isLetter: true,
    default: 'н',
    alt: 'Н',
  },
  KeyU: {
    isLetter: true,
    default: 'г',
    alt: 'Г',
  },
  KeyI: {
    isLetter: true,
    default: 'ш',
    alt: 'Ш',
  },
  KeyO: {
    isLetter: true,
    default: 'щ',
    alt: 'Щ',
  },
  KeyP: {
    isLetter: true,
    default: 'з',
    alt: 'З',
  },
  BracketLeft: {
    isLetter: true,
    default: 'х',
    alt: 'Х',
  },
  BracketRight: {
    isLetter: true,
    default: 'ъ',
    alt: 'Ъ',
  },
  Backslash: {
    isLetter: false,
    default: '\\',
    alt: '/',
  },
  Delete: {
    isLetter: false,
    default: 'Del',
  },
  CapsLock: {
    isLetter: false,
    default: 'CapsLock',
  },
  KeyA: {
    isLetter: true,
    default: 'ф',
    alt: 'Ф',
  },
  KeyS: {
    isLetter: true,
    default: 'ы',
    alt: 'Ы',
  },
  KeyD: {
    isLetter: true,
    default: 'в',
    alt: 'В',
  },
  KeyF: {
    isLetter: true,
    default: 'а',
    alt: 'А',
  },
  KeyG: {
    isLetter: true,
    default: 'п',
    alt: 'П',
  },
  KeyH: {
    isLetter: true,
    default: 'р',
    alt: 'Р',
  },
  KeyJ: {
    isLetter: true,
    default: 'о',
    alt: 'О',
  },
  KeyK: {
    isLetter: true,
    default: 'л',
    alt: 'Л',
  },
  KeyL: {
    isLetter: true,
    default: 'д',
    alt: 'Д',
  },
  Semicolon: {
    isLetter: true,
    default: 'ж',
    alt: 'Ж',
  },
  Quote: {
    isLetter: true,
    default: 'э',
    alt: 'Э',
  },
  Enter: {
    isLetter: false,
    default: 'Enter',
  },
  ShiftLeft: {
    isLetter: false,
    default: 'Shift',
  },
  KeyZ: {
    isLetter: true,
    default: 'я',
    alt: 'Я',
  },
  KeyX: {
    isLetter: true,
    default: 'ч',
    alt: 'Ч',
  },
  KeyC: {
    isLetter: true,
    default: 'с',
    alt: 'С',
  },
  KeyV: {
    isLetter: true,
    default: 'м',
    alt: 'М',
  },
  KeyB: {
    isLetter: true,
    default: 'и',
    alt: 'И',
  },
  KeyN: {
    isLetter: true,
    default: 'т',
    alt: 'Т',
  },
  KeyM: {
    isLetter: true,
    default: 'ь',
    alt: 'Ь',
  },
  Comma: {
    isLetter: true,
    default: 'б',
    alt: 'Б',
  },
  Period: {
    isLetter: true,
    default: 'ю',
    alt: 'Ю',
  },
  Slash: {
    isLetter: false,
    default: '.',
    alt: ',',
  },
  ArrowUp: {
    isLetter: false,
    default: '🡅',
  },
  ShiftRight: {
    isLetter: false,
    default: 'Shift',
  },
  ControlLeft: {
    isLetter: false,
    default: 'Ctrl',
  },
  OSLeft: {
    isLetter: false,
    default: 'Win',
  },
  MetaLeft: {
    isLetter: false,
    default: 'Win',
  },
  AltLeft: {
    isLetter: false,
    default: 'Alt',
  },
  Space: {
    isLetter: false,
    default: 'Space',
  },
  AltRight: {
    isLetter: false,
    default: 'Alt',
  },
  OSRight: {
    isLetter: false,
    default: 'Win',
  },
  MetaRight: {
    isLetter: false,
    default: 'Win',
  },
  ArrowLeft: {
    isLetter: false,
    default: '🡄',
  },
  ArrowDown: {
    isLetter: false,
    default: '🡇',
  },
  ArrowRight: {
    isLetter: false,
    default: '🡆',
  },
  ControlRight: {
    isLetter: false,
    default: 'Ctrl',
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);


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

  const description = document.createElement('div');
  description.classList.add('page-description');
  description.innerHTML = `<p>This keyboard was made on Windows system.</p>
    <p>To change keyboard layout press left <span class="kbd">Ctrl</span>+<span class="kbd">Alt</span>.</p>`;

  const keyboardContainer = document.createElement('div');
  keyboardContainer.id = 'keyboard';

  container.append(heading);
  container.append(description);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUHdCO0FBQzZCO0FBQ0E7O0FBRXJEO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQWdCO0FBQ3pDLFFBQVEsa0JBQWtCO0FBQzFCLFNBQVM7QUFDVDtBQUNBLGtCQUFrQixrREFBUTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQyxrREFBUSxHQUFHLGtEQUFRO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksNERBQWlCO0FBQ3JCLG1CQUFtQixvREFBUzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EscURBQXFELEtBQUs7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDZEQUFrQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw0REFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZLGtCQUFrQjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrREFBUTtBQUNsQyxzQkFBc0Isa0RBQVE7QUFDOUI7QUFDQSxRQUFRO0FBQ1Isc0JBQXNCLGtEQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnRUFBcUI7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25COztBQUVBLFdBQVcsZ0VBQXFCO0FBQ2hDO0FBQ0E7QUFDQSxXQUFXLDhEQUFtQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLFlBQVksT0FBTztBQUNuQixXQUFXLDhEQUFtQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDblBqQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOVRmO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7OztVQzlUdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMkI7O0FBRWM7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLGtEQUFRO0FBQy9CO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2NiYjciLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9qcy9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL2pzL2xheW91dHMvZW4uanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9qcy9sYXlvdXRzL3J1LmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBjb25zdCBLRVlfT1JERVIgPSBbXG4gICdCYWNrcXVvdGUnLFxuICAnRGlnaXQxJyxcbiAgJ0RpZ2l0MicsXG4gICdEaWdpdDMnLFxuICAnRGlnaXQ0JyxcbiAgJ0RpZ2l0NScsXG4gICdEaWdpdDYnLFxuICAnRGlnaXQ3JyxcbiAgJ0RpZ2l0OCcsXG4gICdEaWdpdDknLFxuICAnRGlnaXQwJyxcbiAgJ01pbnVzJyxcbiAgJ0VxdWFsJyxcbiAgJ0JhY2tzcGFjZScsXG4gICdUYWInLFxuICAnS2V5UScsXG4gICdLZXlXJyxcbiAgJ0tleUUnLFxuICAnS2V5UicsXG4gICdLZXlUJyxcbiAgJ0tleVknLFxuICAnS2V5VScsXG4gICdLZXlJJyxcbiAgJ0tleU8nLFxuICAnS2V5UCcsXG4gICdCcmFja2V0TGVmdCcsXG4gICdCcmFja2V0UmlnaHQnLFxuICAnQmFja3NsYXNoJyxcbiAgJ0RlbGV0ZScsXG4gICdDYXBzTG9jaycsXG4gICdLZXlBJyxcbiAgJ0tleVMnLFxuICAnS2V5RCcsXG4gICdLZXlGJyxcbiAgJ0tleUcnLFxuICAnS2V5SCcsXG4gICdLZXlKJyxcbiAgJ0tleUsnLFxuICAnS2V5TCcsXG4gICdTZW1pY29sb24nLFxuICAnUXVvdGUnLFxuICAnRW50ZXInLFxuICAnU2hpZnRMZWZ0JyxcbiAgJ0tleVonLFxuICAnS2V5WCcsXG4gICdLZXlDJyxcbiAgJ0tleVYnLFxuICAnS2V5QicsXG4gICdLZXlOJyxcbiAgJ0tleU0nLFxuICAnQ29tbWEnLFxuICAnUGVyaW9kJyxcbiAgJ1NsYXNoJyxcbiAgJ0Fycm93VXAnLFxuICAnU2hpZnRSaWdodCcsXG4gICdDb250cm9sTGVmdCcsXG4gICdNZXRhTGVmdCcsXG4gICdBbHRMZWZ0JyxcbiAgJ1NwYWNlJyxcbiAgJ0FsdFJpZ2h0JyxcbiAgJ01ldGFSaWdodCcsXG4gICdBcnJvd0xlZnQnLFxuICAnQXJyb3dEb3duJyxcbiAgJ0Fycm93UmlnaHQnLFxuICAnQ29udHJvbFJpZ2h0Jyxcbl07XG5cbmV4cG9ydCBjb25zdCBLRVlfU0laRVMgPSB7XG4gIEJhY2txdW90ZTogMixcbiAgRGlnaXQxOiAyLFxuICBEaWdpdDI6IDIsXG4gIERpZ2l0MzogMixcbiAgRGlnaXQ0OiAyLFxuICBEaWdpdDU6IDIsXG4gIERpZ2l0NjogMixcbiAgRGlnaXQ3OiAyLFxuICBEaWdpdDg6IDIsXG4gIERpZ2l0OTogMixcbiAgRGlnaXQwOiAyLFxuICBNaW51czogMixcbiAgRXF1YWw6IDIsXG4gIEJhY2tzcGFjZTogNSxcbiAgVGFiOiAzLFxuICBLZXlROiAyLFxuICBLZXlXOiAyLFxuICBLZXlFOiAyLFxuICBLZXlSOiAyLFxuICBLZXlUOiAyLFxuICBLZXlZOiAyLFxuICBLZXlVOiAyLFxuICBLZXlJOiAyLFxuICBLZXlPOiAyLFxuICBLZXlQOiAyLFxuICBCcmFja2V0TGVmdDogMixcbiAgQnJhY2tldFJpZ2h0OiAyLFxuICBCYWNrc2xhc2g6IDIsXG4gIERlbGV0ZTogMixcbiAgQ2Fwc0xvY2s6IDQsXG4gIEtleUE6IDIsXG4gIEtleVM6IDIsXG4gIEtleUQ6IDIsXG4gIEtleUY6IDIsXG4gIEtleUc6IDIsXG4gIEtleUg6IDIsXG4gIEtleUo6IDIsXG4gIEtleUs6IDIsXG4gIEtleUw6IDIsXG4gIFNlbWljb2xvbjogMixcbiAgUXVvdGU6IDIsXG4gIEVudGVyOiA1LFxuICBTaGlmdExlZnQ6IDUsXG4gIEtleVo6IDIsXG4gIEtleVg6IDIsXG4gIEtleUM6IDIsXG4gIEtleVY6IDIsXG4gIEtleUI6IDIsXG4gIEtleU46IDIsXG4gIEtleU06IDIsXG4gIENvbW1hOiAyLFxuICBQZXJpb2Q6IDIsXG4gIFNsYXNoOiAyLFxuICBBcnJvd1VwOiAyLFxuICBTaGlmdFJpZ2h0OiA0LFxuICBDb250cm9sTGVmdDogMyxcbiAgTWV0YUxlZnQ6IDIsXG4gIEFsdExlZnQ6IDIsXG4gIFNwYWNlOiAxMixcbiAgQWx0UmlnaHQ6IDIsXG4gIE1ldGFSaWdodDogMixcbiAgQXJyb3dMZWZ0OiAyLFxuICBBcnJvd0Rvd246IDIsXG4gIEFycm93UmlnaHQ6IDIsXG4gIENvbnRyb2xSaWdodDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBDT05UUk9MX0tFWVMgPSBbXG4gICdFbnRlcicsXG4gICdCYWNrc3BhY2UnLFxuICAnRGVsZXRlJyxcbiAgJ0VuZCcsXG4gICdIb21lJyxcbiAgJ09TTGVmdCcsXG4gICdPU1JpZ2h0JyxcbiAgJ01ldGFMZWZ0JyxcbiAgJ01ldGFSaWdodCcsXG4gICdDYXBzTG9jaycsXG4gICdDb250cm9sTGVmdCcsXG4gICdDb250cm9sUmlnaHQnLFxuICAnU2hpZnRMZWZ0JyxcbiAgJ1NoaWZ0UmlnaHQnLFxuICAnQWx0TGVmdCcsXG4gICdBbHRSaWdodCcsXG4gICdBcnJvd0xlZnQnLFxuICAnQXJyb3dVcCcsXG4gICdBcnJvd1JpZ2h0JyxcbiAgJ0Fycm93RG93bicsXG4gICdTcGFjZScsXG5dO1xuXG5leHBvcnQgY29uc3QgTU9ESUZJRVJTID0gW1xuICAnU2hpZnRMZWZ0JyxcbiAgJ1NoaWZ0UmlnaHQnLFxuICAnQ29udHJvbExlZnQnLFxuICAnQ29udHJvbFJpZ2h0JyxcbiAgJ0FsdExlZnQnLFxuICAnQWx0UmlnaHQnLFxuICAnT1NMZWZ0JyxcbiAgJ09TUmlnaHQnLFxuICAnTWV0YUxlZnQnLFxuICAnTWV0YVJpZ2h0JyxcbiAgJ0NhcHNMb2NrJyxcbiAgJ0JhY2tzcGFjZScsXG4gICdEZWxldGUnLFxuXTtcblxuZXhwb3J0IGNvbnN0IFZBTElEX0tFWVMgPSBbXG4gICdCYWNrcXVvdGUnLFxuICAnRGlnaXQxJyxcbiAgJ0RpZ2l0MicsXG4gICdEaWdpdDMnLFxuICAnRGlnaXQ0JyxcbiAgJ0RpZ2l0NScsXG4gICdEaWdpdDYnLFxuICAnRGlnaXQ3JyxcbiAgJ0RpZ2l0OCcsXG4gICdEaWdpdDknLFxuICAnRGlnaXQwJyxcbiAgJ01pbnVzJyxcbiAgJ0VxdWFsJyxcbiAgJ0JhY2tzcGFjZScsXG4gICdUYWInLFxuICAnS2V5UScsXG4gICdLZXlXJyxcbiAgJ0tleUUnLFxuICAnS2V5UicsXG4gICdLZXlUJyxcbiAgJ0tleVknLFxuICAnS2V5VScsXG4gICdLZXlJJyxcbiAgJ0tleU8nLFxuICAnS2V5UCcsXG4gICdCcmFja2V0TGVmdCcsXG4gICdCcmFja2V0UmlnaHQnLFxuICAnQmFja3NsYXNoJyxcbiAgJ0RlbGV0ZScsXG4gICdDYXBzTG9jaycsXG4gICdLZXlBJyxcbiAgJ0tleVMnLFxuICAnS2V5RCcsXG4gICdLZXlGJyxcbiAgJ0tleUcnLFxuICAnS2V5SCcsXG4gICdLZXlKJyxcbiAgJ0tleUsnLFxuICAnS2V5TCcsXG4gICdTZW1pY29sb24nLFxuICAnUXVvdGUnLFxuICAnRW50ZXInLFxuICAnU2hpZnRMZWZ0JyxcbiAgJ0tleVonLFxuICAnS2V5WCcsXG4gICdLZXlDJyxcbiAgJ0tleVYnLFxuICAnS2V5QicsXG4gICdLZXlOJyxcbiAgJ0tleU0nLFxuICAnQ29tbWEnLFxuICAnUGVyaW9kJyxcbiAgJ1NsYXNoJyxcbiAgJ0Fycm93VXAnLFxuICAnU2hpZnRSaWdodCcsXG4gICdDb250cm9sTGVmdCcsXG4gICdPU0xlZnQnLFxuICAnTWV0YUxlZnQnLFxuICAnQWx0TGVmdCcsXG4gICdTcGFjZScsXG4gICdBbHRSaWdodCcsXG4gICdPU1JpZ2h0JyxcbiAgJ01ldGFSaWdodCcsXG4gICdBcnJvd0xlZnQnLFxuICAnQXJyb3dEb3duJyxcbiAgJ0Fycm93UmlnaHQnLFxuICAnQ29udHJvbFJpZ2h0Jyxcbl07XG4iLCJpbXBvcnQge1xuICBLRVlfT1JERVIsIEtFWV9TSVpFUywgQ09OVFJPTF9LRVlTLCBNT0RJRklFUlMsIFZBTElEX0tFWVMsXG59IGZyb20gJy4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGxheW91dCBhcyBlbkxheW91dCB9IGZyb20gJy4vbGF5b3V0cy9lbi5qcyc7XG5pbXBvcnQgeyBsYXlvdXQgYXMgcnVMYXlvdXQgfSBmcm9tICcuL2xheW91dHMvcnUuanMnO1xuXG5jb25zdCBDQVBTX0NPREUgPSAnQ2Fwc0xvY2snO1xuY29uc3QgTEFZT1VUX0NIQU5HRV9TSE9SVENVVCA9IFsnQ29udHJvbExlZnQnLCAnQWx0TGVmdCddO1xuXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQge1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmtleWJvYXJkID0gbmF2aWdhdG9yLmtleWJvYXJkO1xuICAgIHRoaXMua2V5Ym9hcmRTdGF0ZSA9IEtFWV9PUkRFUi5yZWR1Y2UoKG9iaiwgY3VycikgPT4gKFxuICAgICAgeyAuLi5vYmosIFtjdXJyXTogeyBwcmVzc2VkOiBmYWxzZSB9IH1cbiAgICApLCB7fSk7XG4gICAgdGhpcy5jdXJzb3JQb3MgPSAwO1xuICAgIHRoaXMubGF5b3V0ID0gZW5MYXlvdXQ7XG4gICAgdGhpcy5tb3VzZUtleSA9IG51bGw7XG4gICAgdGhpcy5pc0NhcHMgPSBmYWxzZTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgICB0aGlzLmJ1aWxkTWFya3VwKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbGF5b3V0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tiTGF5b3V0JykgfHwgJ2VuJztcblxuICAgIHRoaXMubGF5b3V0ID0gKGxheW91dCA9PT0gJ2VuJykgPyBlbkxheW91dCA6IHJ1TGF5b3V0O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdrYkxheW91dCcsIGxheW91dCk7XG4gIH1cblxuICBidWlsZE1hcmt1cCgpIHtcbiAgICB0aGlzLmtleUVsZW1lbnRzID0ge307XG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQnKTtcblxuICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkX19vdXRwdXQnKTtcbiAgICB0aGlzLm91dHB1dCA9IG91dHB1dDtcblxuICAgIGNvbnN0IGtleUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGtleUxpc3QuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2xpc3QnKTtcblxuICAgIEtFWV9PUkRFUi5mb3JFYWNoKChrZXlDb2RlKSA9PiB7XG4gICAgICBjb25zdCBzaXplID0gS0VZX1NJWkVTW2tleUNvZGVdO1xuXG4gICAgICBjb25zdCBrZXlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBrZXlFbC5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZF9faXRlbScpO1xuICAgICAgaWYgKHNpemUgPiAyKSB7XG4gICAgICAgIGtleUVsLmNsYXNzTGlzdC5hZGQoYGtleWJvYXJkX19pdGVtLS1zaXplLS0ke3NpemV9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgIGJ0bi5kYXRhc2V0LmNvZGUgPSBrZXlDb2RlO1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkX19idG4nKTtcbiAgICAgIGJ0bi50ZXh0Q29udGVudCA9IHRoaXMubGF5b3V0W2tleUNvZGVdLmRlZmF1bHQ7XG5cbiAgICAgIGtleUVsLmFwcGVuZChidG4pO1xuICAgICAga2V5TGlzdC5hcHBlbmQoa2V5RWwpO1xuXG4gICAgICB0aGlzLmtleUVsZW1lbnRzW2tleUNvZGVdID0gYnRuO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKG91dHB1dCk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGtleUxpc3QpO1xuICAgIG91dHB1dC5mb2N1cygpO1xuICB9XG5cbiAgZ2V0S2V5TmFtZShrZXlDb2RlKSB7XG4gICAgY29uc3QgaXNTaGlmdCA9IHRoaXMua2V5Ym9hcmRTdGF0ZS5TaGlmdExlZnQucHJlc3NlZCB8fCB0aGlzLmtleWJvYXJkU3RhdGUuU2hpZnRSaWdodC5wcmVzc2VkO1xuXG4gICAgaWYgKCF0aGlzLmxheW91dFtrZXlDb2RlXS5pc0xldHRlcikge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmxheW91dFtrZXlDb2RlXVtpc1NoaWZ0ID8gJ2FsdCcgOiAnZGVmYXVsdCddO1xuICAgICAgcmV0dXJuIHZhbHVlIHx8IHRoaXMubGF5b3V0W2tleUNvZGVdLmRlZmF1bHQ7XG4gICAgfVxuICAgIGNvbnN0IGlzQWx0ID0gKHRoaXMuaXNDYXBzICYmICFpc1NoaWZ0KSB8fCAoIXRoaXMuaXNDYXBzICYmIGlzU2hpZnQpO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5sYXlvdXRba2V5Q29kZV1baXNBbHQgPyAnYWx0JyA6ICdkZWZhdWx0J107XG4gICAgcmV0dXJuIHZhbHVlIHx8IHRoaXMubGF5b3V0W2tleUNvZGVdLmRlZmF1bHQ7XG4gIH1cblxuICBnZXRLZXlWYWx1ZShrZXlDb2RlKSB7XG4gICAgaWYgKE1PRElGSUVSUy5pbmNsdWRlcyhrZXlDb2RlKSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGxldCB2YWx1ZTtcbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgIHZhbHVlID0gJ1xcdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICB2YWx1ZSA9ICcgJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIHZhbHVlID0gJ1xcbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFsdWUgPSB0aGlzLmdldEtleU5hbWUoa2V5Q29kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBLRVlfT1JERVIuZm9yRWFjaCgoa2V5Q29kZSkgPT4ge1xuICAgICAgY29uc3QgaXNQcmVzc2VkID0gdGhpcy5rZXlib2FyZFN0YXRlW2tleUNvZGVdLnByZXNzZWQ7XG4gICAgICB0aGlzLmtleUVsZW1lbnRzW2tleUNvZGVdLmNsYXNzTGlzdFtpc1ByZXNzZWQgPyAnYWRkJyA6ICdyZW1vdmUnXSgna2V5Ym9hcmRfX2J0bi0tYWN0aXZlJyk7XG4gICAgICB0aGlzLmtleUVsZW1lbnRzW2tleUNvZGVdLnRleHRDb250ZW50ID0gdGhpcy5nZXRLZXlOYW1lKGtleUNvZGUpO1xuICAgIH0pO1xuICAgIHRoaXMua2V5RWxlbWVudHNbQ0FQU19DT0RFXS5jbGFzc0xpc3RbdGhpcy5pc0NhcHMgPyAnYWRkJyA6ICdyZW1vdmUnXSgna2V5Ym9hcmRfX2J0bi0tYWN0aXZlJyk7XG4gIH1cblxuICBoYW5kbGVLZXlEb3duRXZlbnQoZSkge1xuICAgIHRoaXMub3V0cHV0LmZvY3VzKCk7XG5cbiAgICBjb25zdCB7IGNvZGUsIGlzVHJ1c3RlZCB9ID0gZTtcblxuICAgIGlmIChjb2RlID09PSBDQVBTX0NPREUpIHtcbiAgICAgIHRoaXMuaXNDYXBzID0gIXRoaXMuaXNDYXBzO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gJ1RhYicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgLy8gQ2hhbmdlIGxheW91dFxuICAgIGlmIChMQVlPVVRfQ0hBTkdFX1NIT1JUQ1VULmV2ZXJ5KChrZXkpID0+IHRoaXMua2V5Ym9hcmRTdGF0ZVtrZXldLnByZXNzZWQpKSB7XG4gICAgICBpZiAodGhpcy5sYXlvdXQgPT09IGVuTGF5b3V0KSB7XG4gICAgICAgIHRoaXMubGF5b3V0ID0gcnVMYXlvdXQ7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdrYkxheW91dCcsICdydScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXlvdXQgPSBlbkxheW91dDtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2tiTGF5b3V0JywgJ2VuJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc1RydXN0ZWQgJiYgQ09OVFJPTF9LRVlTLmluY2x1ZGVzKGNvZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHRleHRTdGFydCA9IHRoaXMuY3Vyc29yUG9zO1xuICAgIGxldCB0ZXh0RW5kID0gdGhpcy5jdXJzb3JQb3M7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgICB0ZXh0U3RhcnQgLT0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdEZWxldGUnOlxuICAgICAgICB0ZXh0RW5kICs9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJzb3JQb3MgPSB0aGlzLm91dHB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgdGhpcy5vdXRwdXQuc2V0UmFuZ2VUZXh0KFxuICAgICAgdGhpcy5nZXRLZXlWYWx1ZShlLmNvZGUpLFxuICAgICAgdGV4dFN0YXJ0LFxuICAgICAgdGV4dEVuZCxcbiAgICAgICdlbmQnLFxuICAgICk7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIC8vIE1vdXNlIGV2ZW50c1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICBjb25zdCB7IGNvZGUgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHRoaXMuY3Vyc29yUG9zID0gdGhpcy5vdXRwdXQuc2VsZWN0aW9uRW5kO1xuXG4gICAgICBjb25zdCBrZXlib2FyZEV2ZW50ID0gbmV3IEtleWJvYXJkRXZlbnQoJ2tleWRvd24nLCB7XG4gICAgICAgIGtleTogdGhpcy5nZXRLZXlOYW1lKGNvZGUpLFxuICAgICAgICBjb2RlLFxuICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChrZXlib2FyZEV2ZW50KTtcbiAgICAgIHRoaXMubW91c2VLZXkgPSBjb2RlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5tb3VzZUtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleWJvYXJkRXZlbnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5dXAnLCB7XG4gICAgICAgIGtleTogdGhpcy5nZXRLZXlOYW1lKHRoaXMubW91c2VLZXkpLFxuICAgICAgICBjb2RlOiB0aGlzLm1vdXNlS2V5LFxuICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChrZXlib2FyZEV2ZW50KTtcbiAgICAgIHRoaXMubW91c2VLZXkgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgLy8gS2V5Ym9hcmQgZXZlbnRzXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgbGV0IHsgY29kZSB9ID0gZTtcbiAgICAgIHRoaXMuY3Vyc29yUG9zID0gdGhpcy5vdXRwdXQuc2VsZWN0aW9uRW5kO1xuXG4gICAgICBpZiAoIUNPTlRST0xfS0VZUy5pbmNsdWRlcyhjb2RlKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoIVZBTElEX0tFWVMuaW5jbHVkZXMoY29kZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gRmlyZWZveCBNZXRhIGtleSBmaXhcbiAgICAgIGlmIChjb2RlID09PSAnT1NMZWZ0Jykge1xuICAgICAgICBjb2RlID0gJ01ldGFMZWZ0JztcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlID09PSAnT1NSaWdodCcpIHtcbiAgICAgICAgY29kZSA9ICdNZXRhUmlnaHQnO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmtleWJvYXJkU3RhdGVbY29kZV0ucHJlc3NlZCA9IHRydWU7XG4gICAgICB0aGlzLmhhbmRsZUtleURvd25FdmVudChlKTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgbGV0IHsgY29kZSB9ID0gZTtcbiAgICAgIGlmICghVkFMSURfS0VZUy5pbmNsdWRlcyhjb2RlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBGaXJlZm94IE1ldGEga2V5IGZpeFxuICAgICAgaWYgKGNvZGUgPT09ICdPU0xlZnQnKSB7XG4gICAgICAgIGNvZGUgPSAnTWV0YUxlZnQnO1xuICAgICAgfVxuICAgICAgaWYgKGNvZGUgPT09ICdPU1JpZ2h0Jykge1xuICAgICAgICBjb2RlID0gJ01ldGFSaWdodCc7XG4gICAgICB9XG4gICAgICB0aGlzLmtleWJvYXJkU3RhdGVbY29kZV0ucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZDtcbiIsImV4cG9ydCBjb25zdCBsYXlvdXQgPSB7XG4gIEJhY2txdW90ZToge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnYCcsXG4gICAgYWx0OiAnficsXG4gIH0sXG4gIERpZ2l0MToge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnMScsXG4gICAgYWx0OiAnIScsXG4gIH0sXG4gIERpZ2l0Mjoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnMicsXG4gICAgYWx0OiAnQCcsXG4gIH0sXG4gIERpZ2l0Mzoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnMycsXG4gICAgYWx0OiAnIycsXG4gIH0sXG4gIERpZ2l0NDoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnNCcsXG4gICAgYWx0OiAnJCcsXG4gIH0sXG4gIERpZ2l0NToge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnNScsXG4gICAgYWx0OiAnJScsXG4gIH0sXG4gIERpZ2l0Njoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnNicsXG4gICAgYWx0OiAnXicsXG4gIH0sXG4gIERpZ2l0Nzoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnNycsXG4gICAgYWx0OiAnJicsXG4gIH0sXG4gIERpZ2l0ODoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnOCcsXG4gICAgYWx0OiAnKicsXG4gIH0sXG4gIERpZ2l0OToge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnOScsXG4gICAgYWx0OiAnKCcsXG4gIH0sXG4gIERpZ2l0MDoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnMCcsXG4gICAgYWx0OiAnKScsXG4gIH0sXG4gIE1pbnVzOiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICctJyxcbiAgICBhbHQ6ICdfJyxcbiAgfSxcbiAgRXF1YWw6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJz0nLFxuICAgIGFsdDogJysnLFxuICB9LFxuICBCYWNrc3BhY2U6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ0JhY2tzcGFjZScsXG4gIH0sXG4gIFRhYjoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnVGFiJyxcbiAgfSxcbiAgS2V5UToge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICdxJyxcbiAgICBhbHQ6ICdRJyxcbiAgfSxcbiAgS2V5Vzoge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICd3JyxcbiAgICBhbHQ6ICdXJyxcbiAgfSxcbiAgS2V5RToge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICdlJyxcbiAgICBhbHQ6ICdFJyxcbiAgfSxcbiAgS2V5Ujoge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICdyJyxcbiAgICBhbHQ6ICdSJyxcbiAgfSxcbiAgS2V5VDoge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICd0JyxcbiAgICBhbHQ6ICdUJyxcbiAgfSxcbiAgS2V5WToge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICd5JyxcbiAgICBhbHQ6ICdZJyxcbiAgfSxcbiAgS2V5VToge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICd1JyxcbiAgICBhbHQ6ICdVJyxcbiAgfSxcbiAgS2V5SToge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICdpJyxcbiAgICBhbHQ6ICdJJyxcbiAgfSxcbiAgS2V5Tzoge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICdvJyxcbiAgICBhbHQ6ICdPJyxcbiAgfSxcbiAgS2V5UDoge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICdwJyxcbiAgICBhbHQ6ICdQJyxcbiAgfSxcbiAgQnJhY2tldExlZnQ6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ1snLFxuICAgIGFsdDogJ3snLFxuICB9LFxuICBCcmFja2V0UmlnaHQ6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ10nLFxuICAgIGFsdDogJ30nLFxuICB9LFxuICBCYWNrc2xhc2g6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ1xcXFwnLFxuICAgIGFsdDogJ3wnLFxuICB9LFxuICBEZWxldGU6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ0RlbCcsXG4gIH0sXG4gIENhcHNMb2NrOiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdDYXBzTG9jaycsXG4gIH0sXG4gIEtleUE6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAnYScsXG4gICAgYWx0OiAnQScsXG4gIH0sXG4gIEtleVM6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAncycsXG4gICAgYWx0OiAnUycsXG4gIH0sXG4gIEtleUQ6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAnZCcsXG4gICAgYWx0OiAnRCcsXG4gIH0sXG4gIEtleUY6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAnZicsXG4gICAgYWx0OiAnRicsXG4gIH0sXG4gIEtleUc6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAnZycsXG4gICAgYWx0OiAnRycsXG4gIH0sXG4gIEtleUg6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAnaCcsXG4gICAgYWx0OiAnSCcsXG4gIH0sXG4gIEtleUo6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAnaicsXG4gICAgYWx0OiAnSicsXG4gIH0sXG4gIEtleUs6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAnaycsXG4gICAgYWx0OiAnSycsXG4gIH0sXG4gIEtleUw6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAnbCcsXG4gICAgYWx0OiAnTCcsXG4gIH0sXG4gIFNlbWljb2xvbjoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnOycsXG4gICAgYWx0OiAnOicsXG4gIH0sXG4gIFF1b3RlOiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdcXCcnLFxuICAgIGFsdDogJ1wiJyxcbiAgfSxcbiAgRW50ZXI6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ0VudGVyJyxcbiAgfSxcbiAgU2hpZnRMZWZ0OiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdTaGlmdCcsXG4gIH0sXG4gIEtleVo6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAneicsXG4gICAgYWx0OiAnWicsXG4gIH0sXG4gIEtleVg6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAneCcsXG4gICAgYWx0OiAnWCcsXG4gIH0sXG4gIEtleUM6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAnYycsXG4gICAgYWx0OiAnQycsXG4gIH0sXG4gIEtleVY6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAndicsXG4gICAgYWx0OiAnVicsXG4gIH0sXG4gIEtleUI6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAnYicsXG4gICAgYWx0OiAnQicsXG4gIH0sXG4gIEtleU46IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAnbicsXG4gICAgYWx0OiAnTicsXG4gIH0sXG4gIEtleU06IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAnbScsXG4gICAgYWx0OiAnTScsXG4gIH0sXG4gIENvbW1hOiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICcsJyxcbiAgICBhbHQ6ICc8JyxcbiAgfSxcbiAgUGVyaW9kOiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICcuJyxcbiAgICBhbHQ6ICc+JyxcbiAgfSxcbiAgU2xhc2g6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJy8nLFxuICAgIGFsdDogJz8nLFxuICB9LFxuICBBcnJvd1VwOiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICfwn6GFJyxcbiAgfSxcbiAgU2hpZnRSaWdodDoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnU2hpZnQnLFxuICB9LFxuICBDb250cm9sTGVmdDoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnQ3RybCcsXG4gIH0sXG4gIE9TTGVmdDoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnV2luJyxcbiAgfSxcbiAgTWV0YUxlZnQ6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ1dpbicsXG4gIH0sXG4gIEFsdExlZnQ6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ0FsdCcsXG4gIH0sXG4gIFNwYWNlOiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdTcGFjZScsXG4gIH0sXG4gIEFsdFJpZ2h0OiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdBbHQnLFxuICB9LFxuICBPU1JpZ2h0OiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdXaW4nLFxuICB9LFxuICBNZXRhUmlnaHQ6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ1dpbicsXG4gIH0sXG4gIEFycm93TGVmdDoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAn8J+hhCcsXG4gIH0sXG4gIEFycm93RG93bjoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAn8J+hhycsXG4gIH0sXG4gIEFycm93UmlnaHQ6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ/CfoYYnLFxuICB9LFxuICBDb250cm9sUmlnaHQ6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ0N0cmwnLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0O1xuIiwiZXhwb3J0IGNvbnN0IGxheW91dCA9IHtcbiAgQmFja3F1b3RlOiB7XG4gICAgaXNMZXR0ZXI6IHRydWUsXG4gICAgZGVmYXVsdDogJ9GRJyxcbiAgICBhbHQ6ICfQgScsXG4gIH0sXG4gIERpZ2l0MToge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnMScsXG4gICAgYWx0OiAnIScsXG4gIH0sXG4gIERpZ2l0Mjoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnMicsXG4gICAgYWx0OiAnXCInLFxuICB9LFxuICBEaWdpdDM6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJzMnLFxuICAgIGFsdDogJ+KElicsXG4gIH0sXG4gIERpZ2l0NDoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnNCcsXG4gICAgYWx0OiAnOycsXG4gIH0sXG4gIERpZ2l0NToge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnNScsXG4gICAgYWx0OiAnJScsXG4gIH0sXG4gIERpZ2l0Njoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnNicsXG4gICAgYWx0OiAnOicsXG4gIH0sXG4gIERpZ2l0Nzoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnNycsXG4gICAgYWx0OiAnPycsXG4gIH0sXG4gIERpZ2l0ODoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnOCcsXG4gICAgYWx0OiAnKicsXG4gIH0sXG4gIERpZ2l0OToge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnOScsXG4gICAgYWx0OiAnKCcsXG4gIH0sXG4gIERpZ2l0MDoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnMCcsXG4gICAgYWx0OiAnKScsXG4gIH0sXG4gIE1pbnVzOiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICctJyxcbiAgICBhbHQ6ICdfJyxcbiAgfSxcbiAgRXF1YWw6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJz0nLFxuICAgIGFsdDogJysnLFxuICB9LFxuICBCYWNrc3BhY2U6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ0JhY2tzcGFjZScsXG4gIH0sXG4gIFRhYjoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnVGFiJyxcbiAgfSxcbiAgS2V5UToge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICfQuScsXG4gICAgYWx0OiAn0JknLFxuICB9LFxuICBLZXlXOiB7XG4gICAgaXNMZXR0ZXI6IHRydWUsXG4gICAgZGVmYXVsdDogJ9GGJyxcbiAgICBhbHQ6ICfQpicsXG4gIH0sXG4gIEtleUU6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAn0YMnLFxuICAgIGFsdDogJ9CjJyxcbiAgfSxcbiAgS2V5Ujoge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICfQuicsXG4gICAgYWx0OiAn0JonLFxuICB9LFxuICBLZXlUOiB7XG4gICAgaXNMZXR0ZXI6IHRydWUsXG4gICAgZGVmYXVsdDogJ9C1JyxcbiAgICBhbHQ6ICfQlScsXG4gIH0sXG4gIEtleVk6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAn0L0nLFxuICAgIGFsdDogJ9CdJyxcbiAgfSxcbiAgS2V5VToge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICfQsycsXG4gICAgYWx0OiAn0JMnLFxuICB9LFxuICBLZXlJOiB7XG4gICAgaXNMZXR0ZXI6IHRydWUsXG4gICAgZGVmYXVsdDogJ9GIJyxcbiAgICBhbHQ6ICfQqCcsXG4gIH0sXG4gIEtleU86IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAn0YknLFxuICAgIGFsdDogJ9CpJyxcbiAgfSxcbiAgS2V5UDoge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICfQtycsXG4gICAgYWx0OiAn0JcnLFxuICB9LFxuICBCcmFja2V0TGVmdDoge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICfRhScsXG4gICAgYWx0OiAn0KUnLFxuICB9LFxuICBCcmFja2V0UmlnaHQ6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAn0YonLFxuICAgIGFsdDogJ9CqJyxcbiAgfSxcbiAgQmFja3NsYXNoOiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdcXFxcJyxcbiAgICBhbHQ6ICcvJyxcbiAgfSxcbiAgRGVsZXRlOiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdEZWwnLFxuICB9LFxuICBDYXBzTG9jazoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnQ2Fwc0xvY2snLFxuICB9LFxuICBLZXlBOiB7XG4gICAgaXNMZXR0ZXI6IHRydWUsXG4gICAgZGVmYXVsdDogJ9GEJyxcbiAgICBhbHQ6ICfQpCcsXG4gIH0sXG4gIEtleVM6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAn0YsnLFxuICAgIGFsdDogJ9CrJyxcbiAgfSxcbiAgS2V5RDoge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICfQsicsXG4gICAgYWx0OiAn0JInLFxuICB9LFxuICBLZXlGOiB7XG4gICAgaXNMZXR0ZXI6IHRydWUsXG4gICAgZGVmYXVsdDogJ9CwJyxcbiAgICBhbHQ6ICfQkCcsXG4gIH0sXG4gIEtleUc6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAn0L8nLFxuICAgIGFsdDogJ9CfJyxcbiAgfSxcbiAgS2V5SDoge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICfRgCcsXG4gICAgYWx0OiAn0KAnLFxuICB9LFxuICBLZXlKOiB7XG4gICAgaXNMZXR0ZXI6IHRydWUsXG4gICAgZGVmYXVsdDogJ9C+JyxcbiAgICBhbHQ6ICfQnicsXG4gIH0sXG4gIEtleUs6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAn0LsnLFxuICAgIGFsdDogJ9CbJyxcbiAgfSxcbiAgS2V5TDoge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICfQtCcsXG4gICAgYWx0OiAn0JQnLFxuICB9LFxuICBTZW1pY29sb246IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAn0LYnLFxuICAgIGFsdDogJ9CWJyxcbiAgfSxcbiAgUXVvdGU6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAn0Y0nLFxuICAgIGFsdDogJ9CtJyxcbiAgfSxcbiAgRW50ZXI6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ0VudGVyJyxcbiAgfSxcbiAgU2hpZnRMZWZ0OiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdTaGlmdCcsXG4gIH0sXG4gIEtleVo6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAn0Y8nLFxuICAgIGFsdDogJ9CvJyxcbiAgfSxcbiAgS2V5WDoge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICfRhycsXG4gICAgYWx0OiAn0KcnLFxuICB9LFxuICBLZXlDOiB7XG4gICAgaXNMZXR0ZXI6IHRydWUsXG4gICAgZGVmYXVsdDogJ9GBJyxcbiAgICBhbHQ6ICfQoScsXG4gIH0sXG4gIEtleVY6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAn0LwnLFxuICAgIGFsdDogJ9CcJyxcbiAgfSxcbiAgS2V5Qjoge1xuICAgIGlzTGV0dGVyOiB0cnVlLFxuICAgIGRlZmF1bHQ6ICfQuCcsXG4gICAgYWx0OiAn0JgnLFxuICB9LFxuICBLZXlOOiB7XG4gICAgaXNMZXR0ZXI6IHRydWUsXG4gICAgZGVmYXVsdDogJ9GCJyxcbiAgICBhbHQ6ICfQoicsXG4gIH0sXG4gIEtleU06IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAn0YwnLFxuICAgIGFsdDogJ9CsJyxcbiAgfSxcbiAgQ29tbWE6IHtcbiAgICBpc0xldHRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0OiAn0LEnLFxuICAgIGFsdDogJ9CRJyxcbiAgfSxcbiAgUGVyaW9kOiB7XG4gICAgaXNMZXR0ZXI6IHRydWUsXG4gICAgZGVmYXVsdDogJ9GOJyxcbiAgICBhbHQ6ICfQricsXG4gIH0sXG4gIFNsYXNoOiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICcuJyxcbiAgICBhbHQ6ICcsJyxcbiAgfSxcbiAgQXJyb3dVcDoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAn8J+hhScsXG4gIH0sXG4gIFNoaWZ0UmlnaHQ6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ1NoaWZ0JyxcbiAgfSxcbiAgQ29udHJvbExlZnQ6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ0N0cmwnLFxuICB9LFxuICBPU0xlZnQ6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ1dpbicsXG4gIH0sXG4gIE1ldGFMZWZ0OiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdXaW4nLFxuICB9LFxuICBBbHRMZWZ0OiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdBbHQnLFxuICB9LFxuICBTcGFjZToge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnU3BhY2UnLFxuICB9LFxuICBBbHRSaWdodDoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnQWx0JyxcbiAgfSxcbiAgT1NSaWdodDoge1xuICAgIGlzTGV0dGVyOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnV2luJyxcbiAgfSxcbiAgTWV0YVJpZ2h0OiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdXaW4nLFxuICB9LFxuICBBcnJvd0xlZnQ6IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ/CfoYQnLFxuICB9LFxuICBBcnJvd0Rvd246IHtcbiAgICBpc0xldHRlcjogZmFsc2UsXG4gICAgZGVmYXVsdDogJ/CfoYcnLFxuICB9LFxuICBBcnJvd1JpZ2h0OiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICfwn6GGJyxcbiAgfSxcbiAgQ29udHJvbFJpZ2h0OiB7XG4gICAgaXNMZXR0ZXI6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdDdHJsJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxheW91dDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XG5cbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9rZXlib2FyZC5qcyc7XG5cbmZ1bmN0aW9uIGJ1aWxkQmFzZU1hcmt1cCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1tYWluJyk7XG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZScpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1JTUyBWaXJ0dWFsIEtleWJvYXJkJztcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdwYWdlLWRlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGA8cD5UaGlzIGtleWJvYXJkIHdhcyBtYWRlIG9uIFdpbmRvd3Mgc3lzdGVtLjwvcD5cbiAgICA8cD5UbyBjaGFuZ2Uga2V5Ym9hcmQgbGF5b3V0IHByZXNzIGxlZnQgPHNwYW4gY2xhc3M9XCJrYmRcIj5DdHJsPC9zcGFuPis8c3BhbiBjbGFzcz1cImtiZFwiPkFsdDwvc3Bhbj4uPC9wPmA7XG5cbiAgY29uc3Qga2V5Ym9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAga2V5Ym9hcmRDb250YWluZXIuaWQgPSAna2V5Ym9hcmQnO1xuXG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGluZyk7XG4gIGNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb24pO1xuICBjb250YWluZXIuYXBwZW5kKGtleWJvYXJkQ29udGFpbmVyKTtcbiAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGtleWJvYXJkQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBrZXlib2FyZENvbnRhaW5lciA9IGJ1aWxkQmFzZU1hcmt1cCgpO1xuXG4gIGNvbnN0IGtleWJvYXJkID0gbmV3IEtleWJvYXJkKGtleWJvYXJkQ29udGFpbmVyKTtcbiAga2V5Ym9hcmQuaW5pdCgpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=