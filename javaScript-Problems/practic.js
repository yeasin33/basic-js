// // Practice Basic javaScript milestone
// // let num = "amar shoran bangla desh is a small countery . the saudi central bank";
// // let result = num.split( )
// // console.log(result);\


// let applePrice = 0.2;
// let bananaPrice = 0.4;
// let total = bananaPrice + applePrice;
// total = total.toFixed(58);
// //  applePrice = " " + applePrice;
// console.log(total);

// // javaScript variable 

// // var num = "mohammad";
// // console.log(num);

// let potato = 40;
// let result = potato + 40;
// console.log(result);

// let result2 = potato - 20;
// console.log(result2);

// let result3 = potato * 3;
// console.log(result3);
// let banana = 50;
// banana = banana + 50
// console.log(banana);

// let box = null;
// console.log(box);

// let apple1;
// let apple2;

// apple1 = 50;
// apple12 = 770;
// apple1 = " " + apple1;
// console.log( typeof apple1 + typeof apple1);

// let num1 = 45;
// let num2 = 50;

// if(num1 > 60 && num2 > 50){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// let x = 5;
// if(x !== 5){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// let y = 5;
// if(y >= 3){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// let number1 = 28;
// let number2 = 24;
// if(number1 == 23 || number2 < 24){
//     console.log(true);
// }
// else if(number1 == 28){
//     console.log("good work")
// }
// else{
//     console.log(false);
// }

// let allName = ['mohammad','yeasin','masud','rakib','hasan','shajid','arafat'];
// //  allName.splice(4,1,'jahid');
// // console.log(allName);

// let cut = allName.slice(2,5);
// console.log(cut);

// let student1 = ['arifa','sadia','sania','khaleda',];
// let student2 = ['khelada','mousomi','masuma','aklima'];
// let allStudents = student1.concat(student2);
// console.log(allStudents);

// let number = [23,23,45,22,55,70];
// const evenNumber = (value)=>{
//     if(value%2 === 0)
//     return value;
// }

// let lastEvenNumber = number.find(evenNumber);
// console.log(lastEvenNumber);
// let lastEvenNumberIndex = number.findIndex(evenNumber);
// console.log(lastEvenNumberIndex);
3
2
1
// function countDown(fromNumber) {
//     console.log(fromNumber);
// }

// countDown(3);
// function countDown(fromNumber) {
//     console.log(fromNumber);
//      countDown(fromNumber-3);
// }

// countDown(3);
// function countDown(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(3);
// let countDown = function f(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         f(nextNumber);
//     }
// }

// let newYearCountDown = countDown;
// countDown = null;
// newYearCountDown(10);

// function sumOfDigits(num) {
//     if (num == 0) {
//         return 0;
//     }
//    return num % 10 ;
// //    + sumOfDigits(Math.floor(num / 10));
//  }

// let result = sumOfDigits(100);
// console.log(result);

function pow(x,n) {
    let result = 1;
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let result = pow(2,3);
  console.log(result);

