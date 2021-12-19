import products from "./mock-data/products.js";

const VEHICLE_PRODUCT_TYPE = "vehicle";

const renderProductItemDescription = (item) => {
  if (item.productType === VEHICLE_PRODUCT_TYPE)
    return `
    <span class="flag flag_${item.flag}"></span>
    <span class="tank-type tank-type_${item.vehicleType}"></span>
    <span class="item__level">${item.level}</span>
    <span class="item__title">${item.title}</span>
  `;

  return `<span class="item__title">${item.title}</span>`;
};

const renderProductItem = (item) => {
  return `
    <li class="cards-list__item">
      <article class="card ${item.isDouble ? "card_double" : "card_single"}">
        <a href="#" class="card__info card__info_${item.productType}">
          <img
            class="card__img"
            src="assets/images/products/${item.imageSrc}"
            alt="${item.title}"
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
