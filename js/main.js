var tries = 0;

var $firstGuess = $(".input").value;
var $secretNumber = Math.floor(Math.random() * $firstGuess) + 1;
var $userInput = $(".input").value;

function reset() {
	tries = 0;
	var $firstGuess = $(".input").value;
	var $secretNumber = Math.floor(Math.random() * $firstGuess) + 1;
}

if ($userInput > $secretNumber) {
	console.log("Your " + $userInput + " is too high");
	tries++;
} else if ($userInput < $secretNumber) {
	console.log("Your " + $userInput + " is too low");
	tries++;
} else {
	console.log("You won in " + tries);
	reset();
}

if (tries = 9) {
	console.log("This is your last try. Good luck!");
}

if (tries = 10) {
	console.log("You lost!")
	reset();
}

var $button = $(".button");

$button

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

