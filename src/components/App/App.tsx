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
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useHistory, useLocation} from 'react-router-dom'
import RegistrationPage from "../Registration/RegistrationPage";
import LoginPage from "../Login/LoginPage";
import ForgotPasswordPage from "../ForgotPassword/ForgotPasswordPage";
import ResetPasswordPage from "../ResetPassword/ResetPasswordPage";
import ProfilePage from "../Profile/ProfilePage";
import Page404 from "../Page404/Page404";
import {isAuthChecker} from '../../services/actions/userActions'
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import ModalWindow from "../Modal/ModalWindow";
import IngredientsDetails from "../IngredientDetails/IngredientsDetails";
import OrderList from "../OrderList/OrderList";



type TLocation = {
  background: Location
};


const App = () => {
 
  const {burgerIngredientsData, isLoading, hasError } = useSelector((state:any) => state.burgerIngredients)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    //@ts-ignore
    dispatch(getBurgerIngredientsData())
  }, [dispatch]);

  useEffect( () => {
    //@ts-ignore
    dispatch(isAuthChecker())
  }, [])
 
  const location = useLocation<TLocation>()
  const background = location.state && location.state?.background;
  const history = useHistory();
  const hideModalWindow = () => {
    history.goBack();
  }; 

  return (
    <div>
      <AppHeader />
      {isLoading && (
        <Loader />
      )}
      {hasError && (
        <Error />
      )}
      {/* @ts-ignore */}
        <Switch location={background || location}>
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
          {/* @ts-ignore */}
          <ProtectedRoute path ="/profile" exact>
            <ProfilePage />
          </ProtectedRoute>
          <Route path='/ingredients/:ingredientId'  exact>
            <IngredientsDetails />
            
          </Route>
          {/* @ts-ignore */}
          <ProtectedRoute path ="/orderList">
            <OrderList />
          </ProtectedRoute>
          
          <Route path="/" exact >
            {!isLoading && !hasError && burgerIngredientsData.length > 0 && (
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
        { background && burgerIngredientsData.length > 0 && (
        <Route
          path='/ingredients/:ingredientId'
          
          children={
            <ModalWindow onClose={hideModalWindow} title="Детали ингредиента">
              <IngredientsDetails />
            </ModalWindow>
          }
        />
      )}
     
      
    </div>
  );
};

export default App;
