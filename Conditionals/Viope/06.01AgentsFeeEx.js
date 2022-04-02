function calculateFee() {
	
	var salesPrice = document.getElementById("price").value; 
		//declare salesprice and assign value from input field in HTML doc

	var Agentfee = Number(salesPrice) * .0344;
		//calculate fee for agents work

	if (Agentfee < 2400){
			//in event of fee being too low 
			Agentfee = 2400;
	}
		else {
			//in the event of fee being acceptable
			Agentfee = Agentfee.toFixed(2);
	}
	// display output on HTML doc
	document.getElementById("fee").innerHTML = "Real estate agent's fee is " + Agentfee + " euros.";			
}