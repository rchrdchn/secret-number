// number of tries every person begins with
var tries = 1;
var timer = 59;

// grabbing elements from DOM
var showTries = document.getElementById("show");
var showInput = document.getElementById("showInput");
var showMessage = document.getElementById("message");
var showSecretNumber = document.getElementById("secretNumber");
var button = document.getElementById("button");

// throws a random number for person to guess
var secretNumber = Math.floor(Math.random() * 100) + 1;

// adds event listener to button
button.addEventListener("click", function(){
	// e.preventDefault();
	// grab user input value
	var userInput = document.getElementById("input").value;
	// append last inputs to last inputs section and displays an array in the DOM
	showInput.append(" " + userInput + " ");
	var countDownTimer = document.getElementById("countDownTimer");

	// countdown timer 60 seconds when player click "submit guess"
	if (tries <= 1) {
		var timerStart = setInterval(function() {
		var showTimer = countDownTimer.innerHTML = "00:" + timer--;	    

		if (timer <= -1) {
	    	countDownTimer.innerHTML = "EXPIRED!";
	    	showMessage.innerHTML = "YOU LOST :(";
			showSecretNumber.innerHTML = "Secret number is: " + secretNumber;
			button.disabled = true;
			var changeButton = button.innerHTML = "Reset";
	    	clearInterval(timerStart)
	    }
		}, 1000);
	}

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
		showTries.innerHTML = "You WON in " + tries + " tries";
		document.getElementById("countDownTimer").style.display = "none";
	}
	
	// if player reaches 10 tries, loses
	if (tries >= 11) { 
		var changeButton = button.innerHTML = "Reset";
		var countDownTimer = document.getElementById("countDownTimer");
		showMessage.innerHTML = "YOU LOST :(";
		showSecretNumber.innerHTML = "Secret number is: " + secretNumber;
		button.disabled = true;
		countDownTimer.innerHTML = "EXPIRED!";
	}

})


