import { createAction } from "@reduxjs/toolkit";
import { TOrders } from "../../utils/Types";

export const connect = createAction<string, 'USER_ORDERS_CONNECT'>('USER_ORDERS_CONNECT');
export const disconnect = createAction('USER_ORDERS_DISCONNECT');
export const wsConnecting = createAction('USER_ORDERS_WS_CONNECTING');
export const wsOpen = createAction('USER_ORDERS_WS_OPEN');
export const wsClose = createAction('USER_ORDERS_WS_CLOSE');
export const wsMessage = createAction<TOrders, 'USER_ORDERS_WS_MESSAGE'>('USER_ORDERS_WS_MESSAGE');
export const wsError = createAction<string, 'USER_ORDERS_WS_ERROR'>('USER_ORDERS_WS_ERROR');

export type TUserOrdersActions = 
    | ReturnType<typeof connect>
    | ReturnType<typeof disconnect>
    | ReturnType<typeof wsConnecting>
    | ReturnType<typeof wsOpen>
    | ReturnType<typeof wsClose>
    | ReturnType<typeof wsMessage>
    | ReturnType<typeof wsError>;