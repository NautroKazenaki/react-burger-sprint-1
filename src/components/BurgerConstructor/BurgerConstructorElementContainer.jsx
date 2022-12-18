import { useSelector } from "react-redux";

import React from "react";
import BurgerConstructorElement from "./BurgerConstructorElement";

const BurgerConstructorElementContainer = () => {
  
  const {nonBunIngredients} = useSelector(
    (state) => state.burgerConstructor
  );


 
  return (
    <div>
      {nonBunIngredients.map((ingredient, index) => (
        <BurgerConstructorElement
          index={index}
          ingredient={ingredient}
          key={index}
        />
      ))}
    </div>
  );
};

export default BurgerConstructorElementContainer;
