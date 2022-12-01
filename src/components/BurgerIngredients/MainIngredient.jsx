import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import bIStyles from './BurgerIngredients.module.css'

const MainIngredient = (props) => {
  return (
    <div className={bIStyles.burgerIngredientsContentContainer}>
      <img
        className={bIStyles.burgerIngredientsImg}
        src={props.mains.image}
        alt="здесь будет картинка"
      />
      <div className={bIStyles.burgerIngredientsPrice}>
        <p className="text text_type_digits-default">{props.mains.price}</p>
        <div>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <div className={bIStyles.burgerIngredientsDescription1}>
        <p className="text text_type_main-small">{props.mains.name}</p>
      </div>
    </div>
  );
};

export default MainIngredient;
