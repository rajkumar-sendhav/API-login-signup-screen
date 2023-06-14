import {createStore,applyMiddleware,combineReducers} from 'redux'
import {reducerRegister,reducerLogin} from './Reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

var reducer = combineReducers({
    register:reducerRegister,
    login:reducerLogin
})

var gstore = createStore(reducer,applyMiddleware(thunk,logger))
export default gstore