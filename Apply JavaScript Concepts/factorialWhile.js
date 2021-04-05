
// var i = 1;
// var factorial = 1;
// while(i <= 10){
//     factorial = factorial * i;
//     // console.log(i, factorial);
//     i++;
// };

// console.log(factorial);

function factorial(num){
    var i = 1;
var fac = 1;
while(i <=num){
        fac = fac * i;
    i++;
};
return fac;
};

let  result = factorial(5);
console.log(result); 
//another way to use factorial
 var set = 1;
for(var i = 5; i >= 1; i--) {
set = set * i;
console.log(i,set);
};

