/* 
Function:
1. Set of statements that performs a task or calculates a CSSMathValue
2. It should take some input and return an output 

* funtions cannot be overloaded
* functions cannot be duplicate

Defining functions:
1. A function definition (also called a function declaration or function statement) consists of the function keyword
2. name of the function
3. parenthesis (option param)
4. login within { statement/s}


type of functions:

1. function declaration:

function name(){
    //statement
}

2. function with param

function name (param 1, param n){
//statement
}

3. function expression:

let name = function(){
    //statement
}

4. Arrow function:

let name = () => {
    //statements
}

5. Anonymous function

() => {

    //statement
}

*/

// function declaration:

function add() {
    console.log("Add: "+ (num1 + num2))
}

function add(num1, num2) {
    console.log("Add: "+ (num1 + num2))
}

add(6,4);

// function expression:

let sub = function(num1, num2){
    console.log("Sub: " +(num1-num2));
}

sub(6,4);

// Arrow function:

let mul = ( num1, num2 ) => console.log("Mul: "+(num1*num2));

mul(6,4);

//6. IIFE --> Immediately invoked function expression

(function(){
    console.log("Server is up and running on port number 3000");
    })();

//5.  Anonymous function

const number = [1,2,3,4,6];
const squareNumber = number.map( e => { return e*e } );
console.log(squareNumber);


//7. Recursive function:

function factorial(n){
    if(n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(4))

// 8. Higher order function

function addition(a,b){
    return a+b;
}

function multipilicaton(a,b){
    return a*b;
}

function operate(myFunction, a,b){
   return myFunction(a,b);
}


const s = operate( addition, 4, 5 );
console.log(s);

const s1 = operate(multipilicaton, 4, 5 );
console.log(s1);