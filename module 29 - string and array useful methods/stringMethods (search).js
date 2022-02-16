const products = [
    "ABC Phone",
    "ABC Laptop",
    "ABC phone 2",
    "ABC laptop 2",
    "bdc Laptop",
    "my laptop",
    "your phone",
    "my phone"
];

const searching = "Laptop";
const output = [];

// for (const product of products) {
//     if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//         output.push(product);
//     }
// }

// for (const product of products) {
//     if (product.toLowerCase().includes(searching.toLowerCase())) {
//         output.push(product);
//     }
// }

// for (const product of products) {
//     if (product.toLowerCase().startsWith(searching.toLowerCase())) {
//         output.push(product);
//     }
// }


for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}

console.log(output);