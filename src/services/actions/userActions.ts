import { checkResponse } from "../../api/api";
import { BASE_URL } from "../../api/api";
import { deleteCookie, getCookie, setCookie } from "../../utils/Cookie";
import { TUser, TRegisterResponse, TCredentials, TResponse } from "../../utils/Types";
import { AppDispatch, AppThunk } from "../reducers/rootReducer";
//Forgot Password block
export const FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST" = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS" = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR: "FORGOT_PASSWORD_ERROR" = "FORGOT_PASSWORD_ERROR";
export interface IForgotPasswordRequestAC {
  readonly type: typeof FORGOT_PASSWORD_REQUEST
}
export const forgotPasswordRequestAC = () => ({
  type: FORGOT_PASSWORD_REQUEST,
});

export interface IForgotPasswordSuccessAC {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
  payload: TUser
}
export const forgotPasswordSuccessAC = (res: TUser) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: res,
});

export interface IForgotPasswordErrorAC {
  readonly type: typeof FORGOT_PASSWORD_ERROR;
}
export const forgotPasswordErrorAC = () => ({
  type: FORGOT_PASSWORD_ERROR,
});

//Create account block
export const CREATE_ACCOUNT_REQUEST: "CREATE_ACCOUNT_REQUEST" = "CREATE_ACCOUNT_REQUEST";
export const CREATE_ACCOUNT_SUCCESS: "CREATE_ACCOUNT_SUCCESS" = "CREATE_ACCOUNT_SUCCESS";
export const CREATE_ACCOUNT_ERROR: "CREATE_ACCOUNT_ERROR" = "CREATE_ACCOUNT_ERROR";

export interface ICreateAccountRequestAC {
  readonly type: typeof CREATE_ACCOUNT_REQUEST
}
export const createAccountRequestAC = () => ({
  type: CREATE_ACCOUNT_REQUEST,
});

export interface ICreateAccountSuccessAC {
  readonly type: typeof CREATE_ACCOUNT_SUCCESS;
  payload: TUser
}
export const createAccountSuccessAC = (res: TUser) => ({
  type: CREATE_ACCOUNT_SUCCESS,
  payload: res,
});

export interface ICreateAccountErrorAC {
  readonly type: typeof CREATE_ACCOUNT_ERROR
}
export const createAccountErrorAC = () => ({
  type: CREATE_ACCOUNT_ERROR,
});
//Reset password block
export const RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST" = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS" = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR: "RESET_PASSWORD_ERROR" = "RESET_PASSWORD_ERROR";

export interface IResetPasswordRequestAC {
  readonly type: typeof RESET_PASSWORD_REQUEST
}
export const resetPasswordRequestAC = () => ({
  type: RESET_PASSWORD_REQUEST,
});

export interface IResetPasswordSuccessAC {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
  readonly payload: TUser
}
export const resetPasswordSuccessAC = (res: TUser) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: res,
});

export interface IResetPasswordErrorAC {
  readonly type: typeof RESET_PASSWORD_ERROR
}
export const resetPasswordErrorAC = () => ({
  type: RESET_PASSWORD_ERROR,
});

//Set profile info block
export const SET_PROFILE_INFO_REQUEST: "SET_PROFILE_INFO_REQUEST" = "SET_PROFILE_INFO_REQUEST";
export const SET_PROFILE_INFO_SUCCESS: "SET_PROFILE_INFO_SUCCESS" = "SET_PROFILE_INFO_SUCCESS";
export const SET_PROFILE_INFO_ERROR: "SET_PROFILE_INFO_ERROR" = "SET_PROFILE_INFO_ERROR";

export interface ISetProfileInfoRequestAC {
  readonly type: typeof SET_PROFILE_INFO_REQUEST
}
export const setProfileInfoRequestAC = () => ({
  type: SET_PROFILE_INFO_REQUEST,
});

export interface ISetProfileInfoSuccessAC {
  readonly type: typeof SET_PROFILE_INFO_SUCCESS;
  readonly payload: TUser
}
export const setProfileInfoSuccessAC = (res:TUser) => ({
  type: SET_PROFILE_INFO_SUCCESS,
  payload: res,
});

export interface ISetProfileInfoErrorAC {
  readonly type: typeof SET_PROFILE_INFO_ERROR;
  readonly payload: string
}
export const setProfileInfoErrorAC = (err:string) => ({
  type: SET_PROFILE_INFO_ERROR,
  payload: err,
});

