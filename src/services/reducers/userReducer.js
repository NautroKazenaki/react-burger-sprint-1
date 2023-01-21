import {FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR,
    CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_ERROR,
    RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR,
    SET_PROFILE_INFO_REQUEST, SET_PROFILE_INFO_SUCCESS, SET_PROFILE_INFO_ERROR,
    UPDATE_PROFILE_INFO_REQUEST, UPDATE_PROFILE_INFO_SUCCESS, UPDATE_PROFILE_INFO_ERROR,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, IS_USER_AUTHORIZED} from '../actions/userActions'

const initialState = {
    userNewPassword: {},
    isLoading: false,
    hasError: false,
    isUser: false,
    isAuth: false,
    newUserData: {},
    isUserPasswordChanged: false,
    profileInfo: {},
    userData: {}
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isUser: true,
                userNewPassword: action.payload
            }
        }
        case FORGOT_PASSWORD_ERROR: {
            return {
                ...state,
                hasError: true,
                isLoading:false
            }
        }
        case CREATE_ACCOUNT_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case CREATE_ACCOUNT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                newUserData: action.payload
            }
        }
        case CREATE_ACCOUNT_ERROR: {
            return {
                ...state,
                hasError: true,
                isLoading:false
            }
        }
        case RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isUserPasswordChanged: true,
            }
        }
        case RESET_PASSWORD_ERROR: {
            return {
                ...state,
                hasError: true,
                isLoading: false,
                isUserPasswordChanged: false
            }
        }
        case SET_PROFILE_INFO_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SET_PROFILE_INFO_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                profileInfo: action.payload,
                isAuth: true
            }
        }
        case SET_PROFILE_INFO_ERROR: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
                profileInfo: action.payload
            }
        }
        case UPDATE_PROFILE_INFO_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case UPDATE_PROFILE_INFO_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                profileInfo: action.payload
            }
        }
        case UPDATE_PROFILE_INFO_ERROR: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
                profileInfo: action.payload
            }
        }
        case LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                userData: action.payload,
            }
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
                userData: action.payload
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isAuth: false
            }
        }
        case IS_USER_AUTHORIZED: {
            return {
                ...state,
                isAuth: true
            }
        }
        default: {
            return state
        }
    }
}

export default userReducer