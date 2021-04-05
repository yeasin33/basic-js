// Find Largest Number Of An array

let marks = [55, 83, 45, 23, 88, 56,100, 77];
let max = marks[0];

for (let i = 0; i < marks.length; i++) {
    let element = marks[i]
    if(element > max){
       max = element;
    }
    
}
console.log("Height is value is:", max);