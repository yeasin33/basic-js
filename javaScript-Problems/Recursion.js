// 5! = 1*2*3*4*5
function factorial(num){
    let fact = 1;
    for (let i = 1; i <= num; i++) {
       fact = fact * i;
        
    }
    return fact;
}

let result = factorial(5);
console.log(result);

function factorialRecursive(num2){
    if(num2 == 1){
        console.log(num2)
        return 1;
    }
    else{
        console.log(num2, (num2 - 1))
        return num2 * factorialRecursive(num2 - 1)
    }
}

let result2 = factorialRecursive(5);
console.log('result', result2);