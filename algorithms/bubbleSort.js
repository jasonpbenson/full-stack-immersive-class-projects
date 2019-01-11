let array = [5,32,64,53,7453,6,4,3,2,1]

let sorted = false
let k=0

function bubbleSort (array){
  while (!sorted){   // while list is unsorted, continue...
      let placeholder = 0  // reset placeholder; placeholder will be defined later
      let swap = 0    // this will be used to check whether the array is already sorted.
      for (i=0; i<array.length; i++){     //ends the for loop IF we are at the end.
          if (i === array.length-k){  // checks to see if the array is sorted, and ENDS the while loop
              if (swap === 0){    // if this is true THEN
                  sorted = true   // THEN end the while loop
              }
              break       // ends the for loop.
          }
          if (array[i]>array[i+1]){ //bread and butter; if index is greater than the next index value
              placeholder = array[i]  // the value of array[i] is equal to placeholder; this will be the first thing changed every time.
              array[i] = array[i+1] // now i is equaled to i + 1
              array[i+1]= placeholder  //now placeholder is equal to the OLD value of i
              swap++ // to ensure there was a swap so we can know if we continue or not. If swapped is 0, game over on the next iteration.
          }
      }
      k++ //used to save computing power to keep from checking redundent cases.
  }
}

bubbleSort(array)
console.log(array)