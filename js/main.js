// number of tries every person begins with
var tries = 1;

var secretNumberShow = document.getElementById("show");
// throws a random number for person to guess
var secretNumber = Math.floor(Math.random() * 100) + 1;
secretNumberShow.innerHTML = secretNumber;

var showInput = document.getElementById("showInput");

var button = document.getElementById("button");
// adds event listener to button
button.addEventListener("click", function(){
	
	// grab user input value
	var userInput = document.getElementById("input").value;
	showInput.innerHTML = userInput;
	
	if (userInput > secretNumber) { // if player input is too high
		console.log("Your " + userInput + " is too high");
		tries++;
	} else if (userInput < secretNumber) { // if player input is too low
		console.log("Your " + userInput + " is too low");
		tries++;
	} else { // if player wins, game resets
		console.log("You won in " + tries + " tries!");
		reset();
	}
	
	// if player reaches 10 tries, loses
	// if (tries = 10) { 
	// 	console.log("You lost!")
	// 	reset();
	// }

	// reset whatever is inside input

})

// function to reset game when player wins or loses
function reset() {
	tries = 1;
	var userInput = document.getElementById("input").value;
	var secretNumber = Math.floor(Math.random() * 100) + 1;
}

// set date and time

// var timeNow = document.getElementById("time")
// var monthNow = document.getElementById("month")

// function getTime() {
// 	var today = new Date();
// 	var hourNow = today.getHours();
// 	var minute = today.getMinutes();
// 	var second = today.getSeconds();
// 	var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// 	var thisMonth = month[today.getMonth()]
// 	var day = today.getDay();
// 	var year = today.getFullYear();

// 	if (second < 10) {
// 		second = "0" + second;
// 	}

// 	if (minute < 10) {
// 		minute = "0" + minute;
// 	}	
	
// 	var allTime = hourNow + ":" + minute + ":" + second;
// 	var dateNow = thisMonth  + " " + day + ", " + year;
	
// 	timeNow.innerHTML = allTime;
// 	monthNow.innerHTML = dateNow;
// }

// setInterval(getTime,1000);

