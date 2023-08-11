const square = num => num * num ;
const result = square(4);
console.log(result)

const msg = () => "Hello JS";
console.log(msg());

const add = (a,b) => a+b;
console.log(add(4,6));


const getFullName = person => `${person.firstName} ${person.lastName}`

const person = {

    firstName : "Mosu",
    lastName : "M"
}

const fullName = getFullName(person);
console.log(fullName);


const greet = (username='guest', age=0) => `Hello, ${username}! you are ${age} years old`;

const g = greet();
console.log(g);

const g1 = greet('Tom', 30);
console.log(g1);


// rest parameters ... varargs
const sumOfNumbers = (...numbers) => numbers.reduce((acc,num) => acc+num, 0);
const sum = sumOfNumbers(3,4,5,6,7);
console.log(sum);


const browserInfo = (browser = "chrome", ...details) =>  {
    console.log(`Browser: ${browser}`);
    console.log("other details", details);
}

browserInfo();
browserInfo("firefox","115.11","mozila", "headless");


//max number using math
const findMaxNumber = (a,b,c) => {
    return Math.max(a,b,c)
    };

const maxValue = findMaxNumber(10,77,96);
console.log(maxValue);