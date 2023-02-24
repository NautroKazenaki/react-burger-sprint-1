import {BASE_URL, checkResponse} from '../../api/api'
import {TIngredient, TIngredientResponse} from '../../utils/Types'
import { AppDispatch, AppThunk } from '../reducers/rootReducer'
export const GET_BURGER_INGREDIENTS_DATA_REQUEST: "GET_BURGER_INGREDIENTS_DATA_REQUEST" = "GET_BURGER_INGREDIENTS_DATA_REQUEST"
export const GET_BURGER_INGREDIENTS_DATA_SUCCESS: "GET_BURGER_INGREDIENTS_DATA_SUCCESS" = "GET_BURGER_INGREDIENTS_DATA_SUCCESS"
export const GET_BURGER_INGREDIENTS_DATA_FAILED: "GET_BURGER_INGREDIENTS_DATA_FAILED" = "GET_BURGER_INGREDIENTS_DATA_FAILED"

export interface IGetBurgerIngredientsDataRequestAC {
    readonly type: typeof GET_BURGER_INGREDIENTS_DATA_REQUEST
}
const getBurgerIngredientsDataRequestAC = (): IGetBurgerIngredientsDataRequestAC => ({
    type: GET_BURGER_INGREDIENTS_DATA_REQUEST
})

export interface IGetBurgerIngredientsDataSuccessAC {
    readonly type: typeof GET_BURGER_INGREDIENTS_DATA_SUCCESS;
    readonly payload: TIngredient[]
}
const getBurgerIngredientsDataSuccessAC = (res: TIngredientResponse):IGetBurgerIngredientsDataSuccessAC => ({
    type: GET_BURGER_INGREDIENTS_DATA_SUCCESS,
    payload: res.data
})

export interface IGetBurgerIngredientsDataFailedAC {
    readonly type: typeof GET_BURGER_INGREDIENTS_DATA_FAILED;
}
const getBurgerIngredientsDataFailedAC = (): IGetBurgerIngredientsDataFailedAC => ({
    type:GET_BURGER_INGREDIENTS_DATA_FAILED
})

export type TBurgerIngredientsDataActions = |IGetBurgerIngredientsDataRequestAC |IGetBurgerIngredientsDataSuccessAC |IGetBurgerIngredientsDataFailedAC

export const getBurgerIngredientsData = ():AppThunk => (dispatch: AppDispatch) => {
    dispatch(getBurgerIngredientsDataRequestAC);
    fetch(`${BASE_URL}/ingredients`)
        .then(res =>checkResponse<TIngredientResponse>(res))
        .then(res => dispatch(getBurgerIngredientsDataSuccessAC(res)))
        .catch(error => dispatch(getBurgerIngredientsDataFailedAC()));
    }
// export const getBurgerIngredientsData = () => (dispatch: AppDispatch) => {
//     dispatch(getBurgerIngredientsDataRequestAC);
//     fetch(`${BASE_URL}/ingredients`)
//         .then(checkResponse)
//         .then(res => dispatch(getBurgerIngredientsDataSuccessAC(res)))
//         .catch(error => dispatch(getBurgerIngredientsDataFailedAC()));
//     }

