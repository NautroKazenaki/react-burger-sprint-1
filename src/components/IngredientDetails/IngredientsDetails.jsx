
import React from 'react'
import IDStyles from './IngredientsDetails.module.css'


import {useSelector} from 'react-redux'





const IngredientsDetails = () => {
const clickedIngredient = useSelector((state) => state.burgerElement.clickedIngredient)

    
    return (
        <>
                <div className={IDStyles.imageContainer}>
                    <img alt='test' src={clickedIngredient.image_large}/>
                </div>
                <div className={IDStyles.nameContainer}>
                    <p className="text text_type_main-default"> {clickedIngredient.name} </p>
                </div>
                <div className={IDStyles.bzhuContainer}>
                    <div className={IDStyles.bzhuContentContainer}>
                        <div><p className="text text_type_main-default text_color_inactive">Калории, ккал </p></div>
                        <div><p className="text text_type_digits-default text_color_inactive">{clickedIngredient.calories}</p></div>
                    </div>
                    <div className={IDStyles.bzhuContentContainer}>
                        <div><p className="text text_type_main-default text_color_inactive">Белки, г </p></div>
                        <div><p className="text text_type_digits-default text_color_inactive">{clickedIngredient.proteins}</p></div>
                    </div>
                    <div className={IDStyles.bzhuContentContainer}>
                        <div><p className="text text_type_main-default text_color_inactive">Жиры, г </p></div>
                        <div><p className="text text_type_digits-default text_color_inactive">{clickedIngredient.fat}</p></div>
                    </div>
                    <div className={IDStyles.bzhuContentContainer}>
                        <div><p className="text text_type_main-default text_color_inactive">Углеводы, г </p></div>
                        <div><p className="text text_type_digits-default text_color_inactive">{clickedIngredient.carbohydrates}</p></div>
                    </div>
                       
                        
                       
                   
                </div>
        </>
    )
}


export default IngredientsDetails
