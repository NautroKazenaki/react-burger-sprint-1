import React, { useState, useEffect } from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import {getBurgerIngredientsData} from '../../services/actions/burgerIngredientsDataActions'
import {useSelector, useDispatch} from 'react-redux'




const App = () => {
 
  const {burgerIngredientsData } = useSelector((state) => state.burgerIngredients)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getBurgerIngredientsData())
  }, [dispatch]);
 

  return (
    <div>
      <AppHeader />
      {burgerIngredientsData.length > 0 && (
        <>
          <BurgerIngredients />
          <BurgerConstructor />
        </>
      )}
      
    </div>
  );
};

export default App;
