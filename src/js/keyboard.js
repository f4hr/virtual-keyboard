import {
  keyOrder, keySizes, wordKeys, validKeys,
} from './constants.js';
import { enLayout } from './layouts/en.js';

const CAPS_CODE = 'CapsLock';

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
    this.buildMarkup();
    this.bindEvents();
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

  getKeyValue(keyCode) {
    const isShift = this.keyboardState.ShiftLeft.pressed || this.keyboardState.ShiftRight.pressed;

    if (!wordKeys.includes(keyCode)) {
      const value = this.layout[keyCode][isShift ? 'alt' : 'default'];
      return value || this.layout[keyCode].default;
    }
    const isAlt = (this.isCaps && !isShift) || (!this.isCaps && isShift);
    const value = this.layout[keyCode][isAlt ? 'alt' : 'default'];
    return value || this.layout[keyCode].default;
  }

  update() {
    keyOrder.forEach((keyCode) => {
      const isPressed = this.keyboardState[keyCode].pressed;
      this.keyElements[keyCode].classList[isPressed ? 'add' : 'remove']('keyboard__btn--active');
      this.keyElements[keyCode].textContent = this.getKeyValue(keyCode);
    });
    this.keyElements[CAPS_CODE].classList[this.isCaps ? 'add' : 'remove']('keyboard__btn--active');
  }

  handleKeyDownEvent(e) {
    if (e.code === CAPS_CODE) {
      this.isCaps = !this.isCaps;
    }
    if (validKeys.includes(e.code)) {
      return;
    }

    this.cursorPos = this.output.selectionEnd;
    this.output.setRangeText(
      this.getKeyValue(e.code),
      this.cursorPos,
      this.cursorPos,
      'end',
    );
  }

  bindEvents() {
    // Mouse events
    this.container.addEventListener('mousedown', (e) => {
      this.cursorPos = this.output.selectionEnd;

      const { code } = e.target.dataset;
      if (!code) {
        return;
      }

      e.preventDefault();

      this.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
        this.output.focus();

        const keyboardEvent = new KeyboardEvent('keydown', {
          key: keyboardLayoutMap.get(code),
          code,
        });

        this.keyboardState[code].pressed = true;
        this.mouseKey = code;
        this.handleKeyDownEvent(keyboardEvent);
        this.update();
      });
    });

    this.container.addEventListener('mouseup', () => {
      if (!this.mouseKey) {
        return;
      }
      this.keyboardState[this.mouseKey].pressed = false;
      this.mouseKey = null;
      this.update();
    });

    // Keyboard events
    window.addEventListener('keydown', (e) => {
      this.output.focus();
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
