const year = 3328;
const  remainder = year % 4;
if( remainder === 0){
    console.log('this year leapYear');
}
else{
    console.log("this year no leap Year");
};


// // function leapYear(year){
// //     const  remainder = year % 4;
// // if( remainder === 0){
// //     return true;
// // }
// // else{
// //     return false;
// // };
// // };

// // let leap = leapYear(3345);
// // console.log(leap);

// // check leap year with function 

function leapYear(year){
var result = year;
if(result%400 == 0){
    result = true;
}
else if(result%100 == 0){
    result = true;
}
else if(result%4 == 0){
    result = true;
}
else{
    result = false;
};
return result;
};

 var leapResult = leapYear(2034);
 console.log(leapResult);
 

