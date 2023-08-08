// Arithmatic operators : +, -, *, /, % , ++ , --
// Comparison opertors : ==, ===, !=, >,>=,<,<=
// Logical operator
// Assignment operator
// conditional operator
// Ternary Operator




let num1 = 20;
let num2 = 10;

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;
let incrementPostfix = num1++;
let decrementPostfix = num1--;
let incrementPrefix = ++num1;
let decrementPrefix = --num1;

console.log("Add: "+ sum)
console.log("Sub: "+ sub)
console.log("Mul: "+ mul)
console.log("Div: "+ div)
console.log("mod: "+ mod)
console.log(incrementPostfix); // returns the value before incrementing
console.log(decrementPostfix); 
console.log(incrementPrefix);  // return the incremented value
console.log(decrementPrefix); 

let a = 12;
console.log("Increment: "+ a++); // here value 12, after this command executed it will change to 13
console.log(a);

let b = 12;
console.log("Increment: "+  ++a); // here value 12, after this command executed it will change to 13
console.log(a);


