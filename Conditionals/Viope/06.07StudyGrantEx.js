function showStudyGrant() {
    var age = Number(document.getElementById("age").value);
		//age variable assigned with input from html
	var parents = document.getElementById("withParents").value;
		//living with parents yes or no var from html input
	var livingAlone = (335.20).toFixed(2);
		//full benefits if living alone
	var livingParents = (136.70).toFixed(2);
		//reduced benefits if living with parents
	var output;
		//assign values later
	if (age >= 20 && parents === "n"){
		output = "The study grant is " + livingAlone + " euros.";
		//stipulations for benefit if living alone and declaring to output var
	}
	else if (age >= 20 && parents === "y"){
			output = "The study grant is " + livingParents + " euros.";
			//stipulations for benefit if living with parents and declaring to outputvar
	}
		else {
			output = "Ask Kela.";
			//in the event of being younger than 20 
		}	
	document.getElementById("answer").innerHTML= output;
}
	