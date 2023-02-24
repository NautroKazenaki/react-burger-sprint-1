import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import bIStyles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import { ingredientTypes } from "../../utils/PropTypes";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import {useLocation, Link} from 'react-router-dom'
import {TIngredient} from '../../utils/Types'

type TSauseProps = {
  sauses: TIngredient,
  onOpen: (sauses: TIngredient) => void,
}
const Sause = (props: TSauseProps) => {
  const nonBunIngredients = useSelector(
    (state:any) => state.burgerConstructor.nonBunIngredients
  );
  const buns = useSelector((state:any) => state.burgerConstructor.buns);
  const sauseIngredients = React.useMemo(() => nonBunIngredients.filter(
    (ingredient:TIngredient) => ingredient.type === "sauce"
  ),[]);

  const counter = React.useMemo(() => {
    let count = 0;
   
    sauseIngredients.map((element:TIngredient) => {
            if(element._id === props.sauses._id) {
                ++count;
            }   
        })
    
    
    return count
}, [nonBunIngredients, buns])

const location = useLocation();
const ingredientId = props.sauses['_id'];

  const handleClick = () => {
    props.onOpen(props.sauses);
  };

  const [{}, dragRef] = useDrag({
    type: 'ingredient',
    item: props.sauses,
    collect: (monitor) => ({
        isDrag: monitor.isDragging()
    })
})

  return (
    <Link to={{pathname: `/ingredients/${ingredientId}`, state: { background: location }, }} key={ingredientId} className={bIStyles.links}>
    <div
      className={bIStyles.burgerIngredientsItemContainer}
      onClick={handleClick}
      ref={dragRef}
      data-testid='ingredient'
    >
      <div className={bIStyles.burgerIngredientsContentContainer}>
      <div className={bIStyles.burgerIngredientsCounter}>
        {counter !==0 &&(
                          <Counter count={counter} size="default" />
                      )
        }
      </div>
        <img
          className={bIStyles.burgerIngredientsImg}
          src={props.sauses.image}
          alt="здесь будет картинка"
        />
        <div className={bIStyles.burgerIngredientsPrice}>
          <p className="text text_type_digits-default">{props.sauses.price}</p>
          <div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={bIStyles.burgerIngredientsDescription1}>
          <p className="text text_type_main-small">{props.sauses.name}</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

Sause.propTypes = {
  sauses: ingredientTypes.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default Sause;
