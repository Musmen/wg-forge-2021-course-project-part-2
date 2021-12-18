import './scss/main-page.styles.scss';

class MainPageComponent {
  render() {
    return `
      <div class="main">
        <div class='content-menu'>
          <a href='#' class='WoT_logo'><img src='assets/images/WoT_logo.png' alt='WoT logo' /></a>
          <div class='content-menu__buttons'>
            <button class='active-menu__button'>All</button>
            <button>Vehicles</button>
            <button>Gold</button>
            <button>Premium account</button>
          </div>
        </div>  
        <div class='cards-field' id='cards-container'></div>
        <div id='list-end'></div>
      </div>
    `;
  }
}

export default new MainPageComponent();