import React, { useState, useEffect } from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import { BURGER_INGREDIENTS_DATA_URL } from "../../api/api";
import {checkResponse} from '../../api/api'


const App = () => {
  const [state, setState] = useState({burgerIngredientsData: []});
  
  useEffect(() => {
    const getBurgerIngredientsData = () => {
      fetch(BURGER_INGREDIENTS_DATA_URL)
       .then(checkResponse)
        .then((json) => {
         setState({burgerIngredientsData: json.data});
        })
        .catch((err) => console.log(`${err}`));
    };
    getBurgerIngredientsData()
    
  }, []);
  
  return (
    <div>
      <AppHeader />
      {state.burgerIngredientsData.length > 0 && (
        <>
          <BurgerIngredients data={state.burgerIngredientsData} />
          <BurgerConstructor data={state.burgerIngredientsData} />
        </>
      )}
      
    </div>
  );
};

export default App;
