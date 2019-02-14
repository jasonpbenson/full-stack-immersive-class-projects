// Given an array of people’s names [“Lachlan”, “Kim”, “Moira”], write a function that logs “Hi, [name]!” for each person.

let names = ["Lachlan", "Kim", "Moira"];

function greeting(nameArray){
    for(let i = 0; i < nameArray.length; i++){
        let currentName = nameArray[i]; 
        console.log("Hi, " + currentName);   
    }
}

greeting(names);

// Given an array of a first, middle, and last name [“Adam”, “Michael”, “Szaruga”], write a function that prints the person’s initials

let fMl = ["Adam", "Michael", "Szaruga"];





// Given a list of 0’s and 1’s, [0, 1, 0, 1, 1, 1, 0, 0], write a function that returns the index of the last 1 in the array



// Given a list of positive numbers, [1, 5, 25, 3, 99, 20], write a function that returns the biggest number