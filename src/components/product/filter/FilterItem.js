
const FilterItem = (props) => {

    const {label, quantity} = props.brandsObject;
    
    return (
        <div className="filter-item">
        <input type='checkbox' name={label}></input>
        <label for={label}>{`${label}(${quantity})`}</label>
        </div>
   )
}

export default FilterItem;