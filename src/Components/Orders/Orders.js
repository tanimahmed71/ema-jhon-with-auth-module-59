import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import RivewItem from '../reviewItem/RivewItem';
import  './Orders.css'; 

const Orders = () => {
    const[products,setProducts]=useProducts();
    const [cart,setCart]=useCart(products);
    const navigate =useNavigate();
    
    const handleRemoveProduct=product=>{
        const rest =cart.filter(pd=>pd.id!==product.id)
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="review-item-container">
                {
                    cart.map(product=><RivewItem key={product.id}product={product} handleRemoveProduct={handleRemoveProduct}></RivewItem>)
                }
            </div>
            <div className="card-container">
                <Cart card={cart}>
                    <button onClick={()=>navigate('/shipment')}>Proceed shipment</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;