import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import bIStyles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import {ingredientTypes} from '../../utils/PropTypes'


const MainIngredient = (props) => {

  const handleClick = (e) => {
    props.onOpen(props.mains)
  }

  return (
    <div className={bIStyles.burgerIngredientsContentContainer} onClick={handleClick}>
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

MainIngredient.propTypes = {
  props: {
    mains: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired,
    key: PropTypes.number,
    onOpen: PropTypes.func
  } 
};

export default MainIngredient;
