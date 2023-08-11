
/* 1. map(): Calls a defined callback function on each element of an array, 
and returns an array that contains the results. */

let num = [1,2,3];
let doubleNumber = num.map( e => e * 2);
console.log(doubleNumber);


// F -> C
// (F-32) * (5/9)

let fahTmp = [32,68,86,104,98];

function fahToCel(fah){
    return (fah-32) * (5/9);
}

let celTemp = fahTmp.map(fahToCel);
console.log(celTemp);


/* 2. filter(): Returns the elements of an array 
that meet the condition specified in a callback function */

let number = [1,2,3,5,4,6,7,8,9];
let even = number.filter( e => e % 2 === 0 );
console.log(even);

let employee = [

{name:"mosu", age:34 , gender:"male"},
{name:"subash", age:29, gender: "male"},
{name:"lisa", age:25, gender:'female'},
{name:"priya", age:23, gender:"female"}

]

let femaleEmpOver24 = employee.filter( emp => {
    return emp.gender === "female" && emp.age > 24
    });

console.log(femaleEmpOver24); //[ { name: 'lisa', age: 25, gender: 'female' } ]


/* 3. reduce(): Calls the specified callback function for all the elements in an array.
 The return value of the callback function is the accumulated result,
 and is provided as an argument in the next call to the callback function. */

let numArray = [1,2,3,4,5];
let sumOfNumber = numArray.reduce( ( acc,num ) => acc+num , 0);
console.log(sumOfNumber) // 15


// max number from the array
let top = [20, 24, 4, 67, 99, 87]

let max = top.reduce((max,num)=>{

    if( num > max ){
        return num;
    } else {
        return max;
    }

},top[0]);

console.log(max); // 99


//cart : name and price

let cartItems = [
    { name: "t-shirt", price:300 },
    { name: "shirt", price:250},
    { name: "pant", price: 350},
    {name: "shoe", price: 650}
    ]

    let totalPrice = cartItems.reduce((total, item) => total+item.price, 0);
    console.log(totalPrice); // 1550