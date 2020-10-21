import {LOGIN, LOGOUT} from "../actions/appAction";

const initialState = {
    isAuthenticated: false
}

export const authReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state
    }
}