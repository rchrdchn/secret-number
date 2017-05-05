// number of tries every person begins with
var tries = 0;

// grab user input value
var userInput = document.getElementById("input").value;
// throws a random number for person to guess
var secretNumber = Math.floor(Math.random() * userInput) + 1;

// function to reset game when player wins or loses
function reset() {
	tries = 0;

	var userInput = document.getElementById("input").value;
	var secretNumber = Math.floor(Math.random() * userInput) + 1;
}

if (userInput > secretNumber) { // if player input is too high
	
	console.log("Your " + userInput + " is too high");
	tries++;
	
	if (tries = 9) {
	console.log("This is your last try. Good luck!");
	}

} else if (userInput < secretNumber) { // if player input is too low
	console.log("Your " + userInput + " is too low");
	tries++;
} else { // if player wins, game resets
	console.log("You won in " + tries);
	reset();
}

if (tries = 10) { // if player reaches 10 tries, loses

	console.log("You lost!")
	reset();

}

var button = document.getElementById("button");
// adds event listener to button
button.addEventListener("click", function(){
	console.log("works")
	// reset whatever is inside input

})

var timeNow = document.getElementById("time")
var monthNow = document.getElementById("month")

function getTime() {
	var today = new Date();
	var hourNow = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var thisMonth = month[today.getMonth()]
	var day = today.getDay();
	var year = today.getFullYear();

	if (second < 10) {
		second = "0" + second;
	}

	if (minute < 10) {
		minute = "0" + minute;
	}	
	
	var allTime = hourNow + ":" + minute + ":" + second;
	var dateNow = thisMonth  + " " + day + ", " + year;
	
	timeNow.innerHTML = allTime;
	monthNow.innerHTML = dateNow;
}

setInterval(getTime,1000);

