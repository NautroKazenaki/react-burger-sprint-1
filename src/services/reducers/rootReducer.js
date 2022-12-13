import { combineReducers, applyMiddleware, compose  } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import burgerIngredientDataReducer from '../reducers/burgerIngredientDataReducer'
import burgerConstructorDataReducer from '../reducers/burgerConstructorDataReducer'
import burgerElementDataReducer from '../reducers/burgerElementDataReducer'
import orderDetailsDataReducer from '../reducers/orderDetailsDataReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientDataReducer,
    burgerConstructor: burgerConstructorDataReducer,
    burgerElement: burgerElementDataReducer,
    orderDetails: orderDetailsDataReducer,
}) 

export const store = createStore(rootReducer, enhancer); 

