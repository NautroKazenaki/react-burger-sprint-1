export type TIngredient = {
  _id: string;
  id?: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_large: string;
  image_mobile: string;
};

export type TOrderNumber = {
  orderNumber: number;
};

export type TIngredientResponse = TIngredient & {data: TIngredient[]}
export type TUser = {
  username?: string,
  email?: string,
  password?: string,
  success?: string,
  user?: any
};
export type TCreatedOrder = {
  number: number;
}

export type TResponse = TUser & { success: string };
export type TOrderResponse = TResponse & {
 name: string, 
 order: TCreatedOrder,
}
export type TCredentials = {
  accessToken: string, 
  refreshToken: string
}
export type TRegisterResponse = TResponse & TCredentials & { user: Omit<TUser, "password"> };