import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import bIStyles from './BurgerIngredients.module.css'

import BurgerIngredientsTabs from './BurgerIngredientsTabs'
import Bun from './Bun';
import Sause from './Sause';
import MainIngredient from './MainIngredient';

const BurgerIngredients = (props) => {
    const buns = props.data.filter(ingredient => ingredient.type === 'bun');
    const sauses = props.data.filter(ingredient => ingredient.type === 'sauce')
    const mains = props.data.filter(ingredient => ingredient.type === 'main');
    
    
    return (
      <div
        className={`${bIStyles.burgerIngredientsContainer} + ${bIStyles.customScroll}`}
      >
        <div className={bIStyles.burgerHeaderTextContainer}>
          <p className="text text_type_main-large"> Соберите бургер </p>
        </div>

        <div className={`${bIStyles.burgerTabsContainer} + ${bIStyles.customScroll}`}>
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
                <Bun buns={bun} key={bun.id} />
              ))}
          </div>

          <section className={bIStyles.burgerIngredientsBreadHeader}>
            <p className="text text_type_main-medium"> Соусы </p>
          </section>
          <div className={bIStyles.burgerIngredientsColumnsPuns}>
                {sauses.map((sause) => (
                    <Sause sauses={sause} key={sause.id}/>
                ))}
          </div>

          <section className={bIStyles.burgerIngredientsBreadHeader}>
            <p className="text text_type_main-medium"> Начинки </p>
          </section>
          <div className={bIStyles.burgerIngredientsColumnsPuns}>
                  {mains.map((main) => (
                      <MainIngredient mains={main} key={main.id}/>
                  ))}
          </div>
        </div>
      </div>
    );
}
const ingredientTypes = PropTypes.shape({
    _id: PropTypes.number,
   name:PropTypes.string,
   type:PropTypes.string,
   proteins:PropTypes.number,
   fat:PropTypes.number,
   carbohydrates:PropTypes.number,
   calories:PropTypes.number,
   price:PropTypes.number,
   image:PropTypes.string,
   image_mobile:PropTypes.string,
   image_large:PropTypes.string,
   __v:PropTypes.number
})
BurgerIngredients.propTypes = {
    props: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired
}

export default BurgerIngredients
