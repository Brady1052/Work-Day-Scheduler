var userEventSpan = document.querySelector(".textData");
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//currentTime to determine if the hour matchs for color
var currentTime = moment().format('H');

var allRows = document.querySelectorAll(".row")
// console.log(allRows)
for (var i = 0; i < allRows.length; i++) {
    var timeBlockHour = parseInt(allRows[i].id)
    // console.log(allRows[i].id) 
    if (timeBlockHour < currentTime) {
        allRows[i].classList.add("past")
    } else if (timeBlockHour > currentTime){
        allRows[i].classList.add("future")
    } else {
        allRows[i].classList.add("present")
    }
}
//todo project
// Use window.localStorage to retrieve and store your data object as string
const LS = JSON.parse(localStorage.scheduler || '{}'); // now an Object

//click makes calendar content editable

$(".textData").click(function () {
    $(this).addClass('d-none')
    $(this).siblings("input").removeClass("d-none");
});

$(".btn").click(function () {
    console.log(this);
    console.log($(this).attr("id"))
    var id = $(this).attr("id")
    var time = id.slice(0, 3)
    console.log(time)

    var timeInputId = time + "Input";
});





// make background color of / past hours gray / current hour red / future hours green
var hourPast = hourPast < currentTime;
var hourNow = currentTime;
var hourFuture = hourFuture < currentTime;
// saves user input
function renderLastRegistered() {
    var userInput = localStorage.getItem("event");
    userEventSpan.textContent = userInput;
}
localStorage.setItem("userInput", userInput);
renderLastRegistered();

var hourNow = currentTime;
console.log(hourNow)
console.log(currentTime)
function backgroundColorEdit() {
    if (hourNow == currentTime) {
        document.getElementsByClassName("backgroundTool").style.backgroundColor = "#ff0000";
    } else if (hourNow < currentTime) {
        document.getElementsByClassName("backgroundTool").style.backgroundColor = "#d3d3d3";
    } else {
        document.getElementsByClassName("backgroundTool").style.backgroundColor = "#90ee90";
    }
}
// if currentTime = hourNow make background color Red //

// if currentTime < hourNow make background color green //
