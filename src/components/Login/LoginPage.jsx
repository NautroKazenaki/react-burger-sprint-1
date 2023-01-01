import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import LPStyles from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <div className={LPStyles.mainContainer}>
            <div className={LPStyles.contentContainer}>
                <div className={LPStyles.titleContainer}>
                    <p className="text text_type_main-large"> Вход</p>
                </div>
                <Input placeholder={'E-mail'}/>
                <Input placeholder={'Пароль'} icon={"ShowIcon"}/>
                <div className={LPStyles.buttonContainer}>
                    <Button><p className="text text_type_main-default"> Войти</p> </Button>
                </div>
            </div>
            <div className={LPStyles.additionalContainer}>
            <p className="text text_type_main-small text_color_inactive"> Вы — новый пользователь? <a href="/register"> Зарегистрироваться </a></p>
            <p className="text text_type_main-small text_color_inactive"> Забыли пароль? <a href="/forgot-password"> Восстановить пароль</a></p>
            </div>
        </div>
    )
}

export default LoginPage
