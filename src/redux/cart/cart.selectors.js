import { createSelector } from 'reselect';

const selectCart = state => state.cart;
//selectCart will grab the state of the cart then boil it down over to the selector

//^^example of input selector. input selector grabs the shallow input of JUST the state of cart, that is all
//kind of like a database-- actions "write" to the db, selectors "read" from the db

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

//gives us back total quantity of all cart items
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
     cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
        0
        )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
     cartItems => 
     cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
        0
        )
)