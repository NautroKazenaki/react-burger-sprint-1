import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import bCStyles from "./BurgerConstructor.module.css";
import {
  changeIngredientPositionAC,
  deleteIngredientAC,
} from "../../services/actions/burgerConstructorDataActions";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";

const BurgerConstructorElement = ({ ingredient, index }) => {
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
     
      
       const dragIndex = ingredient.index;
       const hoverIndex = index;
       if (dragIndex === hoverIndex) {
        return;
    }
    const hoverBoundingRect = ref.current?.getBoundingClientRect();

    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    const clientOffset = monitor.getClientOffset();

    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
    } 
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
    } 
    dispatch(changeIngredientPositionAC(dragIndex, hoverIndex));
     ingredient.index = hoverIndex;
    },
   }
  );

 
  const ref = useRef(null);
  const dragDropRef = drag(drop(ref));
  const opacity = isDragging ? 0 : 1;

  return (
    <div className={bCStyles.burgerConstructorItemContainer} style={{opacity}} >
      <div className={bCStyles.constructorElementContainer} ref={dragDropRef}>
        <div className={bCStyles.burgerDragIconContainer}>
          <DragIcon type="primary" />
        </div>
        <ConstructorElement
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image}
          handleClose={deleteIngredient}
          index={index}
        />
      </div>
    </div>
  );
};

export default BurgerConstructorElement;
