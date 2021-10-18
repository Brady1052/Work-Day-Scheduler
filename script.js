var userEventSpan = document.querySelector(".textData");
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//currentTime to determine if the hour matchs for color
var currentTime = moment().format('H');

var allRows = document.querySelectorAll(".row")

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
var saveButton = document.querySelectorAll(".Button")

document.addEventListener("click", saveButton)
for (var i = 0; i < saveButton.length; i++){
    var saveButton
}
// Use window.localStorage to retrieve and store your data object as string
// const LS = JSON.parse(localStorage.scheduler || '{}'); // now an Object

// //click makes calendar content editable

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
