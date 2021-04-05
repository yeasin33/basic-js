// swap variable , swap without temp, destructing 
// fast method 
let a = 5;
let b = 7;
console.log("Before Swap: a =", a ,"b =", b);
let temp = a;
a = b;
b = temp;
console.log("After Swap: a =", a ,"b =", b);

// Second method
let x = 8;
let y = 9;
console.log("Before Swap: x =", x ,"y =", y);
x = x + y;
y = x - y;
x = x - y
console.log("After Swap: x =", x ,"y =", y);

// Method 3
let q = 10;
let r = 12;
[q , r] = [r,q];
console.log("After Swap: q =", q ,"r =", r);



