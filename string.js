/* 
String: 
1. The string is a representation of one or more characters. 
2. The string can be defined in 2 ways
    1. String literal
    2. String object
*/

let myName = "Mohan"; //String literal
let myNameObject = new String("   Mosu      "); //String object

console.log(myName);
console.log("Uppercase: "+ myName.toUpperCase()); //MOHAN
console.log("Lowercase: "+ myName.toLowerCase()); //mohan
console.log("Substring: "+ myName.substring(1,3)); //oh
console.log("Charat: "+ myName.charAt(2));
console.log("Startwith: "+ myName.startsWith("M"));
console.log("Startwith: "+ myName.startsWith("m"));
console.log("Endwith: "+ myName.endsWith("N"));
console.log("Endwith: "+ myName.endsWith("n"));
console.log("Length: "+ myNameObject.length);
console.log("Trim: "+ myNameObject.trim().length);
console.log("Includes(contains in java): "+ myNameObject.includes("su"));


const welcomeMsg = "Hi welcome to bangalore Mohan";
const values = welcomeMsg.split(" ");
let reverseString = "";

for (let i=values.length-1; i>=0 ; i-- ) {
    let word = "";
    for(let j = i.length-1; j >= 0; j-- ){
        word = word + j.values(i);
    }
    reverseString = reverseString + values[i] + " ";
}

console.log(reverseString);

function reverseWordOrString(wordOrString) {
    let reversed = "";
    for (let i = wordOrString.length - 1; i >= 0; i--) {
        reversed += wordOrString[i];
    }
    return reversed;
}

console.log(reverseWordOrString("Welcome to mosu"));
console.log(reverseWordOrString("mosu"));


// function reverseWord(word) {
//     const reversedWord = "";
//     for (let i = word.length - 1; i >= 0; i--) {
//         reversedWord += word[i];
//     }
//     return reversedWord;
// }

// function reverseString(string) {
//     const reversedString = "";
//     for (const word of string.split(" ")) {
//         reversedString += reverseWord(word) + " ";
//     }
//     return reversedString;
// }






