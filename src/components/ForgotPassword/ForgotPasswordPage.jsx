import { Button, EmailInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react'
import FPPStyles from './ForgotPasswordPage.module.css'
import {Link, Redirect}  from 'react-router-dom'
import {forgotPassword} from '../../services/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
const ForgotPasswordPage = () => {
    const {isUser, isAuth} = useSelector((state) => state.userData)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')

    const changePassword = (e, email) => {
        e.preventDefault()
        dispatch(forgotPassword(email))
    }
    return (
        <div className={FPPStyles.mainContent}>
            {isAuth && (
                <Redirect to='/' />
            )}
            {isUser && (
                <Redirect to='/reset-password' />
            )}
            <form onSubmit={changePassword} className={FPPStyles.mainContent}>
                <div className={FPPStyles.titleContainer}>
                    <p className="text text_type_main-medium"> Восстановление пароля</p>
                </div>
                <EmailInput placeholder={"Укажите E-mail"} value={email} name={email} onChange={(e) => setEmail(e.target.value)}/>
                <div className={FPPStyles.buttonContainer}>
                    <Button>Восстановить</Button>
                </div>
                <div className={FPPStyles.additionalContainer}>
                    <p className="text text_type_main-small text_color_inactive"> Вспомнили пароль? <Link to={"/login"}>Войти</Link></p>
                </div>
            </form>
            
        </div>
    )
}

export default ForgotPasswordPage
