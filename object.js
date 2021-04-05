// javaScript object , key value pair , get object property, set value.4
// javaScript object practice;
let student1 = {id:90, class:10, name:"mohammad",phone:050145,email:"mdyeasin0534.gmail.com"};
let student2 = {id:91, class:10, name:"Maino",phone:054563,email:"mdmainoe4345.gmail.com"};
// In object we can be access any value. we use in 3 option.
const emailId = student1.email;// Option 1
const classes = student2["class"];// Option 2
const phoneProNum = "phone";// option 3
const phoneNum = student2[phoneProNum];

// Update value property in object
student2.phone = 586349;// option 1
student1["id"] = 3456344265;// option 2
student1[phoneProNum] = 3456353463;

// add new value property an array;
student1.style = "color";
student2.color = "black";
console.log(student1);
 console.log(student2);

// object keys Method
 let keys = Object.keys(student2);
 console.log(keys);

 // object values method
 let value = Object.values(student1);
 console.log(value);

 //object  entries method
let entries = Object.entries(student1);
console.log(entries);
console.log(entries[0]);
function fun(x) {  
    if (x > 15) {  
    var a = 4;  
    return a * x;  
        }  
      
    return x + 10;  
    }  
    
    var result = fun(20);
    console.log(result)