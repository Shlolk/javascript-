//Program to print Hello, World!  
document.write('Hello, World!');
//program to print Hello, World!  
console.log('Hello, World!');
//program to print Hello, World!  
alert('Hello, World!');  
var Grade = "B";  
// Declaring global variable outside the function  
myFunction();  
// Global variable accessed from   
// Within a function  
function myFunction() {  
    console.log("global value of Grade is: ", Grade);  
}  
// Changing value of global  
// Variable from outside of function  
{  
    Grade = "A";  
    console.log("local value of Grade is: ", Grade);  
}  
