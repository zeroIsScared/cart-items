
const Money = (props) => {
    return (
        <div className="money-container">
            <p>{props.cost}</p>
            <p>{props.currency}</p>
        </div>
    )
}

export default Money;