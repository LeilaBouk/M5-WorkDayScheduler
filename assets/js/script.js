// Get the current date
var now = moment().format("dddd, MMMM Do");
$("#currentDay").text(now);

// --------------

// Check the current time in military time
var timeCheck = moment().format("HH");

var timeBlock = $(".row");

console.log(timeCheck);

// check each rows id and do if else
function blockColor() {

 $(timeBlock).each(function() {
    var actTime = $(this).attr("id");
    // console.log(actTime);

 if (actTime < timeCheck) {
        $(this).addClass("past");
    }
else if (actTime === timeCheck) {
    $(this).addClass("present");
}
else if (actTime > timeCheck) {
    $(this).addClass("future");
}

 })

}

// -------------------

// Get the save button
var save = $(".save");

// save user text input
function saveSchedule() {
    
    // Get the elements based on this which is the button
    // so the sibling which is the form text get its value
    // and the parent which is the hour the button is inside
  var schedText = $(this).siblings(".form-control").val();
  var hour = $(this).parent().attr("id");

  console.log(hour);
  console.log(schedText);

//   Set the items in local storage
   localStorage.setItem(hour, schedText);
} 

// Get each item
function loadSchedule() {

 $("#9 .form-control").val(localStorage.getItem("9"));
 $("#10 .form-control").val(localStorage.getItem("10"));
 $("#11 .form-control").val(localStorage.getItem("11"));
 $("#12 .form-control").val(localStorage.getItem("12"));
 $("#13 .form-control").val(localStorage.getItem("13"));
 $("#14 .form-control").val(localStorage.getItem("14"));
 $("#15 .form-control").val(localStorage.getItem("15"));
 $("#16 .form-control").val(localStorage.getItem("16"));
 $("#17 .form-control").val(localStorage.getItem("17"));

}

// Delete

var deleteText = $(".delete");

function deleteSchedule() {
    var schedText = $(this).siblings(".form-control").val();
    var hour = $(this).parent().attr("id");

    localStorage.removeItem(hour, schedText);
    console.log(schedText);
    var schedText = $(this).siblings(".form-control").val("");
 
}


deleteText.on("click", deleteSchedule);
save.on("click", saveSchedule);
blockColor();
loadSchedule();