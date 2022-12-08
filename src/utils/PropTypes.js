import PropTypes from "prop-types";

export const ingredientTypes = PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
  });

  export const bunTypes = PropTypes.shape({
  bun: PropTypes.ingredientTypes,
  key: PropTypes.number,
  onOpen: PropTypes.func
})

export const mainTypes = PropTypes.shape({
  mains: PropTypes.ingredientTypes,
  key: PropTypes.number,
  onOpen: PropTypes.func
})
export const sauseTypes = PropTypes.shape({
  sause: PropTypes.ingredientTypes,
  key: PropTypes.number,
  onOpen: PropTypes.func
})
export const ingredientsDetailsType = PropTypes.shape({
  onClose: PropTypes.func,
  ingredient: PropTypes.ingredientTypes,
  data: PropTypes.ingredientTypes
})
  
