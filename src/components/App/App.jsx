import React, { useState, useEffect } from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import { BURGER_INGREDIENTS_DATA_URL } from "../../api/api";
import {checkResponse} from '../../api/api'
import {dataContext} from '../../Context/dataContext'


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
  let data = state.burgerIngredientsData

  return (
    <div>
      <AppHeader />
      {state.burgerIngredientsData.length > 0 && (
        <dataContext.Provider value={{data}}>
          <BurgerIngredients />
          <BurgerConstructor />
        </dataContext.Provider>
      )}
      
    </div>
  );
};

export default App;
