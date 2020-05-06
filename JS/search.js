import {market1, market2, market3} from './tools.js';

export function searchProducts(products) {

    for(let i=0; i < products.length; i++) {
        searchProductsInMarkets(products[i], market1, market2, market3);
    }
}

function searchProductsInMarkets(productSearched, ...markets) {
    // It selects the market or every market
    for(const marketSelected of markets) {
        // It selects every product
        for(const product of marketSelected.products) {
          if(product.name == productSearched && product.stock)
            console.log(`${product.name} se encuentra en ${marketSelected.name}`);
        }
    } 
}