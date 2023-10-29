
const Image = (props) => {
    return (
    <div className="image">
        <img src={props.image} alt={props.alt}></img>
    </div>
    )
}

export default Image;