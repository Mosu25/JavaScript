// Array

/* let fruits = ["apple", "orange", "mango", "grape", "banana"];  

console.log("------------For out given values ----------------");
for (const fruit of fruits) {
    console.log(fruit);
}


console.log("------------For in given index ----------------");
for (const fruit in fruits) {
    console.log(fruit);        
}

console.log("-------For in given index + values-------");
for (const fruit in fruits) {
    console.log(fruit, fruits[fruit]);        
}

*/

// Object 

let fruitsData = {
    apple: 120,
    orange: 60,
    mango: 30
} 

console.log("-------For in given key-------");
for (const data in fruitsData) {
    console.log(data);
}

console.log("-------For in given key + values-------");
for (const data in fruitsData) {
    console.log(data, fruitsData[data]);
}