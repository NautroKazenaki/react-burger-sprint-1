import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, {useState} from 'react'
import RPPStyles from './ResetPasswordPage.module.css'
import {Link, useLocation, Redirect} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {resetPassword} from '../../services/actions/userActions'
const ResetPasswordPage = () => {

    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const { isUser, isUserPasswordChanged } = useSelector((state) => state.userData);
    const dispatch = useDispatch();

    const location = useLocation();

    const makeNewPassword = (e) => {
        e.preventDefault();
        dispatch(resetPassword(password, token));
    }
    

    return (
        <div className={RPPStyles.mainContent}>
            {!isUser && (
                <Redirect to={location.state?.from || '/'} />
            )}
            {isUser && !isUserPasswordChanged && (
                <form onSubmit={makeNewPassword}>
                    <div className={RPPStyles.contentContainer}>
                        <div className={RPPStyles.titleContainer}>
                            <p className="text text_type_main-large">Восстановление пароля</p>
                        </div>
                        <PasswordInput placeholder={"Введите новый пароль"} icon={'ShowIcon'} type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                        <Input placeholder={"Введите код из письма"} type={'text'} value={token} onChange={(event) => setToken(event.target.value)}/>
                        <div className={RPPStyles.buttonContainer}>
                            <Button htmlType="submit"> Сохранить</Button>
                        </div>
                    </div>
                    <div className={RPPStyles.additionalContainer}>
                        <p className="text text_type_main-small text_color_inactive">Вспомнили пароль? <Link to={"/login"}> Войти</Link></p>
                    </div>
            </form>
            ) }
            
            
        </div>
    )
}

export default ResetPasswordPage
