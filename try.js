
var num = 5;

if(num <= 8){
    console.log("good work");
}

else{
    console.log("dose't good");
}

// javaScript array method 
// add, extracts  item end in array
var friends = ['jahid', 'rakib','kawsir','faisal','mahmod','hasan'];
//add item in the end
friends.push('yeasin');

//extracts item in the end
friends.pop('hasan');

console.log(friends);
// javaScript beginning in array add and extracts
var friends1 = ['jahid', 'rakib','kawsir','faisal','mahmod','hasan'];

// add item in array beginning 
friends1.unshift('amamed','rabbi');

// extracts item in array beginning
friends1.shift();
console.log(friends1);

// javaScript splice method 
// use splice add element in array;

var student1 = ['arafat','mohammad','yeain','ashik','rabbi'];
console.log(student1);
student1.splice(2,0,'mohammad');
console.log(student1);

student1.splice(3,2);
console.log(student1);

student1.splice(2,1,"habiba");
console.log(student1);

var student3 = ['arafat','mohammad','yeain','ashik'];
console.log(student3);
student3.splice(-2,1);
console.log(student3);
// use splice extracts element in array
// var students = ['arafat','mohammad','yeain','ashik','rabbi'];
// console.log(students);
// students.splice(3,2);
// console.log(students);

// slice method 
// use slice create a new array , copy form new array index end to till
// var student2 = ['arafat','mohammad','yeain','ashik','rabbi','shomir','arif','hasan'];
// console.log(student2);

// let newArray = student2.slice(0,4);
// console.log(newArray);

// concat()method 

let country = ['bangladesh','india','nepal','saudi','dobai','united arab',];
console.log(country);
let country1 = ['bangladesh','amirica','chin','spin','dobai','london',];
console.log(country1);

let country2 = ['arabia','india','nepal','saudi','dheala','janinah',];

let allCountry = country1.concat(country.concat(country2));
console.log(allCountry);


// find element in array

let parson  = ['faisal','shobo','najmol','jahid','shomon','shahin'];
console.log(parson);
let findName = parson.indexOf('shomon');
console.log(findName);

let findLast = parson.lastIndexOf('shobo');
console.log(findLast);

console.log(parson[2]);

// includes method 
let fruits = ['Banana','apple','orange'];
console.log(fruits);

let greenApple = fruits.includes('quri');
console.log(greenApple);

// find method
// find (callback value) return the value of the first element that pass certain condition

// method 1
let number6 = [9,5,45,22,44,15,35];

const evenNumber = (value, index)=>{
    if(value%3 === 0)
    return value;
}
const fastNumber = number6.find(evenNumber);
console.log(fastNumber);

//method 2
var idNumber = [3,5,23,33,56];

const greaterThanNumber = idNumber.find(function(num){
return num > 30;
});
console.log(greaterThanNumber);

// method 3 
// In Objects use find method
const allStudent = [
    {name:'yeasin', id:12, number: 34, subject:"bangla"},
    {name:'faisal', id:34, number: 40, subject:"english"},
    {name:'shohan', id:23, number: 60, subject:"Math"},
    {name:'abdullah', id:13, number: 79, subject:"golbal"}
];

const passedStudent = allStudent.find((exam)=>{
    return exam.number >= 40;
});

console.log(passedStudent.id);

// findIndex method
// find (callback value) return the value of the first element that pass certain condition

let  number8 = [18,56,34,26,45,22,45];


let indexNumber = (value)=>{
    if(value%3 === 0)
    return value;
};
let fastIndexNumber = number8.findIndex(indexNumber);
console.log(fastIndexNumber);

// Objects in findIndex 

let studentResult = [
    {name:"arafat",
     id:23,
    gpa: 3.4},

    {name:"Mohammad",
     id:12,
    gpa: 3.0},

    {name:"abdullah",
     id:11,
    gpa: 4.0},

    {name:"arafat",
     id:23,
    gpa: 3.5},

    {name:"arafat",
     id:23,
    gpa: 4.8}
    
];

