import { Input,  PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import React, {useState, useEffect, SyntheticEvent} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PPStyles from './ProfilePage.module.css'
import {logout, setUserInfo, updateUserInfo, fetchWithRefresh} from '../../services/actions/userActions'
import {NavLink, Redirect} from 'react-router-dom'

const ProfilePage = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const { isAuth, isUser, profileInfo, isLoading } = useSelector((state:any) => state.userData);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
       
        //  dispatch(fetchWithRefresh(`${BASE_URL}/auth/user`, {
        //      method: "GET",
        //      headers: {
        //        "Content-Type": "application/json;charset=utf-8",
        //        authorization: getCookie("token"),
        //      },
        //    }))
        //@ts-ignore
         dispatch(setUserInfo())
    }, [])

    useEffect(() => {
        if (profileInfo.success) {
            setEmail(profileInfo.user.email);
            setUsername(profileInfo.user.name);
        }
    }, [isLoading])

    const updateInfo = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //@ts-ignore
        dispatch(updateUserInfo(email, username));
    }

    const setPrevState = (e:SyntheticEvent) => {
        e.preventDefault();
        setUsername(profileInfo.user.name);
        setEmail(profileInfo.user.email);
    }
     const logOut = (e:SyntheticEvent) => {
        e.preventDefault();
        //@ts-ignore
        logout(dispatch);
    }
const ref = React.useRef(null)

const isInputsValueChanged =
    username !== profileInfo.user?.name ||
    email !== profileInfo.user?.email ||
    password !== ''
    return (
        <>
            { !isAuth && !isUser && (
                <Redirect to='/login' />
            )}
            <div className={PPStyles.navbar}>
                <NavLink to='/profile' className={PPStyles.frame1} activeClassName={PPStyles.activeNavLink} >
                    <p className="text text_type_main-medium" > Профиль</p>
                </NavLink> 
                <NavLink to='/orders' className={PPStyles.frame2} activeClassName={PPStyles.activeNavLink}>
                    <p className="text text_type_main-medium"> История заказов</p>
                </NavLink> 
                <div className={PPStyles.frame3} onClick={logOut} >
                    <p className="text text_type_main-medium"> Выход</p>
                </div> 
                <div className={PPStyles.caption}>
                    <p className="text text_type_main-small text_color_inactive"> В этом разделе вы можете изменить свои персональные данные</p>
                </div>
            </div>
            <form onSubmit={updateInfo}>
                <div className={PPStyles.editProfileContainer}>
                    <Input placeholder={"Имя"} icon={"EditIcon"} value={username} onChange={(e) => setUsername(e.target.value)} ref={ref}/>
                    <Input placeholder={"Логин"} icon={"EditIcon"} value={email} onChange={(e) => setEmail(e.target.value)} ref={ref}/>
                    
                    <PasswordInput placeholder={"Пароль"} icon={"EditIcon"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    
                    {isInputsValueChanged && <div className={PPStyles.buttonContainer}><Button  htmlType="submit" disabled={username.length === 0 || email.length === 0} >
                        Save
                    </Button>
                     
                    
                    
                   
                    <Button htmlType="button" disabled={(username.length > 0 || email.length > 0) ? false : true}  onClick={setPrevState}>
                        Cancel
                    </Button></div>}
                    
                </div>
            </form>
        </>
    )
}

export default ProfilePage
