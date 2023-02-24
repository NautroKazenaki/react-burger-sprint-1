import { userOrdersReducer, initialState } from "./userOrdersReducer";
import * as types from '../actions/userOrdersActions.ts';
import { errorMessage, orders, statusMessages } from "../../utils/Mocks";

describe('userOrdersReducer', () => {
    it('should return the initial state', () => {
        expect(
            userOrdersReducer(undefined, {})
        ).toEqual(initialState);
    });
    it('should handle WsConnecting', () => {
        expect(
            userOrdersReducer(undefined, {
                type: types.wsConnecting,
                status: statusMessages.connecting
            })
        ).toEqual({
            ...initialState,
            status: statusMessages.connecting,
            connectionError: "",
            userOrders: null,
        });
    });
    it('should handle wsOpen', () => {
        expect(
            userOrdersReducer(undefined, {
                type: types.wsOpen,
                status: statusMessages.online
            })
        ).toEqual({
            ...initialState,
            status: statusMessages.online,
            connectionError: "",
            userOrders: null
        });
    });
    it('should handle wsClose', () => {
        expect(
            userOrdersReducer(undefined, {
                type: types.wsClose,
                status: statusMessages.offline
            })
        ).toEqual({
            ...initialState,
            status: statusMessages.offline,
            userOrders: null,
            connectionError: "",
        });
    });
    it('should handle wsError', () => {
        expect(
            userOrdersReducer(undefined, {
                type: types.wsError,
                payload: errorMessage
            })
        ).toEqual({
            ...initialState,
            connectionError: errorMessage,
            userOrders: null,
            status: "",
        });
    });
    it('should handle wsMessage', () => {
        expect(
            userOrdersReducer(undefined, {
                type: types.wsMessage,
                payload: orders
            })
        ).toEqual({
            ...initialState,

            connectionError: "",
            userOrders:  {
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
