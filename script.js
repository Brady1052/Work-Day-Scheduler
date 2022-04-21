var today = moment();
$('#currentDay').text(today.format('MMM Do, YYYY'));

//displays value for the task last saved for 9AM
const task9 = document.getElementById('span9');
if (
  localStorage.getItem('task9') != null &&
  localStorage.getItem('task9') != ''
) {
  task9.value = localStorage.getItem('task9');
  task9.innerText = task9.value;
}
//displays value for the task last saved for 10AM
const task10 = document.getElementById('span10');
if (
  localStorage.getItem('task10') != null &&
  localStorage.getItem('task10') != ''
) {
  task10.value = localStorage.getItem('task10');
  task10.innerText = task10.value;
}
//displays value for the task last saved for 11AM
const task11 = document.getElementById('span11');
if (
  localStorage.getItem('task11') != null &&
  localStorage.getItem('task11') != ''
) {
  task11.value = localStorage.getItem('task11');
  task11.innerText = task11.value;
}
//displays value for the task last saved for 12PM
const task12 = document.getElementById('span12');
if (
  localStorage.getItem('task12') != null &&
  localStorage.getItem('task12') != ''
) {
  task12.value = localStorage.getItem('task12');
  task12.innerText = task12.value;
}
//displays value for the task last saved for 1PM
const task1 = document.getElementById('span1');
if (
  localStorage.getItem('task1') != null &&
  localStorage.getItem('task1') != ''
) {
  task1.value = localStorage.getItem('task1');
  task1.innerText = task1.value;
}
//displays value for the task last saved for 2PM
const task2 = document.getElementById('span2');
if (
  localStorage.getItem('task2') != null &&
  localStorage.getItem('task2') != ''
) {
  task2.value = localStorage.getItem('task2');
  task2.innerText = task2.value;
}
//displays value for the task last saved for 3PM
const task3 = document.getElementById('span3');
if (
  localStorage.getItem('task3') != null &&
  localStorage.getItem('task3') != ''
) {
  task3.value = localStorage.getItem('task3');
  task3.innerText = task3.value;
}
//displays value for the task last saved for 4PM
const task4 = document.getElementById('span4');
if (
  localStorage.getItem('task4') != null &&
  localStorage.getItem('task4') != ''
) {
  task4.value = localStorage.getItem('task4');
  task4.innerText = task4.value;
}
//displays value for the task last saved for 5PM
const task5 = document.getElementById('span5');
if (
  localStorage.getItem('task5') != null &&
  localStorage.getItem('task5') != ''
) {
  task5.value = localStorage.getItem('task5');
  task5.innerText = task5.value;
}
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
//Saves task to local storage for 9AM block
$('#save9').click(function () {
  let task = document.getElementById('input9').value;
  localStorage.setItem('task9', task);
});

//Saves task to local storage for 10AM block
$('#save10').click(function () {
  let task = document.getElementById('input10').value;
  localStorage.setItem('task10', task);
});

//Saves task to local storage for 11AM block
$('#save11').click(function () {
  let task = document.getElementById('input11').value;
  localStorage.setItem('task11', task);
});

//Saves task to local storage for 12PM block
$('#save12').click(function () {
  let task = document.getElementById('input12').value;
  localStorage.setItem('task12', task);
});

//Saves task to local storage for 1PM block
$('#save1').click(function () {
  let task = document.getElementById('input1').value;
  localStorage.setItem('task1', task);
});

//Saves task to local storage for 2PM block
$('#save2').click(function () {
  let task = document.getElementById('input2').value;
  localStorage.setItem('task2', task);
});

//Saves task to local storage for 3PM block
$('#save3').click(function () {
  let task = document.getElementById('input3').value;
  localStorage.setItem('task3', task);
});

//Saves task to local storage for 4PM block
$('#save4').click(function () {
  let task = document.getElementById('input4').value;
  localStorage.setItem('task4', task);
});

//Saves task to local storage for 5PM block
$('#save5').click(function () {
  let task = document.getElementById('input5').value;
  localStorage.setItem('task5', task);
});
