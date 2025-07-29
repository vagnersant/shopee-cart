//CASOS DE USO DOS ITENS

// -> criar item com subtotal certo
async function createItem(id, name, price) {
  return {
    id,
    name,
    price

    // Quantidade e subtotal() não pertencem a criação do item, e sim ao carrinho e estoque.
    // quantity,
    // subtotal: () => price * quantity,
  };
}

export default createItem;
