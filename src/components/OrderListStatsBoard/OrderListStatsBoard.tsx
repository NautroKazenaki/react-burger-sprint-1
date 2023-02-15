import React from "react";
import { useSelector } from "react-redux";
import OLSBStyles from "./OrderListStatsBoard.module.css";
import OLStyles from "../../pages/OrderList/OrderList.module.css";
import Loader from "../Loader/Loader";
import { TOrderInfo } from "../../utils/Types";
const OrderListStatsBoard = () => {
  const { orders } = useSelector((state: any) => state.orderList);
  return (
    <div className={OLStyles.ordersBoardContainer}>
      <div className={OLStyles.ordersDoneContainer}>
        <p className="text text_type_main-medium">Готовы:</p>
        {orders !== null ? (
          <ul className={OLSBStyles.doneList}>
            {orders.orders.map(
              (item: TOrderInfo, index: number) =>
                item.status === "done" && (
                  <li
                    key={index}
                    className={`${OLSBStyles.doneListShow} text text_type_digits-default`}
                  >
                    {item.number}
                  </li>
                )
            )}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
      <div className={OLStyles.ordersInWorkContainer}>
        <p className='text text_type_main-medium'>В работе:</p>
        {orders !== null ? (
            <ul className={OLSBStyles.doneList}>
            { orders.orders.map((item: TOrderInfo, index:number) => (
                item.status !== 'done' && (
                    <li key={index} className={`${OLSBStyles.inOrder} text text_type_digits-default`}>{item.number}</li>
                )))}
            </ul>
            ) : (
                <Loader />
            )}
        {/* <div className={OLStyles.inWorkListContainer}>
          <p>номер заказа</p>
        </div> */}
      </div>
    </div>
  );
};

export default OrderListStatsBoard;
