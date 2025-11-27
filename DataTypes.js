// Declaring variables and initialize them with values of Boolean, Number, BigInt, String and undefined
let isFound = true;
let notFound = Boolean(false);

let n1 = 67;
let n2 = Number(68);

let big1 = 300n;
let big2 = BigInt(300);

let s1 = "Hello World!";
let s2 = String("Hello, Carl");

let un = undefined;


// Printing all the values and type using the string interpolation
console.log(`${isFound} [${typeof isFound}]`);
console.log(`${notFound} [${typeof notFound}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${big1} [${typeof big1}]`);
console.log(`${big2} [${typeof big2}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(`${un} [${typeof un}]`);


// Chain of conversions
let b = Boolean(BigInt(Number("1234")));

console.log(`${b} [${typeof b}]`);

// Adding two values of the same type

