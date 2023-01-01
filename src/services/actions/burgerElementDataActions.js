export const SHOW_BURGER_ELEMENT_DATA = "SHOW_BURGER_ELEMENT_DATA"
export const HIDE_BURGER_ELEMENT_DATA = "HIDE_BURGER_ELEMENT_DATA"

export const showBurgerElementDataAC = (ingredient) => ({
    type: SHOW_BURGER_ELEMENT_DATA,
    payload: ingredient
})
export const hideBurgerElementDataAC = () => ({
    type: HIDE_BURGER_ELEMENT_DATA
})