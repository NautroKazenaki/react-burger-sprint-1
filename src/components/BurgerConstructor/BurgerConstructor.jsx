import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import bCStyles from './BurgerConstructor.module.css'

const BurgerConstructor = (data) => {
    console.log(data)
    return (
        <div className={bCStyles.burgerConstructorContainer}>
            <div className={bCStyles.burgerConstructorItemsContainer}>
                <div className={bCStyles.burgerConstructorItemContainer}>
                    {/* <DragIcon type="primary" /> */}
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={data.data[0].name + `(верх)`}
                        price={200}
                        thumbnail={data.data[0].image}
                    />
                </div>

                <div className={bCStyles.burgerConstructorItemContainer}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text={data.data[1].name}
                        price={50}
                        thumbnail={data.data[1].image}
                    />
                </div>
            
                <div className={bCStyles.burgerConstructorItemContainer}>
                    {/* <DragIcon type="primary" /> */}
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={data.data[0].name + `(низ)`}
                        price={200}
                        thumbnail={data.data[0].image}
                    />
                </div>
            
            </div>
            <div className={bCStyles.burgerConstructorPayInfo}>
                <div className={bCStyles.burgerConstructorFinalPrice}>
                    <p className="text text_type_digits-medium">450</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>
        </div>
      
    )
  }

export default BurgerConstructor
