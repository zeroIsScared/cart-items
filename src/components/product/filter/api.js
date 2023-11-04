import ProductBrands from "./model.js"

const getFilters = () => {
    const brands = [
        {id: 1, label:'Samsung', productsQuantity: 256},
        {id: 2, label:'Hisense', productsQuantity: 56},
        {id: 3, label:'LG', productsQuantity: 45},
        {id: 4, label:'AEG', productsQuantity: 18},
        {id: 5, label:'TCL', productsQuantity: 36}
    ]

    return brands.map( item => new ProductBrands(item.id, item.label, item.productsQuantity));
}

export default getFilters;

