import { Product } from "../../shared/Table/Table.mockdata";
import { Action } from "./Products.reducer";

export const insertNewProduct = (): Action<Product> => {
    return {
        type: '',
        payload: {
            _id: 'asdg4246re',
            name: 'Cookie',
            price: 1.25,
            stock: 600
        }
    }
}