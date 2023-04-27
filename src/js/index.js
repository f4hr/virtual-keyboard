import '../scss/main.scss';

function buildBaseMarkup() {
  const container = document.createElement('main');
  const heading = document.createElement('h1');
  heading.textContent = 'RSS Virtual Keyboard';

  container.append(heading);
  document.body.prepend(container);
}

function init() {
  buildBaseMarkup();
}

document.addEventListener('DOMContentLoaded', init);
