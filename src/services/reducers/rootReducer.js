import { combineReducers, applyMiddleware, compose, Action} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import {burgerIngredientDataReducer} from '../reducers/burgerIngredientDataReducer'
import {burgerConstructorDataReducer} from '../reducers/burgerConstructorDataReducer'
import {burgerElementDataReducer} from '../reducers/burgerElementDataReducer'
import {orderDetailsDataReducer} from '../reducers/orderDetailsDataReducer'

const rootReducer = combineReducers({
    burgerIngredientDataReducer,
    burgerConstructorDataReducer,
    burgerElementDataReducer,
    orderDetailsDataReducer
}) 

export const store = createStore(rootReducer); 

