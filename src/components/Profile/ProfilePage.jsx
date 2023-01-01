import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import PPStyles from './ProfilePage.module.css'
const ProfilePage = () => {
    return (
        <>
            <div className={PPStyles.navbar}>
                <div className={PPStyles.frame1}>
                    <p className="text text_type_main-medium"> Профиль</p>
                </div> 
                <div className={PPStyles.frame2}>
                    <p className="text text_type_main-medium"> История заказов</p>
                </div> 
                <div className={PPStyles.frame3}>
                    <p className="text text_type_main-medium"> Выход</p>
                </div> 
                <div className={PPStyles.caption}>
                    <p className="text text_type_main-small text_color_inactive"> В этом разделе вы можете изменить свои персональные данные</p>
                </div>
            </div>
            <div className={PPStyles.editProfileContainer}>
                <Input placeholder={"Имя"} icon={"EditIcon"}/>
                <Input placeholder={"Логин"} icon={"EditIcon"}/>
                <Input placeholder={"Пароль"} icon={"EditIcon"}/>
            </div>
        </>
    )
}

export default ProfilePage
