
const Quantity = (props) => {
    return (
        <div className="quantity-container">
            <button >+</button>
            <div>{props.quantity}</div>
            <button>-</button>
        </div>
    )
}

export default Quantity;