// console.log("sanity check");
christmas = true;

document.querySelector("#selector-button").innerHTML = "Countdown to Halloween";

function updateTimer(){
    var now = new Date();
    var nowAsTimeStamp = now.getTime();
    // console.log(nowAsTimeStamp);
    var timeRemaining = timeStamp - nowAsTimeStamp;

    var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
    var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));
    
    // console.log(seconds);
    // console.log(minutes);

    document.getElementsByClassName('weeks')[0].innerHTML = weeks; 
    // getElementsByClassName always returns an array

    // querySelector will use css rules to find a match, 
    // and only get the first one–not an array
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds; 
}

var endDate = new Date("December 25, 2018");
var endDate2 = new Date("October 31, 2019");
console.log(endDate)
var timeStamp = endDate.getTime();
// console.log(timeStamp)
// will call the function in arg1 every arg2 milliseconds
setInterval(updateTimer, 1000);

document.querySelector("#selector-button").addEventListener("click", halloweenCountdown);

function halloweenCountdown(){
    if(christmas == true){
        document.querySelector("body").style.background = "url(./johnny_automatic_pumpkin_boy.svg)";
        document.querySelector("#countdown-div").innerHTML = "<h1>Countdown to Halloween</h1>";
        document.querySelector("#selector-button").innerHTML = "Countdown to Christmas";
        timeStamp = endDate2.getTime();
        christmas = false;
    } else {
        document.querySelector("body").style.background = "url(./ComicCharacter110.svg)";
        document.querySelector("#countdown-div").innerHTML = "<h1>Countdown to Christmas</h1>";
        document.querySelector("#selector-button").innerHTML = "Countdown to Halloween";
        timeStamp = endDate.getTime();
        christmas = true;
    }
}
