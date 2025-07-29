import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";
import * as stock from "./services/stock.js"

const myCart = [];
const myWhishList = [];

// carregando banco de dados
await stock.addItems();

console.log("Welcome to the your Shopee Cart!");

const item1 = await stock.getItemById(1, 100)
const item2 = await stock.getItemById(2, 10)
/*
//criando dois itens
const item1 = await createItem(1, "hotwheels ferrari", 20.99, 1);
const item2 = await createItem(2, "hotwheels lamborghini", 39.99, 3);
const item3 = await createItem(3, "hotwheels fusca", 49.99, 2);
*/
// adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

//await cartService.removeItem(myCart, item2);
//await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);
// deletei dois itens do carrinho
await cartService.deleteItem(myCart, item1);
// await cartService.deleteItem(myCart, item1.name);
await stock.showStock();

await cartService.calculateTotal(myCart);
