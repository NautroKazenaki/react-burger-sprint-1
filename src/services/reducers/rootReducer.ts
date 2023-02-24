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
import { orderListReducer } from './orderListReducer';
import {userOrdersReducer} from './userOrdersReducer'
import { socketMiddleware } from '../middleware/socketMW';
import { 
    connect as orderListWsConnect,
    disconnect as orderListWsDisconnect,
    wsConnecting as orderListWsConnecting,
    wsOpen as orderListWsOpen, 
    wsClose as orderListWsClose, 
    wsMessage as orderListWsMessage, 
    wsError as orderListWsError,
    TOrderListActions,
} from '../actions/orderListActions';
import { 
    connect as userOrdersWsConnect,
    disconnect as userOrdersWsDisconnect,
    wsConnecting as userOrdersWsConnecting,
    wsOpen as userOrdersWsOpen, 
    wsClose as userOrdersWsClose, 
    wsMessage as userOrdersWsMessage, 
    wsError as userOrdersWsError,
    TUserOrdersActions
} from '../actions/userOrdersActions';
export const userOrdersMiddleware = socketMiddleware({
    wsConnect: userOrdersWsConnect,
    wsDisconnect: userOrdersWsDisconnect,
    wsConnecting: userOrdersWsConnecting,
    onOpen:userOrdersWsOpen,
    onClose: userOrdersWsClose,
    onMessage:userOrdersWsMessage,
    onError: userOrdersWsError,
});

export const orderListMiddleware = socketMiddleware({
    wsConnect: orderListWsConnect,
    wsDisconnect: orderListWsDisconnect,
    wsConnecting: orderListWsConnecting,
    onOpen: orderListWsOpen,
    onClose: orderListWsClose,
    onMessage: orderListWsMessage,
    onError: orderListWsError,
});
// const composeEnhancers = composeWithDevTools({});
 const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose
const enhancer = composeEnhancers(applyMiddleware(thunk, orderListMiddleware, userOrdersMiddleware))



export type RootState = ReturnType<typeof rootReducer>;

type TApplicationActions = |TBurgerConstructorDataActions| TBurgerElementDataAC| TBurgerIngredientsDataActions | TOrderDetailsDataActions |TUserActions| TOrderListActions |TUserOrdersActions
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;
export type AppDispatch<TReturnType = void > = (
    action: TApplicationActions | AppThunk<TReturnType>
) => TReturnType; 

const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientDataReducer,
    burgerConstructor: burgerConstructorDataReducer,
    burgerElement: burgerElementDataReducer,
    orderDetails: orderDetailsDataReducer,
    userData: userReducer,
    orderList: orderListReducer,
    userOrders: userOrdersReducer
}) 

export const store = createStore(rootReducer, enhancer); 

