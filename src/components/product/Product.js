
const Product = (props)=> {
    return (
        <div className="product-container">
       {props.children}
       <h4>{props.name}</h4>
       </div>
    )
}

export default Product;