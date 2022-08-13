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

blockColor();

// -------------------

// Get the save button
var save = $(".save");

// save user text input
function saveSchedule() {
    console.log(this);
    // $(this).parent().addClass("future");
    
   
} 

save.on("click", saveSchedule);