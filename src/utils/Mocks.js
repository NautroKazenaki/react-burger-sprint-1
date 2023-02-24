export const user = {
    username: 'user',
    email: 'email@email.ru',
    password: 'password',
    success: true
};
export const newUser = {
    username: 'user',
    email: 'email@email.ru',
    password: 'password',
};
export const order = [
    {
        _id: '123',
        ingredients: [
            'ingredient-1', 'ingredient-2', 'ingredient-3'
        ],
        status: 'done',
        name: 'burger',
        createdAt: 'created',
        updateAt: 'update'
    }
];
export const orders = {
    total: 2,
    totalToday: 1,
    orders : order
};
export const orderNumber = 1;
export const mainIngredients = [
    {
        _id: '111',
        name: 'bun',
        type: 'main',
        proteins: 42,
        fat: 42,
        carbohydrates: 42,
        calories: 42,
        price: 42,
        image: 'image',
        image_large: 'imagelarge',
        image_mobile: 'imagemobile',
    }
];
export const bun = [
    {
        _id: '222',
        name: 'bun',
        type: 'bun',
        proteins: 322,
        fat: 322,
        carbohydrates: 322,
        calories: 322,
        price: 322,
        image: 'image2',
        image_large: 'imagelarge2',
        image_mobile: 'imagemobile2',
    }
];
export const statusMessages = {
    connecting: 'Connecting...',
    online: 'Online',
    offline: 'Offline'
};
export const errorMessage = 'Error';


export const ingredientSelector = '[data-testid=ingredient]';
export const dropBoxSelector = '[data-testid=drop_box]';
export const buttonSelector = '[data-testid=button]';


export const email = 'kalliak2014@yandex.ru';
export const password = '12341234';