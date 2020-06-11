//utility functions allow us to keep our files clean and 
// organize functions that we may need in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd)=> {
    const existingCartItem = cartItems.find(cartItem => 
            cartItem.id === cartItemToAdd.id
            );

        if (existingCartItem){
            return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
            )
        }

        return [...cartItems, { ...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
        //comparing the two. if id of cart.item is equal to the one you want to remove
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem =>
        cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem

        //if the existing cart item is just one, remove it completely
        //if not, remove just one from existing quantity and keep everything else the same
    );

};
