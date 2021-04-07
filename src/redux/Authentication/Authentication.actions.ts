import { Thunk } from ".."
import { signInUser } from "../../services/Authentication.service"

declare interface Credentils {
    user: string
    pass: string
}

export const login =
    ({ user, pass }: Credentils): Thunk =>
        async (dispatch) => {
            const loggedInUser = await signInUser(user, pass)
            dispatch({
                type: 'AUTHENTICATION_LOGIN',
                payload: loggedInUser
            })
        }