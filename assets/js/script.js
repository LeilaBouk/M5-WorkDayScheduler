// Get the current date
var now = moment().format("dddd, MMMM Do");
$("#currentDay").text(now);


var save = $(".save");

// save user text input
function saveSchedule() {
    console.log(this);
    $(this).parent().hide();
    // var time = $("the parent elements ID") 
   
} 

save.on("click", saveSchedule);