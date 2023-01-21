import { useSelector } from "react-redux";

import React from "react";
import BurgerConstructorElement from "./BurgerConstructorElement";
import {TIngredient} from '../../utils/Types'

const BurgerConstructorElementContainer = () => {
  
  const {nonBunIngredients} = useSelector(
    (state:any) => state.burgerConstructor
  );


 
  return (
    <div>
      {nonBunIngredients.map((ingredient:TIngredient, index:number) => (
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
