import {BASE_URL, checkResponse} from '../../api/api'

export const GET_BURGER_INGREDIENTS_DATA_REQUEST = "GET_BURGER_INGREDIENTS_DATA_REQUEST"
export const GET_BURGER_INGREDIENTS_DATA_SUCCESS = "GET_BURGER_INGREDIENTS_DATA_SUCCESS"
export const GET_BURGER_INGREDIENTS_DATA_FAILED = "GET_BURGER_INGREDIENTS_DATA_FAILED"


const getBurgerIngredientsDataRequestAC = () => ({
    type: GET_BURGER_INGREDIENTS_DATA_REQUEST
})

const getBurgerIngredientsDataSuccessAC = (res) => ({
    type: GET_BURGER_INGREDIENTS_DATA_SUCCESS,
    payload: res.data
})

const getBurgerIngredientsDataFailedAC = () => ({
    type:GET_BURGER_INGREDIENTS_DATA_FAILED
})

export const getBurgerIngredientsData = () => (dispatch) => {
    dispatch(getBurgerIngredientsDataRequestAC);
    fetch(`${BASE_URL}/ingredients`)
        .then(checkResponse)
        .then(res => dispatch(getBurgerIngredientsDataSuccessAC(res)))
        .catch(error => dispatch(getBurgerIngredientsDataFailedAC()));
    }

