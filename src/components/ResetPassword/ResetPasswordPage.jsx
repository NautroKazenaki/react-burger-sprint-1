import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import RPPStyles from './ResetPasswordPage.module.css'
const ResetPasswordPage = () => {
    return (
        <div className={RPPStyles.mainContent}>
            <div className={RPPStyles.contentContainer}>
                <div className={RPPStyles.titleContainer}>
                    <p className="text text_type_main-large">Восстановление пароля</p>
                </div>
                <Input placeholder={"Введите новый пароль"} icon={'ShowIcon'} type="password"/>
                <Input placeholder={"Введите код из письма"}/>
                <div className={RPPStyles.buttonContainer}>
                    <Button> Сохранить</Button>
                </div>
            </div>
            <div className={RPPStyles.additionalContainer}>
                <p className="text text_type_main-small text_color_inactive">Вспомнили пароль? <a href="/login"> Войти</a></p>
            </div>
        </div>
    )
}

export default ResetPasswordPage
