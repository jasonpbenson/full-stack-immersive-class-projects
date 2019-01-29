//Js is an async language

// console.log("1");
// setTimeout(() =>{
//     console.log("2");
// },0)
// console.log("3");

//above code will log:
//1
//3
//2
const request = require("request");
const apiBaseUrl = 'http://api.themoviedb.org/3';
const apiKey = 'fec8b5ab27b292a68294261bb21b04a5';
const nowPlaying = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;

//-get now playing movies
//--get cast data from movie data
//---get individual actor data from cast data
//----get highest grossing movie from individual actor data

// let movieData = "";

//a promise is a constructor/class
//it's built into js
//it takes 1 arg: a callback
//that callback takes 2 args:
//-1. resolve
//-2. reject
const moviePromise = new Promise((resolve, reject) => {

    request.get(nowPlaying, (err, response, body) => {
        //when reject is called the promise has failed
        const parsedBody = JSON.parse(body);
        if (err){
            reject(err);
        }
        //when resolve is called the promise is done
        resolve(parsedBody);
    });
});

// const castUrl = `${apiBaseUrl}/${movieData.results[0].id}/credits?api_key=${apiKey}`;
// request.get(movieData,(err, response, body) => {

// });

//a promise has a then
//The then will run whenever resolve is called inside the promise
moviePromise.then((dataGivenToResolve) => {
    return new Promise((resolve, reject) => {
         // console.log(dataGivenToResolve);
        const id = dataGivenToResolve.results[0].id
        const castUrl = `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`
        request.get(castUrl, (err, response, body) => {
            const parsedBody = JSON.parse(body);
            resolve(parsedBody);
        })
    })
}).then((actorData) => {
    console.log(actorData);
    const actorId = actorData.cast[0].id;
    const peopleUrl = `${apiBaseUrl}/person/${actorId}?api_key=${apiKey}`;
    request.get(peopleUrl, (err, response, body) => {
        const parsedData = JSON.parse(body);
        console.log(parsedData);
    })
})
