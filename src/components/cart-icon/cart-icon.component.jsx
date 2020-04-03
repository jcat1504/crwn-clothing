import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg'

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span class='item-count'>{ itemCount }</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
    });

//adds quantity to cart icon instead of default 0
//redux selector--computing a new value based of the state
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});
//^^passin whole reducer state into the selector

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon);


//mapDispatchToProp does not call the dispatch, it simply map the 
// function into your component, addItem is only called in the component 
// and it is the same function as the one in mapDispactchToProp 

