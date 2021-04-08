import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk, { ThunkAction } from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import AuthenticationReducer from "./Authentication/Authentication.reducer";
import ProductsReducer from "./Products/Products.reducer";

const reducers = combineReducers({
    products: ProductsReducer,
    authentication: AuthenticationReducer
})

const persistedReducer = persistReducer({
    key: 'algaworks',
    storage,
    blacklist: ['products']
}, reducers)

const enhancers = [
    applyMiddleware(thunk),
    //em navegadores que nao possuem o redux-devtools o valor dessa propriedade vem undefined
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
].filter(e => e)// o filter serve para remover os itens undefined contidos no array

const store = createStore(
    persistedReducer,
    compose(...enhancers)
)

const persistor = persistStore(store)

export interface Action<T = any> {
    type: string
    payload?: T
}

export type RootState = ReturnType<typeof reducers>

export type Thunk<T = any> =
    ThunkAction<void, RootState, unknown, Action<T>>

export type ThunkDispatch = (thunk: Thunk) => Promise<Thunk>

export { store, persistor }