export const BASE_URL = 'https://norma.nomoreparties.space/api'

export const BURGER_INGREDIENTS_DATA_URL = `${BASE_URL}/ingredients`
export const POST_BURGER_INGREDIENTS_DATA_URL = `${BASE_URL}/orders`

export const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };




