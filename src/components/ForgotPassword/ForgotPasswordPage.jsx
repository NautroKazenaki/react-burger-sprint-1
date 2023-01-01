import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import FPPStyles from './ForgotPasswordPage.module.css'
const ForgotPasswordPage = () => {
    return (
        <div className={FPPStyles.mainContent}>
            <div className={FPPStyles.titleContainer}>
                <p className="text text_type_main-large"> Восстановление пароля</p>
            </div>
            <Input placeholder={"Укажите E-mail"}/>
            <div className={FPPStyles.buttonContainer}>
                <Button>Восстановить</Button>
            </div>
            <div className={FPPStyles.additionalContainer}>
                <p className="text text_type_main-small text_color_inactive"> Вспомнили пароль? <a href="/login">Войти</a></p>
            </div>
        </div>
    )
}

export default ForgotPasswordPage
