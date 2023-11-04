import CartItem from "./CartItem.js";
import Product from "../product/Product.js";
import Quantity from "../product/Quantity.js";
import Image from "../product/Image.js";
import Money from "../product/Money.js";
import {getCartItems} from "./api.js"



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