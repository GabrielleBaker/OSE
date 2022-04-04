// Define a function (1.) which gets the length of the doctor's visit as a parameter and returns the maximum Kela reimbursement.
function doctorVisit (length){
	const parsed=parseInt(length);
	var kelaReimbursement ;
if(isNaN(parsed)) { return 0; }
	
else if(length > 0 && length <= 10){
	kelaReimbursement = 8;
}
else if(length > 10 && length <= 20){
	kelaReimbursement = 11;
}
else if( length> 20 && length <= 30){
	kelaReimbursement = 13.50
}
else if( length > 30 && length <= 45){
	kelaReimbursement = 16.50;
}
else{
	kelaReimbursement= 21;
}
return kelaReimbursement;
//console.log(kelaReimbursement);
}


// Define a function  
function calculate() {
		// Read values from the input fields
	var lengthOfVisit = Number(document.getElementById("length").value);	
		// Call the function (1.) which calculates and returns Kela reimbursement 
	var visit = doctorVisit(lengthOfVisit);
	document.getElementById("answer").innerHTML = 
	"Length of visit is " + lengthOfVisit	+" minutes. <br>" +"Kela reimbursement is " + visit.toFixed(2) + " euros.";
		// Write the answer on the page, to the answer div, as content of the div
		
}