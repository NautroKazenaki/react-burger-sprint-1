import {SET_BUN,
    SET_NON_BUN_INGREDIENT} from '../actions/burgerConstructorDataActions'

const initialState = {
    buns: [],
    nonBunIngredients: []
}

export const burgerConstructorDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BUN: {
            return {
                ...state,
                buns: [action.payload]
            }
        }
        case SET_NON_BUN_INGREDIENT: {
            return {
                ...state,
                nonBunIngredients: [action.payload]
            }
        }
        default: {
            return state
        }
    }
}