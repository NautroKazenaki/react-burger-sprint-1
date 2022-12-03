import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
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

const BurgerIngredients = ({data}) => {
  const buns = data.filter((ingredient) => ingredient.type === "bun");
  const sauses = data.filter((ingredient) => ingredient.type === "sauce");
  const mains = data.filter((ingredient) => ingredient.type === "main");
  

  const [isModalWindowShows, setIsModalWindowShows] = useState(false)
  const ModalWindowToggler = () => {
    setIsModalWindowShows(!isModalWindowShows)
  }

  const [clickedIngredient, setClickedIngredient] = useState(null)
  const burgerIngredientModalWindowShow = (ingredient) => {
    setClickedIngredient(ingredient)
    setIsModalWindowShows(!isModalWindowShows)
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
            <Bun buns={bun} key={bun.id} onOpen={burgerIngredientModalWindowShow} />
          ))}
        </div>

        <section className={bIStyles.burgerIngredientsBreadHeader}>
          <p className="text text_type_main-medium"> Соусы </p>
        </section>
        <div className={bIStyles.burgerIngredientsColumnsPuns}>
          {sauses.map((sause) => (
            <Sause sauses={sause} key={sause.id} onOpen={burgerIngredientModalWindowShow} />
          ))}
        </div>

        <section className={bIStyles.burgerIngredientsBreadHeader}>
          <p className="text text_type_main-medium"> Начинки </p>
        </section>
        <div className={bIStyles.burgerIngredientsColumnsPuns}>
          {mains.map((main) => (
            <MainIngredient mains={main} key={main.id} onOpen={burgerIngredientModalWindowShow}/>
          ))}
        </div>
      </div>
      {isModalWindowShows && (
        <ModalWindow onClose={ModalWindowToggler}>
          <IngredientsDetails onClose={ModalWindowToggler} ingredient={clickedIngredient} data={{data}.data} />
        </ModalWindow>
      )}
    </div>
  );
};

BurgerIngredients.propTypes = {
  props: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired,
};

export default BurgerIngredients;
