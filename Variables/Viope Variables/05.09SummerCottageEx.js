function calculateRent() {
		var rentTotal = Number(document.getElementById("rent").value);
		var people = Number(document.getElementById("participants").value);
		var rentPerPerson = Number(rentTotal / people).toFixed(2);

		document.getElementById("answerDiv").innerHTML= "Rent per participants is " 
		+ rentPerPerson + " euros.";
}