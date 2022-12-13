import PropTypes from "prop-types";
import {
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import bIStyles from "./BurgerIngredients.module.css";

import BurgerIngredientsTabs from "./BurgerIngredientsTabs";
import Bun from "./Bun";
import Sause from "./Sause";
import MainIngredient from "./MainIngredient";
import {ingredientTypes} from '../../utils/PropTypes'
import ModalWindow from "../Modal/ModalWindow";
import IngredientsDetails from "../IngredientDetails/IngredientsDetails";
import {showBurgerElementDataAC, hideBurgerElementDataAC} from '../../services/actions/burgerElementDataActions'
import {useSelector, useDispatch} from 'react-redux'

const BurgerIngredients = () => {
const dispatch = useDispatch()

 const data = useSelector((state) => state.burgerIngredients.burgerIngredientsData)
 const clickedIngredient = useSelector((state) => state.burgerElement.clickedIngredient)
 const isShowing = useSelector((state) => state.burgerElement.isShowing)

  const buns = data.filter((ingredient) => ingredient.type === "bun");
  const sauses = data.filter((ingredient) => ingredient.type === "sauce");
  const mains = data.filter((ingredient) => ingredient.type === "main");
  

  const showModalWindow = (ingredient) => {
    dispatch(showBurgerElementDataAC(ingredient))
  }

  const hideModalWindow = () => {
    dispatch(hideBurgerElementDataAC())
  }

  return (
    <div
      className={`${bIStyles.burgerIngredientsContainer} + ${bIStyles.customScroll}`}
    >
      <div className={bIStyles.burgerHeaderTextContainer}>
        <p className="text text_type_main-large"> Соберите бургер </p>
      </div>

      <div
        className={`${bIStyles.burgerTabsContainer} + ${bIStyles.customScroll}`}
      >
        <BurgerIngredientsTabs />
      </div>

      <div
        className={`${bIStyles.burgerTabsContentContainer} + ${bIStyles.customScroll}`}
      >
        <section className={bIStyles.burgerIngredientsBreadHeader}>
          <p className="text text_type_main-medium"> Булки </p>
        </section>
        <div className={bIStyles.burgerIngredientsColumnsPuns}>
          <div className={bIStyles.burgerIngredientsCounter}>
            <Counter count={1} size="default" extraClass="m-1" />
          </div>
          {buns.map((bun) => (
            <Bun buns={bun} key={bun._id} onOpen={showModalWindow} />
          ))}
        </div>

        <section className={bIStyles.burgerIngredientsBreadHeader}>
          <p className="text text_type_main-medium"> Соусы </p>
        </section>
        <div className={bIStyles.burgerIngredientsColumnsPuns}>
          {sauses.map((sause) => (
            <Sause sauses={sause} key={sause._id} onOpen={showModalWindow} />
          ))}
        </div>

        <section className={bIStyles.burgerIngredientsBreadHeader}>
          <p className="text text_type_main-medium"> Начинки </p>
        </section>
        <div className={bIStyles.burgerIngredientsColumnsPuns}>
          {mains.map((main) => (
            <MainIngredient mains={main} key={main._id} onOpen={showModalWindow}/>
          ))}
        </div>
      </div>
      {isShowing && (
        <ModalWindow onClose={hideModalWindow} title="Детали ингредиента">
          <IngredientsDetails onClose={hideModalWindow} ingredient={clickedIngredient}  />
        </ModalWindow>
      )}
    </div>
  );
};



export default BurgerIngredients;
