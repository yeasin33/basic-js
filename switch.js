// let num = 500;
// switch(num){
//     case 500:
//         console.log('i am 500')
//          break;
//         case 400:
//             console.log('i am a 400');
//              break;
//             case 200:
//                 console.log('i am 200');
//                  break;
//                 case 20:
//                 case 10:
//                console.log('i am a 10')
//                break;
//                default:
//                    console.log("i don't now who are you")
               
// };
// input a letter and cheak it si vowel and consonant using switch 
var letter = prompt('Enter a letter : ');
var letter = letter.toLowerCase();
switch(letter){
    case 'a':
    case 'b':
    case 'c':
        console.log('vowel')
        break;
    default:
        console.log('consonant');

}
