import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, {useState, useRef } from 'react'
import RPStyles from './RegistrationPage.module.css'
import {Link,  useLocation, Redirect} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {createAccount} from '../../services/actions/userActions'

type TLocation = {
    from: Location
  }

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const {isAuth} = useSelector((state:any) => state.userData);
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const location = useLocation<TLocation>();
    

    const createNewAccount = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //@ts-ignore
        dispatch(createAccount(email, password, name))
      }

    return (
        <div className={RPStyles.mainContainer}>
            {isAuth && (
                <Redirect to={location.state?.from || '/'} />
            )}
            <form onSubmit={createNewAccount}>
                <div className={RPStyles.contentContainer} >
                    <div className={RPStyles.titleContainer}>
                        <p className="text text_type_main-default"> Регистрация </p>
                    </div>
                    <Input placeholder={'Имя'} type={'text'} onChange={e => setName(e.target.value)} value={name}  ref={inputRef}/>
                    <Input placeholder={'E-mail'} name={'email'} value={email} onChange={(e) => setEmail(e.target.value)} ref={inputRef}/>
                    
                    <Input placeholder={'Пароль'} icon={'ShowIcon'} name={'password'}  value={password} onChange={(e) => setPassword(e.target.value)} ref={inputRef} type={'password'}/>
                    
                    <div className={RPStyles.buttonContainer}>
                        <Button htmlType="submit" type="primary" size="medium"> Зарегистрироваться </Button>
                    </div>

                </div>
                <div className={RPStyles.additionalContainer}>
                    <p className="text text_type_main-small text_color_inactive"> Уже зарегистрированы?</p>
                    <p className="text text_type_main-small"><Link to={"/login"}>войти</Link></p>
                </div>
            </form>
        </div>
    )
}

export default RegistrationPage
