const writeButton = document.getElementsByClassName('.Button');
// writeButton.addEventListener('click', writeSchedule);
var userEventSpan = document.querySelector('.textData');
var today = moment();
$('#currentDay').text(today.format('MMM Do, YYYY'));

//currentTime to determine if the hour matchs for color
var currentTime = moment().format('H');
console.log(currentTime);

var allRows = document.querySelectorAll('.row');

for (var i = 0; i < allRows.length; i++) {
  var timeBlockHour = parseInt(allRows[i].id);
  console.log(allRows[i].id);
  if (timeBlockHour < currentTime) {
    $(allRows[i]).css('background-color', 'white');
  } else if (timeBlockHour > currentTime) {
    $(allRows[i]).css('background-color', 'green');
  } else {
    $(allRows[i]).css('background-color', 'red');
  }
}

$('.textData').click(function () {
  $(this).addClass('d-none');
  $(this).siblings('input').removeClass('d-none');
});
