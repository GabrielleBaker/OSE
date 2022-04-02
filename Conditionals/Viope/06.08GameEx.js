
function play() {
		// Read value from the input field
	var bet = Number(document.getElementById("bet").value);
	var pips =Math.round( (Math.random( ) * 5) + 1 );
	var pip24 = (bet * 1.25).toFixed(2);
	var pip6 = (bet * 1.50).toFixed(2);
	var output 

		// Calculate win base on pips
		if(pips === 1 || pips ===3 || pips ===5){
			output = "Pips was " + pips + " - no pay";
			// lost if pips is 1 3 5
		}
			else if (pips === 6){
				//if the bet was 6 and pips was an even number player wins their bet amount * pip24 or pip6
				output ="Pips was " + pips + " - Paid back: " + pip6 + " euros.";
			}
			else if (pips === 2 || pips === 4){
				// if bet was 2 or 4 and pips was 
				output = "Pips was " + pips + " - Paid back: " + pip24 + " euros.";
			}
		// Write the answer on the page, to the answer div, as content of the div
	document.getElementById("answer").innerHTML = output;
}
