import React, { SyntheticEvent, useEffect } from "react";
import UOStyles from './UserOrders.module.css'
import PPStyles from '../Profile/ProfilePage.module.css'
import OLStyles from '../OrderList/OrderList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { userOrdersWsUrl } from "../../api/api";
import { connect, disconnect } from "../../services/actions/userOrdersActions";
import { getCookie } from "../../utils/Cookie";
import Loader from "../../components/Loader/Loader";
import { NavLink } from "react-router-dom";
import {logout } from '../../services/actions/userActions'
import { TOrderInfo } from "../../utils/Types";
import OrderCard from "../../components/OrderCard/OrderCard";

const UserOrders = () => {
  const accessToken = getCookie("token");
  const token = accessToken?.split(" ")[1];

  const dispatch = useDispatch();
  
  let  userOrders  = useSelector((state: any) => state.userOrders.userOrders);

    debugger
   useEffect(() => {
     dispatch(connect(`${userOrdersWsUrl}?token=${token}`));
      return () => {
        dispatch(disconnect());
      };
   }, []);

    userOrders  = useSelector((state: any) => state.userOrders.userOrders);

  const logOut = (e:SyntheticEvent) => {
    e.preventDefault();
    //@ts-ignore
    logout(dispatch);
}
  return (
    <div className={UOStyles.mainContainer}>
      <div className={PPStyles.navbar}>
                <NavLink to='/profile' className={PPStyles.frame1} activeClassName={PPStyles.activeNavLink}>
                    <p className="text text_type_main-medium" > Профиль</p>
                </NavLink> 
                <NavLink to='/profile/orders' className={PPStyles.frame2} activeClassName={PPStyles.activeNavLink}>
                    <p className="text text_type_main-medium"> История заказов</p>
                </NavLink> 
                <div className={PPStyles.frame3} onClick={logOut} >
                    <p className="text text_type_main-medium"> Выход</p>
                </div> 
                <div className={PPStyles.caption}>
                    <p className="text text_type_main-small text_color_inactive"> В этом разделе вы можете изменить свои персональные данные</p>
                </div>
            </div>
      {userOrders === null ? (
        <Loader />
      ) : (
        
        <div className={`${UOStyles.contentContainer} + ${OLStyles.customScroll}`}>
          {userOrders.orders.map((order:TOrderInfo, index:number) => (
            <OrderCard item={order} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserOrders;
