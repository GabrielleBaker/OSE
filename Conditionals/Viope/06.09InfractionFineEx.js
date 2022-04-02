function tellInfractionFine() {
		var speed = Number(document.getElementById("drivingSpeed").value);
			//speed of driver from input in html
		var limit = Number(document.getElementById("speedLimit").value);
			//speed limit from input html
		var unitFine = "Income-based unit fine.";
			//in the event of speeding more than 20kmh above speed limit
		var infraFine1 = 85;
			//first level fine, if speeding <15kmh in a 10-60 zone
		var infraFine2 = 115;
			//second level fine, if speeding > 15kmh < 20kmh in a 10-60 zone
		var infraFine3 = 70;
			//third level fine, if speeding <15kmh in a 70 -100 zone
		var infraFine4 = 100;
			//fourth level fine, if speeding > 15kmh < 20kmh in a 70 -100 zone
		var infraRate = speed-limit;
			//how many kmh is speeding happening
		var noSpeed = "No speeding, no fine.";
			//in the event of no speeding
		var output;
			//use later
		if (infraRate <= 0){
			//no speeding
			output = noSpeed;
		}
			else if (limit >= 10 && limit <= 60 && speed > limit && (infraRate > 15 && infraRate <= 20)) {
				// if speeding > 15kmh < 20kmh in a 10-60 zone
			output = "Infraction fine is " + infraFine2 + " euros.";
		}
			else if (limit >= 10 && limit <= 60 && speed > limit && infraRate <= 15){
				//if speeding <15kmh in a 10-60 zone
			output = "Infraction fine is " + infraFine1 + " euros.";
		}
			else if (limit >= 70 && limit <= 100 && speed > limit && (infraRate > 15 && infraRate <= 20)){
				//if speeding > 15kmh  in a 70 -100 zone
				output = "Infraction fine is " + infraFine4 + " euros.";
			}
			else if (limit >= 70 && limit <= 100 && speed > limit && infraRate <= 15){
				//if speeding <15kmh in a 70 -100 zone
				output = "Infraction fine is " + infraFine3 + " euros.";
			}
			else{
				//if speeding above 20kmh
				output =unitFine;
			}
		document.getElementById("answer").innerHTML = output;	
}

