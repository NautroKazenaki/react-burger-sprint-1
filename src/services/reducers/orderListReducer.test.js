import { orderListReducer, initialState } from "./orderListReducer";
import * as types from '../actions/orderListActions';
import { errorMessage, orders, statusMessages } from "../../utils/Mocks";

describe('orderListReducer', () => {
    it('should return the initial state', () => {
        expect(
            orderListReducer(undefined, {})
        ).toEqual(initialState);
    });
    it('should handle WsConnecting', () => {
        expect(
            orderListReducer(undefined, {
                type: types.wsConnecting,
                status: statusMessages.connecting
            })
        ).toEqual({
            ...initialState,
            status: statusMessages.connecting,
            connectionError: "",
            orders: null,
        });
    });
    it('should handle wsOpen', () => {
        expect(
            orderListReducer(undefined, {
                type: types.wsOpen,
                status: statusMessages.online
            })
        ).toEqual({
            ...initialState,
            status: statusMessages.online,
            connectionError: "",
            orders: null
        });
    });
    it('should handle wsClose', () => {
        expect(
            orderListReducer(undefined, {
                type: types.wsClose,
                status: statusMessages.offline
            })
        ).toEqual({
            ...initialState,
            status: statusMessages.offline,
            orders: null,
            connectionError: "",
        });
    });
    it('should handle wsError', () => {
        expect(
            orderListReducer(undefined, {
                type: types.wsError,
                payload: errorMessage
            })
        ).toEqual({
            ...initialState,
            connectionError: errorMessage,
            orders: null,
            status: "",
        });
    });
    it('should handle wsMessage', () => {
        expect(
            orderListReducer(undefined, {
                type: types.wsMessage,
                payload: orders
            })
        ).toEqual({
            ...initialState,

            connectionError: "",
       orders:  {
         orders:  [
            {
             _id: "123",
            createdAt: "created",
             ingredients:  [
               "ingredient-1",
               "ingredient-2",
               "ingredient-3",
             ],
             name: "burger",
             status: "done",
             updateAt: "update",
           },
         ],
         total: 2,
         totalToday: 1,
       },
       status: "",
        });
});
})
