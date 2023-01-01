import {SHOW_BURGER_ELEMENT_DATA,
        HIDE_BURGER_ELEMENT_DATA} from '../actions/burgerElementDataActions'

const initialState = {
    clickedIngredient: null,
    isShowing: false
}

const burgerElementDataReducer = (state = initialState, action) => {
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