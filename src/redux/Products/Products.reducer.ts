import { Action } from ".."
import Products, { Product } from "../../shared/Table/Table.mockdata"

export default function (state = Products, action: Action): Product[] {
    switch (action.type) {
        case 'FETCH_PRODUTCS':
            return [...action.payload]

        default:
            return state
    }
}