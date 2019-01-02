//Exercises:
// 1.Given a number between 0 and 6 representing the days of the week, 
// print "Go to work." if it's a work day and "Sleep in." 
// if it's a weekend day. You can set up an array for the days 
// of the week, or for extra credit, you can check out the 
// JS Date object here).

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (i in days) {
    if (i <= 4) {
    console.log("Go to work.") 
} else {
    console.log("Sleep in.")
}
}



function daysOfWk() {
    var d = new Date();
    var n = d.getDay();
    console.log(d)
    if (n == 1 || n == 2 || n == 3 || n == 4 || n == 5) {
        console.log("Go to work.");
    } else { (n==0 || n==6)
        console.log("Sleep in.");
    }
}
daysOfWk()

//adam's code
var day = 2;
if (day < 5) {
    console.log("Go to work.");
} else if (day < 7) { 
    console.log("Sleep in."); 
} else {
    console.log("Bad input.")
}

//adam's code 2

var day = 6;
var week = ["Go to work", "Go to work", "Go to work", "Go to work", "Go to work", "Sleep in.", "Sleep in."];
console.log(week[day])

//2. Given a month number, between 1 and 12, and a year, print the number of days in that month - accounting for leap years.

var selectMonth = prompt("Please select a month (enter corresponding number between 1 and 12)");
var selectYear = prompt("Please enter a year");
function dayCount(){
    if (selectMonth == 1 || selectMonth == 3 || selectMonth == 5 || selectMonth == 7 || selectMonth == 8 || selectMonth == 10 || selectMonth == 12){
        console.log("31 days in month");
    } else if (selectMonth == 4 || selectMonth == 6 || selectMonth == 9 || selectMonth == 11) {
        console.log("30 days in month");
    } else if (selectMonth == 2 && selectYear % 4 == 0){
        console.log("29 days in month");
    } else if (selectMonth == 2 && selectMonth % 4 != 0){
        console.log("28 days month");
    } else if (selectMonth == 2 && selectYear % 4 == 0 && selectYear % 100 == 0 && selectYear % 400 != 0){
        console.log("28 days in month");
    } else if (selectMonth == 2 && selectYear % 4 == 0 && selectYear % 100 == 0 && selectYear % 400 == 0){
        console.log("29 days in month")
    }
}
dayCount()

//greg's code

function date(month, year){

    var calendar = {
        "January": 31,
        "February": 28,
        "March":31,
        "April": 30,
        "May": 31,
        "June": 30,
        "July": 31,
        "August": 31,
        "September": 30,
        "October": 31,
        "November": 30,
        "December": 31
    };
 
    if(month == "February"){
        if(year % 400 != 0){
            return calendar["February"]
        } else {
            return calendar["February"] + 1
        }
 
    }else{
        return calendar[month]
    }
 }
 
 console.log(date("February", 2000));



// 3. Given the amount of a bill as a number, and a level of service - 
// which can be "good", "fair", or "bad", print the total bill with the tip included. 
// The amount of tip given for each level of service is defined by:
// "good" -> 20%
// "fail" -> 15%
// "bad"  -> 10%
// Extra: Add to "Tip Calculator"...you are also given the number of people to divide the 
//total into. Print the amount for each person to pay.

var billTotal = prompt("Enter bill total");
var serviceLevel = prompt("Please rate quaility of service by entering 'good', 'fair', or 'poor'.");
var tipCal = billTotal * serviceLevel;

function tipCalculator() {
    if (serviceLevel == "good") {
        console.log(billTotal * 0.20);
    } else if (serviceLevel == "fair") {
        console.log(billTotal * 0.15);
    } else if (serviceLevel == "poor") {
        console.log(billTotal * 0.10);
    } else {
        console.log("error")
    }
}
tipCalculator()
console.log("Please add the service fee above to your bill total.")

//katie's code
function tipCal(service, total) {
    var tipAmount;
    var newTotal;
    if (service == "good") {
        tipAmount = total * 0.2;
    } else if (service == "fair") {
        tipAmount = total * 0.15;
    } else if (service == "poor") {
        tipAmount = total * 0.10
    } else {
        console.log("wrong value");
        return;
    }
    newTotal = tipAmount + total;
    //round decimal:
    newTotal = newTotal * 100;
    newTotal = Math.floor(newTotal);
    newTotal = newTotal / 100;

    console.log("$" + newTotal);
}

tipCal("good", 175.53);
