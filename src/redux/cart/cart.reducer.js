import CartActionTypes from './cart.types'
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
                //boolean, if its true, turn false and vice versa
            };
            case CartActionTypes.ADD_ITEM:
                return {
                    ...state,
                    cartItems: addItemToCart(state.cartItems, action.payload)
                    //we are adding previous state items as well as new 
                    //items that wold appear at the very end of this array
                };
            case CartActionTypes.REMOVE_ITEM :
                return {
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems, action.payload)
                };
            case CartActionTypes.CLEAR_ITEM_FROM_CART:
                return {
                    ...state,
                    cartItems: state.cartItems.filter(
                        cartItem => cartItem.id !== action.payload.id
                        //remember that filter returns an array that is TRUE. if it is falsy, it will not return the item on page
                    )
                };
            default:
                return state;
    }
}

export default cartReducer;