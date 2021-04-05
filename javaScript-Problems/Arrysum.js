// sum of all Number in array

let number = [23,45,13,4, 6,67,78,98];
let sum = 0;
for (let i = 0; i < number.length; i++) {
    let element = number[i];
    sum= sum + element;
    
}
console.log("total Result is:", sum);

// with function

function getArraySum(number){
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        sum= sum + element;
        
    }
return sum;
}

let total = getArraySum([45, 89, 90,445]);
console.log(total);

let numbers = [34, 12, 9, 45, 23, 90];
let totalResult = getArraySum(numbers);
console.log(totalResult);



