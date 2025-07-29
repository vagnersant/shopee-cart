import createItem from "./item.js"

// Criar uma lista para falsear um banco de dados
const products = []

// acrescentar produtos à lista
async function addItems() {
    const item1 = await createItem(1, "hotwheels ferrari", 20.99);
    const item2 = await createItem(2, "hotwheels lamborghini", 39.99);
    const item3 = await createItem(3, "hotwheels bmw", 49.99);
    const item4 = await createItem(4, "hotwheels corvete", 59.99);
    const item5 = await createItem(5, "hotwheels chevette", 69.99);
    const item6 = await createItem(6, "hotwheels maveric", 79.99);

    addItem(item1, 100);
    addItem(item2, 10);
    addItem(item3, 1);
    addItem(item4, 200);
    addItem(item5, 20);
    addItem(item6, 2);
};

async function addItem(item, quantity) {
    products.push({ item: item, quantity: quantity })
}

async function showStock() {
    console.log ("Estoque atual-------------");
    products.forEach(product => {
        console.log (`${product.item.id} - ${product.item.name} - ${product.quantity}`)    
    });

    console.log ("--------------------------");
}

/*
    Obtem o item do estoque se houver quantidade suficiente armazenada
    ou retorna -1 se o item não foi encontrado;
    ou retorna 0 se não houver estoque suficiente.
*/
async function getItemById(id, quantity) {
    // encontrar o item no estoque
    const item = products.findIndex((product) => product.item.id === id);

    // se item === -1, então o item não foi encontrado
    if (item === -1)
        return false;
    else {
        // se houver estoque suficiente para a quantidade solicitada, retorne o produto
        if (products[item].quantity >= quantity) {
            products[item].quantity-= quantity
            return {item: products[item].item, quantity: quantity};
        }
        else {
            return 0;
        }
    }
}

async function devolutionProduct(item, quantity) {
    const index = products.findIndex((p) => p.item === item);
    products[index].quantity += quantity;
}

export { getItemById, addItems, devolutionProduct, showStock };