import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./RivewItem.css";

const RivewItem = (props) => {
    const {product,handleRemoveProduct}=props;
    const {name,price,shipping,quantity,img}=product ;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-item-detail-container'>
              <div>
              <h4 title={name}>{name.length >20 ?name.slice(0,20)+"....":name}</h4>
                <p><b>Price: <span>${price}</span></b></p>
                <p><b>Shipping: <span>${shipping}</span></b></p>
                <p><b>Quantity: <span>${quantity}</span></b></p>
              </div>
                <div className='delete-container'>
                <button onClick={()=>handleRemoveProduct(product)} className='dlt-btn'> 
                    <FontAwesomeIcon className='btn-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
            </div>
        </div>
    );
};

export default RivewItem;