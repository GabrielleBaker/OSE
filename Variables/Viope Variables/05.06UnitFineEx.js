function calculateUnitFine() {
        // Read the value from the input field into a variable
		  var income = Number(document.getElementById("txtNetIncome").value);
		  var fine = (Number(income -255 )/60).toFixed(2);

		  document.getElementById("answerDiv").innerHTML= "Unit fine is " + fine + " euros.";

		// Calculate the unit fine and assign the result into another variable
		

		// Write the answer to the web page DOM, in the answer div, as the content
		
}