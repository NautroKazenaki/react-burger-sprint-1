import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import IDStyles from './IngredientsDetails.module.css'
import PropTypes from "prop-types";
import {ingredientTypes} from '../../utils/PropTypes'




const IngredientsDetails = (props) => {
    
    IngredientsDetails.propTypes = {
        props: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired,
      };
    
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
                        <div><p className="text text_type_main-default text_color_inactive">Калории, ккал </p></div>
                        <div><p className="text text_type_digits-default text_color_inactive">{c}</p></div>
                    </div>
                    <div className={IDStyles.bzhuContentContainer}>
                        <div><p className="text text_type_main-default text_color_inactive">Белки, г </p></div>
                        <div><p className="text text_type_digits-default text_color_inactive">{b}</p></div>
                    </div>
                    <div className={IDStyles.bzhuContentContainer}>
                        <div><p className="text text_type_main-default text_color_inactive">Жиры, г </p></div>
                        <div><p className="text text_type_digits-default text_color_inactive">{zh}</p></div>
                    </div>
                    <div className={IDStyles.bzhuContentContainer}>
                        <div><p className="text text_type_main-default text_color_inactive">Углеводы, г </p></div>
                        <div><p className="text text_type_digits-default text_color_inactive">{u}</p></div>
                    </div>
                       
                        
                       
                   
                </div>
            </div>
        </div>
    )
}

export default IngredientsDetails
