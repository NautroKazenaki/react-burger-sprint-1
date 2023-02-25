import { orderDetailsDataReducer, initialState } from "./orderDetailsDataReducer";
import * as types from '../actions/orderDetailsDataActions';
import {  orderNumber } from "../../utils/Mocks";

describe('orderDetailsDataReducer', () => {
    it('should return the initial state', () => {
        expect(orderDetailsDataReducer(initialState, {})
        ).toEqual(initialState);
    });
    it('should handle GET_ORDER_NUMBER_DATA_REQUEST', () => {
        expect(orderDetailsDataReducer(undefined, {
            type: types.GET_ORDER_NUMBER_DATA_REQUEST,
    
        })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it('should handle GET_ORDER_NUMBER_DATA_SUCCESS', () => {
        expect(
            orderDetailsDataReducer(undefined, {
                type: types.GET_ORDER_NUMBER_DATA_SUCCESS,
                orderNumber: orderNumber
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            hasError: false,
            orderNumber: orderNumber
        });
    });
    it('should handle GET_ORDER_NUMBER_DATA_FAILED', () => {
        expect(
            orderDetailsDataReducer(undefined, {
                type: types.GET_ORDER_NUMBER_DATA_FAILED,
            })
        ).toEqual({
            ...initialState,
            hasError: true
        });
    });
    it('should handle SHOW_ORDER_DETAILS_DATA', () => {
        expect(
            orderDetailsDataReducer(undefined, {
                type: types.SHOW_ORDER_DETAILS_DATA,
            })
        ).toEqual({
            ...initialState,
            isShowing: true
        });
    });
    it('should handle HIDE_ORDER_DETAILS_DATA', () => {
        expect(
            orderDetailsDataReducer(undefined, {
                type: types.HIDE_ORDER_DETAILS_DATA,
            })
        ).toEqual({
            ...initialState,
            isShowing: false,
            orderNumber: null
        });
    });
})