//Update profile info block
export const UPDATE_PROFILE_INFO_REQUEST: "UPDATE_PROFILE_INFO_REQUEST" = "UPDATE_PROFILE_INFO_REQUEST";
export const UPDATE_PROFILE_INFO_SUCCESS: "UPDATE_PROFILE_INFO_SUCCESS" = "UPDATE_PROFILE_INFO_SUCCESS";
export const UPDATE_PROFILE_INFO_ERROR: "UPDATE_PROFILE_INFO_ERROR" = "UPDATE_PROFILE_INFO_ERROR";

export interface IUpdateProfileInfoRequestAC {
  readonly type: typeof UPDATE_PROFILE_INFO_REQUEST;
}
export const updateProfileInfoRequestAC = () => ({
  type: UPDATE_PROFILE_INFO_REQUEST,
});

export interface IUpdateProfileInfoSuccessAC {
  readonly type: typeof UPDATE_PROFILE_INFO_SUCCESS;
  readonly payload: TUser
}
export const updateProfileInfoSuccessAC = (res: TUser) => ({
  type: UPDATE_PROFILE_INFO_SUCCESS,
  payload: res,
});

export interface IUpdateProfileInfoErrorAC {
  readonly type: typeof UPDATE_PROFILE_INFO_ERROR;
  readonly payload: string
}
export const updateProfileInfoErrorAC = (err: string) => ({
  type: UPDATE_PROFILE_INFO_ERROR,
  payload: err,
});

//login||logout user block
export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_ERROR: 'LOGIN_ERROR' = 'LOGIN_ERROR';
export const LOGOUT: 'LOGOUT' = 'LOGOUT';
export const IS_USER_AUTHORIZED: "IS_USER_AUTHORIZED" = "IS_USER_AUTHORIZED";

export interface ILoginRequestAC {
  readonly type: typeof LOGIN_REQUEST
}
export const loginRequestAC = () => ({
    type: LOGIN_REQUEST,
  });

export interface ILoginSuccessAC {
  readonly type: typeof LOGIN_SUCCESS;
  readonly payload: TRegisterResponse
}
export const loginSuccessAC = (res: TRegisterResponse) => ({
    type: LOGIN_SUCCESS,
    payload: res,
  });

export interface ILoginErrorAC {
  readonly type: typeof LOGIN_ERROR;
  readonly payload: string
}
export const loginErrorAC = (err:string) => ({
    type: LOGIN_ERROR,
    payload: err,
  });

export interface ILogoutAC {
  readonly type: typeof LOGOUT
}
export const logoutAC = () => ({
    type: LOGOUT
})

export interface IIsUserAuthorizedAC {
  readonly type: typeof IS_USER_AUTHORIZED
}
export const isUserAuthorizedAC = () => ({
  type: IS_USER_AUTHORIZED,
});
export type TUserActions = |ILogoutAC| IIsUserAuthorizedAC| IForgotPasswordRequestAC| IForgotPasswordSuccessAC| IForgotPasswordErrorAC|ICreateAccountRequestAC |ICreateAccountSuccessAC
|ICreateAccountErrorAC |IResetPasswordRequestAC |IResetPasswordSuccessAC |IResetPasswordErrorAC |ISetProfileInfoRequestAC |ISetProfileInfoSuccessAC |ISetProfileInfoErrorAC |IUpdateProfileInfoRequestAC |IUpdateProfileInfoSuccessAC |IUpdateProfileInfoErrorAC |ILoginRequestAC |ILoginSuccessAC |ILoginErrorAC |ILogoutAC



export const forgotPassword = (email:string):AppThunk => (dispatch:AppDispatch) => {
  dispatch(forgotPasswordRequestAC());
  fetch(`${BASE_URL}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then(res => checkResponse<TResponse>(res))
    .then((res) => {
      if (res.success) {
        dispatch(forgotPasswordSuccessAC(res));
      }
    })
    .catch((err) => {
      dispatch(forgotPasswordErrorAC());
    });
};

export const createAccount = (email:string, password:string, name:string):AppThunk => (dispatch:AppDispatch) => {
  dispatch(createAccountRequestAC());
  fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  })
    .then(res => checkResponse<TRegisterResponse>(res))
    .then((res) => {
      if (res.success) {
        dispatch(createAccountSuccessAC(res));
      }
    })
    .catch((err) => {
      dispatch(createAccountErrorAC());
    });
};

export const resetPassword = (password:string, token: string):AppThunk => (dispatch: AppDispatch) => {
  dispatch(resetPasswordRequestAC());
  fetch(`${BASE_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      password: password,
      token: token,
    }),
  })
    .then(res => checkResponse<TResponse>(res))
    .then((res) => {
      if (res.success) {
        dispatch(resetPasswordSuccessAC(res));
      }
    })
    .catch((err) => {
      dispatch(resetPasswordErrorAC());
    });
};

