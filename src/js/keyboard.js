const keyOrder = [
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
  'AltLelt',
  'Space',
  'AltRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'ControlRight',
];

const enKeyLayout = {
  Backquote: '~',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'Q',
  KeyW: 'W',
  KeyE: 'E',
  KeyR: 'R',
  KeyT: 'T',
  KeyY: 'Y',
  KeyU: 'U',
  KeyI: 'I',
  KeyO: 'O',
  KeyP: 'P',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  CapsLock: 'CapsLock',
  KeyA: 'A',
  KeyS: 'S',
  KeyD: 'D',
  KeyF: 'F',
  KeyG: 'G',
  KeyH: 'H',
  KeyJ: 'J',
  KeyK: 'K',
  KeyL: 'L',
  Semicolon: ';',
  Quote: '\'',
  Enter: 'Enter',
  ShiftLeft: 'Shift',
  KeyZ: 'Z',
  KeyX: 'X',
  KeyC: 'C',
  KeyV: 'V',
  KeyB: 'B',
  KeyN: 'N',
  KeyM: 'M',
  Comma: ',',
  Period: '.',
  Slash: '/',
  ArrowUp: '🡅',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  OSLeft: 'Win',
  AltLelt: 'Alt',
  Space: 'Space',
  AltRight: 'Alt',
  ArrowLeft: '🡄',
  ArrowDown: '🡇',
  ArrowRight: '🡆',
  ControlRight: 'Ctrl',
};

const keySizes = {
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
  Backspace: 4,
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
  Backslash: 3,
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
  Enter: 4,
  ShiftLeft: 4,
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
  OSLeft: 2,
  AltLelt: 2,
  Space: 13,
  AltRight: 2,
  ArrowLeft: 2,
  ArrowDown: 2,
  ArrowRight: 2,
  ControlRight: 2,
};

export class Keyboard {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.buildMarkup();
    this.bindEvents();
  }

  buildMarkup() {
    this.keyElements = {};
    this.container.classList.add('keyboard');

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
      btn.textContent = enKeyLayout[keyCode];

      keyEl.append(btn);
      keyList.append(keyEl);

      this.keyElements[keyCode] = btn;
    });

    this.container.append(keyList);
  }

  bindEvents() {
    this.container.addEventListener('mousedown', (e) => {
      if (e.target.dataset.code) {
        e.target.classList.add('keyboard__btn--active');
      }
    });

    this.container.addEventListener('mouseup', () => {
      keyOrder.forEach((keyCode) => this.keyElements[keyCode].classList.remove('keyboard__btn--active'));
    });

    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      this.keyElements[e.code].classList.add('keyboard__btn--active');
    });

    window.addEventListener('keyup', (e) => {
      e.preventDefault();
      this.keyElements[e.code].classList.remove('keyboard__btn--active');
    });
  }
}

export default Keyboard;
