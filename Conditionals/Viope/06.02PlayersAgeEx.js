function checkAge() {
		var age = document.getElementById("age").value;
		//declaring age var and assigning value from age input in html
		var results;
		//declare results variable to use later
		if (Number(age) < 18){
			//if the age is less than accepted results variable gets following value
			results = "Adolescents are not allowed to play.";
		}
			else {
				//otherwise age is acceptable output variable gets following value
				results = "Old enough to play.";
			}
		document.getElementById("answer").innerHTML = results;	
		}
		
		// displaying results to html doc
		