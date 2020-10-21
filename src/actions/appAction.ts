export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const loginAction = () => {
    return {
        type: LOGIN,
        payload: {
            isAuthenticated: true
        }
    }
}

export const logoutAction = () => {
    return {
        type: LOGOUT,
        payload: {
            isAuthenticated: false
        }
    }
}


