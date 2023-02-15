 import { createReducer } from "@reduxjs/toolkit";
import { TOrders,  } from "../../utils/Types";
 import { wsConnecting, wsOpen, wsClose, wsError, wsMessage} from "../actions/orderListActions";


export type TOrdersListState = {
  status: string;
  connectionError: string;
  orders: TOrders | null;
};

const initialState: TOrdersListState = {
  status: "",
  connectionError: "",
  orders: null,
};
debugger
 export const orderListReducer = createReducer(initialState, (builder) => {
   
   builder
     .addCase(wsConnecting, (state) => {
       state.status = "Connecting...";
     })
     .addCase(wsOpen, (state) => {
       state.status = "Online";
       state.connectionError = "";
     })
     .addCase(wsClose, (state) => {
      state.status = "Offline";
     })
     .addCase(wsError, (state, action) => {
       state.connectionError = action.payload;
     })
     .addCase(wsMessage, (state, action) => {
       state.orders = action.payload;
     });
 });
