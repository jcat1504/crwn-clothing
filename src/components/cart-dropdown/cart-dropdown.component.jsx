import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems } from '../../redux/cart/cart.selectors'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className ='cart-dropdown'>
        <div className='cart-items'>
            { cartItems.length ? (
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
                ///see how we are reusing components
            ))
            ) : (
            <span className='empty-message'> Your cart is empty.</span>
             )}
        </div>
        <CustomButton onClick={()=>
        {
         history.push('/checkout');
         dispatch(toggleCartHidden());
         //dispatch is the only way to trigger a state change since components will never be able to access the store directly
        }}>
         GO TO CHECKOUT
        }</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})
//making sure that cart dropdown component is not getting re-rendered whenever the state changes thats unrelated to the cart items
//mapstatetoprops handle value
export default withRouter(connect(mapStateToProps)(CartDropdown));