import { Button,  EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, {useState} from 'react'
import LPStyles from './LoginPage.module.css'
import {Link, useLocation, Redirect} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../services/actions/userActions'

type TLocation = {
    from: Location
  }

const LoginPage = () => {
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { isAuth } = useSelector((state:any) => state.userData)
    const dispatch = useDispatch();

    const location = useLocation<TLocation>();

    const logIn = (e:React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();
        //@ts-ignore
        dispatch(login(email, password));
    }

    return (
        <div className={LPStyles.mainContainer}>
            {isAuth && (
                    <Redirect to={location.state?.from || '/'} />
            )}
            <form onSubmit={logIn}>
                <div className={LPStyles.contentContainer}>
                    <div className={LPStyles.titleContainer}>
                        <p className="text text_type_main-large"> Вход</p>
                    </div>
                    <EmailInput placeholder={'E-mail'} value={email}  onChange={e => setEmail(e.target.value)}/>
                    <PasswordInput placeholder={'Пароль'} icon={"ShowIcon"}  value={password}  onChange={e => setPassword(e.target.value)}/>
                    <div className={LPStyles.buttonContainer}>
                        <Button htmlType="submit"><p className="text text_type_main-default"> Войти</p> </Button>
                    </div>
                </div>
                <div className={LPStyles.additionalContainer}>
                    <p className="text text_type_main-small text_color_inactive"> Вы — новый пользователь? <Link to={"/register"}> Зарегистрироваться </Link></p>
                    <p className="text text_type_main-small text_color_inactive"> Забыли пароль? <Link to={"/forgot-password"}> Восстановить пароль</Link></p>
                </div>
            </form>
            
        </div>
    )
}

export default LoginPage
