import React, { useState, useEffect } from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import {getBurgerIngredientsData} from '../../services/actions/burgerIngredientsDataActions'
import {useSelector, useDispatch} from 'react-redux'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import  Loader  from '../Loader/Loader'
import Error from '../Error/Error'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationPage from "../Registration/RegistrationPage";
import LoginPage from "../Login/LoginPage";
import ForgotPasswordPage from "../ForgotPassword/ForgotPasswordPage";
import ResetPasswordPage from "../ResetPassword/ResetPasswordPage";
import ProfilePage from "../Profile/ProfilePage";
import Page404 from "../Page404/Page404";




const App = () => {
 
  const {burgerIngredientsData, isLoading, hasError } = useSelector((state) => state.burgerIngredients)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getBurgerIngredientsData())
  }, [dispatch]);
 

  return (
    <div>
      <AppHeader />
      {isLoading && (
        <Loader />
      )}
      {hasError && (
        <Error />
      )}
      <Router>
        <Switch>
          <Route path="/register">
            <RegistrationPage />
          </Route>
          <Route path ="/login">
            <LoginPage />
          </Route>
          <Route path="/forgot-password">
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password">
            <ResetPasswordPage />
          </Route>
          <Route path ="/profile">
            <ProfilePage />
          </Route>
          
          <Route path="/" exact={true}>
            {!isLoading && !hasError & burgerIngredientsData.length > 0 && (
              <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
              </DndProvider>
            )}
          </Route>
          <Route path ="/*">
            <Page404 />
          </Route>
        </Switch>
      </Router>
     
      
    </div>
  );
};

export default App;
