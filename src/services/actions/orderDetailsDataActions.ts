import {BASE_URL, checkResponse} from '../../api/api'
import { getCookie } from "../../utils/Cookie";
import {TIngredient, TOrderNumber, TOrderResponse } from "../../utils/Types"
import { AppDispatch, AppThunk } from '../reducers/rootReducer';
export const GET_ORDER_NUMBER_DATA_REQUEST: "GET_ORDER_NUMBER_DATA_REQUEST" = "GET_ORDER_NUMBER_DATA_REQUEST"
export const GET_ORDER_NUMBER_DATA_SUCCESS: "GET_ORDER_NUMBER_DATA_SUCCESS" = "GET_ORDER_NUMBER_DATA_SUCCESS"
export const GET_ORDER_NUMBER_DATA_FAILED: "GET_ORDER_NUMBER_DATA_FAILED" = "GET_ORDER_NUMBER_DATA_FAILED"
export const SHOW_ORDER_DETAILS_DATA: "SHOW_ORDER_DETAILS_DATA" = "SHOW_ORDER_DETAILS_DATA"
export const HIDE_ORDER_DETAILS_DATA: "HIDE_ORDER_DETAILS_DATA" = "HIDE_ORDER_DETAILS_DATA"

export interface IGetOrderNumberDataRequestAC {
    readonly type: typeof GET_ORDER_NUMBER_DATA_REQUEST;
}
export const getOrderNumberDataRequestAC = () => ({
    type:GET_ORDER_NUMBER_DATA_REQUEST,
})
export interface IGetOrderNumberDataSuccessAC {
    readonly type: typeof GET_ORDER_NUMBER_DATA_SUCCESS;
    readonly orderNumber: number
}
export const getOrderNumberDataSuccessAC = (res: TOrderNumber) => ({
    type: GET_ORDER_NUMBER_DATA_SUCCESS,
    orderNumber: res
})
export interface IGetOrderNumberDataFailedAC  {
    readonly type: typeof GET_ORDER_NUMBER_DATA_FAILED;
}
export const getOrderNumberDataFailedAC = () => ({
    type: GET_ORDER_NUMBER_DATA_FAILED,
})
export interface IShowOrderDetailsDataAC {
    readonly type: typeof SHOW_ORDER_DETAILS_DATA;
}
export const showOrderDetailsDataAC = () => ({
    type: SHOW_ORDER_DETAILS_DATA
})
export interface IHideOrderDetailsDataAC {
    readonly type: typeof HIDE_ORDER_DETAILS_DATA;
}

export const hideOrderDetailsDataAC = () => ({
    type: HIDE_ORDER_DETAILS_DATA
})
export type TOrderDetailsDataActions = |IGetOrderNumberDataRequestAC|IGetOrderNumberDataSuccessAC|IGetOrderNumberDataFailedAC|IShowOrderDetailsDataAC|IHideOrderDetailsDataAC
export const getOrderNumber = (bun: TIngredient, nonBunIngredients:TIngredient[] ):AppThunk => (dispatch: AppDispatch) => {
     
     
     
     nonBunIngredients = [...nonBunIngredients];
     nonBunIngredients.unshift(bun);
     nonBunIngredients.push(bun);
    
      
    const burgerIngredientsId = nonBunIngredients.map((item) => item._id);
   
    dispatch(getOrderNumberDataRequestAC())
    fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        //@ts-ignore
        headers: {
            'Content-Type': "application/json;charset=utf-8",
            authorization: getCookie("token"),
        },
        body: JSON.stringify({
            ingredients: burgerIngredientsId
        })
    })
    .then(res=>checkResponse<TOrderResponse>(res))
    .then((res) => {
      dispatch(getOrderNumberDataSuccessAC(res.order.number))
     })
     .then(dispatch(showOrderDetailsDataAC()))
    .catch(err => dispatch(getOrderNumberDataFailedAC()));
}

