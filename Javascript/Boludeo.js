// let tasks = [
//     "Cook dinner",
//     "Read a book",
//     "Clean the kitchen"
// ];

// let upperTasks = tasks.map(task => task.toUpperCase());

// console.log(upperTasks);
// --------------------------------------------------

// let words = ["code", "javascript", "web", "developer", "AI"];

// let shortWords = words.filter(word => word.length <= 5);
// console.log(shortWords);

// ---------------------------------------------------

// let numbers = [5, 10, 15, 20];
// numbers.forEach(number => {
//     console.log(`Number: ${number}`);
// });

// --------------------------------------------------

// let numbers = [1, 2, 3, 4, 5, 6];

// let evenNumbers = numbers.filter(num => num % 2 === 0).map(evenNumber => evenNumber* 2);

// console.log(evenNumbers);
 
// ------------------------------------------------

// let tasks = ["Study", "Workout", "Read book"];

// let longTasks = tasks.map(task => task.length);

// console.log(longTasks);

// ------------------------------------------------

// let names = ["Ana", "Jonahtan", "Luis", "Christopher"];

// let longNames = names.filter(name => name.length > 6).map(name => name.toUpperCase())

// console.log(longNames);

// -----------------------------------------------

// let names = ["Ana", "John", "Maria"];

// let message = names.map(name => `Hi ${name}!`);
// console.log(message);

// -----------------------------------------------


// let numbers = [3, 6, 9];

// let whatNumber = numbers.forEach(num => {
//     console.log(`The number is ${num}`)
// });

// ----------------------------------------------

// let numbers = [5, 12, 8, 20, 3];

// let stringNum = numbers
// .filter(num => num > 10)
// .map( num => `Value: ${num}`);

// console.log(stringNum);

// ----------------------------------------------

let products = [
  { name: "Laptop", price: 999.99, inStock: true },
  { name: "Mouse", price: 25.5, inStock: true },
  { name: "Keyboard", price: 75.25, inStock: false },
  { name: "Monitor", price: 200, inStock: true }
];

function formatPrice(priceNumber) {
    return "$" + priceNumber.toFixed(2)
}

let availableProducts = products.filter(product => product.inStock === true);


let productMessages = availableProducts.map(product => `${product.name} Costs: ${formatPrice(product.price)}`)

console.log(productMessages);
