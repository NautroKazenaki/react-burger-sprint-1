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
      {!isLoading && !hasError & burgerIngredientsData.length > 0 && (
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      )}
      
    </div>
  );
};

export default App;
