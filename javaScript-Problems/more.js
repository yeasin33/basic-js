// Create a fibonacci iterative way and recursive way.

function fibonacciIterative(num){
    let fibo = [1,1];
    for (let i = 2; i <= num; i++) {
        let nextFibo = fibo[i-1] + fibo[i-2];
        fibo.push(nextFibo);

    }

    return fibo;
}

let result1 = fibonacciIterative(10);
console.log(result1);

function fibonacciRecursive(num){
    // stooping condition
    if(num == 0){
        return [1]
    }
    if(num == 1){
        return [1,1]
    }
    // recurive call
    let fibo = fibonacciRecursive(num - 1);
    let nextFibo1 = fibo[num - 1] + fibo[num - 2];
    fibo.push(nextFibo1);
    return fibo;
}

let result2 = fibonacciRecursive(10);
console.log(result2);