import React from 'react'
import OIStyles from '../OrderInfo/OrderInfo.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { wsUrl } from '../../api/api';
import { connect, disconnect } from '../../services/actions/orderListActions';
import { TIngredient, TOrderInfo } from '../../utils/Types';
import Loader from '../Loader/Loader';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { OrderInfoItem } from '../OrderInfo/OrderInfoItem';

const UserOrderInfo = () => {
debugger
    interface IOrderInfoParams{
         orderNumber: string | undefined;
        //  feedNumber: string | undefined;
    }

    const  orderList  = useSelector((state:any) => state.orderList);
    
    const  ingredients  = useSelector((state:any) => state.burgerIngredients.burgerIngredientsData);
    const  feedNumber  = useParams<IOrderInfoParams>();
    //  const orderNumber = feedNumber.feedNumber
     const orderNumber = feedNumber.orderNumber
    
    let currentOrder:TOrderInfo = {_id: '', ingredients: [''], status: '', name:'', number: '', createdAt: '', updatedAt:''
    }

    const dispatch = useDispatch();
    React.useEffect(() => {
        console.log(orderNumber)
        if (currentOrder === undefined) {
            dispatch(connect(wsUrl));
        }        
        return () => {
            dispatch(disconnect());
        }   
    }, [])
    React.useEffect(() => {
        console.log(orderNumber)
        if (orderList.orders === null) {
            dispatch(connect(wsUrl));
        }        
        return () => {
            dispatch(disconnect());
        }   
    }, [])
    if (orderList.orders !== null) {
         currentOrder = orderList?.orders.orders.find((order:TOrderInfo) => {
            if(order.number == orderNumber) {
                return order
            }
        })
    }
     

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
            {currentOrder !== undefined && (
                <div>
                    <div className={OIStyles.orderNumberContainer}>
                        <span className="text text_type_digits-default">{`#${currentOrder?.number}`}</span>
                    </div>
                    
                    <p className={`${OIStyles.orderName} text text_type_main-medium`}>{currentOrder?.name}</p>
                    {currentOrder?.status === 'done' ? (
                        <p className={`${OIStyles.orderDone} text text_type_main-small`}>Выполнен</p>
                    ): (
                        <p className={`${OIStyles.orderPending} text text_type_main-small`}>Готовится</p>

                    )}
                    <p className={`${OIStyles.title} text text_type_main-medium`}>Состав: </p>
                    <div className={OIStyles.orderComposition}>
                        {singleElementFinder(currentOrder?.ingredients).map((ingredient:String, index:number) => (
                            <OrderInfoItem item={ingredient} key={index} count={duplicatedItem} />
                        ))}
                    </div>
                    <div className={OIStyles.orderData}>
                        <FormattedDate className='text text_type_main-default text_color_inactive' date={currentOrder ? new Date(currentOrder.createdAt): new Date() } />
                        <div className={OIStyles.orderPrice}>
                            <span className='text text_type_digits-default'>{currentPrice()}</span>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserOrderInfo