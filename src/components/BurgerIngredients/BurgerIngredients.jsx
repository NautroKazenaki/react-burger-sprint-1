import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import bIStyles from './BurgerIngredients.module.css'

import BurgerIngredientsTabs from './BurgerIngredientsTabs'

const BurgerIngredients = (props) => {
    return (
        <div className={`${bIStyles.burgerIngredientsContainer} + ${bIStyles.customScroll}`}>
            <div className={bIStyles.burgerHeaderTextContainer}>
                <p className="text text_type_main-large" > Соберите бургер </p>
            </div>

            <div className={`${bIStyles.burgerTabsContainer} + ${bIStyles.customScroll}`}>
                <BurgerIngredientsTabs />
            </div>

            <div className={`${bIStyles.burgerTabsContentContainer} + ${bIStyles.customScroll}`}>
                <section className={bIStyles.burgerIngredientsBreadHeader}>
                    <p className="text text_type_main-medium"> Булки </p>
                </section>
                <div className={bIStyles.burgerIngredientsColumnsPuns}>

                    <div className={bIStyles.burgerIngredientsColumn1}>
                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            <div className={bIStyles.burgerIngredientsCounter}>
                                <Counter  count={1} size="default" extraClass="m-1" />
                            </div>
                            
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[0].image} alt="здесь будет картинка"/>
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[0].price} 
                                    </p>
                                    <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    
                                </div>
                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                        {props.data[0].name} 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className={bIStyles.burgerIngredientsColumn2}>
                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            {/* <Counter count={1} size="default" extraClass="m-1" /> */}
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[14].image} alt="здесь будет картинка" />
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[14].price} 
                                    </p>
                                     <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                        
                                 </div>

                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                          {props.data[14].name} 
                                    </p>
                                </div>
                            </div>   
                        </div>
                    </div>
                        
                </div>
                
                

                <section className={bIStyles.burgerIngredientsSauseHeader}>
                    <p className="text text_type_main-medium"> Соусы </p>
                </section>
                <div className={bIStyles.burgerIngredientsColumnsSauses}>
                    
                   <div className={bIStyles.burgerIngredientsColumn3}>
                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[3].image} alt="здесь будет картинка"/>
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[3].price} 
                                    </p>
                                    <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    
                                </div>
                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                        {props.data[3].name} 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[6].image} alt="здесь будет картинка"/>
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[6].price} 
                                    </p>
                                    <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    
                                </div>
                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                        {props.data[6].name} 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={bIStyles.burgerIngredientsColumn3}>
                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[5].image} alt="здесь будет картинка"/>
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[5].price} 
                                    </p>
                                    <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    
                                </div>
                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                        {props.data[5].name} 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[9].image} alt="здесь будет картинка"/>
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[9].price} 
                                    </p>
                                    <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    
                                </div>
                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                        {props.data[9].name} 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                

                <section className={bIStyles.burgerIngredientsSauseHeader}>
                    <p className="text text_type_main-medium"> Начинки </p>
                </section>
                <div className={bIStyles.burgerIngredientsColumnsSauses}>
                    
                   <div className={bIStyles.burgerIngredientsColumn3}>
                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[1].image} alt="здесь будет картинка"/>
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[1].price} 
                                    </p>
                                    <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    
                                </div>
                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                        {props.data[1].name} 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[2].image} alt="здесь будет картинка"/>
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[2].price} 
                                    </p>
                                    <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    
                                </div>
                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                        {props.data[2].name} 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[4].image} alt="здесь будет картинка"/>
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[4].price} 
                                    </p>
                                    <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    
                                </div>
                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                        {props.data[4].name} 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[7].image} alt="здесь будет картинка"/>
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[7].price} 
                                    </p>
                                    <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    
                                </div>
                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                        {props.data[7].name} 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[12].image} alt="здесь будет картинка"/>
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[12].price} 
                                    </p>
                                    <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    
                                </div>
                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                        {props.data[12].name} 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={bIStyles.burgerIngredientsColumn3}>
                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[8].image} alt="здесь будет картинка"/>
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[8].price} 
                                    </p>
                                    <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    
                                </div>
                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                        {props.data[8].name} 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[10].image} alt="здесь будет картинка"/>
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[10].price} 
                                    </p>
                                    <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    
                                </div>
                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                        {props.data[10].name} 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[11].image} alt="здесь будет картинка"/>
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[11].price} 
                                    </p>
                                    <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    
                                </div>
                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                        {props.data[11].name} 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={bIStyles.burgerIngredientsItemContainer}>
                            
                            <div className={bIStyles.burgerIngredientsContentContainer}>
                                <img className={bIStyles.burgerIngredientsImg} src={props.data[13].image} alt="здесь будет картинка"/>
                                <div className={bIStyles.burgerIngredientsPrice}>
                                    <p className="text text_type_digits-default"> 
                                        {props.data[13].price} 
                                    </p>
                                    <div>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    
                                </div>
                                <div className={bIStyles.burgerIngredientsDescription1}>
                                    <p className="text text_type_main-small"> 
                                        {props.data[13].name} 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

BurgerIngredients.propTypes = {
    props: PropTypes.arrayOf(PropTypes.object)
}

export default BurgerIngredients
