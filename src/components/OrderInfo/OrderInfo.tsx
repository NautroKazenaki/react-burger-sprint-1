import React from 'react'
import OIStyles from './OrderInfo.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { wsUrl } from '../../api/api';
import { connect, disconnect } from '../../services/actions/orderListActions';
import { TIngredient, TOrderInfo } from '../../utils/Types';
import Loader from '../Loader/Loader';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { OrderInfoItem } from './OrderInfoItem';

const OrderInfo = () => {
debugger
    interface IOrderInfoParams{
        feedNumber: string | undefined;
    }

    const  orderList  = useSelector((state:any) => state.orderList);
    
    const  ingredients  = useSelector((state:any) => state.burgerIngredients.burgerIngredientsData);
    const  feedNumber  = useParams<IOrderInfoParams>();
    const orderNumber = feedNumber.feedNumber
    console.log(orderNumber)

    const dispatch = useDispatch();
    React.useEffect(() => {
        if (currentOrder === undefined) {
            dispatch(connect(wsUrl));
        }        
        return () => {
            dispatch(disconnect());
        }   
    }, [])

    const currentOrder = orderList?.orders.orders.find((order:TOrderInfo) => {
        if(order.number == orderNumber) {
            return order
        }
    })

    const currentItem = currentOrder?.ingredients
    .map((item:string) => ingredients.find((element:TIngredient) => element._id === item))
    .filter((item:TIngredient) => !!item);

    const currentPrice = () => {
        const sum = currentItem;
        return sum?.reduce((acc:number, curr:TIngredient) => acc + curr.price, 0);
    };
     const getCount = (array: Array<TIngredient>) => {
        const result = {} as any;
        array.forEach((object) => {
          const key = `${object._id}`;
          if(!result[key]) {
            result[key] = {...object, count: 0};
          }
          result[key].count += 1;
        });
        return Object.values(result);
      }
    //@ts-ignore
    const duplicatedItem:TIngredient[]|undefined = currentItem && getCount(currentItem)
    .filter((item) => !!item);

    const singleElementFinder = (arr : Array<String>) => {
        return Array.from(new Set(arr));
    }

    return (
        <div>
            {!currentOrder && (
                <Loader  />
            )}
            {currentOrder && (
                <>
                    <span className="text text_type_digits-default">{`#${currentOrder?.number}`}</span>
                    <p className={`${OIStyles.orderName} text text_type_main-default`}>{currentOrder?.name}</p>
                    {currentOrder?.status === 'done' ? (
                        <p className={`${OIStyles.orderDone} text text_type_main-small`}>Выполнен</p>
                    ): (
                        <p className={`${OIStyles.orderPending} text text_type_main-small`}>Готовится</p>

                    )}
                    <p className={`${OIStyles.title} text text_type_main-default`}>Состав: </p>
                    <div className={OIStyles.orderComposition}>
                        {singleElementFinder(currentOrder?.ingredients).map((ingredient:String, index:number) => (
                            <OrderInfoItem item={ingredient} key={index} count={duplicatedItem} />
                        ))}
                    </div>
                    <div className={OIStyles.order_info}>
                        <FormattedDate className='text text_type_main-default text_color_inactive' date={currentOrder ? new Date(currentOrder.createdAt): new Date() } />
                        <div className={OIStyles.price}>
                            <span className='text text_type_digits-default'>{currentPrice()}</span>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default OrderInfo
