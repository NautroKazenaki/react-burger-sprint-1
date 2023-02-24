import { userReducer, initialState } from "./userReducer";
import * as types from '../actions/userActions.ts';
import {  newUser, user } from "../../utils/Mocks";

describe('userReducer', () => {
    it('should return the initial state', () => {
        expect(userReducer(initialState, {})
        ).toEqual(initialState);
    });
    it('should handle FORGOT_PASSWORD_REQUEST', () => {
        expect(userReducer(undefined, {
            type: types.FORGOT_PASSWORD_REQUEST,
    
        })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it('should handle FORGOT_PASSWORD_SUCCESS', () => {
        expect(
            userReducer(undefined, {
                type: types.FORGOT_PASSWORD_SUCCESS,
                userData: newUser,
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            isUser: true,
            userNewPassword: undefined
        });
    });
    it('should handle FORGOT_PASSWORD_ERROR', () => {
        expect(
            userReducer(undefined, {
                type: types.FORGOT_PASSWORD_ERROR,
            })
        ).toEqual({
            ...initialState,
            hasError: true,
            isLoading:false
        });
    });
    it('should handle CREATE_ACCOUNT_REQUEST', () => {
        expect(
            userReducer(undefined, {
                type: types.CREATE_ACCOUNT_REQUEST,
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it('should handle CREATE_ACCOUNT_SUCCESS', () => {
        expect(
            userReducer(undefined, {
                type: types.CREATE_ACCOUNT_SUCCESS,
                userData: newUser
            })
        ).toEqual({
            ...initialState,
            userData: {},
            newUserData: undefined
        });
    });
    it('should handle CREATE_ACCOUNT_ERROR', () => {
        expect(
            userReducer(undefined, {
                type: types.CREATE_ACCOUNT_ERROR,
            })
        ).toEqual({
            ...initialState,
            hasError: true,
            isLoading:false
        });
    });
    it('should handle RESET_PASSWORD_REQUEST', () => {
        expect(
            userReducer(undefined, {
                type: types.RESET_PASSWORD_REQUEST,
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it('should handle RESET_PASSWORD_SUCCESS', () => {
        expect(
            userReducer(undefined, {
                type: types.RESET_PASSWORD_SUCCESS,
                userData: newUser
            })
        ).toEqual({
            ...initialState,
            isUserPasswordChanged: true,
            newUserData:  {},
        });
    });
    it('should handle RESET_PASSWORD_ERROR', () => {
        expect(
            userReducer(undefined, {
                type: types.RESET_PASSWORD_ERROR,
            })
        ).toEqual({
            ...initialState,
            hasError: true,
            isLoading:false,
            isUserPasswordChanged: false
        });
    });
    it('should handle SET_PROFILE_INFO_REQUEST', () => {
        expect(
            userReducer(undefined, {
                type: types.SET_PROFILE_INFO_REQUEST,
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it('should handle SET_PROFILE_INFO_SUCCESS', () => {
        expect(
            userReducer(undefined, {
                type: types.SET_PROFILE_INFO_SUCCESS,
                profileInfo: newUser
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            profileInfo: undefined,
            isAuth: true
        });
    });
    it('should handle SET_PROFILE_INFO_ERROR', () => {
        expect(
            userReducer(undefined, {
                type: types.SET_PROFILE_INFO_ERROR,
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            hasError: true,
            profileInfo: undefined
        });
    });
    it('should handle UPDATE_PROFILE_INFO_REQUEST', () => {
        expect(
            userReducer(undefined, {
                type: types.UPDATE_PROFILE_INFO_REQUEST,
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it('should handle UPDATE_PROFILE_INFO_SUCCESS', () => {
        expect(
            userReducer(undefined, {
                type: types.UPDATE_PROFILE_INFO_SUCCESS,
                profileInfo: newUser
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            profileInfo: undefined
        });
    });
    it('should handle UPDATE_PROFILE_INFO_ERROR', () => {
        expect(
            userReducer(undefined, {
                type: types.UPDATE_PROFILE_INFO_ERROR,
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            hasError: true,
            profileInfo: undefined
        });
    });
    it('should handle LOGIN_REQUEST', () => {
        expect(
            userReducer(undefined, {
                type: types.LOGIN_REQUEST,
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it('should handle LOGIN_SUCCESS', () => {
        expect(
            userReducer(undefined, {
                type: types.LOGIN_SUCCESS,
                userData: user
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            isAuth: true,
            userData: undefined,
        });
    });
    it('should handle LOGIN_ERROR', () => {
        expect(
            userReducer(undefined, {
                type: types.LOGIN_ERROR,
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            hasError: true,
            userData: undefined
        });
    });
    it('should handle LOGOUT', () => {
        expect(
            userReducer(undefined, {
                type: types.LOGOUT,
            })
        ).toEqual({
            ...initialState,
            isAuth: false
        });
    });
    it('should handle IS_USER_AUTHORIZED', () => {
        expect(
            userReducer(undefined, {
                type: types.IS_USER_AUTHORIZED,
            })
        ).toEqual({
            ...initialState,
            isAuth: true
        });
    });
})