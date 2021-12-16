import './scss/main.scss';

import appInit from './components/app/app';

const DOMContentLoadedHandler = () => {
  appInit();
  document.removeEventListener('DOMContentLoaded', DOMContentLoadedHandler);
};

window.addEventListener('DOMContentLoaded', DOMContentLoadedHandler);
