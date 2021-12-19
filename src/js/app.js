import { renderProductsList } from "./helpers/helpers.js";
import productsList from "./mock-data/products.js";

const productsListContainer = document.querySelector(".cards-list");
renderProductsList(productsListContainer, productsList);
