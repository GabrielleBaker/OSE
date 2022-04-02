function calculateSalary(hours, hourlySalary) {
		// calculate salary
	var grossSalary = hours * hourlySalary;
		// return the gross salary with the return statement
	return Number(grossSalary);	
}

function showGrossSalary() {
	var showSalary = calculateSalary(document.getElementById("hours").value,document.getElementById("hourlySalary").value);
	document.getElementById("answer").innerHTML= "Gross salary is " + showSalary.toFixed(2) + " euros.";
	// assign the input field value to the variable hours
		// assign the second input field value to the variable hourlySalary
		// call the calculateSalary function
		// write the answer on the html page
}

