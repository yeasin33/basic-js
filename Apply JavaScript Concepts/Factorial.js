// calculate factorial of a  number using loop
// 2! = 1*2
// 5! = 1*2*3*4*5
// 10! = 1*2*3*4*5*6*7*8*9*10


// var factorial = 1;
// for (var  i = 1; i <= 10; i++) {
//      factorial = factorial * i;
//     console.log(i,factorial);
// };

function factorial(num){
        var calc = 1;
        for (var  i = 1; i <= num; i++) {
            calc = calc * i;
    };
    return calc;
};

var result = factorial(5);
console.log(result);