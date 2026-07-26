myfunction();  
  
function myfunction(){  
    //Local variable  
    let word = "TpointTech";  
    console.log(word);  
}  
  
console.log(word);  

mydemo1();  
mydemo2();  
let word;  
function mydemo1(){  
    //Local variable  
    let word = "Tpoint Tech";  
    console.log(word);  
}  
function mydemo2(){  
    //Local variable  
    let word = "Tpoint";  
    console.log(word);  
}  
console.log(word);  
function introduce(city, country) {  
  console.log(this.name + " from " + city + ", " + country);  
}  
const person = { name: "Taylor Swift" };  
introduce.apply(person, ["New York", "USA"]);

function greet() {  
  console.log("Hi, " + this.name);  
}  
const person = { name: "Tom" };  
const greetgreetClara = greet.bind(person);  
greetClara(); 


function greet() {  
  console.log("Hello, " + this.name);  
}  
const person = { name: "Taylor" };  
greet.call(person);
