import Products from "../../shared/Table/Table.mockdata"

export interface Action<T = any> {
    type: string
    payload?: T
}

export default function (state = Products, action: Action) {
    switch (action.type) {
        case 'INSERT_NEW_PRODUCT':
            return [...state, action.payload]

        case 'FETCH_ALL_PRODUCTS':
            return state

        default:
            return state
    }
}