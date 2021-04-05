// //  Revisit string , array , loop
// let mark = [23,35,45,15,45,36,78];
// for (let i = 0; i < mark.length; i++) {
//     const element = mark[i];
//     console.log("all mark" , element);
// }

// // Remove confusion with function and function vs loop
// function add(number1, number2){
//     let total = number1 + number2;
//     return total;
// }

// let result = add(45,24);
// console.log(result);
// const result1 = add(34,56);
// console.log(result1);

// console.log('haw are you');
// console.log('i am fine');
// console.log('what you do');
// const result3 = add(34,98);
// console.log(result);

// In Function get largestNumber

function largestNumber (numbers){
    var largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element > largest ){
            largest = element;
        }
    }
    return largest;
}
var numbers = [23,45,15,67,78,99,19,17];
 let output = largestNumber(numbers);
 console.log('output',output);