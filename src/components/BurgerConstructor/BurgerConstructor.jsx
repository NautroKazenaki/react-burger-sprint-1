import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

import bCStyles from "./BurgerConstructor.module.css";

import ModalWindow from "../Modal/ModalWindow";
import OrderDetails from "../OrderDetails/OrderDetails";

import { useSelector, useDispatch } from "react-redux";
import { addIngredient } from "../../services/actions/burgerConstructorDataActions";
import {getOrderNumber, hideOrderDetailsDataAC} from '../../services/actions/orderDetailsDataActions'
import BurgerConstructorElementContainer from "./BurgerConstructorElementContainer";
import { useDrop } from "react-dnd";


const BurgerConstructor = () => {
  
  const dispatch = useDispatch();

   const data = useSelector(
     (state) => state.burgerIngredients.burgerIngredientsData
   );
   const bunsInitialState = data.find((ingredient) => ingredient.type === "bun");
   React.useMemo(() => addIngredient(bunsInitialState, dispatch), [bunsInitialState])
   const buns = useSelector((state) => state.burgerConstructor.buns)
   
  
  
  const nonBunIngredients = useSelector((state) => state.burgerConstructor.nonBunIngredients)
  
  const [{}, dragRef] = useDrop({
    accept: 'ingredient',
    drop(ingredient) {
      
      addIngredient(ingredient, dispatch)
        }
    })
  


    const getFinalPrice = () => {
      const sum = [...nonBunIngredients, buns[0]];
      return sum.reduce((acc, curr) => curr.type === 'bun' ? acc  + curr.price * 2 : acc + curr.price, 0);
  };

  const orderNumber = useSelector((state) => state.orderDetails.orderNumber)
 

  const isShowing = useSelector((state) => state.orderDetails.isShowing)
   
 
   const showModalWindow = () => {
     dispatch(getOrderNumber(buns, nonBunIngredients))
   };
  const hideModalWindow= () => {
    dispatch(hideOrderDetailsDataAC())
  };

  return (
    <div className={bCStyles.burgerConstructorContainer} ref={dragRef}>
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
              text={buns[0].name + `(верх)`}
              price={buns[0].price}
              thumbnail={buns[0].image}
            />
          </div>
        </div>
        <BurgerConstructorElementContainer />

        <div className={bCStyles.burgerConstructorItemContainer}>
          <div className={bCStyles.burgerDragIconContainerForBuns}>
            <DragIcon type="primary" />
          </div>
          <div>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={buns[0].name + `(низ)`}
              price={buns[0].price}
              thumbnail={buns[0].image}
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
