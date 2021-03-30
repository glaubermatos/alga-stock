export interface Action<T = any> {
    type: string
    payload?: T
}

export default function (state = [], action: Action) {
    switch (action.type) {

        default:
            return state
    }
}