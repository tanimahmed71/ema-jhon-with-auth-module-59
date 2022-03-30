import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';

const Product = ({product, handleBtnAddCard}) => {
    // const{product, handleBtnAddCard}=props;
    const {img,name,price,seller,ratings}=product;
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
            <h5>{name}</h5>
            <h6>Price:${price}</h6>
            <p><small>Manufacturer : {seller}</small></p>
            <p><small>Rating : {ratings}</small></p>
           </div>
            <button onClick={()=>handleBtnAddCard(product)} className=' card-btn'>
                <p>Add to card <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default Product;