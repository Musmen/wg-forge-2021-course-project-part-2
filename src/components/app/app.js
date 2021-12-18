import header from '../header/header';
import mainPage from '../main-page/main-page';
import footer from '../footer/footer';

const appInit = () => {
  debugger;
  const appElement = document.createElement('div');
  appElement.classList.add('app');

  appElement.insertAdjacentHTML('afterbegin', header.render());
  appElement.insertAdjacentHTML('beforeend', mainPage.render());
  appElement.insertAdjacentHTML('beforeend', footer.render());

  document.querySelector('body').appendChild(appElement);
};

export default appInit;
