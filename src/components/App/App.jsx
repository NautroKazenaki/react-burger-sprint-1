import React, { useState, useEffect } from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import State from "../../utils/data.js";
import { burgerIngredientsDataURL } from "../../api/api";


const App = () => {
  const [state, setState] = useState({burgerIngredientsData: []});
  
  useEffect(() => {
    const getburgerIngredientsData = () => {
      fetch(burgerIngredientsDataURL)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
         setState({burgerIngredientsData: json.data});
        })
        .catch((err) => console.log(`${err}`));
    };
    getburgerIngredientsData()
    
  }, []);
  console.log(state)
  
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
