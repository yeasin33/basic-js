// Find Max of two values and Max of three values
let Business = 300;
let manager = 400;
let AdminSupport = 600;
// find Max of three values with if else condition
// if(Business > manager){
//     if(Business > AdminSupport){
//         console.log('business is bigger');
//     }
//     else{
//         console.log('AdminSupport is bigger');
//     }
// }
// else{
//     if(manager > AdminSupport){
//         console.log('manager is bigger');
//     }
//     else{
//         console.log('AdminSupport is bigger' )
//     }
// }

// Another way to find max of three values
let result = Math.max(Business, manager, AdminSupport);
console.log(result);

//  Method 3
let bankManager = 20;
let schoolTeacher = 34;
let officeManager = 50;

if(bankManager >= schoolTeacher && bankManager >= officeManager) {
    console.log('Bank manager is rich man');
}
else if(schoolTeacher >= bankManager && schoolTeacher >= officeManager) {
    console.log('School Teacher is Rich man');
}
else{
    console.log('Office Manager is a rich Man');
}
