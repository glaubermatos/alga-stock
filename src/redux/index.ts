import { createStore, combineReducers } from "redux";
import ProductsReducer from "./Products/Products.reducer";

const reducers = combineReducers({
    products: ProductsReducer
})

const store = createStore(
    reducers,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store