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
import {useHistory} from 'react-router-dom'
import {TIngredient} from '../../utils/Types'
const BurgerConstructor = () => {
  
  const dispatch = useDispatch();
 
  
    const data = useSelector(
      (state:any) => state.burgerIngredients.burgerIngredientsData
    );
  
     
   
    const bunsInitialState:TIngredient = data.find((ingredient:TIngredient) => ingredient.type === "bun");
    React.useEffect(() => {
      if (bunsInitialState !== null || undefined) {
        //@ts-ignore
        addIngredient(bunsInitialState, dispatch)
      }
       
    }, [bunsInitialState, dispatch])
  //  const bunsInitialState = React.useMemo(() => data.find((ingredient:TIngredient) => ingredient.type === "bun"), [data] ) 
   
    // React.useMemo(() => addIngredient(bunsInitialState, dispatch), [bunsInitialState, dispatch])
  
   const buns = useSelector((state:any) => state.burgerConstructor.buns)
  
  const nonBunIngredients = useSelector((state:any) => state.burgerConstructor.nonBunIngredients)
  const {isAuth, isUser} = useSelector((state:any) => state.userData )
  const history = useHistory();
  //@ts-ignore
  const [{}, dragRef] = useDrop({
    accept: 'ingredient',
    drop(bunsInitialState: TIngredient) {
      //@ts-ignore
      addIngredient(bunsInitialState, dispatch)
      //memoizedCallback(bunsInitialState, dispatch)
        }
    })
  


    const getFinalPrice = () => {
      const sum = [...nonBunIngredients, buns];
     
      return  sum.reduce((acc, curr) => curr?.type === 'bun' ? acc  + curr?.price * 2 : acc + curr?.price, 0);
  };

  const orderNumber = useSelector((state:any) => state.orderDetails.orderNumber)
 

  const isShowing = useSelector((state:any) => state.orderDetails.isShowing)
   
 
   const showModalWindow = () => {
     if (!isAuth || !isUser) {
      history.push('/login');
     }
     if (buns!== null  && nonBunIngredients.length > 0 && isAuth ) {
       //@ts-ignore
      dispatch(getOrderNumber(buns, nonBunIngredients))
     }
     
   };
  const hideModalWindow= () => {
    dispatch(hideOrderDetailsDataAC())
  };

  return (
    <div className={bCStyles.burgerConstructorContainer} ref={dragRef} data-testid='drop_box'>
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
               text={buns?.name + `(верх)`}
               price={buns?.price}
               thumbnail={buns?.image}
               extraClass="string"
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
              text={buns?.name + `(низ)`}
              price={buns?.price}
              thumbnail={buns?.image}
              extraClass="string"
            />
          </div>
        </div>
      </div>

      <div className={bCStyles.burgerConstructorPayInfo}>
        <div className={bCStyles.burgerConstructorFinalPrice}>
          
          <p className="text text_type_digits-medium" >
            {getFinalPrice().toString()}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          onClick={showModalWindow}
          htmlType="button"
          type="primary"
          size="medium"
          data-testid='button'
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
