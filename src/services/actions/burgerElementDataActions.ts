import {TIngredient} from '../../utils/Types'
export const SHOW_BURGER_ELEMENT_DATA:"SHOW_BURGER_ELEMENT_DATA" = "SHOW_BURGER_ELEMENT_DATA"
export const HIDE_BURGER_ELEMENT_DATA: "HIDE_BURGER_ELEMENT_DATA" = "HIDE_BURGER_ELEMENT_DATA"


 export interface IShowBurgerElementDataAC {
     readonly type: typeof SHOW_BURGER_ELEMENT_DATA;
     readonly payload: TIngredient;
 }
 export interface IHideBurgerElementDataAC {
    readonly type: typeof HIDE_BURGER_ELEMENT_DATA;
 }
export const showBurgerElementDataAC = (ingredient:TIngredient ) => ({
    type: SHOW_BURGER_ELEMENT_DATA,
    payload: ingredient
})
export const hideBurgerElementDataAC = () => ({
    type: HIDE_BURGER_ELEMENT_DATA
})

export type TBurgerElementDataAC = | IShowBurgerElementDataAC | IHideBurgerElementDataAC 