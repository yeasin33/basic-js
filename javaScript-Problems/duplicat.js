// Remove duplicate item from an array
let number = [2,4,5, 2,8,9,4,34,12, 8,23];
let uniqueName = [];

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    let index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
    
}
console.log(uniqueName);