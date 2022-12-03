import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import PropTypes from "prop-types";
import bCStyles from "./BurgerConstructor.module.css";
import ingredientTypes from '../../utils/PropTypes'
import ModalWindow from "../ModalWindow/ModalWindow";
import OrderDetails from "../OrderDetails/OrderDetails";


const BurgerConstructor = ({data}) => {
  debugger
  console.log({data})
   const bun = data.find((ingredient) => ingredient.type === "bun");
   const nonBunIngredients = data.filter(
     (ingredient) => ingredient.type !== "bun"
   );
   const nonBunIngredientsMock = data.slice(14)
   console.log(nonBunIngredientsMock)

  const [isModalWindowShows, setIsModalWindowShows] = useState(false)
  const ModalWindowToggler = () => {
    setIsModalWindowShows(!isModalWindowShows)
  }

  BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired,
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
            <div>
              {nonBunIngredientsMock.map((ingredient) => (
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
              />
              ))}
            </div>
          
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
        <Button onClick={ModalWindowToggler} htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
        {isModalWindowShows && (
          <ModalWindow onClose={ModalWindowToggler}>
            <OrderDetails onClose={ModalWindowToggler} />
          </ModalWindow>
        )}
      </div>
    </div>
  );
};

export default BurgerConstructor;
