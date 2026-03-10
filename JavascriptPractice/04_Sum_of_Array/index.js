// using loop
const arr = [1,24,66,22];

let sum = 0;

for(let i =0 ; i< arr.length; i++){
  sum += arr[i];
}
console.log(sum)

// Using Array.prototype.reduce() method.


const array = [22,33,55,66];

const sum2 = array.reduce((a,b)=> a+b, 0)
console.log(sum2)