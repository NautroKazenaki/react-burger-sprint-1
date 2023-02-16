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
import RegistrationPage from "../../pages/Registration/RegistrationPage";
import LoginPage from "../../pages/Login/LoginPage";
import ForgotPasswordPage from "../../pages/ForgotPassword/ForgotPasswordPage";
import ResetPasswordPage from "../../pages/ResetPassword/ResetPasswordPage";
import ProfilePage from "../../pages/Profile/ProfilePage";
import Page404 from "../../pages/Page404/Page404";
import {isAuthChecker} from '../../services/actions/userActions'
import { ProtectedRoute } from "../../pages/ProtectedRoute/ProtectedRoute";
import ModalWindow from "../Modal/ModalWindow";
import IngredientsDetails from "../IngredientDetails/IngredientsDetails";
import OrderList from "../../pages/OrderList/OrderList";
import AppStyles from './App.module.css'
import OrderInfo from "../OrderInfo/OrderInfo";
import UserOrders from "../../pages/UserOrders/UserOrders";
import UserOrderInfo from "../UserOrderInfo/UserOrderInfo";


type TLocation = {
  background: Location
};


const App = () => {
 
  const {burgerIngredientsData, isLoading, hasError } = useSelector((state:any) => state.burgerIngredients)
  const  ordersList  = useSelector((state:any) => state.orderList.orders);
  
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
          <Route path='/ingredients/:ingredientId' >
          {/* <Route path='/ingredients/:ingredientId'  exact > */}
            <div className={AppStyles.ingredientDetailModalContainer}>
             
              <IngredientsDetails  />
            </div>
            
            
          </Route>
          {/* @ts-ignore */}
          <Route path ="/orderList">
            <OrderList />
          </Route>
          
           <Route path='/feed/:orderNumber' exact>
                  <OrderInfo />
          </Route> 
           <Route path='/feed/:feedNumber' exact>
                  <UserOrderInfo />
          </Route> 
          <Route path="/orders" exact>
                  <UserOrders />
                </Route>
          <Route path="/" exact >
            {!isLoading && !hasError && burgerIngredientsData.length > 0 && (
              <DndProvider backend={HTML5Backend}>
                <div className={AppStyles.mainContentContainer}>
                  <BurgerIngredients />
                  <BurgerConstructor />
                </div>
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
     
     {background && ordersList && (
      <Route
        path='/feed/:feedNumber'
        children={
          <ModalWindow onClose={hideModalWindow}>
            <UserOrderInfo />
          </ModalWindow>
        }
      />
      )}
      {background && ordersList && (
      <Route
        path='/feed/:orderNumber'
        children={
          <ModalWindow onClose={hideModalWindow}>
            <UserOrderInfo />
          </ModalWindow>
        }
      />
      )}
     {/* {background && ordersList && (
      <Route
        path='/feed/:feedNumber'
        children={
          <ModalWindow onClose={hideModalWindow}>
            <OrderInfo />
          </ModalWindow>
        }
      />
      )} */}
    </div>
  );
};

export default App;
