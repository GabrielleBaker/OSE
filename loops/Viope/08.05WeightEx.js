
/*function showWeightGoals() {
	var weight= Number(document.getElementById("weight").value);		
	var weeklyLoss = weight * 0.1 / 7;
	var	outputTxt = "";
	var goalWeight = Number(weight - weight * 0.1);
	
	for ( var weeks = 1; weeks <= 7; weeks++){
		if(weight > goalWeight){
		var weight = Number(weight-weeklyLoss);
		outputTxt = outputTxt + "After " + weeks + " week " + weight.toFixed(1) + "kg" + "<br>";
		}
}
	document.getElementById("answer").innerHTML=outputTxt;
}*/

function showWeightGoals() {
	var weight= Number(document.getElementById("weight").value);		
	var weeklyLoss = weight * 0.1 / 7;
	var	outputTxt = "";
	
	for ( var weeks = 1; weeks <= 7; weeks++){
		weight = weight-weeklyLoss;
		outputTxt = outputTxt + "After " + weeks + ". week " + weight.toFixed(1) + "kg" + "<br>";
		}

	document.getElementById("answer").innerHTML=outputTxt;
}