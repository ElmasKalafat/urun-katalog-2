import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { drawerReducer } from "./reducer/drawer";
import { productsReducer } from "./reducer/products";
import { productsDetailReducer } from "./reducer/productDetail";
import { cardReducer } from "./reducer/card";
import { searchReducer } from "./reducer/search";

const cardItems = JSON.parse(localStorage.getItem("cardItems")) || [];
let initialState = {
  card: { cardItems },
};

const reducers = combineReducers({
  drawer: drawerReducer,
  products: productsReducer,
  product: productsDetailReducer,
  card: cardReducer,
  search: searchReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
