import counterReducer from './counter'
import isLogged from './isLogged'
import {combineReducers} from 'redux'

const reducer = combineReducers({
    counterReducer,
    isLogged
})

export default reducer