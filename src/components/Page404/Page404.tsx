import React from 'react'
import P4Styles from './Page404.module.css'
import {Link} from 'react-router-dom'
const Page404 = () => {
    return (
        <div className={P4Styles.mainContainer}>
            <div className={P4Styles.contentContainer}>
                <div className={P4Styles.imageContainer}>
                    <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" />
                    <img src="https://assets.codepen.io/5647096/Delorean.png"/>
                </div> 
                <div className={P4Styles.navContainer}>
                    <p className="text text_type_main-large"> 404</p>
                    <p className="text text_type_main-medium"> PAGE NOT FOUND</p>
                    <p className="text text_type_main-default"> BACK TO CONSTRUCTOR?</p>
                    <p className="text text_type_main-default"> <Link to={"/"}> YES </Link></p>
                    <p className="text text_type_main-default"> <a href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=3s"}>NO</a></p>
                </div>
            </div>
        </div>
    )
}

export default Page404
