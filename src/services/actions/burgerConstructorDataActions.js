export const SET_BUN = "SET_BUN"
export const SET_NON_BUN_INGREDIENT = "SET_NON_BUN_INGREDIENT"

const setBunAC = (ingredient) => ({
    type: SET_BUN,
    payload: ingredient
})

const setNonBunIngredientAC = (ingredient) => ({
    type: SET_NON_BUN_INGREDIENT,
    payload: ingredient
})

export const setIngredientData = (ingredient, dispatch) => {
    if (ingredient.type === 'bun') {
        dispatch(setBunAC())
    } else {
        dispatch(setNonBunIngredientAC())
    }
}