// Traveling in a jungle counting wild animals


// function animalCalculation(depth){
//         let animal = 0;
//     if(depth <= 10){
//         animal = depth * 50
//     }
//     else if(depth <= 20){
//         let fastPart = 10 * 50;
//         let remaining = depth - 10;
//         let secondPart = remaining * 100;
//         animal = fastPart + secondPart;

//     }
//     else{
//         let fastPart = 10 * 50;
//         let secondPart = 10 * 100;
//         let remaining = depth - 20;
//         let thirdPart =remaining + 300;
//         animal = fastPart + secondPart + thirdPart;
//     }
//     return animal;
// }
// let result = animalCalculation(34);
// console.log(result);

function animalCalculation(depth){
    let animal = 0;
    if(depth <= 10){
        animal = depth * 50;
    }
    else if(depth <= 20){
       let  fastPart = 10 * 50;
       let remaining = depth - 10
       let secondPart = remaining * 100;
       animal =fastPart + secondPart;

    }
    else{
      let  fastPart = 10 * 50;
      let secondPart = 10 * 100;
      let remaining = depth - 20;
      let thirdPart = remaining * 300;
      animal = fastPart + secondPart + thirdPart;

    }
    return animal;
}

let result = animalCalculation(23);
console.log(result);
let result2 = animalCalculation(100);
console.log(result2);