import {BASE_URL, checkResponse} from '../../api/api'

export const GET_ORDER_NUMBER_DATA_REQUEST = "GET_ORDER_NUMBER_DATA_REQUEST"
export const GET_ORDER_NUMBER_DATA_SUCCESS = "GET_ORDER_NUMBER_DATA_SUCCESS"
export const GET_ORDER_NUMBER_DATA_FAILED = "GET_ORDER_NUMBER_DATA_FAILED"
export const SHOW_ORDER_DETAILS_DATA = "SHOW_ORDER_DETAILS_DATA"
export const HIDE_ORDER_DETAILS_DATA = "HIDE_ORDER_DETAILS_DATA"

export const getOrderNumberDataRequestAC = () => ({
    type:GET_ORDER_NUMBER_DATA_REQUEST,
})
export const getOrderNumberDataSuccessAC = (res) => ({
    type: GET_ORDER_NUMBER_DATA_SUCCESS,
    orderNumber: res
})
export const getOrderNumberDataFailedAC = () => ({
    type: GET_ORDER_NUMBER_DATA_FAILED,
})
export const showOrderDetailsDataAC = () => ({
    type: SHOW_ORDER_DETAILS_DATA
})
export const hideOrderDetailsDataAC = () => ({
    type: HIDE_ORDER_DETAILS_DATA
})

export const getOrderNumber = (bun, nonBunIngredients ) => (dispatch) => {
     
     
     
     nonBunIngredients = [...nonBunIngredients];
     nonBunIngredients.unshift(bun);
     nonBunIngredients.push(bun);
    
      
    const burgerIngredientsId = nonBunIngredients.map((item) => item._id);
   
    dispatch(getOrderNumberDataRequestAC())
    fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            ingredients: burgerIngredientsId
        })
    })
    .then(checkResponse)
    .then((res) => {
      dispatch(getOrderNumberDataSuccessAC(res.order.number))
     })
     .then(dispatch(showOrderDetailsDataAC()))
    .catch(err => dispatch(getOrderNumberDataFailedAC()));
}

