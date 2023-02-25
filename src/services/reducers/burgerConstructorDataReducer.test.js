import { burgerConstructorDataReducer, initialState } from "./burgerConstructorDataReducer";
import * as types from '../actions/burgerConstructorDataActions';
import { mainIngredients, bun } from "../../utils/Mocks";

describe('burgerConstructorDataReducer', () => {
    it('should return the initial state', () => {
        expect(burgerConstructorDataReducer(initialState, {})
        ).toEqual(initialState);
    });
    it('should handle SET_NON_BUN_INGREDIENT', () => {
        expect(burgerConstructorDataReducer(undefined, {
            type: types.SET_NON_BUN_INGREDIENT,
            ingredients: mainIngredients
        })
        ).toEqual({
            ...initialState,
            nonBunIngredients: [undefined],
            
        });
    });
    it('should handle DELETE_INGREDIENT', () => {
        expect(
            burgerConstructorDataReducer(undefined, {
                type: types.DELETE_INGREDIENT,
                ingredients: mainIngredients
            })
        ).toEqual({
            ...initialState
        });
    });
    it('should handle SET_BUN', () => {
        expect(
            burgerConstructorDataReducer(undefined, {
                type: types.SET_BUN,
                buns: bun
            })
        ).toEqual({
            ...initialState,
            buns: undefined,
            nonBunIngredients: [],
            
        });
    });
    it('should handle CHANGE_INGREDIENT_POSITION', () => {
        expect(
            burgerConstructorDataReducer(undefined, {
                type: types.CHANGE_INGREDIENT_POSITION,
                ingredients: mainIngredients
            })
        ).toEqual({
            ...initialState,
            nonBunIngredients: [undefined],
        });
    });
})