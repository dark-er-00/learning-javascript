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
let bool = true + false;
let sum = 10 + 30;
let bigsum = 10n + 40n;
let concat = "Roland "+ "Carl";
let sumUndefined = undefined + undefined;

console.log(`${bool} [${typeof bool}]`);
console.log(`${sum} [${typeof sum}]`);
console.log(`${bigsum} [${typeof bigsum}]`);
console.log(`${concat} [${typeof concat}]`);
console.log(`${sumUndefined} [${typeof sumUndefined}]`);

// Adding two values of different types
// let x = true + 10n;
let y = false + "Roland";
let z = 10 + "Carl";
// let q = 10n + 10;
let w = 10 + "20";
let e = 100 + true;

// console.log(`${x} [${typeof x}]`);
console.log(`${y} [${typeof y}]`);
console.log(`${z} [${typeof z}]`);
// console.log(`${q} [${typeof q}]`);
console.log(`${w} [${typeof w}]`);
console.log(`${e} [${typeof e}]`);

// Modify the line const str1 = 42 + "1"; to get 43 without removing the quotes
const str1 = 42 + +"1";
console.log(`${str1}`);