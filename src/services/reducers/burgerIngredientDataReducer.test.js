import { burgerIngredientDataReducer, initialState } from "./burgerIngredientDataReducer";
import * as types from '../actions/burgerIngredientsDataActions';
import { mainIngredients } from "../../utils/Mocks";

describe('burgerIngredientDataReducer', () => {
    it('should return the initial state', () => {
        expect(burgerIngredientDataReducer(initialState, {})
        ).toEqual(initialState);
    });
    it('should handle GET_BURGER_INGREDIENTS_DATA_REQUEST', () => {
        expect(burgerIngredientDataReducer(undefined, {
            type: types.GET_BURGER_INGREDIENTS_DATA_REQUEST,
    
        })
        ).toEqual({
            ...initialState,
            isLoading: true
        });
    });
    it('should handle GET_BURGER_INGREDIENTS_DATA_SUCCESS', () => {
        expect(
            burgerIngredientDataReducer(undefined, {
                type: types.GET_BURGER_INGREDIENTS_DATA_SUCCESS,
                burgerIngredientsData: mainIngredients
            })
        ).toEqual({
            ...initialState,
            burgerIngredientsData: undefined,
            isLoading: false
        });
    });
    it('should handle GET_BURGER_INGREDIENTS_DATA_FAILED', () => {
        expect(
            burgerIngredientDataReducer(undefined, {
                type: types.GET_BURGER_INGREDIENTS_DATA_FAILED,
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            hasError: true,
        });
    });
})