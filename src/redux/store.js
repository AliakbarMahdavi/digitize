import { legacy_createStore as createStore } from "redux";

import reducer from "./products/productsReducer";

const store = createStore(reducer);

export default store;