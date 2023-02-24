import { createReducer } from '@reduxjs/toolkit';
import { TOrders } from '../../utils/Types';
import { wsConnecting, wsOpen, wsClose, wsMessage, wsError } from '../actions/userOrdersActions';

export type TUserOrdersListState = {
    status: string;
    connectionError: string;
    userOrders: TOrders | null;
}


const initialState: TUserOrdersListState = {
    status: '',
    connectionError: '',
    userOrders: null,
}

export const userOrdersReducer = createReducer(initialState, builder => {
    builder
        .addCase(wsConnecting, state => {
            state.status = 'Connecting...';
        })
        .addCase(wsOpen, state => {
            state.status = 'Online';
            state.connectionError = '';
        })
        .addCase(wsClose, state => {
            state.status = 'Offline';
        })
        .addCase(wsError, (state, action) => {
            state.connectionError = action.payload;
        })
        .addCase(wsMessage, (state, action) => {
            state.userOrders = action.payload;
        })
})