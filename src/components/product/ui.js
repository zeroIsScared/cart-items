import CartItem from "./CartItem.js";
import Product from "./Product.js";
import Quantity from "./Quantity.js";
import Image from "./Image.js";
import Money from "./Money.js";
import {getCartItems} from "./api.js"



const Cart = () => {

    const cartItems = getCartItems();
    console.log(cartItems)

    return (
        <ul className="cart-list"> 
            {
              cartItems.map( item => {
            const {product: {id, name, image,price:{currency}}, quantity, money:{cost}} = item;
               return <CartItem key= {id}>
                    <Product name={name}>
                        <Image image= {image} alt='product'/>
                        </ Product>
                    <Quantity quantity={quantity}/>
                    <Money cost={cost} currency={currency}/>
                </CartItem>
            
              }) }
        </ul>
    )
}

export default Cart;