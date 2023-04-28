import { keyOrder, keySizes, validKeys } from './constants.js';
import { enLayout } from './layouts/en.js';

export class Keyboard {
  constructor(container) {
    this.container = container;
    this.keyboard = navigator.keyboard;
    this.cursorPos = 0;
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
      btn.textContent = enLayout[keyCode];

      keyEl.append(btn);
      keyList.append(keyEl);

      this.keyElements[keyCode] = btn;
    });

    this.container.append(output);
    this.container.append(keyList);
    output.focus();
  }

  handleKeyEvent(e) {
    this.keyElements[e.code].classList.add('keyboard__btn--active');

    if (validKeys.includes(e.code)) {
      return;
    }

    this.cursorPos = this.output.selectionEnd;
    this.output.setRangeText(
      e.key,
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
      e.target.classList.add('keyboard__btn--active');

      this.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
        this.output.focus();

        const keyboardEvent = new KeyboardEvent('keydown', {
          key: keyboardLayoutMap.get(code),
          code,
        });

        this.handleKeyEvent(keyboardEvent);
      });
    });

    this.container.addEventListener('mouseup', () => {
      keyOrder.forEach((keyCode) => this.keyElements[keyCode].classList.remove('keyboard__btn--active'));
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

      this.handleKeyEvent(e);
    });

    window.addEventListener('keyup', (e) => {
      if (!keyOrder.includes(e.code)) {
        return;
      }
      this.keyElements[e.code].classList.remove('keyboard__btn--active');
    });
  }
}

export default Keyboard;
