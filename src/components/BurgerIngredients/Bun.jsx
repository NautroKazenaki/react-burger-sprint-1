import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import bIStyles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import { ingredientTypes } from "../../utils/PropTypes";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import {useLocation, Link} from 'react-router-dom'

const Bun = (props) => {
  
  const currentBun = useSelector((state) => state.burgerConstructor.buns)
  
  
  const counter = React.useMemo(() => {
    let count = 0
    
     
       {
        if(currentBun._id === props.buns._id) {
          return count = 2;
      }
      }
    
    
    return count;
  }, [currentBun]);
  
  const location = useLocation();
  const ingredientId = props.buns['_id'];
 

  const handleClick = (e) => {
    e.preventDefault();
    props.onOpen(props.buns);
  };

  const [{}, dragRef] = useDrag({
    type: "ingredient",
    item: props.buns,
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
        <div className={bIStyles.burgerIngredientsCounter } > 
        {counter !== 0 && ( <Counter count={counter} test size="default"  />)}
        
          
        </div>
        <img
          className={bIStyles.burgerIngredientsImg}
          src={props.buns.image}
          alt="здесь будет картинка"
        />
        <div className={bIStyles.burgerIngredientsPrice}>
          <p className="text text_type_digits-default">{props.buns.price}</p>
          <div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={bIStyles.burgerIngredientsDescription1}>
          <p className="text text_type_main-small">{props.buns.name}</p>
        </div>
      </div>
    </Link>
    
  );
};

Bun.propTypes = {
  onOpen: PropTypes.func.isRequired,
  buns: ingredientTypes.isRequired,
};

export default Bun;
