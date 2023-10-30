
const CartItem = (props) => {
    
return (
    <li className="cart-item">
        {props.children}
    </li>
)
}

export default CartItem;