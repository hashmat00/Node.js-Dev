var faker = require("faker");

console.log("==============================");
console.log("=== Welcome to My Shop! ======");
console.log("==============================");

for(var i=0; i<11; i++){
console.log(faker.commerce.productName() + " -   $" + faker.commerce.price());
}