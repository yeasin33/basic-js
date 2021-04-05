// Exercise 1 
// Write a javaScript program to check two number and return true if one of the number is 100
// or if the sum of the two number is 100

function isEqualTo( a,b){
    if(a == 100 || b == 100 || (a + b) == 100){
        return true;
    }
    else{
        return false
    }
};

let result = isEqualTo(100, 0);
console.log(result);

let result2 = isEqualTo(50, 30);
console.log(result2);

let result3 = isEqualTo(50, 50);
console.log(result3);

/* Exercise 2
 write a javaScript program to get the extension filename;
 */
const getExtensionFile = (str) => str.slice(str.lastIndexOf('.'));
console.log(getExtensionFile('index.html'));
console.log(getExtensionFile('style.css'));
console.log(getExtensionFile('app.js'));

function getExtension(str){
   let extension =  str.slice(str.lastIndexOf('.'))
   return extension;
    
}

console.log(getExtension('profile.html'));
console.log(getExtension('style.css'));

// Exercise 3
// Write a javaScript program to replay every character in a given string with the character following in the alphabet
// string.fromCharCode
// char codeAt

const moveCharForward = (str) => 
str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 4)).join('');
console.log(moveCharForward('s'));


function moveCharForward2(str){
         let moveChar = str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 4)).join('');
         return moveChar;
};

/* Write a program to get a current date
Expected output:
dd/mm/yyyy , dd-mm-yyyy or mm-dd-yyyy , mm/dd/yyyy
*/
const formatDate = (date = new Date()) =>{
    const days = date.getDate() ;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${days}/${month}/${year}`
}
console.log(formatDate());

function farmatDate(date){
    date  = new Date();
      const days = date.getDate() ;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${days}/${month}/${year}`

}
let fullResults = farmatDate();
console.log(fullResults);

/* 
Exercise 5
Write a javaScript program to create a new string adding "new!" in front fo a given string.
if the given string begins with "new!" already than return the original string 
*/

const addNew = (str) => str.lastIndexOf('New!') === 0 ? str : `New! ${str}`;
console.log(addNew('New! offers'));

function longestString1(arr) { 
	for (var i = 0; i < arr.length; i++) { // Step 1
		const element = arr[i];
        return element; 
	}
	
}
let speech = 'by Bangla of gold';
let output = longestString1(speech);
console.log(output);


var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [1, 4, 5, 6, 14];

var ar = mergeExclusive(ar1, ar2);
println(ar);

function mergeExclusive(ar1, ar2)
{
    var ar = [];
    
    for(let el of ar1)
    {
        if (!ar2.includes(el))
        {
            ar.push(el);
        }
    }
    
    for(let el of ar2)
    {
        if (!ar1.includes(el))
        {
            ar.push(el);
        }
    }
    
    return ar;
}

let added = mergeExclusive(34, 35);
console.log(added);






