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

export class Keyboard {
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

export default Keyboard;
