import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OIISTyles from './OrderInfoItem.module.css';
import { TIngredient } from '../../utils/Types';
import { useSelector } from 'react-redux';


type TOrderInfoElementProps = {
    item: String | undefined;
    count: TIngredient[] | undefined;
}

export const OrderInfoItem = ({ item, count }: TOrderInfoElementProps): JSX.Element => {
    
    const  ingredients  = useSelector((state:any) => state.burgerIngredients.burgerIngredientsData);
    const currentItem = ingredients.find((element:TIngredient) => element._id === item);

    const counter = count && count.map(item => item).find(element => element._id === item);

    return (
        <div className={OIISTyles.itemContainer}>
            <div className={OIISTyles.ingredient}>
                <div className={OIISTyles.ingredientImage}>
                    <img src={currentItem?.image} />
                </div>
                <span className="text text_type_main-small">{currentItem?.name}</span>
            </div>
            <div className={OIISTyles.price}>
                {/* @ts-ignore */}
                <span className="text text_type_digits-default">{`${ counter && counter.count}x`}</span>
                <span className="text text_type_digits-default">{currentItem?.price}</span>
                <CurrencyIcon type="primary" />
            </div>
        </div>
    );
}