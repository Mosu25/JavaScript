/* 
1. Storing a collection of multiple items under a single variable name
2. JavaScript arrays are resizable and can contain a mi of different data types
3. Arrays values can be accessed by index, the index starts from 0 
*/


let fruits = ["apple", "orange", "mango", "grape", "pine"];
let myFriends = new Array("mosu","santhosh","subash"); //constructor based array declaration


console.log(fruits[1]); // orange
console.log(fruits.length); // 5 
console.log(fruits[fruits.length]) // it will return "undefined" 5th index not available that is the reason
console.log(fruits[fruits.length-1]) // it will return last element in the array 

fruits[5] = "banana"; // set the array
console.log(fruits);

const myName = "mosu";
console.log(typeof myName); // return datatype of variable 
console.log(typeof fruits)

console.log(Array.isArray(fruits)); //retrun true
console.log(Array.isArray(myName)); // return false