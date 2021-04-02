import { ProductCreator } from "../../components/Products/ProductForm";
import { Thunk } from "../";
import { Product } from "../../shared/Table/Table.mockdata";
import {
    createSingleProduct,
    deleteSingleProduct,
    getAllProducts,
    updateSingleProduct
} from "../../services/Products.service";

export const deleteProduct =
    (productId: string): Thunk =>
        async (dispatch) => {
            await deleteSingleProduct(productId)
            dispatch(getProducts())
        }

export const updateProduct =
    (updatingProduct: Product): Thunk =>
        async (dispatch) => {
            await updateSingleProduct(updatingProduct)
            dispatch(getProducts())
        }


export const insertNewProduct =
    (newProduct: ProductCreator): Thunk =>
        async (dispatch) => {
            await createSingleProduct(newProduct)
            dispatch(getProducts())
        }

export const getProducts =
    (): Thunk<Product[]> =>
        async (dispatch) => {
            const products = await getAllProducts()
            dispatch({
                type: 'FETCH_PRODUTCS',
                payload: products
            })
        }