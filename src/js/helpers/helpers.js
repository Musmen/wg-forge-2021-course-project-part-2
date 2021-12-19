import {
  CARD_TYPE_TO_POSITION_COUNT,
  PRODUCT_ITEMS_IN_ROW,
  VEHICLE_PRODUCT_TYPE,
} from "../constants/constants.js";

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
    <li class="cards-list__item" style="order: ${item.order};">
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

// reorder products in the list if they break the grid
const gerReorderedList = (productsList) => {
  // count position, because index in the list and position are different
  let positionCounter = 1;

  productsList.forEach((productItem, index) => {
    // condition if last in the row product card is double sized and does not fit
    if (positionCounter % PRODUCT_ITEMS_IN_ROW === 0 && productItem.isDouble) {
      for (
        let indexToChange = index + 1;
        indexToChange < productsList.length;
        indexToChange++
      ) {
        // find first next product card with single size and swap them
        if (!productsList[indexToChange].isDouble) {
          [productsList[index], productsList[indexToChange]] = [
            { ...productsList[indexToChange] },
            { ...productsList[index] },
          ];
          break;
        }
      }
    }

    // increase position by 2 for doubled sized card, and by 1 for single sized
    positionCounter += productsList[index].isDouble
      ? CARD_TYPE_TO_POSITION_COUNT.DOUBLE
      : CARD_TYPE_TO_POSITION_COUNT.SINGLE;
  });

  return productsList;
};

export const renderProductsList = (container, productsList) => {
  container.innerHTML = gerReorderedList(productsList)
    .map((item) => renderProductItem(item))
    .join("");
};
