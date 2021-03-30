import { createStore, combineReducers } from "redux";
import ProductsReducer from "./Products/Products.reducer";

const reducers = combineReducers({
    products: ProductsReducer
})

const store = createStore(reducers)

export default store