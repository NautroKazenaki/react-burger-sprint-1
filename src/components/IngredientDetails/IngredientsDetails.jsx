import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import IDStyles from './IngredientsDetails.module.css'
import PropTypes from "prop-types";
import {ingredientTypes} from '../../utils/PropTypes'




const IngredientsDetails = (props) => {
    
    return (
        <>
                <div className={IDStyles.imageContainer}>
                    <img alt='test' src={props.ingredient.image_large}/>
                </div>
                <div className={IDStyles.nameContainer}>
                    <p className="text text_type_main-default"> {props.ingredient.name} </p>
                </div>
                <div className={IDStyles.bzhuContainer}>
                    <div className={IDStyles.bzhuContentContainer}>
                        <div><p className="text text_type_main-default text_color_inactive">Калории, ккал </p></div>
                        <div><p className="text text_type_digits-default text_color_inactive">{props.ingredient.calories}</p></div>
                    </div>
                    <div className={IDStyles.bzhuContentContainer}>
                        <div><p className="text text_type_main-default text_color_inactive">Белки, г </p></div>
                        <div><p className="text text_type_digits-default text_color_inactive">{props.ingredient.proteins}</p></div>
                    </div>
                    <div className={IDStyles.bzhuContentContainer}>
                        <div><p className="text text_type_main-default text_color_inactive">Жиры, г </p></div>
                        <div><p className="text text_type_digits-default text_color_inactive">{props.ingredient.fat}</p></div>
                    </div>
                    <div className={IDStyles.bzhuContentContainer}>
                        <div><p className="text text_type_main-default text_color_inactive">Углеводы, г </p></div>
                        <div><p className="text text_type_digits-default text_color_inactive">{props.ingredient.carbohydrates}</p></div>
                    </div>
                       
                        
                       
                   
                </div>
        </>
    )
}
IngredientsDetails.propTypes = {
    ingredient: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired

  };

export default IngredientsDetails
