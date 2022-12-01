import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import bIStyles from './BurgerIngredients.module.css'

const Sause = (props) => {
  return (
    <div className={bIStyles.burgerIngredientsItemContainer}>
      <div className={bIStyles.burgerIngredientsContentContainer}>
        <img
          className={bIStyles.burgerIngredientsImg}
          src={props.sauses.image}
          alt="здесь будет картинка"
        />
        <div className={bIStyles.burgerIngredientsPrice}>
          <p className="text text_type_digits-default">{props.sauses.price}</p>
          <div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={bIStyles.burgerIngredientsDescription1}>
          <p className="text text_type_main-small">{props.sauses.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Sause;
