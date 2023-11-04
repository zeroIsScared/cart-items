
const FilterItem = (props) => {

    const {label, quantity} = props.brandsObject;
    
    return (
        <div className="filter-item">
        <input type='checkbox' name={label} id={label}></input>
        <label htmlFor={label}>{`${label} (${quantity})`}</label>
        </div>
   )
}

export default FilterItem;