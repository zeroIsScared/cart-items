import CartItem from "./CartItem.js";
import {getCartItems} from "./api.js";

const Cart = () => {

    const cartItems = getCartItems();    

    return (
        <ul className="cart-list"> 
            {
              cartItems.map( item =>          
               <CartItem key= {item.product.id} cartItem={item} /> ) 
            }
        </ul>
    )
}

export default Cart;