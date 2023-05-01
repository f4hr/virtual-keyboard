import '../scss/main.scss';

import { Keyboard } from './keyboard.js';

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

  const keyboard = new Keyboard(keyboardContainer);
  keyboard.init();
}

document.addEventListener('DOMContentLoaded', init);
