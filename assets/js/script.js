// Get the current date
var now = moment().format("dddd, MMMM Do");
$("#currentDay").text(now);


var save = $(".save");

// save user text input
function saveSchedule() {
    console.log("save");
} 

save.on("click", saveSchedule);