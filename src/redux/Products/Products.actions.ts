import { ProductCreator } from "../../components/Products/ProductForm";
import { createSingleProduct, getAllProducts } from "../../services/Products.service";
import { Action, Thunk } from "../";
import { Product } from "../../shared/Table/Table.mockdata";

export const getProducts = (): Thunk<Product[]> => async (dispatch) => {
    const products = await getAllProducts()
    dispatch({
        type: 'FETCH_PRODUTCS',
        payload: products
    })
}

export const insertNewProduct = (newProduct: ProductCreator): Thunk<ProductCreator> => async (dispatch) => {
    await createSingleProduct(newProduct)
    dispatch({
        type: 'INSERT_NEW_PRODUCT',
        payload: newProduct
    })
}