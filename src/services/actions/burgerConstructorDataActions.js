import uuid from "react-uuid"

export const SET_BUN = "SET_BUN"
export const SET_NON_BUN_INGREDIENT = "SET_NON_BUN_INGREDIENT"
export const DELETE_INGREDIENT = "DELETE_INGREDIENT"
export const CHANGE_INGREDIENT_POSITION = "CHANGE_INGREDIENT_POSITION"

export const setBunAC = (ingredient) => ({
    type: SET_BUN,
    payload: {...ingredient,
        id: uuid()}
})

export const setNonBunIngredientAC = (ingredient) => ({
    type: SET_NON_BUN_INGREDIENT,
    payload: {...ingredient,
        id: uuid()}
})

export const deleteIngredientAC = (ingredient) => ({
    type: DELETE_INGREDIENT,
    id: ingredient.id
})

export const changeIngredientPositionAC = (dragIndex, hoverIndex) => ({
    type: CHANGE_INGREDIENT_POSITION,
    dragIndex: dragIndex,
    hoverIndex: hoverIndex
})
export const setIngredientData = (ingredient, dispatch) => {
    if (ingredient.type === 'bun') {
        dispatch(setBunAC())
    } else {
        dispatch(setNonBunIngredientAC())
    }
}

export const addIngredient = (ingredient, dispatch) => {
    debugger
    if (ingredient.type === 'bun') {
        dispatch(setBunAC(ingredient))
    } else {
        dispatch(setNonBunIngredientAC(ingredient))
    }
}