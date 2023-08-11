let myArray = []; // An empty array
let numbers = [1, 2, 3, 4, 5, 6]; //An array with numbers
let fruits = ["apple", "banana", "orange"]; // An array with strings

/*  1. push: Appends new elements to the end of an array, 
 and returns the new length of the array */

let lang = ["java", "Python", "JS"];
lang.push("Ruby", "PHP");
console.log(lang); // [ 'java', 'Python', 'JS', 'Ruby', 'PHP' ]

/* 2. pop: Removes the last element from an array and returns it. If the array is empty,
  undefined is returned and the array is not modified.
 */

let numberArray = [1, 2, 4, 6, 7];
let pop = numberArray.pop();
console.log(pop); // 7
console.log(numberArray); // [ 1, 2, 4, 6 ]

/* 3. unshift: Inserts new elements at the start of an array, 
 and returns the new length of the array */

 let color = ["blue", "yellow", "red"];
 color.unshift("black","green");
 console.log(color); // [ 'black', 'green', 'blue', 'yellow', 'red' ]

/* 4. shift: Removes the first element from an array and returns it. 
 If the array is empty, undefined is returned and the array is not modified. */

let fruits1 = ["apple", "banana", "orange"];
let fruit = fruits1.shift();
console.log(fruit); // apple
console.log(fruits1); // [ 'banana', 'orange' ]
console.log(color.length); // 5 length of the array

/* 5. splice: Removes elements from an array and,
 if necessary, inserts new elements in their place, returning the deleted elements. */

let animals = ["dog","cat", "cow","rabbit"];
animals.splice(1,2,"lion","tiger"); 
console.log(animals); // [ 'dog', 'lion', 'tiger', 'rabbit' ]

/* 6. slice: Returns a copy of a section of an array. For both start and end,
 a negative index can be used to indicate an offset from the end of the array. 
For example, -2 refers to the second to last element of the array.. */

let num = [1,3,4,5,7];
let newNum = num.slice(1,3);
console.log(newNum); // [ 3, 4 ] exclude endindex

/* 7. Combines two or more arrays.
 This method returns a new array without modifying any existing arrays. */

let animals1 = ["dog","cat", "cow","rabbit"];
let num1 = [1,3,4,5,7];
let mixedArray= animals1.concat(num1);
console.log(mixedArray); // [ 'dog', 'cat', 'cow', 'rabbit', 1, 3, 4, 5, 7 ]

/* 8. indexof: Returns the index of the first occurrence of a value in an array, 
or -1 if it is not present. */

let colors = ["blue", "yellow", "red", "blue"];
let index = colors.indexOf("yellow");
console.log(index); // 1
let mosuindex = colors.indexOf("mosu");
console.log(mosuindex); // -1 if not available in array it returns -1

// finding 2 index of blue

let secondindex = colors.indexOf("blue", 2); // static finding 2nd index 
console.log(secondindex) // 3
let secondindex1 = colors.indexOf("blue",colors.indexOf("blue")+1); //dynamic finding 2nd index
console.log(secondindex1) // 3


/* 9. includes: Determines whether an array includes a certain element,
 returning true or false as appropriate. */

let test = ["admin", "customer", "seller", "vendor"];
let flag = test.includes("customer");
console.log(flag); // true
let flag1 = test.includes("customer","mosu");
console.log(flag1); // true
 
// 10. forEach: Performs the specified action for each element in an array.

let numArrays = [1,2,4,5,7,8,9,3];
numArrays.forEach(e=>console.log(e)); // 1,2,4,5,7,8,9,3
numArrays.forEach(e=>console.log(e*2)); // 2,4,8,10,14,16,18,6




