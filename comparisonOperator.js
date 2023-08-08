// Comparison opertors : ==, ===, !=, >,>=,<,<=

let std1 = 34;
let std2 = 99;
let std3 = 50;
let std4 = 35;

// = -> assign value
// == -> check the exact values 
// === -> check the exact values with data types


 let studentMark = 35;
 
 if(studentMark == "35"){
    console.log("Pass double == "); // == -> check the exact value
 }else{
    console.log("Some issue");
 }
 

 if(studentMark === "35"){  // === -> check the exact values with data types
    console.log(" Pass");
 }else{
    console.log("Some issue === ");
 }



let isPass = std1<=35;
console.log(isPass);  // return boolean true or false

let expectedCreteria = 35;

if (std1 < expectedCreteria){
    console.log("Fail");
}else if(std1 > expectedCreteria){
    console.log("Pass");
}else{
    console.log("Just pass");
}