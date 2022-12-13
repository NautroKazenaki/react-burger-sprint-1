import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import PropTypes from "prop-types";
import bCStyles from "./BurgerConstructor.module.css";
import { ingredientTypes } from "../../utils/PropTypes";
import ModalWindow from "../Modal/ModalWindow";
import OrderDetails from "../OrderDetails/OrderDetails";
import { checkResponse, POST_BURGER_INGREDIENTS_DATA_URL } from "../../api/api";
import { useSelector, useDispatch } from "react-redux";
import {
  setIngredientData,
  setBunAC,
  setNonBunIngredientAC,
} from "../../services/actions/burgerConstructorDataActions";
import {getOrderNumber, showOrderDetailsDataAC, hideOrderDetailsDataAC, getOrderNumberDataSuccessAC} from '../../services/actions/orderDetailsDataActions'

const BurgerConstructor = () => {
  
  const dispatch = useDispatch();

  const data = useSelector(
    (state) => state.burgerIngredients.burgerIngredientsData
  );

  const bun = data.find((ingredient) => ingredient.type === "bun");

  const setBun = (bun) => {
    dispatch(setBunAC(bun));
  };
  setBun(bun);

  const nonBunIngredients = data.filter(
    (ingredient) => ingredient.type !== "bun"
  );
  const nonBunIngredientsMock = data.slice(14);

  const setNonBunIngredientsMock = (nonBunIngredientsMock) => {
    dispatch(setNonBunIngredientAC(nonBunIngredientsMock));
  };
  setNonBunIngredientsMock(nonBunIngredientsMock);

    const getFinalPrice = () => {
      const sum = [...nonBunIngredientsMock, bun];
      return sum.reduce((acc, curr) => curr.type === 'bun' ? acc  + curr.price * 2 : acc + curr.price, 0);
  };

  const orderNumber = useSelector((state) => state.orderDetails.orderNumber)
 

  const isShowing = useSelector((state) => state.orderDetails.isShowing)
   
 
   const showModalWindow = () => {
     dispatch(getOrderNumber(bun, nonBunIngredients))
   };
  const hideModalWindow= () => {
    dispatch(hideOrderDetailsDataAC())
  };

  return (
    <div className={bCStyles.burgerConstructorContainer}>
      <div
        className={`${bCStyles.burgerConstructorItemsContainer} + ${bCStyles.customScroll}`}
      >
        <div className={bCStyles.burgerConstructorItemContainer}>
          <div className={bCStyles.burgerDragIconContainerForBuns}>
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
                key={ingredient._id}
              />
            ))}
          </div>
        </div>

        <div className={bCStyles.burgerConstructorItemContainer}>
          <div className={bCStyles.burgerDragIconContainerForBuns}>
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
          <p className="text text_type_digits-medium">{getFinalPrice()}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          onClick={showModalWindow}
          htmlType="button"
          type="primary"
          size="medium"
        >
          Оформить заказ
        </Button>
        {isShowing && (
          <ModalWindow onClose={hideModalWindow}>
            <OrderDetails orderNumber={orderNumber} />
          </ModalWindow>
        )}
      </div>
    </div>
  );
};

export default BurgerConstructor;
