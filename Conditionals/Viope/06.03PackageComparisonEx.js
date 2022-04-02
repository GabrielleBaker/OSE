function comparePackages() {
	var allInclusivePackage = Number(29.90).toFixed(2);
		//base number to compare to
	var callMinutes = Number(document.getElementById("callTime").value);
		//minutes in calls from input
	var textMessages = Number(document.getElementById("textMessages").value);
		//text messages from input
	var specialPackageCallCost = 0.069
		// cost per minute of call time on special package
	var specialPackageTextCost = 0.069
		//cost per text message sent on special package
	var specialPackageBaserate = 19.90
		//base cost of special package
	var callCostS = callMinutes * specialPackageCallCost;
		//cost of call minutes input * cost per minute on special package
	var textCostS = textMessages * specialPackageTextCost;
		//number of text messages * cost per txt message sent
	var SpecialPackageCost = Number(specialPackageBaserate + callCostS + textCostS).toFixed(2); 
		// calculate total cost of taking special package
	if (SpecialPackageCost < allInclusivePackage) {
		//in the event of special package being more effective
		var Output = "The Special package (" + SpecialPackageCost + ") is cheaper than the All-inclusive package (" + allInclusivePackage + ")";
	}	
		else{
			//in the event of all inclusive being more effective
		var Output = "The All-inclusive package (" + allInclusivePackage + ") is cheaper than the Special package (" + SpecialPackageCost + ")";	
		}
	
		document.getElementById("answer").innerHTML = Output;
}		//deliver results to HTML