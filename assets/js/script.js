// Get the current date
var now = moment().format("dddd, MMMM Do");
$("#currentDay").text(now);

// Check the current time
var timeCheck = moment().format("HH");

var timeBlock = $(".row");

actTime = (timeBlock.attr("id"));

console.log(actTime);
console.log(timeCheck);

function blockColor() {
    if (actTime > timeCheck) {
        timeBlock.addClass("past");
    }
}

blockColor();


// Get the save button
var save = $(".save");

// save user text input
function saveSchedule() {
    console.log(this);
    $(this).parent().addClass("past");
    
   
} 

save.on("click", saveSchedule);