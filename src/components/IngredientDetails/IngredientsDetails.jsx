import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import B from './B'
import C from './C'
import IDStyles from './IngredientsDetails.module.css'
import U from './U'
import ZH from './ZH'

const IngredientsDetails = (props) => {
    debugger
    const b = props.ingredient.proteins
    const zh = props.ingredient.fat
    const u = props.ingredient.carbohydrates
    const c = props.ingredient.calories
    return (
        <div className={IDStyles.mainContainer}>
            <div className={IDStyles.IngredientsDetailsContainer}>
                <div className={IDStyles.HeaderAndXButtonContainer}>
                <div className={IDStyles.Header}>
                    <p className="text text_type_main-medium">Детали ингредиента </p>
                </div>
                <div className={IDStyles.xButton} onClick={props.onClose}>
                    <CloseIcon type="primary" />
                </div>
                </div>
                <div className={IDStyles.imageContainer}>
                    <img alt='test' src={props.ingredient.image_large}/>
                </div>
                <div className={IDStyles.nameContainer}>
                    <p className="text text_type_main-default"> {props.ingredient.name} </p>
                </div>
                <div className={IDStyles.bzhuContainer}>
                    <div className={IDStyles.bzhuContentContainer}>
                        <C c={c}/>
                    </div>
                    <div className={IDStyles.bzhuContentContainer}>
                        <B b={b}/>
                    </div>
                    <div className={IDStyles.bzhuContentContainer}>
                        <ZH zh={zh}/>
                    </div>
                    <div className={IDStyles.bzhuContentContainer}>
                        <U u={u}/>
                    </div>
                       
                        
                       
                   
                </div>
            </div>
        </div>
    )
}

export default IngredientsDetails
