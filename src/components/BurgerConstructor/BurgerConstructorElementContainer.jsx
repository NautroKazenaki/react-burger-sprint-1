import { useSelector } from "react-redux";

import React from "react";
import BurgerConstructorElement from "./BurgerConstructorElement";

const BurgerConstructorElementContainer = () => {
  

  const burgerIngredientsData = useSelector(
    (state) => state.burgerIngredients.burgerIngredientsData
  );
  const {nonBunIngredients} = useSelector(
    (state) => state.burgerConstructor
  );

 
  return (
    <div>
      {nonBunIngredients.map((ingredient, i) => (
        <BurgerConstructorElement
          i={i}
          ingredient={ingredient}
          key={ingredient._id}
        />
      ))}
    </div>
  );
};

export default BurgerConstructorElementContainer;
