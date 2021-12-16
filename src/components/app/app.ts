import header from '../header/header';
import mainPage from '../main-page/main-page';
import footer from '../footer/footer';

const appInit = () => {
  const appElement = document.createElement('div');
  appElement.classList.add('app');

  appElement.insertAdjacentHTML('afterbegin', header.render());
  appElement.insertAdjacentHTML('beforeend', mainPage.render());
  appElement.insertAdjacentHTML('beforeend', footer.render());

  document.body.append(appElement);
};

export default appInit;
