
var names = [];
var index = 0;
var winningIndex = 0;
var winningName = "";
var namesText = "";

function addName() {
		
		names.push(document.getElementById("name").value);
		namesText = "";
		for( i = 0; i < names.length; i++){
			index = index + 1;
			namesText = namesText + " " + names[i] ;
			
		}
		document.getElementById("name").value = '';
		 // clear input field on button click
		 document.getElementById("nameList").innerHTML= "Inserted names: " + namesText ;
	}
	
	function makeDraw() {
		winningIndex = Math.floor(Math.random() * names.length);
		console.log("winningindex is "+ winningIndex);
		winningName = names[winningIndex];
		document.getElementById("answer").innerHTML= "<br>" + "Winner is " + winningName;
		
	}
	