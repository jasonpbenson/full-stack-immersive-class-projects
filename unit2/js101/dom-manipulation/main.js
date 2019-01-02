console.dir(document);

var jason = document.getElementById("jasonsDiv");

console.dir(jason); 

jason.innerHTML = "changed text";
jason.style.backgroundColor = "pink";

jason.innerHTML += `
    <img src="https://placehold.it/200x200" />
`

var userInput = prompt("Fight or Flee?");
console.log(userInput)

// var simplifiedDocument = {
//     children: [
//         {
//             tag: "HTML",
//             children: [
//                 {
//                     tag: "<head>"
//                 },
//                 {
//                     tag: "<body>"
//                 }
//             ]
//         }
//     ]
// }

// simplifiedDocument.children[0].children[1]