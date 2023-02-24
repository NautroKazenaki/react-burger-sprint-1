import React from "react";
import OCStyles from './OrderCard.module.css'
import OLStyles from '../../pages/OrderList/OrderList.module.css'
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { TIngredient, TOrderInfo } from "../../utils/Types";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderCardImages from "./OrderCardImages";

const OrderCard = ({ item: orderInfo }: { item: TOrderInfo }) => {
  const location = useLocation();

  const orderNumber= orderInfo.number;
  
  const  ingredients  = useSelector((state: any) => state.burgerIngredients.burgerIngredientsData);
  


  const ingredientCounter = orderInfo.ingredients
    .map((orderIngredientsString: string) =>
      ingredients.find(
        (element: TIngredient) => element._id === orderIngredientsString
      )
    )
    .filter((item: TIngredient) => !!item);

  const currentPrice = () => {
    const sum = [...ingredientCounter];
    return sum.reduce((acc, curr) => acc + curr.price, 0);
  };
  return (
    <Link
        key={orderNumber}
        to={{
        pathname: `/feed/${orderNumber}`,
        state: { background: location },
        }}
        className={OCStyles.link}
    > 
     <div className={OLStyles.orderCard}>
                <div className={OLStyles.cardTitle}>
                  <p className="text text_type_digits-default">{`#${orderInfo.number}`}</p>
                  <FormattedDate className='text text_type_main-default text_color_inactive' date={new Date(orderInfo.createdAt)} />
                </div>
                
                <div className={OLStyles.burgerTitle}>
                  <p className="text text_type_main-medium">{orderInfo.name}</p>
                  {orderInfo.status === 'done' ? (
                    <p className={`${OCStyles.ready} text text_type_main-small`}>Выполнен</p>
                    ): (
                        <p className={`${OCStyles.status} text text_type_main-small`}>Готовится</p>
                )}
                </div>
                <div className={OLStyles.ingredientsAndPriceInfoContainer}>
                  <div className={OLStyles.ingredientsContainer}>
                    {ingredientCounter.slice(0, 6).map((item, index) => (
                        <OrderCardImages item={item} key={index} />
                    ))}
                    {ingredientCounter.length > 5 &&(
                    <p className={`${OCStyles.counter} text text_type_digits-default`}>{`+${ingredientCounter.length - 5}`}</p>
                    )}
                  </div>
                  <div className={OLStyles.priceContainer}>
                    <span className={`${OCStyles.price} text text_type_digits-default`}>{currentPrice()}</span>
                    <CurrencyIcon type="primary" />
                  </div>
                </div>
              </div>  
    </Link>
  );
};

export default OrderCard;
