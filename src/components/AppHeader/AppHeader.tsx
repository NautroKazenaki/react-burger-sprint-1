import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import headerStyles from "./AppHeader.module.css";
import {NavLink, useRouteMatch} from 'react-router-dom'

const AppHeader = () => {
  const isConstructor = !!useRouteMatch({path: '/', exact: true})
  const isOrderList = !!useRouteMatch({path: '/orderList'})
  const isProfile = !!useRouteMatch({path: '/profile'})
  return (
    <div className={headerStyles.headerContainer}>
      <NavLink to="/" className={headerStyles.headerConstructorLinkContainer} activeClassName={headerStyles.active} exact >
        
        <BurgerIcon type={isConstructor ? 'primary' : "secondary"}  />
        
        <p className={headerStyles.headerText }>
          Конструктор
        </p>
      </NavLink>

      <NavLink to="/orderList" className={headerStyles.headerOrderListLinkContainer} activeClassName={headerStyles.active}>
        <ListIcon type={isOrderList ? 'primary' : "secondary"} />
        <p className={headerStyles.headerText} >Лента Заказов</p>
      </NavLink>

      <div className={headerStyles.headerLogoContainer}>
        <Logo />
      </div>

      <NavLink to="/profile" className={headerStyles.headerProfileLinkContainer} activeClassName={headerStyles.active}>
        <ProfileIcon type={isProfile ? 'primary' : "secondary"} />
        <p className={headerStyles.headerText}>Личный кабинет</p>
      </NavLink>
    </div>
  );
};

export default AppHeader;
