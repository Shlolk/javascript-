// creating the tribonachi series with the help of js (javascrip)
let a = 0;
let b = 1;
let c = 2;
let n = prompt("entre the number :");
for (let i =1;i<=n;i++)
{
  console.log(a);
  let sum =a+b+c;
  a=sum; 
  b=a;
  c=b;
}
