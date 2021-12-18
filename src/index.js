import products from "./mock-data/products.js";

const renderProductItemDescription = (item) => {
  if (item.isVehilce)
    return `
    <span class="flag flag_${item.flag}"></span>
    <span class="tank-type tank-type_${item.type}"></span>
    <span class="item__level">${item.level}</span>
    <span class="item__title">${item.title}</span>
  `;

  return `<span class="item__title">${item.title}</span>`;
};

const renderProductItem = (item) => {
  return `
    <li class="cards-list__item">
      <article class="card ${item.isDouble ? "card_double" : "card_single"}">
        <a href="#" class="card__info">
          <img
            class="card__img ${item.isVehilce ? "" : "card__img_small"}"
            src="assets/images/products/${item.imageSrc}"
            alt="${item.title}"
            width=${item.isDouble ? "350" : "250"}
            height=${item.isDouble ? "230" : "150"}
          />
          <div class="card__specifications">
            <h2 class="item__description">
              ${renderProductItemDescription(item)}
            </h2>
            <p class="item__price"><span>$ ${item.price}</span></p>
          </div>
        </a>
        <button class="like-btn"></button>
        <button class="purchase-btn">purchase</button>
      </article>
    </li>
  `;
};

const cardsList = document.querySelector(".cards-list");

cardsList.innerHTML = products.map((item) => renderProductItem(item)).join("");
