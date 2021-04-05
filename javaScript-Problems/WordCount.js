// count the number of string an array

let speech = "I  am a  good parson, and i    don't smoking. i don't snore at sleep.";
let count = 0;
for (let i = 0; i < speech.length; i++) {
    const cher = speech[i];
     if(cher == " " && speech[i-1] != " "){
        count++;
    }
    
}
count++;

console.log(count);

