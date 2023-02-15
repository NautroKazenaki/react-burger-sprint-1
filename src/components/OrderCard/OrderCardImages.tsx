import React from 'react'
import { TIngredient } from '../../utils/Types';
import OCIStyles from './OrderCardImages.module.css'
type TOrderCardImagesProps = {
    item: TIngredient,
}
const OrderCardImages = ({item}:TOrderCardImagesProps) => {
    return (
        <div className={OCIStyles.image_preview}>
            <img  src={item.image} />
        </div>
    )
}

export default OrderCardImages
