import {
    UserActionTypes,
    UserState
} from "./types"
import {
    LOGIN_SUCCES,
    LOG_OUT,
    TOKEN_STILL_VALID,
} from "./types"

const initialState: UserState = {
    // @ts-ignore
    token: localStorage.getItem("token"),
    id: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    country: undefined,
    city: undefined,
    imageUrl: undefined,
    createdAt: undefined,
    updatedAt: undefined,
}

export default (state = initialState, action: UserActionTypes) => {
    switch (action.type) {
        case LOGIN_SUCCES:
            // @ts-ignore
            localStorage.setItem("token", action.payload.token)
            return { ...state, ...action.payload };

        case LOG_OUT:
            localStorage.removeItem("token");
            return { ...initialState, token: undefined };

        case TOKEN_STILL_VALID:
            return { ...state, ...action.payload };

        default: 
            return state;
    }
}