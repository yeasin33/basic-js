// Random Number, Random Number Between 1 To 6
// Number float to floor Method
let number = 34.455689;
console.log(number);
let floorNumber = Math.floor(number);
console.log(floorNumber);

// Number float to ceil Method
let number1 = 34.3324;
console.log(number1);
let ceilNumber = Math.ceil(number1);
console.log(ceilNumber);

// Number float to round method
let number2 = 23.3444;
console.log(number2);
let roundNumber = Math.round(number2);
console.log(roundNumber);

// float Number point 50 to up also 50. like, 34,5000, 34,5999. it's Always round 35 . see example
let number3 = 23.5044;
console.log(number);
let roundNumberUp = Math.round(number3);
console.log(roundNumberUp);

// Random Method

let randomNumber = Math.random() * 10000;
let roundNumber2 = Math.round(randomNumber);
console.log(roundNumber2);

// Use for loop with random method
for(let i = 0; i <= 10; i++) {
    let randomNumber = Math.random() * 10000;
let roundNumber2 = Math.round(randomNumber);
console.log(roundNumber2);
}
