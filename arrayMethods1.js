/* 1. every(): Determines whether all the members of an array 
satisfy the specified test. */

let num = [1,2,3,4,6];
let flag = num.every( e => e < 10);
console.log(flag); // true
let flag1 = num.every(e => e > 10);
console.log(flag1); //false 

/* 2. some() : Determines whether the specified callback function
 returns true for any element of an array. */

let number = [1,2,3,4];
let flag2 = number.some( e => e % 2 === 0 );
console.log(flag2);
let flag3 = number.some( e => e > 5 );
console.log(flag3);


/* 3 . find() Returns the value of 
the first element in the array where predicate is true, and undefined otherwise. */

let total = [1,3,4,5,7];
let flag5 = total.find(e => e % 2 == 0 );
console.log(flag5); // 4

let total1 = [1,3,5,7];
let flag4 = total1.find(e => e % 2 == 0 );
console.log(flag4); // undefined

/* 4. Returns the index of 
the last occurrence of a specified value in an array, or -1 if it is not present. */

let index = [1,3,4,5,7,4];
let lastIndex =index.lastIndexOf(4);
console.log(lastIndex); // 5

/* 5. reverse(): Reverses the elements in an array in place.
 This method mutates the array and returns a reference to the same array. */

let numArray = [1,3,4,5,7,4];
let reversedArray = numArray.reverse();
console.log(numArray); // [ 4, 7, 5, 4, 3, 1 ]


/* 6. sort(): Sorts an array in place. 
This method mutates the array and returns a reference to the same array. */

let fruits = ["apple", "orange", "grape", "mango"];
let sortedFruits = fruits.sort();
console.log(sortedFruits); // [ 'apple', 'grape', 'mango', 'orange' ]

let fruits1 = ["apple", "orange", "Mango","grape", "mango", "123orange"];
let sortedFruits1 = fruits1.sort();
console.log(sortedFruits1); // [ '123orange', 'Mango', 'apple', 'grape', 'mango', 'orange' ]