console.log(studentResult.findIndex(x => x.gpa>4));

// filter method 

let numbers1 = [24,2,35,12,34,23,44,45];

 let numbers = numbers1.filter((num)=>{
return num > 23;
});

console.log(numbers);

// we use filter in Objecst 
const allStudents = [
    {name:'yeasin', id:12, number: 34, subject:"bangla"},
    {name:'faisal', id:34, number: 40, subject:"bangla"},
    {name:'shohan', id:23, number: 60, subject:"Math"},
    {name:'abdullah', id:13, number: 79, subject:"math"},
    {name:'rohan', id:11, number: 50, subject:"english"},
    {name:'rahman', id:33, number: 55, subject:"math"},
    {name:'fahad', id:24, number: 79, subject:"english"},
    {name:'rohan', id:56, number: 48, subject:"english"},
    {name:'nayeaf', id:35, number: 88, subject:"math"},
    {name:'abofaisal', id:19, number: 79, subject:"english"}
];

 let result1 = allStudents.filter((result)=>{
    return result.number >= 40 && result.subject === "bangla"; 
})

console.log(result1);

// method 3

let numbers3 = [1,2,2,3,4,5,3,5,6,6,12,14,8,13];

console.log(numbers3.filter((value,index, arr)=>{
    return arr.indexOf(value) === index;
}));

let numbers5 = [2,3,5,23, 6,8];

let results2 = numbers5.map((num) =>{
return 2 * num;
});

console.log(results2);

let allNames = ['yeasin','aziz','ibrahim','abdullah','faisal','saifullah','anayet'];

const items = allNames.sort();
console.log(items);

// number sort 

let num5 = [1,3,7,23,22,61,45]; 
console.log(num5);
let result3 = num5.sort();
let result5 = num5.sort((a,b)=>{
    return b-a;
});

console.log(result5)

// objects in use sort 
const allStudents1 = [
    {name:'yeasin', id:12, number: 34, subject:"bangla"},
    {name:'faisal', id:34, number: 40, subject:"bangla"},
    {name:'shohan', id:23, number: 60, subject:"Math"},
    {name:'abdullah', id:13, number: 79, subject:"math"},
    {name:'rohan', id:11, number: 50, subject:"english"},
    {name:'rahman', id:33, number: 55, subject:"math"},
    {name:'fahad', id:24, number: 79, subject:"english"},
    {name:'rohan', id:56, number: 48, subject:"english"},
    {name:'nayeaf', id:35, number: 88, subject:"math"},
    {name:'abofaisal', id:19, number: 79, subject:"english"}
];

let items3 = allStudents1.slice().sort((a,b)=>{
    return a.number-b.number;
});

console.log(items3);

// javaScript reverse method
// method 1
var item2 = [2,3,4,5,8,9,10];
console.log(item2.reverse());

// method 2

const arr = {0:1, 1:2, 2:3, 2:4, length : 3}
console.log(arr);

Array.prototype.reverse.call(arr);
console.log(arr);

// split/join method
// convert a string to array to array and back
// split method 
const str = "My Bangla Of Gold I Love You";
const resultStr = str.split(",");
console.log(resultStr);

// join method 

const allCountry2 = ['bangladesh','india','nepal','pakistan','saudi arabia','spain'];
console.log( typeof allCountry2);
const str1 = allCountry.join('  /+');
console.log( str1);

// reduce method 
// calculate a single value over the array by calling func for each element and passing an intermediate result between the result 

var allNum = [2,4,34,2,8,11];
console.log(allNum);
const result10 = allNum.reduce((x , i)=>{
    return x + i;
},0);

console.log(result10);

// forEach method 
// cell func for every element does return every element 
let days = ['saturday','sunday','monday','tus','wed','thu','friday'];
console.log(days);

