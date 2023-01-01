import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import RPStyles from './RegistrationPage.module.css'

const RegistrationPage = () => {
    return (
        <div className={RPStyles.mainContainer}>
            <div className={RPStyles.contentContainer}>
                <div className={RPStyles.titleContainer}>
                    <p className="text text_type_main-default"> Регистрация </p>
                </div>
                <Input placeholder={'Имя'}/>
                <Input placeholder={'E-mail'}/>
                <Input placeholder={'Пароль'} icon={'ShowIcon'}/>
                <div className={RPStyles.buttonContainer}>
                    <Button htmlType="button" type="primary" size="medium"> Зарегистрироваться </Button>
                </div>

            </div>
            <div className={RPStyles.additionalContainer}>
                <p className="text text_type_main-small text_color_inactive"> Уже зарегистрированы?</p>
                <p className="text text_type_main-small"><a href="/login">войти</a></p>
            </div>
        </div>
    )
}

export default RegistrationPage
