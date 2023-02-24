import { TIngredient } from '../../utils/Types'
import {GET_BURGER_INGREDIENTS_DATA_REQUEST, 
        GET_BURGER_INGREDIENTS_DATA_SUCCESS, 
        GET_BURGER_INGREDIENTS_DATA_FAILED,
        TBurgerIngredientsDataActions} from '../actions/burgerIngredientsDataActions'

type TBurgerIngredientDataListState = {
    burgerIngredientsData: TIngredient[]
    isLoading: boolean
    hasError: boolean
}
export const initialState: TBurgerIngredientDataListState = {
    burgerIngredientsData: [],
    isLoading: false,
    hasError: false
}

 export const burgerIngredientDataReducer = (state = initialState, action: TBurgerIngredientsDataActions) => {
    switch(action.type) {
        case GET_BURGER_INGREDIENTS_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_BURGER_INGREDIENTS_DATA_SUCCESS: {
            return {
                ...state,
                burgerIngredientsData: action.payload,
                isLoading: false
            }
        }
        case GET_BURGER_INGREDIENTS_DATA_FAILED: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
            }
        }
        default: {
            return state
        }
    }
}
export default burgerIngredientDataReducer