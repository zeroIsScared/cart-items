import FilterItem from "./FilterItem.js";
import getFilters from "./api.js";

const FilterPanel = () => {

    const brands = getFilters();    

    return (
        <div className="filter-panel" >
            {brands && brands.map( item => <FilterItem  key= {item.id} brandsObject={item} />)}
        </div>
    )
}

export default FilterPanel;