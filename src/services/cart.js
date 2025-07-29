//quais açoes meu carrinho pode fazer

import { devolutionProduct } from "./stock.js";

//CASOS DE USO
// ✅ -> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

function subTotal(product) {
  return product.item.price * product.quantity;  
}

// ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");

  const result = await userCart.reduce((total, item) => total + subTotal(item), 0);
  console.log(`🎁Total: ${result}`);
}

// -> deletar item do carrinho
async function deleteItem(userCart, product) {
  const index = userCart.findIndex((p) => p.item === product.item);

  if (index !== -1) {
    await devolutionProduct(product.item, userCart[index].quantity);
    userCart.splice(index, 1);
  }
}

// -> ✅ remover um item - diminui um item
async function removeItem(userCart, product) {
  //1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.item === product.item);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //3. item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    await devolutionProduct(product.item, 1);
    return;
  }

  //4. caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    await devolutionProduct(product.item, 1);
    return;
  }
}

// ✅ mostra todos os items do carrinho
async function displaycart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((product, index) => {
    console.log(
      `${index + 1}. ${product.item.name} - R$ ${product.item.price} | ${
        product.quantity
      }x | Subtotal = ${subTotal(product)}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displaycart };
