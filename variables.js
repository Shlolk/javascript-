//in JavaScript, variables were traditionally declared using the var keyword. It is not used in contemporary programming due to certain problems with scope and complicated operations.
var a = "TpointTech";  
console.log(a);  
 let a = "shlok"
conssole.log(a);


if (true) {  
    let grade = "A";   
    console.log(grade);   
}  
console.log(grade)

// Re-declaring Variables with var, let, and const
var a = 10;
var a = 30;
console.log(a);

//re-deleacring varible with let 
let b = 20;
 b = 30;
cinsole.log(b) // the otput: 30

// re-directing the variable with const 
const myvar = "first";  
console.log(myvar); // first   
// reassignment  
myvar = "second";  
console.log(myvar); // TypeError  
// redeclaration  
const myvar = "third";  
console.log(myvar); // Syntax Error

//hosting behavior of the var , let and const 

//hosting behaviour of the var - When using the var keyword, the variable declaration
//is hoisted to the top of its scope, but the initialization remains in place. If you try to access a var variable before it's declared and initialized, it will return undefined.

console.log(myVariable); // Output: undefined  
var myVariable = 10;  
console.log(myVariable); // Output: 10  



