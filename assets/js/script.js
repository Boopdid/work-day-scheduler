//Add today's date to DOM
var todaysDate = moment().format("dddd MMM Do");
console.log(todaysDate);
$("#currentDay").text(todaysDate);

// var currentTime = moment().hour();
var currentTime = 15;
console.log(currentTime);

$(".time-block").each(function () {
  var timeblockId = $(this).attr("id");
  var timeblockHour = parseInt(timeblockId.split("hr")[1]);
  if (timeblockHour < currentTime) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  } else if (timeblockHour === currentTime) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
});

$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

$("#hr9 .description").val(localStorage.getItem("hr9"));
$("#hr10 .description").val(localStorage.getItem("hr10"));
$("#hr11 .description").val(localStorage.getItem("hr11"));
$("#hr12 .description").val(localStorage.getItem("hr12"));
$("#hr13 .description").val(localStorage.getItem("hr13"));
$("#hr14 .description").val(localStorage.getItem("hr14"));
$("#hr15 .description").val(localStorage.getItem("hr15"));
$("#hr16 .description").val(localStorage.getItem("hr16"));
$("#hr17 .description").val(localStorage.getItem("hr17"));
