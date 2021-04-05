// Check whether a number is a prime number or not

let n = 33;

for( let i = 2 ; i < n - 1; i++){
    // console.log(i, n % i);
    if(n % i == 0 ){
        console.log('not a prime number');
        break;
    }
};

console.log('you number is a prime number');

function isPrime(n){
for( let i = 2 ; i < n - 1; i++){
    // console.log(i, n % i);
    if(n % i == 0 ){
        return 'not a prime number'
    }
};

return 'your number is a prime number'
}

let result = isPrime(133);
console.log(result);