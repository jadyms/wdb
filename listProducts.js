var faker  = require('faker');

console.log("Welcome to my Shop");
for (var i = 0; i < 10; i++){
console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}