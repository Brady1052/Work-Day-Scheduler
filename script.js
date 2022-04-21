var today = moment();
$('#currentDay').text(today.format('MMM Do, YYYY'));

const task9 = document.getElementById('span9');
task9.value = localStorage.getItem('task9');
console.log(task9.value);
task9.innerText = task9.value;

//currentTime to determine if the hour matchs for color
var currentTime = moment().format('H');

var allRows = document.querySelectorAll('.row');

for (var i = 0; i < allRows.length; i++) {
  var timeBlockHour = parseInt(allRows[i].id);
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

$('#save9').click(function () {
  let task = document.getElementById('input9').value;
  localStorage.setItem('task9', task);
});