days.forEach(function (i){
    console.log(i);
});

let date1 = [1,3,7,23,22,61,45]; 
console.log(date1);
let squareNumber = []

date1.forEach(function(i){
    squareNumber.push(i * i);
})

console.log(squareNumber);

// update value in array

let date2 = [1,3,7,8,9,10,34,22]; 

date2.forEach(function(day, index, arr){
    arr[index] = day+8;
});
console.log(date2);

// Multiple function and function

// Basic Function types
// creating function

function square1(number1){
    let result = number1 * number1;
    console.log("Total = " + ' ' + result);
};
square1(12);
square1(15);

// Function declaration
function add(a,b){
console.log(a+b)
};
 add(10,18);

// local variable

function greet(){
    let userName = "Mohammad";
    console.log("Hi" + userName);
};
greet();

// Global variable 
let name1 = "Mohammad Yeasin";
function global(){
console.log("assalamoalikum"+" " + name1)
};
global();

console.log(name1);

// parameters and it's evloution 

function node(a = "yeasin", b = " arafat"){
    console.log('hi'+ ' ' + a + b);
}
node();
console.log('rakib','hasan');

// returning value
function square(x){
    return (x * x)
};

let totalSquare = square(8);
console.log(totalSquare);

function addition(num1, num2){
let result = num1 + num2;
return result;
}

console.log(addition(20, 40));

// naming function (get, creat , check, set, calc);
// when you declaration any function name . so, you set the function name mining full. 

// immediately invocable function expression
(function(name){
    console.log(name)
})('yeasin');

// javaScript object 
// Haw To Creat an object 
// Haw to print the value of an object

 let boyStudent1 = {
     fullNames : "yeasin",
     age : 22,
     country : 'bangladesh',
     cgpa : 3.34,
     lang : ['bangla','arbic','english']
 };

 console.log(boyStudent1);

 let boyStudent2 = {
    fullNames : "rakib",
    age : 20,
    country : 'india',
    cgpa : 4.40,
    lang : ['hindi','english']
};

console.log(boyStudent2);

// adding constructor

function Student(name, age, cgpa, conutry,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.country = country;
    this.lang = lang;

};

let girlStudent1 = new Student('mohammad yeasin',22,4.46,'bangladesh',['bangla','arbic','english']);
let girlStudent3 = new Student('rakib hasan',20,4.00,'saudi',['arbic','english']);
let girlStudent4 = new Student('mohammad faisal',23,5.00,'bangladesh',['bangla','english']);
let girlStudent5 = new Student('mohammad abdullah',24,3.34,'nepal',['hindi','english']);

console.log(girlStudent1.country);
console.log(girlStudent3.name);
console.log(girlStudent4.age);
console.log(girlStudent5);

// adding function inside construct 

function Student(name, age, cgpa, country,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.country = country;
    this.lang = lang;

    this.display = function(){
        console.log(this.name);
        console.log(this.cgpa);
        console.log(this.age);
        console.log(this.lang);
        console.log(this.country);
        
    };

};

let girlStudents1 = new Student('mohammad yeasin',22,4.46,'bangladesh',['bangla','arbic','english']);
let girlStudents3 = new Student('rakib hasan',20,4.00,'saudi',['arbic','english']);
let girlStudents4 = new Student('mohammad faisal',23,5.00);
let girlStudents5 = new Student('mohammad abdullah',24,3.34,'nepal',['hindi','english']);

girlStudents3.display();
girlStudent1.display();
girlStudent4.display();

let parsons = [
    {name:'yeasin',age:22,class: 10},
    {name:'arafat',age:24,class: 10},
    {name:'faisal',age:20,class: 10}
    
];

for (let i = 0; i < parsons.length; i++) {
    const element = parsons[i].name;
    console.log(element);
    
};
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    let factorialResult = factorial * i;
    console.log(factorialResult)
};




  
