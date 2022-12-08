
export const BURGER_INGREDIENTS_DATA_URL = 'https://norma.nomoreparties.space/api/ingredients'
export const POST_BURGER_INGREDIENTS_DATA_URL = 'https://norma.nomoreparties.space/api/orders'

export const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };




