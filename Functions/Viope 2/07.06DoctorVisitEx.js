// this function gets the length of the visit to determine max reimbursion from Kela 
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
return Number(kelaReimbursement);
}
// this function calculates what is to be paid by the customer, drs fee - kela reimbursement + office fee
function customersBill (fee, reimbursement){
	var officeFee = 15.90;
	var toPay = fee - reimbursement + officeFee;
	return toPay;
}	
	
// Define a function (3.) 
function calculate() {
	//lengthofvisit gets the input field from user
var lengthOfVisit = Number(document.getElementById("length").value);	
	//doctors fee gets input
var doctorFee = Number(document.getElementById("doctorsFee").value);
 //officefee is fixed
var officeFee = 15.90;
//visit returns the kela reimbursement based on the length of the drs visit
var visit = doctorVisit(lengthOfVisit);
//bills determines the bill for customer to pay
var bills = customersBill(doctorFee,visit);

document.getElementById("answer").innerHTML = 
"Doctor's fee is " + doctorFee.toFixed(2)	+ " euros. <br>" + 
"Kela reimbursement is " + visit.toFixed(2) + " euros. <br>" +
"Office fee is " + officeFee.toFixed(2) + " euros. <br>" +
 "Customer needs to pay " + bills.toFixed(2) + " euros.";
}