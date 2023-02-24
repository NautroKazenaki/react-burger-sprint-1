import {SHOW_BURGER_ELEMENT_DATA,
        HIDE_BURGER_ELEMENT_DATA,
        TBurgerElementDataAC} from '../actions/burgerElementDataActions'

type TBurgerElementDataListState = {
    clickedIngredient: null;
    isShowing: boolean
}
export const initialState: TBurgerElementDataListState = {
    clickedIngredient: null,
    isShowing: false
}

export const burgerElementDataReducer = (state = initialState, action:TBurgerElementDataAC) => {
    switch(action.type) {
        case SHOW_BURGER_ELEMENT_DATA: {
            
            return {
                ...state,
                isShowing: true,
                clickedIngredient: action.payload
            }
        }
        case HIDE_BURGER_ELEMENT_DATA: {
            return {
                ...state,
                isShowing: false,
                clickedIngredient: null
            }
        }
        default: {
            return state
        }
    }
}
export default burgerElementDataReducer