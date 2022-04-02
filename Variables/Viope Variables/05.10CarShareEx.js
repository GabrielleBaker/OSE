function calculateCosts() {
	var kilometers = Number(document.getElementById("kilometers").value);
	var consumption = Number(document.getElementById("consumption").value) / 100;
	var price = Number(document.getElementById("price").value);
	var participants = Number(document.getElementById("participants").value);

	var fuelCosts = Number(consumption * price * kilometers / participants).toFixed(2);
	document.getElementById("answerId").innerHTML = "Fuel costs per participant is " 
	+ fuelCosts + " euros.";
		//TODO
}