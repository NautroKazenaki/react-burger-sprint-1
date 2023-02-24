import { createAction } from "@reduxjs/toolkit";
import { TOrders } from "../../utils/Types";

 export const connect = createAction<string, "ORDER_LIST_CONNECT">("ORDER_LIST_CONNECT");
 export const disconnect = createAction("ORDER_LIST_DISCONNECT");
 export const wsConnecting = createAction("ORDER_LIST_WS_CONNECTING");
 export const wsOpen = createAction("ORDER_LIST_WS_OPEN");
 export const wsClose = createAction("ORDER_LIST_WS_CLOSE");
 export const wsMessage = createAction<TOrders, "ORDER_LIST_WS_MESSAGE">(
   "ORDER_LIST_WS_MESSAGE"
 );
 export const wsError = createAction<string, "ORDER_LIST_WS_ERROR">("ORDER_LIST_WS_ERROR");




 export type TOrderListActions =
   | ReturnType<typeof connect>
   | ReturnType<typeof disconnect>
   | ReturnType<typeof wsConnecting>
   | ReturnType<typeof wsOpen>
   | ReturnType<typeof wsClose>
   | ReturnType<typeof wsMessage>
   | ReturnType<typeof wsError>;

