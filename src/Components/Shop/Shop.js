import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProduct';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shops.css'

const Shop = () => {
    const [products,setProducts]=useProducts()
    const [cart,setCard]=useState([])

  
    useEffect(()=>{
        const storedCart=getStoredCard();
        const savedCart =[] 
        for(const id in storedCart){
            const addedProduct =products.find(product=>product.id===id)
            if(addedProduct){
                const quantity =storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
            }
        }
        setCard(savedCart);
    },[products])
    const handleBtnAddCard=(selectedProduct)=>{
        const exists =cart.find(product=>product.id===selectedProduct.id);
            let newCard=[];
        if(!exists){
            selectedProduct.quantity=1;
            newCard=[...cart,selectedProduct];
        }
        else{
            const rest = cart.filter(product=>product.id !==selectedProduct.id);
            exists.quantity=exists.quantity+1;
            newCard=[...rest,exists]
        }

        setCard(newCard);
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
            {
                products.map(product=><Product key={product.id} product={product}handleBtnAddCard={handleBtnAddCard}></Product>)
            }
            </div>
            <div className="card-container">
                <Cart card={cart}>
                    <Link to="/order">
                    <button>Review order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;