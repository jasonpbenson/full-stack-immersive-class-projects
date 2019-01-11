// console.log("sanity check");
// guess a number
// – loop through all

// let numberList = [1,2,3,4,5];
// let number = Math.floor(Math.random() * numberList.length);

// for(let i = 0; i < numberList.length; i ++){
//     if (numberList[i] === number){
//         console.log("found", number)
//         console.log(`it took ${i+1} guesses to get the answer`)
//         break
//     }
// }

// let counter = 0;
// let found = false;
// while (found === false){
//     let randIndex = Math.floor(Math.random() * numberList.length);
//     if(numberList[randIndex] === number){
//         found = true;
//         console.log("found!",number);
//         console.log(`it took ${counter} guesses`)
//     }
// }

// //binary search
// found = false;
// let index = (Math.floor(numberList.length/2));
// while(!found){
//     if(number === numberList[index]){
//         found = true;
//         console.log("numer was", numberList[index]);
//     }else if(number < numberList[index]){
//         index = Math.floor(index/2);
//         console.log("number is lower");
//     }else{
//         index = Math.floor(index + numberList.length)/2;
//         console.log("number is higher");
//     }
// }

function binarySearch(list, value){
    //set range to check
    //will get progressively smaller
    let bottomIndex = 0;
    let topIndex = list.length - 1;
    let middleIndex = Math.floor((topIndex + bottomIndex)/2);
    console.log(bottomIndex,middleIndex,topIndex);

    let counter = 0;
    //need while loop
    //continue looping while the middle is not the correct number
    //and there are more than 1 left to search
    let found = false;
    while(!found){
        counter ++;
        if(value < list[middleIndex]){
            topIndex = middleIndex - 1;
        }else if(value > list[middleIndex]){
            bottomIndex = middleIndex + 1;
        }else{
            found = true;
        }
        //recalculate middleIndex
        middleIndex = Math.floor((topIndex + bottomIndex)/2);
    }
    console.log(`it took ${counter} guesses`);
    return list[middleIndex];
}

let numbers = [];
for(let i = 0; i < 1000; i++){
    numbers.push(i);
}
const index = binarySearch(numbers, 98);
console.log(index);