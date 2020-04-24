const products = [
    "Mani", "Mantequilla", "Harina", "Huevos", "Canela",
    "Leche","Chocolate", "Vainilla", "Azucar", "Ron"
];
const markets = [
    ["Gama Express", "Plaza Venezuela Av. Principal, Caracas"],
    ["Unicasa", "Las Mercedes, Av. America, Caracas"],
    ["Concresa", "Los Naranjos, entre Av. 1 y 2, Caracas"]
];

let productList = null;

class Market {
    constructor(nameMarket, addressMarket, rate_dollarMarket, productsMarket){
        this.name = nameMarket;
        this.address = addressMarket;
        this.rate_dollar = rate_dollarMarket;
        this.products = productsMarket;
    }
    listProducts(){
        // List the products available by the market and their stock
    }
}

class Product {
    constructor(nameProduct, priceProduct, stockProduct){
        this.name = nameProduct;
        this.price = priceProduct;
        this.stock = stockProduct;
    }

}


const market1 = new Market(markets[0][0], markets[0][1], 110070.00, randomProducts()),
    market2 = new Market(markets[1][0], markets[1][1], 113000.50, randomProducts()),
    market3 = new Market(markets[2][0], markets[2][1], 112060.00, randomProducts());


console.log(`market1 is `, market1);
console.log(`market2 is `, market2);
console.log(`market3 is `, market3);

function randomProducts() {
    let productArray = [], productsAssigned = [], indexProduct;

    for(let i=0; i < products.length; i++) {
        indexProduct =  Math.floor(Math.random() * products.length);

        // the products can't repeat in this array
        // Note: productArray has the names of the products
        if(productArray.every(prod => prod !== products[indexProduct]))
            productArray.push(products[indexProduct]);  
    }


    for(let i=0; i < productArray.length; i++) {
        let newProduct = new Product(productArray[i], randomPrice(), randomStock());
        productsAssigned.push(newProduct);
    }
    return productsAssigned;
}

/* set the price of every product randomly*/
function randomPrice() {
    let price = Math.round(Math.random() * 1000);
    return price;
}

function randomStock() {
    let stock = Math.round(Math.random() * 10);
    return stock;
}

function getCheapestPath() {

}