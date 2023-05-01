import {
  keyOrder, keySizes, validKeys, modifiers,
} from './constants.js';
import { layout as enLayout } from './layouts/en.js';
import { layout as ruLayout } from './layouts/ru.js';

const CAPS_CODE = 'CapsLock';
const LAYOUT_CHANGE_SHORTCUT = ['ControlLeft', 'AltLeft'];

export class Keyboard {
  constructor(container) {
    this.container = container;
    this.keyboard = navigator.keyboard;
    this.keyboardState = keyOrder.reduce((obj, curr) => (
      { ...obj, [curr]: { pressed: false } }
    ), {});
    this.cursorPos = 0;
    this.layout = enLayout;
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

    this.layout = (layout === 'en') ? enLayout : ruLayout;
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

    keyOrder.forEach((keyCode) => {
      const size = keySizes[keyCode];

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
    if (modifiers.includes(keyCode)) {
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
    keyOrder.forEach((keyCode) => {
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
      if (this.layout === enLayout) {
        this.layout = ruLayout;
        localStorage.setItem('kbLayout', 'ru');
      } else {
        this.layout = enLayout;
        localStorage.setItem('kbLayout', 'en');
      }
    }
    if (isTrusted && validKeys.includes(code)) {
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
      this.cursorPos = this.output.selectionEnd;

      if (!validKeys.includes(e.code)) {
        e.preventDefault();
      }
      if (!keyOrder.includes(e.code)) {
        return;
      }

      this.keyboardState[e.code].pressed = true;
      this.handleKeyDownEvent(e);
      this.update();
    });

    window.addEventListener('keyup', (e) => {
      if (!keyOrder.includes(e.code)) {
        return;
      }
      this.keyboardState[e.code].pressed = false;
      this.update();
    });
  }
}

export default Keyboard;
