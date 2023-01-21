import React from 'react'
import OLStyles from './OrderList.module.css'
const OrderList = () => {
    return (
        <div className={OLStyles.mainContainer}>
            <p className="text text_type_main-large">
                К сожалению, эта часть проекта еще не готова. <br /> Но есть анекдот: "Пришли как-то Пупа и Лупа получать зарплату. Но в бухгалтерии всё перепутали..."
            </p>
        </div>
    )
}

export default OrderList
