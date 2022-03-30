import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';
import './Shops.css'

const Shops = () => {
    const [products,setProducts]=useState([])
    const [card,setCard]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    const handleBtnAddCard=(product)=>{
        console.log(product);
        const newCard=[...card,product];
        setCard(newCard);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
            {
                products.map(product=><Product key={product.id} product={product}handleBtnAddCard={handleBtnAddCard}></Product>)
            }
            </div>
            <div className="card-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shops;