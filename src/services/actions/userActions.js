import { checkResponse } from "../../api/api";
import { BASE_URL } from "../../api/api";
import { deleteCookie, getCookie, setCookie } from "../../utils/Cookie";
//Forgot Password block
export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";

export const forgotPasswordRequestAC = () => ({
  type: FORGOT_PASSWORD_REQUEST,
});
export const forgotPasswordSuccessAC = (res) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: res,
});
export const forgotPasswordErrorAC = () => ({
  type: FORGOT_PASSWORD_ERROR,
});
//Create account block
export const CREATE_ACCOUNT_REQUEST = "CREATE_ACCOUNT_REQUEST";
export const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";
export const CREATE_ACCOUNT_ERROR = "CREATE_ACCOUNT_ERROR";

export const createAccountRequestAC = () => ({
  type: CREATE_ACCOUNT_REQUEST,
});
export const createAccountSuccessAC = (res) => ({
  type: CREATE_ACCOUNT_SUCCESS,
  payload: res,
});
export const createAccountErrorAC = () => ({
  type: CREATE_ACCOUNT_ERROR,
});
//Reset password block
export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

export const resetPasswordRequestAC = () => ({
  type: RESET_PASSWORD_REQUEST,
});
export const resetPasswordSuccessAC = (res) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: res,
});
export const resetPasswordErrorAC = () => ({
  type: RESET_PASSWORD_ERROR,
});
//Set profile info block
export const SET_PROFILE_INFO_REQUEST = "SET_PROFILE_INFO_REQUEST";
export const SET_PROFILE_INFO_SUCCESS = "SET_PROFILE_INFO_SUCCESS";
export const SET_PROFILE_INFO_ERROR = "SET_PROFILE_INFO_ERROR";

export const setProfileInfoRequestAC = () => ({
  type: SET_PROFILE_INFO_REQUEST,
});
export const setProfileInfoSuccessAC = (res) => ({
  type: SET_PROFILE_INFO_SUCCESS,
  payload: res,
});
export const setProfileInfoErrorAC = (err) => ({
  type: SET_PROFILE_INFO_ERROR,
  payload: err,
});
//Update profile info block
export const UPDATE_PROFILE_INFO_REQUEST = "UPDATE_PROFILE_INFO_REQUEST";
export const UPDATE_PROFILE_INFO_SUCCESS = "UPDATE_PROFILE_INFO_SUCCESS";
export const UPDATE_PROFILE_INFO_ERROR = "UPDATE_PROFILE_INFO_ERROR";

export const updateProfileInfoRequestAC = () => ({
  type: UPDATE_PROFILE_INFO_REQUEST,
});
export const updateProfileInfoSuccessAC = (res) => ({
  type: UPDATE_PROFILE_INFO_SUCCESS,
  payload: res,
});
export const updateProfileInfoErrorAC = (err) => ({
  type: UPDATE_PROFILE_INFO_ERROR,
  payload: err,
});

//login||logout user block
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const IS_USER_AUTHORIZED = "IS_USER_AUTHORIZED";

export const loginRequestAC = () => ({
    type: LOGIN_REQUEST,
  });
export const loginSuccessAC = (res) => ({
    type: LOGIN_SUCCESS,
    payload: res,
  });
export const loginErrorAC = (err) => ({
    type: LOGIN_ERROR,
    payload: err,
  });
export const logoutAC = () => ({
    type: LOGOUT
})
export const isUserAuthorizedAC = () => ({
  type: IS_USER_AUTHORIZED,
});

export const forgotPassword = (email) => (dispatch) => {
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
    .then(checkResponse)
    .then((res) => {
      if (res.success) {
        dispatch(forgotPasswordSuccessAC(res));
      }
    })
    .catch((err) => {
      dispatch(forgotPasswordErrorAC());
    });
};

export const createAccount = (email, password, name) => (dispatch) => {
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
    .then(checkResponse)
    .then((res) => {
      if (res.success) {
        dispatch(createAccountSuccessAC(res));
      }
    })
    .catch((err) => {
      dispatch(createAccountErrorAC());
    });
};

export const resetPassword = (password, token) => (dispatch) => {
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
    .then(checkResponse)
    .then((res) => {
      if (res.success) {
        dispatch(resetPasswordSuccessAC(res));
      }
    })
    .catch((err) => {
      dispatch(resetPasswordErrorAC());
    });
};

export const setUserInfo =  () => (dispatch) => {
  
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

export const updateUserInfo = (email, username) => (dispatch) => {
  dispatch(updateProfileInfoRequestAC());
  fetch(`${BASE_URL}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: getCookie("token"),
    },
    body: JSON.stringify({
      email: email,
      name: username,
    }),
  })
    .then(checkResponse)
    .then((res) => {
      dispatch(updateProfileInfoSuccessAC(res));
    })
    .catch((err) =>
      dispatch(updateProfileInfoErrorAC(err))
      
    );
};

export const login = (email, password) => (dispatch) => {
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
    .then(checkResponse)
    .then(res =>  {
        if(res.success) {
            setCookie('token', res.accessToken)
            localStorage.setItem('token', res.refreshToken);     
        }
        dispatch(loginSuccessAC(res))
    })
    .catch(err => dispatch(loginErrorAC(err)));
}
export const logout = (dispatch) => {
    fetch(`${BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            'token': localStorage.token
        })
    })
    .then(checkResponse)
    .then(res =>  {
        if(res.success) {
            deleteCookie('token')   
            dispatch(logoutAC())
        }
    })
    .catch(err => console.log(err));
}

export const isAuthChecker= () => (dispatch) => {
 
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

 export const fetchWithRefresh = async (url, options) => {
   
   try {
     const res = await fetch(url, options);
     
       return  await checkResponse(res);
  } catch (err) {
    
     if (err.message === "jwt expired") {
       const refreshData = refreshToken();
       
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
       localStorage.setItem("token", refreshData.refreshToken);
       setCookie("token", refreshData.accessToken);
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