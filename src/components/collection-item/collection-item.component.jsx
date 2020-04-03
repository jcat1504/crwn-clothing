import React from 'react';
import './collection-item.styles.scss';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';


const CollectionItem = ({item, addItem }) => {
    const { name, price, imageUrl } = item;
    //destructuring inside item itself. we do it this way 
    //because we need access to the item itself
    return (
    <div className='collection-item'>
        <div className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
    <div className="collection-footer">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted> Add to Cart</CustomButton>
    </div>
    )}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null, 
    mapDispatchToProps)
    (CollectionItem);