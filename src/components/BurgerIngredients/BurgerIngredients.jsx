
import {
  Counter,
  Tab,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import bIStyles from "./BurgerIngredients.module.css";

import Bun from "./Bun";
import Sause from "./Sause";
import MainIngredient from "./MainIngredient";

import ModalWindow from "../Modal/ModalWindow";
import IngredientsDetails from "../IngredientDetails/IngredientsDetails";
import {
  showBurgerElementDataAC,
  hideBurgerElementDataAC,
} from "../../services/actions/burgerElementDataActions";
import { useSelector, useDispatch } from "react-redux";
import TabsStyles from "./BurgerIngredientsTabs.module.css";
import { useInView } from "react-intersection-observer";


const BurgerIngredients = () => {
  const dispatch = useDispatch();

  const data = useSelector(
    (state) => state.burgerIngredients.burgerIngredientsData
  );
  const clickedIngredient = useSelector(
    (state) => state.burgerElement.clickedIngredient
  );
  const isShowing = useSelector((state) => state.burgerElement.isShowing);

  const buns = React.useMemo(() =>  data.filter((ingredient) => ingredient.type === "bun"));
 
  const sauses = React.useMemo(() => data.filter((ingredient) => ingredient.type === "sauce"));
  const mains = React.useMemo(() => data.filter((ingredient) => ingredient.type === "main"));

  const [current, setCurrent] = React.useState("one");

  const [bunsRef, inViewBuns] = useInView();
  const [sausesRef, inViewSauses] = useInView();
  const [mainsRef, inViewMains] = useInView();

  useEffect(() => {
    if (inViewBuns) {
      setCurrent("one");
    } else if (inViewSauses) {
      setCurrent("two");
    } else {
      setCurrent("three");
    }
  }, [inViewBuns, inViewSauses, inViewMains]);

  const showModalWindow = (ingredient) => {
    dispatch(showBurgerElementDataAC(ingredient));
  };
  
  const hideModalWindow = () => {
    dispatch(hideBurgerElementDataAC());
    
  };

  return (
    <div
      className={`${bIStyles.burgerIngredientsContainer} + ${bIStyles.customScroll}`}
    >
      <div className={bIStyles.burgerHeaderTextContainer}>
        <p className="text text_type_main-large"> Соберите бургер </p>
      </div>

      <div
        className={`${bIStyles.burgerTabsContainer} + ${bIStyles.customScroll}`}
      >
        
        <div className={TabsStyles.tabsContainer}>
          <Tab value="one" active={current === "one"} onClick={setCurrent}>
            <p className="text text_type_main-small">Булки</p>
          </Tab>
          <Tab value="two" active={current === "two"} onClick={setCurrent}>
            <p className="text text_type_main-small">Соусы</p>
          </Tab>
          <Tab value="three" active={current === "three"} onClick={setCurrent}>
            <p className="text text_type_main-small">Начинки</p>
          </Tab>
        </div>
      </div>

      <div
        className={`${bIStyles.burgerTabsContentContainer} + ${bIStyles.customScroll}`}
      >
        <section
          className={bIStyles.burgerIngredientsBreadHeader}
          ref={bunsRef}
        >
          <p className="text text_type_main-medium"> Булки </p>
        </section>
        <div className={bIStyles.burgerIngredientsColumnsPuns}>
          {/* <div className={bIStyles.burgerIngredientsCounter}> */}
            {buns.map((bun) => (
              <Bun buns={bun} key={bun._id} onOpen={showModalWindow} />
            ))}
          {/* </div> */}
        </div>

        <section
          className={bIStyles.burgerIngredientsBreadHeader}
          ref={sausesRef}
        >
          <p className="text text_type_main-medium"> Соусы </p>
        </section>
        <div className={bIStyles.burgerIngredientsColumnsPuns}>
          {sauses.map((sause) => (
            <Sause sauses={sause} key={sause._id} onOpen={showModalWindow} />
          ))}
        </div>

        <section
          className={bIStyles.burgerIngredientsBreadHeader}
          ref={mainsRef}
        >
          <p className="text text_type_main-medium"> Начинки </p>
        </section>
        <div className={bIStyles.burgerIngredientsColumnsPuns}>
          {mains.map((main) => (
            <MainIngredient
              mains={main}
              key={main._id}
              onOpen={showModalWindow}
            />
          ))}
        </div>
      </div>
      {isShowing && (
        <ModalWindow onClose={hideModalWindow} title="Детали ингредиента">
          <IngredientsDetails
            onClose={hideModalWindow}
            ingredient={clickedIngredient}
          />
        </ModalWindow>
      )}
    </div>
  );
};

export default BurgerIngredients;
