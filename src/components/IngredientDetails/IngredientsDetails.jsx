import React from "react";
import IDStyles from "./IngredientsDetails.module.css";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const IngredientsDetails = () => {

  const { ingredientId } = useParams();
  const clickedIngredient = useSelector(
    (state) => state.burgerElement.clickedIngredient
  );
  
  const data = useSelector(
    (state) => state.burgerIngredients.burgerIngredientsData
  );
  
  const ingredient = clickedIngredient || data.find(item => item._id === ingredientId)
  return (
    <>
      {ingredient && (
        <>
          <div className={IDStyles.imageContainer}>
            <img alt="test" src={ingredient.image_large} />
          </div>
          <div className={IDStyles.nameContainer}>
            <p className="text text_type_main-default"> {ingredient.name} </p>
          </div>
          <div className={IDStyles.bzhuContainer}>
            <div className={IDStyles.bzhuContentContainer}>
              <div>
                <p className="text text_type_main-default text_color_inactive">
                  Калории, ккал{" "}
                </p>
              </div>
              <div>
                <p className="text text_type_digits-default text_color_inactive">
                  {ingredient.calories}
                </p>
              </div>
            </div>
            <div className={IDStyles.bzhuContentContainer}>
              <div>
                <p className="text text_type_main-default text_color_inactive">
                  Белки, г{" "}
                </p>
              </div>
              <div>
                <p className="text text_type_digits-default text_color_inactive">
                  {ingredient.proteins}
                </p>
              </div>
            </div>
            <div className={IDStyles.bzhuContentContainer}>
              <div>
                <p className="text text_type_main-default text_color_inactive">
                  Жиры, г{" "}
                </p>
              </div>
              <div>
                <p className="text text_type_digits-default text_color_inactive">
                  {ingredient.fat}
                </p>
              </div>
            </div>
            <div className={IDStyles.bzhuContentContainer}>
              <div>
                <p className="text text_type_main-default text_color_inactive">
                  Углеводы, г{" "}
                </p>
              </div>
              <div>
                <p className="text text_type_digits-default text_color_inactive">
                  {ingredient.carbohydrates}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default IngredientsDetails;
