import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {card}=props;
    console.log(props.children);

    // console.log(card);
    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of card){
        quantity=quantity+product.quantity;
        total =total+product.price*product.quantity;
        shipping =shipping +product.shipping;
    }
    const tax =parseFloat((total*0.1).toFixed(2));
    const grandtotal=total+shipping+tax;
    return (
        <div className='cart'>
            <h4>Order summary</h4>
              <p>Selected Item : {quantity}</p>
              <p>Total price: ${total}</p>
              <p>Total shipping: ${shipping} </p>
              <p> Tax: ${tax}</p>
              <h5>Grand Total: ${grandtotal.toFixed(2)}</h5>
              {props.children}
        </div>
    );
};
export default Cart;