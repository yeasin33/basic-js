// Reverses a string 

function reverseString(str){
    let reverse = "";
    for (let i = 0; i < str.length; i++) {
        const char =    str[i];
        reverse = char + reverse;
    }
    return reverse;
}

let foodBlog = "To Night We Drink Water";

let result = reverseString(foodBlog);
console.log(result);
let parson = "Hi I Am Yeasin Arafat";
let result2 = reverseString(parson);
console.log(result2);