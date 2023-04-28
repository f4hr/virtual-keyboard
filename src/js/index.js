import '../scss/main.scss';

import { Keyboard } from './keyboard.js';

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

  const keyboard = new Keyboard(keyboardContainer);
  keyboard.init();
}

document.addEventListener('DOMContentLoaded', init);