export const setUserInfo =  ():AppThunk => (dispatch: AppDispatch) => {
  
  dispatch(setProfileInfoRequestAC());
  //  fetch(`${BASE_URL}/auth/user`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json;charset=utf-8",
  //     authorization: getCookie("token"),
  //   },
  // })
  
  fetchWithRefresh(`${BASE_URL}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: getCookie("token"),
    },
  })
    
  //@ts-ignore
  .then(res => checkResponse<TUser>(res))
    .then((res) => {
      
      dispatch(setProfileInfoSuccessAC(res));
    })
    
    .catch((err) => dispatch(setProfileInfoErrorAC(err)))
    .finally(() => {
      
       
      
      // dispatch(isUserAuthorizedAC());
      //  fetchWithRefresh(`${BASE_URL}/auth/user`, {
      //    method: "GET",
      //    headers: {
      //      "Content-Type": "application/json;charset=utf-8",
      //      authorization: getCookie("token"),
      //    },
      //  })
    });
};

export const updateUserInfo = (email:string, username:string):AppThunk => (dispatch: AppDispatch) => {
  dispatch(updateProfileInfoRequestAC());
  fetch(`${BASE_URL}/auth/user`, {
    method: "PATCH",
    //@ts-ignore
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: getCookie("token"),
    },
    body: JSON.stringify({
      email: email,
      name: username,
    }),
  })
    .then(res => checkResponse<TUser>(res))
    .then((res) => {
      dispatch(updateProfileInfoSuccessAC(res));
    })
    .catch((err) =>
      dispatch(updateProfileInfoErrorAC(err))
      
    );
};

export const login = (email:string, password:string):AppThunk => (dispatch: AppDispatch) => {
    dispatch(loginRequestAC());
    fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            'email': email,
            'password': password
        })
    })
    .then(res => checkResponse<TRegisterResponse>(res))
    .then(res =>  {
        if(res.success) {
            setCookie('token', res.accessToken, null)
            localStorage.setItem('token', res.refreshToken);     
        }
        dispatch(loginSuccessAC(res))
    })
    .catch(err => dispatch(loginErrorAC(err)));
}
export const logout = (dispatch: AppDispatch) => {
    fetch(`${BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            'token': localStorage.token
        })
    })
    .then(res => checkResponse<TRegisterResponse>(res))
    .then(res =>  {
        if(res.success) {
            deleteCookie('token')   
            dispatch(logoutAC())
        }
    })
    .catch(err => console.log(err));
}

export const isAuthChecker= () => (dispatch: AppDispatch) => {
 
    if (getCookie('token')) {
        dispatch(setUserInfo())
    }
}

export const refreshToken = () => {
 
  return fetch(`${BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("token"),
    }),
  }).then(checkResponse);
};

 export const fetchWithRefresh = async (url:string, options:any) => {
   
   try {
     const res = await fetch(url, options);
     
       return  await checkResponse(res);
  } catch (err:any) {
    
     if (err.message === "jwt expired") {
       const refreshData = refreshToken()  as unknown as {
        success: boolean
        refreshToken:string
        accessToken: string
       }
       
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
       localStorage.setItem("token", refreshData.refreshToken);
       setCookie("token", refreshData.accessToken, null);
       options.headers.authorization = refreshData.accessToken;
      //  const res = await fetch(`${BASE_URL}/auth/user`, {
      //    method: "GET",
      //    headers: {
      //      "Content-Type": "application/json;charset=utf-8",
      //      authorization: getCookie("token"),
      //    },
      //  });
      const res = await fetch(url, options)
       return await checkResponse(res);
     } else {
       return Promise.reject(err);
     }
  }
 };

//  if (err.message === "jwt expired") {
//   const refreshData = refreshToken();
  
//   // if (!refreshData.success) {
//   //   return Promise.reject(refreshData);
//    //}
//   localStorage.setItem("token", refreshData.refreshToken);
//   setCookie("token", refreshData.accessToken);
//   options.headers.authorization = refreshData.accessToken;
//   const res = await fetch(`${BASE_URL}/auth/user`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//       authorization: getCookie("token"),
//     },
//   });
//   return await checkResponse(res);
// }