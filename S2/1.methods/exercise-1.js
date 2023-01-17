const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
const camisetaProducts = [];

for (const camiseta of products) {
    if (camiseta.includes("Camiseta")) {
        camisetaProducts.push(camiseta)
    }
}

console.log(camisetaProducts)