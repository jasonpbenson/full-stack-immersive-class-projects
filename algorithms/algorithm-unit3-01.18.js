let string = “racecar”;
let stringArr = string.split(“”);
let revStringArr = string.split(“”).reverse();
let count = 0;

for(let i = 0; i < stringArr.length; i++){
   if(stringArr[i] == revStringArr[i]){
       count++;
       if(count == stringArr.length){
           console.log(string)
       }
   }
}