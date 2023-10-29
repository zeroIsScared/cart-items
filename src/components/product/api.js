import { CartItem } from "./model.js";
import images from './images.js';

export const getCartItems = () => {
    const cartItems = [
     { product: {id: 1, name: "Iphone", image: images[0], price: {amount: 1000, currency: 'USD'}}, quantity: 1}, 
      {product: {id: 2, name: "Galaxy 20", image: images[2], price: {amount: 1000, currency: 'USD'}},quantity: 1}, 
        {product: {id: 3, name: "TV", image:images[1], price: {amount: 1000, currency: 'USD'}}, quantity: 1}
    ]

return cartItems.map(item => new CartItem(item))

}

