import { burgerElementDataReducer, initialState } from "./burgerElementDataReducer";
import * as types from '../actions/burgerElementDataActions';
import { mainIngredients } from "../../utils/Mocks";

describe('burgerElementDataReducer', () => {
    it('should return the initial state', () => {
        expect(burgerElementDataReducer(initialState, {})
        ).toEqual(initialState);
    });
    it('should handle SHOW_BURGER_ELEMENT_DATA', () => {
        expect(burgerElementDataReducer(undefined, {
            type: types.SHOW_BURGER_ELEMENT_DATA,
            clickedIngredient: mainIngredients,
    
        })
        ).toEqual({
            ...initialState,
            clickedIngredient: undefined,
            isShowing: true,
        });
    });
    it('should handle HIDE_BURGER_ELEMENT_DATA', () => {
        expect(
            burgerElementDataReducer(undefined, {
                type: types.HIDE_BURGER_ELEMENT_DATA,
            })
        ).toEqual({
            ...initialState,
            isShowing: false,
            clickedIngredient: null
        });
    });
})