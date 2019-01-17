// import { type } from "os";

//a callback is a function for another function to run
//in js functions are first-class objects
//meaning that one can do almost anything to a function
//that can be done to an object, such as:
//–pass around
//–assign to variable
//–overwrite

//One
// function greet(name) {
//     console.log("Howdy, " + name)
// }


// function reject(name) {
//     console.log("Go to hell, " + name)
// }


// function getPerson(callback){
//     callback("Ian!")
// }

// getPerson(greet)
// getPerson(reject)

function callWorld(salutation){
    console.log(salutation + " World");
}

function salutationGreet(callback){
    callback("Hello, ");
}

function salutationBye(callback){
    callback("Goodbye, ");
}

salutationGreet(callWorld);
salutationBye(callWorld);

function greeting(n){
    console.log ("Hello, " + n);
}

function getName(name){
   name("Jason");
}

getName(greeting);

// const paramOne = (y) => {
//     console.log(y);
// }

// console.log(typeof(paramOne));

// const paramTwo = [4, 6, 8];

// console.log(typeof(paramTwo));

// let funcArg = function (x){
//     console.log(x)
// }

// console.log(typeof(funcArg));

function squareIt(number, callback){ // 15, triple 
  // doStuff...
  //  console.log(callback(x,y)**2);
  let square = number ** 2; // 15 ** 2, 225
  return callback(square) // triple(225) = 675
}

function triple(something){ // 225
  return something * 3; // 675
}

function multiplyEm(a,b){
   return a*b;
}

let num = multiplyEm(3, 5); // 15
let result = squareIt(num, triple); // num: 15, triple: function // 675
console.log(result); // 675