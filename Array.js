// Array, index. indexOf module
var friendAgeList = [34, 45, 13, 46, 67, 78, 99];
mohammadAge = friendAgeList[2];
friendAgeList[5] = 34;

var position = friendAgeList.indexOf(99);

console.log(position);

// indexOf method
let names = ['mohmmad', 'yeasin', 'arafat', 'faisal', 'habibi'];
const position1 = names.lastIndexOf('habibi');
console.log(position1);
// javaScript push pop, lenth, unshift, shift
var fruits = ['Mango', 'apple', 'potato', 'orange', 'Banana'];
console.log(fruits.length);
fruits.push('Egg');
fruits.push('onion');
fruits.push('tomato');
console.log(fruits.length);
fruits.pop('tomato');
console.log(fruits.length);
fruits.unshift('bangladesh');
console.log(fruits);
fruits.shift('bangladesh');

// javaScript slice and splice method
var people = ['Mohammad', 'rakib', 'kawsir','Mohmmad yeasin','faisal','saifullah', 'shamim'];
console.log(people);
 var slice = people.slice(1,5);
 console.log(slice);
var sliceAdd = people.splice(2,4);
console.log(sliceAdd);


