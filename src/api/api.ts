export const BASE_URL = 'https://norma.nomoreparties.space/api'

export const BURGER_INGREDIENTS_DATA_URL = `${BASE_URL}/ingredients`
export const POST_BURGER_INGREDIENTS_DATA_URL = `${BASE_URL}/orders`

export const checkResponse = <T>(res: Response):Promise<T> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

  };
 export const wsUrl = 'wss://norma.nomoreparties.space/orders/all';
 export const userOrdersWsUrl = 'wss://norma.nomoreparties.space/orders';



