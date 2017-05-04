var timeNow = document.getElementById("time")
var monthNow = document.getElementById("month")

function getTime() {
	var today = new Date();
	var hourNow = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	var month = today.getMonth();
	var day = today.getDay();
	var year = today.getFullYear();

	if (second < 10) {
		second = "0" + second;
	}

	if (minute < 10) {
		minute = "0" + minute;
	}	
	
	var allTime = hourNow + ":" + minute + ":" + second;
	var dateNow = month + " " + day + " " + year;
	
	timeNow.innerHTML = allTime;
	monthNow.innerHTML = dateNow;
}

setInterval(getTime,1000);