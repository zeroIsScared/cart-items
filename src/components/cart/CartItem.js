import Product from "../product/Product.js";
import Image from "../product/Image.js";
import Quantity from "../product/Quantity.js";
import Money from "../product/Money.js";


const CartItem = (props) => {

    const {product: { name, image,price:{currency}}, quantity, money:{cost}} = props.cartItem;

return (
    <li className="cart-item">
      <Product name={name}>
                        <Image image= {image} alt='product'/>
                        </ Product>
                    <Quantity quantity={quantity}/>
                    <Money cost={cost} currency={currency}/>
    </li>
)
}

export default CartItem;