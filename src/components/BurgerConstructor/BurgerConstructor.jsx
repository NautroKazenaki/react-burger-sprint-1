import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import bCStyles from "./BurgerConstructor.module.css";

const ingredientTypes = PropTypes.shape({
  _id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
});

const BurgerConstructor = (props) => {

  const bun = props.data.find((ingredient) => ingredient.type === "bun");
  const nonBunIngredients = props.data.filter(
    (ingredient) => ingredient.type !== "bun"
  );

  BurgerConstructor.propTypes = {
    props: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired,
  };

  return (
    <div className={bCStyles.burgerConstructorContainer}>
      <div className={bCStyles.burgerConstructorItemsContainer}>
        <div className={bCStyles.burgerConstructorItemContainer}>
          <div className={bCStyles.burgerDragIconContainer}>
            <DragIcon type="primary" />
          </div>
          <div>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun.name + `(верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        </div>

        <div className={bCStyles.burgerConstructorItemContainer}>
          <div className={bCStyles.burgerDragIconContainer}>
            <DragIcon type="primary" />
          </div>

          <ConstructorElement
            text={nonBunIngredients[0].name}
            price={nonBunIngredients[0].price}
            thumbnail={nonBunIngredients[0].image}
          />
        </div>

        <div className={bCStyles.burgerConstructorItemContainer}>
          <div className={bCStyles.burgerDragIconContainer}>
            <DragIcon type="primary" />
          </div>
          <div>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bun.name + `(низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        </div>
      </div>
      
      <div className={bCStyles.burgerConstructorPayInfo}>
        <div className={bCStyles.burgerConstructorFinalPrice}>
          <p className="text text_type_digits-medium">5510</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default BurgerConstructor;
