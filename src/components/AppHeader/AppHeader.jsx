import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import headerStyles from './AppHeader.module.css'

const AppHeader = () => {
    return (
        <div className={headerStyles.headerContainer}>
            <div className={headerStyles.headerButtonContainer}>
                <BurgerIcon type="primary" className={headerStyles.headerButtonIcon} />
                    <p className={headerStyles.headerText}>
                       Конструктор
                    </p>
            </div>
          
            <div className={headerStyles.headerOrderListButtonContainer}>
                <ListIcon type="primary" className={headerStyles.headerButtonIcon} />
                <p className={headerStyles.headerText}>
                    Лента Заказов
                </p>
            </div>

            <div className={headerStyles.headerLogoContainer}>
                <Logo />
            </div>

            <div className={headerStyles.headerProfileButtonContainer}>
                <ProfileIcon type="primary" className={headerStyles.headerButtonIcon} />
                    <p className={headerStyles.headerText}>
                       Личный кабинет
                    </p>
            </div>
           
        </div>
    )
}

export default AppHeader
