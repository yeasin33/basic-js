// unit convert inch to feet use variable and function
// use variable convert inch to feet

let inch = 156;
let feet = inch/12;

console.log(feet);
console.log(feet);
console.log(feet);

// use function  convert inch to feet
 function inchToFeet(inch){
    let feet = inch/12;
    return feet;
 };

  let nanaFeet = inchToFeet(220);
  console.log(nanaFeet);
 let naniFeet = inchToFeet(156);
 console.log(naniFeet);
 let amarFeet = inchToFeet(120);
 console.log(amarFeet);

 function factorial(num){
   for (let i = 1; i <= num; i++) {
       console.log(i);
       
   };
}

let result = factorial(5);
console.log('result', result);