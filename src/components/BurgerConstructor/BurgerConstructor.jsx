import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import PropTypes from "prop-types";
import bCStyles from "./BurgerConstructor.module.css";
import {ingredientTypes} from '../../utils/PropTypes'
import ModalWindow from "../Modal/ModalWindow";
import OrderDetails from "../OrderDetails/OrderDetails";
import {dataContext} from '../../Context/dataContext'
import {checkResponse, POST_BURGER_INGREDIENTS_DATA_URL} from '../../api/api'


const BurgerConstructor = () => {
  const {data} = React.useContext(dataContext)
   const bun = data.find((ingredient) => ingredient.type === "bun");
   const nonBunIngredients = data.filter(
     (ingredient) => ingredient.type !== "bun"
   );
   const nonBunIngredientsMock = data.slice(14)
    console.log(bun)
   const getFinalPrice = () =>  bun.price*2 + nonBunIngredientsMock.reduce((acc, curr) => curr.type === "bun" ? acc + curr.price*2 : acc + curr.price, 0) 
  
   const [orderNumber, setOrderNumber] = useState(0)
  const getOrderNumber = () => {

    const burgerIngredientsId = data.map((item) => item._id);
  
    fetch(POST_BURGER_INGREDIENTS_DATA_URL, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            ingredients: burgerIngredientsId
        })
    })
    .then(checkResponse)
    .then((json) => {
      setOrderNumber(json.order.number);
     })
    .catch(err => console.log(err));
}

  const [isModalWindowShows, setIsModalWindowShows] = useState(false)
  const ModalWindowToggler = () => {
    setIsModalWindowShows(!isModalWindowShows)
    getOrderNumber()
    setOrderNumber('')
  }

  BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired,
  };

  



  return (
    <div className={bCStyles.burgerConstructorContainer}>
      <div className={bCStyles.burgerConstructorItemsContainer}>
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
        <Button onClick={ModalWindowToggler} htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
        {isModalWindowShows && (
          <ModalWindow onClose={ModalWindowToggler} >
            <OrderDetails  orderNumber={orderNumber}/>
          </ModalWindow>
        )}
      </div>
    </div>
  );
};

export default BurgerConstructor;
