import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import headerStyles from "./AppHeader.module.css";

const AppHeader = () => {
  return (
    <div className={headerStyles.headerContainer}>
      <a href="/" className={headerStyles.headerConstructorLinkContainer}>
        <BurgerIcon type="primary" className={headerStyles.headerLinkIcon} />
        <p className={`${headerStyles.headerText} + ${headerStyles.active}`}>
          Конструктор
        </p>
      </a>

      <a href="#" className={headerStyles.headerOrderListLinkContainer}>
        <ListIcon type="secondary" className={headerStyles.headerLinkIcon} />
        <p className={headerStyles.headerText}>Лента Заказов</p>
      </a>

      <div className={headerStyles.headerLogoContainer}>
        <Logo />
      </div>

      <a href="/profile" className={headerStyles.headerProfileLinkContainer}>
        <ProfileIcon type="secondary" className={headerStyles.headerLinkIcon} />
        <p className={headerStyles.headerText}>Личный кабинет</p>
      </a>
    </div>
  );
};

export default AppHeader;
