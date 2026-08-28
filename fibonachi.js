let a = 0;
let b = 1 ;
let n = prompt("entre the number ");
for(let i = 1; i <= n ; i++){
  let sum = a + b ;
  a = sum; 
  b = a ;
 console.log(a);
}
