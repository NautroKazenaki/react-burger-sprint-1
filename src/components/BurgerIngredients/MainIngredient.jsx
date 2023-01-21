import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import bIStyles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import { ingredientTypes } from "../../utils/PropTypes";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import {useLocation, Link} from 'react-router-dom'

const MainIngredient = (props) => {
  const nonBunIngredients = useSelector(
    (state) => state.burgerConstructor.nonBunIngredients
  );
  const buns = useSelector((state) => state.burgerConstructor.buns);
  const mainIngredients = React.useMemo(() =>
    nonBunIngredients.filter((ingredient) => ingredient.type === "main")
  );
  const location = useLocation();
  const ingredientId = props.mains['_id'];
  
  const counter = React.useMemo(() => {
    let count = 0;

    mainIngredients.map((element) => {
      if (element._id === props.mains._id) {
        ++count;
      }
    });

    return count;
  }, [nonBunIngredients, buns]);

  const handleClick = () => {
    props.onOpen(props.mains);
  };

  const [{}, dragRef] = useDrag({
    type: "ingredient",
    item: props.mains,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <Link to={{pathname: `/ingredients/${ingredientId}`, state: { background: location }, }} key={ingredientId} className={bIStyles.links}>
      <div
        className={bIStyles.burgerIngredientsContentContainer}
        onClick={handleClick}
        ref={dragRef}
      >
        <div className={bIStyles.burgerIngredientsCounter}>
          {counter !== 0 && <Counter count={counter} size="default" />}
        </div>
        <img
          className={bIStyles.burgerIngredientsImg}
          src={props.mains.image}
          alt="здесь будет картинка"
        />
        <div className={bIStyles.burgerIngredientsPrice}>
          <p className="text text_type_digits-default">{props.mains.price}</p>
          <div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={bIStyles.burgerIngredientsDescription1}>
          <p className="text text_type_main-small">{props.mains.name}</p>
        </div>
      </div>
    </Link>
  );
};

MainIngredient.propTypes = {
  mains: ingredientTypes.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default MainIngredient;
