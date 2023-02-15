import uuid from "react-uuid"
import { AnyAction } from "redux"
import {TIngredient} from '../../utils/Types'
import { AppDispatch } from "../reducers/rootReducer"

export const SET_BUN: "SET_BUN" = "SET_BUN"
export const SET_NON_BUN_INGREDIENT: "SET_NON_BUN_INGREDIENT" = "SET_NON_BUN_INGREDIENT"
export const DELETE_INGREDIENT: "DELETE_INGREDIENT" = "DELETE_INGREDIENT"
export const CHANGE_INGREDIENT_POSITION: "CHANGE_INGREDIENT_POSITION" = "CHANGE_INGREDIENT_POSITION"

export interface ISetBunAC {
    readonly type: typeof SET_BUN;
    readonly payload: TIngredient
}
export const setBunAC = (ingredient: TIngredient):ISetBunAC => ({
    type: SET_BUN,
    payload: {...ingredient,
        id: uuid()}
})
export interface ISetNonBunIngredientAC {
    readonly type: typeof SET_NON_BUN_INGREDIENT;
    readonly payload: TIngredient
}
export const setNonBunIngredientAC = (ingredient: TIngredient): ISetNonBunIngredientAC => ({
    type: SET_NON_BUN_INGREDIENT,
    payload: {...ingredient,
        id: uuid()}
})
export interface IDeleteIngredientAC {
    readonly type: typeof DELETE_INGREDIENT;
    id: string | undefined
}
export const deleteIngredientAC = (ingredient: TIngredient): IDeleteIngredientAC => ({
    type: DELETE_INGREDIENT,
    id: ingredient.id
})
export interface IChangeIngredientPositionAC {
    readonly type: typeof CHANGE_INGREDIENT_POSITION;
    readonly dragIndex: number;
    readonly hoverIndex: number
}
export const changeIngredientPositionAC = (dragIndex: number, hoverIndex: number): IChangeIngredientPositionAC => ({
    type: CHANGE_INGREDIENT_POSITION,
    dragIndex: dragIndex,
    hoverIndex: hoverIndex
})
export type TBurgerConstructorDataActions = | ISetBunAC | ISetNonBunIngredientAC | IDeleteIngredientAC | IChangeIngredientPositionAC
export const setIngredientData = (ingredient: TIngredient, dispatch: AppDispatch) => {
    if (ingredient.type === 'bun') {
        dispatch(setBunAC(ingredient))
    } else {
        dispatch(setNonBunIngredientAC(ingredient))
    }
}

export const addIngredient = (ingredient: TIngredient, dispatch: AppDispatch) => {
    
    if (ingredient.type === 'bun') {
        dispatch(setBunAC(ingredient))
    } else {
        dispatch(setNonBunIngredientAC(ingredient))
    }
}