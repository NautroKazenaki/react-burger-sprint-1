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

const BurgerConstructorElement = ({ ingredient, i }) => {
  const dispatch = useDispatch();

  const deleteIngredient = () => {
    dispatch(deleteIngredientAC(ingredient));
  };
  const ref = useRef(null);

  const [ handlerId , drop] = useDrop({
    accept: "constructor",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover: function (ingredient) {
       const dragIndex = ingredient.index;
       const hoverIndex = i;
       dispatch(changeIngredientPositionAC(dragIndex, hoverIndex));
       ingredient.index = hoverIndex;
    },
   }
  );

  const [{ isDragging }, drag] = useDrag({
    type: "constructor",
    ingredient: () => {
      return { id: ingredient._id, i };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div className={bCStyles.burgerConstructorItemContainer} ref={ref}>
      <div className={bCStyles.constructorElementContainer}>
        <div className={bCStyles.burgerDragIconContainer}>
          <DragIcon type="primary" />
        </div>
        <ConstructorElement
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image}
          handleClose={deleteIngredient}
        />
      </div>
    </div>
  );
};

export default BurgerConstructorElement;
