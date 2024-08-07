const fs = require('fs').promises;
const Path = './products.json';

async function addProducts() {
    try {
        const data = await fs.readFile(Path, 'utf-8');
        let products = JSON.parse(data);

        const myObject = { id: 1, name: 'product 1', stock: 6 };
        products.push(myObject);

        await fs.writeFile(Path, JSON.stringify(products, null, 2));
        console.log('Product added successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

async function deleteProducts() {
    try {
        const data = await fs.readFile(Path, 'utf-8');
        let products = JSON.parse(data);

        products = products.filter(product => product.id !== 1);

        await fs.writeFile(Path, JSON.stringify(products, null, 2));
        console.log('Product deleted successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

async function editProducts() {
    try {
        const data = await fs.readFile(Path, 'utf-8');
        let products = JSON.parse(data);

        const productIndex = products.findIndex(product => product.id === 1);
        if (productIndex !== -1) {
            products[productIndex].name = 'Updated Product 1';
        }

        await fs.writeFile(Path, JSON.stringify(products, null, 2));
        console.log('Product edited successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Uncomment to test the functions
addProducts();
// deleteProducts();
// editProducts();
