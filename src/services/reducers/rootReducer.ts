import { combineReducers, applyMiddleware, compose  } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'
import burgerIngredientDataReducer from './burgerIngredientDataReducer'
import burgerConstructorDataReducer from './burgerConstructorDataReducer'
import burgerElementDataReducer from './burgerElementDataReducer'
import orderDetailsDataReducer from './orderDetailsDataReducer'
import userReducer from './userReducer'
import {TBurgerConstructorDataActions} from '../actions/burgerConstructorDataActions'
import {TBurgerElementDataAC} from '../actions/burgerElementDataActions'
import {TBurgerIngredientsDataActions} from '../actions/burgerIngredientsDataActions'
import {TOrderDetailsDataActions} from '../actions/orderDetailsDataActions'
import {TUserActions} from '../actions/userActions'
const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>;
type TApplicationActions = |TBurgerConstructorDataActions| TBurgerElementDataAC| TBurgerIngredientsDataActions | TOrderDetailsDataActions |TUserActions
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;
export type AppDispatch<TReturnType = void> = (
    action: TApplicationActions | AppThunk<TReturnType>
) => TReturnType; 
const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientDataReducer,
    burgerConstructor: burgerConstructorDataReducer,
    burgerElement: burgerElementDataReducer,
    orderDetails: orderDetailsDataReducer,
    userData: userReducer,
}) 

export const store = createStore(rootReducer, enhancer); 

