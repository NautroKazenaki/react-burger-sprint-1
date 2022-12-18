import {SET_BUN,
    SET_NON_BUN_INGREDIENT,
    DELETE_INGREDIENT, 
    CHANGE_INGREDIENT_POSITION} from '../actions/burgerConstructorDataActions'

const initialState = {
    buns: null,
    nonBunIngredients: []
}

const burgerConstructorDataReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SET_BUN: {
            return {
                ...state,
                buns: [ action.payload]
            }
        }
        case SET_NON_BUN_INGREDIENT: {
            return {
                ...state,
                nonBunIngredients: [...state.nonBunIngredients, action.payload]
            }
        }
        case DELETE_INGREDIENT: {
            
            return {
                ...state,
                nonBunIngredients: state.nonBunIngredients.filter((ingredient) => ingredient.id !== action.id)
            }
        }
        case CHANGE_INGREDIENT_POSITION: {
          
            const data = [...state.nonBunIngredients]
            data.splice(action.hoverIndex, 0, data.splice(action.dragIndex, 1)[0]);
            
            
            return {
                ...state,
                nonBunIngredients: data
            }
        }
        default: {
            return state
        }
    }
}

export default burgerConstructorDataReducer