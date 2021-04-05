// // revise basic javascript concepts
// // variable revise

var name1 = "mohmmad";
console.log(name1);
var life = 100;
life = life -30 //variable value  with subtraction
life = life + 10; // variable value with addition
console.log(life);
var heart = 100;
heart = heart *3; //multiplication
console.log(heart);

var box = null;
console.log(box);

var price;
var    price2;

price = 34;
price2 = 30;

console.log(price,price2);

let fastName = 'mohammad33';
let lastName = 'yeasin';
console.log(fastName +'-'+ lastName);

var num1 = 34;
var num2 = 23;

if( num1 <=  23 || num2 <= 34){
    console.log(true);
}
else if(num1 <= 12){
console.log("assalamoalikum");
}
else{
    console.log(false);
}

// Conditional (Ternary) Operator Method 
// Method 1
var age = 22;
if(age <= 12){
    console.log("You are very good young");
}
else{
    console.log("you are not young");
}
console.log((age <= 20)?"you are young": "you are baby.")
// method 2
var stop;
age >= 10 ?(
    console.log("ok, you can go"),
    stop = true
) : (
    console.log("sorry, you are most young"),
    stop = true
)
// Method 3
var fastCheck = 5;
     secondCheck = 5;
    access = fastCheck < 10 ? "access good not " : secondCheck < 10 ? "access go not" : "hi are you here";
console.log(access);


var price1 = true;
    price2 = false;
 result = price1 ?  "positive" : price2 ? "negative" :"zero";
console.log(result);

var comeRain = true;
result2 = comeRain = false ? "Inshallah coming rain" : comeRain = false ? "Maybe come" : "don't no";
console.log(result2);

// if else if else condition 
var price = 6;
if(price%2 == 0){
    console.log("Event");
}
else if(price%2 == 1){
console.log("very good job");
}
else{
    console.log("odd");
}
// grade check method 

let mark = 88;
if( mark >= 80){
    console.log("garde: A+");
}
else if(mark >= 70){
console.log("grade: A");
}
else if(mark >= 60){
    console.log("grade: B");
}
else if(mark >= 50){
    console.log("grade: C")
}
else if(mark >= 40){
    console.log("grade: D")
}

else{
    console.log("fail");
}

// Another Method
let bananaPrice = 20;
if(bananaPrice <= 15 ){
    console.log("i bye  40 banana");
}
else if(bananaPrice == 10){
    console.log("Ok, i will call you, for sell banana");
}
else{
    console.log("No, i don't bye banana")
}

// Marriage Fun Function

let goodBoy = true;
let getJob = true;
let allGood = true;
if(goodBoy == true && getJob == true){
    console.log("You Can get marriage");
}
else if(allGood == true){
    console.log("No problem, you can get Marriage. just wait")
}

else{
    console.log("oh, sorry.you don't get Marriage")
}


// while loop
let i = 0;
let sum = 0;
while(i <=80){
    if(i%3 == 0 && i%5 == 0){
        console.log(i);
        sum = sum + i;
    }
    
    i++;
}
console.log('result:',sum);

// For loop

for (let i = 30; i >=0 ; i = i + 1) {
    console.log(i);
     }
     

// javaScript Arrays
// add/remove items in array method
var friendsName = ['Mohammad','Yeaisn','Arafat','rakib','saifullah','rabbi'];
//adds item to the end
friendsName.push('Abdullah','maria');

// extracts item to the end
friendsName.pop();

// adds item to the beginning
friendsName.unshift('Aziz','masuk');


// extracts item to the beginning
friendsName.shift();

//at index pos deleteCount element an insert item
friendsName.splice(3,0,"fahad");

// Creates a new array .copies element in the index start til end (not inclusive)into it,
let cut = friendsName.slice(1,5);
console.log(cut);
console.log(friendsName);

// concat() method
// returns a new array,copies all members of the current  one and add item to it, if any items is an array, than it's element ar taken
let fruits = ['apple','banana','orange',];
let fruits1 = ['apricots','avocado','breadfruit'];

let allFruitsName = fruits1.concat(fruits);
console.log(allFruitsName);

//Searching in array method
// In Array a element position 
//indexOf/lastIndexOf (item.pos) method. 
let student = ['Mohammad','faisal','abdul aziz','fahad','abdullah'];
let findNamePosition = student.indexOf('faisal');
console.log(findNamePosition);
let findName = student.lastIndexOf("abdullah");
console.log(findName);
console.log(student[3]);

//Includes (value) Method
// returns true if the array has value , otherwise false
let student1 = ['Mohammad','faisal','abdul aziz','fahad','abdullah'];
 let names = student1.includes('Mohammad');
 console.log(names);

 // array in find Method

 const parson = [5,6,34,29,64];

 const eventNumber = (value) =>{
     if( value%4 === 0)
        return value;
 }
 let fastNumberEvent = parson.find(eventNumber);
 let fastNumberEventIndex = parson.findIndex(eventNumber);
console.log(fastNumberEvent);
console.log(fastNumberEventIndex);

const student3 =[
    {
        id:102,
        gpa:4.0
    },
    {
        id:104,
        gpa:4.4
    },
    {
        id:103,
        gpa:3.0
    },
    {
        id:104,
        gpa:2.3
    }
];
console.log(student3.find(i => i.gpa > 2));

// find Method 2

let number3 = [3,12,21,44,24,46];
let findResult = number3.find(i => i > 40);
console.log(findResult);

let students = [
    {name:'yeasin',id:34,class:10,section:'computer',phon:10845,email:'mdyeasin184@',conumtry:'bangladesh'},
    {name:'arafat',id:35,class:10,section:'physics',phon:108346,email:'mdarafat3458@',conumtry:'saudi'},
    {name:'faisal',id:17,class:10,section:'electrical',phon:108095,email:'mdfaisal234@',conumtry:'nepal'},
    {name:'abdullah',id:38,class:10,section:'programming',phon:102345,email:'mdabdulalh@',conumtry:'pakistan'}
];

console.log(students.find(i => i.id%2 === 0));

// Filter method 
let number4 = [3,5,27,38,29,20,35];

 const newNumber = number4.filter((num)=>{
    return num >20;
});
console.log(newNumber);

let studentShit = [
    {name:'yeasin',id:34,class:10,section:'computer',phon:10845,email:'mdyeasin184@',conumtry:'bangladesh'},
    {name:'arafat',id:35,class:10,section:'physics',phon:108346,email:'mdarafat3458@',conumtry:'saudi'},
    {name:'faisal',id:17,class:10,section:'electrical',phon:108095,email:'mdfaisal234@',conumtry:'nepal'},
    {name:'abdullah',id:38,class:10,section:'programming',phon:102345,email:'mdabdulalh@',conumtry:'pakistan'}
];

const return1 = studentShit.filter((each) => {
    return each.id >= 30 && each.conumtry === 'nepal'; 
})


console.log(return1);

// Transform the array 
// map() method 
//create a new array form the result off the calling func for every element 

let numbers5 = [2,3,5,23, 6,8];

let results2 = numbers5.map((num) =>{
return 2 * num;
});

console.log(results2);

// javaScript sort method 
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

