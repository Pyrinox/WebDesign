// EXERCISE 1
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	// Fill in your code here.
	return a - b;
}

function multiply(a, b) {
	// Fill in your code here.
	return a * b;
}

function divide(a, b){
	// Fill in your code here.
	return a / b;
}

// EXERCISE 2

function helpHamza(timeCommitment) {
	// Fill in the incomplete conditional below.
	if (timeCommitment > 30) {
		return "CS160 Only!";
	} else {
		return "CS160 and CS169!";
	}
}

// EXERCISE 3

function ericsDream() {
	var statement = ""
	for (var i = 0; i < 3; i++) {
		statement += "Eric Liang! "
	}
	return statement;
}

// EXERCISE 4

/*
	Write your function here! Be sure to name it "joyceSax" or else it won't be graded by our auto-grader!
*/

function joyceSax(day) {
	if (day == "Monday") {
		return "It's Monday :(";
	} else if (day == "Wednesday") {
		return "Bass";
	} else if (day == "Saturday") {
		return "Soprano";
	} else {
		return "Alto";
	}
}


// EXERCISE 5

/*
	Write your function here! Be sure to name it "joinNames" or else it won't be graded by our auto-grader!
*/

function joinNames(name1, name2, name3) {
	return name1 + ", " + name2 + ", and " + name3 +".";
}


