//NOTA: filename main.mjs si activa la siguiente linea y usa node
import {market1, market2, market3} from './tools.js';
import {searchProducts} from './search.js';


console.log(`market1 is `, market1);
console.log(`market2 is `, market2);
console.log(`market3 is `, market3);

let button = document.getElementById('button1');
button.addEventListener('click', getProductList);

function getProductList () {
    const productList = [];
    let inputs = document.getElementById('formProducts').getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'checkbox' && inputs[i].checked == true){
            productList.push(inputs[i].value);
        }
    }
    console.log("Selected Products: " + productList);
    searchProducts(productList);
}


function getCheapestPath() {

}