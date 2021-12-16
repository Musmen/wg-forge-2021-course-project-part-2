import './scss/header.styles.scss';

class HeaderComponent {
  render(): string {
    return `
      <header class="header">
        <h1 class="visually-hidden">Word of tanks premium shop</h1>
        <nav class="nav">
          <div class="logo">
            <a href="#">
              <svg class="logo-icon">
                <use xlink:href="assets/images/sprite.svg#WGLogo"></use>
              </svg>
              Premium shop
            </a>
          </div>
          <div class="nav-menu">
            <div class="nav-menu__sub-menu">
              <a href="#/favorites" id="wish-list">
                Wishlist
                <span id="wish-list__quantity" class="quantity"></span>
              </a>
              <a href="#/cart" id="cart">
                Shopping cart
                <span id="cart__quantity" class="quantity"></span>
              </a>
            </div>
            <div class="authentication">
              <a class="authentication-signin" href="#/signin">Login</a><span> or</span>
              <a class="authentication-signup" href="#/signup">Create account</a>
            </div>
          </div>
        </nav>
      </header>
    `;
  }
}

export default new HeaderComponent();
