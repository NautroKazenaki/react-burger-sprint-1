import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import bIStyles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import {ingredientTypes} from '../../utils/PropTypes'

const Bun = (props) => {

  const handleClick = (e) => {
    props.onOpen(props.buns)
  }

  return (
    <div className={bIStyles.burgerIngredientsContentContainer} onClick={handleClick}>
      <img
        className={bIStyles.burgerIngredientsImg}
        src={props.buns.image}
        alt="здесь будет картинка"
      />
      <div className={bIStyles.burgerIngredientsPrice}>
        <p className="text text_type_digits-default">{props.buns.price}</p>
        <div>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <div className={bIStyles.burgerIngredientsDescription1}>
        <p className="text text_type_main-small">{props.buns.name}</p>
      </div>
    </div>
  );
};

Bun.propTypes = {
  onOpen: PropTypes.func.isRequired,
  buns: ingredientTypes.isRequired,
};

export default Bun;
