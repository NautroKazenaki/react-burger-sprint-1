import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import bCStyles from "./BurgerConstructor.module.css";
import {
  changeIngredientPositionAC,
  deleteIngredientAC,
} from "../../services/actions/burgerConstructorDataActions";
import React, { ReactElement, useRef } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import {TIngredient} from '../../utils/Types'
type TBurgerConstructorElementProps = {
  ingredient: TIngredient,
  index: number,
}
const BurgerConstructorElement = ({ ingredient, index }: TBurgerConstructorElementProps) => {
  const dispatch = useDispatch();

  const deleteIngredient = () => {
    dispatch(deleteIngredientAC(ingredient));
  };
  
  const [{ isDragging }, drag] = useDrag({
    type: "constructor",
    item: () => { return { ...ingredient, index: index } },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });


  const [ {} , drop] = useDrop({
    accept: "constructor",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover: function (ingredient, monitor) {
     
      //@ts-ignore
       const dragIndex = ingredient.index;
       const hoverIndex = index;
       if (dragIndex === hoverIndex) {
        return;
    }
    //@ts-ignore
    const hoverBoundingRect = ref.current?.getBoundingClientRect();

    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    const clientOffset = monitor.getClientOffset();
    //@ts-ignore
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
    } 
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
    } 
    dispatch(changeIngredientPositionAC(dragIndex, hoverIndex));
    //@ts-ignore
     ingredient.index = hoverIndex;
    },
   }
  );

 
  const ref = useRef(null);
  const dragDropRef = drag(drop(ref));
  const opacity = isDragging ? 0 : 1;

  return (
    <div className={bCStyles.burgerConstructorItemContainer} style={{opacity}} >
      {/* @ts-ignore */}
      <div className={bCStyles.constructorElementContainer} ref={dragDropRef} data-cy={index}>
        <div className={bCStyles.burgerDragIconContainer}>
          <DragIcon type="primary" />
        </div>
        <ConstructorElement
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image}
          handleClose={deleteIngredient}
          // index={index}
        />
      </div>
    </div>
  );
};

export default BurgerConstructorElement;
