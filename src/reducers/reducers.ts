import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { authReducer } from "./appReducer";
import { History } from 'history'

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    auth: authReducer
})

export default createRootReducer
