// number of tries every person begins with
var tries = 1;
var triesLeft = 10;

var showTries = document.getElementById("show");
// throws a random number for person to guess
var secretNumber = Math.floor(Math.random() * 100) + 1;

var showInput = document.getElementById("showInput");

var showMessage = document.getElementById("message");
var showSecretNumber = document.getElementById("secretNumber");

var button = document.getElementById("button");
// adds event listener to button
button.addEventListener("click", function(e){
	e.preventDefault();
	// grab user input value
	var userInput = document.getElementById("input").value;
	showInput.append(" " + userInput + " ");
	
	// if tries is less than 1, shows singular time, else shows plural time(s)
	if (tries < 2) {
		showTries.innerHTML = "You have tried: " + tries + " time";	
	} else {
		showTries.innerHTML = "You have tried: " + tries + " times";
	}

	if (userInput > secretNumber) { // if player input is too high
		showMessage.innerHTML = "Your guess is too high. Try lower.";
		tries++;
		
	} else if (userInput < secretNumber) { // if player input is too low
		showMessage.innerHTML = "Your guess is too low. Try higher.";
		tries++;
		
	} else { // if player wins, game resets
		showMessage.innerHTML = "YOU'RE A GENIUS!";
	}
	
	// if player reaches 10 tries, loses
	if (tries >= 11) { 
		showMessage.innerHTML = "YOU LOST :(";
		showSecretNumber.innerHTML = "Secret number is: " + secretNumber;
		button.disabled = true;
		var changeButton = button.innerHTML = "Reset";
	}

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

