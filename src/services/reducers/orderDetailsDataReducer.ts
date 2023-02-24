import {GET_ORDER_NUMBER_DATA_REQUEST,
    GET_ORDER_NUMBER_DATA_SUCCESS,
    GET_ORDER_NUMBER_DATA_FAILED,
    SHOW_ORDER_DETAILS_DATA,
    HIDE_ORDER_DETAILS_DATA,
    TOrderDetailsDataActions,} from '../actions/orderDetailsDataActions'

type TOrderDetailsDataListState = {
    orderNumber: number|null
    isShowing: boolean
    isLoading: boolean
    hasError: boolean
}
export const initialState: TOrderDetailsDataListState = {
    orderNumber: null,
    isShowing: false,
    isLoading: false,
    hasError: false,
}

 export const orderDetailsDataReducer = ( state = initialState, action:TOrderDetailsDataActions) => {
    switch(action.type) {
        case GET_ORDER_NUMBER_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_ORDER_NUMBER_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                orderNumber: action.orderNumber
            }
        }
        case GET_ORDER_NUMBER_DATA_FAILED: {
            return {
                ...state,
                hasError: true
            }
        }
        case SHOW_ORDER_DETAILS_DATA: {
            return {
                ...state,
                isShowing: true
            }
        }
        case HIDE_ORDER_DETAILS_DATA: {
            return {
                ...state,
                isShowing: false,
                orderNumber: null
            }
        }
        default: {
            return state
        }
    }
}
export default orderDetailsDataReducer