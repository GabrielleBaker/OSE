function showComparisonScores() {
	var votes = Number(document.getElementById("votes").value);
	var candidates = Number(document.getElementById("candidates").value);
	var output = "";
	for( var candidateNumber = 1; Number(candidateNumber) <= candidates; candidateNumber++){
		var result = votes / candidateNumber;
		output = output + candidateNumber + ". candidate: " + Math.round(result) + "<br>";
	}
		
	document.getElementById("answer").innerHTML = output;
}
