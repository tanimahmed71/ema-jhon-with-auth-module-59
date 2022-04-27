import { useEffect, useState } from "react"
import { getStoredCard } from "../utilities/fakedb"

const useCart =(products)=>{
    const [cart,setCart]=useState([])
    
    useEffect(()=>{
        const storedCart=getStoredCard();
        const savedCart =[];
        for(const id in storedCart){
            const addedproduct =products.find(product=>product.id===id);
            if(addedproduct){
                const quantity =storedCart[id];
                addedproduct.quantity=quantity;
                savedCart.push(addedproduct)
            }
        }
        setCart(savedCart);
    },[products])
    return [cart,setCart];
}
export default useCart;
