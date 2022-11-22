import { createStore, combineReducers } from "redux";

import cartReducer from "./modules/addProduct/reducer";
import cartModal from "./modules/cartModal/reducer";

const reducers = combineReducers({ product: cartReducer, cartModal: cartModal });

const store = createStore(reducers);

export default store;