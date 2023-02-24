import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { wsUrl } from "../../api/api";
import Loader from "../../components/Loader/Loader";
import OrderCard from "../../components/OrderCard/OrderCard";
import OrderListStatsBoard from "../../components/OrderListStatsBoard/OrderListStatsBoard";
import { connect, disconnect } from "../../services/actions/orderListActions";
import { TOrderInfo } from "../../utils/Types";

import OLStyles from "./OrderList.module.css";

const OrderList = () => {

 
  const dispatch = useDispatch();
  let  orderList = useSelector((state:any) => state.orderList);
  React.useEffect(() => {
    dispatch(connect(wsUrl));

    return () => {
      dispatch(disconnect());
    };
  }, []);
    orderList = useSelector((state:any) => state.orderList);
  
  return (
    <>
      {orderList.orders === null ? (
        <Loader />
      ) : (
        <div className={OLStyles.mainContainer}>
          <h4 className="text text_type_main-medium">Лента заказов</h4>
          <div className={OLStyles.ordersContainer}>
            <div className={`${OLStyles.contentContainer} + ${OLStyles.customScroll}`}>
                {orderList.orders.orders.map((item:TOrderInfo) => (
                    <OrderCard item={item} key={item._id} />
                ))}
              
            </div>
          </div>

          <div className={OLStyles.statsContainer}>
            <OrderListStatsBoard />
            <div className={OLStyles.allCompletedOrdersContainer}>
              <p className='text text_type_main-medium'>Выполнено за всё время:</p>
              <p className='text text_type_digits-large'>{orderList.orders.total}</p>
            </div>
            <div className={OLStyles.allCompletedOrdersForTodayContainer}>
              <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
              <p className='text text_type_digits-large'>{orderList.orders.totalToday}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderList;
