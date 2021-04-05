// Create a fibonacci series  using a for loop
// fibo[2] = fibo[2 - 1] + fibo[2 - 2];
// fibo[3] = fibo[3 - 1] + fibo[3 - 2];
// fibo[4] = fibo[4 - 1] + fibo[4 - 2];
// fibo[5] = fibo[5 - 1] + fibo[5 - 2];
// fibo[i] = fibo[i - 1] + fibo[i - 2];
// fibo[n] = fibo[n - 1] + fibo[n - 2];
let fibo = [0,1];
for(let i = 2; i <= 10; i++) {
fibo[i] = fibo[i -1] + fibo[i - 2];
// console.log(fibo[i],fibo[i - 1], fibo[i - 2]);
};

console.log(fibo);

function fibonacci(n){
    let fibo = [0,1];
for(let i = 2; i <= n; i++) {
fibo[i] = fibo[i -1] + fibo[i - 2];

}
return fibo;

};

let result = fibonacci(10);
console.log(result);

// Create a fibonacci series using a  while loop
let fibo1 = [0,1];
var i = 2;
while(i <= 10){
    fibo[i] = fibo[i -1] + fibo[i - 2];
    i++;
};

console.log(fibo);

function fibonacci1(x){
            let fibo1 = [0,1];
            var i = 2;
            while(i <= x){
            fibo1[i] = fibo1[i -1] + fibo1[i - 2];
            i++;
        };

        return fibo1;
};

let result1 = fibonacci1(12);
console.log(result1);